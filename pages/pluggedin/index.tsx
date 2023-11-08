import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import SEO from "@/components/SEO";

const PluggedInHomePage = () => {
  return (
    <>
      <SEO
        title="PluggedIn 2024 | SoPlugged"
        description="Network with fellow business-owners, and learn how to manage your finances as a business owner at SoPlugged's 2nd anniversary"
        variant="pluggedin"
      />

      <Header whiteBg />
      <div className="my-container mb-20 pt-12 text-center">
        <div className="pluggedInGradient relative mt-10 w-full gap-10 overflow-hidden rounded-lg py-8 px-4 text-center shadow backdrop-blur-[1px] md:p-10 lg:grid-cols-5 xl:py-32 xl:px-16"></div>
      </div>

      <Footer />
    </>
  );
};

export default PluggedInHomePage;
