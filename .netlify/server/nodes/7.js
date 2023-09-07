

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/publications/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.bf6b8c03.js","_app/immutable/chunks/scheduler.e9f114ce.js","_app/immutable/chunks/index.f57beabb.js","_app/immutable/chunks/await_block.7a8107b4.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = [];
export const fonts = [];
