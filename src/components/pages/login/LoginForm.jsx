import React from "react";
import { useState } from "react";
import { useLogin, useNotify } from "react-admin";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const LoginForm = () => {
  const [email, setEmail] = useState("test@nyblecraft.com");
  const [password, setPassword] = useState("12345678qQ");
  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password }).catch(() => notify("Invalid email or password"));
  };

  const showEmpty = () => {
    localStorage.setItem("hideList", true);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-form__fields">
        <div className="login-form__input-wrapper">
          <h5 className="login-form__label">Email</h5>
          <TextField
            variant="outlined"
            className="login-form__input login-form__input_email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            autoComplete="on"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-form__input-wrapper">
          <h5 className="login-form__label">Password</h5>
          <TextField
            variant="outlined"
            className="login-form__input login-form__input_password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            autoComplete="on"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <Button
        type="submit"
        variant="contained"
        disableElevation
        className="login-form__button"
        onClick={showEmpty}
      >
        Login
      </Button>
    </form>
  );
};
