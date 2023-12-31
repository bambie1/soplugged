import { FC, ReactNode } from "react";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import classNames from "classnames";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/outline";

interface Props {
  center?: boolean;
  title?: string;
  subTitle?: string;
  backAction?: {
    text: string;
    link: string;
  };
  children: ReactNode;
}

const PageWrapper: FC<Props> = ({
  center,
  title,
  subTitle,
  backAction,
  children,
}) => {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col">
        {title && subTitle && (
          <div className="relative overflow-hidden bg-light py-10 shadow-sm xl:pt-20">
            <section className="my-container">
              <div
                className={classNames("max-w-[30rem] xl:max-w-2xl", {
                  "mx-auto text-center": center,
                })}
              >
                {backAction && (
                  <Link href={backAction.link}>
                    <a className="mb-10 inline-flex items-center gap-2 opacity-70">
                      <ArrowLeftIcon className="h-4 w-4" />
                      <span className="border-b border-primary">
                        {backAction.text}
                      </span>
                    </a>
                  </Link>
                )}

                <h1 className="mb-6 max-w-2xl text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
                  {title}
                </h1>
                <p>{subTitle}</p>
              </div>
            </section>

            <div className="absolute top-0 right-0 hidden w-1/2 opacity-70 lg:block">
              <img
                src="/hero_lines.svg"
                alt=""
                className="pointer-events-none scale-90 object-cover"
              />
            </div>
          </div>
        )}
        <main
          className={classNames("my-container mb-16 min-h-[40vh] pt-8", {
            "flex flex-col items-center text-center": center,
          })}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PageWrapper;
