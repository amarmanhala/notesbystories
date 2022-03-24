import React from "react";
import styled from "styled-components";
import { Input } from "./Input";
import {Button} from "./Button";
import { device } from "../Devices";
import { Link } from "react-router-dom";
import Header from "./Header";

function Welcome() {
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
  `;
  const SignUpLink = styled(Link)`
    margin-top: 1em;
    color: var(--blue);
    font-weight: 600;
    font-size: 18px;
  `;

  return (
    <LoginPage>
      <Header></Header>
     <Main>
        <LoginWrapper>
          <H1Wrapper>
            <H1>Login in to Notes</H1>
          </H1Wrapper>
          <Input type="email" placeholder="Email Address"></Input>
          <Input type="password" placeholder="Password"></Input>
          <Button type="submit">Login</Button>
          <SignUpLink to="/signup">Don't have an account? Sign Up</SignUpLink>
        </LoginWrapper>
     </Main>
    </LoginPage>
  );
}

export default Welcome;
