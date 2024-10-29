import { CalendarIcon, CogIcon, PinIcon, TiersIcon } from "@sanity/icons";
import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .id("root")
    .title("Website Content")
    .items([
      S.documentTypeListItem("page").title("Pages"),
      S.listItem()
        .title("Business Directory")
        .icon(TiersIcon)
        .child(
          S.list()
            .title("Business Directory")
            .items([
              S.documentTypeListItem("business").title("Businesses"),
              S.documentTypeListItem("category").title("Categories"),
              S.documentTypeListItem("location")
                .title("Locations")
                .icon(PinIcon),
            ]),
        ),
      S.documentTypeListItem("event").title("Events").icon(CalendarIcon),
      S.divider(),
      S.listItem()
        .title("Site Settings")
        .icon(CogIcon)
        .child(
          S.list()
            // Sets a title for our new list
            .title("Settings Documents")
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title("Metadata")
                .child(
                  S.document()
                    .schemaType("siteSettings")
                    .documentId("siteSettings"),
                ),
            ]),
        ),
    ]);
