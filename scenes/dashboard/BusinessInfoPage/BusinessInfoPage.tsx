import Image from "next/image";
import { FC } from "react";

import { BusinessCard } from "@/components/BusinessCard";
import { ButtonLink } from "@/styled/ButtonLink";
import { useAuth } from "@/context/authContext";
import { IBusiness } from "@/types/Business";
import { greetFunction } from "@/utils/greeting";

import styles from "./BusinessInfoPage.module.scss";

interface Props {
  business: IBusiness;
}

const BusinessInfoPage: FC<Props> = ({ business }) => {
  const { user } = useAuth();
  const userName = business?.creator?.full_name || user?.displayName;

  const renderBusinessInfo = () => {
    if (!business)
      return (
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
          <ButtonLink href="/my-business" variant="outlined">
            Add your business
          </ButtonLink>
        </div>
      );

    return (
      <>
        <h3>{greetFunction(userName)}</h3>

        <p>Here's some important stuff we've outlined for you</p>

        <div className={styles.grid}>
          <section className={styles.businessCard}>
            <h3 className={styles.sectionTitle}>Info</h3>
            <BusinessCard business={business} />

            <div className={styles.buttons}>
              <ButtonLink href="/my-business" variant="outlined">
                Edit
              </ButtonLink>
              <ButtonLink
                href={`/business/${business.slug}`}
                variant="outlined"
              >
                View
              </ButtonLink>
            </div>
          </section>

          <section className={styles.insights}>
            <h3 className={styles.sectionTitle}>Business Insights</h3>
            <p>No insights this month</p>
          </section>

          <section className={styles.plugs}>
            <h3 className={styles.sectionTitle}>Plugs</h3>
            <p className={styles.plug}>{business.number_of_likes}</p>
          </section>
        </div>
      </>
    );
  };

  return (
    <>
      <h1>Business</h1>

      {renderBusinessInfo()}
    </>
  );
};

export default BusinessInfoPage;
