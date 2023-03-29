import React, {useRef, forwardRef} from 'react';
import { nanoid } from 'nanoid';

const DrumPad = forwardRef((props, ref) => {
    /*const ref = useRef(null);*/
    function clickHandler(e) {
        ref.current.play(e);
        props.setDisplay(e.target.id)
    };
    return (
        <button className="drum-pad" 
        onClick={clickHandler}
        id={props.id}
        key={`pad-${nanoid()}`}
        >

            <audio className="clip" 
            ref={ref}
            id={props.innerText} 
            src={props.src}
            onClick={clickHandler}
            />
        {props.innerText}            
        </button>
    );
});

export default DrumPad;