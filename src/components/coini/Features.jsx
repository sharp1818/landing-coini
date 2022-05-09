import React from 'react'
import { Col, Container, Row, Badge, Card } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const Features = ({ features }) => {
    return (
        <section className="my-lg-5 py-5 py-sm-7 bg-gradient2 position-relative" data-aos="fade-up">
            <div className="divider top d-none d-sm-block"></div>
            <Container>
                <Row>
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-primary px-2 py-1">
                        ¿Por Qué elegirnos?
                        </Badge>
                        <h1 className="display-5 fw-medium">Somos la forma más sencilla de empezar a recibir pagos en criptomonedas.</h1>
                        <p className="text-muted mx-auto">Aquí algunas razones</p>
                    </Col>
                </Row>

                <Row className="mt-5">
                    {(features || []).map((feature, index) => {
                        return (
                            <Col lg={6} key={index.toString()}>
                                <Card className="shadow">
                                    <Card.Body>
                                        <div className="d-flex text-align-start ">
                                            <span className="align-self-center bg-soft-primary avatar avatar-sm rounded icon icon-with-bg icon-xs text-primary me-4 flex-shrink-0">
                                                <FeatherIcon icon={feature.icon} className="icon-dual-primary" />
                                            </span>
                                            <div className="flex-grow-1">
                                                <h5 className="mt-0">{feature.title}</h5>
                                                <p className="mb-0">{feature.description}</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default Features;
