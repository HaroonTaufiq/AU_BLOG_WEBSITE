//The Banner component is a functional component 
//that renders a banner section at the top of the page
import { styled, Box, Typography } from '@mui/material';
//The Image component is created using the styled function. It is a styled Box component that provides custom styling for the banner image. It has the following styles:

//width: 100% sets the width of the image to 100%.
//background applies a background image to the Box using the specified URL. The image is centered and repeated along the x-axis. The background color is set to #000.
//height: 50vh sets the height of the Box to 50% of the viewport height.
//display: flex sets the display property of the Box to flex.
//flex-direction: column arranges the child elements of the Box in a column.
//align-items: center centers the child elements horizontally.
//justify-content: center centers the child elements vertically.
const Image = styled(Box)`
    width: 100%;
    background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>Air University</Heading>
            <SubHeading>Blog Website/Confessions corner</SubHeading>
        </Image>
    )
}

export default Banner;