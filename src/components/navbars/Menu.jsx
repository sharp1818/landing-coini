import React from 'react'
import { Nav } from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav';
import classNames from 'classnames';

const Menu = ({ navClass, buttonClass, showDownload }) => {

    return (
        <Nav as="ul" className={classNames('align-items-lg-center', navClass)}>
            <Nav.Item as="li">
                <div end className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                    Home
                </div>
            </Nav.Item>
            <Nav.Item as="li">
                <div end className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                    Home
                </div>
            </Nav.Item>
            <Nav.Item as="li">
                <div end className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                    Home
                </div>
            </Nav.Item>
            {showDownload && (
                <>
                    <Nav.Item as="li">
                        <div to="#" className={classNames('btn', buttonClass)}>
                            Download
                        </div>
                    </Nav.Item>
                </>
            )}
        </Nav>
    );
};

export default Menu;
