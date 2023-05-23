import React from "react";
import { useState, useEffect } from "react";
import Draggable, { DraggableCore } from "react-draggable";
import { Computer4 } from "@react95/icons";
/* Pick a theme of your choice */

import Theme from "./Theme";

const MyComp = ({ change }) => {
  const [select, setselected] = useState(null);
  const [open, setopen] = useState(null);
  const handleClick = (p) => {
    open ? setopen(p) : setopen(p);
  };

  return (
    <>
      <Draggable>
        <div className="w-[80px] m-5" onDoubleClick={() => setopen(true)}>
          <figure
            className="w-20 text-white"
            onClick={() => {
              select ? setselected(false) : setselected(true);
            }}
          >
            <div className="z-20 absolute w-20 h-[100px]"></div>
            <Computer4 className="relative left-5 w-11"></Computer4>
            <figcaption
              className={
                select
                  ? ` w-20 text-center bg-[#37FE69] text-white border-2 border-dotted`
                  : `transparent text-center mt-[2px] text-white`
              }
            >
              My Computer
            </figcaption>
          </figure>
        </div>
      </Draggable>
      {open && <Theme change={change} handleClick={handleClick} />}
    </>
  );
};

export default MyComp;
