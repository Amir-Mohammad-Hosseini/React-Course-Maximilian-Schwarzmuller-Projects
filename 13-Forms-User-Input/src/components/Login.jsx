import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInvalid , setEmailIsInvalid] = useState(false)

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmission = (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    console.log(enteredEmail, " , ", enteredPassword);
    const emailIsValid = enteredEmail.includes("@")
    // emailRef.current.value = "";
    // passwordRef.current.value = "";
    if(!emailIsInvalid){
      setEmailIsInvalid(true)
      return
    }
    setEmailIsInvalid(false)
    console.log("Sending HTTP request...")
  };

  return (
    <form onSubmit={handleSubmission}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="text" name="email" ref={emailRef} />
          <div className="control-error">
            {emailIsInvalid && <p>Pleaase enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={passwordRef}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
