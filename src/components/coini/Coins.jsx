import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const Coins = ({ coins }) => {
    return (
        <section className="pt-8 pb-5 position-relative overflow-hidden" data-aos="fade-up">
            <Container>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <h1 className="display-5 fw-semibold">Criptomonedas aceptadas</h1>
                        <p className="text-muted mx-auto">
                        La manera más segura de recibir pagos en las criptomonedas estables más<span className="text-dark fw-medium"> populares.</span>
                        </p>
                    </Col>
                </Row>
                <Row className="mt-3">
                    {(coins || []).map((coin, index) => {
                        return (
                            <Col lg={3} md={6} key={index.toString()}>
                                <div className="d-flex align-items-center py-lg-2 my-4">
                                    <img src={coin.icon} className="icon me-3" alt="" />
                                    <div className="flex-grow-1 ">
                                        <h4 className="my-0 fw-medium">{coin.name}</h4>
                                    </div>
                                </div>
                            </Col>
                        );
                    })}
                </Row>

                <Row className="mt-4">
                    <Col lg={12} className="mt-4 mt-lg-2 text-center">
                        <div to="#" className="btn btn-primary">
                            ¿Quieres que soportemos otra cripto? <FeatherIcon className="ms-2 icon icon-xs" icon="arrow-right" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Coins;
