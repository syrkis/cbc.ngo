

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_slug_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.56e9ce34.js","_app/immutable/chunks/scheduler.e9f114ce.js","_app/immutable/chunks/index.f57beabb.js","_app/immutable/chunks/stores.d1d396cf.js","_app/immutable/chunks/singletons.93f66677.js"];
export const stylesheets = [];
export const fonts = [];
