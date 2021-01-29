import React from 'react';
import './RoundSliderMobile.css';
import { useSwipeable } from 'react-swipeable';
import hand from "../images/task1/hand.png";

function RoundSliderMobile(props) {
    const [childrenNumber, setChildrenNumber] = React.useState(0);
    const [rotateDegrees, setRotateDegrees] = React.useState(0);
    const [swiping, setSwiping] = React.useState(false);

    const handlers = useSwipeable({
        onSwipedLeft: (() => {
            if (childrenNumber === 0) {
                setChildrenNumber(props.children.length - 1)
            }
            else {
                setChildrenNumber(childrenNumber - 1);
            }
            setRotateDegrees(rotateDegrees - 60);
        }),
        onSwipedRight: (() => {
            if (childrenNumber === props.children.length - 1) {
                setChildrenNumber(0);
            }
            else {
                setChildrenNumber(childrenNumber + 1);
            }
            setRotateDegrees(rotateDegrees + 60);
        }),
        onSwiping: () => setSwiping(true),
        onSwiped: () => setTimeout(() => setSwiping(false), 1000),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });


    return (
        <div {...handlers} className="round-slider-mobile">
            {props.children[childrenNumber]}
            <div style={{ transform: `rotate(${rotateDegrees}deg)` }} className="round-slider-mobile__hexagon" />
            <img className={`round-slider-mobile__tip ${swiping ? 'round-slider-mobile__tip_hidden' : ''}`} src={hand} alt="Свайп" />
        </div>
    );
}

export default RoundSliderMobile;