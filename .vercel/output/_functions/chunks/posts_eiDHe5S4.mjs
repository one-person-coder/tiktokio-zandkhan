import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, b as renderTemplate } from './astro/server_DBhXOAM-.mjs';
import 'kleur/colors';
import { g as getLangFromUrl, b as $$Icon, a as getRelativeLocaleUrl } from './Layout_BbuZyOrx.mjs';

const $$Astro = createAstro("https://zandkhqastro.vercel.app");
const $$Posts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Posts;
  const { posts } = Astro2.props;
  const safeUrl = Astro2.url || new URL("/", Astro2.site || "http://localhost:4321");
  const lang = getLangFromUrl(safeUrl);
  function localizePath(path) {
    if (!path || path && path.startsWith("http") || path === "#") return path;
    return getRelativeLocaleUrl(lang, path);
  }
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-7xl"> <div class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-12 sm:mt-24 lg:mx-0 lg:max-w-none lg:grid-cols-2"> ${posts.map((blogPostEntry, index) => renderTemplate`<article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-stone-950 px-8 pb-8 pt-32 sm:pt-64 lg:pt-30"> <img${addAttribute(blogPostEntry.data.image.src, "src")}${addAttribute(blogPostEntry.data.image.alt, "alt")} class="absolute inset-0 -z-10 h-full w-full object-cover"> <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div> <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div> <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"> <time${addAttribute(blogPostEntry.data.publishDate.toDateString(), "datetime")} class="mr-8"> ${blogPostEntry.data.publishDate.toDateString()} </time> <div class="-ml-4 flex items-center gap-x-4"> <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"> <circle cx="1" cy="1" r="1"></circle> </svg> <div class="flex gap-x-2.5"> ${renderComponent($$result, "Icon", $$Icon, { "name": "carbon:user-avatar-filled-alt", "width": "20" })} ${blogPostEntry.data.author} </div> </div> </div> <h3 class="mt-3 text-lg font-semibold leading-6 text-white"> <a${addAttribute(`${localizePath(`blog/${blogPostEntry.slug.split("/").slice(1).join("/")}`)}`, "href")}> <span class="absolute inset-0"></span> ${blogPostEntry.data.title} </a> </h3> <h4 class="pt-3 text-xs font-medium text-gray-300 uppercase tracking-wider"> <a${addAttribute(localizePath(`blog/category/${blogPostEntry.data.category?.toLowerCase()}`), "href")}>${blogPostEntry.data.category}</a> </h4> </article>`)} </div> </section>`;
}, "/home/hussain/zandkhqastro-main/src/components/blog/posts.astro", void 0);

export { $$Posts as $ };
