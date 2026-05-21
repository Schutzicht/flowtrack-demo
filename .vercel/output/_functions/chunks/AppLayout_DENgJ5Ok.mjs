import { c as createComponent } from './astro-component_D0AmR3_3.mjs';
import 'piccolore';
import { p as maybeRenderHead, k as addAttribute, q as renderComponent, u as renderTemplate, t as renderSlot } from './entrypoint_By11ULX2.mjs';
import { e as getRole, g as getBranch, c as $$Logo, d as branches, b as $$Icon, $ as $$Avatar, r as roles, a as $$Base } from './branches_CDUhclnE.mjs';

function getAppContext(url) {
  const b = url.searchParams.get("b") ?? "ski";
  const r = url.searchParams.get("r") ?? "admin";
  return {
    branch: getBranch(b),
    role: getRole(r),
    branchId: b,
    roleId: r
  };
}
function buildUrl(path, b, r) {
  const params = new URLSearchParams();
  if (b) params.set("b", b);
  if (r) params.set("r", r);
  const qs = params.toString();
  return qs ? `${path}?${qs}` : path;
}

const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Sidebar;
  const { ctx, current } = Astro2.props;
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "dashboard", href: "/dashboard" },
    { id: "reizen", label: "Reizen", icon: "trips", href: "/reizen" },
    { id: "pools", label: "Pool Builder", icon: "pools", href: "/pools" },
    { id: "deelnemers", label: "Deelnemers", icon: "users", href: "/deelnemers" },
    { id: "medewerkers", label: "Medewerkers", icon: "staff", href: "/medewerkers" },
    { id: "instellingen", label: "Instellingen", icon: "settings", href: "/instellingen" }
  ];
  const allowed = navItems.filter((n) => ctx.role.visibleNavItems.includes(n.id));
  const branchIconMap = {
    surf: "wave",
    ski: "snowflake",
    school: "school",
    corporate: "briefcase"
  };
  return renderTemplate`${maybeRenderHead()}<aside class="hidden lg:flex fixed inset-y-0 left-0 w-[260px] flex-col bg-navy text-white z-30"> <div class="px-5 pt-5 pb-4"> <a${addAttribute(buildUrl("/dashboard", ctx.branchId, ctx.roleId), "href")} class="block"> ${renderComponent($$result, "Logo", $$Logo, { "variant": "light" })} </a> </div> <div class="px-4 pt-2"> <div class="px-2 mb-2 text-[10px] uppercase tracking-[0.08em] text-white/35 font-semibold">Branche</div> <div class="space-y-0.5"> ${branches.map((b) => {
    const active = b.id === ctx.branchId;
    return renderTemplate`<a${addAttribute(buildUrl(`/${current}`, b.id, ctx.roleId), "href")}${addAttribute(`nav-item ${active ? "is-active" : ""}`, "class")}> ${renderComponent($$result, "Icon", $$Icon, { "name": branchIconMap[b.id], "size": 16, "stroke": 1.7, "class": active ? "text-flow" : "opacity-70" })} <span class="flex-1 truncate">${b.name}</span> ${active && renderTemplate`<span class="w-1.5 h-1.5 rounded-full bg-flow pulse-ring"></span>`} </a>`;
  })} </div> </div> <div class="px-4 pt-7 flex-1 overflow-y-auto scrollbar-thin"> <div class="px-2 mb-2 text-[10px] uppercase tracking-[0.08em] text-white/35 font-semibold">Menu</div> <nav class="space-y-0.5"> ${allowed.map((item) => {
    const isActive = current === item.id;
    return renderTemplate`<a${addAttribute(buildUrl(item.href, ctx.branchId, ctx.roleId), "href")}${addAttribute(`nav-item ${isActive ? "is-active" : ""}`, "class")}> ${renderComponent($$result, "Icon", $$Icon, { "name": item.icon, "size": 16, "stroke": 1.7, "class": isActive ? "" : "opacity-70" })} <span class="flex-1">${item.label}</span> </a>`;
  })} </nav> ${ctx.role.permissions.canEditTrips && renderTemplate`<button data-modal="modal-new-trip" class="mt-5 w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-white/[0.07] hover:bg-white/[0.12] text-white text-[13px] font-medium transition-colors border border-white/[0.06]"> ${renderComponent($$result, "Icon", $$Icon, { "name": "plus", "size": 14 })}
