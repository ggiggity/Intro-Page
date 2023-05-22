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
              <Tab value={3}>About</Tab>
              <Tab value={1}>Skills</Tab>
              <Tab value={2}>Projects</Tab>
            </Tabs>
            <TabBody style={{ height: 400 }}>
              {activeTab === 1 && <Skills></Skills>}
              {activeTab === 3 && (
                <div className="text-xl">
                  <span>
                    Hi, my name is Kevin, I'm originally from South Korea, spent
                    my childhood there, and moved to NY when I was 13.
                    <br></br>
                    <br></br>
                    My work life started at a young age. By working in many
                    different industries and meeting a lot of people. I was able
                    to experience various situations and learn how to
                    communicate / teamwork, and workflow.
                    <br></br>
                    <br></br>
                    The reason I joined the tech industry was because of it's
                    work-life. For a person who always enjoyed building model
                    kits, solving problems / riddles / puzzles, coding became my
                    passion,and I liked the part that I can do that as a team.
                    I'm excited to start my whole new career as a full stack
                    role, and be part of the team.
                  </span>
                </div>
              )}

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
