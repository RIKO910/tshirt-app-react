import React, { createContext, useState } from 'react';
import Uncle from '../Uncle/Uncle'
import Father from '../Father/Father'
import Aunty from '../Aunty/Aunty'
import './Granda.css'

export const RingContext = createContext('diamond')

const Grandpa = () => {
    const [house, setHouse] = useState(1);

    const ornament = 'Diamond Ring'

    const handleBuyAHouse = () => {
        const newHouse = house + 1;
        setHouse(newHouse);
    }
    return (
        <RingContext.Provider value='alur ring'>
            <div className='grandpa'>
                <h3>GrandPa</h3>
                <button onClick={handleBuyAHouse}>Buy a house</button>
                <p>House:{house}</p>
                <section style={{ display: 'flex' }}>
                    <Father house={house} ornament={ornament}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;