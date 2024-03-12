import ProductList from "../components/ProductList";
import Cart from '../components/Cart';
import CategoryMenu from "../components/CategoryMenu";

const Shop = () => {
    return (
      <div>
        <CategoryMenu></CategoryMenu>
        <Cart></Cart>
        <ProductList></ProductList>
      </div>
    )
 }
  
export default Shop;