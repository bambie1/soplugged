import { client, getFileUrl } from "@/sanity/lib/client";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const page = await client.fetch(HOME_PAGE_QUERY);

  const content = page?.[0];

  const videoUrl = getFileUrl(content.video.asset._ref);

  return (
    <main className="">
      <header className="relative text-white">
        <div className="absolute inset-0">
          <video
            src={videoUrl}
            autoPlay
            muted
            loop
            className="object-cover w-full h-full"
          />
        </div>

        <div className="relative z-10 flex flex-col min-h-[80vh] bg-black bg-opacity-50">
          <nav className="padded py-10">Navbar</nav>
          <section className="padded py-12 flex flex-1">
            <div className="lg:w-2/3 mr-auto mt-auto h-full">
              <h1 className="text-4xl lg:text-6xl font-bold">
                {content.title}
              </h1>
              <p className="text-xl">{content.subtitle}</p>

              <div className="mt-8">
                <button className="btn">{content.cta.label}</button>
              </div>
            </div>
          </section>
        </div>
      </header>

      <div>Content</div>
    </main>
  );
}
