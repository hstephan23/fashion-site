import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER, QUERY_ME, QUERY_ARTICLES } from '../utils/queries';

import Auth from '../utils/auth';
import ArticleList from '../components/ArticleList';

const Profile = () => {
  const { profileId } = useParams();

  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data, error } = useQuery(
    profileId ? QUERY_SINGLE_USER : QUERY_ME, {
      variables: { profileId: profileId },
    }
  );

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_USER` query
  const profile = data?.me || data?.profile || {};

  // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.name) {
    return (
      <div>
        <div>
          <a href='/login'>Login</a>
          <a href='/signup'>Sign-Up</a>
        </div>
        <h4>
          You need to be logged in to see your profile page. Use the navigation
          links above to sign up or log in!
        </h4>
      </div>
      
    )
  }
  
  return (
    <div>
      <div>
        <h2 className="card-header">
          {profileId ? `${profile.name}'s` : 'Your'}
        </h2>
      </div>
      <div>
        <ArticleList/>
      </div>
    </div>
  );
};


export default Profile;
