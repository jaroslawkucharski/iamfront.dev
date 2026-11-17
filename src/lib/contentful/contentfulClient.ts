import { CONTENTFUL_DELIVERY_TOKEN, CONTENTFUL_SPACE_ID } from 'astro:env/server';
import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_DELIVERY_TOKEN,
}).withoutUnresolvableLinks;
