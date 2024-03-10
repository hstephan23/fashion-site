import axios from 'axios';
import { useEffect, useState } from 'react';
const Content = () => {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
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
      </div>
    );
  };

  export default Content;
  