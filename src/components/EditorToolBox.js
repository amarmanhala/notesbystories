import React from "react";
import styled from "styled-components";
import ChangeBackground from "./ChangeBackground";
import ChangeColor from "./ChangeColor";
import ChangeList from "./ChangeList";
import Volume from "./Volume";
import ChangeBold from "./ChangeBold";
import ChangeType from "./ChangeType";

const EditorToolBoxWrapper = styled.div`
  background-color: transparent;
  min-height: var(--header-height);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
  color: #e7e9ea;
  width: 160px;
`;

export default function EditorToolBox() {
  return (
    <EditorToolBoxWrapper>
      <ChangeList></ChangeList>
      <ChangeColor></ChangeColor>
      <ChangeBold></ChangeBold>
      <ChangeType></ChangeType>
    </EditorToolBoxWrapper>
  );
}
