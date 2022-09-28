import React from 'react';
import "./TShirts.css"

const TShirts = (props) => {
    const{handelAddToCart,tShirt}=props
    const {name,picture,price} =props.tShirt
    return (
        <div className='t'>
            <img src={picture} alt="" />
            <h4>Name:{name}</h4>
            <h5>Price:${price}</h5>
            <button onClick={()=> handelAddToCart(tShirt)}>Add to cart</button>
        </div>
    );
};

export default TShirts;