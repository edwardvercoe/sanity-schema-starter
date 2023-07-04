import { type SchemaTypeDefinition } from "sanity";
import globalSettings from "./documents/globalSettings";
import page from "./documents/page";
import homePage from "./documents/homePage";
import link from "./objects/link";
import restrictedRichText from "./objects/restrictedRichText";
import richText from "./objects/richText";
import seo from "./objects/seo";
import globalSeo from "./objects/globalSeo";
import post from "./documents/post";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // document types
    homePage,
    page,
    post,
    globalSettings,
    // object types
    globalSeo,
    seo,
    richText,
    restrictedRichText,
    link,
  ],
};
