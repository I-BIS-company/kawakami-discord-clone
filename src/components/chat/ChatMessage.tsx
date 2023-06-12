import React from "react";
import "./ChatMessage.scss";
import { Avatar } from "@mui/material";

const ChatMessage = () => {
  return (
    <div className="message">
      <Avatar />
      <div className="messageInfo">
        <h4>
          Shin Code
          <span className="messageTimestamp">2022/12/18</span>
        </h4>

        <p>Message Body</p>
      </div>
    </div>
  );
};

export default ChatMessage;
