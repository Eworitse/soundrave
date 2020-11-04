import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
border-radius: 15px;
box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.25);
margin: 5px 10px 15px 10px;

@media (max-width: 500px){
    width: 490px;
}
`;

const Image = styled.img`
width: 210px;
height: auto;
position: relative;
border-radius: 15px 15px 0px 0px;

@media (max-width: 990px){
    width: 325px;
}

@media (max-width: 765px){
    width: 230px;
}

@media (max-width: 547px){
    width: 480px;
}

@media (max-width: 500px){
    width: 100%;
}
`;

const Title = styled.h6`
font-weight: bold;
margin: 10px auto;
`;

const Details = styled.p`
font-size: 0.9em;
padding: 0px 5px;
`;

const Textblock = styled.div`
width: 210px;
height: 120px;
display: flex;
flex-direction: column;
text-align: center;

@media (max-width: 990px){
    width: 325px;
}

@media (max-width: 765px){
    width: 230px;
}

@media (max-width: 547px){
    width: 480px;
    height: 90px;
}

@media (max-width: 500px){
    width: 90%;
}
`;

function Card(props) {
    return(
        <>
            <CardWrapper>
                <Image src={props.source} alt={props.alt} />
                <Textblock>
                    <Title>{props.title}</Title>
                    <Details>{props.details}</Details>
                </Textblock>
            </CardWrapper>
            
        </>
    );
}

export default Card;