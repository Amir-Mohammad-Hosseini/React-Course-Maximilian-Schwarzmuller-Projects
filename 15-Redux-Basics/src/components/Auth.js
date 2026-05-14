import { useDispatch } from "react-redux";
import classes from "./Auth.module.css";
import { useState } from "react";
import { authenticationActions } from "../store/slices/authentication";

const Auth = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    if(emailInput.length && passwordInput.trim().length > 7){
      dispatch(authenticationActions.login())
    }
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleSubmitLogin}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={emailInput}
              onChange={(event) => setEmailInput(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={passwordInput}
              onChange={(event) => setPasswordInput(event.target.value)}
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
