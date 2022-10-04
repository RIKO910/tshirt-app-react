import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ornament}) => {
    const ring =useContext(RingContext)
    return (
        <div>

            <h4>Special Ekjon</h4>
            <p>Get:{ring}</p>
        </div>
    );
};

export default Special;