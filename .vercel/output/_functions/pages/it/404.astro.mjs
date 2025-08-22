import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DBhXOAM-.mjs';
import 'kleur/colors';
import { g as getLangFromUrl, $ as $$Layout, a as getRelativeLocaleUrl } from '../../chunks/Layout_9SXmIIfp.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://zandkhqastro.vercel.app");
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const safeUrl = Astro2.url || new URL("/", Astro2.site || "http://localhost:4321");
  const lang = getLangFromUrl(safeUrl);
  function localizePath(path) {
    if (path.startsWith("http") || path === "#") return path;
    return getRelativeLocaleUrl(lang, path);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex items-center h-full p-16"> <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8"> <div class="max-w-md text-center"> <h2 class="mb-8 font-bold text-9xl"> <span class="sr-only">Error</span> <span class="text-primary">404</span> </h2> <p class="text-3xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p> <p class="mt-4 mb-8 text-lg text-muted dark:text-slate-400">But dont worry, you can find plenty of other things on our homepage.</p> <a rel="noopener noreferrer"${addAttribute(localizePath("/"), "href")} class="btn ml-4">Back to homepage</a> </div> </div> </section> ` })}`;
}, "/home/hussain/zandkhqastro-main/src/pages/it/404.astro", void 0);

const $$file = "/home/hussain/zandkhqastro-main/src/pages/it/404.astro";
const $$url = "/it/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
