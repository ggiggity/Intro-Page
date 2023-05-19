import React from "react";
import {
  WindowContent,
  Table,
  TableDataCell,
  TableHeadCell,
  TableRow,
  TableBody,
  TableHead,
} from "react95";
const skill = [
  {
    name: "JavaScript",
    img: "/jas.png",
  },
  {
    name: "React",
    img: "/react.png",
  },

  {
    name: "Redux",
    img: "/redux.png",
  },
  {
    name: "Sequelize",
    img: "https://cdn.iconscout.com/icon/free/png-256/free-sequelize-2-1175003.png",
  },
  {
    name: "Postgresql",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png",
  },
  {
    name: "Express",
    img: "https://www.mementotech.in/assets/images/icons/express.png",
  },
  {
    name: "Html",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png",
  },
  {
    name: "Css",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1650px-CSS3_logo_and_wordmark.svg.png",
  },
  {
    name: "Tailwind",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
  },
];
const Skills = () => {
  return (
    <WindowContent
      style={{ width: "700px", height: "350px", overflow: "scroll" }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Icon</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell style={{ width: "100px" }} disabled>
              Work Experience
            </TableHeadCell>
            <TableHeadCell>Education</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="flex text-lg text-center">
          {skill.map((skills, i) => {
            return (
              <>
                <TableRow key={i}>
                  <TableDataCell style={{ textAlign: "center" }}>
                    <img
                      src={skills.img}
                      className="my-[5px] ml-5"
                      width="45px"
                    />
                  </TableDataCell>
                  <TableDataCell>{skills.name}</TableDataCell>
                  <TableDataCell>0</TableDataCell>
                  <TableDataCell className="">Fullstack Academy</TableDataCell>
                </TableRow>
              </>
            );
          })}
        </TableBody>
      </Table>
    </WindowContent>
  );
};

export default Skills;
