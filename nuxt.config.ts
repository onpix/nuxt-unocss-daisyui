export default defineNuxtConfig({
    modules: ['nuxt-icon', '@nuxt/content', '@nuxtjs/color-mode', '@pinia/nuxt', '@unocss/nuxt'],
    ssr: true,
    colorMode: {
        classSuffix: '',
        dataValue: 'theme'
    },
    // purgecss: {
    //     enabled: true,
    // },
    
    plugins: [
    ],

    css: [
        '~/assets/css/global.scss',
    ],
    extends: '@nuxt-themes/typography'

});
