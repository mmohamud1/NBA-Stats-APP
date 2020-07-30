import React from 'react'
import style from './css/playerInfo.module.css'

const PlayerInfo = ({ first, last, position, heightF, heightI, weight, team, playerId, getStats}) => {
  
    const onClick = () => {
        getStats(playerId);       
    }

    return (
        <div>
            <h1 className="heading">'19 - '20 season averages</h1>
            <div className={style.flex}>
                <div>
                    <h2 className={style.playername}>{first} {last}</h2>
                    <p className={style.playerinfo}>Position: {position} | Height: {heightF}"{heightI} | Weight: {weight}lbs | Team: {team}</p>
                </div>
                <p className={style.btn} onClick={onClick}>Get Stats &darr;</p> 
            </div>
        </div>
    )
}

export default PlayerInfo
