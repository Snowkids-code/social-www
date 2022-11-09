import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";

function Share() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="share-container">
      <div className="share-wrapper">
        <div className="top">
          <img src={currentUser.profilePic} alt="" />
          <input
            type="text"
            placeholder={`What's on your mind ${currentUser.name}?`}
          />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <div className="item">
                <img
                  src="https://raw.githubusercontent.com/safak/youtube2022/react-social-ui/src/assets/img.png"
                  alt=""
                />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img
                src="https://raw.githubusercontent.com/safak/youtube2022/react-social-ui/src/assets/map.png"
                alt=""
              />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img
                src="https://raw.githubusercontent.com/safak/youtube2022/react-social-ui/src/assets/friend.png"
                alt=""
              />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;
