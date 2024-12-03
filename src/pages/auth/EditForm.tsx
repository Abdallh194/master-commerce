import { Alert, Form, FormControl, Spinner } from "react-bootstrap";
import { useState, ChangeEvent, FormEvent, useEffect, memo } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { AddNewUser } from "@redux/user/LoginSlice";
import { MdDangerous } from "react-icons/md";

declare interface FormData {
  FirstName: string;
  LastName: string;
  Phone: string;
  Email: string;
  Address: string;
  currentPassword: string;
  Password: string;
  confirmNewPassword: string;
}

const EditForm: React.FC<SetOpen> = ({
  setOpen_Update_Form,
  setConfirm_Update_Form,
}) => {
  const [formData, setFormData] = useState<FormData>({
    FirstName: "Abdall",
    LastName: "Rimel",
    Phone: "01091415560",
    Email: "rimel1111@gmail.com",
    Address: "Kingston, 5236, United State",
    currentPassword: "",
    Password: "",
    confirmNewPassword: "",
  });
  const dispatch = useAppDispatch();
  const { NewUser } = useAppSelector((s) => s.user);

  //loading effect
  const [loading, setloading] = useState(false);
  const [NewPassword, setNewPassword] = useState("");
  const [btnloading, setbtnloading] = useState(false);
  const [currentpass_error, setpass_error] = useState(false);
  const [pass_match_old_error, setpass_match_old_error] = useState(false);
  const [pass_match_new_error, setpass_match_new_error] = useState(false);
  const [FormError, setFormError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setbtnloading(true);

    setTimeout(() => {
      if (currentpass_error || pass_match_old_error || pass_match_new_error) {
        setFormError(true);
        setbtnloading(false);
      } else {
        dispatch(AddNewUser(formData));
        setOpen_Update_Form(false);
        setbtnloading(false);
        setConfirm_Update_Form(true);
      }
    }, 1100);
  };

  useEffect(() => {
    setloading(true);
    const timer = setTimeout(() => {
      setloading(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  const HnadleCurrentPass = (e: string) => {
    if (e == NewUser.Password) {
      setpass_error(false);
    } else {
      setpass_error(true);
    }
  };
  const HandleMatchOldPass = (e: string) => {
    if (e == NewUser.Password) {
      setpass_match_old_error(true);
    } else {
      setpass_match_old_error(false);
    }
  };
  const HandleMatchNewPass = (e: string) => {
    if (e == NewPassword) {
      setpass_match_new_error(false);
    } else {
      setpass_match_new_error(true);
    }
  };
  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center h-100">
          <Spinner animation="border" /> Loading ...
        </div>
      ) : (
        <Form onSubmit={handleSubmit}>
          <div className="head">Edit Your Profile</div>
          <div className="d-flex flex-wrap">
            <div className="w-50">
              <label>First Name</label>
              <FormControl
                onChange={handleChange}
                type="text"
                name="FirstName"
                placeholder="Abdallh"
                required
              />
            </div>
            <div className="w-50">
              <label>Last Name</label>
              <FormControl
                onChange={handleChange}
                name="LastName"
                type="text"
                placeholder="Rakha"
                required
              />
            </div>
            <div className="w-50">
              <label>Email</label>
              <FormControl
                onChange={handleChange}
                name="Email"
                type="email"
                placeholder="example@example.com"
                required
              />
            </div>
            <div className="w-50">
              <label>Phone</label>
              <FormControl
                onChange={handleChange}
                name="Phone"
                type="number"
                placeholder="+0123456789"
                required
              />
            </div>
            <div className="w-50">
              <label>Full Address 1</label>
              <FormControl
                onChange={handleChange}
                name="Address"
                type="text"
                placeholder="UAE , abu Dhabi"
                required
              />
            </div>
            <div className="w-50">
              <label>Full Address 2</label>
              <FormControl
                onChange={handleChange}
                type="text"
                placeholder="UAE , Dubai"
                required
              />
            </div>
          </div>
          <div className="w-100">
            <label>Password Changes</label>
            <FormControl
              onChange={handleChange}
              name="currentPassword"
              type="password"
              placeholder="current password"
              onBlur={(e) => {
                HnadleCurrentPass(e.target.value);
              }}
              required
            />
            {currentpass_error && (
              <span style={{ color: "red" }}>
                You entered the wrong password.
              </span>
            )}
          </div>
          <div className="w-100">
            <FormControl
              onChange={handleChange}
              type="password"
              name="Password"
              onBlur={(e) => {
                HandleMatchOldPass(e.target.value);
                setNewPassword(e.target.value);
              }}
              pattern="^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$"
              title="Password must be at least 8 characters long, and contain at least one number and one special character."
              placeholder="new password"
              required
            />
            {pass_match_old_error && (
              <span style={{ color: "red" }}>
                You have entered an old password.
              </span>
            )}
          </div>
          <div className="w-100">
            <FormControl
              onChange={handleChange}
              type="password"
              placeholder="confirm password"
              name="confirmNewPassword"
              onBlur={(e) => {
                HandleMatchNewPass(e.target.value);
              }}
              required
            />
            {pass_match_new_error && (
              <span style={{ color: "red" }}>
                Password and Confirm Password do not match.
              </span>
            )}
          </div>
          <button type="submit" className="btn g-btn">
            {btnloading ? (
              <>
                {" "}
                <Spinner animation="border" size="sm" /> Loading ...
              </>
            ) : (
              "Save Changes"
            )}
          </button>
          <div
            className="btn cancel-btn"
            onClick={() => {
              setOpen_Update_Form(false);
            }}
          >
            Cancel
          </div>
          {FormError && (
            <Alert variant="danger" className="alerterror">
              You have entered an invalid username or password <MdDangerous />
            </Alert>
          )}
        </Form>
      )}
    </>
  );
};

export default memo(EditForm);
