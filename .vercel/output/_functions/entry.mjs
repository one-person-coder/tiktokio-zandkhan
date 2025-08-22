import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BiyTLaCG.mjs';
import { manifest } from './manifest_CKaw_Nmw.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/test.json.astro.mjs');
const _page3 = () => import('./pages/api/tik.json.astro.mjs');
const _page4 = () => import('./pages/blog/category/_category_.astro.mjs');
const _page5 = () => import('./pages/blog/tag/_tag_.astro.mjs');
const _page6 = () => import('./pages/blog/_slug_.astro.mjs');
const _page7 = () => import('./pages/blog/_---page_.astro.mjs');
const _page8 = () => import('./pages/contact.astro.mjs');
const _page9 = () => import('./pages/it/404.astro.mjs');
const _page10 = () => import('./pages/it/blog/category/_category_.astro.mjs');
const _page11 = () => import('./pages/it/blog/tag/_tag_.astro.mjs');
const _page12 = () => import('./pages/it/blog/_slug_.astro.mjs');
const _page13 = () => import('./pages/it/blog/_---page_.astro.mjs');
const _page14 = () => import('./pages/it/contact.astro.mjs');
const _page15 = () => import('./pages/it.astro.mjs');
const _page16 = () => import('./pages/rss.xml.astro.mjs');
const _page17 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/test.json.ts", _page2],
    ["src/pages/api/tik.json.ts", _page3],
    ["src/pages/blog/category/[category].astro", _page4],
    ["src/pages/blog/tag/[tag].astro", _page5],
    ["src/pages/blog/[slug].astro", _page6],
    ["src/pages/blog/[...page].astro", _page7],
    ["src/pages/contact.astro", _page8],
    ["src/pages/it/404.astro", _page9],
    ["src/pages/it/blog/category/[category].astro", _page10],
    ["src/pages/it/blog/tag/[tag].astro", _page11],
    ["src/pages/it/blog/[slug].astro", _page12],
    ["src/pages/it/blog/[...page].astro", _page13],
    ["src/pages/it/contact.astro", _page14],
    ["src/pages/it/index.astro", _page15],
    ["src/pages/rss.xml.ts", _page16],
    ["src/pages/index.astro", _page17]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "e23687ca-8717-4d5b-9367-2fd3a2c32b57",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
