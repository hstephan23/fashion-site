import ProductList from "../components/ProductList";
import Cart from '../components/Cart';
// import summersale from '../images/summersale.jpg';

const Shop = () => {
    return (
      <div className="shop-background">
        <Cart></Cart>
        <ProductList></ProductList>
      </div>
    )
 }
  
export default Shop;