import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Card from './card';
import listen from '../images/listen-everywhere.jpg';
import premium from '../images/go-premium.jpg';
import noAdvert from '../images/no-adverts.jpg';
import download from '../images/download.jpg';

const MainSection = styled.section`
position: relative;
`;

const Prompt = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
flex-direction: column;
`;

const PromptText = styled.h1`
font-size: ${props => props.size || "1em"};
margin-top: ${props => props.margin || "2px"};
font-weight: ${props => props.weight || "normal"};
text-align: center;

@media (max-width: 547px){
    font-size: ${props => props.size === "2em" ? "1.5em" : "1em"};
}
`;

const ActionButton = styled.a`
display: block;
margin-top: 30px;
margin-left: auto;
margin-right: auto;
padding: 10px 20px;
border: solid 1px #EC2040;
border-radius: 5px;
font-size: 1.2em;
color: #EC2040;
position: relative;
text-decoration: none;
font-weight: 600;

&:hover{
    text-decoration: none;
    color: #E29028;
    border: solid 1px #E29028;
}

@media (max-width: 547px){
    font-size: 0.9em;
    font-weight: bold;
}
`;

const CardGroup = styled(Container)`
display: flex;
margin-top: 40px;
justify-content: center;
flex-wrap: wrap;
`;

function Body(props) {
    const cardProps = [
        {source: listen, alt: "listen to music anywhere", id: "01",
            title: "Listen everywhere", details: "Soundrave works on your computer, mobile, tablet and TV."},
        {source: noAdvert, alt: "enjoy ad-free music", id: "02",
            title: "Enjoy ad-free music", details: "No ads. No interruptions. Just music."},
        {source: download, alt: "download music whenever", id: "03",
            title: "Download & listen offline", details: "Keep playing, even when you don't have a connection."},
        {source: premium, alt: "premium sounds better", id: "04",
            title: "Premium sounds better", details: "Get ready for incredible sound quality."},
    ];

    return(
        <MainSection>
            <Prompt>
                <PromptText size="1.5em" margin="40px" weight="600">Looking for great music?</PromptText>
                <PromptText size="1em">We've got you covered - from old favourites to the latest hits</PromptText>
                <ActionButton href="/library">Start listening to the very best</ActionButton>
            </Prompt>
            <CardGroup>
                {cardProps.map(item => <Card source={item.source} key={item.id} alt={item.alt} title={item.title} details={item.details} />)}
            </CardGroup>
        </MainSection>
    );
}

export default Body;