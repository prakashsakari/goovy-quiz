import "./Auth.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context";
import { useEffect, useState } from "react";

export const AuthLogin = () => {
  const [passwordtype, setPasswordType] = useState("password");

  const {
    state: { password, isEmailValid, email, display },
    passwordDispatch, userLogin, userSignup
  } = useAuth();

  const getClassName = (display) =>
    display === "none" ? "pass-check-text display-n" : "pass-check-text";

  const getButtonState = (password) => {
    return password.length < 6 ||
      password === "" ||
      !password.match("^[A-Za-z0-9]+$")
      ? true
      : false;
  };

  const handleLogin = () => {
    userLogin(email, password);
  }

  useEffect(() => {
    userSignup("vimal@gmail.com", "password");
  }, [])

  const handleLoginWithTestCredentials = () => {
    userLogin("vimal@gmail.com", "password");
  }

  return (
    <div className="d-grid">
      <div className="login-auth direction-column d-flex justify-center">
        <h2 className="auth-title">Login</h2>
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
            className="button cursor absolute pwd-icon-position"
            onClick={() =>
              passwordtype === "password"
                ? setPasswordType("text")
                : setPasswordType("password")
            }
          >
            <span className="material-icons-outlined ">
              visibility_off
            </span>
          </button>
        </div>
        <div className={getClassName(display)}>
          <span>Password must contain atleast 6 characters</span>
          <span>Password cannot contain any special character</span>
        </div>
        <div className="cta">
        <button
              className="login-btn button cursor btn-margin sign-up-btn padding-small"
              disabled={getButtonState(password)}
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className="login-btn button btn-outline-primary btn-margin sign-up-btn padding-small"
              
              onClick={handleLoginWithTestCredentials}
            >
              Login with test credentials
            </button>
          <div className="create-account d-flex align-center justify-center">
            <Link className="button cursor create-acc link" to="/signup">
              <span className="material-icons-outlined flex-row">
                <span className="new-account">Create New Account</span>
                arrow_forward_ios
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
