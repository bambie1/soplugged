import { Header } from "@/components/Header";
import { SubscribeBanner } from "@/components/shared/SubscribeBanner";

export default async function PodcastPage() {
  return (
    <>
      <Header isDark />
      <div className="bg-tbm-gradient py-20 text-center text-white lg:py-40 lg:pt-48">
        <div className="padded">
          <div className="mx-auto max-w-xl">
            <h1 className="mb-4">The Business Mindset Podcast</h1>
            <p>
              On this podcast, we amplify the stories of Black entrepreneurs in
              Canada as we explore their journey to building a successful
              business.
            </p>

            <div className="mt-10 h-20 border border-white/10"></div>
          </div>
        </div>
      </div>
      <div className="mx-auto -mt-20 aspect-video w-full max-w-3xl rounded-xl border bg-white"></div>
      <div className="mt-20"></div>
      <SubscribeBanner
        title="Never miss another episode"
        subtitle="On this podcast, we amplify the stories of Black entrepreneurs in Canada as we explore their journey to building a successful business."
      />
    </>
  );
}
