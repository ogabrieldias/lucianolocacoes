"use client";

import { type FormEvent, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Clock3, MapPin, MessageCircle } from "lucide-react";

const phoneNumber = "5524988148421";
const inputClassName = "mt-2 min-h-12 w-full border border-white/10 bg-[#10131A] px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#0048D6] focus:ring-2 focus:ring-[#0048D6]/30";

export function ProposalSection() {
  const [submitted, setSubmitted] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const details = [
      "Olá, gostaria de solicitar uma proposta corporativa da Luciano Locações.",
      "",
      `Responsável: ${formData.get("name")}`,
      `Empresa: ${formData.get("company")}`,
      `Perfil: ${formData.get("segment")}`,
      `Telefone / WhatsApp: ${formData.get("phone")}`,
      `Cidade/UF da operação: ${formData.get("location")}`,
      `Quantidade estimada de veículos: ${formData.get("vehicles")}`,
      `Prazo do contrato: ${formData.get("term")}`,
    ].join("\n");

    setWhatsAppUrl(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(details)}`);
    setSubmitted(true);
  }

  function resetForm() {
    setSubmitted(false);
    setWhatsAppUrl("");
  }

  return (
    <section id="contato" aria-labelledby="proposal-title" className="border-t border-white/10 bg-[#10131A] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 sm:mb-14">
          <p className="eyebrow">04 / FALE COM NOSSA EQUIPE</p>
          <h2 id="proposal-title" className="section-title mt-5 max-w-3xl">Uma proposta alinhada à <span className="text-[#FCFC04]">sua operação.</span></h2>
        </div>

        <div className="grid overflow-hidden border border-white/10 bg-[#161B26] lg:grid-cols-[0.82fr_1.18fr]">
          <div className="flex flex-col p-6 sm:p-9 lg:p-10 xl:p-12">
            <p className="text-[10px] font-bold tracking-[0.18em] text-[#FCFC04]">CANAIS DIRETOS</p>
            <h3 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">Solicite uma Proposta Corporativa</h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">Fale diretamente com nossa equipe comercial para estruturar o contrato ideal para sua empresa ou obra.</p>

            <div className="mt-8 flex flex-col gap-3">
              <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noreferrer" className="group flex items-center gap-4 border border-[#FCFC04]/35 bg-[#FCFC04]/[0.06] p-4 transition hover:border-[#FCFC04] hover:bg-[#FCFC04]/[0.1]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#FCFC04] text-[#10131A]"><MessageCircle size={20} aria-hidden="true" /></span>
                <span className="min-w-0 flex-1"><span className="block text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">Telefone / WhatsApp</span><span className="mt-1 block text-sm font-bold text-white">(24) 98814-8421</span></span>
                <ArrowUpRight size={16} className="text-[#FCFC04] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <div className="flex items-center gap-4 border border-white/10 bg-[#10131A]/70 p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#0048D6]/40 bg-[#0048D6]/10 text-[#FCFC04]"><Clock3 size={19} aria-hidden="true" /></span>
                <span><span className="block text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500">Horário de atendimento</span><span className="mt-1 block text-sm font-semibold text-white">Segunda a Sexta/Sábado, das 06:00 às 18:00</span></span>
              </div>
              <a href="#nacional" className="group flex items-center gap-4 border border-white/10 bg-[#10131A]/70 p-4 transition hover:border-white/25">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#0048D6]/40 bg-[#0048D6]/10 text-[#FCFC04]"><MapPin size={19} aria-hidden="true" /></span>
                <span className="min-w-0 flex-1"><span className="block text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500">Base operacional</span><span className="mt-1 block text-sm font-semibold text-white">Três Rios - RJ • Atendimento em Todo o Brasil</span></span>
                <ArrowDownRight size={16} className="text-slate-500 transition-colors group-hover:text-[#FCFC04]" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-auto hidden border-t border-white/10 pt-8 lg:block"><p className="font-mono text-[10px] tracking-[0.16em] text-slate-500">PARCERIA DIRETA · ATENDIMENTO NACIONAL</p></div>
          </div>

          <div id="formulario-proposta" className="border-t border-white/10 bg-[#131720] p-6 sm:p-9 lg:border-l lg:border-t-0 lg:p-10 xl:p-12">
            {submitted ? (
              <div className="flex min-h-full flex-col justify-center" role="status" aria-live="polite">
                <span className="flex h-12 w-12 items-center justify-center border border-[#FCFC04]/40 bg-[#FCFC04]/10 text-[#FCFC04]"><MessageCircle size={22} aria-hidden="true" /></span>
                <p className="mt-7 text-[10px] font-bold tracking-[0.18em] text-[#FCFC04]">PRÓXIMO PASSO</p>
                <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Sua solicitação está pronta.</h3>
                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400">Revise e envie a mensagem pelo WhatsApp para concluir o pedido de proposta. Ela já inclui os dados informados no formulário.</p>
                <a href={whatsAppUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex min-h-14 items-center justify-between gap-4 bg-[#FCFC04] px-5 text-sm font-extrabold text-[#10131A] transition hover:bg-white sm:max-w-sm sm:px-6">Continuar no WhatsApp <ArrowUpRight size={18} aria-hidden="true" /></a>
                <button type="button" onClick={resetForm} className="mt-5 w-fit text-xs font-semibold text-slate-400 underline decoration-white/20 underline-offset-4 transition hover:text-white">Voltar ao formulário</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="mb-7"><p className="text-[10px] font-bold tracking-[0.18em] text-[#FCFC04]">FORMULÁRIO DE CONTRATO</p><p className="mt-2 text-sm text-slate-400">Conte um pouco sobre a operação que sua empresa precisa atender.</p></div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-xs font-semibold text-slate-300">Nome do Responsável <span className="text-[#FCFC04]">*</span><input className={inputClassName} name="name" autoComplete="name" placeholder="Seu nome completo" required maxLength={100} /></label>
                  <label className="text-xs font-semibold text-slate-300">Empresa <span className="text-[#FCFC04]">*</span><input className={inputClassName} name="company" autoComplete="organization" placeholder="Nome da empresa" required maxLength={120} /></label>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-xs font-semibold text-slate-300">Perfil da empresa <span className="text-[#FCFC04]">*</span><select className={inputClassName} name="segment" required defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Indústria</option><option>Construtora</option><option>Outro</option></select></label>
                  <label className="text-xs font-semibold text-slate-300">Telefone / WhatsApp <span className="text-[#FCFC04]">*</span><input className={inputClassName} name="phone" type="tel" autoComplete="tel" placeholder="(00) 00000-0000" required maxLength={30} /></label>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-xs font-semibold text-slate-300">Cidade/UF da Operação <span className="text-[#FCFC04]">*</span><input className={inputClassName} name="location" autoComplete="address-level2" placeholder="Ex.: Três Rios/RJ" required maxLength={100} /></label>
                  <label className="text-xs font-semibold text-slate-300">Quantidade estimada de veículos <span className="text-[#FCFC04]">*</span><input className={inputClassName} name="vehicles" type="number" min="1" max="999" step="1" placeholder="Ex.: 2" required /></label>
                </div>
                <label className="block text-xs font-semibold text-slate-300">Prazo do contrato <span className="text-[#FCFC04]">*</span><select className={inputClassName} name="term" required defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Até 3 meses</option><option>De 3 a 6 meses</option><option>De 6 a 12 meses</option><option>Mais de 12 meses</option><option>A definir</option></select></label>

                <button type="submit" className="mt-2 inline-flex min-h-14 w-full items-center justify-between gap-4 bg-[#FCFC04] px-5 text-sm font-extrabold text-[#10131A] transition hover:bg-white sm:px-6"><span>Preparar solicitação no WhatsApp</span><ArrowUpRight size={18} aria-hidden="true" /></button>
                <p className="text-center text-[10px] leading-5 text-slate-500">Seus dados serão organizados em uma mensagem para você revisar e enviar pelo WhatsApp.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
