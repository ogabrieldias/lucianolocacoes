import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const phoneNumber = "+5524988148421";
const emailAddress = "lucianolocacoes@gmail.com";

export function Footer() {
  return (
    <footer className="border-t border-white/15 bg-[#0D1118] px-5 py-12 sm:px-8 lg:px-12 lg:py-14">
      <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-[1.1fr_1fr_auto] md:items-start md:gap-12">
        <div>
          <a href="#inicio" className="flex w-fit items-center gap-3" aria-label="Luciano Locações — início">
            <span className="flex h-12 w-14 items-center justify-center overflow-hidden border border-white/10 bg-[#161B26]">
              <img src="/logo/logo.png" alt="" className="h-full w-full object-cover object-[34%_center]" />
            </span>
            <span className="leading-tight"><span className="block text-sm font-extrabold tracking-wide text-white">LUCIANO</span><span className="mt-0.5 block text-[9px] font-semibold tracking-[0.24em] text-slate-400">LOCAÇÕES</span></span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">Locação por contrato, sem motorista, para indústrias e empresas de construção em todo o Brasil.</p>
        </div>

        <address className="flex flex-col gap-3 not-italic text-sm">
          <a href={`tel:${phoneNumber}`} className="inline-flex w-fit items-center gap-3 text-white transition hover:text-[#FCFC04]"><Phone size={15} className="text-[#FCFC04]" aria-hidden="true" />(24) 98814-8421</a>
          <a href={`mailto:${emailAddress}`} className="inline-flex w-fit items-center gap-3 break-all text-slate-300 transition hover:text-white"><Mail size={15} className="shrink-0 text-[#0048D6]" aria-hidden="true" />{emailAddress}</a>
          <span className="inline-flex items-center gap-3 text-xs text-slate-500"><MapPin size={14} className="text-[#0048D6]" aria-hidden="true" />Três Rios - RJ · Atendimento em todo o Brasil · 06:00 às 18:00</span>
        </address>

        <div className="flex flex-col items-start gap-5 md:items-end">
          <a href="https://www.instagram.com/lucianolocacao/" target="_blank" rel="noreferrer" aria-label="Instagram da Luciano Locações (abre em nova aba)" className="inline-flex w-fit items-center gap-2 text-xs font-bold text-white transition hover:text-[#FCFC04]">
            <Instagram size={17} aria-hidden="true" /> Instagram
          </a>
          <nav aria-label="Links do rodapé" className="flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500 md:flex-col md:items-end">
            <a href="#frota" className="transition hover:text-white">Frota</a>
            <a href="#diferenciais" className="transition hover:text-white">Diferenciais</a>
            <a href="#contato" className="transition hover:text-white">Contato</a>
          </nav>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-[1440px] flex-col gap-2 border-t border-white/10 pt-5 text-[10px] tracking-wide text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Luciano Locações. Todos os direitos reservados.</span>
        <span>Volkswagen 6.170 · Ano 2022 · Atendimento em todo o Brasil</span>
      </div>
    </footer>
  );
}
