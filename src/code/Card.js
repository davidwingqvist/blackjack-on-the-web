import './Card.css'

export default function Card(props)
{
    // Simply display the number of the card in a neat manner
    return (
        <div className='Card'>
            <text className='CardText'>{props.number}</text>
        </div>
    )
}