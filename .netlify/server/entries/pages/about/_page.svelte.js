import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
const Post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { content } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  $$unsubscribe_page();
  return `<div class="container"><div class="content">${escape(JSON.stringify($page.route.id))} ${escape(JSON.stringify(content))}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pageData = {} } = $$props;
  if ($$props.pageData === void 0 && $$bindings.pageData && pageData !== void 0)
    $$bindings.pageData(pageData);
  return `<div class="page1">${validate_component(Post, "Post").$$render($$result, { content: pageData }, {}, {})}</div>`;
});
export {
  Page as default
};
