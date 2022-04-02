import React from 'react'
import { FiList } from "react-icons/fi";
import styled from "styled-components";

const Wrapper = styled.div`
font-size: var(--icon-font-size);
`;

export default function ChangeList() {
  return (
    <Wrapper>
      <FiList></FiList>
    </Wrapper>
  )
}
