import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";

function LeftBar() {
  const { currentUser } = useContext(AuthContext);

  return <div className="left-bar-container"></div>;
}

export default LeftBar;