Nieuwe reis
</button>`} </div> <div class="p-3 border-t border-white/[0.06]"> <div class="flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-white/[0.04] cursor-pointer"> ${renderComponent($$result, "Avatar", $$Avatar, { "src": ctx.role.avatar, "initials": ctx.role.initials, "size": "lg" })} <div class="flex-1 min-w-0"> <div class="text-[13px] font-semibold leading-tight truncate">${ctx.role.name}</div> <div class="text-[11px] text-white/55 leading-tight truncate">${ctx.role.email}</div> </div> <a href="/" title="Uitloggen" class="btn-icon text-white/55 hover:text-white hover:bg-white/[0.08]"> ${renderComponent($$result, "Icon", $$Icon, { "name": "logout", "size": 15 })} </a> </div> </div> </aside> <nav class="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-navy text-white border-t border-white/10 px-1 py-1.5 flex justify-around"> ${allowed.slice(0, 5).map((item) => {
    const isActive = current === item.id;
    return renderTemplate`<a${addAttribute(buildUrl(item.href, ctx.branchId, ctx.roleId), "href")}${addAttribute(`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg ${isActive ? "text-flow" : "text-white/60"}`, "class")}> ${renderComponent($$result, "Icon", $$Icon, { "name": item.icon, "size": 18, "stroke": 1.7 })} <span class="text-[10px] font-medium">${item.label}</span> </a>`;
  })} </nav>`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo FlowTrack Travel/src/components/Sidebar.astro", void 0);

