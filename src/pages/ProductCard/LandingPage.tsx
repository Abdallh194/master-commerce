import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../../components/SideBar";
import RightSideBar from "../../components/RightSideBar";

import { Allproducts } from "@constants/constants";
import ProductCard from "../../components/ProductCard";

const LandingPage = () => {
  return (
    <>
      <div className="HomePage">
        <Container>
          <Row>
            <Col className="SideBar" lg={2}>
              <SideBar />
            </Col>
            <Col className="RightSideBar" lg={10}>
              <RightSideBar />
            </Col>
          </Row>
          <div className="flash-sels">
            <div className="title">Flash Seles</div>
          </div>
          <ProductCard products={Allproducts} />
        </Container>
      </div>
    </>
  );
};

export default LandingPage;
