

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sidepanel/_page.svelte.js')).default;
export const imports = ["app/immutable/nodes/4.BFJ0prje.js","app/immutable/chunks/scheduler.Bmg8oFKD.js","app/immutable/chunks/index.hnf42E4R.js","app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = [];
export const fonts = [];
