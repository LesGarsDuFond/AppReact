import './Question.css';
import { useState, useEffect, useRef } from 'react';
import billet from "../../Picture/billet.png";


function Question(props) {

    const [vraimise, setvraimise] = useState(props.mise)

    const [seconds, setSeconds] = useState(45);
    const [data, setData] = useState(-1)
    const [dataLeft, setdataLeft] = useState(-1)
    const [dataLeftCenter, setdataLeftCenter] = useState(-1)
    const [dataRightCenter, setdataRightCenter] = useState(-1)
    const [dataRight, setdataRight] = useState(-1)
    const [MiseLeft, setMiseLeft] = useState(0)
    const [MiseLeftCenter, setMiseLeftCenter] = useState(0)
    const [MiseRightCenter, setMiseRightCenter] = useState(0)
    const [MiseRight, setMiseRight] = useState(0)

    const misez = [
        MiseLeft,
        MiseLeftCenter,
        MiseRightCenter,
        MiseRight
    ]


    useEffect(() => {
        let interval = null;
        if (seconds > 0) {
            interval = setInterval(() => {
                setSeconds(seconds - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [seconds]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time - minutes * 60;
        return `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`;
    };

    const [isMoving, setIsMoving] = useState(false);
    const imageRef = [useRef(0), useRef(1), useRef(2), useRef(3), useRef(4), useRef(5), useRef(6), useRef(7), useRef(8), useRef(9)]


    const Tab = [
        [
            {
                X: -20,
                Y: -10,
                DEG: -16
            },
            {
                X: 0,
                Y: 0,
                DEG: 0
            },
        ],
        [
            {
                X: -3,
                Y: -18,
                DEG: -6
            },
            {
                X: 0,
                Y: 0,
                DEG: 0
            },
        ],
        [
            {
                X: 12,
                Y: -20,
                DEG: 6
            },
            {
                X: 0,
                Y: 0,
                DEG: 0
            },
        ],
        [
            {
                X: 30,
                Y: -14,
                DEG: 16
            },
            {
                X: 0,
                Y: 0,
                DEG: 0
            },
        ],
    ];

    function handleButtonClick(x, y) {
        if (y == 1) {
            setData(data - 1)
            setvraimise(vraimise - 200)
            var vu;
            if (x == 0) {
                setdataLeft(dataLeft - 1)
                setMiseLeft(MiseLeft - 200)
                vu = dataLeft
            }
            if (x == 1) {
                setdataLeftCenter(dataLeftCenter - 1)
                setMiseLeftCenter(MiseLeftCenter - 200)
                vu = dataLeftCenter
            }
            if (x == 2) {
                setdataRightCenter(dataRightCenter - 1)
                setMiseRightCenter(MiseRightCenter - 200)
                vu = dataRightCenter
            }
            if (x == 3) {
                setdataRight(dataRight - 1)
                setMiseRight(MiseRight - 200)
                vu = dataRight
            }
            const image = imageRef[vu + 1].current;
            setIsMoving(true);
            image.style.transform = `translate(${Tab[x][y].X}vw, ${Tab[x][y].Y}vh) rotate(${Tab[x][y].DEG}deg)`;
        }
        else {
            setData(data + 1)
            setvraimise(vraimise + 200)
            var vu = 0;
            if (x == 0) {
                setdataLeft(data + 1)
                setMiseLeft(MiseLeft + 200)
                vu = data + 1
            }
            if (x == 1) {
                setdataLeftCenter(data + 1)
                setMiseLeftCenter(MiseLeftCenter + 200)
                vu = data + 1
            }
            if (x == 2) {
                setdataRightCenter(data + 1)
                setMiseRightCenter(MiseRightCenter + 200)
                vu = data + 1
            }
            if (x == 3) {
                setdataRight(data + 1)
                setMiseRight(MiseRight + 200)
                vu = data + 1
            }
            const image = imageRef[vu + 1].current;
            setIsMoving(true);
            image.style.transform = `translate(${Tab[x][y].X}vw, ${Tab[x][y].Y}vh) rotate(${Tab[x][y].DEG}deg)`;
        }
    }

    const AllIn = (x, y) => {
        setData(8)
        setvraimise(0)
        if (x == 0) {
            setdataLeft(8)
            setMiseLeft(MiseLeft + vraimise)
        }
        if (x == 1) {
            setdataLeftCenter(8)
            setMiseLeftCenter(MiseLeftCenter + vraimise)
        }
        if (x == 2) {
            setdataRightCenter(8)
            setMiseRightCenter(MiseRightCenter + vraimise)
        }
        if (x == 3) {
            setdataRight(8)
            setMiseRight(MiseRight + vraimise)
        }
        setIsMoving(true);
        for(let u = 0; u < 10; u++)
        {
            const image = imageRef[u].current;
            image.style.transform = `translate(${Tab[x][y].X}vw, ${Tab[x][y].Y}vh) rotate(${Tab[x][y].DEG}deg)`;
        }
    };

    

    return (
        <>
            <h1>{props.question.question}</h1>
            <div className='form'>
                {
                    props.question.options.map((index, i) => (
                        <div className="questionrep">
                            <input className={"response reponse" + i + "" + props.param} value={index} />
                            <input className={"input " + props.param + "mise" + i} value={misez[i]} />
                            <div className="lesBtn">
                                <button className={misez[i] == 0 ? "moins disabled" : "moins"} onClick={() => handleButtonClick(i, 1)}>-</button>
                                <button className={misez[i] != 0 ? "allin disabled" : "allin"} onClick={() => AllIn(i, 0)}>all in</button>
                                <button className={misez[0]+misez[1]+misez[2]+misez[3] == 2000 ? "plus disabled" : "plus"} onClick={() => handleButtonClick(i, 0)}>+</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            {(() => {
                const options = [];

                for (let i = 0; i < 10; i++) {
                    options.push(<img ref={imageRef[i]} src={billet} alt="Le billet" className={`imgBillet ${isMoving ? "isMoving" : ""}`} />);
                }

                return options;
            })()}
            <div>
                {seconds > 0 ? (
                    <div className="timer">{formatTime(seconds)}</div>
                ) : (
                    <div className="timer">Temps écoulé</div>
                )}
            </div>
            
        </>
    );

}

export default Question;