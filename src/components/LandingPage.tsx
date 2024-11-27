import { Col, Container, Row } from "react-bootstrap";
import SideBar from "./SideBar";
import RightSideBar from "./RightSideBar";
import ProductCard from "@pages/ProductCard/ProductCard";
import { Allproducts } from "@constants/constants";

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
          <Row>{/* <ProductCard products={Allproducts} /> */}</Row>
        </Container>
      </div>
    </>
  );
};

export default LandingPage;
