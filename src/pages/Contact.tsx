import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="Contact">
      <Container>
        <Row>
          <Col lg={3} className="info-card">
            <div className="icon">
              <BsTelephone /> Call To Us
            </div>
            <div className="info">We are Available 24/7 , 7 days a week</div>
            <div className="info">phone : +201091415560</div>
          </Col>
          <Col lg={9} className="form-card"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
