import React from "react";
import styled from "styled-components";
import ChangeBackground from "./ChangeBackground";
import EditorToolBox from "./EditorToolBox";

const EditorHeaderWrapper = styled.div`
  background-color: transparent;
  width: 100%;
  min-height: var(--header-height);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  justify-content: space-between;
`;

export default function EditorHeader() {
  return (
    <EditorHeaderWrapper>
      <EditorToolBox></EditorToolBox>
      <ChangeBackground></ChangeBackground>
    </EditorHeaderWrapper>
  );
}
