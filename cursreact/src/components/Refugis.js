import React from 'react';
import { useParams } from 'react-router-dom';

function Refugis(){
   const nombres = [1, 2, 3, 4, 5];
   const ListRefus = nombres.map((nombre) => 
    <li><a href={`/refugis/${nombre}`}>Refugi {`${nombre}`}</a></li>
   );

    //Guardem en el console log els parametres que rebem
    console.log("useParams", useParams());
    const { id } = useParams();
    return (
        <>
        <h1>Llista de refugis</h1>
        <ul>
            {ListRefus}
        </ul>
        <h2>El refugi seleccionat és { id }</h2>
        </>
    )
}

export default Refugis;