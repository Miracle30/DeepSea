import React from 'react'
import "./Product.css"
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
    const [{}, dispatch] = useStateValue();

    const addToBasket =() => {
        //Add item 
        dispatch({
            type:'Add_to_basket',
            item:{
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    };
    
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <strong>{price}</strong>
                    <small> VND</small>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_)=> (
                            <p class="fa fa-star checked"></p> 
                        ))
                    }
                </div>
            </div>

            <img src={image} alt=""/>
            <button onClick={ addToBasket }>Add to basket</button>
            
        </div>
    )
}

export default Product