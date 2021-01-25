import './Connection.css';
import {useState} from 'react';
import {useSpring, animated, config} from "react-spring";

export default function Connection() {

    const [connected, changeConnected] = useState(true);
    const [connectonProp, setConnectionProp] = useSpring(() => {
        return {
            bottom: '-100px',
            delay: 1000,
            config: config.wobbly
        }
    });

    setInterval(() => {
        changeConnected(!connected);

        setConnectionProp({bottom: connected ? '20px' : '-100px'})
    }, 5000);

    return (
        <animated.div style={connectonProp} className="connection-container">
            connecting ...
            <Spinner />
        </animated.div>
    )
}



function Spinner() {
    return (
        <div className="spinner">
            <div className="rect1"/>
            <div className="rect2"/>
            <div className="rect3"/>
            <div className="rect4"/>
            <div className="rect5"/>
        </div>
    )
}
