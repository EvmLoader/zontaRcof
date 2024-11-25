// src/pages/index.jsx
import React, { useState } from "react";
import HeroSection from "@/components/pages/frontend/NewHero";
import FeaturesSection from "@/components/pages/frontend/FeaturesSection";
import Footer from "@/components/pages/frontend/Footer";
import Layout from "@/layouts/Nav";
import BuilderComponent from "@/components/pages/frontend/BuilderComponent";
import StatusSection from "@/components/pages/frontend/StatusSection";
import CookieBanner from "@/components/pages/frontend/Cookie";
import BannerSection from "@/components/pages/frontend/BannerSection";
import Innovative from "@/components/pages/frontend/Innovative";
import Cardx from "@/components/pages/frontend/Card";
import Mob from "@/components/pages/frontend/3mob";
import Compare from "@/components/pages/frontend/Compare";
import Holder from "@/components/pages/frontend/Holder";
import More from "@/components/pages/frontend/More";
import TokenRenum from "@/components/pages/frontend/TokenRenum";
import Tokenomics from "@/components/pages/frontend/Tokenomics";
import FAQ from "@/components/pages/frontend/FAQ";
const frontendType = process.env.NEXT_PUBLIC_FRONTEND_TYPE || "default";

const Home = () => {
  if (frontendType === "default") {
    return (
      <Layout horizontal>
        <HeroSection />
        <Innovative />
        <Mob />
        <Cardx />
        <Compare />
        <Holder />
        <More />
        <TokenRenum />
        <Tokenomics />
        <FAQ />
        {/* <StatusSection />
        <FeaturesSection /> */}
        <BannerSection />
        <Footer />
        <CookieBanner />
      </Layout>
    );
  }

  return <BuilderComponent />;
};

export default Home;
