"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, MoveUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TOTAL_FRAMES = 238;
const HERO_START_FRAME = 99;
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

    const heroStartFrame = new Image();
    heroStartFrame.onload = () => {
      if (!disposed) {
        frames[HERO_START_FRAME] = heroStartFrame;
        activeImage = heroStartFrame;
        draw(heroStartFrame);
      }
    };
    heroStartFrame.src = getFramePath(HERO_START_FRAME);

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

    const targetFrame = { value: HERO_START_FRAME };
    let currentFrame = HERO_START_FRAME;
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
    <section id="inicio" ref={sectionRef} className="relative h-screen min-h-[680px] overflow-hidden bg-[#060B14]">
      <canvas ref={canvasRef} aria-label="Caminhão branco da Luciano Locações em uma rodovia ao pôr do sol" className="absolute inset-0 h-full w-full" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#060B14]/95 via-[#060B14]/55 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060B14]/75 via-transparent to-[#060B14]/40" />

      <div className="hero-copy relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-center px-5 pb-16 pt-28 sm:px-8 lg:px-12">
        <div className="max-w-[900px] border-l-2 border-[#FCFC04] pl-5 sm:pl-8">
          <p className="mb-7 inline-flex items-center gap-3 text-[9px] font-bold tracking-[0.2em] text-slate-200 sm:text-[10px]">
            <span className="h-2 w-2 bg-[#FCFC04]" /> LOCAÇÃO DE FROTA CORPORATIVA <span className="text-[#FCFC04]">/</span> TODO O BRASIL
          </p>
          <h1 className="max-w-[900px] text-[clamp(3rem,6vw,78px)] font-extrabold leading-[0.92] tracking-[-0.065em] text-white">
            Força operacional.<br /><span className="text-[#FCFC04]">Parceria sólida</span> para<br />grandes operações.
          </h1>
          <p className="mt-7 max-w-[500px] text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
            Locação por contrato de caminhões Volkswagen 6.170, prontos para manter indústrias e grandes obras em movimento.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contato" className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#FCFC04] px-6 text-xs font-extrabold text-[#060B14] transition-colors duration-300 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FCFC04]">
              Solicitar proposta de contrato <ArrowRight size={15} />
            </a>
            <a href="#frota" className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/35 bg-[#060B14]/30 px-6 text-xs font-bold text-white backdrop-blur-sm transition-colors duration-300 hover:border-[#FCFC04] hover:text-[#FCFC04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FCFC04]">
              Conhecer a frota <MoveUpRight size={15} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-5 flex items-center gap-3 text-[9px] font-semibold tracking-[0.18em] text-slate-300 sm:left-8 lg:left-12">
          <span className="flex h-9 w-9 items-center justify-center border border-white/30"><ArrowDown size={13} /></span>
          ROLE PARA CONHECER A OPERAÇÃO
        </div>
        <div className="absolute bottom-8 right-5 hidden items-center gap-3 text-[9px] tracking-[0.16em] text-slate-300 sm:flex lg:right-12">
          <span>01</span><span className="h-px w-12 bg-white/40" /><span>03</span>
        </div>
      </div>

      <div className="tech-card pointer-events-none absolute bottom-24 right-5 z-20 hidden border border-white/20 bg-[#0B1324]/85 px-4 py-3 backdrop-blur-md md:block lg:right-12">
        <span className="block text-[9px] tracking-[0.15em] text-slate-300">FROTA DISPONÍVEL</span><span className="mt-1 block text-xs font-bold text-white">VW 6.170 <span className="text-[#FCFC04]">/</span> Ano 2022</span>
      </div>
      <div className="tech-card pointer-events-none absolute right-5 top-28 z-20 hidden border border-white/20 bg-[#0B1324]/85 px-4 py-3 text-left backdrop-blur-md sm:block lg:right-12">
        <span className="block text-[9px] tracking-[0.15em] text-slate-300">OPERAÇÃO</span><span className="mt-1 block text-xs font-bold text-white">Contrato corporativo <span className="text-[#FCFC04]">/</span> Sem motorista</span>
      </div>
      <div className="absolute bottom-0 left-0 z-30 h-[2px] bg-[#FCFC04] transition-[width] duration-300" style={{ width: `${progress}%` }} aria-hidden="true" />
      <span className="sr-only" aria-live="polite">{sequenceReady ? "Animação da frota carregada" : `Carregando sequência visual: ${progress}%`}</span>
    </section>
  );
}
