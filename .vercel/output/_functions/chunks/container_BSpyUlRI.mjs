import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, e as renderSlot, b as renderTemplate } from './astro/server_DBhXOAM-.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://zandkhqastro.vercel.app");
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Container;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["max-w-screen-xl mx-auto px-5", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/hussain/zandkhqastro-main/src/components/container.astro", void 0);

export { $$Container as $ };
