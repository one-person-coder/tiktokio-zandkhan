import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_DBhXOAM-.mjs';
import 'kleur/colors';
import { $ as $$Container } from '../chunks/container_BSpyUlRI.mjs';
import { $ as $$Hero, a as $$Features, b as $$Faq, c as $$Newsletter } from '../chunks/newsletter_CpveFvXz.mjs';
import { g as getLangFromUrl, $ as $$Layout } from '../chunks/Layout_9SXmIIfp.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://zandkhqastro.vercel.app");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const safeUrl = Astro2.url || new URL("/", Astro2.site || "http://localhost:4321");
  getLangFromUrl(safeUrl);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ${renderComponent($$result3, "Features", $$Features, {})} ${renderComponent($$result3, "Faq", $$Faq, {})} ${renderComponent($$result3, "Newsletter", $$Newsletter, {})} ` })} ` })}`;
}, "/home/hussain/zandkhqastro-main/src/pages/it/index.astro", void 0);

const $$file = "/home/hussain/zandkhqastro-main/src/pages/it/index.astro";
const $$url = "/it";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
