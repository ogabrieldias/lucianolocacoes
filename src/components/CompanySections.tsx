import { ArrowUpRight, BadgeCheck, Globe2, Truck } from "lucide-react";

const benefits = [
  { icon: Truck, title: "Frota nova e confiável", text: "Caminhões Volkswagen 6.170 preparados para manter sua operação em movimento." },
  { icon: BadgeCheck, title: "Contrato sob medida", text: "Uma parceria B2B alinhada ao ritmo, à demanda e às necessidades da sua empresa." },
  { icon: Globe2, title: "Atendimento nacional", text: "Capacidade para atender indústrias e grandes obras em todo o Brasil." },
];

export function CompanySections() {
  return (
    <>
      <section id="frota" className="border-t border-white/10 bg-[#10131A] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div><p className="eyebrow">01 / NOSSA FROTA</p><h2 className="section-title mt-5">A estrutura certa para <span className="text-[#FCFC04]">seguir em frente.</span></h2></div>
          <div className="max-w-xl lg:justify-self-end"><p className="text-sm leading-7 text-slate-400">Disponibilizamos caminhões Volkswagen 6.170 novos para contratos corporativos. Uma solução direta para ampliar sua capacidade operacional com previsibilidade e suporte.</p><a href="#contrato" className="mt-7 inline-flex items-center gap-2 text-xs font-bold text-white transition hover:text-[#FCFC04]">Converse com nossa equipe <ArrowUpRight size={15} /></a></div>
        </div>
        <div className="mx-auto mt-14 max-w-[1440px] overflow-hidden border border-white/10 bg-[#161B26]">
          <div className="grid min-h-[270px] md:grid-cols-2">
            <div className="relative min-h-[240px] overflow-hidden bg-[#080B11]"><img src="/logo/logo.png" alt="Caminhão Volkswagen azul em frente a um edifício corporativo" className="absolute inset-0 h-full w-full object-cover object-[35%_center] opacity-90" /><div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#161B26]/75" /></div>
            <div className="flex flex-col justify-center p-7 sm:p-10"><span className="text-[10px] font-bold tracking-[0.2em] text-[#FCFC04]">VOLKSWAGEN 6.170</span><h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">Pronto para a sua próxima operação.</h3><p className="mt-4 max-w-md text-sm leading-6 text-slate-400">Frota nova, locação por contrato e uma equipe comprometida com a continuidade do seu negócio.</p><a href="#contrato" className="mt-7 inline-flex w-fit items-center gap-2 border border-white/15 px-4 py-3 text-xs font-bold text-white transition hover:border-[#FCFC04] hover:text-[#FCFC04]">Solicitar condições <ArrowUpRight size={14} /></a></div>
          </div>
        </div>
      </section>

      <section id="diferenciais" className="border-t border-white/10 bg-[#0B0F17] px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]"><p className="eyebrow">02 / UMA PARCERIA QUE ENTREGA</p><div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end"><h2 className="section-title max-w-2xl">Mais eficiência para <span className="text-[#FCFC04]">grandes desafios.</span></h2><p className="max-w-sm text-sm leading-6 text-slate-400">Foco no que importa: uma operação segura, confiável e pronta para acompanhar o seu negócio.</p></div>
          <div className="mt-12 grid gap-3 md:grid-cols-3">{benefits.map(({ icon: Icon, title, text }, index) => <article key={title} className="border border-white/10 bg-[#161B26] p-7 sm:p-8"><div className="flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center border border-[#0048D6]/50 bg-[#0048D6]/10 text-[#FCFC04]"><Icon size={20} /></span><span className="font-mono text-[10px] text-slate-600">0{index + 1}</span></div><h3 className="mt-8 text-lg font-bold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{text}</p></article>)}</div>
        </div>
      </section>

      <section id="nacional" className="border-t border-white/10 bg-[#10131A] px-5 py-20 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1440px] flex-col gap-8 border border-white/10 bg-[#161B26] p-7 sm:p-10 md:flex-row md:items-center md:justify-between"><div><p className="eyebrow">03 / TODO O BRASIL</p><h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">Sua operação não tem fronteiras.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">Atendimento corporativo para indústrias e empresas de construção em todo o país.</p></div><a href="https://wa.me/5524988148421" target="_blank" rel="noreferrer" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-[#FCFC04] px-5 text-xs font-extrabold text-[#10131A] transition hover:bg-white">Fale com um especialista <ArrowUpRight size={15} /></a></div></section>

      <footer id="contrato" className="border-t border-white/10 bg-[#0B0F17] px-5 py-16 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 md:flex-row md:items-end"><div><p className="eyebrow">VAMOS CONSTRUIR UMA PARCERIA</p><h2 className="mt-5 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl">A próxima etapa da sua operação começa aqui.</h2></div><div className="md:text-right"><a href="https://wa.me/5524988148421?text=Olá%2C%20quero%20solicitar%20uma%20proposta%20de%20locação." target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-3 bg-[#FCFC04] px-5 text-xs font-extrabold text-[#10131A] transition hover:bg-white">Solicitar proposta <ArrowUpRight size={15} /></a><p className="mt-4 text-xs text-slate-400">WhatsApp <span className="text-white">(24) 98814-8421</span></p></div></div><div className="mx-auto mt-14 max-w-[1440px] border-t border-white/10 pt-5 text-[10px] tracking-wide text-slate-500">© {new Date().getFullYear()} Luciano Locações. Todos os direitos reservados.</div></footer>
    </>
  );
}
