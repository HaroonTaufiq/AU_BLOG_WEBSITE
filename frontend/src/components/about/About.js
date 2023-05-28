
import React from 'react';
import { Grid, Card, CardContent, Typography ,styled} from '@mui/material';

const societies = [
  //An array named societies is defined, which contains
  // objects representing different societies. 
  //Each object has the following properties:
//name: The name of the society.
//description: A brief description of the society.
//image: The URL of the society's logo image.
    {
      name: 'Microsoft Student Chapter',
      description: 'Help your organization grow. Invite your connections to follow your company.',
      image: 'https://media.licdn.com/dms/image/C560BAQElsDYwqasSkQ/company-logo_200_200/0/1628611370984?e=1693440000&v=beta&t=qN1wzpxnqHAoV4sT1v7lulRbmShy6rBAkMPeDnDZvF8',
    },
    {
      name: 'Bits and Bytes society',
      description: 'We are helping them turn their ideas into reality because we love what we do and what we aim at doing.',
      image: 'https://media.licdn.com/dms/image/C4D0BAQE2UM9ZTgS_gw/company-logo_200_200/0/1599055702465?e=1693440000&v=beta&t=JU7Ld6Tmh62MbIexna-F5ZPCSeU-rODauSSNFo8rl14',
    },
    {
      name: 'Air University Islamic Society',
      description: 'We are Spreading the true teachings of Islam. Learn to balance Dunya around Deen.',
      image: 'https://media.licdn.com/dms/image/C560BAQEMDLCG0X9eDg/company-logo_200_200/0/1634968295984?e=1693440000&v=beta&t=0p87Q5wegJxL8P0ByMs1xXRyeY1PTJwB_CD7-7sKe6Y',
    },
    {
        name: 'Google Developer Student Clubs Air University',
        description: 'We’re Google Developer Student Club Air University, Islamabad! GDSCs are community groups for college and university students interested in Google developer technologies.',
        image: 'https://media.licdn.com/dms/image/C4D0BAQGc9w_MaEHeXQ/company-logo_200_200/0/1662452361633?e=1693440000&v=beta&t=lJyqabk7YU_WwC3a4oIr2oHeK40Bvwlpqu8eajN0usU',
    }
  ];
  
  //The StyledCard component is created using the styled function.
  const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  }));

const About = () => {

    return (
        <Grid container spacing={2} sx={{ padding: '20px', paddingTop: '30px' }}>
          {societies.map((society, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard>
                <img src={society.image} alt={society.name} />
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    {society.name}
                  </Typography>
                  <Typography variant="body2">{society.description}</Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      );
    }

export default About;