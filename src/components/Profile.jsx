import { FileFont } from "@react95/icons";
import React, { useState } from "react";
import Draggable from "react-draggable";
import Info from "./Info";

const Profile = () => {
  const [open, setopen] = useState(false);
  const [select, setselected] = useState(false);
  const handleClick = () => {
    setopen(false);
  };
  return (
    <>
      <Draggable>
        <div className="w-[80px] m-5" onDoubleClick={() => setopen(true)}>
          <figure
            className="w-20 text-white text-lg"
            onClick={() => {
              select ? setselected(false) : setselected(true);
            }}
          >
            <div className="absolute z-10 -top-5 w-20 h-[100px]"></div>
            <FileFont className="relative left-5 w-10"></FileFont>
            <figcaption
              className={
                select
                  ? ` w-20 text-center bg-icon border-2 border-dotted`
                  : " text-white w-[70px] ml-[5px] mt-[2px] text-center"
              }
            >
              Profile
            </figcaption>
          </figure>
        </div>
      </Draggable>
      {open && <Info click={handleClick}></Info>}
    </>
  );
};

export default Profile;
