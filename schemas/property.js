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
}





  ]
}
