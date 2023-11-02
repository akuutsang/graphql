import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../Firebase";
import { SignIn } from "./auth/SignIn";

export const AuthDetails = () => {
  const [authUser, setAAuthUser] = useState("");
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAAuthUser(user);
      } else {
        setAAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);
  const userSignOut = () => {
    signOut(auth)
      .then((response) => {
        console.log("signed out successfully");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {authUser ? (
        <>
          <p>{`Signed In as ${authUser.email}`}</p>
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Signed out</p>
      )}
    </div>
  );
};
