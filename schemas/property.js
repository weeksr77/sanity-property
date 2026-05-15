export default {
  name: 'property',
  title: 'Property',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Property Name',
      type: 'string',
      validation: Rule => Rule.required()
    },

    {
  name: 'navTitle',
  title: 'Navbar Title',
  type: 'string',
  description: 'Text shown on the left side of the navbar on desktop',
},

    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },

    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Search result/browser title for this property. Recommended length: 50-60 characters.',
      validation: Rule => Rule.max(70).warning('SEO titles are usually best under 60 characters.')
    },

    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      description: 'Search result description for this property. Recommended length: 150-160 characters.',
      validation: Rule => Rule.max(180).warning('SEO descriptions are usually best around 150-160 characters.')
    },

    {
      name: 'seoImage',
      title: 'SEO / Social Share Image',
      type: 'image',
      description: 'Image used when this property page is shared on social platforms.',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'heroText',
      title: 'Hero Text',
      type: 'string'
    },

    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string'
    },

    {
  name: 'heroImage',
  title: 'Hero Background Image',
  type: 'image',
  options: {
    hotspot: true,
  },
},


    {
      name: 'teaserText',
      title: 'Teaser Text',
      type: 'text'
    },

    {
      name: 'teaserImage',
      title: 'Teaser image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
  name: 'amenitiesTitle',
  title: 'Amenities Title',
  type: 'string',
  initialValue: 'Amenities',
},

{
  name: 'amenitiesLists',
  title: 'Amenities Bullet Categories',
  type: 'array',
  of: [
    {
      type: 'object',
      name: 'amenitiesList',
      title: 'Amenities Category',
      fields: [
        {
          name: 'category',
          title: 'Category Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'points',
          title: 'Bullet Points',
          type: 'array',
          of: [{ type: 'string' }],
          validation: (Rule) => Rule.min(1),
        },
      ],
      preview: {
        select: { title: 'category' },
      },
    },
  ],
  description: 'Add multiple categories, each with its own bullet list.',
},

    {
name: 'amenities',
title: 'Amenities',
type: 'array',
of: [{ type: 'image' }],
description: 'Images for amenities on this property',
},

{
  name: 'gallery',
  title: 'Gallery Images',
  type: 'array',
  of: [{ type: 'image' }]
},

   

  // property.js (inside fields: [...])
{
  name: 'location',
  title: 'Property Address',
  type: 'string',
  description: 'This shows under the map on the Location section/page.',
  validation: Rule => Rule.required()
},
{
  name: 'mapEmbedUrl',
  title: 'Google Maps Embed URL (iframe src)',
  type: 'url',
  description: 'Paste the full Google Maps embed link (the iframe src value).',
},
{
  name: 'googleMapsUrl',
  title: 'Google Maps Directions Link (button)',
  type: 'url',
  description: 'Paste the share link or directions link you want opened in Google Maps.',
},

    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string'
    },

    {
      name: 'contactPhone',
      title: 'Contact Phone Number',
      type: 'string',
      description: 'Displayed phone number for this property. Example: (540) 667-6300. The website will use this for click-to-call links.',
    },


    {
  name: 'floor',
  title: 'Floor Section',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }
      ]
    }
  ]
},

{
  name: "unitGallery",
  title: "Floor Plans Page Gallery",
  type: "array",
  of: [{ type: "image" }],
  description: "Swipeable photo gallery shown on the Floor Plans page (top/bottom).",
},

{
  name: 'floorplans',
  title: 'Floor Plans',
  type: 'array',
  of: [
    {
      type: 'reference',
      to: [{ type: 'floorplan' }]
    }
  ]
},

{
  name: "applicantsTitle",
  title: "Applicants Page Title",
  type: "string",
  initialValue: "Apply Online",
},
{
  name: "applicantsInstructions",
  title: "Applicants Instructions",
  type: "text",
  rows: 4,
  description: "Shown above the AppFolio widget for this specific property.",
},

