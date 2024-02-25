import './Card.css'

export default function Card(props)
{
    return (
        <div className='Card'>
            <text className='CardText'>{props.number}</text>
        </div>
    )
}