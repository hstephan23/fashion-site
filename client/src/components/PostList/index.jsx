import { useEffect } from 'react';
import Post from '../components/Post';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_POSTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

const PostList = () => {

}