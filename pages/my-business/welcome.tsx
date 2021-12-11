import { SEO } from "@/components/SEO";
import { MyBusinessWelcome } from "@/scenes/MyBusinessWelcome";

const Welcome = () => {
  return (
    <>
      <SEO
        description="Register your business as an Black entrepreneur, and get featured on our platform, for FREE!"
        title="My Business | SoPlugged"
      />
      <MyBusinessWelcome />
    </>
  );
};

export default Welcome;
