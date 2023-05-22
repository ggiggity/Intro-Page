import React from "react";
import { useState, useEffect } from "react";
import Draggable from "react-draggable";
import Meme from "./Meme";
import { Lock } from "@react95/icons";
import confetti from "canvas-confetti";
import {
  Window,
  WindowContent,
  TextInput,
  Button,
  WindowHeader,
} from "react95";

const Privacy = () => {
  const [select, setselected] = useState(false);
  const [open, setopen] = useState(true);
  const [info, setInfo] = useState({ username: null, password: null });

  const handleClick = () => {
    setopen(false);
  };
  const handleLock = () => {
    if (info.username === "giggity" && info.password === "52528282")
      setopen("opened"), confetti();
    else alert("please try again");
  };

  // const handleLock = () => {
  //   if (info.username == "giggity" && info.password == "8008")
  //     setopen(true), setLocked(false);
  //   else alert("wrong");
  // };

  return (
    <>
      <Draggable>
        <div
          className="w-[5rem] text-white m-5"
          onDoubleClick={() => setopen("locked")}
        >
          <figure
            className="w-20 "
            onClick={() => {
              select ? setselected(false) : setselected(true);
            }}
          >
            <div className="absolute w-20  h-[100px]"></div>
            <Lock className="z-10 ml-2" width={50}></Lock>
            <figcaption
              className={
                select
                  ? ` w-20 text-center bg-icon border-2 border-dotted`
                  : "  w-[80px] mt-[2px] text-center"
              }
            >
              Personal🔞
            </figcaption>
          </figure>
        </div>
      </Draggable>
      {open === "opened" ? (
        <Meme handleClick={handleClick} />
      ) : (
        open === "locked" && (
          <div className="flex top-20 left-[35rem] z-10 absolute justify-center items-center">
            <Window shadow={true} className="flex w-[30rem]">
              <WindowHeader className="flex flex-wrap items-center justify-between handle">
                <span>Go away</span>
                <Button
                  size={"sm"}
                  square
                  disabled={false}
                  onClick={handleClick}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      transform: "translateY(-1px)",
                    }}
                  >
                    x
                  </span>
                </Button>
              </WindowHeader>
              <WindowContent>
                <div className="">
                  <Lock className="m-2 pixelated" />
                  <div>
                    <p className="m-2">Please Enter Username and Password</p>
                    <div className="relative">
                      <div className="flex m-2">
                        <p>Username:</p>
                        <TextInput
                          placeholder="Admin"
                          onChange={(e) =>
                            setInfo({ ...info, username: e.target.value })
                          }
                        />
                      </div>
                      <div className="flex m-2">
                        <p>Password:</p>
                        <TextInput
                          type="password"
                          className=""
                          placeholder="*******"
                          onChange={(e) =>
                            setInfo({ ...info, password: e.target.value })
                          }
                        />
                        <Button
                          className="ml-10"
                          style={{ width: 80 }}
                          onClick={() => handleLock()}
                        >
                          OK
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </WindowContent>
            </Window>
          </div>
        )
      )}
    </>
  );
};

export default Privacy;
