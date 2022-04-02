import React from 'react'
import { FiCircle } from "react-icons/fi";
import styled from "styled-components";

const Wrapper = styled.div`
font-size: var(--icon-font-size);
`;

export default function ChangeBackground() {
  return (
    <Wrapper>
      <FiCircle></FiCircle>
    </Wrapper>
  )
}
