import React from 'react'
import { FiType } from "react-icons/fi";
import styled from "styled-components";

const Wrapper = styled.div`
font-size: var(--icon-font-size);
`;

export default function ChangeType() {
  return (
    <Wrapper>
      <FiType></FiType>
    </Wrapper>
  )
}
