import './App.css';
import GetName from "./GetName";
import {useState} from 'react';
import Rooms from "./Rooms";
import Connection from "./Connection";
import Game from "./Game";

function App() {
    const [pageState, setPageState] = useState(1);

    function renderPage(page) {
        // eslint-disable-next-line default-case
        switch (page) {
            case 1 : return  <GetName setPage={setPageState} />;
            case 2 : return  <Rooms setPage={setPageState} />;
            case 3 : return  <Game setPage={setPageState} />
        }
    }

    return (
        <div className="App">
            {renderPage(pageState)}
            <Connection />
        </div>
    );
}

export default App;
