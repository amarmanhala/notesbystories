import React from "react";
import styled from "styled-components";
import { device } from "../../Devices";
import EditorToolBox from "../EditorToolBox";

function Editor({ title }) {
  const Wrapper = styled.main`
    border-right: 1px solid var(--border-color);
    display: flex;
    flex: 2;
    width: 70%;
    min-height: calc(100vh - var(--header-height));
    align-items: flex-start;
    flex-direction: row;
    //justify-content: center;

    @media ${device.mobileM} { 
    width: 100%;
    border-right: none;
  }
  @media ${device.laptopL} { 
    width: 70%;
    border-right: 1px solid var(--border-color);

  }
  `;

  return (
    <Wrapper>
      <EditorToolBox></EditorToolBox>
    </Wrapper>
  );
}
export default Editor;
