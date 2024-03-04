import React from 'react';
import './trendCard.css';
 
import {TrendData} from '../data/TrendData';

console.log();
const TrendCard = () => {
  return (
    <div className="TrendCard">
      <h3>Trends for you</h3>
      {TrendData.map((trend)=>{
        // console.log(trend);
        return(
          <div className="trend">
            <span>#{trend.name}</span>
            <span>{trend.shares}k shares</span>
          </div>
        )
      })}
    </div>
  )
}

export default TrendCard;