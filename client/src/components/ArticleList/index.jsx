import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ARTICLES } from '../../utils/queries';

import Article from '../Article';

const ArticleList = () => {
    const [state, dispatch] = useStoreContext();
    const { loading, data, error } = useQuery(QUERY_ARTICLES);

    console.log(data);
    let articleArray = [];
    for(let article of data) {
        if(article.userID === profileId) {
            articleArray.push(article);
        }
    };

    useEffect(() => {
        if (data) {
          dispatch({
            type: UPDATE_ARTICLES,
            articles: data.articles,
          });
          data.articles.forEach((article) => {
            idbPromise('articles', 'put', article);
          });
        } else if (!loading) {
          idbPromise('articles', 'get').then((articles) => {
            dispatch({
              type: UPDATE_ARTICLES,
              articles: articles,
            });
          });
        }
      }, [data, loading, dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <ul>
                {articleArray.map((article) => {
                    <Article 
                        key={article._id}
                        _id={article._id}
                        url={article.url}
                    />
                })}
            </ul>
        </div>
    )
}

export default ArticleList;