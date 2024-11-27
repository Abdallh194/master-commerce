import Breadcrumbs from "@components/Breadcrumb";
import ViewModal from "@components/ui/Modal";
import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
  Spinner,
} from "react-bootstrap";
import DetailsCard from "./DetailsCard";

const Contact = () => {
  // loading effect
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      handleShow();
      console.log("Message sent!");
    }, 1500);
  };

  // modal methods
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="Contact">
      <Container>
        <Row>
          <Breadcrumbs />
          <Col lg={3} className="info-card">
            <DetailsCard />
          </Col>
          <Col lg={9} className="form-card">
            <Form>
              <FormControl placeholder="Your Name" type="text" />
              <FormControl placeholder="Your Email" type="email" />
              <FormControl placeholder="Your Phone" type="number" />
              <textarea
                className="form-control"
                id="msg"
                placeholder="Your Message"
              />
              <Button
                className="btn"
                type="submit"
                onClick={handleClick}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner animation="border" size="sm" /> Sending ...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </Form>
          </Col>
        </Row>
        <ViewModal handleClose={handleClose} show={show} />
      </Container>
    </div>
  );
};

export default Contact;
