import Page from "../components/Page";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Teaser from "../components/Teaser";
// import CustomBlock from "../components/CustomBlock";

import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    feature: Feature,
    grid: Grid,
    teaser: Teaser,
    'custom block' : (props) => {
      const CustomBlock = require('../components/CustomBlock').default;
      return <CustomBlock {...props} />;
    },

    
  },
  apiOptions: {
    region: 'eu',
  },
});