import { FeaturedBusinessesGrid } from "./featured-businesses-grid";
import { PillarHeading } from "./pillar-heading";

export const GrowthPillar = (props: { featuredBusinesses: any }) => {
  return (
    <>
      <div className="page-section" id="grow">
        <PillarHeading
          title="Promoting your business on our free online directory"
          subTitle="Grow your business"
          link={{ href: "/directory", text: "Visit directory" }}
        />

        <div className="mt-10">
          <FeaturedBusinessesGrid {...props} />
        </div>
      </div>
    </>
  );
};
