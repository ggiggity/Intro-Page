import React from "react";
import {
  Button,
  Toolbar,
  Window,
  WindowContent,
  WindowHeader,
  MenuList,
  MenuListItem,
  ScrollView,
  Separator,
} from "react95";
import { Link } from "react-router-dom";
import { useState } from "react";
import Draggable from "react-draggable";

const Meme = ({ handleClick }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="absolute z-10 top-20 left-20  ">
      <Draggable>
        <Window style={{ width: "600px" }}>
          <WindowHeader>
            Um...{" "}
            <div className="" onClick={() => handleClick(false)}>
              <Button
                style={{ height: "23px", width: "23px" }}
                className="font-bold -right-[34.5rem] -top-[35px]"
              >
                x
              </Button>
            </div>
          </WindowHeader>
          <Toolbar noPadding>
            <Button variant="thin" disabled>
              Upload
            </Button>
            <Button variant="thin" disabled>
              Save
            </Button>
            <div
              style={{
                position: "relative",
                display: "inline-block",
                alignSelf: "left",
              }}
            >
              <Button
                variant="thin"
                onClick={() => setOpen(!open)}
                size="sm"
                active={open}
              >
                Share
              </Button>
              {open && (
                <MenuList
                  style={{
                    right: "-55%",
                    top: "100%",
                    zIndex: "9999",
                    position: "absolute",
                  }}
                  onClick={() => setOpen(false)}
                >
                  <Link
                    target="blank"
                    to={
                      "https://media.tenor.com/QTtGndGF4pIAAAAd/awkward-side-eye.gif"
                    }
                  >
                    <MenuListItem size="sm">Copy link</MenuListItem>
                  </Link>
                  <Separator />
                  <Link
                    target="blank"
                    to={
                      "https://media.tenor.com/gaEpIfzxzPEAAAAC/pedro-monkey-puppet.gif"
                    }
                  >
                    <MenuListItem size="sm">Download</MenuListItem>
                  </Link>
                  <Separator />
                  <Link
                    target="blank"
                    to={
                      "https://metro.co.uk/wp-content/uploads/2022/12/SEI82708504-9730.png?quality=90&strip=all&zoom=1&resize=644%2C360"
                    }
                  >
                    <MenuListItem size="sm">👀</MenuListItem>
                  </Link>
                </MenuList>
              )}
            </div>
          </Toolbar>
          <WindowContent style={{ padding: "0.25rem" }}>
            <ScrollView>
              <img
                style={{ width: "100%", height: "auto", display: "block" }}
                src="/side.gif"
              />
            </ScrollView>
          </WindowContent>
        </Window>
      </Draggable>
    </div>
  );
};

export default Meme;
