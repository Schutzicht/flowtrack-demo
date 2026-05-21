import { c as createComponent } from './astro-component_D0AmR3_3.mjs';
import 'piccolore';
import { q as renderComponent, u as renderTemplate, p as maybeRenderHead, d as Fragment } from './entrypoint_By11ULX2.mjs';
import { g as getAppContext, $ as $$AppLayout } from './AppLayout_DENgJ5Ok.mjs';
import { $ as $$TripCard } from './TripCard_Bow5KJBa.mjs';
import { b as $$Icon } from './branches_CDUhclnE.mjs';
import { t as tripsForBranch } from './trips_B73MWqG8.mjs';

const $$Reizen = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Reizen;
  const ctx = getAppContext(Astro2.url);
  const trips = tripsForBranch(ctx.branchId);
  const planned = trips.filter((t) => t.status === "planned");
  const closed = trips.filter((t) => t.status === "closed");
  return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, { "ctx": ctx, "current": "reizen", "pageTitle": "Reizen", "pageSubtitle": `${trips.length} reizen voor ${ctx.branch.name}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-8"> <div class="flex flex-wrap items-center gap-2.5"> <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-line bg-surface text-sm text-ink-soft w-full max-w-[320px] focus-within:border-flow focus-within:shadow-[0_0_0_3px_rgba(17,181,197,0.12)] transition-all"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "search", "size": 14, "class": "text-mist" })} <input type="text" placeholder="Zoek op naam of bestemming" class="bg-transparent outline-none flex-1 text-[13px]" data-filter-input="[data-filter-item]"> </div> <div class="flex items-center gap-1"> <button data-tab-group="trip-status" data-tab="all" class="tab is-active">Alle</button> <button data-tab-group="trip-status" data-tab="planned" class="tab">Gepland</button> <button data-tab-group="trip-status" data-tab="closed" class="tab">Afgesloten</button> </div> <div class="flex-1"></div> <button data-toast="Filters geopend (mock)" class="btn btn-ghost">${renderComponent($$result2, "Icon", $$Icon, { "name": "filter", "size": 14 })} Filter</button> <button data-toast="Geexporteerd naar trips.csv" class="btn btn-ghost">${renderComponent($$result2, "Icon", $$Icon, { "name": "arrow-down", "size": 14 })} Exporteer</button> ${ctx.role.permissions.canEditTrips && renderTemplate`<button data-modal="modal-new-trip" class="btn btn-primary">${renderComponent($$result2, "Icon", $$Icon, { "name": "plus", "size": 14 })} Nieuwe reis</button>`} </div> <section data-tab-panel="all" data-tab-group="trip-status"> <h2 class="text-[12.5px] uppercase tracking-[0.08em] text-mist font-semibold mb-3">Gepland</h2> <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8"> ${planned.map((t) => renderTemplate`${renderComponent($$result2, "TripCard", $$TripCard, { "trip": t, "branchId": ctx.branchId, "roleId": ctx.roleId })}`)} </div> ${closed.length > 0 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <h2 class="text-[12.5px] uppercase tracking-[0.08em] text-mist font-semibold mb-3">Afgesloten</h2> <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"> ${closed.map((t) => renderTemplate`${renderComponent($$result3, "TripCard", $$TripCard, { "trip": t, "branchId": ctx.branchId, "roleId": ctx.roleId })}`)} </div> ` })}`} </section> <section data-tab-panel="planned" data-tab-group="trip-status" style="display:none"> <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"> ${planned.map((t) => renderTemplate`${renderComponent($$result2, "TripCard", $$TripCard, { "trip": t, "branchId": ctx.branchId, "roleId": ctx.roleId })}`)} </div> </section> <section data-tab-panel="closed" data-tab-group="trip-status" style="display:none"> <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"> ${closed.length === 0 ? renderTemplate`<div class="col-span-full text-center py-12 text-ink-soft text-[14px]">Geen afgesloten reizen.</div>` : closed.map((t) => renderTemplate`${renderComponent($$result2, "TripCard", $$TripCard, { "trip": t, "branchId": ctx.branchId, "roleId": ctx.roleId })}`)} </div> </section> </div> ` })}`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo FlowTrack Travel/src/pages/reizen.astro", void 0);

const $$file = "/Users/jorikschut/Documents/Projecten-sites/Demo FlowTrack Travel/src/pages/reizen.astro";
const $$url = "/reizen";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Reizen,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
