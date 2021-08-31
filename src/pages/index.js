import React from "react";

import Layout from "../components/layout";
import Head from "../components/head";
import Jumbotron from "../components/jumbotron";
import { SiYoutube } from "react-icons/si";
// import { useConfig } from "../hooks/useMongoDb";

const Home = () => {

  // const { sermonYoutubeId } = useConfig();

  return (
    <Layout>
      <Head subtitle="首頁"/>
      <Jumbotron />
      <div className="grid lg:grid-cols-3 bg-primary mx-4 my-16">
        <div className="px-8 py-4 border-b border-white">
          <h3 className="text-lg font-light">中文主日崇拜</h3>
          <p className="text-sm font-light">
            <span>SUN 10:30AM</span>
            <span className="block">
              實體聚會 + 
              <a href="#chinese">
                <SiYoutube className="inline ml-2 mr-1 relative bottom-0.5"/>YouTube直播
              </a>
            </span>
          </p>
        </div>
        <div className="px-8 py-4 border-b border-white">
          <h3 className="text-lg font-light">英文主日崇拜</h3>
          <p className="text-sm font-light">
            <span>SUN 10:30AM</span>
            <span className="block">
              實體聚會 + 
              <a href="#english">
                <SiYoutube className="inline ml-2 mr-1 relative bottom-0.5"/>YouTube直播
              </a>
            </span>
          </p>
        </div>
        <div className="px-8 py-4">
          <h3 className="text-lg font-light">兒童主日崇拜</h3>
          <p className="text-sm font-light">
            <span>SUN 10:30AM</span>
            <span className="block">
              <a href="#zoom">
                Zoom線上聚會
              </a>
            </span>
          </p>
        </div>
      </div>
      {/* <Card 
        mediaType="video"
        mediaData={sermonYoutubeId}
      >
        <h1 className="h1 dark">主日信息<span></span></h1>
        <p className="p dark">歡迎您觀看本週的主日視頻。<br></br>更多精彩視頻，請點擊下面的按鍵進入我們的YouTube Channel查看</p>
        <a href="#youtube-channel" className="btn btn-primary">更多精彩視頻</a>
      </Card>
      <Service /> */}
    </Layout>
  );
};

export default Home;