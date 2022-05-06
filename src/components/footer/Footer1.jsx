import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// imgaes
import logo from '../../assets/images/logo.png';

const Footer1 = () => {
    return (
        <section className="mt-lg-5 pt-5 pb-4 bg-gradient3 position-relative">
            <Container>
                <Row>
                    <Col xl={4}>
                        <div className="navbar-brand me-lg-4 mb-4 me-auto d-flex align-items-center pt-0" to="#">
                            <img src={logo} height="30" alt="" />
                        </div>
                        <p className="text-muted w-75">
                            Make your web application stand out with high-quality landing page
                        </p>
                    </Col>
                    <Col xl="auto" lg={3} xs={6}>
                        <div className="ps-xl-5">
                            <h6 className="mb-3 mt-3 mt-sm-2 fs-14 fw-semibold text-uppercase"> Platform</h6>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <div to="#" className="text-muted">
                                        Demo
                                    </div>
                                </li>
                                <li className="my-3">
                                    <div to="#" className="text-muted">
                                        Pricing
                                    </div>
                                </li>
                                <li className="my-3">
                                    <div to="#" className="text-muted">
                                        Integrations
                                    </div>
                                </li>
                                <li className="my-3">
                                    <div to="#" className="text-muted">
                                        Status
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xl="auto" lg={3} xs={6}>
                        <div className="ps-xl-5">
                            <h6 className="mb-3 mt-3 mt-sm-2 fs-14 fw-semibold text-uppercase">Knowledge Base</h6>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <div to="#" className="text-muted">
                                        Blog
                                    </div>
                                </li>
                                <li className="my-3">
                                    <div to="#" className="text-muted">
                                        Help Center
                                    </div>
                                </li>
                                <li className="my-3">
                                    <div to="#" className="text-muted">
                                        Sales Tools catalog
                                    </div>
                                </li>
                                <li className="my-3">
                                    <div to="#" className="text-muted">
                                        API
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xl="auto" lg={3} xs={6}>
                        <div className="ps-xl-5">
                            <h6 className="mb-3 mt-3 mt-sm-2 fs-14 fw-semibold text-uppercase">Company</h6>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <div to="#" className="text-muted">
                                        About Us
                                    </div>
                                </li>
                                <li className="my-3">
                                    <div to="#" className="text-muted">
                                        Career
                                    </div>
                                </li>
                                <li className="my-3">
                                    <div to="#" className="text-muted">
                                        Contact Us
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xl="auto" lg={3} xs={6}>
                        <div className="ps-xl-5">
                            <h6 className="mb-3 mt-3 mt-sm-2 fs-14 fw-semibold text-uppercase">Legal</h6>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <div to="#" className="text-muted">
                                        Usage Policy
                                    </div>
                                </li>
                                <li className="my-3">
                                    <div to="#" className="text-muted">
                                        Privacy Policy
                                    </div>
                                </li>
                                <li className="my-3">
                                    <div to="#" className="text-muted">
                                        Terms of Service
                                    </div>
                                </li>
                                <li className="my-3">
                                    <div to="#" className="text-muted">
                                        Trust
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row className="text-md-start text-center">
                    <Col md={8}>
                        <p className="pb-0 mb-0 text-muted">
                            {new Date().getFullYear()} © Prompt. All rights reserved. Crafted by{' '}
                            <a href="https://coderthemes.com/">Coderthemes</a>
                        </p>
                    </Col>
                    <Col md={4} className="text-md-end">
                        <div className="align-items-end mt-md-0 mt-4">
                            <ul className="list-unstyled mb-0">
                                <li className="d-inline-block me-4">
                                    <div to="#">
                                        <FeatherIcon icon="facebook" className="icon icon-xs" />
                                    </div>
                                </li>
                                <li className="d-inline-block me-4">
                                    <div to="#">
                                        <FeatherIcon icon="twitter" className="icon icon-xs" />
                                    </div>
                                </li>
                                <li className="d-inline-block">
                                    <div to="#">
                                        <FeatherIcon icon="divedin" className="icon icon-xs" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer1;
