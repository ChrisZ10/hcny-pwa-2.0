import React from "react";

import Layout from "../components/layout";
import Head from "../components/head";
import Jumbotron from "../components/jumbotron";
import Card from '../components/card';
import { useConfig } from "../hooks/useMongoDb";

const Home = () => {

  const { sermonYoutubeId } = useConfig();

  return (
    <Layout>
      <Head subtitle="首頁"/>
      <Jumbotron />
      <Card 
        mediaType="video"
        mediaData={sermonYoutubeId}
      >
        <h1 className="h1 dark">主日信息</h1>
        <p className="p dark">歡迎您觀看本週的主日視頻。<br></br>更多精彩視頻，請點擊下面的按鍵進入我們的YouTube Channel查看</p>
        <a href="#youtube-channel" className="btn btn-primary">更多精彩視頻</a>
      </Card>
    </Layout>
  );
};

export default Home;