import './Resultat.css';
import { useEffect } from 'react';


function Resultat(props) {

    useEffect(() => {
        // setActif(0)
    }, [])

    return (
        <>
            <p>Vous avez finis les questions, il vous reste {props.result} MYD</p>
        </>
    );

}

export default Resultat;