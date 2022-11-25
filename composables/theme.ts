import {acceptHMRUpdate, defineStore} from 'pinia'
import {computed, ref} from "vue";


export const useThemeStore = defineStore('theme', () => {
    const currThemeId = ref(0);
    const knownThemes = ['winter', 'night'];
    const currTheme = computed(() => knownThemes[currThemeId.value])
    const isDarkTheme = computed(() => currThemeId.value == 1)

    function applyTheme() {
        let html = document.getElementsByTagName("html");
        html[0].setAttribute("data-theme", currTheme.value);
        html[0].setAttribute("class", currTheme.value);
        console.log(`Run pinia apply-theme: ${currTheme.value}`)
    }

    function toggleTheme() {
        console.log(`Run pinia toggle-theme:`)
        console.log(`Before: theme-id: ${currThemeId.value}, currTheme: ${currTheme.value}`)
        currThemeId.value = currThemeId.value == 0 ? 1 : 0;
        console.log(`After: theme-id: ${currThemeId.value}, currTheme: ${currTheme.value}`)
        applyTheme();
    }

    return {
        currThemeId,
        currTheme,
        toggleTheme,
        applyTheme,
        isDarkTheme
    }
})

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot))
