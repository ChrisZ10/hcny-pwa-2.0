import React from "react";

import Layout from "../components/layout";
import Head from "../components/head";
import Service from "../components/service";

const ServiceTime = () => {
  return (
    <Layout>
      <Head subtitle="聚會時間"/>
      <div className="w-full" style={{height: "50vh"}}></div>
      <Service />
    </Layout>
  );
};

export default ServiceTime;