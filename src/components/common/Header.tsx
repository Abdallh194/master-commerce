//bootstrap components
import { Container, Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

// search box component
import HeaderSearch from "@components/ui/HeaderSearch";

// get links
import { HeaderLinks } from "src/constants/constants";
import { useAppSelector } from "@redux/hooks";

//icon

import { LuStore } from "react-icons/lu";
function Header() {
  const { isloggin } = useAppSelector((s) => s.user);

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="logo cus-dflex">
          Exclusive <LuStore className="mx-1" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto links">
            {HeaderLinks.map((link, index) => (
              <Nav.Link as={Link} to={link.to} key={index}>
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            <HeaderSearch isloggin={isloggin} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
