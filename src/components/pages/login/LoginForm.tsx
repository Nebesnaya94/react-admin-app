import React, { FC, useMemo, useState } from "react";
import { useLogin, useNotify } from "react-admin";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

const EMAIL_PATTERN = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

  const [password, setPassword] = useState<string>("");
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);

  function checkEmail() {
    setIsEmailValid(EMAIL_PATTERN.test(email));
  }

  function checkPassword() {
    setIsPasswordValid(password.length >= 8);
  }

  const isFormEnabled = useMemo(() => {
    if (!email.length || !password.length) return false;
    if (!isEmailValid || !isPasswordValid) return false;
    return true;
  }, [email, password, isEmailValid, isPasswordValid]);

  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkEmail();
    checkPassword();
    if (!isFormEnabled) {
      notify("Invalid email or password");
      return;
    }
    const id = Date.now();
    login({ email, password, id });
  };

  const showEmpty = () => {
    localStorage.setItem("hideList", "true");
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <form className="login-form" noValidate onSubmit={handleSubmit}>
      <div className="login-form__fields">
        <div className="login-form__input-wrapper">
          <h5 className="login-form__label">Email</h5>
          <TextField
            variant="outlined"
            className="login-form__input login-form__input_email"
            name="email"
            type="email"
            placeholder="Enter your email"
            helperText={
              isEmailValid ? "" : "Please enter a correct email address"
            }
            value={email}
            error={!isEmailValid}
            autoComplete="on"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onFocus={() => setIsEmailValid(true)}
            onBlur={checkEmail}
          />
        </div>
        <div className="login-form__input-wrapper">
          <h5 className="login-form__label">Password</h5>
          <TextField
            variant="outlined"
            className="login-form__input login-form__input_password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            helperText={
              isPasswordValid ? "" : "Passwords must have at least 8 characters"
            }
            value={password}
            error={!isPasswordValid}
            autoComplete="on"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onFocus={() => setIsPasswordValid(true)}
            onBlur={checkPassword}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
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
