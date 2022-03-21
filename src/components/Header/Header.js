import React from "react";
import styled from "styled-components";

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
  const NavContent = styled.nav`
    font-size: 14px;
    @media (max-width: 768px) {
        font-size: 11px;
  }
  `;

  return (
    <Wrapper>
      <NavContent>Login or Sign up to store your notes permanently 🤗</NavContent>
    </Wrapper>
  );
}
export default Header;
