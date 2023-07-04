const page = {
  name: "page",
  title: "Pages",
  type: "document",
  groups: [
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    {
      title: "Page Title",
      name: "title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "This is the URL path of the page, e.g. /about-us/",
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
      name: "pageType",
      title: "Page Type",
      type: "string",
      options: {
        list: [
          { title: "Generic", value: "generic" },
          { title: "Contact", value: "contact" },
        ],
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
export default page;
