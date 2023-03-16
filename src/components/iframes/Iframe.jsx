import React from "react";
import ReactPlayer from "react-player";

const Iframe = () => {
  return (
    <div>
     <ReactPlayer width={'100%'} url="https://youtu.be/ILK1tGnPpUo" muted playing controls />
    </div>
  );
};

export default Iframe;
