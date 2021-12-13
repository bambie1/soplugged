import { FC, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { PageWrapper } from "@/components/PageWrapper";
import { Button } from "@/styled/Button";
import { Input } from "@/styled/Input";
import { useBusinessFormContext } from "@/context/businessFormContext";
import { rgbDataURL } from "@/lib/dataUrl";

import styles from "./MyBusinessWelcome.module.scss";

const Header = dynamic(() => import("../../components/Header/Header"));

const MyBusinessWelcome: FC = () => {
  const router = useRouter();
  const { agreementSigned, setAgreementSigned } = useBusinessFormContext();

  if (agreementSigned) {
    router.push("/my-business?step=name_location");
  }

  const [adhereCheck, setAdhereCheck] = useState(false);
  const [blackBusiness, setBlackBusiness] = useState(false);
  const [canadaResident, setCanadaResident] = useState(false);

  const handleConfirm = () => {
    setAgreementSigned(true);
  };

  return (
    <>
      <Header />
      <PageWrapper center>
        <h1 className="center">welcome</h1>
        <p>Please confirm the following to get started</p>

        <div className={styles.grid}>
          <div className={styles.illustration}>
            <Image
              placeholder="blur"
              blurDataURL={rgbDataURL(247, 244, 244)}
              src="/images/add_business.png"
              width={400}
              height={350}
              alt="Welcome"
              priority
            />
          </div>
          <div className={styles.content}>
            <section className={styles.checkboxes}>
              <div className={styles.checkbox}>
                <input
                  type="checkbox"
                  id="adhereToGuidelines"
                  name="adhereToGuidelines"
                  value="I will adhere to the Community Guidelines"
                  checked={adhereCheck}
                  onChange={() => setAdhereCheck(!adhereCheck)}
                />
                <label className={styles.label} htmlFor="adhereToGuidelines">
                  I have read and will adhere to the{" "}
                  <Link href="/guidelines">
                    <a target="_blank" className={styles.link}>
                      Community Guidelines
                    </a>
                  </Link>
                </label>
              </div>

              <div className={styles.checkbox}>
                <input
                  type="checkbox"
                  id="blackEntrepreneur"
                  name="blackEntrepreneur"
                  value="I am a black entrepreneur"
                  checked={blackBusiness}
                  onChange={() => setBlackBusiness(!blackBusiness)}
                />
                <label className={styles.label} htmlFor="blackEntrepreneur">
                  I am a black entrepreneur
                </label>
              </div>
              <div className={styles.checkbox}>
                <input
                  type="checkbox"
                  id="canadaResident"
                  name="canadaResident"
                  value=" I currently reside in Canada"
                  checked={canadaResident}
                  onChange={() => setCanadaResident(!canadaResident)}
                />
                <label className={styles.label} htmlFor="canadaResident">
                  I currently reside in Canada
                </label>
              </div>
            </section>

            <Input label="How did you hear about us?" />
          </div>
        </div>
      </PageWrapper>
      <div className={styles.action}>
        <Button
          disabled={!(adhereCheck && blackBusiness && canadaResident)}
          onClick={handleConfirm}
        >
          Confirm
        </Button>
      </div>
    </>
  );
};

export default MyBusinessWelcome;
