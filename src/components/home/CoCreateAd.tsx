import { DM_Serif_Display } from "next/font/google";
import Link from "next/link";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

export const CoCreateAd = () => {
  return (
    <div className="from-pink relative bg-gradient-to-t to-white py-20 text-black lg:py-28">
      <div className="padded">
        <div className="w-1/2">
          <span
            className={`mb-10 block text-2xl text-gray-600 lg:text-3xl ${dmSerif.className}`}
          >
            co-create
          </span>
          <p
            className={`mb-2 text-4xl font-bold lg:text-5xl ${dmSerif.className}`}
          >
            There's a better way to grow as a creator!
          </p>
          <p>
            Access the people and resources you need to grow your creator
            business.
          </p>

          <Link
            href="/co-create"
            className="mt-10 inline-block rounded-full bg-black p-4 px-8 font-medium text-white"
          >
            Join the club
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 top-0 w-2/5 bg-white/25"></div>
    </div>
  );
};
