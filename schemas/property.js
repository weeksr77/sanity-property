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

   

    {
      name: 'location',
      title: 'Location Address',
      type: 'string'
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
