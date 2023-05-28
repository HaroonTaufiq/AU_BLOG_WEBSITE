
import { useState,  useEffect } from 'react';

import { Box,Grid } from '@mui/material';
import { useSearchParams,Link } from 'react-router-dom';

import { API } from '../../../service/api';

// Components
import Post from './Post';

const Posts = () => {
    const [posts, getPosts] = useState([ ]);

    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getAllPosts({category: category || ''});
            if (response.isSuccess) {
                getPosts(response.data);
            }
        }
        fetchData();
    }, [category]); 

    return (
        <>
            {
                posts?.length ? posts.map(post => (
                    <Grid item xs = {12} sm = {6} md = {4} lg = {3}>
                        <Link to = {`details/${post._id}`} style = {{ textDecoration: 'none' , color: 'inherit'}}> 
                          <Post post = {post}/>
                        </Link>
                    </Grid>

                )) : <Box style = {{ color: '#878787' , margin: '30px 80px', fontSize: 18}}>
                    No posts found
                    </Box>

            }
        </>
    )
}

export default Posts; 