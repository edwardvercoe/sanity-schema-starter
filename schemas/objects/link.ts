const link = {
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    {
      title: "Link Text",
      name: "linkText",
      type: "string",
    },
    {
      title: "Internal or External Link?",
      name: "linkType",
      type: "string",
      validation: (Rule: any) => Rule.required(),
      options: {
        list: [
          { title: "Internal", value: "internal" },
          { title: "External", value: "external" },
          { title: "Anchor", value: "anchor" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "internal",
    },
    {
      title: "External URL",
      name: "externalUrl",
      type: "url",
      description: "any website outside of this domain. eg. https://google.com",
      hidden: ({ parent }: any) => parent?.linkType !== "external",
    },
    {
      title: "Internal Link",
      name: "internalLink",
      type: "reference",
      to: [{ type: "homePage" }, { type: "page" }, { type: "post" }],
      hidden: ({ parent }: any) => parent?.linkType !== "internal",
    },
    {
      title: "Open link in a new browser tab?",
      name: "newWindow",
      type: "boolean",
      options: {
        layout: "radio",
      },
    },
    {
      title: "Anchor",
      name: "anchor",
      type: "string",
      description: "eg. #contact",
      hidden: ({ parent }: any) => parent?.linkType !== "anchor",
    },
  ],
  initialValue: {
    newWindow: false,
  },
};

export default link;
