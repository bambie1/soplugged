import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faPen } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import Tooltip from "@reach/tooltip";

import { BusinessCard } from "@/components/BusinessCard";
import { ButtonLink } from "@/styled/ButtonLink";
import { useAuth } from "@/context/authContext";
import { IBusiness } from "@/types/Business";
import { greetFunction } from "@/utils/greeting";

import styles from "./BusinessInfoPage.module.scss";

interface Props {
  business: IBusiness | null;
}

const BusinessInfoPage: FC<Props> = ({ business }) => {
  const router = useRouter();
  const { user } = useAuth();

  if (!business)
    return (
      <>
        <h1>Business</h1>
        <div className={styles.noBusiness}>
          <Image
            src="/images/Cocktail_Monochromatic.svg"
            alt="empty clipboard"
            width={300}
            height={300}
            className={styles.emptyImage}
          />
          <p>No business found. Just a nice beverage!</p>
          <p>Are you an entrepreneur?</p>
          <ButtonLink href="/my-business" variant="filled">
            Add your business
          </ButtonLink>
        </div>
      </>
    );

  const userName = business.creator?.full_name || user?.displayName;

  const hasLogo = business.logo_url !== "";
  const hasGoodDescription = business.business_description.length > 150;
  const hasImages = !!business.sample_images?.split(",")[0];

  const suggestionsCount = [hasLogo, hasGoodDescription, hasImages].filter(
    Boolean
  ).length;
  const percentage = (7 + suggestionsCount) * 10;

  const suggestionHandler = (step: string) => {
    router.push(`/my-business?step=${step}`);
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
              className="button withIcon"
              onClick={() => suggestionHandler("images")}
            >
              <FontAwesomeIcon icon={faPen} />
              Fix
            </button>
          </div>
        )}
        {!hasImages && (
          <div className={styles.suggestion}>
            <p>Upload sample images</p>
            <button
              className="button  withIcon"
              onClick={() => suggestionHandler("images")}
            >
              <FontAwesomeIcon icon={faPen} />
              Fix
            </button>
          </div>
        )}
        {!hasGoodDescription && (
          <div className={styles.suggestion}>
            <p>Describe your business more</p>
            <button
              className="button  withIcon"
              onClick={() => suggestionHandler("description")}
            >
              <FontAwesomeIcon icon={faPen} />
              Fix
            </button>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <h1>Business</h1>
      <h3>{greetFunction(userName)}</h3>
      <p>Here's some important stuff we've outlined for you</p>
      <div className={styles.grid}>
        <section className={styles.businessCard}>
          <h3 className={styles.sectionTitle}>Info</h3>
          <BusinessCard business={business} />

          <div className={styles.buttons}>
            <Link href="/my-business">
              <a>
                <button className="button outlined withIcon">
                  <FontAwesomeIcon icon={faPen} />
                  Edit
                </button>
              </a>
            </Link>
            <Link href={`/business/${business.slug}`}>
              <a>
                <button className="button text withIcon">
                  <FontAwesomeIcon icon={faEye} />
                  View
                </button>
              </a>
            </Link>
          </div>
        </section>

        <section className={styles.insightsDiv}>
          <article className={styles.sectionTitle}>
            <h3>Business Insights</h3>
            <Tooltip label="Suggestions to improve your SoPlugged business page">
              <div>
                <FontAwesomeIcon icon={faInfoCircle} />
              </div>
            </Tooltip>
          </article>

          <div className={styles.insights}>{renderInsights()}</div>
        </section>

        <section className={styles.plugs}>
          <article className={styles.sectionTitle}>
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
