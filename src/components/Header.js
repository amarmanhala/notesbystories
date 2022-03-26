import React, {useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../Devices";

  export const Header = styled.header`
    background-color: var(--top-nav-color);
    display: flex;
    width: 100%;
    min-height: var(--header-height);
    padding: 0px 30px;
    border-bottom: 1px solid var(--border-color);
    align-items: center;
    flex-direction: row;
    justify-content: center;
    @media ${device.mobileM} {
      padding: 0 4px;
    }
  `;
  export const NavContent = styled.span`
    font-size: 14px;
    font-weight: 600;
    @media ${device.mobileM} {
      font-size: 12px;
      font-weight: 600;
    }
    @media ${device.tablet} {
      font-size: 16px;
      font-weight: 600;
    }
    @media ${device.laptop} {
      font-size: 16px;
      font-weight: 600;
    }
  `;
  export const NavContentWrapper = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-items: center;
    align-items: center;
    padding: 0 4px;
  `;
  export const ArrowWrapper = styled.span`
    padding: 0 4px;
  `;
  

