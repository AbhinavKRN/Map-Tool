import React, { useState } from 'react';

const PinForm = ({ onSubmit }) => {
    const [remark, setRemark] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(remark);
        setRemark('');  
    };

    return (
        <form className="pin-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter remark"
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
                className="remark-input"
            />
            <button type="submit" className="save-pin-button">Save Pin</button>
        </form>
    );
};

export default PinForm;
