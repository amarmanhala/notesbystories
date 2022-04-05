import React from "react";
import styled from "styled-components";
import { device } from "../Devices";
import {
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { FiLogOut } from "react-icons/fi";

const LogoutButton = styled.button`
  font-size: 16px;
  color: var(--system-gray);
  &:hover {
    color: #FF453A;
  }
  @media ${device.mobileM} {
    font-size: 12px;
  }
  @media ${device.laptop} {
    font-size: 16px;  }
`;
export default function Logout() {
  const signout = async () => {
    await signOut(auth);
  };
  return <LogoutButton type="button" onClick={() => signout()} title="Logout"><FiLogOut></FiLogOut></LogoutButton>;
}
