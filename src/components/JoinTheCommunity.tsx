import Image from "next/image";

const JoinTheCommunity = () => {
  return (
    <div className="relative min-h-[10rem] bg-new-light">
      <div className="absolute left-0 top-0 bottom-0 hidden w-[47%] lg:block">
        <Image src="/unsplash/media.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className="my-container grid gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="py-4 lg:col-start-2 lg:py-10">
          <h3>Join the SoPlugged community!</h3>
          <p>Follow us on IG</p>

          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default JoinTheCommunity;
