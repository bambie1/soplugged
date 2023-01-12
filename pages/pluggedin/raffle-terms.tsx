import SEO from "@/components/SEO";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

const RaffleTerms = () => {
  return (
    <>
      <SEO
        title="Raffle draw T&Cs - Plugged In 2023 | SoPlugged"
        description="Terms and conditions for the SoPluggedPro raffle draw at PluggedIn 2023"
        variant="pluggedin"
      />
      <Header variant="conf" />

      <main className="mx-auto px-4 pt-12 sm:px-6">
        <h1 className="mb-4 text-center text-5xl font-extrabold sm:text-6xl lg:text-7xl">
          <span className="pluggedIn relative">
            <span className="outlinedText absolute top-[6px] left-[2px] -z-10 md:top-2 md:left-1 lg:left-[3px] lg:top-[10px]">
              Terms
            </span>
            Terms
          </span>
          <span className="outlinedText conference ml-1"> & Conditions</span>
        </h1>

        <p className="text-center uppercase text-gray-500">
          PluggedIn Raffle Draw
        </p>

        <div className="prose mx-auto mt-10 lg:prose-lg">
          <p>
            <span className="font-bold underline">Eligibility:</span> To be
            eligible to participate in the raffle draw, you must meet all of the
            following criteria:
          </p>
          <ul>
            <li>Register and attend the PluggedIn event</li>
            <li>Follow SoPlugged on Instagram and Twitter</li>
            <li>List your business on our directory</li>
          </ul>

          <p className="mt-4">
            <span className="font-bold underline">Drawing:</span>The raffle draw
            will take place on the day of the event. One winner will be selected
            at random from all eligible participants.
          </p>

          <p className="mt-4">
            <span className="font-bold underline">Prize:</span> The prize for
            the raffle draw is a free business makeover, including a new
            website, logo, and product images. The prize has an approximate
            value of $1,000.
          </p>

          <p className="mt-4 font-bold underline">Conditions:</p>
          <ul>
            <li>
              The prize is non-transferable and cannot be exchanged for cash or
              any other form of compensation.
            </li>
            <li>
              The winner will be required to sign a release form accepting the
              prize.
            </li>
            <li>
              SoPlugged reserves the right to disqualify any participant who
              does not meet the eligibility requirements or who is found to be
              in violation of these terms and conditions.
            </li>
            <li>
              SoPlugged reserves the right to modify or cancel the raffle draw
              at any time without prior notice, at its sole discretion.
            </li>
          </ul>

          <p>
            By participating in the raffle draw, you agree to these terms and
            conditions.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RaffleTerms;
