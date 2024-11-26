import LoginForm from "@components/Forms/LoginForm";
import SignupForm from "@components/Forms/SignupForm";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Login = () => {
  const [DefualtView, setDefualtView] = useState(true);
  return (
    <HelmetProvider>
      <Helmet>
        <title>Sign Up</title>
        <meta name="keywords" content="Store , Product , ecommerce , login " />
        <meta
          name="description"
          content="Shop the latest products and find great deals on electronics, fashion, home goods, and more. Your one-stop online store for quality and value. Explore our wide range of electronics, including smartphones, laptops, and home appliances. Shop now for high-quality products at unbeatable prices"
        />
      </Helmet>
      <div className="SignIn">
        <Container fluid>
          <Row className="mt-5">
            <Col md={12} lg={7} className="p-0 img-card">
              <img src="/signup.jpg" className="img-fluid w-100" />
            </Col>
            <Col md={12} lg={5} className="form-card">
              {DefualtView ? (
                <LoginForm setDefualtView={setDefualtView} />
              ) : (
                <SignupForm setDefualtView={setDefualtView} />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </HelmetProvider>
  );
};

export default Login;
