import React from "react";
import styled from "styled-components";
import { device } from "../../Devices";

function Editor({ title }) {
  const Wrapper = styled.main`
    border-right: 1px solid var(--border-color);
    display: flex;
    flex: 2;
    width: 70%;
    min-height: calc(100vh - var(--header-height));
    align-items: center;
    flex-direction: row;
    justify-content: center;

    @media ${device.mobileM} { 
    width: 100%;
    border: none;
  }
  @media ${device.laptop} { 
    width: 70%;
    border-right: 1px solid var(--border-color);
  }
  `;

  return (
    <Wrapper>
      hj
    </Wrapper>
  );
}
export default Editor;
