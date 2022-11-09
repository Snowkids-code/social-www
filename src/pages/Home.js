import React from "react";
import Posts from "../components/post/Posts";
import Share from "../components/share/Share";
import Stories from "../components/stories/Stories";

function Home() {
  return (
    <div className="home-container">
      <Stories />
      <Share />
      <Posts />
    </div>
  );
}

export default Home;
