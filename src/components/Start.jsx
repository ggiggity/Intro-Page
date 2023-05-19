import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(function () {
      navigate("/home");
    }, 3200);
  });
  return (
    <div className="bg-[url('/energy.gif')] h-screen w-full bg-cover"></div>
  );
};

export default Start;
