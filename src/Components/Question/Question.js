import './Question.css';
import { useState, useEffect } from 'react';

function Question(props) {

    const [votremain, setvotremain] = useState([props.mise])

    const validmise = () => {
        var vraimise = 0
        for(let y = 0; y < props.question.options.length; y++)
        {
            var id = props.param+"mise"+y
            var idrep = "reponse"+y+""+props.param
            if(document.getElementsByClassName(idrep)[0].value == props.question.answer)
            {
                vraimise += parseFloat(document.getElementsByClassName(id)[0].value)
                document.getElementsByClassName(idrep)[0].style.backgroundColor = "green"
            }
            else
            {
                document.getElementsByClassName(idrep)[0].style.backgroundColor = "red"
            }
        }
        setvotremain(vraimise)
        props.setMise(vraimise)
        document.getElementsByClassName('button')[0].disabled = false;
        document.getElementsByClassName('button')[0].addEventListener("click", props.questionSuivante);
    }

    const verifMise = () => {
        var nbMise = 0;
        var resteMise = 0;
        for(let y = 0; y < props.question.options.length; y++)
        {
            var id = props.param+"mise"+y
            if(document.getElementsByClassName(id)[0].value != "")
            {
                nbMise++
                resteMise = resteMise + parseFloat(document.getElementsByClassName(id)[0].value)
            }
        }
        
        if(nbMise > 0 && props.mise - resteMise == 0)
        {
            document.getElementsByClassName("valider"+props.param)[0].disabled = false;
            document.getElementsByClassName("valider"+props.param)[0].addEventListener("click", validmise);
        }
        else
        {
            document.getElementsByClassName("valider"+props.param)[0].disabled = true;
        }
    }

    // useEffect(() => {
    //     document.getElementsByClassName('button')[0].disabled = true;
    // },)

    return (
        <>
            <h1>{props.question.question}</h1>
            <div className='form'>
                {
                    props.question.options.map((index, i) => (
                        <div>
                            <input className={"response reponse"+i+""+props.param} value={index}/>
                            <input onChange={() => verifMise()} className={props.param+"mise"+i} placeholder="Entrez votre mise"/>
                        </div>
                    ))
                }
            </div>
            <button disabled="disabled" className={"valid valider"+props.param}>Valider mes mises</button>
        </>
    );

}

export default Question;