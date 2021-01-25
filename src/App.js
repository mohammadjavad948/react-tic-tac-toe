import './App.css';
import GetName from "./GetName";
import {useState} from 'react';

function App() {
    const [pageState, setPageState] = useState(1);

    function renderPage(page) {
        switch (page) {
            case 1 : return  <GetName setPage={setPageState} />;
            break;
        }
    }

    return (
        <div className="App">
            {renderPage(pageState)}
        </div>
    );
}

export default App;
