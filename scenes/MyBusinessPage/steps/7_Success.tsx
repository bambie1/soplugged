import { FC, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useStateMachine } from "little-state-machine";

import { PageWrapper } from "@/components/PageWrapper";
import { useBusinessFormContext } from "@/context/businessFormContext";
import { Button } from "@/styled/Button";
import { Input } from "@/styled/Input";
import { ButtonLink } from "@/styled/ButtonLink";
import { rgbDataURL } from "@/lib/dataUrl";

import { updateAction } from "../littleStateMachine/updateAction";

import styles from "../MyBusinessPage.module.scss";

const Header = dynamic(() => import("../../../components/Header/Header"));

const Success: FC = () => {
  const router = useRouter();
  const { isNew } = useBusinessFormContext();

  const { state, actions } = useStateMachine({ updateAction });

  return (
    <>
      <Header />
      <PageWrapper center>
        <h1 className="center">Success!</h1>

        <section className={`${styles.grid}`}>
          <aside>
            <Image
              placeholder="blur"
              blurDataURL={rgbDataURL(247, 244, 244)}
              src="/images/success_celebrate.png"
              alt="Become a sponsor"
              width={570}
              height={500}
            />
          </aside>
          <aside className={styles.text}>
            <h3>CONGRATS! </h3>
            <p>Your business was successfully updated</p>

            <ButtonLink
              variant="filled"
              href={`/business/${state.businessDetails.slug}`}
            >
              View Page
            </ButtonLink>
          </aside>
        </section>
      </PageWrapper>
    </>
  );
};

export default Success;
