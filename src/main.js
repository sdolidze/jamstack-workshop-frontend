// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import DefaultLayout from '@/layouts/Default';
import GLink from 'gridsome/app/components/Link';

export default function (Vue, { appOptions, head }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
  });

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  });

  const opts = {}; // opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify);

  // eslint-disable-next-line
  appOptions.vuetify = new Vuetify(opts);

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component('GLink', GLink);
}
