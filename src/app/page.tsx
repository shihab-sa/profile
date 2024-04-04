import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className=" rounded-xl p-5 text-4xl font-bold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
        welcome to Home Page.
        <span>👋</span>
      </h1>
    </div>
  );
}

export default page;
