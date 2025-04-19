import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import "./styles/vars.css";
import "./styles/fonts.styl";

import Footer from "./Footer.vue";

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "layout-bottom": () => h(Footer),
    });
  },
};