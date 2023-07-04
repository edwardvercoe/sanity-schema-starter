const globalSettings = {
  name: "globalSettings",
  type: "document",
  title: "Global Settings",
  groups: [
    {
      name: "navigation",
      title: "Navigation",
    },
    {
      title: "Footer",
      name: "footer",
    },
    {
      name: "misc",
      title: "Misc.",
    },
    {
      name: "seo",
      title: "Site SEO",
    },
  ],
  initialValue: {
    title: "Global Settings",
  },
  fields: [
    {
      name: "title",
      type: "string",
      title: "Global settings",
      readOnly: true,
    },
    {
      title: "Site Title",
      name: "siteTitle",
      type: "string",
      description: "The name of your site, usually your company/brand name",
      group: "seo",
    },

    {
      title: "Navigation Links",
      name: "navigationNote",
      type: "note",
      group: "navigation",
      options: {
        tone: "positive",
      },
    },

    {
      title: "Navigation Links",
      name: "navigationLinks",
      group: "navigation",
      type: "array",
      of: [
        {
          type: "link",
        },
      ],
    },

    {
      title: "Footer",
      name: "footernNote",
      type: "note",
      group: "footer",
      options: {
        tone: "positive",
      },
    },

    {
      title: "Footer",
      name: "footer",
      type: "text",
      group: "footer",
    },
    {
      title: "Misc.",
      name: "miscNote",
      type: "note",
      group: "misc",
      options: {
        tone: "positive",
      },
    },
    {
      title: "Google Tag Manager (GTM)",
      description: "To enable GTM enter your Container ID",
      name: "gtmID",
      type: "string",
      group: "misc",
    },
    {
      title: "Copyright text",
      name: "copyrightText",
      type: "string",
      group: "misc",
    },
    {
      title: "Global Site SEO",
      description:
        "This dictates the default SEO settings for the site. It will be used if no SEO is set on an individual page.",
      name: "seoNote",
      type: "note",
      group: "seo",
      options: {
        tone: "positive",
      },
    },
    {
      title: "Site SEO",
      name: "seo",
      type: "globalSeo",
      group: "seo",
      options: {
        collapsed: true,
      },
    },
  ],
};

export default globalSettings;
