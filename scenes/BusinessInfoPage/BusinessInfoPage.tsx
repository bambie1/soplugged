import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faPen } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "@reach/tooltip";

import { BusinessCard } from "@/components/BusinessCard";
import { ButtonLink } from "@/styled/ButtonLink";
import { Button } from "@/styled/Button";
import { IBusiness } from "@/types/Business";

import styles from "./BusinessInfoPage.module.scss";

interface Props {
  business: IBusiness | null;
}

const BusinessInfoPage: FC<Props> = ({ business }) => {
  const router = useRouter();
  const { data: session } = useSession();

  if (!business)
    return (
      <>
        <h1 className="h1 mb-6">Business</h1>
        <div className={styles.noBusiness}>
          <Image
            src="/images/Cocktail_Monochromatic.svg"
            alt="empty clipboard"
            width={300}
            height={300}
            className={styles.emptyImage}
          />
          <p className="mt-3 text-xl lg:text-2xl">
            No business found. Just a nice beverage!
          </p>
          <p className="mt-4 mb-2">Are you an entrepreneur?</p>
          <ButtonLink href="/my-business?start=0" variant="outlined" showArrow>
            Add your business
          </ButtonLink>
        </div>
      </>
    );

  const hasLogo = business.logo_url !== "";
  const hasGoodDescription = business.business_description?.length > 150;
  const hasImages = !!business.sample_images?.split(",")[0];

  const suggestionsCount = [hasLogo, hasGoodDescription, hasImages].filter(
    Boolean
  ).length;
  const percentage = (7 + suggestionsCount) * 10;

  const suggestionHandler = (step: number) => {
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

  return (
    <>
      <div className="mb-4 flex flex-wrap items-center justify-between lg:mb-2">
        <h1 className="text-4xl font-bold text-primary lg:text-5xl">
          Hi {session?.user?.name?.split(" ")[0]}
        </h1>
        <p className="text-gray-600 underline">{session?.user?.email}</p>
      </div>
      <p className="mb-4 text-lg font-bold text-gray-700 lg:text-xl">
        Welcome to your SoPlugged dashboard
      </p>

      <div className="mt-8 grid gap-x-16 gap-y-16 lg:mt-16 lg:grid-cols-2 lg:gap-y-8">
        <section className={styles.businessCard}>
          <h3 className="mb-2 font-light uppercase text-gray-800 lg:text-lg">
            Your business
          </h3>
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
        <p className="mt-20 text-center text-sm text-gray-600 lg:text-base">
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

export default BusinessInfoPage;
