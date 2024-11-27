import Breadcrumbs from "@components/Breadcrumb";

import { Col, Container, Row } from "react-bootstrap";

import StoreNums from "./StoreNums";
import EmployeeNum from "./Employee";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="About">
      <Container fluid>
        <Row>
          <Breadcrumbs />
          <Col lg={6} className="info-card">
            <div className="head">Our Story</div>
            <div className="info">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </div>
            <div className="info">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </div>
          </Col>
          <Col lg={6} className="img-card">
            <img src="/about.jpg" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container>
        {/* Store Nums components  */}
        <StoreNums />
        {/*EmployeeNum components */}
        <EmployeeNum />
        {/* Footer section */}
        <Footer />
      </Container>
    </div>
  );
};

export default About;
