import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { useStore } from "../../../store/app-store-context";

import "./auth.css";

const Auth = ({ type }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, actions } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);
  const loginHandler = (e) => {
    e.preventDefault();
    actions.login({ email, password });
    console.log(email, password);
    setEmail("");
    setPassword("");
  };
  const signUpHandler = (e) => {
    e.preventDefault();
    actions.authenticate({ email, password });
    setEmail("");
    setPassword("");
  };
  const title = type === "login" ? "Login" : "Sign Up";
  const confirmationText =
    type === "login" ? "Remember me" : "I accept all Terms & Conditions";
  const userDetails = (
    <>
      <div className="form-group">
        <label className="label font-medium" htmlFor="username" name="username">
          Username :
        </label>
        <input
          id="username"
          className="input"
          type="text"
          value={email}
          placeholder="tony.stark@xyz.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="label font-medium" name="password" htmlFor="password">
          Password :
        </label>
        <input
          id="password"
          className="input"
          type="password"
          placeholder="*************"
          autoComplete="on"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </>
  );

  const formButton =
    type === "login" ? (
      <button
        type="button"
        className="btn btn__primary my-5"
        onClick={loginHandler}
      >
        Login
      </button>
    ) : (
      <button
        type="button"
        className="btn btn__primary my-5"
        onClick={signUpHandler}
      >
        Create New Account
      </button>
    );
  const redirect =
    type === "login" ? (
      <Link to="/signup" className="no-underline">
        Create New Account {">"}
      </Link>
    ) : (
      <Link to="/login" className="no-underline">
        Already have an account {">"}
      </Link>
    );
  return (
    <div className="auth__container flex-column flex-jc">
      <div className="login__container">
        <section className="login__label">
          <h3>{title}</h3>
        </section>
        <section>
          <form className="login__form form">
            {userDetails}
            <div className="flex-row flex-jc">
              <input id="confirmation" type="checkbox" />
              <label
                className="confirmation font-normal"
                htmlFor="confirmation"
              >
                {confirmationText}
              </label>
              {type === "login" && (
                <div className="margin-auto--l text-highlight">
                  Forgot your password?
                </div>
              )}
            </div>
            {formButton}
          </form>
          <div className="margin-auto--l text-highlight font-medium">
            {redirect}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Auth;
