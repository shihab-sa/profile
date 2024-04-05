import React from "react";
import cer from "../components/img/cer.png";
import Image from "next/image";
type Props = {};

function CardTwo({}: Props) {
  return (
    <div className="h-[100%] w-[100%] bg-[#FEFEFE] mt-4 p-5 rounded-xl shadow">
      <div>
        <Image src={cer} alt="" height={150} width={250} />
      </div>
    </div>
  );
}

export default CardTwo;
