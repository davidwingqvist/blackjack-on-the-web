import React, {useEffect, useMemo, useState} from 'react';
import Card from './Card';
import './House.css'

export default function House(props)
{
    const { playerSum, isOver, isRestart } = props;
    const [cardsArray, handleHouseCards] = useState([]);
    const [houseSum, setHouseSum] = useState(0);
    const [stopDraw, handleStopDraw] = useState(false); 


    function AddHouseCard()
    {
        return Math.floor((Math.random() * 11) + 1);
    }

    useEffect(() => {
        // statement to avoid it running twice on start.
        if(playerSum != 0 && playerSum != undefined && houseSum < 21)
        {
            handleHouseCards([...cardsArray, AddHouseCard()]);
        }
    }, [playerSum])

    useEffect(() => {
        console.log(isOver)
        if(isOver && (houseSum < 18))
        {
            let t = [];
            let over = houseSum;
            while(over <= playerSum)
            {
                let newCard = AddHouseCard();
                t.push(newCard);
                over += newCard;
            }
            handleHouseCards([...cardsArray, ...t])
        }
    }, [isOver])

    useEffect(() => {
        setHouseSum(sum => {
                sum = 0
                cardsArray.forEach(card => {
                    sum += card;
                })

                if(sum < 21 && sum > 17)
                {
                    handleStopDraw(s => s = true);
                }

                return sum
            })
    }, [cardsArray])

    useEffect(() => {
        handleHouseCards(() => []);
    }, [isRestart])

    return (
        <div>

        <text className='HouseHandValueText'>
            House Total: {houseSum}
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