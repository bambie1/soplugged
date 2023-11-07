import { FC, ReactNode } from "react";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";

interface Props {
  center?: boolean;
  title?: string;
  subTitle?: string;
  children: ReactNode;
}

const PageWrapper: FC<Props> = ({ center, title, subTitle, children }) => {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col">
        {title && subTitle && (
          <div className="relative overflow-hidden bg-light py-10 shadow-sm xl:pt-20">
            <section className="my-container">
              <h1 className="mb-6 max-w-2xl text-4xl font-semibold text-primary sm:text-5xl">
                {title}
              </h1>
              <p className="max-w-2xl">{subTitle}</p>
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
          className={`my-container mb-16 min-h-[70vh] pt-8 ${
            center && "flex flex-col items-center text-center"
          } `}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PageWrapper;
