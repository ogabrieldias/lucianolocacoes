import { Building2, MessageCircle, Truck, Users } from "lucide-react";

const values = [
  {
    icon: Truck,
    number: "01",
    title: "Frota Padronizada e Nova",
    description: "Veículos Volkswagen 6.170 ano 2022 com rigoroso padrão de conservação.",
  },
  {
    icon: Building2,
    number: "02",
    title: "Foco em Contratos Corporativos",
    description: "Previsibilidade financeira e disponibilidade dedicada para obras e plantas industriais.",
  },
  {
    icon: Users,
    number: "03",
    title: "Operação Sem Motorista",
    description: "Liberdade total para sua equipe, conduzida por profissionais próprios da sua empresa.",
  },
  {
    icon: MessageCircle,
    number: "04",
    title: "Atendimento Direto e Transparente",
    description: "Relacionamento próximo, sem burocracia desnecessária, das 06:00 às 18:00.",
  },
];

export function CorporateValueSection() {
  return (
    <section id="diferenciais" aria-labelledby="corporate-value-title" className="border-t border-white/10 bg-[#0B0F17] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16 lg:pb-16">
          <div>
            <p className="eyebrow">02 / PARCERIA CORPORATIVA</p>
            <h2 id="corporate-value-title" className="section-title mt-5 max-w-3xl">Compromisso com a <span className="text-[#FCFC04]">continuidade da sua operação</span></h2>
          </div>
          <div className="max-w-xl lg:justify-self-end">
            <p className="text-sm leading-7 text-slate-300">A Luciano Locações é parceira de indústrias e empresas de construção que exigem seriedade e uma relação transparente. Sediada em Três Rios (RJ), conta com estrutura logística para atender projetos e contratos em todo o território nacional.</p>
            <div className="mt-6 flex items-center gap-3 border-l-2 border-[#0048D6] pl-4">
              <span className="h-2 w-2 shrink-0 bg-[#FCFC04]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Seriedade no compromisso. Parceria em cada etapa.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {values.map(({ icon: Icon, number, title, description }) => (
            <article key={title} className="group flex min-h-[260px] flex-col border border-white/10 bg-[#161B26] p-6 transition-colors duration-300 hover:border-[#0048D6]/70 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center border border-[#0048D6]/35 bg-[#0048D6]/10 text-[#FCFC04] transition-colors group-hover:bg-[#0048D6]/20">
                  <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="font-mono text-[10px] tracking-widest text-slate-600">{number}</span>
              </div>
              <h3 className="mt-8 max-w-[15rem] text-lg font-bold leading-snug text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
