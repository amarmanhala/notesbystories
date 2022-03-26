import React from "react";
import styled from "styled-components";
import { device } from "../Devices";

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid var(--system-gray3);
  outline: none;
  padding: 16px 14px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 6px;
  letter-spacing: 1px;
  margin-bottom: 0.8em;
  font-size: 100%;
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
    border-radius: 8px;
    font-weight: 400;
    margin-bottom: 1em;
  }
  @media ${device.tablet} {
    padding: 14px 14px;
    font-size: 16px;
    font-weight: 300;
  }
  @media ${device.laptop} {
    padding: 14px 14px;
    font-size: 16px;
    font-weight: 300;
  }
`;
