import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'GB',
    defaultLanguageCode: 'EN',
    storeDomain: 'felia-reusable-wear.myshopify.com',
    storefrontToken: 'f76402403066b3c59b71cb072c3a9f7c',
    storefrontApiVersion: '2022-07',
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
