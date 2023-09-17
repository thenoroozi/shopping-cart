import React, { useContext } from 'react';

//Context
import { CartContext } from '../../context/CartContextProvider';

//Function
import { shorten } from '../../helper/functions';

//Icons
import trashIcon from "../../assets/icons/trash.svg";
//styles
import styles from './Cart.module.css';

const Cart = (props) => {

   const { dispatch } = useContext(CartContext);
   const { image, title, price, quantity } = props.data;

   return (
      <div className={styles.container}>
         <img className={styles.productImage} src={image} alt="product image" />
         <div className={styles.data}>
            <h3>{shorten(title)}</h3>
            <p>{price}</p>
         </div>
         <div>
            <span className={styles.quantity}>{quantity}</span>
         </div>
         <div className={styles.buttonContainer}>
            {
               quantity > 1 ?
               <button onClick={()=> dispatch({type:"DECREASE",payload: props.data})}>-</button>:
               <button onClick={()=> dispatch({type:"REMOVE_ITEM",payload: props.data})}><img src={trashIcon}/></button>
            }
            <button onClick={()=> dispatch({type: "INCREASE" ,payload: props.data})}>+</button>
         </div>
      </div>
   );
};

export default Cart;