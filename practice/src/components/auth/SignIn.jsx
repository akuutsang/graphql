import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../Firebase";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    // e.preventDefault() will prevent us from losing data when our page reloads
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={signIn}>
        <h1>Log In</h1>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import React, { useState } from "react";

// export const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const signIn = (e) => {
//     e.preventDefault();
//     // e.preventDefault() will prevent us from losing data when our page reloads
//     const auth = getAuth(); // Get the auth object
//     signInWithEmailAndPassword(auth, email, password)
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div>
//       <form onSubmit={signIn}>
//         <h1>Log In</h1>
//         <input
//           type="email" // Use "email" instead of "Email"
//           placeholder="Enter your Email"
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//         />
//         <input
//           type="password" // Use "password" instead of "Password"
//           placeholder="Enter your Password"
//           value={password}
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };
