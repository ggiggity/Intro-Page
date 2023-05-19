import React from "react";

import MyComp from "./MyComp";
import WinPlayer from "./WinPlayer";
import { Monitor } from "react95";

import Profile from "./Profile";
import Privacy from "./Privacy";

const Home = ({ change }) => {
  return (
    <div className="flex flex-col justify-start fixed">
      <MyComp change={change} />
      <Privacy />
      <Profile />
      <WinPlayer />
      <img
        onClick={() => alert("password = 8008135")}
        className="absolute left-[87rem] cursor-pointer -bottom-8"
        src="/clippy.gif"
      ></img>
      <Monitor
        backgroundStyles={{
          backgroundImage: "url(/family.gif)",
          backgroundSize: "cover",
        }}
        className="w-[200px] relative left-[90rem] bottom-[450px]"
      />
    </div>
  );
};

export default Home;
