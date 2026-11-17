import { CONTENTFUL_DELIVERY_TOKEN } from 'astro:env/server';
import { createClient } from 'contentful';

import { site } from '@config/site';

export const contentfulClient = createClient({
  space: site.contentfulSpaceId,
  accessToken: CONTENTFUL_DELIVERY_TOKEN,
}).withoutUnresolvableLinks;