const $$TopBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TopBar;
  const { ctx, current, title, subtitle } = Astro2.props;
  const notifications = [
    { tone: "flow", title: "Auto-indeling gestart", meta: "2 minuten geleden", text: "Arnout liet 18 Red Racoons automatisch verdelen over C1-C3" },
    { tone: "warn", title: "Monitor ontbreekt", meta: "17:42", text: "Pool Blue Bunnies B3 in Alpe d'Huez heeft nog geen monitor" },
    { tone: "go", title: "Pre-trip enquête", meta: "vanmorgen", text: "12 nieuwe antwoorden binnen, niveaus automatisch bijgewerkt" },
    { tone: "flow", title: "Nieuwe boekingen", meta: "gisteren", text: "3 inschrijvingen voor Algarve Surf Camp via partner-school" }
  ];
  const toneColor = {
    flow: "bg-flow",
    warn: "bg-warn",
    go: "bg-go",
    no: "bg-no"
  };
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-20 bg-bg/85 backdrop-blur-md"> <div class="px-5 lg:px-10 pt-5 pb-4 flex items-center gap-4 border-b border-line"> <div class="flex-1 min-w-0"> ${title && renderTemplate`<h1 class="text-[22px] lg:text-[26px] font-display font-bold leading-tight tracking-tight truncate">${title}</h1>`} ${subtitle && renderTemplate`<p class="text-[12.5px] lg:text-[13px] text-ink-soft mt-0.5 truncate">${subtitle}</p>`} </div>  <div class="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-line bg-surface w-[280px] focus-within:border-flow focus-within:shadow-[0_0_0_3px_rgba(17,181,197,0.12)] transition-all"> ${renderComponent($$result, "Icon", $$Icon, { "name": "search", "size": 14, "class": "text-mist" })} <input type="text" placeholder="Zoek deelnemer of reis" class="bg-transparent outline-none flex-1 text-[13px]" data-global-search data-filter-input="[data-filter-item]"> <kbd class="hidden lg:inline text-[10px] px-1.5 py-0.5 rounded bg-line-soft text-mist font-mono">⌘K</kbd> </div>  <details class="dd relative"> <summary class="btn-icon relative"> ${renderComponent($$result, "Icon", $$Icon, { "name": "bell", "size": 17 })} <span class="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-coral"></span> </summary> <div class="dd-menu right-0 w-[340px]"> <div class="px-4 py-3 border-b border-line flex items-center justify-between"> <span class="text-[13px] font-semibold">Notificaties</span> <button data-toast="Notificaties gemarkeerd als gelezen" class="text-[11.5px] text-flow font-medium hover:underline">Markeer als gelezen</button> </div> <div class="max-h-[360px] overflow-y-auto scrollbar-thin"> ${notifications.map((n) => renderTemplate`<button class="w-full px-4 py-3 flex items-start gap-3 hover:bg-line-soft text-left border-b border-line-soft last:border-0"> <span${addAttribute(`mt-1 w-2 h-2 rounded-full shrink-0 ${toneColor[n.tone]}`, "class")}></span> <div class="flex-1 min-w-0"> <div class="flex items-center justify-between gap-2"> <span class="text-[13px] font-semibold truncate">${n.title}</span> <span class="text-[10.5px] text-mist shrink-0">${n.meta}</span> </div> <p class="text-[12px] text-ink-soft leading-snug mt-0.5">${n.text}</p> </div> </button>`)} </div> </div> </details>  <details class="dd relative"> <summary class="flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-line-soft cursor-pointer"> ${renderComponent($$result, "Avatar", $$Avatar, { "src": ctx.role.avatar, "initials": ctx.role.initials, "size": "lg" })} <div class="hidden xl:block text-left"> <div class="text-[12.5px] font-semibold leading-tight">${ctx.role.name}</div> <div class="text-[10.5px] text-ink-soft leading-tight">${ctx.role.scope.split(" — ")[0]}</div> </div> ${renderComponent($$result, "Icon", $$Icon, { "name": "chevron-down", "size": 14, "class": "text-mist hidden xl:block" })} </summary> <div class="dd-menu right-0 w-[340px]"> <div class="px-4 py-3 border-b border-line bg-bg-2"> <div class="text-[10px] uppercase tracking-wide text-mist font-semibold">Wissel rol (demo)</div> </div> <div class="p-1.5"> ${roles.map((r) => renderTemplate`<a${addAttribute(buildUrl(`/${current}`, ctx.branchId, r.id), "href")}${addAttribute(`flex items-start gap-3 p-2.5 rounded-lg hover:bg-line-soft transition-colors ${r.id === ctx.roleId ? "bg-line-soft" : ""}`, "class")}> ${renderComponent($$result, "Avatar", $$Avatar, { "src": r.avatar, "initials": r.initials, "size": "lg" })} <div class="flex-1 min-w-0"> <div class="flex items-center gap-2"> <span class="text-[13px] font-semibold">${r.name}</span> ${r.id === ctx.roleId && renderTemplate`<span class="pill bg-flow text-white">actief</span>`} </div> <div class="text-[11.5px] text-ink-soft leading-snug">${r.scope}</div> </div> </a>`)} </div> <div class="border-t border-line p-2"> <a href="/" class="dd-item rounded-lg"> ${renderComponent($$result, "Icon", $$Icon, { "name": "logout", "size": 14, "class": "text-mist" })} <span>Uitloggen</span> </a> </div> </div> </details> </div> </header>  <dialog id="modal-new-trip" style="max-width:540px"> <header class="px-5 py-4 border-b border-line flex items-start gap-3"> <div class="flex-1"> <h3 class="text-[17px] font-display font-bold">Nieuwe reis aanmaken</h3> <p class="text-[12.5px] text-ink-soft mt-0.5">Vul de basisinfo in. Pools voeg je later toe via de Pool Builder.</p> </div> <button type="button" data-close-modal aria-label="Sluiten" class="btn-icon">${renderComponent($$result, "Icon", $$Icon, { "name": "x", "size": 16 })}</button> </header> <form data-demo-form="Reis aangemaakt — open Pool Builder om groepen toe te voegen" class="px-5 py-5 space-y-4"> <div> <label class="field-label">Reisnaam</label> <input class="input" placeholder="bv. Algarve Surf Camp 16+" required> </div> <div class="grid grid-cols-2 gap-3"> <div> <label class="field-label">Branche</label> <select class="input" required> <option value="ski">Ski & Snowboard</option> <option value="surf">Surf & Beach</option> <option value="school">Schoolreizen</option> <option value="corporate">Corporate & Teams</option> </select> </div> <div> <label class="field-label">Bestemming</label> <input class="input" placeholder="Bv. Aljezur, Portugal" required> </div> <div> <label class="field-label">Startdatum</label> <input type="date" class="input" required> </div> <div> <label class="field-label">Einddatum</label> <input type="date" class="input" required> </div> <div> <label class="field-label">Capaciteit</label> <input type="number" class="input" placeholder="32" min="1" required> </div> <div> <label class="field-label">Prijs vanaf</label> <input type="number" class="input" placeholder="695" min="0" required> </div> </div> <div> <label class="field-label">Beschrijving</label> <textarea class="input" rows="3" placeholder="Korte omschrijving voor je team"></textarea> </div> <footer class="flex items-center justify-end gap-2 pt-2 -mx-5 -mb-5 px-5 py-4 bg-bg-2 border-t border-line rounded-b-[18px]"> <button type="button" data-close-modal class="btn btn-ghost">Annuleren</button> <button type="submit" class="btn btn-primary">Reis aanmaken</button> </footer> </form> </dialog>`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo FlowTrack Travel/src/components/TopBar.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$AppLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$AppLayout;
  const { ctx, current, title, pageTitle, pageSubtitle } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title ?? "FlowTrack Planner" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="min-h-screen bg-bg"> ', ' <div class="lg:pl-[260px] min-h-screen flex flex-col"> ', ' <main class="flex-1 px-5 lg:px-10 py-6 lg:py-9 animate-fade-up"> ', ' </main> </div> </div> <div id="toast-host" class="fixed bottom-6 right-6 z-[100] flex flex-col gap-2 pointer-events-none"></div> ', ' <script src="/scripts/app.js"><\/script> '])), maybeRenderHead(), renderComponent($$result2, "Sidebar", $$Sidebar, { "ctx": ctx, "current": current }), renderComponent($$result2, "TopBar", $$TopBar, { "ctx": ctx, "current": current, "title": pageTitle, "subtitle": pageSubtitle }), renderSlot($$result2, $$slots["default"]), renderSlot($$result2, $$slots["modals"])) })}`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo FlowTrack Travel/src/layouts/AppLayout.astro", void 0);

export { $$AppLayout as $, buildUrl as b, getAppContext as g };
