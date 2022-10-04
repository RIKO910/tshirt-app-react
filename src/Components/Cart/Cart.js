import React from 'react';
import './Car.css'

const Cart = (props) => {
    const {cart,remove} =props
    //conditional rendering options
    //1.element variable
    //2.ternary operator condition ? 
    let command;
    if(cart.length===0){
        command =<p>Please add at least one item!!!</p>
    }
    else if(cart.length===1){
        command=<p>Please add more....</p>
    }
    else{
        command = <p><small>Thanks for adding items</small></p>
    }

    return (
        <div>
            <h2>Item Selected:{cart.length}</h2>
            
            {
                cart.map( tShirt =>
                <p>{tShirt.name} 
                <button onClick={()=>remove(tShirt)}> Remove</button>
                </p>)

                
            }
            {command }
            {
                cart.length !==4 ? <p>Keep adding </p>: <button>Remove All</button>
            }
            {
                cart.length ===4 && <button className='orange'>Review Order</button>
            }
        </div>
    );
};

export default Cart;