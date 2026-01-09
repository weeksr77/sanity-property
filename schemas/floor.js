export default {
name: 'floor',
title: 'Floor',
type: 'document',
fields: [
{
name: 'title',
title: 'Title',
type: 'string',
validation: Rule => Rule.required(),
},
{
name: 'description',
title: 'Description',
type: 'text',
},
{
name: 'image',
title: 'Floor Image',
type: 'image',
options: { hotspot: true },
}
]
}