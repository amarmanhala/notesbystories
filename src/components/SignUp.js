import React from "react";
import styled from "styled-components";
import {Input} from "./Input";
import {Button} from "./Button";
import { device } from "../Devices";
import { Link } from "react-router-dom";


function SignUp() {
  const LoginPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: var(--top-nav-color);
  `;

  const LoginWrapper = styled.div`
    background: transparent;
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    width: 460px;
    padding: 50px;
    @media ${device.mobileM} { 
    width: 100%;
    padding: 20px;
  }
  @media ${device.tablet} { 
    width: 460px;
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
      <LoginWrapper>
        <H1Wrapper><H1>Sign Up for Notes</H1></H1Wrapper>
        <Input></Input>
        <Input></Input>
        <Button>Signup</Button>
        <SignUpLink to="/welcome">Already have an account? Log in</SignUpLink>
      </LoginWrapper>
    </LoginPage>
  );
}

export default SignUp;
