
import axios from 'axios';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useStoreContext } from '../utils/GlobalState';
import { QUERY_ARTICLES, QUERY_POSTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import { UPDATE_ARTICLES, UPDATE_POSTS } from '../utils/actions';

// import ProductList from '../components/ProductList';
import Articles from '../components/Article';

const Content = () => {
    const [state, dispatch, loading]  = useStoreContext();
    const [postData, setPost] = useState([]);
    const [arts, setArticles] = useState([]);
    // const { loading, error, data } = useQuery(QUERY_POSTS);
    // const { loading, error, data } = useQuery(QUERY_ARTICLES);

    const fetchCategory = 'fashion';
    const api_key = '075c77e26d82488997236d886c2e4b11';
    const newsAPIlink = `https://newsapi.org/v2/${'everything'}?q=${fetchCategory}&language=en&from=2024-02-11&sortBy=publishedAt&page=2&apiKey=075c77e26d82488997236d886c2e4b11`;

    const test_api_key = "pub_39980a34d24d9fa0333ffbedf7d600ea9146f";
    const testAPIlink = `https://newsdata.io/api/1/news?q=${fetchCategory}?apikey=${test_api_key}`;
    
    let posts = [];
    let articles = [];
    
    useEffect(() => {
      if(postData) {
        dispatch({
          type: UPDATE_POSTS,
          posts: postData,
        });
        postData.forEach((post) => {
          idbPromise('posts', 'put', post);
        })
      } else if(!loading) {
        idbPromise('posts', 'get').then((posts) => {
          dispatch({
            type: UPDATE_POSTS,
            posts: posts,
          });
        });
      }
    }, [postData, loading, dispatch]);
    
    const blogPost = (e) => {
      const target = e.target;
      e.stopPropagation();
      e.preventDefault();
      const text = document.querySelector('#subject').value;
      const name = document.querySelector('#fname').value.trim() + (" ") + document.querySelector('#lname').value.trim('');
      const postData = {
        name: name,
        text: text,
      }
      posts.push(postData);
      setPost(posts);
    }

    useEffect(() => {
      console.log("Fetching Articles");
      axios.get(`https://newsdata.io/api/1/news?q=${fetchCategory}&language=en&apikey=${test_api_key}`)
      .then((res) => {
        console.log(res);
        const arts = res.data.results;
        for(let i = 0; i < 10; i++) {
          articles.push(arts[i]);
        }
        setArticles(articles);
      }).catch((error) => {
        console.error(error);
      })
    }, []);

    console.log(arts);

    return (
      <div className='blog-parent-container'>
        <div className='blog-container'>
          <div className='blog-post-container'>
            {postData ? postData.map((post) => (<div>
                <h1 className='blog-post-name'>{post.name}</h1>
                <p className='blog-text'>{post.text}</p>
              </div>)
            ) : <div>No Posts!</div>}
          </div>

          <div className="blog-form-container">
          <form className='blog-form'>
            <div className="row">
              <div className="col-75">
                <label htmlFor="fname">First Name: </label>
                <input type="text" id="fname" name="firstname" placeholder="Your name..">
                </input>
              </div>
            </div>
            <div className="row">
              <div className="col-75">
                <label htmlFor="lname">Last Name: </label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name..">
                </input>
              </div>
            </div>
            <div className="row">
                {/* <label htmlFor="subject">Post</label> */}
                <textarea id="subject" name="subject" placeholder="Write something.." maxLength={250}></textarea>
            </div>
            <br>
            </br>
            <div className="row">
              <button className='form-submit' onSubmit={blogPost} onClick={blogPost}>
                Submit
              </button>
              {/* <input type="submit" value="Submit" placeholder='submit'>
              </input> */}
            </div>
          </form>
        </div>
        </div>
        
        <div className='article-container'>
          {arts ? arts.map((article, index) => (
            <Articles 
              key={index}
              description={article.description}
              imgURL={article.image_url}
              url={article.link}
            />
          )) : <div> {console.log(articles.length)}No Articles! </div>
          }
        </div>
      </div>
    );
  };

  export default Content;
  