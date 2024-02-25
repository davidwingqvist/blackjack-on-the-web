import React, {useEffect, useMemo, useState} from 'react';
import Card from './Card';

export default function House(props)
{
    const { playerSum, isOver } = props;
    const [cardsArray, handleCards] = useState([]);
    const [sum, setSum] = useState(0);

    // Update based update of Call button press
    useMemo(() => PlayHouseTurn(), [isOver]);


    function AddCard() 
    {
        return Math.floor((Math.random() * 11) + 1);
    }

    function PlayHouseTurn()
    {
        if(isOver)
        {
            handleCards([...cardsArray, AddCard()])
        }
    }

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

        <div className='HouseCardArea'>
        {
            cardsArray.map(card => (
                <Card number={card}/>
            ))
        }
        </div>

        </div>
    )
}