import { memo } from "react";

//bootstrap components
import { Form, FormControl, Nav, NavDropdown } from "react-bootstrap";

//icons
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch, CiUser } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";

import { Link } from "react-router-dom";

//get links
import { navLinks } from "src/constants/constants";

//Redux
import { useAppDispatch } from "@redux/hooks";
import { ActiveUserState } from "@redux/user/LoginSlice";

//type
interface CartProps {
  isloggin: boolean;
}
const HeaderSearch: React.FC<CartProps> = ({ isloggin }) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <Form className="position-relative">
        <FormControl placeholder="Whate are you looking for?" />
        <CiSearch className="search-btn" />
      </Form>
      <Nav.Link className="icon" as={Link} to="/wishlist">
        <IoMdHeartEmpty className="mx-3" />
      </Nav.Link>
      <Nav.Link className="icon" as={Link} to="/cart">
        <AiOutlineShoppingCart />
      </Nav.Link>
      {isloggin && (
        <NavDropdown
          title={<CiUser className="profile-icon mx-3" />}
          id="navbarScrollingDropdown"
        >
          {navLinks.map((link, index) => (
            <NavDropdown.Item
              as={Link}
              to={link.to}
              key={index}
              onClick={() => {
                if (link.label == "Logout") dispatch(ActiveUserState());
              }}
            >
              {link.icon} {link.label}
            </NavDropdown.Item>
          ))}
        </NavDropdown>
      )}
    </>
  );
};

export default memo(HeaderSearch);
