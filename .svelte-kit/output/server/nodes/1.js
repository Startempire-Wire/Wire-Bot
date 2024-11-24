

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["app/immutable/nodes/1.D5jnAOST.js","app/immutable/chunks/scheduler.Bmg8oFKD.js","app/immutable/chunks/index.hnf42E4R.js","app/immutable/chunks/entry.ClyT-GOS.js"];
export const stylesheets = [];
export const fonts = [];
