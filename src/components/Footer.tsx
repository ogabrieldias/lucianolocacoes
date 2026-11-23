import { Instagram, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B0F17] px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <a href="#inicio" className="flex w-fit items-center gap-3" aria-label="Luciano Locações — início">
          <span className="flex h-12 w-14 items-center justify-center overflow-hidden border border-white/10 bg-[#161B26]">
            <img src="/logo/logo.png" alt="" className="h-full w-full object-cover object-[34%_center]" />
          </span>
          <span className="leading-tight"><span className="block text-sm font-extrabold tracking-wide text-white">LUCIANO</span><span className="mt-0.5 block text-[9px] font-semibold tracking-[0.24em] text-slate-400">LOCAÇÕES</span></span>
        </a>

        <div className="max-w-sm text-sm leading-6 text-slate-400">
          <p>Atendimento nacional a partir de Três Rios - RJ, com soluções de locação para indústrias e empresas de construção.</p>
        </div>

        <a href="https://www.instagram.com/lucianolocacao/" target="_blank" rel="noreferrer" aria-label="Instagram da Luciano Locações (abre em nova aba)" className="inline-flex w-fit items-center gap-2 text-xs font-bold text-white transition hover:text-[#FCFC04]">
          <Instagram size={17} aria-hidden="true" /> Instagram
        </a>
      </div>
      <div className="mx-auto mt-8 flex max-w-[1440px] flex-col gap-2 border-t border-white/10 pt-5 text-[10px] tracking-wide text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Luciano Locações. Todos os direitos reservados.</span>
        <span className="inline-flex items-center gap-1.5"><MapPin size={12} aria-hidden="true" /> Três Rios - RJ · Atendimento em todo o Brasil</span>
      </div>
    </footer>
  );
}
