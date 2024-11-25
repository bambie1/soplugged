import type { Metadata } from "next";

import { Nav } from "@/components/nav";
import { SubscribeBanner } from "@/components/shared/SubscribeBanner";
import supabase from "@/utils/supabase/server";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = (await params).slug;

  const { data: business } = await supabase
    .from("businesses")
    .select(`*`)
    .eq("slug", slug)
    .single();

  return {
    title: `${business.business_name} | SoPlugged Directory`,
  };
}

export default async function BusinessPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const { data: business } = await supabase
    .from("businesses")
    .select(`*`)
    .eq("slug", slug)
    .single();

  return (
    <div className="relative z-10">
      <Nav isLight />

      <div className="absolute left-0 top-0 -z-10 h-80 w-full bg-gradient-to-b from-[#F2EDE3] to-white"></div>

      <div className="mx-auto flex max-w-3xl flex-col items-center pb-16 pt-28 text-center text-primary lg:pt-48">
        <div className="mb-20">
          <h1>{business?.business_name}</h1>
        </div>
      </div>
      <SubscribeBanner />
    </div>
  );
}

export async function generateStaticParams() {
  const { data: businesses } = await supabase.from("businesses").select(`slug`);

  return businesses?.map((business: any) => ({
    slug: business.slug,
  }));
}
