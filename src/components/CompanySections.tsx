import { ArrowUpRight } from "lucide-react";

export function CompanySections() {
  return (
    <>
      <section id="nacional" className="border-t border-white/10 bg-[#10131A] px-5 py-20 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1440px] flex-col gap-8 border border-white/10 bg-[#161B26] p-7 sm:p-10 md:flex-row md:items-center md:justify-between"><div><p className="eyebrow">03 / TODO O BRASIL</p><h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">Sua operação não tem fronteiras.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">Atendimento corporativo para indústrias e empresas de construção em todo o país.</p></div><a href="https://wa.me/5524988148421" target="_blank" rel="noreferrer" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-[#FCFC04] px-5 text-xs font-extrabold text-[#10131A] transition hover:bg-white">Fale com um especialista <ArrowUpRight size={15} /></a></div></section>

      <footer id="contato" className="border-t border-white/10 bg-[#0B0F17] px-5 py-16 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 md:flex-row md:items-end"><div><p className="eyebrow">VAMOS CONSTRUIR UMA PARCERIA</p><h2 className="mt-5 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl">A próxima etapa da sua operação começa aqui.</h2></div><div className="md:text-right"><a href="https://wa.me/5524988148421?text=Olá%2C%20quero%20solicitar%20uma%20proposta%20de%20locação." target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-3 bg-[#FCFC04] px-5 text-xs font-extrabold text-[#10131A] transition hover:bg-white">Solicitar proposta <ArrowUpRight size={15} /></a><p className="mt-4 text-xs text-slate-400">WhatsApp <span className="text-white">(24) 98814-8421</span></p></div></div><div className="mx-auto mt-14 max-w-[1440px] border-t border-white/10 pt-5 text-[10px] tracking-wide text-slate-500">© {new Date().getFullYear()} Luciano Locações. Todos os direitos reservados.</div></footer>
    </>
  );
}
