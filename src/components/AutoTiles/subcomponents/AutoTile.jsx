import React from "react";

const AutoTile = ({ style = {}, children, className }) => {
  return (
    <div className={"dc-auto-tile " + className} style={style}>
      {children}
    </div>
  );
};

export default AutoTile;
