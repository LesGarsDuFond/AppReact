import './Question.css';
import { useState } from 'react';

function Question(props) {

    const [votremain, setvotremain] = useState([props.mise])

    const [vraimise, setvraimise] = useState(0)

    const [disabled, setDisabled] = useState(true)

    const [color, setColor] = useState(["white", "white", "white", "white"])

    const lesRep = [
        props.question.options[0],
        props.question.options[1],
        props.question.options[2],
        props.question.options[3]
    ]

    const validmise = (event) => {
        var tbColor = []
        for(let y = 0; y < props.question.options.length; y++)
        {
            var id = props.param+"mise"+y
            if(lesRep[y] == props.question.answer)
            {
                tbColor.push("green")
            }
            else
            {
                tbColor.push("red")
            }
        }
        setColor(tbColor)
        setvotremain(vraimise)
        props.setMise(vraimise)
        props.setDisabledbtn(false)
    }

    const verifMise = (event) => {
        var nbMise = 0;
        var resteMise = 0;
        
        if(event.target.value != "")
        {
            for(let y = 0; y < props.question.options.length; y++)
            {
                if(lesRep[y] == props.question.answer)
                {
                    setvraimise(event.target.value)
                }
            }
            nbMise++
            resteMise = resteMise + parseFloat(event.target.value)
        }
        
        if(nbMise > 0 && props.mise - resteMise == 0)
        {
            setDisabled(false)
        }
        else
        {
            setDisabled(true)
        }
    }

    return (
        <>
            <h1>{props.question.question}</h1>
            <div className='form'>
                {
                    props.question.options.map((index, i) => (
                        <div>
                            <input className={color[i] == "white" ? "response reponse"+i+""+props.param : color[i] == "red" ? "response red" : "response green"} value={index}/>
                            <input onChange={verifMise} className={"input " + props.param+"mise"+i} placeholder="Entrez votre mise"/>
                        </div>
                    ))
                }
            </div>
            {/* <button onClick={validmise} disabled={disabled} className={"valid valider"+props.param}>Valider mes mises</button> */}
        </>
    );

}

export default Question;