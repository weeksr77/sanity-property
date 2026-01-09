export default {
name: 'portfolioPage',
title: 'Portfolio Page',
type: 'document',
fields: [
{
name: 'backgroundImage',
title: 'Background Image',
type: 'image',
options: { hotspot: true },
},
{
name: 'overlayText',
title: 'Text Overlay',
type: 'string',
},
{
name: 'properties',
title: 'Properties',
type: 'array',
of: [
{
type: 'object',
fields: [
{ name: 'title', title: 'Property Title', type: 'string' },
{ name: 'slug', title: 'Property Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
{ name: 'description', title: 'Description', type: 'text' },
{ name: 'image', title: 'Property Image', type: 'image', options: { hotspot: true } },
],
},
],
},
],
}