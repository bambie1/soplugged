import { Header } from "@/components/Header";
import { PageHeader } from "@/components/shared/PageHeader";

export default async function OurStoryPage() {
  return (
    <>
      <Header />
      <PageHeader title="Our Story" description="About us" />
      <div className="padded mb-20"></div>
    </>
  );
}
