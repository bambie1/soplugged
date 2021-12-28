import { Button } from "@/styled/Button";
import { Input } from "@/styled/Input";
import dynamic from "next/dynamic";

import styles from "./ProPage.module.scss";

const Header = dynamic(() => import("../../components/Header/Header"));

const ComingSoon = () => {
  return (
    <>
      <Header color="blue" />

      <div className={styles.comingSoonWrapper}>
        <div className={`container ${styles.content}`}>
          <div className={styles.text}>
            <h3 className={styles.tagLine}>Coming Soon...</h3>
            <h1>Scale your business with ease</h1>
            <p>
              From strategic recommendations to professional services
              (personalized consultation, web design, and email marketing), our
              team of experts is ready to work with you and provide all the
              support you need to grow your business.
            </p>

            <form className={styles.proForm}>
              <Input
                type="email"
                placeholder="john@gmail.com"
                label="E-mail address"
              />
              <Button type="submit">Join the waitlist</Button>
            </form>
          </div>
          <aside className={styles.image}></aside>
        </div>
      </div>
    </>
  );
};

export { ComingSoon };
