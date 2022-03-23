import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import About from "../About";

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
    @media (max-width: 768px) {
      min-height: 38px;
    }
  `;
  const NavContent = styled.span`
    font-size: 15px;
    font-weight: 600;
    @media (max-width: 768px) {
      font-size: 12px;
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
      <Routes>
        <Route path="about" element={<About />} />
      </Routes>
      <Wrapper>
        <NavContentWrapper>
          <NavContent>
            <Link to="/about">Login or Sign up to store your notes permanently ✨</Link>
          </NavContent>{" "}
          <ArrowRightWrapper>
            <FiArrowRight style={arrowRight} />
          </ArrowRightWrapper>
        </NavContentWrapper>
      </Wrapper>
    </>
  );
}
export default Header;
