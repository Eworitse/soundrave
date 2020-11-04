import React from 'react';
import styled from 'styled-components';
import Header from '../comps/header';
import Body from '../comps/Homebody';
import Footer from '../comps/homeFooter';

const Wrapper = styled.div`
position: relative;
`;

function Home(props){
    return(
        <>
            <Wrapper>
                <Header />
                <Body />
                <Footer />
            </Wrapper>
        </>
    );
}

export default Home;