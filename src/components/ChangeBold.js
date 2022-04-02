import React from 'react'
import { FiBold } from "react-icons/fi";
import styled from "styled-components";

const Wrapper = styled.div`
font-size: var(--icon-font-size);
`;

export default function ChangeBold() {
  return (
    <Wrapper>
      <FiBold></FiBold>
    </Wrapper>
  )
}
