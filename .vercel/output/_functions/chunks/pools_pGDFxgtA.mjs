import { c as createComponent } from './astro-component_D0AmR3_3.mjs';
import 'piccolore';
import { q as renderComponent, u as renderTemplate, p as maybeRenderHead, k as addAttribute } from './entrypoint_By11ULX2.mjs';
import { g as getAppContext, $ as $$AppLayout, b as buildUrl } from './AppLayout_DENgJ5Ok.mjs';
import { b as $$Icon, l as levelDef } from './branches_CDUhclnE.mjs';
import { t as tripsForBranch, a as poolsForTrip } from './trips_B73MWqG8.mjs';
import { g as getInstructor } from './instructors_BEQtM1K1.mjs';

const $$Pools = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Pools;
  const ctx = getAppContext(Astro2.url);
  const trips = tripsForBranch(ctx.branchId).filter((t) => t.status !== "closed");
  const tripsWithPools = trips.map((t) => ({ trip: t, pools: poolsForTrip(t.id) })).filter((tp) => tp.pools.length > 0);
  const dateFmt = (s) => new Date(s).toLocaleDateString("nl-NL", { day: "2-digit", month: "short" });
  return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, { "ctx": ctx, "current": "pools", "pageTitle": "Pool Builder", "pageSubtitle": "Kies een reis om de groepsindeling te beheren" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-5"> <div class="flex items-center gap-2"> <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-line bg-surface text-sm text-ink-soft w-full max-w-[320px] focus-within:border-flow transition-all"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "search", "size": 14, "class": "text-mist" })} <input type="text" placeholder="Zoek reis" class="bg-transparent outline-none flex-1 text-[13px]" data-filter-input="[data-filter-item]"> </div> <div class="flex-1"></div> ${ctx.role.permissions.canEditTrips && renderTemplate`<button data-modal="modal-new-trip" class="btn btn-primary">${renderComponent($$result2, "Icon", $$Icon, { "name": "plus", "size": 14 })} Nieuwe reis</button>`} </div> ${tripsWithPools.length === 0 && renderTemplate`<div class="card p-12 text-center"> <div class="w-14 h-14 rounded-2xl bg-flow-soft text-flow-3 flex items-center justify-center mx-auto mb-4"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "pools", "size": 26 })} </div> <h3 class="text-[18px] font-display font-bold tracking-tight">Nog geen pools voor deze branche</h3> <p class="text-[13px] text-ink-soft mt-1.5 max-w-md mx-auto">Voeg eerst een reis toe en importeer deelnemers om te beginnen met groepsindeling.</p> ${ctx.role.permissions.canEditTrips && renderTemplate`<button data-modal="modal-new-trip" class="btn btn-primary mt-5">${renderComponent($$result2, "Icon", $$Icon, { "name": "plus", "size": 14 })} Nieuwe reis</button>`} </div>`} <div class="space-y-4"> ${tripsWithPools.map(({ trip, pools }) => {
    const total = pools.reduce((s, p) => s + p.capacity, 0);
    const filled = pools.reduce((s, p) => s + p.participantIds.length, 0);
    const pct = total ? Math.round(filled / total * 100) : 0;
    return renderTemplate`<a${addAttribute(buildUrl(`/pool/${trip.id}`, ctx.branchId, ctx.roleId), "href")} data-filter-item${addAttribute(`${trip.title} ${trip.destination}`.toLowerCase(), "data-filter-text")} class="card p-5 lg:p-6 block hover:border-flow hover:shadow-lg transition-all group"> <div class="flex items-start justify-between gap-4 mb-4"> <div> <div class="flex items-center gap-2 mb-1"> <span class="pill bg-flow-soft text-flow-3 border border-flow-tint">${ctx.branch.name}</span> ${trip.isFeatured && renderTemplate`<span class="pill bg-sun/15 text-sun">${renderComponent($$result2, "Icon", $$Icon, { "name": "star", "size": 10 })} Featured</span>`} </div> <h3 class="text-[19px] font-display font-bold tracking-tight">${trip.title}</h3> <div class="text-[12.5px] text-ink-soft mt-0.5">${trip.destination} · ${dateFmt(trip.start)} → ${dateFmt(trip.end)}</div> </div> <div class="text-right"> <div class="text-[26px] font-display font-bold tracking-tight"${addAttribute(pct, "data-count")} data-count-suffix="%">0%</div> <div class="text-[10.5px] text-mist uppercase tracking-[0.06em]">ingedeeld</div> </div> </div> <div class="flex flex-wrap gap-1.5 mb-3"> ${pools.map((p) => {
      const lvl = levelDef(ctx.branchId, p.level);
      const inst = getInstructor(p.instructorId);
      return renderTemplate`<div class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-line bg-bg text-[12px]"> <span class="w-1.5 h-1.5 rounded-full"${addAttribute(`background:${lvl.swatch}`, "style")}></span> <span class="font-medium">${p.name}</span> <span class="text-mist font-mono text-[11px]">${p.participantIds.length}/${p.capacity}</span> ${!inst && renderTemplate`<span class="text-warn font-medium">· geen monitor</span>`} </div>`;
    })} </div> <div class="flex items-center justify-between pt-3 border-t border-line-soft text-[12px]"> <span class="text-ink-soft">${pools.length} ${pools.length === 1 ? "pool" : "pools"} · ${filled} van ${total} plaatsen</span> <span class="text-flow font-semibold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
Open builder ${renderComponent($$result2, "Icon", $$Icon, { "name": "arrow-right", "size": 12 })} </span> </div> </a>`;
  })} </div> </div> ` })}`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo FlowTrack Travel/src/pages/pools.astro", void 0);

const $$file = "/Users/jorikschut/Documents/Projecten-sites/Demo FlowTrack Travel/src/pages/pools.astro";
const $$url = "/pools";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pools,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
