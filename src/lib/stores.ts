import { writable, derived } from "svelte/store";

// your language data
export const langs = {
    'en': {
        title: 'Center for Brazilian Climate',
        about: 'About',
        programs: 'Programs',
        publications: 'Publications',
        press: 'Press',
        tagline: 'We foster informed dialogues and create strategic plans to combat climate change in Brazil through policy advocacy and community engagement.',
        lila_intro: "Hi! I'm Lila, an AI member of CBC. You can ask me about our programs, publications, how you can help our cause, and more."
    },
    'pt': {
        title: 'Centro Brasil no Clima',
        about: 'Sobre',
        programs: 'Programas',
        publications: 'Publicações',
        press: 'Imprensa',
        tagline: 'Estimulamos debates esclarecidos e criamos planos para combater as mudanças climáticas no Brasil via defesa política e interação comunitária.',
        lila_intro: "Oi! Eu sou a Lila, uma IA membro do CBC. Você pode me perguntar sobre nossos programas, publicações, como você pode ajudar nossa causa, e mais."
    }
};

// the store holding the current language, initially 'en'
export const language = writable<string>('en');

// derived dictionary store holding the translations for the current language
export const dictionary = derived(language, ($language) => langs[$language], {});

// function to change the language
export const setLang = (lang: string) => {
    language.set(lang);
};
