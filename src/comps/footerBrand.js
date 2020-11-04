import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import logo from '../images/soundrave.svg';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import instagram from '../images/instagram.svg';

const LogoRow = styled(Container)`
display: flex;
justify-content: space-between;
margin-top: 10px;
border-bottom: solid 1px #ccc;
margin-bottom: 10px;
`;

const BrandBox = styled.div`
display: flex;
position: relative;
justify-content: center;
align-items: center;
`;

const BrandText = styled.h3`
color: white;
font-size: 1.5em;
margin-left: 10px;
`;

const SocialIcon = styled.div`
display: flex;
`;

const Icon = styled.div`
background-color: #ccc;
width: 45px;
height: 45px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1em;
border-radius: 50%;
color: red;
margin: 10px;
`;

const IcLogo = styled.img`
margin: 0px;
width: ${props => props.dim || "30px"};
height: ${props => props.dim || "30px"};
`;

function FooterBrand(props) {
    return(
        <>
            <LogoRow>
                <BrandBox>
                    <a href="/">
                        <img src={logo} alt="Soundrave logo" width="50px" />
                    </a>
                    <BrandText>Soundrave</BrandText>
                </BrandBox>
                <SocialIcon>
                    <Icon><a href="/"><IcLogo src={facebook} alt="facebook" dim="25px"></IcLogo></a></Icon>
                    <Icon><a href="/"><IcLogo src={twitter} alt="twitter"></IcLogo></a></Icon>
                    <Icon><a href="/"><IcLogo src={instagram} alt="instagram"></IcLogo></a></Icon>
                </SocialIcon>
            </LogoRow>
        </>
    );
}

export default FooterBrand;