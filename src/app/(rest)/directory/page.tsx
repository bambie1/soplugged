import { Header } from "@/components/Header";
import { SubscribeBanner } from "@/components/shared/SubscribeBanner";

export default async function DirectoryPage() {
  return (
    <>
      <Header />

      <div className="absolute left-0 top-0 -z-10 h-80 w-full bg-gradient-to-b from-[#F2EDE3] to-white"></div>

      <div className="mx-auto flex max-w-3xl flex-col items-center pb-20 pt-40 text-center text-primary lg:pt-48">
        <h1 className="mb-4">Find Black-owned businesses near you</h1>
        {/* <p className="lg:text-lg">{content.description}</p>  */}
      </div>

      <SubscribeBanner />
    </>
  );
}
