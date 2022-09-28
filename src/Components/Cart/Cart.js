import React from 'react';

const Cart = (props) => {
    const {cart,remove} =props
    return (
        <div>
            <h2>Item Selected:{cart.length}</h2>
            {
                cart.map( tShirt =>
                <p>{tShirt.name} 
                <button onClick={()=>remove(tShirt)}> Remove</button>
                </p>)

                
            }
        </div>
    );
};

export default Cart;