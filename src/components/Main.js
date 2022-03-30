import React, {useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import Editor from "./Editor";
import { Header, NavContentWrapper, NavContent, ArrowWrapper } from "./Header";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import useIsUSerLogged from "../hooks/useIsUserLogged";

function Main() {
  
  const [name, setname] = useState(""); 
  let isUserLogged = useIsUSerLogged();
  const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    setname(user.displayName);
    // ...
  } else {
    // User is signed out
    // ...
  }
});
  const arrowRight = {
    fontSize: "20px",
    strokeWidth: "3",
  };
  return (
    <div>
      {isUserLogged === null ? (
      <Header>
        <Link to="/welcome">
          <NavContentWrapper>
            <NavContent>
              Login or Sign up to store your notes permanently ✨ { name }
            </NavContent>
            <ArrowWrapper>
              <FiArrowRight style={arrowRight} />
            </ArrowWrapper>
          </NavContentWrapper>
        </Link>
      </Header> ) : 
       (<Header>
       <Link to="/welcome">
         <NavContentWrapper>
           <NavContent>
             Logged header
           </NavContent>
           <ArrowWrapper>
             <FiArrowRight style={arrowRight} />
           </ArrowWrapper>
         </NavContentWrapper>
       </Link>
     </Header> ) }
      <Editor></Editor>
    </div>
  );
}
export default Main;
