import { c as create_ssr_component, e as each } from "../../../chunks/ssr.js";
import { e as escape } from "../../../chunks/escape.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let messages = [];
  return `<div class="p-4"><h1 class="text-2xl font-bold" data-svelte-h="svelte-1anqvqu">Welcome, Verious!</h1> <div class="my-4 border-t"></div> <div id="messageContainer">${each(messages, (message) => {
    return `<p>${escape(message)}</p>`;
  })}</div></div>`;
});
export {
  Page as default
};
