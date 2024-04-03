import React from "react";
import Image from "next/image";
import sidebarImage from "../img/sidebar.png";
import sidebarLeft from "../img/sidebar_left_icon.png";
import sidebarRight from "../img/sidebar_right_icon.png";
import Link from "next/link";
import karate from "../img/Education.png";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <div className=" mt-10">
      <div className=" bg-cyan-300 p-5">
        <div className="flex justify-center items-center">
          <Image
            src={sidebarImage}
            alt="profile"
            height={100}
            width={100}
            className=" relative"
          />
          <div>
            <Image
              src={sidebarLeft}
              alt="profile"
              height={20}
              width={20}
              className=" absolute top-44 left-12"
            />
          </div>
          <div>
            <Image
              src={sidebarRight}
              alt="profile"
              height={20}
              width={20}
              className=" absolute top-40 right-82"
            />
          </div>
        </div>
        <div className="">
          <p className=" uppercase text-[9px]">Assessment Username</p>
          <small className="text-[7px] flex justify-center items-center">
            Batch no:KC22041
          </small>
          <small className="text-[7px] flex justify-center items-center">
            Batch no:OKC1122331
          </small>
        </div>

        <div>
          <nav>
            <Link href="/" className=" flex items-center gap-2">
              <Image src={karate} alt="profile" height={10} width={10} />
              <span className=" text-[9px]">Karate Course</span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
