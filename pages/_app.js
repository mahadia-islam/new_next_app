import "../styles/globals.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import LandingPageLayout from "../components/LandingPageLayout/LandingPageLayout";
import { ContextProvider } from "../components/FixLancerContext/FixLancerContext";
import { useRouter } from "next/router";
import Footer from "../components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 0);
  }, []);
  const router = useRouter();

  if (router.route === "/" && router.query && router.query.login !== "true") {
    return (
      <ContextProvider>
        <Component {...pageProps} />
        <Footer />
      </ContextProvider>
    );
  }

  if (Component.getLayout) {
    return (
      <ContextProvider>
        {Component.getLayout(<Component {...pageProps} />)}
      </ContextProvider>
    );
  }

  return (
    <ContextProvider>
      <LandingPageLayout>
        <Component {...pageProps} />
      </LandingPageLayout>
    </ContextProvider>
  );
}

export default MyApp;
