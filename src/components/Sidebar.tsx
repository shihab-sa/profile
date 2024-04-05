import React from "react";
import Image from "next/image";
import Link from "next/link";
import edu from "../components/img/Education.png";
import onlineCourses from "../components/img/online_courses.png";
import videos from "../components/img/videos.png";
import equpments from "./img/equp.png";
import com from "./img/compe.png";
import myfav from "./img/yourfev.png";
import noti from "./img/noti.png";
import man from "./img/sidebar.png";
import leftSite from "./img/sidebar_left_icon.png";
import rightSite from "./img/sidebar_right_icon.png";
import income from "./img/Income.png";
import signOut from "./img/signout.png";
import setting from "./img/settings (1).png";
import admin from "./img/online_courses.png";
import MobileSidebar from "./MobileSidebar";

type SidebarItemProps = {
  href: string;
  imageSrc: string;
  text: string;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ href, imageSrc, text }) => {
  return (
    <div className="w-full bg-sidebartabbgcolor p-2 mb-1">
      <Link href={href} className="flex items-center gap-2">
        <Image
          src={imageSrc}
          alt={text}
          height={10}
          width={10}
          color="#565656"
        />
        <span className="text-[9px] text-[#565656]">{text}</span>
      </Link>
    </div>
  );
};

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  const sidebarItems = [
    {
      href: "/karete",
      imageSrc: edu,
      text: "Karate Course",
    },
    {
      href: "/online",
      imageSrc: onlineCourses,
      text: "Online Courses",
    },
    {
      href: "/myvideo",
      imageSrc: videos,
      text: "Videos",
    },
    {
      href: "/equipments",
      imageSrc: equpments,
      text: "Equipments",
    },
    {
      href: "/competetion",
      imageSrc: com,
      text: "Competition",
    },
    {
      href: "/favorite",
      imageSrc: myfav,
      text: "Your Favorite",
    },
    {
      href: "/noti",
      imageSrc: noti,
      text: "Notification",
    },
    {
      href: "/myprofile",
      imageSrc: admin,
      text: "My Profile",
    }, // Assuming no specific image for My Profile
    {
      href: "/setting",
      imageSrc: setting,
      text: "Setting",
    },
    {
      href: "/signout",
      imageSrc: signOut,
      text: "Sign Out",
    },
    {
      href: "/income",
      imageSrc: income,
      text: "Income",
    },
  ];

  return (
    <div className="mt-10">
      <div className="bg-sidebarbgcolor w-full pb-8 rounded-xl sm:hidden md:hidden">
        {/* Profile section */}
        <div className="flex justify-center items-center p-3">
          <Image
            src={man}
            alt="profile"
            height={130}
            width={130}
            className=""
          />
          <div className="absolute bottom-6 left-5 sm:bottom-5 sm:left-4 md:bottom-9 md:left-24 lg:bottom-5   lg:left-5 sm:absolute md:absolute lg:absolute bg-white h-6 w-6 rounded-xl border-2 grid place-items-center">
            <Image src={leftSite} alt="profile" height={12} width={12} />
          </div>
          <div className="absolute right-4 bottom-6 sm:right-3 sm:bottom-6 md:bottom-8 md:right-24">
            <Image src={rightSite} alt="profile" height={25} width={25} />
          </div>
        </div>

        {/* Username section */}
        <div className="">
          <p className="text-[9px] flex justify-center items-center text-[#26235B]">
            Assessment Username
          </p>
          <small className="text-[7px] flex justify-center items-center mt-2 text-[#565656]">
            Batch no:KC22041
          </small>
          <small className="text-[7px] flex justify-center items-center mt-2 text-[#565656]">
            Batch no:OKC1122331
          </small>
        </div>

        <div className="mt-4">
          {sidebarItems.slice(0, 5).map((item, index) => (
            <SidebarItem
              key={index}
              href={item.href}
              imageSrc={item.imageSrc}
              text={item.text}
            />
          ))}
        </div>
        <div className="mt-3">
          {sidebarItems.slice(5, sidebarItems.length).map((item, index) => (
            <SidebarItem
              key={index}
              href={item.href}
              imageSrc={item.imageSrc}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
