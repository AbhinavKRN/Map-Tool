import React from 'react';

const PinList = ({ pins, clearPins }) => {
    return (
        <div className="pin-list">
            <h3>Saved Pins</h3>
            {pins.length === 0 ? (
                <p className="no-pins-message">No pins saved yet.</p>
            ) : (
                pins.map((pin, index) => (
                    <div key={index} className="pin-item">
                        <p><strong>Remark:</strong> {pin.remark}</p>
                        <p><strong>Address:</strong> {pin.address}</p>
                        <p><strong>Coordinates:</strong> {pin.lat}, {pin.lng}</p>
                    </div>
                ))
            )}
            {pins.length > 0 && (
                <button className="reset-button" onClick={clearPins}>
                    Reset Pins
                </button>
            )}
        </div>
    );
};

export default PinList;
