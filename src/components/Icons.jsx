import React from "react";
import { useState } from "react";

const Icons = () => {
  const [select, setselected] = useState({ num: null, selected: false });

  return (
    <div className="flex flex-wrap justify-start gap-11 h-screen relative">
      {/* React section */}
      <figure
        id="1"
        className="w-[80px] relative -bottom-8 left-5"
        onClick={() => {
          select.selected && select.num === 1
            ? setselected({ num: null, selected: false })
            : setselected({ num: 1, selected: true });
        }}
      >
        <img className="ml-4" src="/react.png" width={45}></img>
        <figcaption
          className={
            select.selected && select.num === 1
              ? `text-center mt-2 text-white bg-icon border-2 border-dotted`
              : `transparent text-center mt-2 text-black border-2 border-dotted border-icon`
          }
        >
          React{" "}
        </figcaption>
      </figure>
      {/* JS Section */}
      <figure
        className="w-[80px] relative -bottom-[26px] h-[80px] left-4"
        onClick={() => {
          select.selected && select.num === 2
            ? setselected({ num: null, selected: false })
            : setselected({ num: 2, selected: true });
        }}
      >
        <img className="relative left-4" src="/jas.png" width={45}></img>
        <figcaption
          className={
            select.selected && select.num === 2
              ? ` text-center mt-2 text-white bg-icon border-2 border-dotted`
              : `transparent text-center mt-2 text-black border-2 border-dotted border-icon`
          }
        >
          JavaScript{" "}
        </figcaption>
      </figure>
      {/* JS Section */}
    </div>
  );
};

export default Icons;
