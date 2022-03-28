import React from "react";
import styled from "styled-components";
import { authErrors } from "../FirebaseErrors";

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--error);
  padding: 16px 14px;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 500;
  margin-top: 2em;
`;

const Message = styled.span`
  font-size: 16px;
`;

export default function ErrorMessage(props) {
  let message = props.message;
  message = message.split("/").pop();
  message = authErrors[message];
  console.log(message)

  return (
    <Wrapper>
      <Message>{message}</Message>
    </Wrapper>
  );
}
