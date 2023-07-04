const restrictedRichText = {
  title: "Restricted Rich Text",
  name: "restrictedRichText",
  type: "array",
  of: [
    {
      type: "block",

      styles: [
        { title: "Normal", value: "normal" },
        { title: "Large text", value: "largeText" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
      },
    },
  ],
};

export default restrictedRichText;
