import React from "react";

import Layout from "../components/layout";
import Head from "../components/head";
import Jumbotron from "../components/jumbotron";
import Card from '../components/card';

const Home = () => {

  const sermonVideoId = "IJdtsWZ1d_Y";

  return (
    <Layout>
      <Head subtitle="首頁"/>
      <Jumbotron />
      <Card 
        mediaType="video"
        mediaData={sermonVideoId}
      >
        <h1>Test</h1>
      </Card>
    </Layout>
  );
};

export default Home;