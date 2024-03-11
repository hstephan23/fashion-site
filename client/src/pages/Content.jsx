import {useQuery, useMutation } from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useStoreContext } from '../utils/GlobalState';

// import ProductList from '../components/ProductList';

const Content = () => {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      console.log("Fetching Articles");
      const fetchContent = async () => {
        try {
          const response = await axios.get('https://your-api-url/content');
          setContent(response.data);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };

      fetchContent();
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h1>Content</h1>
        <p>{content}</p>
        {/* <ProductList>Product List</ProductList> */}
      </div>
    );
  };

  export default Content;
  