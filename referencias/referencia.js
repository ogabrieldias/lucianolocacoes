gsap.registerPlugin(ScrollTrigger);

/* ══════════════════════════════════════
   FRAME SEQUENCE CONFIG
══════════════════════════════════════ */
const FRAME_COUNT = 192;
const FRAME_BASE = "https://rassweiler-it.de/images/codepen/frames/frame_";
const FRAME_EXT = ".jpg";

// Pad frame number to 4 digits: 1 → "0001"
function framePath(n) {
	return FRAME_BASE + String(n).padStart(4, "0") + FRAME_EXT;
}

/* ══════════════════════════════════════
   CANVAS SETUP
══════════════════════════════════════ */
const canvas = document.getElementById("hv");
const ctx = canvas.getContext("2d");
const frames = new Array(FRAME_COUNT); // will hold Image objects
let framesLoaded = 0;
let canvasReady = false;

function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	// redraw current frame after resize
	if (canvasReady && frames[currentFrameIdx]) {
		drawFrame(currentFrameIdx);
	}
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

/* Cover-fit draw — mirrors object-fit:cover */
function drawFrame(idx) {
	const img = frames[idx];
	if (!img || !img.complete) return;

	const cw = canvas.width,
		ch = canvas.height;
	const iw = img.naturalWidth,
		ih = img.naturalHeight;
	if (!iw || !ih) return;

	const scale = Math.max(cw / iw, ch / ih);
	const dw = iw * scale,
		dh = ih * scale;
	const dx = (cw - dw) / 2,
		dy = (ch - dh) / 2;

	ctx.clearRect(0, 0, cw, ch);
	ctx.drawImage(img, dx, dy, dw, dh);
}

let currentFrameIdx = 0;

/* ══════════════════════════════════════
   FRAME PRELOADER
   Loads frames in two passes:
   Pass 1 — every 6th frame (32 frames) → enough to show loader done fast
   Pass 2 — all remaining frames in background
══════════════════════════════════════ */
const loader = document.getElementById("loader");
const loaderBar = document.getElementById("loader-bar");
const loaderPct = document.getElementById("loader-pct");
const loaderSt = document.getElementById("loader-status");

const statuses = [
	"Preparing your escape…",
	"Loading the ocean…",
	"Warming up the sunset…",
	"Almost there…"
];

function setProgress(pct, msg) {
	loaderBar.style.width = Math.min(100, pct) + "%";
	loaderPct.textContent = Math.round(Math.min(100, pct)) + "%";
	if (msg !== undefined) loaderSt.textContent = msg;
}

function dismissLoader() {
	loader.classList.add("hidden");
	document.body.classList.add("loaded");
	canvasReady = true;
	drawFrame(0);
	setTimeout(startHeroEntrance, 400);
	// continue loading remaining frames silently
	loadRemainingFrames();
}

// Pass 1: load every Nth frame first for quick start
const PASS1_STEP = 6; // load frame 1,7,13,19... = 32 frames
let pass1Done = 0;
const pass1Count = Math.ceil(FRAME_COUNT / PASS1_STEP);

function loadPass1() {
	let pending = pass1Count;
	for (let i = 1; i <= FRAME_COUNT; i += PASS1_STEP) {
		const idx = i - 1; // 0-based
		const img = new Image();
		img.onload = () => {
			frames[idx] = img;
			pass1Done++;
			framesLoaded++;
			const pct = (pass1Done / pass1Count) * 90;
			const si = pct < 30 ? 0 : pct < 60 ? 1 : pct < 85 ? 2 : 3;
			setProgress(pct, statuses[si]);

			// draw first frame as soon as it's ready
			if (idx === 0) {
				drawFrame(0);
			}

			if (pass1Done >= pass1Count) {
				setProgress(95, statuses[3]);
				setTimeout(dismissLoader, 400);
			}
		};
		img.onerror = () => {
			pass1Done++;
			framesLoaded++;
			if (pass1Done >= pass1Count) setTimeout(dismissLoader, 400);
		};
		img.src = framePath(i);
	}
}

// Pass 2: fill in all frames not loaded in pass 1
function loadRemainingFrames() {
	for (let i = 1; i <= FRAME_COUNT; i++) {
		const idx = i - 1;
		if (frames[idx]) continue; // already loaded
		const img = new Image();
		img.onload = () => {
			frames[idx] = img;
			framesLoaded++;
		};
		img.onerror = () => {
			framesLoaded++;
		};
		img.src = framePath(i);
	}
}

// Fake minimum progress animation so loader doesn't feel frozen
let fakeP = 0;
const fakeInterval = setInterval(() => {
	if (pass1Done < pass1Count) {
		fakeP = Math.min(fakeP + Math.random() * 2, 25);
		setProgress(Math.max(fakeP, (pass1Done / pass1Count) * 90));
	} else {
		clearInterval(fakeInterval);
	}
}, 200);

// Fallback
setTimeout(() => {
	if (!canvasReady) {
		setProgress(100, statuses[3]);
		dismissLoader();
	}
}, 15000);

// Start loading
loadPass1();

