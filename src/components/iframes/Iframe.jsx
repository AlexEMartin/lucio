import React from "react";
import ReactPlayer from "react-player";
import './Iframe.css';

const Iframe = (props) => {
  return (
    <div className="iframe-container">
     <ReactPlayer width={'100%'} url={props.url} muted playing={props.status} controls />
    </div>
  );
};

export default Iframe;
