import { c as createAstro, a as createComponent, m as maybeRenderHead, u as unescapeHTML, b as renderTemplate, r as renderComponent, d as addAttribute } from './astro/server_DBhXOAM-.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getLangFromUrl, u as useTranslations, d as $$Button, c as $$Link } from './Layout_9SXmIIfp.mjs';

const $$Astro$3 = createAstro("https://zandkhqastro.vercel.app");
const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Faq;
  const { plan } = Astro2.props;
  const safeUrl = Astro2.url || new URL("/", Astro2.site || "http://localhost:4321");
  const lang = getLangFromUrl(safeUrl);
  const t = useTranslations(lang);
  const faqs = [
    {
      title: "What is this?",
      description: "This is a astro template that uses tailwindcss and alpinejs"
    },
    {
      title: "Why alpinejs? Why don't just use js?",
      description: "Alpine js is less than 17kb and it make javascript very fast to write, there are also various open source ready to use components like https://js.hyperui.dev, https://www.alpinetoolbox.com/examples, https://alpinejs.dev/components#components"
    },
    {
      title: "But I don't need alpine js, can I remove it?",
      description: `Of course, but some components use it and you'll have to edit these, more specifically you ll have to: <br/>
					<ul style="list-style: inside;">
						<li>First remove the package with the command <code>npm unistall @astrojs/alpinejs @types/alpinejs alpinejs</code></li>
						<li>Adjust all components that uses alpine js: <code>faq.astro</code>, <code>themeselector.astro</code>, <code>navbar.astro</code></li>
					</ul>`
    },
    {
      title: "Can I remove also tailwidcss?",
      description: "I mean, you can, but you'll have to basically rewrite all the template, so I don't recommend it"
    },
    {
      title: "I don't need multiple language, how can I remove it?",
      description: `One way is to simply keep one language and remove the selector from the footer but in order to fully remove the localization you have to: <br/>
					<ul style="list-style: inside;">
						<li>Remove the i18next pacakage <code>npm unistall astro-i18next</code></li>
						<li>Remove <code>astro-i18next.config.mjs</code> file</li>
						<li>Remove <code>locales</code> folder from public</li>
						<li>Remove <code>languageselector.astro</code> file and from footer</li>
						<li>Find all reference to <code>i18next</code> and <code>astro-i18next</code> and replace with your text</li>
					</ul>`
    },
    {
      title: "I don't need dark mode, how can I remove it?",
      description: "Dark mode is embedded into tailwindcss, so you can't remove it, but you can remove the switch from the navbar"
    },
    {
      title: "How can I configure the Sveltia CMS authentication with cloudflare?",
      description: `To configure Sveltia CMS with cloudflare follow this guide <a href="https://github.com/sveltia/sveltia-cms" target="_blank">https://github.com/sveltia/sveltia-cms</a>`
    },
    {
      title: "How can I configure the decap CMS authentication with netlify?",
      description: `To configure decap CMS with netlify do the followings:
					<ul style="list-style: inside;">
						<li>Change NetlifyCMS config <code>config.backend.name</code> to git-gateway</li>
						<li>Use integrated NetlifyCMS auth <a href="https://decapcms.org/docs/git-gateway-backend/#git-gateway-with-netlify" target="_blank">https://decapcms.org/docs/git-gateway-backend/#git-gateway-with-netlify</a></li>
					</ul>`
    },
    {
      title: "How can I change the localization languages?",
      description: `In order to change the languages you have to change the languages in the file <code>astro-i18next.config.mjs</code> and in the netlifyCMS configuration on the file <code>astro.config.mjs</code> <br/>
					Then change the locales files folders in <code>public/locales</code>`
    },
    {
      title: "What are the files in the funciotn folder used for?",
      description: `These are cloudflare function that are used for the authentication to the decap CMS`
    },
    {
      title: "The build on cloudflare keep failing, why?",
      description: `One of the problem could be that the Build system version is setted to version 1, make sure that version 2 is selected`
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto max-w-5xl px-6 py-24 sm:py-36 lg:px-8 lg:py-52 dark:bg-stone-950"> <div class="mx-auto divide-y divide-gray-900/10 dark:divide-gray-100/10"> <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white">${t("faq.title")}</h2> <dl class="mt-10 space-y-6 divide-y divide-gray-900/10 dark:divide-gray-100/10"> ${faqs.map((faq) => renderTemplate`<div class="pt-6" x-data="{ open: false }"> <dt> <button type="button" class="flex w-full items-start justify-between text-left text-gray-900 dark:text-white" @click="open = !open" :x-bind:aria-expanded="open.toString()"> <span class="text-base font-semibold leading-7">${faq.title}</span> <span class="ml-6 flex h-7 items-center"> <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" x-show="!open"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path> </svg> <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" x-show="open"> <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6"></path> </svg> </span> </button> </dt> <dd x-transition:enter="transition ease-out duration-100" x-transition:enter-start="opacity-0 transform scale-90" x-transition:enter-end="opacity-100 transform scale-100" x-transition:leave="transition ease-in duration-100" x-transition:leave-start="opacity-100 transform scale-100" x-transition:leave-end="opacity-0 transform scale-90" class="mt-2 pr-12" id="faq-0" x-show="open"> <span class="text-base leading-7 text-gray-600 dark:text-gray-100"> <span>${unescapeHTML(faq.description)}</span> </span> </dd> </div>`)} </dl> </div> </div>`;
}, "/home/hussain/zandkhqastro-main/src/components/faq.astro", void 0);

const $$Astro$2 = createAstro("https://zandkhqastro.vercel.app");
const $$Features = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Features;
  const safeUrl = Astro2.url || new URL("/", Astro2.site || "http://localhost:4321");
  const lang = getLangFromUrl(safeUrl);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<div class="relative p-4"> <div class="max-w-screen-xl mx-auto"> <div class="rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal"> <section id="about" class="relative overflow-hidden"> <div class="absolute inset-0 w-full h-full"></div> <div class="container max-w-7xl mx-auto px-4 relative z-10"> <div class="text-center mb-16"> <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Tiktokio <span class="text-orange-400 dark:text-orange-400">${t("features.tiktokdownloader")}</span> ${t("features.online")}</h2> <div class="w-24 h-1 mx-auto bg-orange-400"></div> <p class="mt-4 mx-auto text-lg text-gray-900 dark:text-white">${t("features.para1")}</p> </div> <div class="grid md:grid-cols-2 gap-12 items-stretch"> <div class="flex items-center justify-center"> <div class="w-full h-full rounded-2xl overflow-hidden"> <img src="/images/tiktok-downloader.webp" alt="Tiktok Video Downloader" class="object-contain w-full h-full" onerror="this.src='/images/tiktok-logo.webp'"> </div> </div> <div class="flex flex-col justify-center"> <div class="grid gap-7"> <div class="feature-box bg-gradient-to-r from-slate-900 to-slate-700 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105"><div class="flex items-start gap-4"><div class="flex-shrink-0"><div class="w-12 h-12 rounded-lg flex items-center justify-center text-pink-400"><svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V8m0 8l3-3m-3 3l-3-3m3-5a1 1 0 110-2 1 1 0 010 2zm0 0v2m9 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> </div> </div> <div> <h3 class="font-medium text-white mb-1 text-xl">${t("features.fastdownloadh")}</h3> <p class="text-white">${t("features.fastdownload")}</p> </div> </div> </div> <div class="feature-box bg-gradient-to-r from-slate-700 to-slate-900 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105"> <div class="flex items-start gap-4"> <div class="flex-shrink-0"> <div class="w-12 h-12 rounded-lg flex items-center justify-center text-purple-400"> <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> </div> </div> <div> <h3 class="font-medium text-white mb-1 text-xl">${t("features.highqualityh")}</h3> <p class="text-white">${t("features.highquality")}</p> </div> </div> </div> <div class="feature-box bg-gradient-to-r from-slate-900 to-slate-700 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105"> <div class="flex items-start gap-4"> <div class="flex-shrink-0"> <div class="w-12 h-12 rounded-lg flex items-center justify-center text-blue-400"> <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> </div> </div> <div> <h3 class="font-medium text-white mb-1 text-xl">${t("features.allcontenttypesh")}</h3> <p class="text-white">${t("features.allcontenttypes")}</p> </div> </div> </div> </div> </div> </div> </div> </section> </div> </div> </div> <div class="relative p-4"> <div class="max-w-screen-xl mx-auto"> <div class="rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal"> <section id="how-to-play" class="py-20 relative overflow-hidden"> <div class="absolute inset-0 w-full h-full"> <div class="absolute inset-0"></div> </div> <div itemprop="itemListElement" itemscope itemtype="https://schema.org/HowToStep" class="container max-w-6xl mx-auto px-4 relative z-10"> <div class="text-center mb-16"> <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">${t("features.howto")} <span class="text-orange-400 dark:text-orange-400">${t("features.downloadtiktokvideos")}</span> ${t("features.easily")}</h2> <meta itemprop="url" content="/"> <meta itemprop="timeRequired" content="PT1M"> <div class="w-24 h-1 mx-auto bg-orange-400 rounded-full"></div> <p class="text-gray-900 text-lg mt-6 dark:text-white">${t("features.para2")}</p> <p class="text-gray-900 text-lg mt-6 dark:text-white">${t("features.steps")}</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <!--1--> <div itemtype="https://schema.org/HowToStep" class="how-to-card bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 overflow-hidden"> <div class="relative h-48 w-full overflow-hidden bg-gradient-to-br from-purple-600/30 to-pink-600/30"> <img src="/images/tiktok-search.webp" alt="Step 1: Copy the URL" class="w-full h-full object-contain p-4"> <div class="absolute top-3 left-3 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"> <span itemprop="position" content="1" class="text-xl font-bold text-white">1</span> </div> </div> <div class="p-6"> <div class="flex items-center gap-3 mb-3"> <span class="iconify i-mdi:content-copy w-6 h-6 text-pink-400" aria-hidden="true" style=""></span> <h3 itemprop="name" class="text-xl font-semibold text-white">${t("features.step1h")}</h3> </div> <p itemprop="text" class="text-white">${t("features.step1")}</p> </div> </div> <!--2--> <div itemtype="https://schema.org/HowToStep" class="how-to-card bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 overflow-hidden"> <div class="relative h-48 w-full overflow-hidden bg-gradient-to-br from-purple-600/30 to-pink-600/30"> <img src="/images/how-to-step2.webp" alt="Step 2: Paste the link" class="w-full h-full object-contain p-4"> <div class="absolute top-3 left-3 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"> <span itemprop="position" content="2" class="text-xl font-bold text-white">2</span> </div> </div> <div class="p-6"> <div class="flex items-center gap-3 mb-3"> <span class="iconify i-mdi:link w-6 h-6 text-pink-400" aria-hidden="true" style=""></span> <h3 itemprop="name" class="text-xl font-semibold text-white">${t("features.step2h")}</h3> </div> <p itemprop="text" class="text-white">${t("features.step2")}</p> </div> </div> <!--3--> <div itemtype="https://schema.org/HowToStep" class="how-to-card bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 overflow-hidden"> <div class="relative h-48 w-full overflow-hidden bg-gradient-to-br from-purple-600/30 to-pink-600/30"> <img src="/images/how-to-step3.webp" alt="Step 3: Download video" class="w-full h-full object-contain p-4"> <div class="absolute top-3 left-3 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"> <span itemprop="position" content="3" class="text-xl font-bold text-white">3</span> </div> </div> <div class="p-6"> <div class="flex items-center gap-3 mb-3"> <span class="iconify i-mdi:download w-6 h-6 text-pink-400" aria-hidden="true" style=""></span> <h3 itemprop="name" class="text-xl font-semibold text-white">${t("features.step3h")}</h3> </div> <p itemprop="text" class="text-white">${t("features.step3")}</p> </div> </div> <!--End--> </div> <div class="flex justify-center mt-12"> <a href="/" class="bg-gradient-to-r from-slate-900 to-slate-700 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 text-lg text-white dark:text-white">${t("features.startdownload")}</a> </div> </div> </section> </div> </div> </div> <!--Sention 1 End -->`;
}, "/home/hussain/zandkhqastro-main/src/components/features.astro", void 0);

