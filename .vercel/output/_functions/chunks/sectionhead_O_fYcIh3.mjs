import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, e as renderSlot, b as renderTemplate } from './astro/server_DBhXOAM-.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://zandkhqastro.vercel.app");
const $$Sectionhead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sectionhead;
  const { align = "center" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["mt-8", "md:mt-16", align === "center" && "text-center"], "class:list")}> <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight capitalize dark:text-white"> ${renderSlot($$result, $$slots["title"], renderTemplate`Title`)} </h1> <p class="text-lg mt-4 text-slate-600 dark:text-white"> ${renderSlot($$result, $$slots["desc"], renderTemplate`Some description goes here`)} </p> </div>`;
}, "/home/hussain/zandkhqastro-main/src/components/sectionhead.astro", void 0);

export { $$Sectionhead as $ };
