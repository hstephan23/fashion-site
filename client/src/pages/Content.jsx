
import axios from 'axios';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useStoreContext } from '../utils/GlobalState';
import { QUERY_ARTICLES } from '../utils/queries';
// import ProductList from '../components/ProductList';

const Content = () => {
    // const [content, setContent] = useState('');
    // const { loading, error, data } = useQuery(QUERY_ARTICLES);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() => {
      console.log("Fetching Articles");
      const fetchContent = async () => {
        try {
          const response = await axios.get(`https://fashion4.p.rapidapi.com/v1/results`);
          console.log(response);
          // setContent(response.data);
          // setLoading(false);
        } catch (error) {
          console.error(error);
          // setError(error.message);
          // setLoading(false);
        }
      };

      fetchContent();
    }, []);

    // // console.log(data);

    // if (loading) {
    //   return (
    //     <div>Loading...</div>
    //   );
    // }

    // if (error) {
    //   return (
    //     <div>Error: {error}</div>
    //   );
    // }

    return (
      <div className="container">
        <form action="/action_page.php">
        <div className="row">
          <div className="col-25">
            <label htmlFor="fname">First Name</label>
          </div>
          <div className="col-75">
            <input type="text" id="fname" name="firstname" placeholder="type first name..">
            </input>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="lname">Last Name</label>
          </div>
          <div className="col-75">
            <input type="text" id="lname" name="lastname" placeholder="type last name..">
            </input>
          </div>
        </div>
       
        <div className="row">
          <div className="col-25">
            <label htmlFor="subject">Blog</label>
          </div>
          <div className="col-75">
            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
          </div>
        </div>
        <br>
        </br>
        <div className="row">
          <input type="submit" value="Submit">
          </input>
        </div>
        </form>
          {/* <h1>Content</h1>
              <p>{content}</p> */}
      </div>
    );
  };

  export default Content;
  