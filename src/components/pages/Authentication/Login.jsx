import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useStore } from "../../../store/app-store-context";
import { emailValidate, passwordValidate } from "../../../util";
import "./auth.css";

const Login = () => {
  const getEmail = () => JSON.parse(localStorage.getItem("rememberme")) || "";
  const { state } = useLocation();
  const [email, setEmail] = useState(getEmail);
  const [password, setPassword] = useState("");

  const [isEmailValid, setIsEmailVaild] = useState(false);
  const [isPasswordValid, setIsPasswordVaild] = useState(false);

  const [rememberMe, setRememberMe] = useState(false);
  const [isFormValid, setFormValid] = useState(false);
  const { isLoggedIn, actions } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    const path = state?.from?.path || "/";
    if (isLoggedIn) {
      navigate(path);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    setFormValid(isEmailValid && isPasswordValid);
  }, [isEmailValid, isPasswordValid]);

  const loginHandler = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }
    actions.login({ email, password });
    if (rememberMe) {
      localStorage.setItem("rememberme", JSON.stringify(email));
    } else {
      localStorage.removeItem("rememberme");
    }
    setEmail("");
    setPassword("");
  };

  const guestLogin = () => {
    const email = "adarshbalika@gmail.com";
    const password = "adarsh@1234";
    actions.login({ email, password });
  };

  const onEmailChange = (value) => {
    const isEmailValid = emailValidate(value);
    setIsEmailVaild(isEmailValid);
  };

  const onPasswordChange = (value) => {
    const isPasswordValid = passwordValidate(value);
    setIsPasswordVaild(isPasswordValid);
  };

  const confirmationBuilder = (label, handler, checked) => {
    return (
      <div className="flex-row flex-jc">
        <input
          id="confirmation"
          type="checkbox"
          value={checked}
          onClick={handler}
        />
        <label className="confirmation font-normal" htmlFor="confirmation">
          {label}
        </label>
      </div>
    );
  };
  const onClickRememeberMe = (e) => {
    setRememberMe(e.target.checked);
  };

  const getConfirmationSection = () => {
    const confirmationText = "Remember me";
    const handler = onClickRememeberMe;
    const checked = rememberMe;
    return confirmationBuilder(confirmationText, handler, checked);
  };
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
          placeholder="tony.stark@gmail.com"
          autoComplete="off"
          onInput={(e) => setEmail(e.target.value)}
          onBlur={(e) => onEmailChange(e.target.value)}
        />
        {!isEmailValid && !!email && (
          <span className="inline-block validation__msg input__error">
            <i className="fas fa-exclamation-triangle"></i>
            <span className="px-3">Email is invalid</span>
          </span>
        )}
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
          onBlur={(e) => onPasswordChange(e.target.value)}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isPasswordValid && !!password && (
          <span className="inline-block validation__msg input__error">
            <i className="fas fa-exclamation-triangle"></i>
            The password must have minimum and maximum of 8 and 12 characters
            respectively, at least 1 letter, 1 number and 1 special character
            given below @$!%*#?&
          </span>
        )}
      </div>
    </>
  );
  const classNames = isFormValid
    ? "btn btn__primary my-5"
    : "btn btn__secondary my-5";
  const formButton = (
    <button
      type="button"
      className={classNames}
      onClick={loginHandler}
      disable={"true"}
    >
      Login
    </button>
  );
  const guestLoginBtn = (
    <button
      type="button"
      className="btn btn__primary my-5"
      onClick={guestLogin}
    >
      Guest Login
    </button>
  );
  const redirect = (
    <Link to="/signup" className="no-underline">
      Create New Account {">"}
    </Link>
  );

  return (
    <div className="auth__container flex-column flex-jc">
      <div className="login__container">
        <section className="login__label">
          <h3>Login</h3>
        </section>
        <section>
          <form className="login__form form">
            {userDetails}
            <div className="flex-row flex-jc">
              {getConfirmationSection()}

              <div className="margin-auto--l text-highlight">
                Forgot your password?
              </div>
            </div>
            {formButton}
            {guestLoginBtn}
          </form>
          <div className="margin-auto--l text-highlight font-medium">
            {redirect}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
