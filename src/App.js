import React, { useState } from 'react';
import MapComponent from './components/MapComponent';
import PinList from './components/PinList';
import useLocalStorage from './hooks/useLocalStorage';
import './styles/styles.css';

const App = () => {
    const [pins, setPins] = useLocalStorage('pins', []);

    const addPin = (newPin) => {
        setPins([...pins, newPin]);
    };

    const clearPins = () => {
        setPins([]); 
    };

    return (
        <div className="app">
            <div className="map-container">
                <MapComponent addPin={addPin} />
            </div>
            <div className="pin-list-sidebar">
                <PinList pins={pins} clearPins={clearPins} />
            </div>
        </div>
    );
};

export default App;
