import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component, b as each, d as add_attribute } from "../../chunks/ssr.js";
import "vanilla-tilt";
import { p as page } from "../../chunks/stores.js";
import { d as derived, w as writable } from "../../chunks/index.js";
const Ring_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "img.svelte-14pu5cr{width:85%;height:auto;margin:auto}.ring.svelte-14pu5cr{margin-left:10%;display:flex;align-items:center;justify-content:center}",
  map: null
};
const Ring = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="ring svelte-14pu5cr" data-svelte-h="svelte-157k375"><div class="logo"><img src="logo.svg" alt="Center for Brazilian Climate logo" class="svelte-14pu5cr"></div> </div>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".nav-bg.svelte-1m4e9hq.svelte-1m4e9hq{background-color:#A3CC59;position:fixed;top:calc(100vh - 50px);width:100%;transition:top 0.5s ease-in-out;z-index:9}.nav-bg.top.svelte-1m4e9hq.svelte-1m4e9hq{top:0}a.svelte-1m4e9hq.svelte-1m4e9hq{color:white;text-decoration:none}h1.svelte-1m4e9hq.svelte-1m4e9hq{letter-spacing:0.05em;font-size:1.5em;margin:0 0 1rem 0}.main.svelte-1m4e9hq.svelte-1m4e9hq{display:grid;grid-template-columns:2fr 1fr;height:100vh;color:white;width:800px;max-width:100%;margin:auto;transition:transform 0.5s ease-in-out;align-items:center}.container.hide.svelte-1m4e9hq.svelte-1m4e9hq{transform:translateY(-100vh)}.container.svelte-1m4e9hq.svelte-1m4e9hq{transform:translateY(0);transition:transform 0.5s ease-in-out;background-color:#A3CC59}.tagline.svelte-1m4e9hq.svelte-1m4e9hq{display:flex;flex-direction:column;justify-content:center;font-size:1.5em;text-align:center;margin:auto}.logo-wrapper.svelte-1m4e9hq.svelte-1m4e9hq{transition:transform 0.5s ease}.logo-wrapper.svelte-1m4e9hq.svelte-1m4e9hq:hover{transform:scale(1.1)}.separator.svelte-1m4e9hq.svelte-1m4e9hq{display:none}.language-switcher.svelte-1m4e9hq.svelte-1m4e9hq{color:white;position:fixed;top:0;right:0;padding:1rem;font-size:1.5rem;font-weight:bold;letter-spacing:0.05em}.nav.svelte-1m4e9hq.svelte-1m4e9hq{line-height:3em;bottom:0;width:100%;display:flex;justify-content:center;z-index:10}.nav__links.svelte-1m4e9hq.svelte-1m4e9hq{display:flex;justify-content:space-between;width:70%}.nav__links.svelte-1m4e9hq a.svelte-1m4e9hq{color:white;text-decoration:none;font-size:1.5rem;font-weight:bold;letter-spacing:0.05em}.nav__links.svelte-1m4e9hq a.svelte-1m4e9hq:hover{color:#F2F2F2}@media(max-width: 800px){.nav__links.svelte-1m4e9hq.svelte-1m4e9hq{width:90%;justify-content:space-around;align-items:center}a.svelte-1m4e9hq.svelte-1m4e9hq{font-size:1em !important}.separator.svelte-1m4e9hq.svelte-1m4e9hq{display:inline-block;color:white;font-size:1.2rem;letter-spacing:0.05em}.tagline.svelte-1m4e9hq.svelte-1m4e9hq{font-size:1.2em !important}.main.svelte-1m4e9hq.svelte-1m4e9hq{grid-template-columns:1fr;width:500px;max-width:100%;grid-template-rows:1fr}.logo-wrapper.svelte-1m4e9hq.svelte-1m4e9hq{display:none}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isTop;
  let $page, $$unsubscribe_page;
  let $dictionary, $$unsubscribe_dictionary;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let langs = {
    "en": {
      title: "Center for Brazilian Climate",
      about: "About",
      projects: "Projects",
      publications: "Publications",
      contact: "Contact",
      tagline: "We foster informed dialogues and create strategic plans to combat climate change in Brazil through policy advocacy and community engagement."
    },
    "pt": {
      title: "Centro Brasil no Clima",
      about: "Sobre",
      projects: "Projetos",
      publications: "Publicações",
      contact: "Contacto",
      tagline: "Estimulamos debates esclarecidos e criamos planos para combater as mudanças climáticas no Brasil via defesa política e interação comunitária."
    }
  };
  const language = writable("en");
  const dictionary = derived(language, ($language) => langs[$language]);
  $$unsubscribe_dictionary = subscribe(dictionary, (value) => $dictionary = value);
  let sites = ["about", "projects", "publications", "contact"];
  $$result.css.add(css$1);
  isTop = $page.route.id === "/";
  $$unsubscribe_page();
  $$unsubscribe_dictionary();
  return `${$$result.head += `<!-- HEAD_svelte-z14uh4_START --><script data-svelte-h="svelte-b2xd5q">language.subscribe(value => document.documentElement.lang = value);<\/script><!-- HEAD_svelte-z14uh4_END -->`, ""} <div class="${["container svelte-1m4e9hq", !isTop ? "hide" : ""].join(" ").trim()}"><div class="main svelte-1m4e9hq"><div class="tagline svelte-1m4e9hq"><h1 class="svelte-1m4e9hq">${escape($dictionary["title"])}</h1> <span>${escape($dictionary["tagline"])}</span></div> <a href="/about" class="svelte-1m4e9hq"><div class="logo-wrapper svelte-1m4e9hq">${validate_component(Ring, "Ring").$$render($$result, {}, {}, {})}</div></a></div></div> <div class="language-switcher svelte-1m4e9hq"><a href="#" class="svelte-1m4e9hq" data-svelte-h="svelte-1ghj47b">EN</a> |
        <a href="#" class="svelte-1m4e9hq" data-svelte-h="svelte-mgdeuj">PT</a></div> <div class="${["nav-bg svelte-1m4e9hq", !isTop ? "top" : ""].join(" ").trim()}"><div class="nav svelte-1m4e9hq"><div class="nav__links svelte-1m4e9hq">${each(sites, (site, i) => {
    return `<a href="${"/" + escape(site, true)}" class="svelte-1m4e9hq">${escape($dictionary[site])}</a> ${i < sites.length - 1 ? `<span class="separator svelte-1m4e9hq" data-svelte-h="svelte-1jf14za">|</span>` : ``}`;
  })}</div></div> </div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400&display=swap');@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400&display=swap');.content{margin-top:10vh;position:absolute;width:100%;transition:transform 0.5s ease-in-out;font-family:'Cabin', sans-serif}.page1{width:800px;margin:auto;max-width:95%}body{padding:0;margin:0;line-height:1.5;font-family:'Crimson Pro', serif}.container, .content{transform:translateY(0)}.container.hide, .content.slide-up{transform:translateY(-100vh)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let isTop = false;
  let contentElement;
  $$result.css.add(css);
  {
    {
      isTop = $page.route.id === "/" || $page.route.id === "/pt";
    }
  }
  $$unsubscribe_page();
  return `<div>${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div class="${["content", !isTop ? "slide-up" : ""].join(" ").trim()}"${add_attribute("this", contentElement, 0)}>${slots.default ? slots.default({}) : ``}</div> </div>`;
});
export {
  Layout as default
};
