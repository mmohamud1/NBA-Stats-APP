import React from 'react';

function PlayerStats({ gamesPlayed, mins, fieldGoalPct, freeThrowpPct, threePtPct, rebounds, turnover, assist, steals, blocks, points}) {
    return (
        <div>  
            <table class="customTable">
                <thead>
                    <tr>
                    <th>Games</th>
                    <th>Minutes</th>
                    <th>Field Goal %</th>
                    <th>Free Throw %</th>
                    <th>Three Point %</th>
                    <th>Rebounds</th>
                    <th>Turnovers</th>
                    <th>Assists</th>
                    <th>Steals</th>
                    <th>Blocks</th>
                    <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{gamesPlayed}</td>
                    <td>{mins}</td>
                    <td>{fieldGoalPct}</td>
                    <td>{freeThrowpPct}</td>
                    <td>{threePtPct}</td>
                    <td>{rebounds}</td>
                    <td>{turnover}</td>
                    <td>{assist}</td>
                    <td>{steals}</td>
                    <td>{blocks}</td>
                    <td>{points}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PlayerStats
