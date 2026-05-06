import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import useInput from "../hooks/useInput.js";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError : hasEmailError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));
  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError : hasPasswordError,
  } = useInput("", (value) => isNotEmpty(value) && hasMinLength(value , 6));

  const handleSubmission = (event) => {
    event.preventDefault();
    if(hasEmailError || hasPasswordError){
      return
    }
    console.log(emailValue , passwordValue);
  };

  return (
    <form onSubmit={handleSubmission}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          value={emailValue}
          onBlur={handleEmailBlur}
          onChange={(event) => handleEmailChange(event)}
          error={hasEmailError && "Please enter a valid email address."}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          value={passwordValue}
          onBlur={handlePasswordBlur}
          onChange={(event) => handlePasswordChange(event)}
          error={hasPasswordError && "Please enter a valid Password."}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