/* ══════════════════════════════════════
   HERO ENTRANCE
══════════════════════════════════════ */
function startHeroEntrance() {
	gsap.fromTo(
		".h-eyebrow",
		{ opacity: 0, y: 20 },
		{ opacity: 1, y: 0, duration: 0.8, delay: 0.1, ease: "power3.out" }
	);
	gsap.fromTo(
		".h-title",
		{ opacity: 0, y: 50 },
		{ opacity: 1, y: 0, duration: 1.1, delay: 0.3, ease: "power3.out" }
	);
	gsap.fromTo(
		".h-sub",
		{ opacity: 0, y: 24 },
		{ opacity: 1, y: 0, duration: 0.9, delay: 0.6, ease: "power3.out" }
	);
	gsap.fromTo(
		".h-cta-row",
		{ opacity: 0, y: 18 },
		{ opacity: 1, y: 0, duration: 0.8, delay: 0.85, ease: "power3.out" }
	);
	gsap.fromTo(
		"#sind",
		{ opacity: 0 },
		{ opacity: 1, duration: 0.8, delay: 1.2, ease: "power2.out" }
	);
	gsap.fromTo(
		".side-label",
		{ opacity: 0, x: 12 },
		{ opacity: 1, x: 0, duration: 0.8, delay: 1, ease: "power2.out" }
	);
	setTimeout(initScrollTrigger, 500);
}

/* ══════════════════════════════════════
   SCROLL → FRAME MAPPING

   On each scroll update we calculate which frame to show.
   No seeks, no buffering — just array lookup + drawImage.
   Buttery smooth.
══════════════════════════════════════ */
function initScrollTrigger() {
	const heroText = document.getElementById("hero-text");
	const scrubBar = document.getElementById("scrub-bar");
	const scrollInd = document.getElementById("sind");
	const grad = document.getElementById("hv-grad");

	let targetFrame = 0;
	let displayFrame = 0;
	let rafRunning = false;

	// Smooth frame interpolation via RAF
	// Instead of jumping frame-to-frame we lerp the index
	// so fast scrolling doesn't skip too jarringly
	function renderLoop() {
		if (!rafRunning) return;
		const diff = targetFrame - displayFrame;
		if (Math.abs(diff) > 0.5) {
			displayFrame += diff * 0.18; // smoothing — tweak 0.1(more smooth) to 0.3(more responsive)
		} else {
			displayFrame = targetFrame;
		}
		const idx = Math.max(0, Math.min(FRAME_COUNT - 1, Math.round(displayFrame)));
		if (idx !== currentFrameIdx) {
			currentFrameIdx = idx;
			// Use closest available frame if this one isn't loaded yet
			const drawn = findNearestFrame(idx);
			if (drawn !== null) drawFrame(drawn);
		}
		requestAnimationFrame(renderLoop);
	}

	// If target frame not loaded yet, find nearest loaded neighbor
	function findNearestFrame(idx) {
		if (frames[idx]) return idx;
		for (let offset = 1; offset < 10; offset++) {
			if (idx - offset >= 0 && frames[idx - offset]) return idx - offset;
			if (idx + offset < FRAME_COUNT && frames[idx + offset]) return idx + offset;
		}
		return null;
	}

	ScrollTrigger.create({
		trigger: "#hero-scroll",
		start: "top top",
		end: "bottom bottom",
		onEnter() {
			rafRunning = true;
			renderLoop();
		},
		onLeave() {
			rafRunning = false;
		},
		onEnterBack() {
			rafRunning = true;
			renderLoop();
		},
		onUpdate(self) {
			const p = self.progress;

			// Map scroll progress to frame index
			targetFrame = p * (FRAME_COUNT - 1);

			// Progress bar
			scrubBar.style.width = p * 100 + "%";

			// Hero text fade: starts at 15% scroll, fully gone by 45%
			const textP = Math.max(0, Math.min(1, (p - 0.08) / 0.32));
			heroText.style.opacity = 1 - textP;
			heroText.style.transform = "translateY(" + textP * -80 + "px)";

			// Scroll hint
			scrollInd.style.opacity = Math.max(0, 1 - p * 14);

			// Deepen overlay slightly as video progresses
			grad.style.opacity = Math.min(1, 0.85 + p * 0.15);
		}
	});
}

/* ══════════════════════════════════════
   NAV
══════════════════════════════════════ */
ScrollTrigger.create({
	start: "top -80",
	onEnter: () => document.getElementById("nav").classList.add("solid"),
	onLeaveBack: () => document.getElementById("nav").classList.remove("solid")
});

/* ══════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════ */
document.querySelectorAll(".rv").forEach((el) => {
	ScrollTrigger.create({
		trigger: el,
		start: "top 88%",
		once: true,
		onEnter: () => el.classList.add("in")
	});
});

/* ══════════════════════════════════════
   POPUP
══════════════════════════════════════ */
function openP() {
	document.getElementById("popup").classList.add("on");
	document.body.style.overflow = "hidden";
}
function closeP() {
	document.getElementById("popup").classList.remove("on");
	document.body.style.overflow = document.body.classList.contains("loaded")
		? ""
		: " hidden";
}
document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") closeP();
});
