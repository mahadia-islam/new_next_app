import Footer from "../Footer/Footer";
import LandingPageHeader from "../LandingPageHeader/LandingPageHeader";

const LandingPageLayout = ({ children }) => {
  return (
    <>
      <LandingPageHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default LandingPageLayout;
