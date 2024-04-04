import Image from "next/image";
import { Search } from "lucide-react";
import imgLogo from "../components/img/assigment_logo.png";
import MiniProfile from "../components/img/minipro.png";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import MobileNavbar from "./MobileNavbar";

export function BreadcrumbDemo() {
  return (
    <Breadcrumb className="h-24 bg-headerbgcolor">
      <Breadcrumb className="ml-20 mr-20 pt-1 sm:ml-5 sm:mr-5 sm:pt-6">
        <BreadcrumbList className="flex justify-between items-center">
          <Image
            src={imgLogo}
            alt="profile"
            height={100}
            width={100}
            className=""
          />
          <BreadcrumbList className="flex gap-4 sm:hidden">
            <BreadcrumbItem className="text-[#F6F6F6] text-xs cursor-pointer">
              HOME
            </BreadcrumbItem>
            <BreadcrumbItem className="text-[#F6F6F6] text-xs cursor-pointer">
              ABOUT
            </BreadcrumbItem>
            <BreadcrumbItem className="text-[#F6F6F6] text-xs cursor-pointer">
              COURSES
            </BreadcrumbItem>
            <BreadcrumbItem className="text-[#F6F6F6] text-xs cursor-pointer">
              SHOP
            </BreadcrumbItem>
            <BreadcrumbItem className="text-[#F6F6F6] text-xs cursor-pointer">
              EVENTS
            </BreadcrumbItem>
            <BreadcrumbItem className="text-[#F6F6F6] text-xs cursor-pointer">
              CONTACT
            </BreadcrumbItem>
          </BreadcrumbList>
          <BreadcrumbList className="flex items-center">
            <Search className="text-white  sm:hidden" size={15} />
            <Image
              src={MiniProfile}
              alt="profile"
              height={30}
              width={30}
              className="ml-7 sm:hidden"
            />
            <div className=" md:hidden lg:hidden xl:hidden">
              <MobileNavbar />
            </div>
          </BreadcrumbList>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className=" text-center font-bold text-[#FFB606] tracking-widest text-2xl mt-3 sm:hidden">
        PROFILE
      </h1>
    </Breadcrumb>
  );
}
