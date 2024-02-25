import './Player.css'
import Card from './Card';
import React, {useState} from 'react';

export default function Player(props)
{
    const [cardsArray, handleCards] = useState([]);
    let sum = 0;

    function AddCard() 
    {
        return Math.floor((Math.random() * 11) + 1);
    }

    function CheckHand()
    {
    }


    return (
            <div>
            <button onClick={() => {
                handleCards(
                    [...cardsArray, AddCard()]
                    )
            }}>Draw Card
            </button>
            <div className='PlayerHandArea'>

            { 
                cardsArray.map(card => (
                    <Card number={card}/>
                ))
            }
            </div>
            </div>
            );
}