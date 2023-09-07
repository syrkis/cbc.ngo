import { writable, derived } from "svelte/store";

// your language data
export const langs = {
    'en': {
        title: 'Center for Brazilian Climate',
        about: 'About',
        programs: 'Programs',
        publications: 'Publications',
        contact: 'Contact',
        tagline: 'We foster informed dialogues and create strategic plans to combat climate change in Brazil through policy advocacy and community engagement.'
    },
    'pt': {
        title: 'Centro Brasil no Clima',
        about: 'Sobre',
        programs: 'Programas',
        publications: 'Publicações',
        contact: 'Contacto',
        tagline: 'Estimulamos debates esclarecidos e criamos planos para combater as mudanças climáticas no Brasil via defesa política e interação comunitária.'
    }
};

// the store holding the current language, initially 'en'
export const language = writable<string>(navigator.language.startsWith('pt') ? 'pt' : 'en');

// derived dictionary store holding the translations for the current language
export const dictionary = derived(language, ($language) => langs[$language], {});

// function to change the language
export const setLang = (lang: string) => {
    language.set(lang);
};
