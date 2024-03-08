import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const ProductItem = (item) => {
    const [state, dispatch] = useStoreContext();

    const {
        _id,
        name,
        image,
        price,
        quantity,
        category
    } = item;

    const { cart } = state;

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === _id);
        if(itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: _id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
            idbPromise('cart', 'put', {
                ...itemInCart,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
        } else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...item, purchaseQuantity: 1 }
            });
            idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
        }
    }

    return (
        <div className="card px-1 py-1">
          <Link to={`/products/${_id}`}>
            <img
              alt={name}
              src={`/images/${image}`}
            />
            <p className="product-name">{name}</p>
          </Link>
          <div>
            <div className="product-data">
                <h3 className="product-category">{category}</h3>
                <h3 className="product-quantity">{quantity} {pluralize("item", quantity)} in stock
                    <span className="product-price">${price}</span>
                </h3>
            </div>
          </div>
          <button onClick={addToCart}>Add to cart</button>
        </div>
    );
}

export default ProductItem;