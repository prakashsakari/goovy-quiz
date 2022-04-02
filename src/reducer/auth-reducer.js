export const passwordReducer = (state, { type, payload }) => {
    switch (type) {
      case "PASSWORD_CHECK":
        return {
          ...state,
          password: payload,
          display:
            (payload.length >= 6 && payload.match("^[A-Za-z0-9]+$")) ||
            payload === ""
              ? "none"
              : ""
        };
      case "CONFIRM_PASS_CHECK":
        return {
          ...state,
          confirmPassword: payload
        };
  
      case "EMAIL_CHECK":
        return {
          ...state,
          email: payload,
          isEmailValid: payload.includes("@") ? true : false
        };
  
      default:
        return state;
    }
  };
  