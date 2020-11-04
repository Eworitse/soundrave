import React from 'react';
import styled from 'styled-components';
import FooterBrand from './footerBrand';
import Block from './footerBlock';
import Container from 'react-bootstrap/Container';

const FooterWrap = styled.footer`
position: relative;
background-color: #444;
width: 100vw;
color: white;
padding: 20px;
`;

const Blocks = styled(Container)`
width: 100vw;
position: relative;
display: flex;
justify-content: space-between;
`;

function Footer(props) {
    const block1 = [
        {id: "01", link: "/", content: "About"},
        {id: "02", link: "/", content: "Jobs"},
        {id: "03", link: "/", content: "For the Record"}
    ];

    const block2 = [
        {id: "01", link: "/", content: "Artist"},
        {id: "02", link: "/", content: "Advertising"},
        {id: "03", link: "/", content: "Vendors"}
    ];

    return(
        <FooterWrap> 
            <FooterBrand />
            <Blocks>
                <Block details={block1} title="COMPANY"/>
                <Block details={block2} title="COMMUNITIES"/>
            </Blocks>
        </FooterWrap>
    );
}

export default Footer;