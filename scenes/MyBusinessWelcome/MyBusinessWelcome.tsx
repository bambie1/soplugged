import { FC, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Link from "next/link";
import { useWindowSize } from "@reach/window-size";

import { swrFetcher } from "@/utils/swrFetcher";
import { Button } from "@/styled/Button";
import { useBusinessFormContext } from "@/context/businessFormContext";

import styles from "./MyBusinessWelcome.module.scss";
import { PreBusinessForm } from "layouts/BusinessForm";
import useSWR from "swr";

const Header = dynamic(() => import("../../components/Header/Header"));

const referralSources = [
  { label: "Instagram (@sopluggd)", value: "SoPlugged" },
  { label: "A business referred me", value: "Business" },
  { label: "Google search", value: "Google" },
  { label: "LinkedIn", value: "LinkedIn" },
  { label: "Other", value: "Other" },
];

const MyBusinessWelcome: FC = () => {
  const router = useRouter();
  const { width } = useWindowSize();

  const { agreementSigned, setAgreementSigned } = useBusinessFormContext();

  if (agreementSigned) {
    router.push("/my-business?step=name_location");
  }

  const [adhereCheck, setAdhereCheck] = useState(false);
  const [blackBusiness, setBlackBusiness] = useState(false);
  const [canadaResident, setCanadaResident] = useState(false);
  const [referralSource, setReferralSource] = useState<string>("");
  const [referringBusiness, setReferringBusiness] = useState<string>("");

  const { data: businesses, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/businesses`,
    swrFetcher
  );

  const handleConfirm = () => {
    setAgreementSigned(true);
  };

  return (
    <>
      <Header hideLinks={width >= 768} />
      <PreBusinessForm>
        <div className={styles.content}>
          <b className="center">
            <u>Please confirm the following to get started:</u>
          </b>
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

          <label htmlFor="referral-source" className={styles.selectLabel}>
            How did you hear about SoPlugged?
            <div className={styles.selectWrapper}>
              <select
                name="referralSource"
                id="referral-source"
                onChange={(e) => setReferralSource(e.target.value)}
                defaultValue=""
              >
                <option value="" disabled>
                  Select one
                </option>
                {referralSources.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </label>

          {referralSource == "Business" && businesses.length && (
            <label htmlFor="referral-source" className={styles.selectLabel}>
              Please select business that referred you:
              <div className={styles.selectWrapper}>
                <select
                  name="referralSource"
                  id="referral-source"
                  onChange={(e) => setReferringBusiness(e.target.value)}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a business
                  </option>
                  {businesses.map(({ business_name, slug }: any) => (
                    <option key={slug} value={slug}>
                      {business_name}
                    </option>
                  ))}
                </select>
              </div>
            </label>
          )}

          <div className={styles.action}>
            <Button
              disabled={
                !(
                  adhereCheck &&
                  blackBusiness &&
                  canadaResident &&
                  referralSource &&
                  (referralSource == "Business" ? referringBusiness : true)
                )
              }
              onClick={handleConfirm}
            >
              Get Started
            </Button>
          </div>
        </div>
      </PreBusinessForm>
    </>
  );
};

export default MyBusinessWelcome;