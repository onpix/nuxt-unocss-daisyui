import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';
import presetDaisy from 'unocss-preset-daisy';

// import '@unocss/reset/tailwind.css';
// // Import daisyUI **BEFORE** UnoCSS
// import '@kidonng/daisyui/index.css';
// import 'uno.css';

export default defineConfig({
  rules: [],
  shortcuts: {},
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetDaisy(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
