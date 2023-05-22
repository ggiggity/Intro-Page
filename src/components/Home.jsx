import React from "react";

import MyComp from "./MyComp";
import WinPlayer from "./WinPlayer";
import { Monitor } from "react95";
import Menu from "./Menu";
import Profile from "./Profile";
import Privacy from "./Privacy";
import { useState } from "react";

const Home = ({ change, image }) => {
  const [char, setchar] = useState("");
  return (
    <div className="flex flex-col justify-start fixed">
      <MyComp change={change} />
      <Privacy />
      <Profile />
      <WinPlayer />
      <img
        onClick={() => alert("52528282")}
        className="absolute left-[87rem] cursor-pointer -bottom-20"
        src="/clippy.gif"
      ></img>
      <Monitor
        backgroundStyles={{
          backgroundImage: `url(/${image})`,
          backgroundSize: "cover",
        }}
        className="w-[200px] relative left-[90rem] bottom-[30rem]"
      />
      {image === "neo.gif" && (
        <div>
          <img
            src="/phone1.png"
            width={80}
            className="absolute left-[50rem] -z-20  cursor-pointer top-[50%]"
            onClick={() => {
              char === "" ? setchar("neo1.png") : setchar("");
            }}
          ></img>
          <img
            src={char}
            className="absolute -bottom-3 left-[30rem] cursor-pointer"
            onClick={() =>
              char === "neo1.png"
                ? setchar("double.png")
                : char === "double.png"
                ? setchar("trinyty.png")
                : setchar("neo1.png")
            }
          ></img>
        </div>
      )}
      {image === "agentsmith.gif" && (
        <div>
          <img
            src="/phone1.png"
            width={80}
            className="absolute -z-10 left-[50rem] cursor-pointer top-[20rem]"
            onClick={() => {
              char === "" ? setchar("agent.png") : setchar("");
            }}
          ></img>
          <img
            src={char}
            width={150}
            className="absolute -bottom-3 left-[30rem] cursor-pointer"
          ></img>
        </div>
      )}
      <Menu />
    </div>
  );
};

export default Home;
