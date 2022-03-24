import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import { device } from "../../Devices";

function Header({ title }) {
  const Wrapper = styled.header`
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
  const NavContent = styled.span`
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
  const NavContentWrapper = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-items: center;
    align-items: center;
    padding: 0 4px;
  `;
  const ArrowRightWrapper = styled.span`
    padding: 0 4px;
  `;
  const arrowRight = {
    fontSize: "20px",
    strokeWidth: "3",
  };
  return (
    <>
      <Wrapper>
       <Link to="/welcome">
          <NavContentWrapper>
            <NavContent>
              Login or Sign up to store your notes permanently ✨
            </NavContent>{" "}
            <ArrowRightWrapper>
              <FiArrowRight style={arrowRight} />
            </ArrowRightWrapper>
          </NavContentWrapper>
       </Link>
      </Wrapper>
    </>
  );
}
export default Header;
