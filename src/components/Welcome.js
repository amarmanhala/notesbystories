import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "./Input";
import { Button } from "./Button";
import { device } from "../Devices";
import { Link } from "react-router-dom";
import { Header, NavContentWrapper, NavContent, ArrowWrapper } from "./Header";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";
const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  width: 100%;
  height: 100vh;
  height: -webkit-fill-available;
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
const arrowRight = {
  fontSize: "20px",
  strokeWidth: "3",
};
function Welcome() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setuser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setuser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const signout = async () => {
    await signOut(auth);
  };

  return (
    <LoginPage>
      <Header>
        <Link to="/">
          <NavContentWrapper>
            <ArrowWrapper>
              <FiArrowLeft style={arrowRight} />
            </ArrowWrapper>
            <NavContent>Go back to the notes ✍️.</NavContent>
          </NavContentWrapper>
        </Link>
      </Header>
      <Main>
        <LoginWrapper>
          <H1Wrapper>
            <H1>Login in to Notes</H1>
            <H1>{user?.email}</H1>
          </H1Wrapper>
          <Input
            type="email"
            placeholder="Email Address"
            onChange={(event) => setLoginEmail(event.target.value)}
          ></Input>
          <Input
            type="password"
            placeholder="Password"
            onChange={(event) => setLoginPassword(event.target.value)}
          ></Input>
          <Button type="submit" onClick={login}>
            Login
          </Button>
          <Button type="submit" onClick={signout}>
            Signout
          </Button>

          <Divider></Divider>
          <SignUpLinkWrapper tabIndex="0">
            <SignUpLink to="/signup">
              🐱 Don't have an account? Sign Up
            </SignUpLink>
          </SignUpLinkWrapper>
        </LoginWrapper>
      </Main>
    </LoginPage>
  );
}

export default Welcome;
