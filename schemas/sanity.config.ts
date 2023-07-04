/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/pages/admin/[[...index]].tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { apiVersion, dataset, projectId } from "../env";
import { schema } from "./schema";
import { media } from "sanity-plugin-media";
import { noteField } from "sanity-plugin-note-field";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

import { EarthGlobeIcon } from "@sanity/icons";
import { HomeIcon } from "@sanity/icons";
import { TiersIcon } from "@sanity/icons";
import { CommentIcon } from "@sanity/icons";

// singleton page docs sanity v3
// https://www.sanity.io/guides/singleton-document
const singletonActions = new Set(["publish", "discardChanges", "restore"]);

// Define the singleton document types
const singletonTypes = new Set(["homePage, globalSettings"]);

export default defineConfig({
  basePath: "/admin",
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool({
      structure: (S, context) =>
        S.list()
          .title("Content")
          .items([
            // Our singleton type has a list item with a custom child
            S.listItem()
              .title("Home Page")
              .icon(HomeIcon)
              .id("homePage")
              .child(
                S.document()
                  .schemaType("homePage")
                  .documentId("homepage-singleton")
              ),

            S.documentTypeListItem("page").title("Pages").icon(TiersIcon),
            S.divider(),
            orderableDocumentListDeskItem({
              type: "post",
              title: "Posts",
              icon: CommentIcon,
              S,
              context,
            }),

            S.divider(),
            S.listItem()
              .title("Global Settings")
              .icon(EarthGlobeIcon)
              .id("globalSettings")
              .child(
                S.document()
                  .schemaType("globalSettings")
                  .documentId("globalSettings")
              ),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    media(),
    noteField(),
  ],
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
