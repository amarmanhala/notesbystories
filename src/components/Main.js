import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Editor from "./Editor";
import { Header, NavContentWrapper, NavContent, ArrowWrapper } from "./Header";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

function Main() {
  const arrowRight = {
    fontSize: "20px",
    strokeWidth: "3",
  };
  return (
    <div>
      <Header>
        <Link to="/welcome">
          <NavContentWrapper>
            <NavContent>
              Login or Sign up to store your notes permanently ✨
            </NavContent>
            <ArrowWrapper>
              <FiArrowRight style={arrowRight} />
            </ArrowWrapper>
          </NavContentWrapper>
        </Link>
      </Header>
      <Editor></Editor>
    </div>
  );
}
export default Main;
