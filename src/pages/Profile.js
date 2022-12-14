import {
  EmailOutlined,
  FacebookTwoTone,
  Instagram,
  Language,
  LinkedIn,
  MoreVert,
  Pinterest,
  Place,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import Posts from "../components/post/Posts";

function Profile() {
  return (
    <div className="profile-container">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profile-wrapper">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoTone fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <Instagram fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <Twitter fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedIn fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <Pinterest fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Jane Doe</span>
            <div className="info">
              <div className="item">
                <Place />
                <span>USA</span>
              </div>
              <div className="item">
                <Language />
                <span>lama.dev</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlined />
            <MoreVert />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
}

export default Profile;
