import './Board.css'
import House from './House'
import Player from './Player';

export default function Board()
{
    return (
        <div className='BoardArea'>
            <Player />
        </div>
    )
}