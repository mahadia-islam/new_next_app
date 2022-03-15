import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";
import FeaturedFixes from "../components/FeaturedFixes/FeaturedFixes";
import FeelTheBlend from "../components/FeelTheBlend/FeelTheBlend";
import FixCategory from "../components/FixCategory/FixCategory";
import FixLancerContext from "../components/FixLancerContext/FixLancerContext";
import Footer from "../components/Footer/Footer";
import FundsProtected from "../components/FundsProtected/FundsProtected";
import Header from "../components/Header/Header";
import HeaderMain from "../components/HeaderMain/HeaderMain";
import HowDoesItWork from "../components/HowDoesItWork/HowDoesItWork";
import LandingPage from "../components/LandingPage/LandingPage";
import RecommandedFix from "../components/RecommandedFix/RecommandedFix";
import TheNews from "../components/TheNews/TheNews";

export default function Home() {
  const router = useRouter();
  const { loggedInUser } = useContext(FixLancerContext);

  if (loggedInUser.email && router.query.login === "true") {
    return <LandingPage />;
  }
  if (router.query.login === "true" && !loggedInUser.email) {
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Fixlancer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Fixlancer is a Freelance Platform" />
      </Head>
      <Header />
      <HeaderMain />
      <FixCategory />
      <FeaturedFixes />
      <RecommandedFix />
      <FeelTheBlend />
      {/* <HowDoesItWork /> */}
      <TheNews />
      {/* <FundsProtected /> */}
    </>
  );
}
