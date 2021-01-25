import './Rooms.css';
import {animated, useSpring} from 'react-spring';
import {useEffect} from 'react';

export default function Rooms({setPage}){
    const [componentProp, setComponent] = useSpring(() => {
        return {
            opacity: 1
        }
    });

    useEffect(() => {
       setTimeout(() => {
           setComponent({opacity: 1});
       }, 500)

        return () => setComponent({opacity: 0})
    }, []);

    function joinClick() {
        setPage(3);
    }

    return (
        <animated.div style={componentProp} className="room-container">
            <JoinRoom joinClick={joinClick}/>
        </animated.div>
    )
}

function JoinRoom({joinClick}) {

    function captureEnter(event: KeyboardEvent) {
        if (event.key !== 'Enter') return null;

        joinClick();
    }

    return (
        <div className="join-room">
            <input type="text" className="input" placeholder="room name" onKeyPress={captureEnter}/>
            <button className="button" onClick={() => joinClick()}>join</button>
        </div>

    )
}
