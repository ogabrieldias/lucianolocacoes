"use client";

import { ArrowDownRight, ArrowLeft, ArrowRight, CalendarDays, Globe2, ShieldCheck, Truck } from "lucide-react";
import { useState } from "react";

const gallery = [
  {
    src: "/images/truck-sunset-side.jpg",
    alt: "Volkswagen 6.170 da Luciano Locações em operação na estrada",
    label: "Perfil em operação",
  },
  {
    src: "/images/truck-sunset-front.jpg",
    alt: "Vista frontal do caminhão Volkswagen 6.170 da Luciano Locações",
    label: "Presença em campo",
  },
];

const specifications = [
  { icon: Truck, label: "Modelo / Ano", value: "Volkswagen 6.170 • 2022" },
  { icon: ShieldCheck, label: "Estado do veículo", value: "Veículo Novo / Alta Confiabilidade" },
  { icon: CalendarDays, label: "Modalidade", value: "Locação por Contrato (Sem Motorista)" },
  { icon: Globe2, label: "Cobertura", value: "Atendimento em Todo o Brasil" },
];

export function FleetShowcase() {
  const [activeImage, setActiveImage] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);
  const currentImage = gallery[activeImage];

  function selectImage(index: number) {
    setActiveImage(index);
    setImageFailed(false);
  }

  function moveImage(direction: -1 | 1) {
    selectImage((activeImage + direction + gallery.length) % gallery.length);
  }

  return (
    <section id="frota" aria-labelledby="fleet-title" className="border-t border-white/10 bg-[#0B1324] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">01 / NOSSA FROTA</p>
            <h2 className="section-title mt-5 max-w-3xl">Um caminhão. <span className="text-[#FCFC04]">Pronto para grandes operações.</span></h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-400">Uma frota especializada, escolhida para atender com consistência quem precisa manter equipes e operações em movimento.</p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14 xl:gap-20">
          <div className="flex min-w-0 flex-col">
            <div className="relative min-h-[320px] flex-1 overflow-hidden bg-[#060B14] sm:min-h-[460px] lg:min-h-[600px]">
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_45%,rgba(0,72,214,0.28),transparent_58%),linear-gradient(135deg,#1a2231,#0b0f17_70%)]" />
              {!imageFailed && <img key={currentImage.src} src={currentImage.src} alt={currentImage.alt} onError={() => setImageFailed(true)} className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500" />}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060B14]/90 via-transparent to-[#060B14]/15" />
              <div className="absolute left-5 top-5 flex items-center gap-2 border border-white/15 bg-[#060B14]/80 px-3 py-2 backdrop-blur-sm sm:left-7 sm:top-7">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FCFC04]" />
                <span className="text-[9px] font-bold tracking-[0.18em] text-white">{currentImage.label.toUpperCase()}</span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between sm:bottom-7 sm:left-7 sm:right-7">
                <div><p className="font-mono text-[10px] tracking-[0.2em] text-[#FCFC04]">VW / 6.170</p><p className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">Feito para o trabalho.</p></div>
                <div className="flex gap-2">
                  <button type="button" onClick={() => moveImage(-1)} aria-label="Foto anterior" className="flex h-10 w-10 items-center justify-center border border-white/25 bg-[#060B14]/70 text-white transition hover:border-[#FCFC04] hover:text-[#FCFC04]"><ArrowLeft size={17} /></button>
                  <button type="button" onClick={() => moveImage(1)} aria-label="Próxima foto" className="flex h-10 w-10 items-center justify-center border border-white/25 bg-[#060B14]/70 text-white transition hover:border-[#FCFC04] hover:text-[#FCFC04]"><ArrowRight size={17} /></button>
                </div>
              </div>
            </div>
            <div className="flex gap-3 pt-4" aria-label="Selecionar foto da frota">
              {gallery.map((image, index) => (
                <button key={image.src} type="button" onClick={() => selectImage(index)} aria-label={`Exibir foto: ${image.label}`} aria-pressed={activeImage === index} className={`group relative h-[68px] flex-1 overflow-hidden border transition sm:h-[82px] ${activeImage === index ? "border-[#FCFC04]" : "border-white/10 hover:border-white/40"}`}>
                  <img src={image.src} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-70 transition group-hover:opacity-100" />
                  <span className="absolute inset-0 bg-[#060B14]/20" />
                  <span className="absolute bottom-2 left-2 text-[9px] font-bold tracking-wider text-white">0{index + 1}</span>
                </button>
              ))}
              <div className="hidden flex-1 items-center justify-end pr-2 text-[9px] font-bold tracking-[0.18em] text-slate-500 sm:flex">GALERIA DE FROTA</div>
            </div>
          </div>

          <div className="flex flex-col py-1 lg:py-3">
            <p className="font-mono text-[10px] tracking-[0.2em] text-[#0048D6]">FROTA / VW-6.170-2022</p>
            <h2 id="fleet-title" className="mt-5 text-4xl font-extrabold leading-[0.95] tracking-[-0.055em] text-white sm:text-5xl xl:text-[3.5rem]">Volkswagen <span className="text-[#FCFC04]">6.170</span></h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">Ano 2022. Locação por contrato, sem motorista — uma solução confiável para indústrias e empresas de construção manterem equipes e operações em movimento.</p>

            <dl className="mt-8 border-t border-white/15">
              {specifications.map(({ icon: Icon, label, value }, index) => (
                <div key={label} className="grid grid-cols-[2rem_1fr] gap-x-4 border-b border-white/15 py-4 sm:grid-cols-[2.5rem_1fr_auto] sm:items-center sm:gap-x-5">
                  <span className="font-mono text-xs tracking-wide text-[#FCFC04]">0{index + 1}</span>
                  <div>
                    <dt className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500">{label}</dt>
                    <dd className="mt-1 text-sm font-semibold leading-5 text-white">{value}</dd>
                  </div>
                  <Icon size={16} className="hidden text-[#0048D6] sm:block" aria-hidden="true" />
                </div>
              ))}
            </dl>

            <a href="#contato" className="mt-7 inline-flex min-h-14 items-center justify-between gap-5 bg-[#FCFC04] px-5 text-xs font-extrabold text-[#060B14] transition hover:bg-white sm:px-6">
              <span>Cotar Contrato VW 6.170</span><ArrowDownRight size={17} />
            </a>
            <p className="mt-3 text-center text-[10px] text-slate-500">Condições comerciais personalizadas para sua operação.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
