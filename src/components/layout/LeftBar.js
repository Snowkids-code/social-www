import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";

function LeftBar() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="left-bar-container">
      <div className="left-bar-wrapper">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <span>Friends</span>
          </div>
          <div className="item">
            <span>Groups</span>
          </div>
          <div className="item">
            <span>Marketplace</span>
          </div>
          <div className="item">
            <span>Watch</span>
          </div>
          <div className="item">
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <span>Events</span>
          </div>
          <div className="item">
            <span>Gaming</span>
          </div>
          <div className="item">
            <span>Gallery</span>
          </div>
          <div className="item">
            <span>Videos</span>
          </div>
          <div className="item">
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <span>Tutorials</span>
          </div>
          <div className="item">
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
