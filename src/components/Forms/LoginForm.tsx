"use client";
import { useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ActiveUserState } from "@redux/user/LoginSlice";
import { useNavigate } from "react-router-dom";
import { LoginSchema, LoginType } from "@validation/LoginValidation";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { MdDangerous } from "react-icons/md";

type TFun = {
  setDefualtView: (...args: boolean[]) => void;
};

const LoginForm: React.FC<TFun> = ({ setDefualtView }) => {
  // dispath
  const dispatch = useAppDispatch();

  // navigate
  const navigate = useNavigate();

  // selector
  const { DefaultUserPassword, DefaultUserEmail, NewUser } = useAppSelector(
    (s) => s.user
  );

  // states
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginError, setisLoginError] = useState(false);

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    mode: "onBlur",
    resolver: zodResolver(LoginSchema),
  });

  // handleSubmit
  const SubmitForm: SubmitHandler<LoginType> = (data) => {
    setIsLoading(true);
    setTimeout(() => {
      if (
        (data.email === DefaultUserEmail &&
          data.password === DefaultUserPassword) ||
        (data.email === NewUser.Email && data.password === NewUser.Password)
      ) {
        dispatch(ActiveUserState());
        setisLoginError(false);
        navigate("/user-profile");
      } else {
        setisLoginError(true);
      }
      setIsLoading(false);
    }, 1000); // التأخير لمدة ثانية واحدة
  };

  return (
    <>
      <div className="head">Log In To Exclusive</div>
      <div className="info mt-3">Enter Your Details Below</div>
      <Form className="mt-4" onSubmit={handleSubmit(SubmitForm)}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Email address or Phone Number"
            className="formInput"
            {...register("email")}
            isInvalid={!!errors.email?.message}
          />
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
            "Submit"
          )}
        </Button>
        <div
          onClick={() => {
            setDefualtView(false);
          }}
          className="registerBtn"
        >
          Dont have an account? Register with us now
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

export default LoginForm;
