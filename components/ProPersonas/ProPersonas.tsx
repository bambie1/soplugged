import { FC } from "react";
import Image from "next/image";

import { Button } from "@/styled/Button";
import { proPersonas } from "@/lib/proPersonas";

import styles from "./ProPersonas.module.scss";

interface Props {
  ctaHandler: any;
}

const ProPersonas: FC<Props> = ({ ctaHandler }) => {
  return (
    <>
      <h2 className="center">WE MADE IT FOR YOU</h2>

      <div className={styles.personaGroup}>
        {proPersonas.map(({ image, heading, text }) => (
          <div className={styles.persona} key={heading}>
            <div className={styles.personaImage}>
              <Image
                src={image}
                layout="fill"
                objectFit="cover"
                alt="business owner showcasing product"
              />
            </div>
            <div>
              <h3>{heading}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>

      <Button big onClick={ctaHandler}>
        Let's talk
      </Button>
    </>
  );
};

export default ProPersonas;
