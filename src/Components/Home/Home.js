import './Homes.css';
import Question from "../Question/Question.js";
import lesQuestion from "../lesQuestion.js";
import billet from "../../Picture/billet.png";
import { useState, useEffect } from 'react';


function Home() {

    const [mise, setMise] = useState(2000)

    const [result, setResult] = useState(false)

    const question = lesQuestion

    const [actifblock, setActif] = useState([])

    useEffect(() => {
        setActif(0)
    }, [])

    return (
        <>
            <div className={result ? "None" : "Home"}>
                {
                    question.map((q, index) => (
                        <div className={actifblock == index ? "question" : "none"}>
                            <Question question={q} param={index} setMise={setMise} mise={mise}/>
                        </div>
                    ))
                }
                <div>
                </div>
                <div className="VotreMain">Votre main : {mise} MYD</div>
            </div>
        </>
    );

}

export default Home;