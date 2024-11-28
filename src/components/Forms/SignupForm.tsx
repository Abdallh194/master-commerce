"use client";
import { useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ActiveUserState,
  AddNewUser,
  ValidateEmailAddress,
} from "@redux/user/LoginSlice";
import { useNavigate } from "react-router-dom";
import { SigupSchema, SignupType } from "@validation/SignupValidation";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { MdDangerous } from "react-icons/md";

type TFun = {
  setDefualtView: (...args: boolean[]) => void;
};

const SignupForm: React.FC<TFun> = ({ setDefualtView }) => {
  // dispath
  const dispatch = useAppDispatch();

  // navigate
  const navigate = useNavigate();

  // states
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginError, setisLoginError] = useState(false);

  const { exsitEmail } = useAppSelector((s) => s.user);

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupType>({
    mode: "onBlur",
    resolver: zodResolver(SigupSchema),
  });

  // handleSubmit
  const SubmitForm: SubmitHandler<SignupType> = (data) => {
    setIsLoading(true);
    setTimeout(() => {
      if (data) {
        const Data = {
          Email: data.email,
          Password: data.password,
          FirstName: data.name,
        };
        dispatch(AddNewUser(Data));
        dispatch(ActiveUserState());
        setisLoginError(false);
        navigate("/user-profile");
      } else {
        setisLoginError(true);
      }
      setIsLoading(false);
    }, 1500); // التأخير لمدة ثانية واحدة
  };

  return (
    <>
      <div className="head">Create an Account</div>
      <div className="info mt-3">Enter Your Details Below</div>
      <Form className="mt-4" onSubmit={handleSubmit(SubmitForm)}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Name"
            className="formInput"
            {...register("name")}
            isInvalid={!!errors.name?.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Email address or Phone Number"
            className="formInput"
            {...register("email")}
            onBlur={(e) => {
              dispatch(ValidateEmailAddress(e.target.value));
            }}
            isInvalid={!!errors.email?.message}
          />
          {exsitEmail && (
            <span style={{ color: "red" }}>
              Sorry, this email is already in use by another client.
            </span>
          )}
          <Form.Control.Feedback type="invalid">
            {errors.email?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            className="formInput"
            {...register("password")}
            isInvalid={!!errors.password?.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" id="submit" className="mt-3" disabled={isLoading}>
          {isLoading ? (
            <>
              <Spinner animation="border" size="sm" /> Loading ...
            </>
          ) : (
            "Sign Up"
          )}
        </Button>
        <div
          onClick={() => {
            setDefualtView(true);
          }}
          className="registerBtn"
        >
          Do you have an account? Log in now
        </div>
        {isLoginError && (
          <Alert variant="danger" className="alerterror">
            You have entered an invalid username or password <MdDangerous />
          </Alert>
        )}
      </Form>
    </>
  );
};

export default SignupForm;
