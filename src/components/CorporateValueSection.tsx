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
    <section id="diferenciais" aria-labelledby="corporate-value-title" className="border-t border-white/10 bg-[#10131A] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <div className="flex flex-col justify-between lg:min-h-[540px]">
          <div>
            <p className="eyebrow">02 / PARCERIA CORPORATIVA</p>
            <h2 id="corporate-value-title" className="section-title mt-6 max-w-xl leading-[0.95]">Seriedade para manter <span className="text-[#FCFC04]">sua operação em movimento.</span></h2>
            <p className="mt-7 max-w-md text-base leading-7 text-slate-300">Parceria direta e transparente para indústrias e empresas de construção. Locação por contrato, sem motorista, com atendimento nacional a partir de Três Rios - RJ.</p>
          </div>
          <div className="mt-10 flex max-w-sm items-center gap-4 border-l-2 border-[#0048D6] py-2 pl-5 lg:mt-0">
            <span className="size-2 shrink-0 bg-[#FCFC04]" />
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Compromisso claro. Relação de longo prazo.</p>
          </div>
        </div>

        <ol className="border-t border-white/15">
          {values.map(({ icon: Icon, number, title, description }) => (
            <li key={title} className="group grid grid-cols-[2.75rem_1fr_auto] items-start gap-4 border-b border-white/15 py-5 sm:gap-6 sm:py-6">
              <span className="border-l-2 border-[#0048D6] pl-3 font-mono text-xs tracking-widest text-[#FCFC04]">{number}</span>
              <div>
                <h3 className="text-lg font-bold leading-snug text-white transition-colors group-hover:text-[#FCFC04] sm:text-xl">{title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">{description}</p>
              </div>
              <Icon size={18} strokeWidth={1.7} className="mt-1 text-[#0048D6]" aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
