import { c as createComponent } from './astro-component_D0AmR3_3.mjs';
import 'piccolore';
import { q as renderComponent, u as renderTemplate, d as Fragment, p as maybeRenderHead, k as addAttribute } from './entrypoint_By11ULX2.mjs';
import { g as getAppContext, $ as $$AppLayout } from './AppLayout_DENgJ5Ok.mjs';
import { b as $$Icon, l as levelDef } from './branches_CDUhclnE.mjs';
import { i as instructorsForBranch } from './instructors_BEQtM1K1.mjs';

const $$Medewerkers = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Medewerkers;
  const ctx = getAppContext(Astro2.url);
  const list = instructorsForBranch(ctx.branchId);
  const term = ctx.branchId === "ski" ? "monitor" : "instructeur";
  return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, { "ctx": ctx, "current": "medewerkers", "pageTitle": "Medewerkers", "pageSubtitle": `${list.length} ${term}en voor ${ctx.branch.name}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-5"> <div class="flex flex-wrap items-center gap-2.5"> <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-line bg-surface text-sm text-ink-soft w-full max-w-[320px] focus-within:border-flow transition-all"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "search", "size": 14, "class": "text-mist" })} <input type="text"${addAttribute(`Zoek ${term}`, "placeholder")} class="bg-transparent outline-none flex-1 text-[13px]" data-filter-input="[data-filter-item]"> </div> <div class="flex items-center gap-1"> <button data-tab-group="staff-status" data-tab="all" class="tab is-active">Alle</button> <button data-tab-group="staff-status" data-tab="available" class="tab">Vrij</button> <button data-tab-group="staff-status" data-tab="busy" class="tab">Bezet</button> </div> <div class="flex-1"></div> ${ctx.role.permissions.canManageStaff && renderTemplate`<button data-modal="modal-add-staff" class="btn btn-primary">${renderComponent($$result2, "Icon", $$Icon, { "name": "plus", "size": 14 })} ${term.charAt(0).toUpperCase() + term.slice(1)} toevoegen</button>`} </div> <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"> ${list.map((i) => renderTemplate`<div class="card p-4 flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all" data-filter-item${addAttribute(`${i.name} ${i.languages.join(" ")} ${i.specialties.join(" ")}`.toLowerCase(), "data-filter-text")}> <div class="flex items-start gap-3"> <span class="avatar avatar-xl bg-flow-soft text-flow-3">${i.initials}</span> <div class="flex-1 min-w-0"> <div class="font-display font-bold text-[15px] truncate tracking-tight">${i.name}</div> <div class="text-[12px] text-ink-soft capitalize">${i.role ?? term}</div> </div> <span${addAttribute(`pill ${i.status === "available" ? "bg-go/15 text-go" : i.status === "busy" ? "bg-warn/15 text-warn" : "bg-line-soft text-mist"}`, "class")}> ${i.status === "available" ? "Vrij" : i.status === "busy" ? "Bezet" : "Off"} </span> </div> <div class="mt-4 pt-4 border-t border-line-soft space-y-2.5 text-[12.5px]"> <div class="flex items-center justify-between"> <span class="text-ink-soft">Rating</span> <span class="flex items-center gap-1 text-sun">${renderComponent($$result2, "Icon", $$Icon, { "name": "star", "size": 11 })} <span class="text-ink font-semibold">${i.rating.toFixed(1)}</span></span> </div> <div class="flex items-start justify-between gap-2"> <span class="text-ink-soft">Talen</span> <span class="font-semibold">${i.languages.join(" / ")}</span> </div> <div class="flex items-start justify-between gap-2"> <span class="text-ink-soft shrink-0">Specialisatie</span> <span class="flex flex-wrap gap-1 justify-end"> ${i.specialties.map((s) => {
    const lvl = levelDef(ctx.branchId, s);
    if (!lvl) return null;
    return renderTemplate`<span class="pill"${addAttribute(`background:${lvl.swatch}1A; color:${lvl.swatch}`, "style")}>${lvl.shortLabel}</span>`;
  })} </span> </div> </div> <div class="mt-4 flex gap-2"> <button${addAttribute(`Profiel ${i.name} geopend`, "data-toast")} class="btn btn-ghost flex-1">Profiel</button> <button${addAttribute(`Bericht naar ${i.name} verzonden`, "data-toast")} class="btn btn-soft flex-1">Bericht</button> </div> </div>`)} </div> </div>  `, "modals": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "modals" }, { "default": ($$result3) => renderTemplate` <dialog id="modal-add-staff"> <header class="px-5 py-4 border-b border-line flex items-start gap-3"> <div class="flex-1"> <h3 class="text-[17px] font-display font-bold">${term.charAt(0).toUpperCase() + term.slice(1)} toevoegen</h3> <p class="text-[12.5px] text-ink-soft mt-0.5">Stuur een uitnodiging via e-mail.</p> </div> <button type="button" data-close-modal class="btn-icon" aria-label="Sluiten">${renderComponent($$result3, "Icon", $$Icon, { "name": "x", "size": 16 })}</button> </header> <form data-demo-form="Uitnodiging verzonden" class="px-5 py-5 space-y-4"> <div class="grid grid-cols-2 gap-3"> <div> <label class="field-label">Voornaam</label> <input class="input" required> </div> <div> <label class="field-label">Achternaam</label> <input class="input" required> </div> <div class="col-span-2"> <label class="field-label">E-mail</label> <input type="email" class="input" required> </div> <div> <label class="field-label">Rol</label> <select class="input"> <option>${term}</option> <option>coordinator</option> </select> </div> <div> <label class="field-label">Talen</label> <input class="input" placeholder="NL, EN"> </div> </div> <footer class="flex items-center justify-end gap-2 pt-2 -mx-5 -mb-5 px-5 py-4 bg-bg-2 border-t border-line rounded-b-[18px]"> <button type="button" data-close-modal class="btn btn-ghost">Annuleren</button> <button type="submit" class="btn btn-primary">Uitnodiging sturen</button> </footer> </form> </dialog> ` })}` })}`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo FlowTrack Travel/src/pages/medewerkers.astro", void 0);

const $$file = "/Users/jorikschut/Documents/Projecten-sites/Demo FlowTrack Travel/src/pages/medewerkers.astro";
const $$url = "/medewerkers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Medewerkers,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
