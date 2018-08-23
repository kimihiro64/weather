import React from 'react';
import './css/App.css';
import WeatherListController from './components/WeatherListController';
import constants from './constants';

const App = () => {
    let mainView = (
        <div className="App">
            <p className="App-title">
                {constants.APPTITLE}
            </p>
            <br />
            <br />
            <WeatherListController />
        </div>
    );

    return mainView;
};

export default App;
