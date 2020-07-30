import React, { useState }  from 'react';
import './css/App.css';
import Search from './Search';
import PlayerInfo from './PlayerInfo';
import PlayerStats from './PlayerStats'
import axios from 'axios';


const App = () => {
  const [player, setPlayer] = useState([]);
  const [playerId, setPlayerId] =useState('');
  const [stats, setStats] = useState([]);
  
  // Get players by name 
  const getPlayers = async (input) => {

    const res = await axios.get(`https://www.balldontlie.io/api/v1/players?search=${input}`);
    //console.log(res.data.data);
    setPlayer(res.data.data);
  };

  
  // get playerID 
  const getPlayerId = async (input) => {

    const res = await axios.get(`https://www.balldontlie.io/api/v1/players?search=${input}`);
    //console.log(res.data.data[0].id);
    setPlayerId(res.data.data[0].id);
  };
  
  
  // get player stats by ID 
  const getStats = async (playerId) => {
    
    const res = await axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=${playerId}`);
    //console.log(res.data.data);
    setStats(res.data.data)
    
  };
  


  return (
    <div className="App">
      <Search getPlayers={getPlayers} getPlayerId={getPlayerId} getStats={getStats}/>
      <div className="results">
        <div className="info">
          {player.map(info => (
            <PlayerInfo  key ={info.first_name + info.last_name} first={info.first_name} last={info.last_name} position={info.position} heightF={info.height_feet} heightI={info.height_inches} weight={info.weight_pounds} team={info.team.abbreviation} playerId={playerId} getStats={getStats}/>
          ))}
          {stats.map(stat => (
            <PlayerStats key={Math.round(stat.player_id)} gamesPlayed={Math.round(stat.games_played)} mins={stat.min} fieldGoalPct={Math.round(stat.fg_pct*100)} freeThrowpPct={Math.round(stat.ft_pct*100)} threePtPct={Math.round(stat.fg3_pct*100)} rebounds={Math.round(stat.dreb)} turnover={Math.round(stat.turnover)} assist={Math.round(stat.ast)} steals={Math.round(stat.stl)} blocks={Math.round(stat.blk)} points={Math.round(stat.pts)}/>
          ))}
        </div>
      </div>
    </div>

  );
  
}

export default App;
