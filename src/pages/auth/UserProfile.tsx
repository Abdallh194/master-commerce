import Breadcrumbs from "@components/Breadcrumb";
import { useAppSelector } from "@redux/hooks";
import { Col, Container, Row } from "react-bootstrap";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const UserProfile = () => {
  const { NewUser } = useAppSelector((s) => s.user);
  return (
    <div className="user-profile">
      <Container>
        <div className="d-flex top-menu">
          <Breadcrumbs />
          <div className="wecome-msg">
            Welcome! <span>{NewUser.FirstName}</span>
          </div>
        </div>
        <Row>
          <Col md={12} lg={3} className="LeftSide">
            <LeftSide />
          </Col>
          <Col md={12} lg={9}>
            <RightSide NewUser={NewUser} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserProfile;
