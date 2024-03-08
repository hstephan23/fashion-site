import { createContext, useContext, useReducer } from "react";
import { reducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const BlogProvider = ({ value = [], ...props}) => {
    const [state, dispatch] = useReducer(reducer, {
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: '',
        articles: [],
    });

    return <Provider value={[state, dispatch]} {...props} />
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { BlogProvider, useStoreContext };