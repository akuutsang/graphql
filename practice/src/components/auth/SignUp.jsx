import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../Firebase";

export const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signUp = (e) => {
    e.preventDefault();
    // e.preventDefault() will prevent us from losing data when our page reloads
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={signUp}>
        <h1>Create an Account</h1>
        <input
          type="Email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          type="Password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
