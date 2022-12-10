import { Footer } from "@/components/Footer";
import Header from "@/components/Header/Header";
import { SEO } from "@/components/SEO";

const otherGuests = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1618085222100-93f0eecad0aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGJsYWNrJTIwd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    name: "Nina Barango",
    title: "Host",
    description: "Creator and founder, SoPlugged",
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1663050697267-35243ea0817d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRqfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    name: "Leon Suave",
    title: "DJ",
    description: "Award-winning DJ",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1581368129682-e2d66324045b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG9zdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    name: "Fikayo A.",
    title: "MC",
    description: "Canadian TV Personality",
  },
];

const PluggedInHomePage = () => {
  return (
    <>
      <SEO
        title="Plugged In Conference | SoPlugged"
        description="Network with fellow business-owners, share ideas and learn how to manage your finances as a business owner"
      />

      <>
        <Header />
        <div className="my-container pt-28 text-center">
          <div className="light-gradient mb-3 inline-flex rounded-2xl p-3">
            <p>SoPlugged's 2nd anniversary!</p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-radial-pluggedin"></div>
            <h1 className="mb-4 text-5xl font-extrabold sm:text-6xl lg:text-7xl">
              <span className="pluggedIn relative">
                <span className="outlinedText absolute top-[6px] left-[2px] -z-10 md:top-2 md:left-1 lg:left-[3px] lg:top-[10px]">
                  PluggedIn
                </span>
                PluggedIn
              </span>{" "}
              <span className="conference outlinedText">Conference</span>
            </h1>
            <p className="mx-auto mb-4 max-w-3xl font-light lg:text-xl">
              Simply the place to be as an entrepreneur in Canada! Network with
              fellow business-owners, share ideas and learn how to manage your
              finances as a business owner
            </p>
            <p className="mb-4">@ The BedRock, Toronto</p>
            <button className="neuButton">
              Get your tickets
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex justify-center gap-2">
            <p>FEBRUARY 18, 2023</p>
            <p>6PM</p>
          </div>

          <div className="light-gradient relative mt-20 py-10 pt-28 lg:py-20">
            <div className="absolute -top-20 left-0 w-full">
              <div className="mx-auto mt-3 grid max-w-md grid-cols-4 items-center px-2">
                <div className="flex aspect-[3/4] flex-col items-center justify-center gap-1 rounded-lg border border-primary bg-white p-2">
                  <p className="text-3xl font-bold lg:text-5xl">15</p>
                  <p className="text-sm font-light lg:text-base">Days</p>
                </div>
                <div className="ml-auto flex aspect-[3/4] w-[85%] flex-col items-center justify-center rounded-lg border border-primary bg-white p-2">
                  <p className="text-2xl lg:text-3xl">20</p>
                  <p className="text-xs font-light lg:text-sm">Hours</p>
                </div>
                <div className="ml-auto flex aspect-[3/4] w-[85%] flex-col items-center justify-center rounded-lg border border-primary bg-white p-2">
                  <p className="text-2xl lg:text-3xl">40</p>
                  <p className="text-xs font-light lg:text-sm">Minutes</p>
                </div>
                <div className="ml-auto flex aspect-[3/4] w-[85%] flex-col items-center justify-center rounded-lg border border-primary bg-white p-2">
                  <p className="text-2xl lg:text-3xl">10</p>
                  <p className="text-xs font-light lg:text-sm">Seconds</p>
                </div>
              </div>
            </div>

            <div className="my-container grid items-center gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
              <div>
                <img
                  src="reni.jpg"
                  alt="Portrait of Reni Odetoyinbo"
                  className="transparentShadow mb-3 aspect-[3/4] w-full rounded-lg border border-primary object-cover lg:mb-4"
                />
                <p>KEYNOTE SPEAKER</p>
                <p>Reni Odetoyinbo</p>
                <p>Marketing consultant and finance enthusiast</p>
              </div>
              {otherGuests.map(({ name, imageUrl, title, description }) => (
                <div
                  key={name}
                  className="mx-auto sm:ml-0 md:w-[80%] lg:ml-auto lg:mr-0"
                >
                  <img
                    src={imageUrl}
                    alt={`Portrait of ${name}`}
                    className="aspect-square w-full rounded-lg border border-primary object-cover object-top sm:aspect-[3/4] lg:mb-4"
                  />
                  <p>{title}</p>
                  <p>{name}</p>
                  <p className="lg:text-base">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </>
    </>
  );
};

export default PluggedInHomePage;
