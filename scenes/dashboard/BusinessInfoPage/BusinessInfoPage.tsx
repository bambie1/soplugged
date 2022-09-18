import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faPen } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import Tooltip from "@reach/tooltip";

import { BusinessCard } from "@/components/BusinessCard";
import { ButtonLink } from "@/styled/ButtonLink";
import { Button } from "@/styled/Button";
import { IBusiness } from "@/types/Business";
import { greetFunction } from "@/utils/greeting";

import styles from "./BusinessInfoPage.module.scss";

interface Props {
  business: IBusiness | null;
}

const BusinessInfoPage: FC<Props> = ({ business }) => {
  const router = useRouter();
  const { user } = {
    user: {
      email: "",
      displayName: "",
    },
  };

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

  const userName = business.creator?.full_name || user?.displayName;

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
      <h1 className="h1 mb-4">Business</h1>
      <h3 className="mb-4 text-lg lg:text-xl">{greetFunction(userName)}</h3>
      <p>Here's some important stuff we've outlined for you</p>
      <div className={styles.grid}>
        <section className={styles.businessCard}>
          <h3 className={`${styles.sectionTitle} font-medium text-gray-800`}>
            Info
          </h3>
          <BusinessCard business={business} />

          <div className={styles.buttons}>
            <ButtonLink href="/my-business" variant="outlined">
              <FontAwesomeIcon icon={faPen} className="mr-2" />
              Edit
            </ButtonLink>
            <ButtonLink href={`/business/${business.slug}`}>
              <FontAwesomeIcon icon={faEye} className="mr-2" />
              View
            </ButtonLink>
          </div>
        </section>

        <section className={styles.insightsDiv}>
          <article
            className={`${styles.sectionTitle} font-medium text-gray-800`}
          >
            <h3>Business Insights</h3>
            <Tooltip label="Suggestions to improve your SoPlugged business page">
              <div>
                <FontAwesomeIcon icon={faInfoCircle} />
              </div>
            </Tooltip>
          </article>

          <div className="mx-auto max-w-sm rounded-lg bg-primary/5 py-4 px-5">
            {renderInsights()}
          </div>
        </section>

        <section className={styles.plugs}>
          <article
            className={`${styles.sectionTitle} font-medium text-gray-800`}
          >
            {" "}
            <h3>Plugs</h3>
            <Tooltip label="Number of people who have added your business to their favorites">
              <div>
                <FontAwesomeIcon icon={faInfoCircle} />
              </div>
            </Tooltip>
          </article>
          <p className={styles.plug}>{business.number_of_likes}</p>
        </section>
      </div>
    </>
  );
};

export default BusinessInfoPage;
