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
  width: 100%;
  min-height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  color: var(--system-gray);

  //border-bottom: 1px solid var(--border-color);
`;
const GroupedTools = styled.div`
  width: 200px;
  min-height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: var(--system-gray);
`;

export default function EditorToolBox() {
  return (
    <EditorToolBoxWrapper>
      <Volume></Volume>

      <GroupedTools>
        <ChangeList></ChangeList>
        <ChangeColor></ChangeColor>
        <ChangeBold></ChangeBold>
        <ChangeType></ChangeType>
      </GroupedTools>

      <ChangeBackground></ChangeBackground>
    </EditorToolBoxWrapper>
  );
}
