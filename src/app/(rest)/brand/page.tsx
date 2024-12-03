import { Download } from "lucide-react";

import { Nav } from "@/components/nav";
import { SubscribeBanner } from "@/components/shared/SubscribeBanner";

export default async function BrandPage() {
  return (
    <div className="relative z-10">
      <Nav isLight />

      <div className="absolute left-0 top-0 -z-10 h-80 w-full bg-gradient-to-b from-[#F2EDE3] to-white"></div>

      <div className="mx-auto flex max-w-3xl flex-col items-center pb-20 pt-40 text-center text-primary lg:pt-48">
        <h1 className="large mb-4">Brand Kit</h1>
        <p className="lg:text-lg">
          Grab our official SoPlugged brand resources and learn about usage
          guidelines.
        </p>
      </div>

      <div className="padded mb-20 max-w-3xl lg:mt-10">
        <div className="prose">
          <h2>Our name</h2>
          <p>
            Our name is SoPlugged, a reflection of our connected and vibrant
            community. • Always write it as SoPlugged — one word, with “S” and
            “P” capitalized. • Avoid modifying the name or using abbreviations.
            Consistency helps build our brand identity and trust.
          </p>

          <h2>Our logo</h2>
          <p>
            The SoPlugged logo represents the energy and connection that powers
            our community. • Primary Logo: Features the plug icon and
            “SoPlugged” wordmark. • Color Options: Use the primary color logo on
            light backgrounds and the white version on dark backgrounds.
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div className="aspect-video border"></div>
            <div className="aspect-video border"></div>
            <div className="aspect-video border"></div>
            <div className="aspect-video border"></div>
          </div>

          <button className="mt-8 flex items-center gap-2 rounded-full bg-black px-4 py-2 text-white">
            <Download size={16} />
            Download Logo Kit
          </button>
        </div>
      </div>

      <SubscribeBanner />
    </div>
  );
}
