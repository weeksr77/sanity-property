// sanity.config.js
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas/schema'; // updated path

export default defineConfig({
  name: 'default',
  title: 'property-website-cms',
  projectId: 'ga7aj92a',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
