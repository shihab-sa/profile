import React from "react";
import Layout from "../page";
import Image from "next/image";
import myCertificatse from "../../../../components/img/my_certificates_icon.png";
import transcript from "../../../../components/img/transcript_icon.png";
import Cardone from "@/components/Cardone";
import CardTwo from "@/components/CardTwo";

const certificates = () => {
  return (
    <div>
      <Layout>
        <div>
          {/* button section start  */}
          <div className=" flex gap-10 items-center mt-10">
            <button className=" flex items-center gap-3 px-8 py-4 bg-[#FFB606] rounded-2xl">
              <div className=" bg-white h-5 w-5 rounded-2xl flex justify-center items-center">
                <Image src={myCertificatse} alt="log" height={10} width={10} />
              </div>
              <small className=" text-[#FAFAFA] text-[0.5rem]">
                My Certificates
              </small>
            </button>

            <button className="flex items-center gap-3 px-8 py-4 bg-[#F6F6F6] rounded-2xl">
              <div
                className="
                bg-[#FFB606]
                h-5
                w-5
                rounded-2xl
                flex
                justify-center
                items-center"
              >
                <Image src={transcript} alt="log" height={9} width={9} />
              </div>

              <small className=" text-[#5C5C5C] text-[0.5rem]">
                Transcript
              </small>
            </button>
          </div>
          {/* button section end  */}

          {/* box start  */}

          <div className="bg-[#F6F6F6] mt-10 w-[90%] rounded-xl">
            <div className=" flex items-center">
              <div className="p-5">
                <Cardone />
                <Cardone />
              </div>
              <div className=" mr-10">
                <CardTwo />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default certificates;
