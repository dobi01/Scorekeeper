import React from 'react';
import './Player.css';

const Player = (props) => (
  <li className="Player">
    <span className="Player__name">{props.name}</span>
    <span className="Player__score">{props.score}</span>
    <span className="Player__button plus" onClick = {() => props.onPlayerScoreChange(1)}>+</span>
    <span className="Player__button minus" onClick = {() => props.onPlayerScoreChange(-1)}>-</span>
  </li>
);

export default Player;