import ProductList from "../components/ProductList";
import Cart from '../components/Cart';
import CategoryMenu from "../components/CategoryMenu";

const Shop = () => {
    return (
      <div className="shop-background">
        <CategoryMenu></CategoryMenu>
        <Cart></Cart>
        <ProductList></ProductList>
      </div>
    )
 }
  
export default Shop;