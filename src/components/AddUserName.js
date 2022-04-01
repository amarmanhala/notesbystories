import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { getAuth, updateProfile } from "firebase/auth";
import Sparkles from "./Sparkles";
import { device } from "../Devices";


const NameInput = styled.input`
  background-color: transparent;
  color: var(--text-color);
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  &::placeholder {
    color: var(--system-gray3);
  }
  @media ${device.mobileM} {
    font-size: 12px;
  }
  @media ${device.laptop} {
    font-size: 16px;  }
`;
export default function AddUserName() {
  const auth = getAuth();
  const inputEl = useRef(null);

  const [name, setname] = useState("");

  useEffect(() => {
    const userName = auth.currentUser.displayName;
    setname(userName === null ? "" : userName);
  } ,[]);

  useEffect(() => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
        console.log(auth.currentUser.displayName);
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  }, [name]);

  return (
    <Sparkles>
      <NameInput
        type="text"
        value={name}
        placeholder="🙍 Add your name"
        onChange={(e) => setname(e.target.value)}
      ></NameInput>
    </Sparkles>
  );
}
