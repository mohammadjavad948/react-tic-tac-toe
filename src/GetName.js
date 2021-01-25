import './GetName.css';
import {useState} from 'react';
import {animated, useSpring} from "react-spring";

export default function GetName({setPage}) {
    const [isLoading, changeLoading] = useState(false);
    const [username, changeUsername] = useState('');

    const welcomeProp = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 500
    });

    const [componentProp, setProp] = useSpring(() => {
        return {
            opacity: 1,
            onRest(ds) {
                if (ds.opacity) return null;

                setPage(2)
            }
        }
    });

    function submitName(){
        changeLoading(true);

        setTimeout(() => {
            setProp({opacity: 0});
        }, 5000);
    }

    return (
        <animated.div style={componentProp} className="container">
            <animated.span className="text" style={welcomeProp}>welcome to tic tac toe {username}!</animated.span>
            <input
                type="text"
                className="input"
                placeholder="your name"
                onChange={(e) => changeUsername(e.target.value)}
            />

            <button
                className="button"
                onClick={submitName}
                disabled={isLoading}
            >
                {isLoading ? <Spinner /> : <span>lets go!</span>}
            </button>
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
