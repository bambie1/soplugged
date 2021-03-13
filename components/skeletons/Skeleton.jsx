import React from "react";
import Animation from "./Animation";

const Skeleton = ({ type }) => {
  return (
    <div className={`skeleton ${type}`}>
      <Animation />
    </div>
  );
};

export default Skeleton;
