import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import profile from "./profile.jpg";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender profile={profile} />

      <Post profilepic={profile} username="safras" message="hello" image="" />
      <Post profilepic={profile} username="safras" message="woooww" />
      <Post profilepic={profile} username="safras" message="woooww" />
    </div>
  );
}

export default Feed;
