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
    }, [])

    return (
        <animated.div style={componentProp} className="room-container">
            <NewRoom />
            <List />
        </animated.div>
    )
}

function NewRoom() {
    return (
        <button className="button new-room">new room</button>
    )
}

function List() {
    return (
        <div className="list-container">
            <Item name={"loli"} />
        </div>
    )
}

function Item({name}) {
    return (
        <div className="list">
            {name}
        </div>
    )
}
