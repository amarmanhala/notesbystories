import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../Devices";
import AddUserName from "./AddUserName";
import Logout from "./Logout";

const UserLoggedHeaderWrapper = styled.header`
  background-color: var(--top-nav-color);
  display: flex;
  width: 100%;
  min-height: var(--header-height);
  padding: 0px 60px;
  border-bottom: 1px solid var(--border-color);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  @media ${device.mobileM} {
    padding: 0 4px;
  }
  @media ${device.laptop} {
    padding: 0 50px;
  }
`;
const LogoutWrapper = styled.div`
display: flex;
flex-direction: row;
`;
const ProfileWrapper = styled.div`
display: flex;
flex-direction: row;
`;

export default function UserLoggedHeader(props) {
  return <UserLoggedHeaderWrapper>
    <ProfileWrapper>
      <AddUserName></AddUserName>
    </ProfileWrapper>
    <LogoutWrapper><Logout></Logout></LogoutWrapper>
    
  </UserLoggedHeaderWrapper>;
}