// ✅ Sanity: property.js additions
// Add these fields somewhere in your "property" document fields array.
// (Place them near your other homepage text fields.)

{
  name: "floorplansSubtitle",
  title: "Floor Plans Subtitle (Home Page)",
  type: "string",
  initialValue: "Hey — check out our virtual tours!",
  description: "Appears under the Floor Plans title on the property home page.",
},

{
  name: "walkthroughTitle",
  title: "Walk-through Callout Title (Home Page)",
  type: "string",
  initialValue: "Call today to set up a walk-through tour!",
},

{
  name: "walkthroughText",
  title: "Walk-through Callout Text (Home Page)",
  type: "text",
  rows: 3,
  initialValue:
    "Have questions or want to tour the property? Give us a call and we’ll help you schedule a walk-through.",
},

{
  name: "walkthroughButtonText",
  title: "Walk-through Call Button Text (Home Page)",
  type: "string",
  initialValue: "Call Now",
},

{
  name: "walkthroughPhone",
  title: "Walk-through Phone Number (Home Page)",
  type: "string",
  initialValue: "(123) 456-7890",
  description:
    "Used for the Call button. You can enter formatted text like (123) 456-7890.",
},

{
  name: "lifestyleTitle",
  title: "Lifestyle Section Title",
  type: "string",
  initialValue: "Live Near What Matters",
  description: "Shown on the property home page and the property Lifestyle preview page.",
},

{
  name: "lifestyleIntro",
  title: "Lifestyle Intro",
  type: "text",
  rows: 3,
  description:
    "Short SEO-friendly intro for nearby employers, schools, shopping, healthcare, attractions, and commuter routes.",
},

{
  name: "lifestyleHeroImage",
  title: "Lifestyle Hero Image",
  type: "image",
  options: {
    hotspot: true,
  },
  description: "Large image shown at the top of the Lifestyle / Nearby section.",
},

{
  name: "nearbyGroups",
  title: "Lifestyle Nearby Groups",
  type: "array",
  description:
    "Create groups like Employers, Schools, Healthcare, Shopping, Attractions, or Highways.",
  of: [
    {
      type: "object",
      name: "nearbyGroup",
      title: "Nearby Group",
      fields: [
        {
          name: "title",
          title: "Group Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "description",
          title: "Group Description",
          type: "text",
          rows: 2,
        },
        {
          name: "items",
          title: "Places",
          type: "array",
          of: [
            {
              type: "object",
              name: "nearbyPlace",
              title: "Nearby Place",
              fields: [
                {
                  name: "name",
                  title: "Place Name",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "summary",
                  title: "One Sentence Summary",
                  type: "text",
                  rows: 2,
                },
                {
                  name: "travelTime",
                  title: "Travel Time",
                  type: "string",
                  description: "Example: 8 min, 10-15 min, or Varies.",
                },
                {
                  name: "distance",
                  title: "Distance",
                  type: "string",
                  description: "Example: 2.4 miles or Nearby.",
                },
                {
                  name: "note",
                  title: "Short Label",
                  type: "string",
                  description: "Example: Major employer, Healthcare, Shopping, or I-81 access.",
                },
                {
                  name: "websiteUrl",
                  title: "Website Link",
                  type: "url",
                },
                {
                  name: "directionsUrl",
                  title: "Directions Link",
                  type: "url",
                  description: "Paste a Google Maps directions or search link.",
                },
                {
                  name: "featured",
                  title: "Feature This Place",
                  type: "boolean",
                  initialValue: false,
                  description: "Featured places appear in the top highlight row.",
                },
              ],
              preview: {
                select: {
                  title: "name",
                  subtitle: "note",
                },
              },
            },
          ],
        },
      ],
      preview: {
        select: {
          title: "title",
          places: "items",
        },
        prepare({ title, places }) {
          const count = Array.isArray(places) ? places.length : 0
          return {
            title,
            subtitle: `${count} place${count === 1 ? "" : "s"}`,
          }
        },
      },
    },
  ],
},



  ]
}
