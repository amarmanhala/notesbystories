import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "./Input";
import { Button } from "./Button";
import { device } from "../Devices";
import { Link, useNavigate } from "react-router-dom";
import { Header, NavContentWrapper, NavContent, ArrowWrapper } from "./Header";
import { FiArrowLeft } from "react-icons/fi";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase-config";
import { updateProfile } from "firebase/auth";
import ErrorMessage from "./ErrorMessage";
import SignUpWithGoogle from "./SignUpWithGoogle";

const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  width: 100%;
  height: 100vh;
  //height: -webkit-fill-available;
  background-color: var(--top-nav-color);
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  width: 100%;
  height: 100vh;
  height: -webkit-fill-available;
  background-color: transparent;
`;
const LoginWrapper = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  width: 420px;
  padding: 50px;
  @media ${device.mobileM} {
    width: 100%;
    padding: 20px;
  }
  @media ${device.tablet} {
    width: 420px;
  }
`;
const H1Wrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 1em;
`;
const H1 = styled.h1`
  font-size: 36px;
  font-weight: 600;
  @media ${device.mobileM} {
    font-size: 30px;
    font-weight: 500;
  }
  @media ${device.tablet} {
    font-size: 36px;
    font-weight: 600;
  }
`;
const SignUpLinkWrapper = styled.div`
  width: 100%;
  text-align: center;
`;
const SignUpLink = styled(Link)`
  margin-top: 1em;
  color: var(--blue);
  font-weight: 600;
  font-size: 18px;
  @media ${device.mobileM} {
    margin-top: 0.4em;
    font-weight: 500;
    font-size: 16px;
  }
  @media ${device.tablet} {
    margin-top: 1em;
    font-weight: 600;
    font-size: 18px;
  }
`;
const Divider = styled.hr`
  width: 100%;
  border-top: 1px solid var(--border-color);
  border-radius: 2px;
  margin: 50px 0;
  @media ${device.mobileM} {
    margin: 30px 0;
  }
  @media ${device.tablet} {
    margin: 50px 0;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const arrowRight = {
  fontSize: "20px",
  strokeWidth: "3",
};

function SignUp() {
  const provider = new GoogleAuthProvider();
  const [registerEmail, setregisteEmail] = useState("");
  const [registerPassword, setregisterPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitButtonLoading, setIsSubmitButtonLoading] = useState(false);
  let navigate = useNavigate();
  const [user, setuser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setuser(currentUser);
  });

  const register = async (event) => {
    event.preventDefault();
    try {
      setIsSubmitButtonLoading(true);
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .then(() => {
          navigate("/");
        });
    } catch (error) {
      setIsSubmitButtonLoading(false);
      setError(true);
      setErrorMessage(error.code);
    }
  };
  return (
    <LoginPage>
      <Header>
        <Link to="/">
          <NavContentWrapper>
            <ArrowWrapper>
              <FiArrowLeft style={arrowRight} />
            </ArrowWrapper>
            <NavContent>Go back to the notes ??????.</NavContent>
          </NavContentWrapper>
        </Link>
      </Header>
      <Main>
        <LoginWrapper>
          <H1Wrapper>
            <H1>{user?.email}</H1>
            <H1>Sign up for notes</H1>
            {error ? (
              <ErrorMessage message={errorMessage}></ErrorMessage>
            ) : null}
          </H1Wrapper>
          <Form onSubmit={register}>
            <Input
              type="email"
              placeholder="Email Address"
              onChange={(event) => setregisteEmail(event.target.value)}
              required
              autoComplete="off"
              spellCheck="false"
              autoCapitalize="off"
              autoCorrect="off"
            ></Input>

            <Input
              type="password"
              placeholder="Password"
              onChange={(event) => setregisterPassword(event.target.value)}
              required
            ></Input>

           
            <Button type="submit" bgColor="#5E5CE6" hoverBgColor="#6462F5" disabled={isSubmitButtonLoading}>
              Sign Up
            </Button>
          </Form>
          <SignUpWithGoogle></SignUpWithGoogle>
          <Divider></Divider>
          <SignUpLinkWrapper tabIndex="0">
            <SignUpLink to="/welcome">
              ???? Already have an account? Log in
            </SignUpLink>
          </SignUpLinkWrapper>
        </LoginWrapper>
      </Main>
    </LoginPage>
  );
}

export default SignUp;
