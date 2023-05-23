import React from "react";
import { Link } from "react-router-dom";
import { Window, Button, WindowHeader, WindowContent } from "react95";

const NotFound = () => {
  return (
    <div className="flex relative top-[18rem] items-center justify-center">
      <Window shadow={true} className="flex w-[40rem]">
        <WindowHeader className="flex flex-wrap items-center justify-between handle">
          <span>Wrong page</span>
        </WindowHeader>
        <WindowContent>
          <div className="pb-5">
            <img width={100} src="/error.png" className="absolute"></img>
            <div className="flex flex-col justify-center items-center">
              <p className="pt-5 mb-5 text-xl">Return to main page</p>
              <Link to={"/home"}>
                <Button style={{ width: 100 }}>OKIE</Button>
              </Link>
            </div>
          </div>
        </WindowContent>
      </Window>
    </div>
  );
};

export default NotFound;
