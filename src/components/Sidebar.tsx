import React from "react";
import Image from "next/image";
import sidebarImage from "../img/sidebar.png";
import sidebarLeft from "../img/sidebar_left_icon.png";
import sidebarRight from "../img/sidebar_right_icon.png";
import Link from "next/link";
import karate from "../img/Education.png";
import onlineCourses from "../img/online_courses.png";
import video from "../img/videos.png";
import eqp from "../img/equp.png";
import comp from "../img/compe.png";
import fav from "../img/yourfev.png";
import noti from "../img/noti.png";
import { UserRound } from "lucide-react";
import income from "../img/Income.png";
import setting from "../img/settings (1).png";
import signOut from "../img/signout.png";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <div className=" mt-10">
      <div className=" bg-sidebarbgcolor w-full pb-8 rounded-xl">
        <div className="flex justify-center items-center p-3 relative">
          <Image
            src={sidebarImage}
            alt="profile"
            height={130}
            width={130}
            className=""
          />
          <div>
            <Image
              src={sidebarLeft}
              alt="profile"
              height={15}
              width={15}
              className="absolute bottom-7 left-7"
            />
          </div>
          <div>
            <Image
              src={sidebarRight}
              alt="profile"
              height={35}
              width={35}
              className="absolute right-4 bottom-6"
            />
          </div>
        </div>
        <div className="">
          <p className=" uppercase text-[9px] flex justify-center items-center">
            Assessment Username
          </p>
          <small className="text-[7px] flex justify-center items-center">
            Batch no:KC22041
          </small>
          <small className="text-[7px] flex justify-center items-center">
            Batch no:OKC1122331
          </small>
        </div>
        {/* side bar section one start  */}
        <div className=" mt-5">
          <nav>
            {/* one  */}
            <div className="w-full bg-sidebartabbgcolor p-2 mb-1">
              <Link href="/karete" className=" flex items-center gap-2 ">
                <Image
                  src={karate}
                  alt="profile"
                  height={10}
                  width={10}
                  color="#565656"
                />
                <span className=" text-[9px] text-[#565656]">
                  Karate Course
                </span>
              </Link>
            </div>

            {/* two  */}
            <div className="w-full bg-sidebartabbgcolor p-2 mb-1">
              <Link href="/online" className=" flex items-center gap-2">
                <Image
                  src={onlineCourses}
                  alt="profile"
                  height={10}
                  width={10}
                />
                <span className=" text-[9px]">Online Courses</span>
              </Link>
            </div>

            {/* three  */}
            <div className="w-full bg-sidebartabbgcolor p-2 mb-1">
              <Link href="/myvideo" className=" flex items-center gap-2">
                <Image src={video} alt="profile" height={10} width={10} />
                <span className=" text-[9px]">Videos</span>
              </Link>
            </div>

            {/* four  */}
            <div className="w-full bg-sidebartabbgcolor p-2 mb-1">
              <Link href="/equipments" className=" flex items-center gap-2">
                <Image src={eqp} alt="profile" height={10} width={10} />
                <span className=" text-[9px]">Equipments</span>
              </Link>
            </div>

            {/* five  */}
            <div className="w-full bg-sidebartabbgcolor p-2 mb-1">
              <Link href="/competetion" className=" flex items-center gap-2">
                <Image src={comp} alt="profile" height={10} width={10} />
                <span className=" text-[9px]">Competition</span>
              </Link>
            </div>
          </nav>
        </div>

        {/* side bar section one end */}

        {/* side bar section two start  */}
        <div className=" mt-5">
          <nav>
            {/* one  */}
            <div className="w-full bg-sidebartabbgcolor p-2 mb-1">
              <Link href="/fav" className=" flex items-center gap-2">
                <Image src={fav} alt="profile" height={10} width={10} />
                <span className=" text-[9px]">Your Favorite</span>
              </Link>
            </div>

            {/* two  */}
            <div className="w-full bg-sidebartabbgcolor p-2 mb-1">
              <Link href="/noti" className=" flex items-center gap-2">
                <Image src={noti} alt="profile" height={10} width={10} />
                <span className=" text-[9px]">Notification</span>
              </Link>
            </div>

            {/* three  */}
            <div className="w-full bg-sidebartabbgcolor p-2 mb-1">
              <Link href="/myprofile" className=" flex items-center gap-2">
                <UserRound height={10} width={10} />
                <span className=" text-[9px]">My Profile</span>
              </Link>
            </div>
            {/* four  */}

            <div className="w-full bg-sidebartabbgcolor p-2 mb-1">
              <Link href="/setting" className=" flex items-center gap-2">
                <Image src={setting} alt="profile" height={10} width={10} />
                <span className=" text-[9px]">Setting</span>
              </Link>
            </div>

            {/* five  */}
            <div className="w-full bg-sidebartabbgcolor p-2 mb-1">
              <Link href="/signout" className=" flex items-center gap-2">
                <Image src={signOut} alt="profile" height={10} width={10} />
                <span className=" text-[9px]">Sign Out</span>
              </Link>
            </div>

            {/* six */}
            <div className="w-full bg-sidebartabbgcolor p-2 mb-1">
              <Link href="/income" className=" flex items-center gap-2">
                <Image src={income} alt="profile" height={10} width={10} />
                <span className=" text-[9px]">Income</span>
              </Link>
            </div>
          </nav>
        </div>

        {/* side bar section two end */}
      </div>
    </div>
  );
}
