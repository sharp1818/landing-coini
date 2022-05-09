import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Typist from 'react-text-typist';

// components
import FormInput from '../form/FormInput';

// images
import crypto from '../../assets/images/hero/crypto.jpg';

const Hero7 = () => {
    return (
        <section className="position-relative overflow-hidden hero-7 py-5">
            <Container>
                <Row className="align-items-center text-center text-sm-start">
                    <Col lg={6}>
                        <div>
                            <h1 className="mt-3 mb-4 pb-2 hero-title">
                                Acepta <span className="highlight highlight-success d-inline-block">Criptomonedas</span> desde cualquier parte del mundo
                            </h1>
                            <p className="fs-16 text-muted">
                            Ofrece la mejor experiencia de pago a tus clientes recibiendo pagos en criptomonedas estables
                            </p>

                            <div className="py-5">
                                <Row className="g-2 text-start">
                                    <Col sm="auto">
                                        <FormInput
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Ingresa tu correo"
                                            name={'email'}
                                        />
                                    </Col>
                                    <Col sm="auto">
                                        <Button className="mt-1 mt-sm-0">Apuntarme a Whitelist</Button>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ offset: 1, span: 5 }} className="hero-right">
                        <div className="img-container">
                            <img src={crypto} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero7;
