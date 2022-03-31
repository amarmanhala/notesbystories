import React from "react";
import styled from "styled-components";
import {
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";

const LogoutButton = styled.button`
  font-size: 16px;
  color: var(--system-gray);
  &:hover {
    color: var(--system-gray3);
  }
`;
export default function Logout() {
  const signout = async () => {
    await signOut(auth);
  };
  return <LogoutButton type="button" onClick={() => signout()}>Logout</LogoutButton>;
}
