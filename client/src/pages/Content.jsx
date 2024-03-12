
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
    const [state, dispatch]  = useStoreContext();
    const [postData, setPost] = useState();
    const [arts, setArticles] = useState([]);
    // const { loading, error, data } = useQuery(QUERY_POSTS);
    // const { loading, error, data } = useQuery(QUERY_ARTICLES);
    const api_key = '075c77e26d82488997236d886c2e4b11';
    const fetchCategory = 'fashion';

    const testAPIlink = "https://newsdata.io/api/1/news?apikey=YOUR_API_KEY&q=pegasus&language=e";
    
    let posts = [];
    let articles = [];
    
    // useEffect(() => {
    //   if(postData) {
    //     dispatch({
    //       type: UPDATE_POSTS,
    //       posts: data.posts,
    //     });
    //     data.posts.forEach((post) => {
    //       idbPromise('posts', 'put', post);
    //     })
    //   } else if(!loading) {
    //     idbPromise('posts', 'get').then((posts) => {
    //       dispatch({
    //         type: UPDATE_POSTS,
    //         posts: posts,
    //       });
    //     });
    //   }
    // }, [data, loading, dispatch]);

    const blogPost = (e) => {
      const target = e.target;
      const text = document.querySelector('#subject').value;
      const name = document.querySelector('#fname').value.trim() + (" ") + document.querySelector('#lname').value.trim('');
      const postData = {
        name: name,
        text: text,
      }
      e.stopPropagation();
      e.preventDefault();
      posts.push(postData);
      setPost(posts);
      console.log("Blog Post Posted: " + postData.text);
    }

    useEffect(() => {
      console.log("Fetching Articles");
      axios.get(`https://newsapi.org/v2/${'everything'}?q=${fetchCategory}&language=en&from=2024-02-11&sortBy=publishedAt&page=2&apiKey=075c77e26d82488997236d886c2e4b11`)
      .then((res) => {
        const arts = res.data.articles;
        for(let i = 0; i < 10; i++) {
          articles.push(arts[i]);
        }
        console.log(articles);
        setArticles(articles);
      }).catch((error) => {
        console.error(error);
      })
    }, []);

      return (
        <div className='blog-parent-container'>
          <div className='blog-container'>
            <div className='blog-post-container'>
              {postData > 0 ? postData.map((post) => {
                <div>
                  <h1 className='blog-post-name'>{post.name}</h1>
                  <p className='blog-text'>{post.text}</p>
                </div>
              }) : <div>No Posts!</div>}
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
                <input className='form-submit' type="submit" value="Submit" onSubmit={blogPost}  onClick={blogPost}>
                </input>
              </div>
            </form>
          </div>
          </div>
          
          <div className='article-container'>
            {arts ? arts.map((article, index) => (
              <Articles 
                // key={index}
                author={article.author}
                description={article.description}
                content={article.content}
                imgURL={article.urlToImage}
                url={article.url}
              />
              // <div>
              //   <h1>{article.author}</h1>
              //   <h2>{article.description}</h2>
              //   <h3>{article.content}</h3>
              //   <img src={article.urlToImg}></img>
              // </div>
            )) : <div> {console.log(articles.length)}No Articles! </div>
            }
          </div>
        </div>
      );
    // }
  };

  export default Content;
  