import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  TextInput,
} from "react95";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar style={{ width: "full", top: "auto", bottom: 0 }} fixed="true">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: "bold" }}
          >
            <img
              src="/win.jpeg"
              alt="react95 logo"
              style={{ height: "20px", marginRight: 4 }}
            />
            Start
          </Button>
          {open && (
            <MenuList
              style={{
                position: "absolute",
                left: "-5px",
                bottom: "100%",
                width: "200px",
                textAlign: "left",
              }}
              onClick={() => setOpen(false)}
            >
              <a
                href={"https://www.linkedin.com/in/kevinan1004/"}
                target="blank"
              >
                <MenuListItem>
                  <span role="img" aria-label="👨‍💻">
                    👨‍💻
                  </span>
                  Linkdin
                </MenuListItem>
              </a>
              <a href="https://github.com/ggiggity" target={"blank"}>
                <MenuListItem>
                  <span role="img" aria-label="📁">
                    📁
                  </span>
                  Github{" "}
                </MenuListItem>
              </a>
              <Separator />
              <MenuListItem disabled>
                <span role="img" aria-label="🔙">
                  🔙
                </span>
                Logout
              </MenuListItem>
            </MenuList>
          )}
        </div>
        <TextInput placeholder="10.04.1991" width={150} />
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
