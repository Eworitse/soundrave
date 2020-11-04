import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
position: relative;
display: flex;
width: 40%;
flex-direction: column;
justify-content: start;
color: white;
`;

const LinkItems = styled.li`
padding-top: 10px;
color: white;
list-style: none;
`;

const Anchor =  styled.a`
color: white;
`;

const Title = styled.h3`
font-size: 1em;
`;

const List = styled.ul`
margin: 0px;
padding: 0px;
`;

function Block(props) {

    return(
        <Wrap>
            <Title>
                {props.title}
            </Title>
            <List>
                {props.details.map(item => <LinkItems key={item.id}><Anchor href={item.link}>{item.content}</Anchor></LinkItems>)}
            </List>
        </Wrap>
    );
}

export default Block;