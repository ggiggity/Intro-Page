import React, { useState } from "react";
import Draggable from "react-draggable";
import { Link } from "react-router-dom";
import {
  Window,
  WindowHeader,
  WindowContent,
  Tabs,
  TabBody,
  Button,
  Tab,
} from "react95";
import Me from "./Me";
import Skills from "./Skills";

const Info = ({ click }) => {
  const [state, setState] = useState({
    activeTab: 0,
  });

  const handleChange = (value) => setState({ activeTab: value });

  const { activeTab } = state;
  return (
    <Draggable>
      <div className="absolute z-10 top-20 left-[30rem]">
        <Window style={{ width: 800, height: 500 }}>
          <WindowHeader>
            Kevin Hyun An
            <div
              className="font-bold absolute top-[4px] right-[10px]"
              onClick={() => click(false)}
            >
              <Button style={{ height: "23px", width: "23px" }}>x</Button>
            </div>
          </WindowHeader>

          <WindowContent>
            <Tabs value={activeTab} onChange={handleChange}>
              <Tab value={0}>Profile</Tab>
              <Tab value={1}>Skills</Tab>
              <Tab value={2}>Projects</Tab>
            </Tabs>
            <TabBody style={{ height: 400 }}>
              {activeTab === 1 && <Skills></Skills>}

              {activeTab === 0 && (
                <div className="flex justify-between">
                  <img src="/me.jpeg" width={380}></img>
                  <Me></Me>
                </div>
              )}
              {activeTab === 2 && (
                <div className="flex justify-between w-[44.7rem]">
                  <Link
                    to={"https://github.com/team-thyme-fsa/grace-shopper"}
                    target="blank"
                  >
                    <span className="  px-[4.2rem]">PokeMart</span>

                    <div className=" w-[200px]  text-center h-[150px]">
                      <img src="https://github.com/team-thyme-fsa/grace-shopper/blob/main/graceshopper_wireframe_layout_documents/SINGLE%20PRODUCT%20VIEW.png?raw=true"></img>
                    </div>
                  </Link>
                  <Link
                    to={"https://github.com/2209-capstone-team-random/VIBE"}
                    target="blank"
                  >
                    <span className="px-[84px] ">Vibe</span>
                    <div className=" w-[200px] bg-white text-center h-[150px]">
                      <img
                        className="relative top-3 h-[110px]"
                        src="/vibe.png"
                      ></img>
                    </div>
                  </Link>

                  <Link
                    to={"https://github.com/ggiggity/Spaceyyy"}
                    target="blank"
                  >
                    <span className="px-[75px]">Spacey</span>
                    <div className=" w-[200px] bg-white text-center h-[150px]">
                      <img
                        className="relative top-3 h-[110px]"
                        src="/solar.png"
                      ></img>
                    </div>
                  </Link>
                </div>
              )}
            </TabBody>
          </WindowContent>
        </Window>
      </div>
    </Draggable>
  );
};

export default Info;
