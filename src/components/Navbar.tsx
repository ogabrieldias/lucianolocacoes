"use client";

import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Frota", href: "#frota" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Atendimento Nacional", href: "#nacional" },
  { label: "Solicitar Contrato", href: "#contato" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#060B14]/90 backdrop-blur-xl">
      <nav aria-label="Navegação principal" className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#inicio" className="group flex items-center gap-3" aria-label="Luciano Locações — início">
          <span className="relative flex h-11 w-14 items-center justify-center overflow-hidden border border-white/10 bg-[#0B1324]">
            <img src="/logo/logo.png" alt="" className="h-full w-full object-cover object-[34%_center] transition-transform duration-500 group-hover:scale-110" />
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-extrabold tracking-[0.04em] text-white">LUCIANO</span>
            <span className="block text-[10px] font-semibold tracking-[0.25em] text-slate-400">LOCAÇÕES</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-[12px] font-medium text-slate-300 transition-colors hover:text-white">{link.label}</a>
          ))}
        </div>

        <div className="hidden items-center gap-5 sm:flex">
          <a href="https://wa.me/5524988148421" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[11px] font-medium text-slate-300 transition-colors hover:text-white">
            <Phone size={13} className="text-[#FCFC04]" /> (24) 98814-8421
          </a>
          <a href="#contato" className="inline-flex h-10 items-center gap-2 rounded-sm bg-[#FCFC04] px-4 text-[11px] font-extrabold text-[#060B14] transition-colors hover:bg-white">
            Solicitar Proposta <ArrowUpRight size={14} />
          </a>
        </div>

        <button type="button" className="rounded-md p-2 text-white lg:hidden" aria-label={isOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      {isOpen && <div className="border-t border-white/10 bg-[#060B14] px-5 py-5 lg:hidden">
        <div className="flex flex-col gap-4">
          {links.map((link) => <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-sm text-slate-200">{link.label}</a>)}
          <a href="https://wa.me/5524988148421" className="mt-2 inline-flex h-11 items-center justify-center gap-2 bg-[#FCFC04] font-bold text-[#060B14]">Solicitar Proposta <ArrowUpRight size={15} /></a>
        </div>
      </div>}
    </header>
  );
}
