import { ArrowUpRight, MapPin } from "lucide-react";

export function CompanySections() {
  return (
    <section id="nacional" aria-labelledby="national-title" className="overflow-hidden border-y border-white/10 bg-[#0B1324] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
        <div>
          <p className="eyebrow">03 / COBERTURA NACIONAL</p>
          <h2 id="national-title" className="mt-5 max-w-4xl text-[clamp(2.7rem,7vw,6rem)] font-extrabold leading-[0.88] tracking-[-0.065em] text-white">Sua operação<br /><span className="text-[#FCFC04]">não tem fronteiras.</span></h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">Atendimento corporativo para indústrias e empresas de construção em todo o país, com base em Três Rios, Rio de Janeiro.</p>
        </div>
        <div className="flex flex-col gap-7 border-t border-white/15 pt-6 lg:min-w-[280px] lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <div className="flex items-start gap-3 text-slate-300"><MapPin size={18} className="mt-0.5 shrink-0 text-[#FCFC04]" aria-hidden="true" /><div><p className="text-[9px] font-bold tracking-[0.18em] text-slate-400">BASE OPERACIONAL</p><p className="mt-2 text-sm font-semibold text-white">Três Rios <span className="text-[#FCFC04]">/</span> RJ</p></div></div>
          <a href="https://wa.me/5524988148421" target="_blank" rel="noreferrer" className="group inline-flex min-h-14 items-center justify-between gap-6 border border-[#FCFC04] px-5 text-xs font-extrabold text-[#FCFC04] transition-colors duration-300 hover:bg-[#FCFC04] hover:text-[#060B14] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FCFC04]">Fale com um especialista <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" /></a>
        </div>
      </div>
      <div aria-hidden="true" className="mx-auto mt-14 max-w-[1440px] border-t border-white/10 pt-3 font-mono text-[9px] tracking-[0.2em] text-slate-500">TRÊS RIOS, RJ <span className="px-2 text-[#FCFC04]">—</span> ATENDIMENTO EM TODO O BRASIL</div>
    </section>
  );
}
