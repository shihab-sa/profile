import React from "react";
import { Button } from "@/components/ui/button";
import MiniProfile from "../components/img/minipro.png";
import { Search } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import imgLogo from "../components/img/assigment_logo.png";
import Image from "next/image";

type Props = {};

export default function MobileNavbar({}: Props) {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button>
            <Menu size={15} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <Breadcrumb>
            <BreadcrumbList>
              <Image
                src={imgLogo}
                alt="profile"
                height={100}
                width={100}
                className=""
              />
              <Image
                src={MiniProfile}
                alt="profile"
                height={30}
                width={30}
                className="ml-7"
              />
            </BreadcrumbList>
          </Breadcrumb>

          <BreadcrumbList className="flex flex-col py-10">
            <BreadcrumbItem className="text-[##232946] text-xs cursor-pointer font-bold">
              HOME
            </BreadcrumbItem>
            <BreadcrumbItem className="text-[#232946] text-xs cursor-pointer font-bold">
              ABOUT
            </BreadcrumbItem>
            <BreadcrumbItem className="text-[#232946] text-xs cursor-pointer font-bold">
              COURSES
            </BreadcrumbItem>
            <BreadcrumbItem className="text-[#232946] text-xs cursor-pointer font-bold">
              SHOP
            </BreadcrumbItem>
            <BreadcrumbItem className="text-[#232946] text-xs cursor-pointer font-bold">
              EVENTS
            </BreadcrumbItem>
            <BreadcrumbItem className="text-[#232946] text-xs cursor-pointer font-bold">
              CONTACT
            </BreadcrumbItem>
          </BreadcrumbList>
          <div className="  py-5 flex items-center p-2 bg-white rounded-lg">
            <Search className="text-black" size={20} />
            <input
              placeholder="Your Query"
              className=" border-none outline-none p-2"
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
