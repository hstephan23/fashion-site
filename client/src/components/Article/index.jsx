import { useStoreContext } from '../../utils/GlobalState';
import { idbPromise } from "../../utils/helpers";

import './style.css';
 const Articles = (article) => {
   const [state, dispatch] = useStoreContext();

   const {
    key,
    _id,
    author,
    description,
    content,
    url,
    imgURL
   } = article;

   // useEffect(() => {
    //     try {
    //       console.log(state);
    //       if(data) {
    //         dispatch({
    //           type: UPDATE_ARTICLES,
    //           articles: data.articles,
    //         });
    //         data.forEach((article) => {
    //           console.log("MADE IT!" + article);
    //           idbPromise('articles', 'put', article);
    //         });
    //       } else if (!loading) {
    //         idbPromise('articles', 'get').then((articles) => {
    //           dispatch({
    //             type: UPDATE_ARTICLES,
    //             articles: articles,
    //           });
    //         });
    //       }
    //     } catch (error) {
    //       console.error(error);
    //     }
    // }, [loading, error, data]);

//    useEffect(() => {
//      const fetchArticles = async () => {
//        try {
//          const response = await axios.get('https://your-api-url/articles');
//          setArticles(response.data);
//          setLoading(false);
//        } catch (error) {
//          setError(error.message);
//          setLoading(false);
//        }
//      };

//      fetchArticles();
//    }, []);

   return (
     <div className='article-div' key={article.key}>
          <h2 className='article-desc'>{article.description}</h2>
          <img className='article-img' src={article.imgURL}></img>
          <a className='article-url' href={article.url}>{article.url}</a>
     </div>
   );
 };

 export default Articles;