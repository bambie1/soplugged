import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faPen } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "@reach/tooltip";
import { usePlausible } from "next-plausible";

import { BusinessCard } from "@/src/components/BusinessCard";
import { ButtonLink } from "@/styled/ButtonLink";
import { Button } from "@/styled/Button";
import { IBusiness } from "@/types/Business";

import styles from "./BusinessInfoPage.module.scss";
import { MyEvents } from "@/types/Plausible";

interface Props {
  business: IBusiness | null;
}

const BusinessInfoPage: FC<Props> = ({ business }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const plausible = usePlausible<MyEvents>();

  const hasLogo = !!business && business.logo_url !== "";
  const hasGoodDescription =
    !!business && business.business_description?.length > 150;
  const hasImages = !!business && !!business.sample_images?.split(",")[0];

  const suggestionsCount = [hasLogo, hasGoodDescription, hasImages].filter(
    Boolean
  ).length;
  const percentage = (7 + suggestionsCount) * 10;

  const suggestionHandler = (step: number) => {
    plausible("Edit your business", {
      props: {
        "Business name": business?.business_name!,
        "From suggestion": true,
      },
    });
    router.push(`/my-business?start=${step}`);
  };

  const renderInsights = () => {
    if (percentage === 100) {
      return <p>Looking great, boss! Keep being awesome</p>;
    }

    return (
      <>
        {!hasLogo && (
          <div className={styles.suggestion}>
            <p>Add a logo</p>
            <button
              className="icon-btn-outline"
              onClick={() => suggestionHandler(4)}
            >
              <FontAwesomeIcon icon={faPen} />
              Fix
            </button>
          </div>
        )}
        {!hasImages && (
          <div className={styles.suggestion}>
            <p>Upload sample images</p>
            <Button variant="text" onClick={() => suggestionHandler(4)}>
              <FontAwesomeIcon icon={faPen} className="mr-2" />
              Fix
            </Button>
          </div>
        )}
        {!hasGoodDescription && (
          <div className={styles.suggestion}>
            <p>Describe your business more</p>
            <Button variant="text" onClick={() => suggestionHandler(2)}>
              <FontAwesomeIcon icon={faPen} className="mr-2" />
              Fix
            </Button>
          </div>
        )}
      </>
    );
  };

  const renderContent = () => {
    if (!business)
      return (
        <>
          <div className="mt-10 text-gray-600 lg:mt-14">
            <div className="w-full rounded-lg border border-primary/30 p-4 lg:w-1/2">
              <p className="font-medium text-black">
                Your business isn't on the SoPlugged directory yet
              </p>
              <p className="mt-2 mb-6 hidden text-base lg:mb-8 lg:block">
                If you're a business-owner and would like to expand your
                customer reach, you can easily list your business on our
                directory for FREE!
              </p>
              <p className="mt-2 mb-6 lg:mb-8 lg:hidden">
                You can easily change that for FREE!
              </p>
              <ButtonLink
                href="/my-business"
                variant="outlined"
                showArrow
                onClick={() =>
                  plausible("Add your business", {
                    props: {
                      User: session?.user?.name!,
                    },
                  })
                }
              >
                Add your business
              </ButtonLink>
            </div>
          </div>
        </>
      );

    return (
      <>
        <div className="mt-8 grid gap-x-16 gap-y-16 lg:mt-16 lg:grid-cols-2 lg:gap-y-8">
          <section className="">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-light uppercase text-gray-800 lg:text-lg">
                Your business
              </h3>

              <Link href="/my-business">
                <a
                  className="text-primary"
                  onClick={() =>
                    plausible("Edit your business", {
                      props: {
                        "Business name": business?.business_name!,
                        "From suggestion": false,
                      },
                    })
                  }
                >
                  <FontAwesomeIcon
                    icon={faPen}
                    className="mr-1 h-1"
                    strokeWidth={1}
                  />
                  Edit
                </a>
              </Link>
            </div>
            <BusinessCard business={business} />
          </section>

          <section className={styles.insightsDiv}>
            <article
              className={`${styles.sectionTitle} mb-2 font-medium text-gray-800`}
            >
              <h3 className="font-light uppercase text-gray-800 lg:text-lg">
                Business Insights
              </h3>
              <Tooltip label="Suggestions to improve your SoPlugged business page">
                <div>
                  <FontAwesomeIcon icon={faInfoCircle} />
                </div>
              </Tooltip>
            </article>

            <div className="max-w-sm rounded-lg bg-primary/5 py-4 px-5">
              {renderInsights()}
            </div>
          </section>
        </div>

        {business.created_at && (
          <p className="mt-20 text-sm text-gray-600 lg:-mb-14 lg:text-base">
            Joined{" "}
            {new Date(business.created_at).toLocaleString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </p>
        )}
      </>
    );
  };

  return (
    <>
      <div className="mb-4 flex flex-wrap items-center justify-between lg:mb-2">
        <h1 className="text-4xl font-bold text-primary lg:text-5xl">
          Hi {session?.user?.name?.split(" ")[0] || "entrepreneur"}
        </h1>
        <p className="text-gray-600 underline">{session?.user?.email}</p>
      </div>
      <p className="mb-4 text-lg font-medium text-gray-700 lg:text-xl">
        Welcome to your SoPlugged dashboard
      </p>

      {renderContent()}
    </>
  );
};

export default BusinessInfoPage;
