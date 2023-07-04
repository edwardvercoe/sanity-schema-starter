import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

const post = {
  name: "post",
  title: "Posts",
  type: "document",
  orderings: [orderRankOrdering],
  initialValue: {
    parent: "posts/",
  },
  groups: [
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    orderRankField({ type: "post" }),

    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "parent",
      title: "Parent",
      description: "Parent slug for this subpage",
      type: "string",
      hidden: false,
      // hide from schema editor eventually
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "This is the URL path of the page, e.g. /posts/my-post/",
      options: {
        //Change to schema title to automatically populate
        source: "title",
        slugify: (input: any) =>
          input
            .toLowerCase()
            //Remove spaces
            .replace(/\s+/g, "-")
            //Remove special characters
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ""),
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: "Featured image",
      name: "featuredImage",
      type: "image",
      description: "This image will be used on the post gallery page",
      validation: (Rule: any) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      title: "Hero image",
      name: "heroImage",
      type: "image",
      description:
        "This image will be used at the top of the individual post page",
      options: {
        hotspot: true,
      },
    },
    // {
    //   title: "Post Builder",
    //   name: "postBuilder",
    //   type: "array",
    //   description: "Design the layout of your post page using blocks.",

    //   of: [
    //     { type: "richText" },
    //     // etc...
    //   ],
    // },
    {
      title: "Note",
      name: "guideNote",
      type: "note",
      description: "This is a note to help guide the content editor.",
      options: {
        tone: "caution",
      },
    },
    {
      name: "seo",
      title: "SEO / Share Settings",
      type: "seo",
      group: "seo",

      options: {
        collapsed: true,
      },
    },
  ],
};

export default post;
