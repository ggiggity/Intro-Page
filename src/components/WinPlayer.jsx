import * as React from "react";
import { useState } from "react";
import Draggable from "react-draggable";
import { Mplayer10 } from "@react95/icons";
import "@react95/icons/icons.css";
import {
  Slider,
  Button,
  Window,
  WindowHeader,
  WindowContent,
  Toolbar,
  Separator,
} from "react95";
import { useRef } from "react";
const list = ["/song.mp4", "/happy.mp4", "/lesgo.mp4", "/thatway.mp4"];
const WinPlayer = () => {
  const [select, setselected] = useState(null);
  const [open, setopen] = useState(null);
  const [videoTime, setVideoTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [current, setcurrent] = useState(0);

  const videoRef = useRef(null);
  window.setInterval(function () {
    setCurrentTime(videoRef.current?.currentTime);
    setProgress((videoRef.current?.currentTime / videoTime) * 100);
  }, 1000);

  const playVideo = (control) => {
    if (control === "play") {
      videoRef.current.play();
      var vid = document.getElementById("video1");
      setVideoTime(vid.duration);
    }
    if (control === "pause") {
      videoRef.current.pause();
    }
  };

  return (
    <div className="z-20">
      <Draggable>
        <div className="w-[80px] m-5" onDoubleClick={() => setopen(true)}>
          <figure
            className="w-20 text-white"
            onClick={() => {
              select ? setselected(false) : setselected(true);
            }}
          >
            <div className="z-20 absolute w-20 h-[100px]"></div>
            <Mplayer10 className="relative left-4 w-11"></Mplayer10>
            <figcaption
              className={
                select
                  ? ` w-20 text-center bg-icon border-2 border-dotted`
                  : "  w-[70px] ml-[5px] mt-[3px] text-center"
              }
            >
              Media Player
            </figcaption>
          </figure>
        </div>
      </Draggable>
      {open && (
        <div
          className="absolute top-[5%] -z-30 left-[20rem]"
          style={{ width: 1000 }}
        >
          <Window className="">
            <WindowHeader>
              <span>Window95 Media Player (playing)</span>
              <div className="" onClick={() => setopen(false)}>
                <Button
                  style={{ height: "23px", width: "23px" }}
                  className="font-bold left-[97%] -top-[35px]"
                >
                  x
                </Button>
              </div>
            </WindowHeader>
            <Toolbar>
              <Button variant="thin" disabled>
                File
              </Button>
              <Button variant="thin" disabled>
                Edit
              </Button>
              <Button disabled variant="thin">
                Help
              </Button>
            </Toolbar>
            <WindowContent className="px-5 pt-10 pb-[100px] bg-[#C6C6C6]">
              {/* <ScrollView> */}
              <video
                ref={videoRef}
                id="video1"
                width="900"
                src={list[current]}
                onEnded={() => setcurrent(current + 1)}
                style={{
                  marginBottom: 4,
                }}
                className="px-20 bg-black "
              />
              {/* </ScrollView> */}
            </WindowContent>
            <Separator></Separator>
            <div className="pb-[80px] flex">
              {/* <Slider
                value={progress}
                size="50%"
                className="absolute left-[30%] top-7 "
                step={1}
              /> */}
              <p className="relative bg-black mt-2 text-white w-[20rem] top-8 left-[18rem] h-20 text-center text-5xl pt-4">
                {Math.floor(currentTime / 60) +
                  ":" +
                  ("0" + Math.floor(currentTime % 60)).slice(-2)}
              </p>

              <div className="absolute flex-wrap w-[13rem] bottom-[3rem] left-[2rem] flex gap-2">
                <Button
                  style={{ fontSize: "", width: 92, height: 40 }}
                  onClick={() => playVideo("play")}
                >
                  ▶
                </Button>
                <Button
                  style={{ fontSize: "2xlarge", width: 92, height: 40 }}
                  onClick={() => playVideo("pause")}
                >
                  ⏸
                </Button>{" "}
                <Button
                  style={{ fontSize: "", width: 42, height: 40 }}
                  onClick={() => setcurrent(current - 1)}
                >
                  ⏮{" "}
                </Button>
                <Button
                  style={{ fontSize: "", width: 42, height: 40 }}
                  onClick={() => (videoRef.current.currentTime -= 5)}
                >
                  ⏪{" "}
                </Button>
                <Button
                  style={{ fontSize: "", width: 42, height: 40 }}
                  onClick={() => (videoRef.current.currentTime += 5)}
                >
                  ⏩{" "}
                </Button>
                <Button
                  style={{ fontSize: "", width: 42, height: 40 }}
                  onClick={() => setcurrent(current + 1)}
                >
                  ⏭
                </Button>
              </div>
            </div>
          </Window>
        </div>
      )}
    </div>
  );
};

export default WinPlayer;
