export default {
  name: "vacanciesPage",
  title: "Applicants / Vacancies Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
      initialValue: "Available Properties",
    },
    {
      name: "instructions",
      title: "Intro Instructions",
      type: "text",
      rows: 4,
      description: "Text shown above the AppFolio listings widget.",
    },

    // Per-property instruction boxes
    {
      name: "propertyInstructions",
      title: "Per-Property Instructions",
      type: "array",
      of: [
        {
          type: "object",
          name: "propertyInstruction",
          title: "Property Instruction",
          fields: [
            {
              name: "property",
              title: "Property",
              type: "reference",
              to: [{ type: "property" }],
              validation: (Rule) => Rule.required(),
            },
            {
              name: "blurb",
              title: "Instruction Text",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: "property.title",
              subtitle: "blurb",
            },
          },
        },
      ],
      description:
        "Add a box for each property telling users what to search/filter for and how to apply.",
    },

    // AppFolio config (so you don’t hardcode it)
    {
      name: "appfolioHostUrl",
      title: "AppFolio Host URL",
      type: "string",
      initialValue: "castlerockmanagementllc.appfolio.com",
    },
    {
      name: "themeColor",
      title: "Theme Color",
      type: "string",
      initialValue: "#676767",
    },
  ],
}