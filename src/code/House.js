import React, {useEffect, useMemo, useState} from 'react';
import Card from './Card';
import './House.css'

export default function House(props)
{
    const { playerSum, isOver } = props;
    const [cardsArray, handleHouseCards] = useState([]);
    const [houseSum, setHouseSum] = useState(0);


    function AddHouseCard()
    {
        return Math.floor((Math.random() * 11) + 1);
    }

    useEffect(() => {
        // statement to avoid it running twice on start.
        if(playerSum != 0 && playerSum != undefined && houseSum < 21)
            handleHouseCards([...cardsArray, AddHouseCard()]);
    }, [playerSum])

    useEffect(() => {
        setHouseSum(sum => {
                sum = 0
                cardsArray.forEach(card => {
                    sum += card;
                })
                return sum
            })
    }, [cardsArray])

    return (
        <div>

        <text>
            {houseSum}
        </text>

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