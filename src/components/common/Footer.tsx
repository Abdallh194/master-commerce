import { Col, Container, FormControl, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { VscSend } from "react-icons/vsc";
import { Form } from "react-router-dom";

type TFooterItem = {
  title?: string;
  desc?: JSX.Element;
  cus_className?: string;
};

const FooterCard = ({ title, desc }: TFooterItem) => {
  return (
    <Col className="footer-card" lg={3}>
      <div className="title mb-4">{title}</div>
      <div className="desc">{desc}</div>
    </Col>
  );
};

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <FooterCard
            title="Exclusive"
            desc={
              <>
                <p>Subscribe</p>
                <p>Get 10% off your first order</p>
                <Form>
                  <FormControl type="email" placeholder="Enter your email" />
                  <VscSend className="send-icon" />
                </Form>
              </>
            }
          />
          <FooterCard
            title="Support"
            desc={
              <>
                <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
              </>
            }
          />
          <FooterCard
            title="Account"
            desc={
              <>
                <p>My Account</p>
                <p>Login / Register</p>
                <p>Cart</p>
                <p>Wishlist</p>
                <p>Shop</p>
              </>
            }
          />
          <FooterCard
            title="Quick Link"
            desc={
              <>
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
              </>
            }
          />
          <FooterCard
            title="Download App"
            desc={
              <>
                <p>Save $3 with App New User Only</p>
                <div className="d-flex">
                  <img src="/qr-code.jpg" alt="qr-code" className="img-fluid" />
                  <img
                    src="/play-store.png"
                    alt="play-store"
                    className="img-fluid play-img"
                  />
                </div>
                <div className="d-flex socials mt-3">
                  <FaFacebook size={24} /> <FaTwitter size={24} />
                  <FaInstagram size={24} /> <FaLinkedin size={24} />
                </div>
              </>
            }
          />
        </Row>
        <hr />
        <div className="copy">
          © Exclusive {new Date().getFullYear()} , All rights reserved
          <div className="owner">
            Designed and implemented by{" "}
            <a href="https://abdallh-rakha.vercel.app/" target="_blank">
              Abdullah Sabry
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
