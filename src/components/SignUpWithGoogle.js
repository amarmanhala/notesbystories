import React from "react";
import styled from "styled-components";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Button } from "./Button";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";


const Content = styled.span`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;


export default function SignUpWithGoogle() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  let navigate = useNavigate();

  const registerWithGoogle = async () => {
    console.log("pop");
    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
      
          navigate("/");
  
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error);
        // ...
      });
  };
  return <Button onClick={() => registerWithGoogle()} bgColor="transparent"><Content><i style={{ marginRight: '8px' }}><FaGoogle></FaGoogle></i>Continue with Google</Content></Button>;
}
