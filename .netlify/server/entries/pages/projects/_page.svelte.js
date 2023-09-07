import { c as create_ssr_component, g as is_promise, n as noop, b as each, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pageData = [] } = $$props;
  if ($$props.pageData === void 0 && $$bindings.pageData && pageData !== void 0)
    $$bindings.pageData(pageData);
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` <p data-svelte-h="svelte-qeejp2">loading...</p> `;
    }
    return function(pageData2) {
      return ` ${each(pageData2, (page) => {
        return `<a href="${"/projects/" + escape(page.slug, true)}"><div class="page1"><h1>${escape(page.title)}</h1></div> </a>`;
      })} `;
    }(__value);
  }(pageData)}`;
});
export {
  Page as default
};
