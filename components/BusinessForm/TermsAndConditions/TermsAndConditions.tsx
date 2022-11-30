import useSWR from "swr";
import { FC } from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

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

interface IFormInput {
  hasReadGuidelines: boolean;
  isBlackEntrepreneur: boolean;
  isCanadaResident: boolean;
  referral_source: string;
  referral_business_slug?: string;
}

const TermsAndConditions: FC = () => {
  const { handleNextStep, updateBusiness, business } = useBusinessStore();

  const agreementSigned = !!business?.referral_source;

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const watchReferralSource = watch("referral_source");

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

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    updateBusiness({
      ...business,
      referral_source: data.referral_source,
      referral_business_slug: data.referral_business_slug,
    });

    handleNextStep();
  };

  return (
    <>
      <BusinessForm
        title="We're excited to have you here!"
        subtitle="Please confirm the following to get started"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative grid h-full content-center gap-6"
        >
          <div className="my-2 flex items-center gap-4 text-left">
            <input
              type="checkbox"
              id="hasReadGuidelines"
              {...register("hasReadGuidelines", {
                required: true,
                value: agreementSigned,
              })}
            />
            <label className="text-base" htmlFor="hasReadGuidelines">
              I have read and will adhere to the{" "}
              <Link href="/guidelines">
                <a target="_blank" className="text-primary underline">
                  Community Guidelines
                </a>
              </Link>
            </label>
          </div>

          <div className="my-2 flex items-center gap-4 text-left">
            <input
              type="checkbox"
              id="isBlackEntrepreneur"
              {...register("isBlackEntrepreneur", {
                required: true,
                value: agreementSigned,
              })}
            />
            <label className="text-base" htmlFor="isBlackEntrepreneur">
              I am a black entrepreneur
            </label>
          </div>
          <div className="my-2 flex items-center gap-4 text-left">
            <input
              type="checkbox"
              id="isCanadaResident"
              {...register("isCanadaResident", {
                required: true,
                value: agreementSigned,
              })}
            />
            <label className="text-base" htmlFor="isCanadaResident">
              I currently reside in Canada
            </label>
          </div>

          <label htmlFor="referralSource" className={styles.selectLabel}>
            How did you hear about SoPlugged?
            <div className="relative mt-1 w-full rounded py-1 pr-2 pl-0">
              <select
                {...register("referral_source", { required: true })}
                id="referral_source"
                defaultValue={business.referral_source}
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

          {(watchReferralSource === "Business" ||
            business.referral_source === "Business") &&
            businesses?.length && (
              <label
                htmlFor="referral_business_slug"
                className={styles.selectLabel}
              >
                Please select business that referred you:
                <div className="relative mt-1 w-full rounded py-1 pr-2 pl-0">
                  <select
                    {...register("referral_business_slug", {
                      required: watchReferralSource === "Business",
                    })}
                    id="referral_business_slug"
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

          <div className="fixed bottom-0 left-0 flex w-full justify-center bg-white p-2 shadow-bottom-nav">
            <div className="grid w-full max-w-xl">
              <Button type="submit">Get Started</Button>
            </div>
          </div>
        </form>
      </BusinessForm>
    </>
  );
};

export default TermsAndConditions;
