import { Link } from 'react-router-dom'
import { toCapitalaze } from '../../helpers/func'
import './PlayerListed.css'

export default function PlayerListed({ user }) {
  return (
      <Link to={`/user/${user.id}`} className='w-full PlayerListed flex justify-center items-center hover:bg-[#101010] rounded-md cursor-pointer transition-all duration-150 px-8'>
        <img className='playerImg w-14 h-14' src="/img/profile.png" alt="player" />
        <div className='w-full playerNameNTeam'>
          <p className='w-max inline-block text-ellipsis'>{toCapitalaze(user.username)}</p>
          <div className='w-full team'>
              <p>{user.team.teamname}</p>
          </div>
        </div>
        <div className='playerPlaceNPoints'>
          <p className=''>{user.place}º</p>
          <div className='points'>
            <p className=''>{user.points} PTS</p>
          </div>
        </div>
      </Link>
  )
}