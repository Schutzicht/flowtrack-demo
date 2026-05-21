import { c as createComponent } from './astro-component_D0AmR3_3.mjs';
import 'piccolore';
import { k as addAttribute, s as renderHead, t as renderSlot, u as renderTemplate, p as maybeRenderHead } from './entrypoint_By11ULX2.mjs';
import 'clsx';

const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Base;
  const { title = "FlowTrack Planner" } = Astro2.props;
  return renderTemplate`<html lang="nl"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Geist+Mono:wght@400;500&display=swap">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo FlowTrack Travel/src/layouts/Base.astro", void 0);

const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Icon;
  const { name, size = 18, class: className = "", stroke = 1.75 } = Astro2.props;
  return renderTemplate`${name === "dashboard" && renderTemplate`${maybeRenderHead()}<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor"${addAttribute(stroke, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}><rect x="3" y="3" width="7" height="9" rx="1.5"></rect><rect x="14" y="3" width="7" height="5" rx="1.5"></rect><rect x="14" y="12" width="7" height="9" rx="1.5"></rect><rect x="3" y="16" width="7" height="5" rx="1.5"></rect></svg>`}${name === "trips" && renderTemplate`<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor"${addAttribute(stroke, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}><path d="M3 7h18l-3 11H6L3 7z"></path><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"></path></svg>`}${name === "pools" && renderTemplate`<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor"${addAttribute(stroke, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="18" r="3"></circle></svg>`}${name === "users" && renderTemplate`<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor"${addAttribute(stroke, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 00-3-3.87"></path><path d="M16 3.13a4 4 0 010 7.75"></path></svg>`}${name === "staff" && renderTemplate`<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor"${addAttribute(stroke, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}><circle cx="12" cy="8" r="4"></circle><path d="M3 21v-1a6 6 0 016-6h6a6 6 0 016 6v1"></path></svg>`}${name === "settings" && renderTemplate`<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor"${addAttribute(stroke, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 01-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 010-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 014 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 010 4h-.1a1.7 1.7 0 00-1.5 1z"></path></svg>`}${name === "search" && renderTemplate`<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor"${addAttribute(stroke, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}><circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.3-4.3"></path></svg>`}${name === "plus" && renderTemplate`<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor"${addAttribute(stroke, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}><path d="M12 5v14M5 12h14"></path></svg>`}${name === "logout" && renderTemplate`<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor"${addAttribute(stroke, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"></path><path d="M16 17l5-5-5-5M21 12H9"></path></svg>`}${name === "check" && renderTemplate`<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor"${addAttribute(stroke, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}><path d="M20 6L9 17l-5-5"></path></svg>`}${name === "qr" && renderTemplate`<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor"${addAttribute(stroke, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect><path d="M14 14h3v3M21 14v3M14 21h3M21 17v4h-4"></path></svg>`}${name === "sparkles" && renderTemplate`<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor"${addAttribute(stroke, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}><path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2z"></path><path d="M19 14l.9 2.6L22 17.5l-2.1.9L19 21l-.9-2.6L16 17.5l2.1-.9L19 14z"></path></svg>`}${name === "arrow-down" && renderTemplate`<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor"${addAttribute(stroke, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}><path d="M12 5v14M19 12l-7 7-7-7"></path></svg>`}${name === "arrow-right" && renderTemplate`<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor"${addAttribute(stroke, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}><path d="M5 12h14M13 5l7 7-7 7"></path></svg>`}${name === "filter" && renderTemplate`<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor"${addAttribute(stroke, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}><polygon points="22 3 2 3 10 12.5 10 19 14 21 14 12.5 22 3"></polygon></svg>`}${name === "bell" && renderTemplate`<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor"${addAttribute(stroke, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}><path d="M6 8a6 6 0 1112 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M13.7 21a2 2 0 01-3.4 0"></path></svg>`}${name === "wave" && renderTemplate`<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor"${addAttribute(stroke, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}><path d="M2 12c2 0 2-2 5-2s3 2 5 2 3-2 5-2 3 2 5 2"></path><path d="M2 17c2 0 2-2 5-2s3 2 5 2 3-2 5-2 3 2 5 2"></path></svg>`}${name === "snowflake" && renderTemplate`<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor"${addAttribute(stroke, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}><path d="M12 2v20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07M2 12h20"></path></svg>`}${name === "mountain" && renderTemplate`<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor"${addAttribute(stroke, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}><path d="M3 20l6-11 4 6 3-4 5 9H3z"></path></svg>`}${name === "school" && renderTemplate`<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor"${addAttribute(stroke, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}><path d="M3 9l9-5 9 5-9 5-9-5z"></path><path d="M6 11v5c0 2 3 4 6 4s6-2 6-4v-5"></path></svg>`}${name === "briefcase" && renderTemplate`<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor"${addAttribute(stroke, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}><rect x="3" y="7" width="18" height="13" rx="2"></rect><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"></path></svg>`}${name === "shield" && renderTemplate`<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor"${addAttribute(stroke, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`}${name === "chevron-down" && renderTemplate`<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor"${addAttribute(stroke, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}><path d="M6 9l6 6 6-6"></path></svg>`}${name === "chevron-right" && renderTemplate`<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor"${addAttribute(stroke, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}><path d="M9 6l6 6-6 6"></path></svg>`}${name === "menu" && renderTemplate`<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor"${addAttribute(stroke, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}><path d="M3 6h18M3 12h18M3 18h18"></path></svg>`}${name === "x" && renderTemplate`<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor"${addAttribute(stroke, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}><path d="M18 6L6 18M6 6l12 12"></path></svg>`}${name === "star" && renderTemplate`<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linejoin="round"${addAttribute(className, "class")}><polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9 12 2"></polygon></svg>`}${name === "clock" && renderTemplate`<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor"${addAttribute(stroke, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")}><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>`}`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo FlowTrack Travel/src/components/Icon.astro", void 0);

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Logo;
  const { class: className = "", variant = "dark", size = "md" } = Astro2.props;
  const color = variant === "light" ? "#ffffff" : "#0A1525";
  const w = size === "sm" ? 110 : 130;
  const subColor = variant === "light" ? "rgba(255,255,255,0.55)" : "#5A6877";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`inline-flex items-center gap-2 ${className}`, "class")}> <svg${addAttribute(w, "width")}${addAttribute(w * (56.2 / 323.7), "height")} viewBox="0 0 323.7 56.2"${addAttribute(`color:${color}`, "style")} fill="currentColor" aria-label="FlowTrack"> <g> <path d="M41.5,55.3h-10.5c-.9,0-1.6-.7-1.6-1.6V11.2h-5c-3.2,0-3.9,.7-3.9,3.9v2.2h4.8c.9,0,1.6,.7,1.6,1.6v7.7c0,.9-.7,1.6-1.6,1.6h-4.8v25.4c0,.9-.7,1.6-1.6,1.6H8.2c-.9,0-1.6-.7-1.6-1.6V28.3H1.6c-.9,0-1.6-.7-1.6-1.6v-7.7c0-.9,.7-1.6,1.6-1.6H6.5v-1.7C6.5,4.5,11.1,0,22.4,0h19.1c.9,0,1.6,.7,1.6,1.6V53.7c0,.9-.7,1.6-1.6,1.6Z"></path> <path d="M68,16.5c-12.4,0-20.7,8-20.7,19.8s7.9,19.8,20.7,19.8,20.6-7.8,20.6-19.8-7.9-19.8-20.6-19.8Zm0,29.5c-4.5,0-7.4-3.7-7.4-9.6s2.8-9.6,7.4-9.6,7.4,3.6,7.4,9.6-2.8,9.6-7.4,9.6Z"></path> <path d="M135.3,55.3h-11.6c-.7,0-1.4-.5-1.6-1.2l-4.7-18.2-4.7,18.2c-.2,.7-.8,1.2-1.6,1.2h-11.6c-.7,0-1.4-.5-1.6-1.2l-10.2-34.7c-.1-.5,0-1,.3-1.4,.3-.4,.8-.7,1.3-.7h10.5c.8,0,1.4,.5,1.6,1.2l4.5,18.8,5.1-18.9c.2-.7,.8-1.2,1.6-1.2h9.7c.7,0,1.4,.5,1.6,1.2l5.1,18.9,4.5-18.8c.2-.7,.8-1.2,1.6-1.2h10.2c.5,0,1,.2,1.3,.7,.3,.4,.4,.9,.3,1.4l-10.2,34.7c-.2,.7-.8,1.2-1.6,1.2Z"></path> <path d="M169.9,55.3h-5.8c-10.8,0-14.8-3.9-14.8-14.4V8.5c0-.9,.7-1.6,1.6-1.6h10.6c.9,0,1.6,.7,1.6,1.6v8.9h6.7c.9,0,1.6,.7,1.6,1.6v7.7c0,.9-.7,1.6-1.6,1.6h-6.7v12c0,3,.4,3.5,3.2,3.5h3.5c.9,0,1.6,.7,1.6,1.6v8.3c0,.9-.7,1.6-1.6,1.6Z"></path> <path d="M187,55.3h-10.5c-.9,0-1.6-.7-1.6-1.6V19c0-.9,.7-1.6,1.6-1.6h10.1c.9,0,1.6,.7,1.6,1.6v.4c2.1-1.9,4.7-2.9,7.8-2.9s3.5,.2,5.8,1.7c.5,.4,.8,1,.7,1.7l-1.8,9c-.1,.5-.4,.9-.9,1.1-.4,.2-1,.2-1.4,0-1.3-.7-2.4-1-3.5-1-5.5,0-6,6-6,8.6v16c0,.9-.7,1.6-1.6,1.6Z"></path> <path d="M262.3,56.2c-13.1,0-20.6-7.2-20.6-19.8s7.9-19.8,20.6-19.8,18,5.7,18.8,14.6c0,.5-.1,.9-.4,1.3-.3,.3-.7,.5-1.2,.5h-10.4c-.8,0-1.5-.6-1.6-1.4-.3-1.8-1.9-4-5.2-4s-6.4,3.5-6.4,8.8,2.6,8.8,6.4,8.8,5-2.8,5.2-4c.1-.8,.8-1.3,1.6-1.3h10.4c.5,0,.9,.2,1.2,.5,.3,.3,.5,.8,.4,1.3-.7,7-6,14.6-18.8,14.6Z"></path> <path d="M322.1,55.3h-12.1c-.5,0-1.1-.3-1.4-.7l-7.9-11.7-2.1,2.3v8.5c0,.9-.7,1.6-1.6,1.6h-10.5c-.9,0-1.6-.7-1.6-1.6V1.6c0-.9,.7-1.6,1.6-1.6h10.5c.9,0,1.6,.7,1.6,1.6V28l9.1-10.1c.3-.3,.7-.5,1.2-.5h12c.7,0,1.2,.4,1.5,1,.3,.6,.1,1.3-.3,1.8l-12.1,12.9,13.5,19.8c.3,.5,.4,1.1,0,1.7-.3,.5-.8,.9-1.4,.9Z"></path> <path d="M220.3,16.5c-9.4,0-16.8,4.8-17.7,13.2,0,.5,.1,.9,.4,1.2,.3,.3,.7,.5,1.2,.5h9.9c.9,0,1.2-.6,1.3-1.5,.2-2.5,2.3-3.7,4.9-3.7s4.3,1.7,4.3,4.1-.3,.7-3.2,1.2l-6.6,1c-9.1,1.3-13.3,5.2-13.3,12.1s5,11.5,13.4,11.5,7.4-1,10-2.9v.4c0,.9,.7,1.6,1.6,1.6h10.1c.9,0,1.6-.7,1.6-1.6V30.7c0-9.4-6-14.2-17.9-14.2Zm5,23.4c0,5.1-3.7,7-7.2,7s-4.2-1.8-4.2-3.3,1.3-3.1,4-3.5l4.8-.7c.7,0,1.2-.2,1.7-.4l.9-.3v1.4Z"></path> </g> </svg> <span class="hidden xl:inline text-[10px] font-medium tracking-[0.14em] uppercase px-1.5 py-0.5 rounded"${addAttribute(`color:${subColor}; background:${variant === "light" ? "rgba(255,255,255,0.07)" : "rgba(10,21,37,0.06)"}`, "style")}>Planner</span> </div>`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo FlowTrack Travel/src/components/Logo.astro", void 0);

