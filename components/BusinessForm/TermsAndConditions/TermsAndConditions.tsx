import useSWR from "swr";
import { FC, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { Button } from "@/styled/Button";

import styles from "./TermsAndConditions.module.scss";
import { BusinessForm } from "layouts/BusinessForm";
import { useBusinessStore } from "@/scenes/MyBusinessPage/MyBusinessPage";

const referralSources = [
  { label: "Instagram (@sopluggd)", value: "SoPlugged" },
  { label: "A business referred me", value: "Business" },
  { label: "Google search", value: "Google" },
  { label: "LinkedIn", value: "LinkedIn" },
  { label: "Other", value: "Other" },
];

const TermsAndConditions: FC = () => {
  const router = useRouter();
  const { handleNextStep } = useBusinessStore();

  const [adhereCheck, setAdhereCheck] = useState(false);
  const [blackBusiness, setBlackBusiness] = useState(false);
  const [canadaResident, setCanadaResident] = useState(false);
  const [referralInput, setReferralInput] = useState<string>("");
  const [refBusiness, setRefBusiness] = useState<string>("");

  const { data: businesses } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/businesses`
  );

  const orderedBusinesses =
    businesses
      ?.filter((business: any) => business.verified === true)
      .sort((a: any, b: any) =>
        a.business_name
          .toLowerCase()
          .localeCompare(b.business_name.toLowerCase())
      ) || [];

  const handleConfirm = () => {
    handleNextStep();
  };

  return (
    <>
      <BusinessForm title="Welcome" subtitle="Terms and conditions">
        <div className={`my-container ${styles.content}`}>
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
                onChange={(e) => setReferralInput(e.target.value)}
                defaultValue=""
                className="cursor-pointer"
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

          {referralInput === "Business" && businesses?.length && (
            <label htmlFor="referral-source" className={styles.selectLabel}>
              Please select business that referred you:
              <div className={styles.selectWrapper}>
                <select
                  name="referralSource"
                  id="referral-source"
                  onChange={(e) => setRefBusiness(e.target.value)}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a business
                  </option>
                  {orderedBusinesses.map(({ business_name, slug }: any) => (
                    <option key={slug} value={slug}>
                      {business_name}
                    </option>
                  ))}
                </select>
              </div>
            </label>
          )}

          <div className={styles.action}>
            <Button onClick={handleConfirm}>Get Started</Button>
          </div>
        </div>
      </BusinessForm>
    </>
  );
};

export default TermsAndConditions;
