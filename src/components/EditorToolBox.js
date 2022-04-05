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
  width: 48px;
  min-height: calc(100vh - var(--header-height));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
  color: #e7e9ea;

  //border-bottom: 1px solid var(--border-color);
`;
const GroupedTools = styled.div`
  width: 48px;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #e7e9ea;
`;

export default function EditorToolBox() {
  return (
    <EditorToolBoxWrapper>
      

      <GroupedTools>
        <ChangeList></ChangeList>
        <ChangeColor></ChangeColor>
        <ChangeBold></ChangeBold>
        <ChangeType></ChangeType>
      </GroupedTools>

      
    </EditorToolBoxWrapper>
  );
}
