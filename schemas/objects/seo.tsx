const seo = {
  title: "SEO / Share Settings",
  name: "seo",
  type: "object",
  options: {
    collapsible: true,
  },
  fields: [
    {
      title: "Meta Title",
      name: "metaTitle",
      type: "string",
      description:
        "Title used for search engines and browsers. Make it as enticing as possible to convert users in social feeds and Google searches. Ideally between 15 and 70 characters.",
      validation: (Rule: any) =>
        Rule.max(70).warning(
          "Longer titles may be truncated by search engines"
        ),
    },
    {
      title: "Meta Description",
      name: "metaDesc",
      type: "text",
      rows: 3,
      description:
        "Description for search engines. Optional but highly encouraged as it'll help you convert more visitors from Google & social. Ideally between 70 and 160 characters.",
      validation: (Rule: any) =>
        Rule.max(160).warning(
          "Longer descriptions may be truncated by search engines"
        ),
    },
    {
      title: "Share Title",
      name: "shareTitle",
      type: "string",
      description: "Title used for social sharing cards",
      validation: (Rule: any) =>
        Rule.max(70).warning("Longer titles may be truncated by social sites"),
    },
    {
      title: "Share Description",
      name: "shareDesc",
      type: "text",
      rows: 3,
      description: "Description used for social sharing cards",
      validation: (Rule: any) =>
        Rule.max(160).warning(
          "Longer descriptions may be truncated by social sites"
        ),
    },
    {
      title: "Share Graphic",
      name: "shareGraphic",
      type: "image",
      description: "Recommended size: 1200x630 (PNG or JPG)",
    },

    {
      title: "Optimization tips",
      description: (
        <ul>
          <br />
          <li>
            Title tags are important for SEO, so pay careful attention to your
            tags. Add your target keyword in the title, but don’t over-do it.
            Remember you’re writing for users, not robots.
          </li>
          <br />
          <li>
            Make sure your title is original and appealing. The title should set
            clear expectations for what the content is about and provide clarity
            on what users can expect to get out of your post. Gain insight into
            the topics that are resonating in your search space by looking at
            the content that’s already ranking for your target keywords.
          </li>
          <br />
          <li>
            The meta description gives you an opportunity to control how your
            document looks in the search results. As with the title, make sure
            your meta descriptions are clear, concise, and reflective of the
            content users will find on your page.
          </li>
        </ul>
      ),
      name: "socialNote",
      type: "note",

      options: {
        tone: "caution",
      },
    },
  ],
};

export default seo;
