import React from "react";
import styled from "styled-components";

const TextArea = styled.textarea`
  color: var(--text-color);
  background: transparent;
  //border: 1px solid red;
  outline: none;
  width: 100%;
  height: 90%;
  font-size: 34px;
  resize: none;
  letter-spacing: 1px;

`;
const TextAreaWrapper = styled.div`
  height: 90%;
  width: 100%;
  padding: 12px 30px;

`;

export default function EditorTextArea() {
  return (
    <TextAreaWrapper>
      <TextArea placeholder=" type something..."></TextArea>
    </TextAreaWrapper>
  );
}
