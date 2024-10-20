import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Slider from '../Slider/Slider';

const HomePage = () => {
    return (
        <>
            <div>
                <Navbar bg="light" data-bs-theme="light">
                    <Container>
                    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="/rupcorca">Rupcorca</Nav.Link>
                        <Nav.Link href="/sisur-jotno">Sisur Jotno</Nav.Link>
                        <Nav.Link href="/ranna-o-ranna-ghor">Ranna O rannaghor</Nav.Link>
                        <Nav.Link href="/sastho-o-surokkha">Sastho O Surokkha</Nav.Link>
                        <Nav.Link href="/ghorer-jotno">Ghorer Jotno</Nav.Link>
                        <Nav.Link href="/uddogta-corner">Uddogta Corner</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
                <slider/>
            </div>
        </>
    );
};

export default HomePage;