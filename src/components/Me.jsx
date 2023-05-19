import React from "react";
import { useState } from "react";
import { Select, GroupBox, SelectNative, Button } from "react95";
import confetti from "canvas-confetti";

const options = [
  { value: 0, label: "McLOVIN" },
  { value: 1, label: "Jeff" },
  { value: 2, label: "Michael Scott" },
  { value: 3, label: "Kevin Hyun An" },
  { value: 4, label: "He-Man" },
  { value: 5, label: "Monkey-D Luffy" },
];

const options2 = [
  { value: 0, label: "10,000 BC" },
  { value: 1, label: "Yesterday" },
  { value: 2, label: "4.20.2022" },
  { value: 3, label: "2.30.1995" },
  { value: 4, label: "10.04.1991" },
];
const options3 = [
  { value: 0, label: "Hogwart" },
  { value: 1, label: "Fullstack Academy " },
  { value: 2, label: "Monsters University " },
  { value: 3, label: "Springfield High School" },
  { value: 4, label: "Assassination classroom" },
];
const options4 = [
  { value: 0, label: "Ninja" },
  { value: 1, label: "Potato" },
  { value: 2, label: "Fullstack Engineer" },
  { value: 3, label: "Witcher" },
  { value: 4, label: "Fullmetal alchemist" },
];

const Me = () => {
  const [name, setName] = useState(null);
  const [dob, setDob] = useState(null);
  const [edu, setEdu] = useState(null);
  const [title, setTitle] = useState(null);
  const [msg, setMsg] = useState("");
  const handleState = () => {};

  const handleClick = () => {
    if (name == 3 && dob == 4 && edu == 1 && title == 2)
      confetti(), setMsg("id = giggity");
    else setMsg("Please Try again");
  };
  return (
    <div id="default-selects" className="ml-2">
      <GroupBox label="default">
        <span>Name</span>
        <br></br>
        <Select
          onChange={(e) => setName(e.value)}
          style={{ margin: "0px 20px 10px 0px" }}
          options={options}
          menuMaxHeight={160}
          width={280}
        ></Select>
        <span>D.O.B</span>
        <br></br>
        <Select
          onChange={(e) => setDob(e.value)}
          style={{ margin: "0px 20px 10px 0px" }}
          options={options2}
          menuMaxHeight={160}
          width={280}
        ></Select>
        <span>Education</span>
        <br></br>
        <Select
          onChange={(e) => setEdu(e.value)}
          style={{ margin: "0px 20px 10px 0px" }}
          options={options3}
          menuMaxHeight={160}
          width={280}
        ></Select>
        <span>Title</span>
        <br></br>
        <Select
          onChange={(e) => setTitle(e.value)}
          style={{ margin: "0px 20px 10px 0px" }}
          options={options4}
          menuMaxHeight={160}
          width={280}
        ></Select>
        <Button onClick={handleClick}>Submit</Button>
        <span className="relative left-[50px]">{msg}</span>
      </GroupBox>
    </div>
  );
};

export default Me;
