import { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

import './style.css';

const ProductList = () => {
    const [state, dispatch]  = useStoreContext();
    const { loading, error, data } = useQuery(QUERY_ALL_PRODUCTS);
    const { currentCategory } = state;

    useEffect(() => {
        if (data) {
          dispatch({
            type: UPDATE_PRODUCTS,
            products: data.products,
          });
          data.products.forEach((product) => {
            idbPromise('products', 'put', product);
          });
        } else if (!loading) {
          idbPromise('products', 'get').then((products) => {
            dispatch({
              type: UPDATE_PRODUCTS,
              products: products,
            });
          });
        }
      }, [data, loading, dispatch]);

      const filterProducts = () => {
        if(!currentCategory) {
            return state.products;
        }

        return state.products.filter((product) => product.category._id === currentCategory);
      }
      
      // data ? console.log("Hello World " + data.products) : console.error(error);

      if(loading) {
        return (
            <div>Loading...</div>
        )
      }

      return (
        <div>
            <h2 className='product-title'>{currentCategory} Shop Products</h2>
            {state.products.length ? (
                <div className="flex-row products-list">
                    {filterProducts().map((product) => (
                        <ProductItem 
                            key={product._id}
                            _id={product._id}
                            name={product.name}
                            description={product.description}
                            image={product.image}
                            price={product.price}
                            quantity={product.quantity}
                            category={product.category}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex-row">
                    <h2>
                        No products!
                    </h2>
                </div>
            )}
        </div>
      );
}

export default ProductList;