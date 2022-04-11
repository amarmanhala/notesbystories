import React, {useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import Editor from "./Editor";
import { Header, NavContentWrapper, NavContent, ArrowWrapper } from "./Header";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import useIsUSerLogged from "../hooks/useIsUserLogged";
import UserLoggedHeader from "./UserLoggedHeader";
import styled from "styled-components";

function Main() {
  
  const isUserLogged = useIsUSerLogged();
  console.log(isUserLogged);

  const PageWrapper = styled.div`
  display: flex; 
  flex-direction: column;
  height: 100vh;
  `;
  
  const arrowRight = {
    fontSize: "20px",
    strokeWidth: "3",
  };
  
  return (
    <PageWrapper>
      {!isUserLogged ? (
      <Header>
        <Link to="/welcome">
          <NavContentWrapper>
            <NavContent>
              Login or Sign up to store your notes permanently ✨
            </NavContent>
            <ArrowWrapper>
              <FiArrowRight style={arrowRight} />
            </ArrowWrapper>
          </NavContentWrapper>
        </Link>
      </Header> ) : 
       ( <UserLoggedHeader></UserLoggedHeader> ) }
      <Editor></Editor>
    </PageWrapper>
  );
}
export default Main;
