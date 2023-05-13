import React from "react";
import AutoTile from "./subcomponents/AutoTile";
import "./AutoTiles.scss";

/** `AutoTiles` and `AutoTile` are layout components that display a responsive grid of elements that adjusts automatically. This is unlike the `Tiles` and `Tile` components whose breakpoints must be set manually to be responsive.*/
const AutoTiles = ({
  minWidth,
  space = 0,
  style,
  verticalAlignment = "top",
  children,
}) => {
  let alignment;
  switch (verticalAlignment) {
    case "top": {
      alignment = "start";
      break;
    }
    case "center": {
      alignment = "center";
      break;
    }
    case "bottom": {
      alignment = "end";
      break;
    }
    default: {
    }
  }

  return (
    <div
      className="dc-auto-tiles"
      style={{
        "--min-width": minWidth,
        "--space": space,
        "--vertical-alignment": alignment,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default AutoTiles;

AutoTiles.Tile = AutoTile;
