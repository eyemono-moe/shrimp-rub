import UnoCSS from "unocss/vite";
import Unfonts from "unplugin-fonts/vite";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [
    UnoCSS(),
    solid(),
    Unfonts({
      google: {
        families: ["Noto Sans JP"],
        // Array.from(new Set("使われている文字")).sort((a,b) => a.localeCompare(b)).join("")
        text: "：01459BLmorRsUいえエすちっとなビまむもょりるを画元使切選像替択入用力揉",
      },
    }),
  ],
});