const $$Astro$1 = createAstro("https://zandkhqastro.vercel.app");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const safeUrl = Astro2.url || new URL("/", Astro2.site || "http://localhost:4321");
  const lang = getLangFromUrl(safeUrl);
  const t = useTranslations(lang);
  const { dynamic = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative isolate pt-14 dark:bg-stone-950"> <div class="sm:pt-10"> <div class="mx-auto max-w-7xl"> <div class="mx-auto max-w-6xl text-center"> <h1 class="text-2xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">${t("hero.title")}</h1> <p class="mt-2 text-lg leading-8 text-gray-900 dark:text-gray-100">${t("hero.subtitle")}</p> ${renderComponent($$result, "InputScreen", null, { "client:only": "solid-js", "client:component-hydration": "only", "client:component-path": "/home/hussain/zandkhqastro-main/src/components/InputScreen", "client:component-export": "default" })} </div> </div> </div> </div>`;
}, "/home/hussain/zandkhqastro-main/src/components/hero.astro", void 0);

const $$Astro = createAstro("https://zandkhqastro.vercel.app");
const $$Newsletter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Newsletter;
  const safeUrl = Astro2.url || new URL("/", Astro2.site || "http://localhost:4321");
  const lang = getLangFromUrl(safeUrl);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto grid max-w-5xl mt-12 md:mt-20 grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8"> <div class="max-w-xl font-bold tracking-tight text-gray-900 dark:text-gray-200 lg:col-span-7"> <h2 class="sm:block lg:inline xl:block text-3xl sm:text-4xl">${t("newsletter.title")}</h2> <p class="sm:block lg:inline xl:block">${t("newsletter.subtitle")}</p> </div> <form class="w-full max-w-md lg:col-span-5 lg:pt-2"> <div class="flex gap-x-4"> <label for="email-address" class="sr-only">Email address</label> <input id="email-address" name="email" type="email" autocomplete="email" required class="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-100 dark:bg-stone-950 shadow-sm ring-1 ring-inset ring-gray-300 dark:placeholder:text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"${addAttribute(t("newsletter.input_placeholder"), "placeholder")}> ${renderComponent($$result, "Button", $$Button, {}, { "default": ($$result2) => renderTemplate`${t("newsletter.button_text")}` })} </div> <p class="mt-4 text-sm leading-6 text-gray-900 dark:text-gray-200"> ${t("newsletter.privacy")} ${renderComponent($$result, "Link", $$Link, { "href": "#", "style": "muted", "size": "xs" }, { "default": ($$result2) => renderTemplate`${t("newsletter.privacy_link")}` })} </p> </form> </div>`;
}, "/home/hussain/zandkhqastro-main/src/components/newsletter.astro", void 0);

export { $$Hero as $, $$Features as a, $$Faq as b, $$Newsletter as c };
