import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeBackground } from '../features/ChangeBackground';
import { FiCircle } from "react-icons/fi";
import styled from "styled-components";

const Wrapper = styled.div`
font-size: var(--icon-font-size);
`;

export default function ChangeBackground() {
  const color = useSelector((state) => state.changeBackground.background)
  const dispatch = useDispatch()

  return (
    <Wrapper style={{ backgroundColor: color }}>
      <FiCircle onClick={() => dispatch(changeBackground())}
></FiCircle>
    </Wrapper>
  )
}
