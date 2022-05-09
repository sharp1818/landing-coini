import React, { useEffect }  from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

import classNames from 'classnames';

// components
import Menu from './Menu';

// images
import logo from '../../assets/images/logo.png';
import logoLight from '../../assets/images/logo-light.png';

const Navbar1 = ({ isSticky, navClass, buttonClass, fixedWidth, hideSearch }) => {

    // on scroll add navbar class
    useEffect(() => {
        const btnTop = document.getElementById('btn-back-to-top');
        const navbar = document.getElementById('sticky');
        window.addEventListener('scroll', (e) => {
            e.preventDefault();
            if (btnTop) {
                if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
                    btnTop.classList.add('show');
                } else {
                    btnTop.classList.remove('show');
                }
            }
            if (navbar) {
                if (document.body.scrollTop >= 240 || document.documentElement.scrollTop >= 240) {
                    navbar.classList.add('navbar-sticky');
                } else {
                    navbar.classList.remove('navbar-sticky');
                }
            }
        });
    }, []);

    return (
        <header>
            <Navbar
                id={isSticky ? 'sticky' : ''}
                collapseOnSelect
                expand="lg"
                className={classNames('topnav-menu', navClass)}
            >
                <Container fluid={!fixedWidth}>
                    <Navbar.Brand href="/" className="logo">
                        <img src={logo} height="30" className="align-top logo-dark" alt="" />
                        <img src={logoLight} height="30" className="align-top logo-light" alt="" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="topnav-menu-content">
                        <Menu
                            showDownload
                            navClass="ms-auto"
                            buttonClass={buttonClass ? buttonClass : 'btn-primary'}
                        />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Navbar1;
