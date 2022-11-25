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
  rules: [
    // 匹配字母和减号（css变量）。例如：vbg-index-bg-lg代表使用var(--index-bg-lg)做背景
    [/^vbg-([a-zA-z-]+)$/, (match) => ({ background: `var(--${match[1]})` })],
  ],
  shortcuts: {
    'my-badge':
      'py-0.5 px-1.5 text-3.3 rounded bg-primary/15 shadow-lg text-primary',
  },
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
