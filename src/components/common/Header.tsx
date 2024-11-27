import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import HeaderSearch from "@components/ui/HeaderSearch";
import { HeaderLinks } from "src/constants/constants";
import { useAppSelector } from "@redux/hooks";
import { LuStore } from "react-icons/lu";

function Header() {
  const { isloggin } = useAppSelector((s) => s.user);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  return (
    <Navbar
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
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
