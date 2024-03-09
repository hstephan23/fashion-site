const Content = () => {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
<<<<<<< HEAD
  
=======

>>>>>>> 781d89d635b341aefa560facb5330cec711b464e
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
<<<<<<< HEAD
  
      fetchContent();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
=======

      fetchContent();
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

>>>>>>> 781d89d635b341aefa560facb5330cec711b464e
    return (
      <div>
        <h1>Content</h1>
        <p>{content}</p>
      </div>
    );
  };
<<<<<<< HEAD
  
=======

>>>>>>> 781d89d635b341aefa560facb5330cec711b464e
  export default Content;
  