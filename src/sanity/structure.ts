import {
  CalendarIcon,
  CogIcon,
  DocumentIcon,
  DocumentTextIcon,
  DocumentVideoIcon,
  EditIcon,
  PinIcon,
  TiersIcon,
  UserIcon,
} from "@sanity/icons";
import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .id("root")
    .title("Website Content")
    .items([
      S.listItem()
        .title("Business Directory")
        .icon(TiersIcon)
        .child(
          S.list()
            .title("Business Directory")
            .items([
              S.documentTypeListItem("business").title("Businesses"),
              S.documentTypeListItem("businessCategory").title("Categories"),
              S.documentTypeListItem("location")
                .title("Locations")
                .icon(PinIcon),
            ]),
        ),
      S.documentTypeListItem("event").title("Events").icon(CalendarIcon),
      S.documentTypeListItem("page").title("Pages").icon(DocumentIcon),
      S.listItem()
        .title("Blogs")
        .icon(DocumentIcon)
        .child(
          S.list()
            .title("Blogs")
            .items([
              S.documentTypeListItem("post").title("Posts").icon(EditIcon),
              S.documentTypeListItem("blogCategory").title("Categories"),
            ]),
        ),
      S.documentTypeListItem("episode")
        .title("TBM Podcast episodes")
        .icon(DocumentVideoIcon),
      S.documentTypeListItem("policy").title("Policies").icon(DocumentTextIcon),
      S.divider(),
      S.documentTypeListItem("author").title("Members").icon(UserIcon),
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
