import PhotographyService from "./PhotographyService";
import SocialMediaService from "./SocialMediaService";
import WebsiteService from "./WebsiteService";

const OurServices = () => {
  return (
    <div>
      <p className="text-center font-light tracking-widest">OUR SERVICES</p>

      <div className="grid gap-10 lg:gap-20">
        <WebsiteService />
        <SocialMediaService />
        <PhotographyService />
      </div>
    </div>
  );
};

export default OurServices;
