import React from 'react'
import styled from "styled-components";

const TextArea = styled.textarea`
width: 80%;
height: 100%;
`;
const TextAreaWrapper = styled.div`
height: 100%;
`;

export default function EditorTextArea() {
  return (
    
      <TextAreaWrapper><TextArea></TextArea></TextAreaWrapper>
    
  )
}
