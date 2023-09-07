

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.cee7b333.js","_app/immutable/chunks/scheduler.e9f114ce.js","_app/immutable/chunks/index.f57beabb.js","_app/immutable/chunks/stores.d1d396cf.js","_app/immutable/chunks/singletons.93f66677.js"];
export const stylesheets = [];
export const fonts = [];
