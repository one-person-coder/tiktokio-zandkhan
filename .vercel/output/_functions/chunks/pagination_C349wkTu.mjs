import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, b as renderTemplate } from './astro/server_DBhXOAM-.mjs';
import 'kleur/colors';
import { g as getLangFromUrl, c as $$Link, a as getRelativeLocaleUrl, u as useTranslations, b as $$Icon } from './Layout_9SXmIIfp.mjs';

const $$Astro = createAstro("https://zandkhqastro.vercel.app");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const {
    prevUrl,
    nextUrl,
    prevText = "blog.prev",
    nextText = "blog.next",
    class: className
  } = Astro2.props;
  const safeUrl = Astro2.url || new URL("/", Astro2.site || "http://localhost:4321");
  const lang = getLangFromUrl(safeUrl);
  const t = useTranslations(lang);
  function localizePath(path) {
    if (!path) return path;
    return getRelativeLocaleUrl(lang, path);
  }
  return renderTemplate`${(prevUrl || nextUrl) && renderTemplate`${maybeRenderHead()}<div${addAttribute(["container flex", className], "class:list")}><div class="flex flex-row mx-auto container justify-center gap-8">${renderComponent($$result, "Link", $$Link, { "href": localizePath(prevUrl), "style": "muted", "class": `${!prevUrl ? "invisible" : ""}` }, { "default": ($$result2) => renderTemplate`<div class="flex flex-row align-middle">${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-left", "class": "w-6 h-6" })}<p class="ml-2">${t(prevText)}</p></div>` })}${renderComponent($$result, "Link", $$Link, { "href": localizePath(nextUrl), "style": "muted", "class": `${!nextUrl ? "invisible" : ""}` }, { "default": ($$result2) => renderTemplate`<div class="flex flex-row align-middle"><span class="mr-2">${t(nextText)}</span>${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-right", "class": "w-6 h-6" })}</div>` })}</div></div>`}`;
}, "/home/hussain/zandkhqastro-main/src/components/blog/pagination.astro", void 0);

export { $$Pagination as $ };
