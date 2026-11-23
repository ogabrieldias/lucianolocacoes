import { ArrowUpRight } from "lucide-react";

export function CompanySections() {
  return (
    <>
      <section id="nacional" className="border-t border-white/10 bg-[#10131A] px-5 py-20 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1440px] flex-col gap-8 border border-white/10 bg-[#161B26] p-7 sm:p-10 md:flex-row md:items-center md:justify-between"><div><p className="eyebrow">03 / TODO O BRASIL</p><h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">Sua operação não tem fronteiras.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">Atendimento corporativo para indústrias e empresas de construção em todo o país.</p></div><a href="https://wa.me/5524988148421" target="_blank" rel="noreferrer" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-[#FCFC04] px-5 text-xs font-extrabold text-[#10131A] transition hover:bg-white">Fale com um especialista <ArrowUpRight size={15} /></a></div></section>

    </>
  );
}
