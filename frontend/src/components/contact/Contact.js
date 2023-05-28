//The Contact component is a functional component that represents
// a contact form

import { Box, TextField, Button, styled, Typography } from '@mui/material';
import React, { useState } from 'react';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic or API call here
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
};
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>    
            </Wrapper>
            <Box maxWidth={400} mx="auto" mt={4} p={3} boxShadow={2}>
            <Typography variant="h4" align="center" gutterBottom>
                Society Application Form
            </Typography>
            
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    fullWidth
                    margin="normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>

                <TextField
                    label="Email"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                <TextField
                    label="Message"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}/>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large">
                        Submit
                </Button>
            </form>
            </Box>
         );

        </Box>
    );
}

export default Contact;