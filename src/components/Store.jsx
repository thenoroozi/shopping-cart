import React, { useContext } from 'react';
//context
import { ProductsContext } from '../context/ProductContextProvider';

//component
import Product from './shared/Product';
//styles
import styles from './Store.module.css';
const Store = () => {

   const products = useContext(ProductsContext)

   return (
      <div className={styles.container}>
         {products.map(product => <Product key={product.id} productData={product} />)}
      </div>
   );
};

export default Store;