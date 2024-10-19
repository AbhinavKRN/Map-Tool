import React from 'react';

const PinListItem = ({ pin }) => {
    return (
        <div className="pin-item">
            <p><strong>Remark:</strong> {pin.remark}</p>
            <p><strong>Address:</strong> {pin.address}</p>
            <p><strong>Coordinates:</strong> {pin.lat}, {pin.lng}</p>
        </div>
    );
};

export default PinListItem;
