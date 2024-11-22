import Link from "next/link";

export const GrowthPillar = () => {
  return (
    <>
      <div className="page-section" id="grow">
        <div className="padded flex items-center justify-between gap-10">
          <div className="flex max-w-2xl flex-col items-start">
            <p className="mb-2 font-medium text-yellow-50 opacity-70">
              Grow your business
            </p>
            <p className="mb-8 max-w-2xl text-2xl tracking-tight lg:text-4xl xl:text-5xl">
              Promote your business on our free online directory
            </p>
          </div>

          <Link
            href="/directory"
            className="py-8 underline decoration-yellow-100 underline-offset-8 transition-all duration-150 hover:underline-offset-4"
          >
            Visit directory
          </Link>
        </div>

        <div className="mt-10 h-96 border"></div>
      </div>
    </>
  );
};
