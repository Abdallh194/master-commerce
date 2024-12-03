import { memo, useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const UserInfo: React.FC<NewUser> = ({
  NewUser,
  setOpen_Update_Form,
  Confirm_Update_Form,
}) => {
  const [show, setshow] = useState(true);
  useEffect(() => {
    if (Confirm_Update_Form) {
      const timer = setTimeout(() => {
        setshow(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [Confirm_Update_Form]);
  return (
    <Container>
      {show
        ? Confirm_Update_Form && (
            <Alert variant="success" className="alerterror">
              Your data has been modified successfully. <FaCheck />
            </Alert>
          )
        : ""}
      <div className="info-head"> Personal information</div>
      <div className="d-lg-flex d-md-block mt-4">
        <div className="col">
          <div className="details-head">First Name</div>
          <div className="details-desc">{NewUser.FirstName || "unknown"}</div>
        </div>
        <div className="col">
          <div className="details-head">Last Name</div>
          <div className="details-desc">{NewUser.LastName || "unknown"}</div>
        </div>
      </div>
      <hr />
      <div className="d-lg-flex d-md-block">
        <div className="col">
          <div className="details-head">Email</div>
          <div className="details-desc">{NewUser.Email || "unknown"}</div>
        </div>
        <div className="col">
          <div className="details-head">Mobile Phone</div>
          <div className="details-desc">{NewUser.Phone || "unknown"}</div>
        </div>
      </div>
      <hr />
      <div className="d-lg-flex d-md-block">
        <div className="col">
          <div className="details-head">Address</div>
          <div className="details-desc">{NewUser.Address || "unknown"}</div>
        </div>
      </div>
      <div
        className="edit"
        onClick={() => {
          setOpen_Update_Form?.(true);
        }}
      >
        Edit personal Information
      </div>
    </Container>
  );
};

export default memo(UserInfo);
