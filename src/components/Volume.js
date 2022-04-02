import React from 'react'
import { FiVolume2 } from "react-icons/fi";
import styled from "styled-components";

const Wrapper = styled.div`
font-size: var(--icon-font-size);
`;

export default function Volume() {
  return (
    <Wrapper>
      <FiVolume2></FiVolume2>
    </Wrapper>
  )
}
