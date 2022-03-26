import styled from "styled-components";
import { device } from "../Devices";

export const Button = styled.button`
  background-color: ${(props) => props.bgColor || 'var(--blue)'};
  padding: 12px 0;

  font-weight: 500;
  font-size: 20px;
  border: 1px solid #000;
  &::hover {
  }
  &::active {
  }
  &::focus {
  }
  @media ${device.mobileM} {
    font-size: 14px;
    font-weight: 700;
    border-radius: 8px;
    padding: 12px 0;
  }
  @media ${device.tablet} {
    font-size: 16px;
    font-weight: 600;
  }
  @media ${device.laptop} {
    font-size: 16px;
    font-weight: 600;
  }
`;