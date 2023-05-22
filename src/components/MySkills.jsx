import React from "react";
import { useState, useEffect } from "react";
import Draggable, { DraggableCore } from "react-draggable";
import { Button, Window, WindowContent, WindowHeader } from "react95";
import matrix from "react95/dist/themes/matrix";
import modern from "react95/dist/themes/modernDark";

const MySkills = ({ handleClick, change }) => {
  const [msg, setmsg] = useState("");
  return (
    <div className="">
      <Draggable>
        <Window
          className="window w-[500px] h-[500px] left-[20rem] top-20"
          style={{
            position: "absolute",
            zIndex: "2",
          }}
        >
          <WindowHeader
            active={false}
            className="window-title"
            style={{ backgroundColor: "black" }}
          >
            <span>My Computer</span>
            <div className="" onClick={() => handleClick(false)}>
              <Button
                style={{ height: "23px", width: "23px" }}
                className="font-bold -right-[455px] -top-[35px]"
              >
                x
              </Button>
            </div>
          </WindowHeader>
          <WindowContent className=" h-[93%]">
            <span>It's Time To</span>
            <br></br>
            <span>{msg}</span>

            <div className="flex items-center  top-3">
              <img
                onClick={() =>
                  change(
                    matrix,
                    "https://upload.wikimedia.org/wikipedia/commons/a/a0/Digital_rain_animation_small_letters_shine.gif",
                    "neo.gif"
                  )
                }
                onMouseOver={() => setmsg("Go down the Rabbit hole")}
                className="relative cursor-pointer z-10 top-[10rem] hover:scale-150 transition ease-in-out delay-0"
                src="/red.png"
                width={150}
              />
              <img
                onMouseOver={() => setmsg("Choose your Destiny")}
                className="hover:scale-150 transition ease-in-out delay-0"
                src="/morp.png"
                width={200}
              ></img>
              <img
                onClick={() =>
                  change(
                    modern,

                    "https://thumbs.dreamstime.com/b/system-failure-text-digital-data-code-matrix-camera-moving-back-extreme-close-up-monitor-screen-showing-41945913.jpg",
                    "agentsmith.gif"
                  )
                }
                onMouseOver={() => setmsg("Wake Up in your Bed")}
                className="relative cursor-pointer z-10 top-[10rem] right-10 hover:scale-150 transition ease-in-out delay-0"
                src="/blue.png"
                width={150}
              />
            </div>
          </WindowContent>
          {""}
        </Window>
      </Draggable>
    </div>
  );
};

export default MySkills;
