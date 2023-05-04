import './Homes.css';
import Question from "../Question/Question.js"
import lesQuestion from "../lesQuestion.js"
import { useState, useEffect } from 'react';


function Home() {

    const [mise, setMise] = useState(2000)

    const question = lesQuestion

    const questionSuivante = () => {
        setActif(actifblock+1)
        document.getElementsByClassName('button')[0].disabled = true;
    }

    const [actifblock, setActif] = useState([])

    useEffect(() => {
        setActif(0)
    }, [])

    return (
        <>
            <div className="Home">
                <h1 className="GameName">Money Drop</h1>
                {
                    question.map((q, index) => (
                        <div className={actifblock == index ? "question" : "none"}>
                            <Question question={q} param={index} setMise={setMise} mise={mise} questionSuivante={questionSuivante}/>
                        </div>
                    ))
                }
                <div className="VotreMain">Votre main : {mise} MYD</div>
                <button disabled="disabled" className='button'>Suivant</button>
            </div>
        </>
    );

}

export default Home;