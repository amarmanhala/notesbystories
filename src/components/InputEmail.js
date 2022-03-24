import React from 'react'
import styled from "styled-components";
import { device } from "../Devices";

export default function InputEmail() {
  const Input = styled.input`
  background-color: transparent;
  border: 1px solid var(--system-gray3);
  outline: none;
  padding: 18px 14px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 6px;
  letter-spacing: 1px;
  margin-bottom: 0.8em;
  &:focus {
    border: 1px solid var(--system-gray);
  }
  &::placeholder {
    color: var(--system-gray3);
  }
  @media ${device.mobileM} {
    padding: 12px 10px;
    font-size: 14px;
    border-radius: 4px;
    font-weight: 400;
    }
    @media ${device.tablet} {
      padding: 18px 14px;
    }
    @media ${device.laptop} {
      padding: 18px 14px;
    }
  `;
  return (
    <>
      <Input type="email" required placeholder="Email Address" autocapitalize="off" autocomplete="off" autocorrect="off"></Input>
    </>
  )
}
