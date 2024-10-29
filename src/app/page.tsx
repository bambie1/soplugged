import { client } from "@/sanity/lib/client";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const page = await client.fetch(HOME_PAGE_QUERY);

  console.log(page);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-8">
      {page?.pageBuilder?.map((section: any, index: number) => {
        switch (section._type) {
          case "videoHero":
            return (
              <section key={index} className="hero-section text-center">
                <h1 className="text-4xl font-bold">{section.heading}</h1>
                <p className="text-xl">{section.tagline}</p>
                {section.imageUrl && (
                  <img
                    src={section.imageUrl}
                    alt={section.heading}
                    className="mt-4"
                  />
                )}
              </section>
            );
          case "callToAction":
            return (
              <section key={index} className="cta-section">
                <a href={section.link} className="cta-button">
                  {section.title}
                </a>
              </section>
            );
          default:
            return null;
        }
      })}
    </main>
  );
}
