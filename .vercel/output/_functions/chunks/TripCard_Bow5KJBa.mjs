import { c as createComponent } from './astro-component_D0AmR3_3.mjs';
import 'piccolore';
import { p as maybeRenderHead, k as addAttribute, q as renderComponent, d as Fragment, u as renderTemplate } from './entrypoint_By11ULX2.mjs';
import { b as $$Icon } from './branches_CDUhclnE.mjs';
import { b as buildUrl } from './AppLayout_DENgJ5Ok.mjs';

const $$TripCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TripCard;
  const { trip, branchId, roleId } = Astro2.props;
  const pct = Math.min(100, Math.round(trip.enrolled / trip.capacity * 100));
  const capacityClass = pct >= 100 ? "is-over" : pct >= 90 ? "is-full" : "";
  const dateFmt = (s) => new Date(s).toLocaleDateString("nl-NL", { day: "2-digit", month: "short" });
  const status = { planned: "Gepland", active: "Actief", closed: "Afgesloten" }[trip.status];
  const statusBg = {
    planned: "bg-flow-soft text-flow-3 border border-flow-tint",
    active: "bg-go/10 text-go border border-go/20",
    closed: "bg-line-soft text-ink-soft border border-line"
  }[trip.status];
  const filterText = `${trip.title} ${trip.destination} ${branchId}`.toLowerCase();
  const coverMap = {
    "t-ski-krokus": "/photos/ski-krokus.webp",
    "t-ski-pasen": "/photos/ski-krokus.webp",
    "t-ski-school": "/photos/ski-krokus.webp",
    "t-surf-algarve": "/photos/surf-camp.webp",
    "t-surf-hossegor": "/photos/surf-summer.jpg",
    "t-surf-family": "/photos/surf-summer.jpg"
  };
  const cover = coverMap[trip.id];
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(buildUrl(`/pool/${trip.id}`, branchId, roleId), "href")} data-filter-item${addAttribute(filterText, "data-filter-text")} class="card hover:border-flow hover:shadow-lg hover:-translate-y-0.5 transition-all overflow-hidden flex flex-col group"> <div${addAttribute(`${cover ? "" : trip.coverGradientClass} h-32 relative overflow-hidden`, "class")}> ${cover && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <img${addAttribute(cover, "src")} alt="" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy"> <div${addAttribute(`absolute inset-0 ${trip.branchId === "ski" ? "bg-gradient-to-br from-navy/85 via-navy/40 to-navy/70" : "bg-gradient-to-br from-navy/75 via-flow/30 to-navy/65"}`, "class")}></div> ` })}`} ${!cover && renderTemplate`<svg class="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 400 120" preserveAspectRatio="none"> <path d="M0,70 Q100,30 200,70 T400,70" stroke="white" stroke-width="1.2" fill="none"></path> </svg>`} <div class="absolute inset-0 px-4 pt-3.5 pb-3 text-white flex flex-col justify-between"> <div class="flex items-start justify-between gap-2"> <span${addAttribute(`pill ${statusBg}`, "class")}>${status}</span> ${trip.isFeatured && renderTemplate`<span class="pill bg-white/15 text-white backdrop-blur">${renderComponent($$result, "Icon", $$Icon, { "name": "star", "size": 10 })} Featured</span>`} </div> <div class="flex items-center justify-between text-[11px] text-white/85 font-medium"> <span>${dateFmt(trip.start)} → ${dateFmt(trip.end)}</span> <span>€${trip.basePrice}</span> </div> </div> </div> <div class="p-4 flex-1 flex flex-col"> <div class="text-[15px] font-display font-bold leading-snug tracking-tight">${trip.title}</div> <div class="text-[12px] text-ink-soft mt-0.5">${trip.destination}</div> <div class="mt-3 flex items-center justify-between text-[12px]"> <div class="text-ink-soft">Bezetting</div> <div class="font-semibold">${trip.enrolled} <span class="text-mist font-normal">/ ${trip.capacity}</span></div> </div> <div${addAttribute(`capacity-bar mt-1.5 ${capacityClass}`, "class")}> <span${addAttribute(`width:${pct}%`, "style")}></span> </div> <div class="mt-3 pt-3 border-t border-line-soft flex items-center justify-between text-[12px]"> <span class="text-ink-soft">${trip.poolIds.length} ${trip.poolIds.length === 1 ? "pool" : "pools"}</span> <span class="text-flow font-semibold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
Open ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-right", "size": 12 })} </span> </div> </div> </a>`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo FlowTrack Travel/src/components/TripCard.astro", void 0);

export { $$TripCard as $ };
