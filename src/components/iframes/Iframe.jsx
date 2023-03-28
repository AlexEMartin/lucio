import React from "react";
import ReactPlayer from "react-player";

const Iframe = (props) => {
  return (
    <div>
     <ReactPlayer width={'100%'} url={props.url} muted playing controls />
    </div>
  );
};

export default Iframe;
