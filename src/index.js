import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const DRUM_PADS = [
  { letter: "Q", 
    id: "Heater 1", 
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
    { letter: "W", 
    id: "Heater 2", 
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},
    { letter: "E", 
    id: "Heater 3", 
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},
    { letter: "A", 
    id: "Heater 4", 
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},
    { letter: "S", 
    id: "Clap", 
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},
    { letter: "D", 
    id: "Open-HH", 
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},
    { letter: "Z", 
    id: "Kick-n'-Hat", 
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},
    { letter: "X", 
    id: "Kick", 
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},
    { letter: "C", 
    id: "Closed-HH", 
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App drumPads={DRUM_PADS} />
  </React.StrictMode>
);


