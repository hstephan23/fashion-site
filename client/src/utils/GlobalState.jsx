import { createContext, useContext, useReducer } from "react";
import { reducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const BlogProvider = ({ value = [], ...props}) => {
    const [state, dispatch] = useReducer(reducer, {
        categories: [],
        articles: [],
        posts: [],
        products: [],
        cart: [],
        cartOpen: false,
        currentCategory: '',
    });

    return <Provider value={[state, dispatch]} {...props} />
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { BlogProvider, useStoreContext };

// categories[],