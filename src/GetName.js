import './GetName.css';
import {useState} from 'react';

export default function GetName({done}) {
    const [isLoading, changeLoading] = useState(false);
    const [username, changeUsername] = useState('');

    return (
        <div className="container">
            <span className="text">welcome to tic tac toe {username}!</span>
            <input
                type="text"
                className="input"
                placeholder="your name"
                onChange={(e) => changeUsername(", " + e.target.value)}
            />

            <button
                className="button"
                onClick={() => done()}
                disabled={isLoading}
            >
                {isLoading ? <Spinner /> : "lets go!"}
            </button>
        </div>
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
