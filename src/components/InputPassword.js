import React from 'react'
import styled from "styled-components";

export default function InputPassword() {
  const Input = styled.input`
  background-color: transparent;
  border: 1px solid var(--system-gray3);
  outline: none;
  padding: 18px 14px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 6px;
  letter-spacing: 1px;
  margin-bottom: 0.7em;

  &:focus {
    border: 1px solid var(--system-gray);
  }
  &::placeholder {
    color: var(--system-gray3);
  }
  `;
  return (
    <>
      <Input type="password" required placeholder="Password" autocapitalize="off" autocomplete="off" autocorrect="off"></Input>
    </>
  )
}
