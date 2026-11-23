"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, MoveUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TOTAL_FRAMES = 238;
const FRAME_PREFIX = "ezgif-frame-";
const FRAME_EXTENSION = ".jpg";
const FRAME_DIGITS = 3;
const FRAME_DIRECTORY = "/frames-jpg/";

function getFramePath(index: number) {
  return `${FRAME_DIRECTORY}${FRAME_PREFIX}${String(index + 1).padStart(FRAME_DIGITS, "0")}${FRAME_EXTENSION}`;
}

export function HeroSequence() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [progress, setProgress] = useState(0);
  const [sequenceReady, setSequenceReady] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!section || !canvas || !context) return;

    let disposed = false;
    const frames: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    const fallback = new Image();
    let activeImage: HTMLImageElement | null = fallback;
    fallback.src = "/images/truck-sunset-front.jpg";
    fallback.onload = () => draw(fallback);

    let pixelRatio = 1;
    const draw = (image: HTMLImageElement | null) => {
      if (!image?.complete || !image.naturalWidth) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
      const drawWidth = image.naturalWidth * scale;
      const drawHeight = image.naturalHeight * scale;
      context.clearRect(0, 0, width, height);
      context.drawImage(image, (width - drawWidth) / 2, (height - drawHeight) / 2, drawWidth, drawHeight);
    };

    const resize = () => {
      pixelRatio = window.devicePixelRatio || 1;
      canvas.width = Math.floor(window.innerWidth * pixelRatio);
      canvas.height = Math.floor(window.innerHeight * pixelRatio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      draw(activeImage);
    };

    resize();
    window.addEventListener("resize", resize);

    let loadedFrames = 0;
    let successfulFrames = 0;
    let loadingStopped = false;
    let batchTimer: number | undefined;

    const loadBatch = (start: number) => {
      if (disposed || loadingStopped || start >= TOTAL_FRAMES) {
        if (!disposed && successfulFrames > 1) setSequenceReady(true);
        return;
      }

      const batchSize = 20;
      const end = Math.min(start + batchSize, TOTAL_FRAMES);
      let settledInBatch = 0;
      const settleFrame = () => {
        settledInBatch += 1;
        if (settledInBatch === end - start && !disposed) {
          loadedFrames = end;
          setProgress(Math.round((loadedFrames / TOTAL_FRAMES) * 100));
          if (successfulFrames > 1) setSequenceReady(true);
          batchTimer = window.setTimeout(() => loadBatch(end), 80);
        }
      };

      for (let index = start; index < end; index += 1) {
        const frame = new Image();
        frames[index] = frame;
        frame.onload = () => {
          successfulFrames += 1;
          if (index === 0) {
            activeImage = frame;
            draw(frame);
          }
          settleFrame();
        };
        frame.onerror = () => {
          if (index === 0) loadingStopped = true;
          settleFrame();
        };
        frame.src = getFramePath(index);
      }
    };

    const firstFrame = new Image();
    frames[0] = firstFrame;
    firstFrame.onload = () => {
      successfulFrames = 1;
      activeImage = firstFrame;
      draw(firstFrame);
      loadBatch(1);
    };
    firstFrame.onerror = () => {
      loadingStopped = true;
      if (!disposed) {
        setProgress(0);
        setSequenceReady(false);
      }
    };
    firstFrame.src = getFramePath(0);

    const targetFrame = { value: 0 };
    let currentFrame = 0;
    const renderFrame = () => {
      currentFrame += (targetFrame.value - currentFrame) * 0.12;
      if (Math.abs(targetFrame.value - currentFrame) < 0.01) currentFrame = targetFrame.value;
      const frame = frames[Math.round(currentFrame)];
      if (frame?.complete && frame.naturalWidth) {
        activeImage = frame;
        draw(frame);
      }
    };
    gsap.ticker.add(renderFrame);

    const animation = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=3500",
          scrub: 1.5,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
      timeline.to(targetFrame, { value: TOTAL_FRAMES - 1, ease: "none" }, 0);
      timeline.to(".hero-copy", { opacity: 0, y: -24, ease: "power1.out", duration: 0.2 }, 0);
      timeline.fromTo(".tech-card", { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, stagger: 0.12, duration: 0.12, ease: "power2.out" }, 0.25);
      timeline.to(".tech-card", { autoAlpha: 0, y: -12, stagger: 0.08, duration: 0.1 }, 0.82);
    }, section);

    return () => {
      disposed = true;
      if (batchTimer) window.clearTimeout(batchTimer);
      window.removeEventListener("resize", resize);
      gsap.ticker.remove(renderFrame);
      animation.revert();
    };
  }, []);

  return (
    <section id="inicio" ref={sectionRef} className="relative h-screen min-h-[680px] overflow-hidden bg-[#10131A]">
      <canvas ref={canvasRef} aria-label="Caminhão branco da Luciano Locações em uma rodovia ao pôr do sol" className="absolute inset-0 h-full w-full" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#10131A]/90 via-[#10131A]/45 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10131A]/65 via-transparent to-[#10131A]/35" />

      <div className="hero-copy relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-center px-5 pb-12 pt-28 sm:px-8 lg:px-12">
        <div className="max-w-[720px]">
          <p className="mb-6 inline-flex items-center gap-2 border border-white/15 bg-[#10131A]/50 px-3 py-2 text-[9px] font-bold tracking-[0.19em] text-slate-200 backdrop-blur-sm sm:text-[10px]">
            <span className="h-1.5 w-1.5 bg-[#FCFC04]" /> LOCAÇÃO DE FROTA CORPORATIVA <span className="text-[#FCFC04]">•</span> TODO O BRASIL
          </p>
          <h1 className="max-w-[730px] text-[clamp(2.8rem,6.5vw,57px)] font-extrabold leading-[0.98] tracking-[-0.055em] text-white">
            Força operacional e <span className="text-[#FCFC04]">parceria sólida</span> para indústrias e grandes obras.
          </h1>
          <p className="mt-7 max-w-[530px] text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            Locação por contrato de caminhões Volkswagen 6.170 novos, prontos para elevar a eficiência da sua operação.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contato" className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#FCFC04] px-5 text-xs font-extrabold text-[#10131A] transition hover:bg-white sm:px-6">
              Solicitar Proposta de Contrato <ArrowRight size={15} />
            </a>
            <a href="#frota" className="inline-flex min-h-12 items-center justify-center gap-3 border border-[#0048D6] bg-[#10131A]/40 px-5 text-xs font-bold text-white backdrop-blur-sm transition hover:bg-[#0048D6] sm:px-6">
              Conhecer a Frota <MoveUpRight size={15} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-5 mb-[-33px] flex items-center gap-2 text-[9px] font-semibold tracking-[0.18em] text-slate-400 sm:left-8 lg:left-12">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15"><ArrowDown size={13} /></span>
          ROLE PARA CONHECER A OPERAÇÃO
        </div>
        <div className="absolute bottom-8 right-5 hidden items-center gap-3 text-[9px] tracking-[0.16em] text-slate-500 sm:flex lg:right-12">
          <span>01</span><span className="h-px w-12 bg-white/20" /><span>03</span>
        </div>
      </div>

      <div className="tech-card pointer-events-none absolute bottom-[24%] left-[8%] z-20 mb-[181px] hidden border border-white/15 bg-[#161B26]/80 px-4 pl-[18px] py-3 backdrop-blur-md md:block">
        <span className="block text-[9px] tracking-[0.15em] text-slate-400">VEÍCULO</span><span className="mt-1 block text-xs font-bold text-white">VW 6.170 <span className="text-[#FCFC04]">•</span> Frota Nova</span>
      </div>
      <div className="tech-card pointer-events-none absolute right-[8%] top-[33%] z-20 mt-[348px] mr-[511px] hidden border border-white/15 bg-[#161B26]/80 px-4 py-3 text-left backdrop-blur-md md:block">
        <span className="block text-[9px] tracking-[0.15em] text-slate-400">MODELO DE OPERAÇÃO</span><span className="mt-1 block text-xs font-bold text-white">Contratos Corporativos <span className="text-[#FCFC04]">•</span> Sem Motorista</span>
      </div>
      <div className="absolute bottom-0 left-0 z-30 h-[2px] bg-[#FCFC04] transition-[width] duration-300" style={{ width: `${progress}%` }} aria-hidden="true" />
      <span className="sr-only" aria-live="polite">{sequenceReady ? "Animação da frota carregada" : `Carregando sequência visual: ${progress}%`}</span>
    </section>
  );
}
