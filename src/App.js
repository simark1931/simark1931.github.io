import './App.css';
import React, {useRef, forwardRef} from 'react';
import {useState} from 'react';
import DrumPad from './components/DrumPads';
import {nanoid} from 'nanoid';

function App(props) {
  
  const refQ = useRef(null);
  const refW = useRef(null);
  const refE = useRef(null);
  const refA = useRef(null);
  const refS = useRef(null);
  const refD = useRef(null);
  const refZ = useRef(null);
  const refX = useRef(null);
  const refC = useRef(null);

  const DRUM_PADS = [
    { letter: "Q", 
      id: "Heater 1", 

      ref: refQ,
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
      { letter: "W", 
      id: "Heater 2", 
      ref: refW,
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},
      { letter: "E", 
      id: "Heater 3", 
      ref: refE,
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},
      { letter: "A", 
      id: "Heater 4", 
      ref: refA,
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},
      { letter: "S", 
      id: "Clap", 
      ref: refS,
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},
      { letter: "D", 
      id: "Open-HH", 
      ref: refD,
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},
      { letter: "Z", 
      id: "Kick-n'-Hat", 
      ref: refZ,
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},
      { letter: "X", 
      id: "Kick", 
      ref: refX,
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},
      { letter: "C", 
      id: "Closed-HH", 
      ref: refC,
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"},
  ];
  const [display, setDisplay] = useState("Hello");
  const drumPads = DRUM_PADS.map((pad) => {
    return (
      <div>
      <DrumPad id={pad.id} 
        innerText={pad.letter} 
        src={pad.src} 
        setDisplay={setDisplay}
        ref={pad.ref}
       />        
      </div>
      )});
  /*const audioPads = DRUM_PADS.map((pad) => {
    return (
      <audio ref={pad.ref}
        src={pad.src}
        setDisplay={pad.id} />
    )
  });*/
  function handleKeyDown(e) {
    console.log(e.key);
    const searchKey = e.key.toUpperCase();
    console.log(searchKey);
    /*const action = DRUM_PADS
      .filter(pad => pad.letter === searchKey)
      .map((pad) => { 
        return (
        { id , src }
        )});
      console.log(action);*/
    switch(searchKey) {
      case "Q":
        refQ.current.play();
        setDisplay("Heater 1");
        break;
      case "W":
        refW.current.play();
        setDisplay("Heater 2");
        break;
      case "E":
        refE.current.play();
        setDisplay("Heater 3");
        break;
      case "A":
        refA.current.play();
        setDisplay("Heater 4");
        break;
      case "S":
        refS.current.play();
        setDisplay("Clap");
        break;
      case "D":
        refD.current.play();
        setDisplay("Open-HH");
        break;
      case "Z":
        refZ.current.play();
        setDisplay("Kick-'n-Hat");
        break;
      case "X":
        refX.current.play();
        setDisplay("Kick");
        break;
      case "C":
        refC.current.play();
        setDisplay("Closed-HH");
        break;
      default:
        break;
    };
    
  };
  return (
    <div className="App" onKeyDown={handleKeyDown} contentEditable={true}>
      <div className="drum-machine" id="drum-machine" contentEditable={false}>
        <p>Drum-Matic 5000</p>
        <div id="display">
          {display}
        </div>
        <div className="pads">
          {drumPads}
        </div>
      </div>
    </div>
  );
};

export default App;
