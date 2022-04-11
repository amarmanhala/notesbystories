import React from "react";
import styled from "styled-components";
import { device } from "../../Devices";
import EditorToolBox from "../EditorToolBox";
import EditorHeader from "../EditorHeader";
import EditorTextArea from "../EditorTextArea";

function Editor({ title }) {
  const Wrapper = styled.main`
    border-right: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
  height: 100%;
    width: 70%;
    //min-height: calc(100vh - var(--header-height));
    align-items: center;
    //flex-direction: row;
    //flex-wrap: wrap;
    justify-content: center;
    

    @media ${device.mobileM} { 
    width: 100%;
    border-right: none;
  }

  @media ${device.laptopL} { 
    width: 70%;
    height: 100%;
    border-right: 1px solid var(--border-color);

  }
  `;

  const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  `;

  return (
    <Wrapper>
      <EditorHeader></EditorHeader>
      <InnerWrapper>
        <EditorTextArea></EditorTextArea>
      </InnerWrapper>
    </Wrapper>
  );
}
export default Editor;
