import React from "react";
import Layout from "../page";
import profilemna from "../../../../components/img/inner_router_img.png";
import Image from "next/image";

const EditPage = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className=" shadow h-full w-[98%] p-14">
            <div className=" w-[100%] bg-[#F6F6F6] py-3 px-3 rounded-full">
              <div className=" flex items-center gap-x-14">
                <Image
                  src={profilemna}
                  alt=""
                  height={80}
                  width={80}
                  color="#565656"
                />
                <div className=" flex items-center gap-x-5">
                  <div className="flex justify-center items-center">
                    <p className=" text-xs border text-[#26235B] border-[#26235B] h-10 w-[100%] rounded-full flex items-center justify-center px-5">
                      Upload Image
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="text-xs border text-[#26235B] border-[#26235B] h-10 w-[100%] rounded-full flex items-center justify-center px-5">
                      Delete
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* sign in and log in form section  */}

            <div className="mt-5">
              {/* one   */}
              <div className=" flex justify-between">
                {/* name  */}
                <div>
                  <p className=" text-xs">Name:</p>
                  <input
                    placeholder="Assessment Username"
                    className="text-xs bg-[#F6F6F6] px-16 py-3 rounded-full mt-5 text-[#6F6F6F]"
                  />
                </div>
                {/* nationality*/}
                <div>
                  <p className=" text-xs">Nationality:</p>
                  <input
                    placeholder="Bangladeshi"
                    className="text-xs bg-[#F6F6F6] px-16 py-3 rounded-full mt-5 text-[#6F6F6F]"
                  />
                </div>
              </div>

              {/* two  */}
              <div className=" flex justify-between mt-5">
                {/* date of birth */}
                <div>
                  <p className=" text-xs">Date of Birth:</p>
                  <input
                    placeholder="12/11/99"
                    className="text-xs bg-[#F6F6F6] px-16 py-3 rounded-full mt-5 text-[#6F6F6F]"
                  />
                </div>
                {/* NID*/}
                <div>
                  <p className=" text-xs">NID:</p>
                  <input
                    placeholder="123-44-33-33"
                    className="text-xs bg-[#F6F6F6] px-16 py-3 rounded-full mt-5 text-[#6F6F6F]"
                  />
                </div>
              </div>

              {/* three  */}
              <div className=" flex justify-between mt-5">
                {/* Blood Group */}
                <div>
                  <p className=" text-xs">Blood Group:</p>
                  <input
                    placeholder="B+"
                    className="text-xs bg-[#F6F6F6] px-16 py-3 rounded-full mt-5 text-[#6F6F6F]"
                  />
                </div>
                {/* Gender*/}
                <div>
                  <p className=" text-xs">Gender:</p>
                  <input
                    placeholder="Male"
                    className="text-xs bg-[#F6F6F6] px-16 py-3 rounded-full mt-5 text-[#6F6F6F]"
                  />
                </div>
              </div>
            </div>
            {/* present address  */}
            <div className=" mt-5">
              {/* name  */}
              <div>
                <p className=" text-xs">Present Address :</p>
                <input
                  placeholder="Uttora  sector, 99,  d / block"
                  className="text-xs bg-[#F6F6F6] w-[100%] py-3 p-5 rounded-full mt-5 text-[#6F6F6F]"
                />
              </div>
            </div>

            {/* permanent address  */}
            <div className=" mt-5">
              {/* name  */}
              <div>
                <p className=" text-xs">Permanent Address :</p>
                <input
                  placeholder="Uttora  sector, 99,  d / block"
                  className="text-xs bg-[#F6F6F6] w-[100%] py-3 p-5 rounded-full mt-5 text-[#6F6F6F]"
                />
              </div>
            </div>

            {/* footer section */}
            <div className=" mt-10 flex justify-between">
              <small className=" text-sm text-[#949494]">
                If you change your profile,then press save changes
              </small>
              <a className=" bg-[#26235B] text-xs text-white px-3 py-2 rounded-full cursor-pointer">
                Save Changes
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default EditPage;
