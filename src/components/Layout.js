import React from "react";
import styled from "styled-components";

function Layout({ title }) {
  const Wrapper = styled.div`
    background-color: purple;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 10px;
    padding: 0px 30px;
    justify-items: stretch;
    grid-template-areas: "main";
  `;
  const Item1 = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 10px;
  `;
  const Item2 = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 10px;
  `;

  return (
    <Wrapper>
      <Item1>Item 1</Item1>
      <Item2>Item 2</Item2>
    </Wrapper>
  );
}
export default Layout;
