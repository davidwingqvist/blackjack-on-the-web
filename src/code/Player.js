import './Player.css'
import Card from './Card';
import React, {useEffect, useState} from 'react';
import House from './House'

export default function Player(props)
{
    const [cardsArray, handleCards] = useState([]);
    const [sum, setSum] = useState(0);
    const [isOver, handleOver] = useState(false);
    let t = 0;

    function AddCard() 
    {
        return Math.floor((Math.random() * 11) + 1);
    }

    // Update the sum for each time the a new card is drawn.
    useEffect(() => {
        setSum(sum => {
            sum = 0
                cardsArray.forEach(card => {
                    sum += card;
                })
                return sum
            })
    }, [cardsArray])

    return (
            <div>
            <div className='GameButtonArea'>
            <div onClick={() => {
                if(!isOver)
                {
                handleCards(
                    [...cardsArray, AddCard()]
                    )
                }

            }} className='GameButton'>Draw Card
            </div>
            <div className='GameButton' onClick={() => {
                handleOver(isOver => {return isOver = true})
            }}>
                Call
            </div>
            </div>
            <text className='HandTotalText'>
                Hand Total: {sum}
            </text>
            
            <div className='PlayerHandArea'>

            { 
                cardsArray.map(card => (
                    <Card number={card}/>
                ))
            }
            </div>
            <House playerSum={sum} isOver={isOver}/>
            </div>
            );
}