import React from "react";
import Layout from "../page";
import profilemna from "../../../../components/img/sidebar.png";
import Image from "next/image";

const EditPage = () => {
  return (
    <div>
      <Layout>
        <div>
          <div>
            <div>
              <Image
                src={profilemna}
                alt=""
                height={130}
                width={130}
                color="#565656"
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default EditPage;
