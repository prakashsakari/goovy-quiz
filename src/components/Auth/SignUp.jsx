import "./Auth.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";

export const AuthSignUp = () => {
  const [passwordtype, setPasswordType] = useState("password");
  const [confirmPasswordtype, setConfirmPasswordType] = useState("password");

  const {
    state: { password, confirmPassword, isEmailValid, email, display },
    passwordDispatch
  } = useAuth();

  const getClassName = (display) =>
    display === "none" ? "pass-check-text display-n" : "pass-check-text";

  const getButtonState = (password, confirmPassword) => {
    return password !== confirmPassword ||
      password.length < 6 ||
      password === "" ||
      !password.match("^[A-Za-z0-9]+$")
      ? true
      : false;
  };

  return (
    <div className="d-grid">
      <div className="login-auth direction-column d-flex justify-center">
        <h2 className="auth-title">Signup</h2>
        <div className="form-container">
          <label className="form-label">Firtsname</label>
          <input
            type="email"
            className="form-input lh-ls"
            placeholder="Prakash"
          />
        </div>
        <div className="form-container">
          <label className="form-label">Last Name</label>
          <input
            type="email"
            className="form-input lh-ls"
            placeholder="Sakari"
          />
        </div>

        <div className="form-container">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-input lh-ls"
            placeholder="name@example.com"
            onChange={(e) =>
              passwordDispatch({
                type: "EMAIL_CHECK",
                payload: e.target.value
              })
            }
          />
        </div>
        {!isEmailValid && email !== "" && (
          <p className="pass-check-text">
            Email Id should be of type name@example.com
          </p>
        )}

        <div className="form-container relative">
          <label className="form-label">Password</label>
          <input
            type={passwordtype}
            className="form-input lh-ls"
            placeholder="*********"
            onChange={(e) =>
              passwordDispatch({
                type: "PASSWORD_CHECK",
                payload: e.target.value
              })
            }
          />
          <button
            className="button cursor"
            onClick={() =>
              passwordtype === "password"
                ? setPasswordType("text")
                : setPasswordType("password")
            }
          >
            <span className="material-icons-outlined absolute pwd-icon-position">
              visibility_off
            </span>
          </button>
        </div>
        <div className={getClassName(display)}>
          <span>Password must contain atleast 6 characters</span>
          <span>Password cannot contain any special character</span>
        </div>
        <div className="form-container relative">
          <label className="form-label">Confirm Password</label>
          <input
            type={confirmPasswordtype}
            className="form-input lh-ls"
            placeholder="*********"
            onChange={(e) =>
              passwordDispatch({
                type: "CONFIRM_PASS_CHECK",
                payload: e.target.value
              })
            }
          />
          <button
            className="button cursor"
            onClick={() =>
              confirmPasswordtype === "password"
                ? setConfirmPasswordType("text")
                : setConfirmPasswordType("password")
            }
          >
            <span className="material-icons-outlined absolute pwd-icon-position">
              visibility_off
            </span>
          </button>
        </div>
        {password !== confirmPassword && confirmPassword !== "" && (
          <p className="pass-check-text">Passwords don't match</p>
        )}

        <div className="remember">
          <label className="padding-all-8 label-remember d-flex align-center">
          <input type="checkbox" className="check-box" />
          I accept all Terms & Conditions
          </label>
        </div>

        <div className="cta">
          <Link to="/login">
            <button
              disabled={getButtonState(password, confirmPassword)}
              className="login-btn button btn-primary cursor btn-margin sign-up-btn"
            >
              Create New Account
            </button>
          </Link>
          <div className="create-account d-flex align-center justify-center">
            <Link className="button cursor create-acc link" to="/login">
              <span className="material-icons-outlined flex-row">
                <span className="new-account">Already have an Account</span>
                arrow_forward_ios
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
