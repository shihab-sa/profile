import React from "react";
import rightIcon from "../components/img/sidebar_right_icon.png";
import Image from "next/image";
import { Share2 } from "lucide-react";
import { Download } from "lucide-react";

type Props = {};

function Cardone({}: Props) {
  return (
    <div>
      <div className=" h-40 w-[60%] bg-[#FEFEFE] mt-4 p-4 rounded-xl shadow">
        <div className=" flex justify-between">
          <div className=" flex gap-1">
            <Image src={rightIcon} alt="log" height={16} width={20} />
            <h1 className=" text-sm text-[#565656]">
              Yellow Belts Certificate
            </h1>
          </div>
          <div className=" flex gap-2">
            <Share2 size={15} />
            <Download size={15} />
          </div>
        </div>
        <small className="text-[0.5rem] mt-4">
          Achivement Data , 2 / 12 / 2021
        </small>
        <p className="text-[0.5rem] mt-4">
          Will back soon brother i will some thing Will back soon brother i will
          some thing Will back soon brother i will some
        </p>
      </div>
    </div>
  );
}

export default Cardone;
