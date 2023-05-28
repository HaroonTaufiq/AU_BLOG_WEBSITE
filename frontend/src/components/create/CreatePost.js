//he CreatePost component is a functional component 
//that represents a form for creating a new post. 
import
 { Box, styled ,FormControl, InputBase, Button, TextareaAutosize} from '@mui/material'

import { AddCircle as Add } from '@mui/icons-material';
import React, { useState, useEffect, useContext } from 'react';
  
import { useLocation,useNavigate } from 'react-router-dom';

import { DataContext } from '../../context/DataProvider';
import { API } from '../../service/api';

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));

const Image = styled('img')({
     width: '100%',
     height: '50vh',
     objectFit: 'cover'
});

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

const InputTextFiled = styled(InputBase)`
     flex: 1;
     margin: 0px 30px;
     font-size: 25px;
`;

const TextArea = styled(TextareaAutosize)`
    width: 100%;
    margin-top: 50px;
    font-size: 18px;
    border: none;
    outline: none;
    box-shadow: none;
    &: focus-visible {
        outine: none;
    }
`

const initialPost = {   // Post elements
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
}


const CreatePost = () => {

    const navigate = useNavigate(); 
    const location = useLocation();
    
    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');

    const { account } = useContext(DataContext);

    const url = post.picture ? post.picture :  'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

    useEffect(() => {   // store image
        const getImage = async () => { 
            if(file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                
                // API call
                const response = await API.uploadFile(data);   // mongodb url for image
                post.picture = response.data;
            }
        }
        
        getImage();
        post.categories = location.search?.split('=')[1] || 'All';   // split category and ...
        post.username =  account.username;
    }, [file, account.username, location.search, post]);


    const handleChange = (e) => {
        setPost({
            ...post,[e.target.name]: e.target.value
        });
    }

    const savePost = async (post) => {
        let response = await  API.createPost(post);
        if (response.isSuccess){
            navigate('/'); 
        }
    }
 
    return (
        <Container>
            <Image  src = {url} alt = "post"/>

            <StyledFormControl>
            <label htmlFor="fileInput"> 
                <Add fontSize='large' color='action'/>  
            </label> 

            <input 
                type="file" 
                id="fileInput"
                style={{display: "none"}}
                onChange={(e) => setFile(e.target.files[0])}   // first element of array(files)
            /> 

            <InputTextFiled onChange={(e) => handleChange(e)} name="title"  placeholder='Title'/> 
            <Button onClick =  {() => savePost(post)}  variant='contained' color="primary"> Publish  </Button>
 
            </StyledFormControl >

            <TextArea
                minRows={5}
                placeholder='Tell your story...'
                name="description"
                onChange={(e) => handleChange(e)}
            />
        </Container>
    )
}

export default CreatePost;