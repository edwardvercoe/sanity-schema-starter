const homePage = {
  name: "homePage",
  title: "Home Page",
  type: "document",
  initialValue: {
    slug: "/",
  },
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
      type: "string",
      hidden: true,
    },
    // {
    //   title: "Home page builder",
    //   name: "homePageBuilder",
    //   type: "array",
    //   of: [
    //     { type: "richText" },
    //     // etc...
    //   ],
    // },
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

export default homePage;
