import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AppNavbar from './navbar';
import bannerBig from '../images/earmuff-banner2.jpg';
import banner756 from '../images/earmuff-banner-756.jpg';
import banner547 from '../images/earmuff-banner-547.jpg';
import banner400 from '../images/earmuff-banner-400.jpg';

const HomeHeader = styled.img`
width: auto;
height: 370px;
position: absolute;
top: 0px;
`;

const MainWrapper = styled.div`
position: relative;
width: 100%;
height: 370px;
overflow: hidden;
`;

const Wrapper = styled.div`
position: relative;
width: 100%;
height: 370px;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 5%;
`;

const CentredBox = styled.div`
color: white;
position: relative;
align-self: center;
text-align: center;
`;

const FunText = styled.span`
color: #EC2040;
`;

const ActionButton = styled.a`
display: block;
width: 200px;
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
    background-color: white;
    text-decoration: none;
    color: #E29028;
    border: solid 1px #E29028;
}
`;

const WelcomeText = styled.h1`
position: relative;
margin-left: auto;
margin-right: auto;
font-weight: bold;
`;


function Header(props){
    let bannerDim = window.innerWidth;
    let currentBanner;

    if(bannerDim < 400){
        currentBanner = banner400;
    }else if(bannerDim < 548){
        currentBanner = banner547;
    }else if(bannerDim > 547 && bannerDim < 757){
        currentBanner = banner756;
    }else {
        currentBanner = bannerBig;
    }

    const [banner, setBanner] = useState(currentBanner);

    function updateBanner(){
        bannerDim = window.innerWidth;

        if (bannerDim < 400) {
            setBanner(banner400);
        }else if(bannerDim < 548){
            setBanner(banner547);
        }else if(bannerDim > 547 && bannerDim < 757){
            setBanner(banner756);
        }else {
            setBanner(bannerBig);
        }
    }

    useEffect(() => {
        function updateBannerAtResize(){
            updateBanner();
        }

        window.addEventListener("resize", updateBannerAtResize);

        return(() => window.removeEventListener("resize", updateBannerAtResize));
    });
return(
    <>
        <MainWrapper>
            <AppNavbar />
            <HomeHeader src={banner}/>
            <Wrapper>
                <CentredBox>
                    <WelcomeText>All your <FunText>fun</FunText> in one place!</WelcomeText>
                    <ActionButton href="/profile">Get Started</ActionButton>
                </CentredBox>
            </Wrapper>
        </MainWrapper>
    </>
    );
}

export default Header;