import React from 'react'
import styled from 'styled-components'

export default function LoginButton() {

  const Button = styled.button`
  background-color: var(--blue);
  
  padding: 16px 0;
  border-radius: 6px;
  font-weight: 900;
  font-size: 18px;
  border: 1px solid #000;
  &::hover {

  }
  &::active {

  }
  &::focus {

  }
  `;
  return (
    <>
      <Button tabIndex="3">Login</Button>
    </>
  )
}
