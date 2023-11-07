import { LoginForm } from "./LoginForm";
import img1 from "../../../assets/images/login_img_1.png";
import img2 from "../../../assets/images/login_img_2.png";
import img3 from "../../../assets/images/login_img_3.png";
import { FC } from "react";

export const LoginPage: FC = () => {
  return (
    <div className="login-page">
      <div className="login-page__form-wrapper">
        <div className="login-page__form-block form-block">
          <h1 className="form-block__title">Login to lorem ipsum</h1>
          <p className="form-block__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
          <LoginForm />
        </div>
      </div>
      <div className="login-page__decorations-wrapper">
        <div className="login-page__decorations-block decorations-block">
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
    </div>
  );
};
