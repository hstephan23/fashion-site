import React, { useState, useEffect } from 'react';
 import axios from 'axios';

 const Articles = () => {
   const [articles, setArticles] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
     const fetchArticles = async () => {
       try {
         const response = await axios.get('https://your-api-url/articles');
         setArticles(response.data);
         setLoading(false);
       } catch (error) {
         setError(error.message);
         setLoading(false);
       }
     };

     fetchArticles();
   }, []);

   if (loading) {
     return <div>Loading...</div>;
   }

   if (error) {
     return <div>Error: {error}</div>;
   }

   return (
     <div>
       <h1>Articles</h1>
       <ul>
         {articles.map(article => (
           <li key={article.id}>
             <h2>{article.title}</h2>
             <p>{article.content}</p>
           </li>
         ))}
       </ul>
     </div>
   );
 };

 export default Articles;