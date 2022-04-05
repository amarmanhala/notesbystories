import React from "react";
import styled from "styled-components";
import ChangeBackground from "./ChangeBackground";

const EditorHeaderWrapper = styled.div`
  background-color: transparent;
  width: 100%;
  min-height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  justify-content: flex-end;

`;

export default function EditorHeader() {
  return <EditorHeaderWrapper>
    <ChangeBackground></ChangeBackground>
  </EditorHeaderWrapper>;
}
