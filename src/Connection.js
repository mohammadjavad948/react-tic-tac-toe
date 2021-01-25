import './Connection.css';
import {useState} from 'react';
import {useSpring, animated, config} from "react-spring";

export default function Connection() {

    const [connected, changeConnected] = useState(false);
    const [connectonProp, setConnectionProp] = useSpring(() => {
        return {
            bottom: '20px',
            delay: 1000,
            config: config.wobbly
        }
    });

    setConnectionProp({bottom: connected ? '-100px' : '20px'})

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
