import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-full grid place-items-center">
      <div className="flex flex-col gap-2 items-center">
        <span className="rounded-full border-[5px] border-slate-300 border-t-color_danger w-10 h-10 animate-spin"></span>
        <span className="font-semibold">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
