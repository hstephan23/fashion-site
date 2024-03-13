import ProductList from "../components/ProductList";
import Cart from '../components/Cart';
import CategoryMenu from "../components/CategoryMenu";

const Shop = () => {
    return (
      <div className="shop-background">
        <Cart></Cart>
        <CategoryMenu></CategoryMenu>
        <ProductList></ProductList>
      </div>
    )
 }
  
export default Shop;