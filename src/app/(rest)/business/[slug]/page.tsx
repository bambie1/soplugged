import { ChevronRight, Home } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Nav } from "@/components/nav";
import { SubscribeBanner } from "@/components/shared/SubscribeBanner";
import supabase from "@/utils/supabase/server";

import { ContactBox } from "./contact-box";
import { ImageGallery } from "./image-gallery";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

  if (!business) {
    return <div>Business not found</div>;
  }

  const {
    business_name,
    business_location,
    sample_images,
    category,
    business_description,
    ig_handle,
    website_url,
  } = business;

  const cleanDescription = business_description.replace(/\\n/g, "<br>");

  return (
    <div className="relative z-10">
      <Nav isLight />

      <div className="absolute left-0 top-0 -z-10 h-96 w-full bg-light lg:h-[40rem]"></div>

      <div className="pb-16 pt-28 lg:pt-36">
        <div className="padded">
          <div className="mb-2 flex items-center gap-2">
            <Link href="/directory">
              <Home size={16} />
            </Link>
            {business_location && (
              <Link href={`/directory/location/${business_location}`}>
                {business_location}
              </Link>
            )}
            <ChevronRight size={16} />
            <Link href={`/directory/category/${category}`}>{category}</Link>
          </div>
          <h1 className="max-w-2xl text-primary">{business_name}</h1>
        </div>

        <div className="padded mt-8 flex flex-col gap-4 lg:mt-12 lg:flex-row lg:gap-8">
          <div className="lg:w-2/3">
            <ImageGallery sample_images={sample_images} />
            <section
              dangerouslySetInnerHTML={{
                __html: cleanDescription,
              }}
              className="prose mt-8 whitespace-pre-wrap text-gray-700 prose-p:my-0 prose-strong:text-current"
            />
          </div>

          <div className="flex-shrink-0 lg:w-1/3">
            <ContactBox ig_handle={ig_handle} website_url={website_url} />
          </div>
        </div>
      </div>
      <SubscribeBanner />
    </div>
  );
}

export async function generateStaticParams() {
  const { data: businesses } = await supabase.from("businesses").select(`slug`);

  if (!businesses) {
    return [];
  }

  return businesses.map((business: any) => ({
    slug: business.slug,
  }));
}
