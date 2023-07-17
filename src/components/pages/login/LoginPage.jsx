import { useState } from "react";
import { useLogin, useNotify } from "react-admin";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import img1 from "../../../assets/images/login_img_1.png";
import img2 from "../../../assets/images/login_img_2.png";
import img3 from "../../../assets/images/login_img_3.png";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <div className="login-page">
      <div className="login-page__wrapper">
        <div className="login-page__form-block form-block">
          <h1 className="form-block__title">Login to lorem ipsum</h1>
          <p className="form-block__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
          <form className="form-block__form login-form" onSubmit={handleSubmit}>
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
        </div>
      </div>
      <div className="login-page__wrapper decorations-block">
        <div className="decorations-block__images">
          <img
            className="decorations-block__image decorations-block__image_1"
            src={img1}
            alt="img_1"
          />
          <img
            className="decorations-block__image decorations-block__image_2"
            src={img2}
            alt="img_2"
          />
          <img
            className="decorations-block__image decorations-block__image_3"
            src={img3}
            alt="img_3"
          />
        </div>
        <h2 className="decorations-block__title">logo</h2>
        <p className="decorations-block__text">
          Lorem ipsum dolor sit amet consectetur adipiscing elit
        </p>
      </div>
    </div>
  );
};
