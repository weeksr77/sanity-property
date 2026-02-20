import { defineType } from 'sanity'

export default defineType({
  name: 'floorplan',
  title: 'Floorplan',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Floorplan Name',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'virtualTourUrl',
      title: 'Virtual Tour URL',
      type: 'url',
    },
    {
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      of: [{ type: 'string' }],
    },

    {
  name: "unitPhotos",
  title: "Unit Photos",
  type: "array",
  of: [{ type: "image" }],
  options: { layout: "grid" }
},

  ],
})