const $$Avatar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Avatar;
  const { src, initials, size = "md", color, ring = "none", class: className = "", title } = Astro2.props;
  const sizeMap = {
    xs: { w: 22, font: 9 },
    sm: { w: 28, font: 10.5 },
    md: { w: 32, font: 11.5 },
    lg: { w: 36, font: 12 },
    xl: { w: 48, font: 14 }
  };
  const s = sizeMap[size];
  const ringClass = ring === "white" ? "ring-2 ring-white" : ring === "flow" ? "ring-2 ring-flow ring-offset-2 ring-offset-bg" : "";
  const bg = color ? `${color}1A` : "";
  const text = color ? color : "";
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(`avatar inline-flex items-center justify-center rounded-full font-semibold shrink-0 overflow-hidden ${ringClass} ${className}`, "class")}${addAttribute(`width:${s.w}px; height:${s.w}px; font-size:${s.font}px; ${src ? "" : `background:${bg}; color:${text};`}`, "style")}${addAttribute(title, "title")}> ${src ? renderTemplate`<img${addAttribute(src, "src")}${addAttribute(initials, "alt")} class="w-full h-full object-cover" loading="lazy">` : initials} </span>`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo FlowTrack Travel/src/components/Avatar.astro", void 0);

const surfLevels = [
  { id: "beginner", label: "Beginner", shortLabel: "Beg", swatch: "#4FB3A9", cap: 8, order: 1 },
  { id: "intermediate", label: "Intermediate", shortLabel: "Int", swatch: "#2F6EA8", cap: 8, order: 2 },
  { id: "advanced", label: "Advanced", shortLabel: "Adv", swatch: "#6E3FB3", cap: 6, order: 3 },
  { id: "pro", label: "Pro", shortLabel: "Pro", swatch: "#B33F7F", cap: 4, order: 4 }
];
const skiLevels = [
  { id: "green", label: "Green", shortLabel: "G", swatch: "#3FA661", cap: 5, order: 1 },
  { id: "blue_bunnies", label: "Blue Bunnies", shortLabel: "BB", swatch: "#3B8FE2", cap: 6, order: 2 },
  { id: "red_racoons", label: "Red Racoons", shortLabel: "RR", swatch: "#D94C4C", cap: 7, order: 3 },
  { id: "black_bears", label: "Black Bears", shortLabel: "BLK", swatch: "#1A1A1A", cap: 8, order: 4 },
  { id: "yellow", label: "Yellow", shortLabel: "Y", swatch: "#E0A91A", cap: 9, order: 5 }
];
const schoolLevels = [
  { id: "beginner", label: "Starter", shortLabel: "S", swatch: "#4FB3A9", cap: 10, order: 1 },
  { id: "intermediate", label: "Gevorderd", shortLabel: "G", swatch: "#2F6EA8", cap: 10, order: 2 },
  { id: "advanced", label: "Sport-stream", shortLabel: "Sp", swatch: "#6E3FB3", cap: 8, order: 3 }
];
const corpLevels = [
  { id: "beginner", label: "Onboarding", shortLabel: "On", swatch: "#4FB3A9", cap: 6, order: 1 },
  { id: "intermediate", label: "Teams", shortLabel: "T", swatch: "#2F6EA8", cap: 6, order: 2 },
  { id: "advanced", label: "Leadership", shortLabel: "L", swatch: "#6E3FB3", cap: 5, order: 3 }
];
const branches = [
  {
    id: "ski",
    name: "Ski & Snowboard",
    tagline: "Skischool-indeling voor krokus, pasen en 8 winterweken",
    gradient: "gradient-ski",
    accentVar: "--color-ice",
    season: "winter",
    poolNoun: "skigroep",
    activityNoun: "skiles",
    levels: skiLevels
  },
  {
    id: "surf",
    name: "Surf & Beach",
    tagline: "Zomerkampen aan de Atlantische kust",
    gradient: "gradient-surf",
    accentVar: "--color-flow",
    season: "zomer",
    poolNoun: "surfgroep",
    activityNoun: "surfsessie",
    levels: surfLevels
  },
  {
    id: "school",
    name: "Schoolreizen",
    tagline: "Outdoor educatie voor middelbaar en MBO",
    gradient: "gradient-school",
    accentVar: "--color-sun",
    season: "jaar",
    poolNoun: "klasgroep",
    activityNoun: "activiteit",
    levels: schoolLevels
  },
  {
    id: "corporate",
    name: "Corporate & Teams",
    tagline: "Teambuilding en bedrijfsuitjes",
    gradient: "gradient-corp",
    accentVar: "--color-flow-2",
    season: "jaar",
    poolNoun: "teamgroep",
    activityNoun: "workshop",
    levels: corpLevels
  }
];
function getBranch(id) {
  return branches.find((b) => b.id === id) ?? branches[0];
}
const roles = [
  {
    id: "admin",
    name: "Lotte van Dijk",
    initials: "LD",
    email: "lotte@flowtrack-travel.com",
    scope: "Operations Lead — volledig beheer",
    avatar: "/photos/avatar-lotte.jpg",
    permissions: {
      canEditPools: true,
      canEditTrips: true,
      canSeeMedical: true,
      canManageStaff: true,
      canSeeFinance: true
    },
    visibleNavItems: ["dashboard", "reizen", "pools", "deelnemers", "medewerkers", "instellingen"]
  },
  {
    id: "coordinator",
    name: "Arnout De Smet",
    initials: "AD",
    email: "arnout@flowtrack-travel.com",
    scope: "Skischool-coordinator — plant clusters en wijst monitoren toe",
    avatar: "/photos/avatar-arnout.jpg",
    permissions: {
      canEditPools: true,
      canEditTrips: true,
      canSeeMedical: false,
      canManageStaff: true,
      canSeeFinance: false
    },
    visibleNavItems: ["dashboard", "reizen", "pools", "deelnemers", "medewerkers"]
  },
  {
    id: "instructor",
    name: "Stefan Auer",
    initials: "SA",
    email: "stefan@flowtrack-travel.com",
    scope: "Skimonitor — ziet alleen eigen groepen + QR scan",
    avatar: "/photos/avatar-stefan.png",
    permissions: {
      canEditPools: false,
      canEditTrips: false,
      canSeeMedical: false,
      canManageStaff: false,
      canSeeFinance: false
    },
    visibleNavItems: ["dashboard", "pools"]
  },
  {
    id: "medical",
    name: "Dr. Inez Coelho",
    initials: "IC",
    email: "inez@flowtrack-travel.com",
    scope: "Medische staf — toegang tot gezondheidsinfo",
    avatar: "/photos/avatar-inez.jpg",
    permissions: {
      canEditPools: false,
      canEditTrips: false,
      canSeeMedical: true,
      canManageStaff: false,
      canSeeFinance: false
    },
    visibleNavItems: ["dashboard", "deelnemers"]
  }
];
function getRole(id) {
  return roles.find((r) => r.id === id) ?? roles[0];
}
function levelDef(branchId, levelId) {
  return getBranch(branchId).levels.find((l) => l.id === levelId);
}

export { $$Avatar as $, $$Base as a, $$Icon as b, $$Logo as c, branches as d, getRole as e, getBranch as g, levelDef as l, roles as r };
