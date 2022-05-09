import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// images
import code from '../../assets/images/other/code.jpg';

const Integration = () => {
  return (
    <section
      className="position-relative py-xl-8 py-6 features-3"
      data-aos="fade-up"
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={5}>
            <div className="mb-5 mb-lg-0">
              <span className="align-self-center bg-soft-primary avatar avatar-sm rounded icon icon-with-bg icon-xs text-primary me-3">
                <FeatherIcon icon="code" className="icon-dual-primary" />
              </span>
              <h1 className=" mb-1 my-4">Fácil de Integrar</h1>
              <p className="text-muted mt-4 mb-5">
                Si deseas integrarte con nuestra API para empezar a recibir
                pagos con criptomonedas escribenos un correo electrónico a
                hola@coini.app para ponernos en contacto contigo.
              </p>

              <div to="#" className="btn btn-primary me-2">
                Explore the SDK
              </div>
              <div to="#" className="btn btn-soft-primary">
                Documentation
              </div>
            </div>
          </Col>

          <Col lg={{ offset: 1, span: 6 }}>
            <img src={code} alt="app img" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Integration;
