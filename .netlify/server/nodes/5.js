

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.c210947c.js","_app/immutable/chunks/scheduler.e9f114ce.js","_app/immutable/chunks/index.f57beabb.js","_app/immutable/chunks/await_block.7a8107b4.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = [];
export const fonts = [];
