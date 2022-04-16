import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useStore } from "../../../store/app-store-context";
import { emailValidate, passwordValidate } from "../../../util";
import "./auth.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailVaild] = useState(true);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordVaild] = useState(true);

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isFormValid, setFormValid] = useState(false);
  const { isLoggedIn, actions } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    setFormValid(isEmailValid && isPasswordValid);
  }, [isEmailValid, isPasswordValid]);

  const signUpHandler = (e) => {
    e.preventDefault();
    if (!acceptTerms) {
      return;
    }
    actions.authenticate({ email, password });
    setEmail("");
    setPassword("");
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

  const onClickAcceptTerms = (e) => {
    setAcceptTerms(e.target.checked);
  };
  const getConfirmationSection = () => {
    const confirmationText = "I accept all Terms & Conditions";
    const handler = onClickAcceptTerms;
    const checked = acceptTerms;
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
          onChange={(e) => setEmail(e.target.value)}
          onBlur={(e) => onEmailChange(e.target.value)}
        />
        {!isEmailValid && !!email && (
          <span className="inline-block validation__msg input__error">
            <i className="fas fa-exclamation-triangle"></i>
            Email is invalid
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
  const classNames =
    acceptTerms && isFormValid
      ? "btn btn__primary my-5"
      : "btn btn__secondary my-5";
  const formButton = (
    <button type="button" className={classNames} onClick={signUpHandler}>
      Create New Account
    </button>
  );
  const redirect = (
    <Link to="/login" className="no-underline">
      Already have an account {">"}
    </Link>
  );

  return (
    <div className="auth__container flex-column flex-jc">
      <div className="login__container">
        <section className="login__label">
          <h3>Sign Up</h3>
        </section>
        <section>
          <form className="login__form form">
            {userDetails}
            <div className="flex-row flex-jc">{getConfirmationSection()}</div>
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

export default SignUp;
