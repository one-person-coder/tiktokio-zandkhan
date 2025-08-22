import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, F as Fragment } from '../../../../chunks/astro/server_DBhXOAM-.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../../../chunks/_astro_content_CRQiKwzI.mjs';
import { $ as $$Posts } from '../../../../chunks/posts_eiDHe5S4.mjs';
import { $ as $$Container } from '../../../../chunks/container_BSpyUlRI.mjs';
import { $ as $$Sectionhead } from '../../../../chunks/sectionhead_O_fYcIh3.mjs';
import { g as getLangFromUrl, $ as $$Layout } from '../../../../chunks/Layout_BbuZyOrx.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://zandkhqastro.vercel.app");
async function getStaticPaths() {
  const posts = await getCollection("blog", ({ data }) => {
    return !data.draft && data.publishDate < /* @__PURE__ */ new Date();
  });
  const localizedPosts = posts.filter((page) => {
    const [lang, ...slug] = page.slug.split("/");
    return lang === "it";
  });
  const categories = /* @__PURE__ */ new Set();
  localizedPosts.map((post) => {
    typeof post.data.category === "string" && categories.add(post.data.category.toLowerCase());
  });
  return Array.from(categories).map((category) => {
    return {
      params: { category },
      props: {
        posts: localizedPosts.filter(
          (post) => typeof post.data.category === "string" && post.data.category.toLowerCase() === category
        ),
        category,
        lang: "it"
      }
    };
  });
}
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { posts, category, lang } = Astro2.props;
  getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": async ($$result5) => renderTemplate`We write about building startups and thoughts going on our mind.` })}`, "title": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": async ($$result5) => renderTemplate`#${category}` })}` })} ${renderComponent($$result3, "Posts", $$Posts, { "posts": posts })} ` })} ` })}`;
}, "/home/hussain/zandkhqastro-main/src/pages/it/blog/category/[category].astro", void 0);

const $$file = "/home/hussain/zandkhqastro-main/src/pages/it/blog/category/[category].astro";
const $$url = "/it/blog/category/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$category,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
