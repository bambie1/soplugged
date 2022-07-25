import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import Hero from "@/components/Hero";
import { FAQs } from "@/components/FAQs";
import PopularBusinesses from "@/components/PopularBusinesses";
import { popularCategories } from "@/lib/popularCategories";

import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
  PlusIcon,
} from "@heroicons/react/outline";

const transferFeatures = [
  {
    id: 2,
    name: "Add your business",
    description:
      "Easily add your business to our directory for FREE, and let potential customers come to you",
    icon: PlusIcon,
  },
  {
    id: 3,
    name: "Go PRO",
    description:
      "Reach out to our team of experts if you are looking to launch or improve your digital presence with a website or social media marketing.",
    icon: LightningBoltIcon,
  },
  {
    id: 1,
    name: "Join our sponsors",
    description:
      "We rely on amazing people like you to keep our platform free and accessible to Black-owned businesses across Canada. ",
    icon: GlobeAltIcon,
  },
];

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

const HomePage = () => {
  return (
    <>
      <Header color="brown" />
      <Hero />
      <div className="flex flex-col mt-10 lg:mt-20">
        <section className="lg:hidden">
          {/* <h2 className="text-2xl font-bold">Popular Categories</h2> */}
          <div className="lg:hidden overflow-x-auto">
            <ul className="inline-flex px-4 gap-4">
              {[0, 1, 2, 3, 4, 5].map((item) => (
                <li
                  key={item}
                  className="w-40 h-40 rounded-full relative overflow-hidden"
                >
                  <Image
                    src={popularCategories[item].url}
                    objectFit="cover"
                    alt=""
                    layout="fill"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="">
          <PopularBusinesses />
        </section>

        <section className="my-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center my-container">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold">
                <span className="text-primary">#Buyingblack</span> just got
                easier
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                It's time to stop searching. We're here to help you find the
                best black-owned businesses in your city with the click of a
                button. Find everything from restaurants, hairstylists and
                salons to tutoring, tech and healthcare services.
              </p>
              <p className="mt-3 text-lg text-gray-500 hidden lg:block">
                You can now have all your black-owned businesses in one place,
                right at your fingertips.
              </p>

              <Link href="/search">
                <a className="mt-6">Explore businesses</a>
              </Link>
            </div>
            <div>
              <dl className="mt-10 space-y-10">
                {transferFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* <FAQs /> */}
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
