import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import logo from '../images/soundrave.svg';

const MyContainer = styled(Container)`
display: flex;
`;

const NavText = styled.span`
color: #fff;
margin-left: 20px;
font-weight: 600;

&:hover{
    color: #E29028;
}
`;

const ProfileText = styled.span`
color: #fff;
margin-left: 20px;
font-weight: 600;
border-left-style: solid;
border-left-width: 2px;
border-left-color: #fff;
padding-left: 30px;

&:hover{
    color: #E29028;
}
`;

const BrandText = styled.span`
color: white;
margin-left: 10px;
`;

const MainNavbar = styled(Navbar)`
background-color: rgba(53, 150, 180, 0.4);
`;

function AppNavbar(props) {   
    return(
        <>
            <MainNavbar sticky="top" collapseOnSelect  expand="md">
                <MyContainer>
                    <Navbar.Brand href="/">
                        <a href="/">
                            <img src={logo}
                            width="40px"
                            height="auto"
                            alt="Soundrave logo" />
                        </a>
                        <BrandText>Soundrave</BrandText>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="nav-group" />
                    <Navbar.Collapse id="nav-group">
                        <Nav className="ml-auto">
                            <Nav.Link href="/premium"><NavText>Premium</NavText></Nav.Link>
                            <Nav.Link href="/download"><NavText>Download</NavText></Nav.Link>
                            <Nav.Link href="/help"><NavText>Help</NavText></Nav.Link>
                            <Nav.Link href="/profile"><ProfileText>Profile</ProfileText></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </MyContainer>
            </MainNavbar>
        </>
    );
}

export default AppNavbar;