import React from "react";

const Background = () => {
  return (
    <>
    <div className="fixed z-[2] h-screen w-full">
      <div className="absolute top-[5%] w-full flex justify-center py-10 text-zinc-600 text-xl font-semibold">
        Documents
      </div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-900 text-[12vw] leading-none tracking-tighter">
        Docs.
      </h1>
    </div>
    </>
  );
};

export default Background;
