import Breadcrumbs from "@components/Breadcrumb";
import { useAppSelector } from "@redux/hooks";
import { Container } from "react-bootstrap";

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
      </Container>
    </div>
  );
};

export default UserProfile;
