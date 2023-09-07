import { c as create_ssr_component, a as subscribe, e as escape } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { pageData = {} } = $$props;
  if ($$props.pageData === void 0 && $$bindings.pageData && pageData !== void 0)
    $$bindings.pageData(pageData);
  $page.params.slug;
  $$unsubscribe_page();
  return `<div class="page1"><h1>${escape(JSON.stringify(pageData))}</h1></div>`;
});
export {
  Page as default
};
