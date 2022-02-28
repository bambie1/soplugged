import { FC } from "react";

import { ButtonLink } from "@/styled/ButtonLink";

import styles from "./ProPlug.module.scss";

const ProPlug: FC = () => {
  return (
    <div className={styles.wrapper}>
      <p>
        Psst...Black entrepreneurs in Canada can list their business on our
        directory for <b>FREE!</b>
      </p>
      <ButtonLink variant="filled" href="/my-business">
        Get listed
      </ButtonLink>
    </div>
  );
};

export default ProPlug;
