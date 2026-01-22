import type { ReactNode } from 'react'
import VectorLogo from './assets/Vector.png'
import VideoPreview from "./assets/video-preview.png"

const navLinks = ['How it works', 'Pricing', 'Resources']
const trusted = ['Linear', 'Intercom', 'Stripe', 'Framer', 'Vercel', 'Figma']

function Badge({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-lg bg-white px-2 py-[7px] text-[12px] uppercase text-slate-700"
      style={{
        fontFamily: "Geist Mono, monospace",
        fontWeight: 400,
        letterSpacing: "-0.0113em",
        lineHeight: "130%",
        border: "1px solid #CBD5E1",
        boxShadow: "0 1px 2px rgba(15,23,42,0.06)",
      }}
    >
      <span
        className="flex h-5 w-5 items-center justify-center rounded-md bg-slate-100 text-[13px]"
      >
        🔥
      </span>

      {children}
    </span>
  )
}

function Window({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-blox-border bg-white shadow-[0_15px_40px_rgba(15,23,42,0.08)]">
      <div className="flex items-center gap-3 border-b border-b-[#EDECEA] px-4 py-3">
      <img
          src={VectorLogo}
          alt="Blox"
          className="h-6 w-auto"
        />
        <span className="text-[12px] font-medium text-slate-500">
          blox.app/workspace
        </span>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-blox-bg text-blox-text">
      <header className="border-b border-b-[#EDECEA] bg-blox-bg backdrop-blur">
        <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-6 py-4 md:py-5">
        <div className="flex items-center gap-2 leading-none">
          <img
            src={VectorLogo}
            alt="Blox"
            className="h-[22px] w-auto"
          />
          <span className="text-[22px] font-semibold tracking-tight text-blox-text leading-none">
            Blox
          </span>
          <nav className="ml-8 hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            {navLinks.map((item) => (
              <a key={item} href="#" className="transition hover:text-blox-text">
                {item}
              </a>
            ))}
          </nav>
          </div>
          <div className="flex items-center gap-2">
            <button className="hidden rounded-lg border border-[#EDECEA] bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 md:inline">
              Schedule Demo
            </button>
            <button className="rounded-[11px] bg-gradient-to-b from-[#2A2A2A] to-[#0F0F0F] px-6 py-2 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(0,0,0,0.35)] transition-transform hover:brightness-110 active:scale-95">
              Start for Free
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-screen-2xl flex-col gap-12 px-6 py-12 sm:gap-14 md:py-16 border border-[#EDECEA]">
        <section className="mx-auto w-full max-w-screen-xl">
          <div className="flex w-full">

            <div className="w-full max-w-[720px] space-y-7">

              <Badge>Most advanced landing page builder</Badge>
              <h1
                className="text-blox-text"
                style={{
                  fontFamily: "Geist, sans-serif",
                  fontWeight: 600,
                  fontSize: "58px",
                  lineHeight: "66px",
                  letterSpacing: "-0.02em",
                }}
              >
                Build landing pages that
                <br />
                optimize themselves.
              </h1>

              <p className="max-w-[620px] text-lg text-slate-600">
                For modern performance marketers, Blox learns your brand’s style and helps you craft
                high-converting landing pages for all of your campaigns.
              </p>
            </div>
          </div>
           <div className="mt-10 flex w-full flex-row items-center justify-between gap-6">
          <div className="relative flex h-[56px] w-full max-w-[480px] items-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="h-full w-full rounded-[14px] border border-[#EDECEA] bg-white pl-5 pr-[150px] text-[16px] shadow-[0_8px_20px_rgba(15,23,42,0.06)] outline-none focus:border-slate-300"
            />
            <button
              className="absolute right-[4px] top-[4px] bottom-[4px] rounded-[11px] bg-gradient-to-b from-[#2A2A2A] to-[#0F0F0F] px-7 text-[16px] font-semibold text-white shadow-[0_6px_18px_rgba(0,0,0,0.35)] transition-transform active:scale-95"
            >
              Start for Free
            </button>
          </div>

          <div className="flex items-center gap-4 rounded-[20px] border border-[#EDECEA] bg-[#FDFCFB] p-2 pr-8 shadow-[0_8px_20px_rgba(15,23,42,0.04)] m-4">
            <div className="relative h-[62px] w-[96px] shrink-0 overflow-hidden rounded-[20px] cursor-pointer group">
            <img src={VideoPreview} alt="Founder" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"/>
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-transform group-hover:scale-110">
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="ml-1 h-5 w-5"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-[18px] font-semibold tracking-tight text-[#1A1A1A]">
                Watch the video
              </span>
              <span className="text-lg text-slate-600">
                Presented by our founder
              </span>
            </div>
          </div>
          </div>
        </section>

        <section className="rounded-2xl border border-blox-border bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-blox-border px-4 py-3 text-xs text-slate-600">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                PPC Landing Page
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-700">
                All Variations
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-700">
                Experiments
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-700">
                Versions
              </span>
            </div>
            <button className="rounded-full border border-blox-border bg-white px-3 py-1 text-[11px] font-semibold text-slate-700 shadow-sm">
              Publish
            </button>
          </div>

          <div className="grid gap-4 p-4 sm:p-6 md:grid-cols-[280px,1fr]">
            <div className="space-y-3">
              <Window>
                <p className="text-xs font-semibold text-slate-700">Hi Cal Short</p>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Give me a detailed brief of what you’re looking to achieve with this landing page
                  and I’ll go ahead and build it.
                </p>
                <div className="mt-4 space-y-2 rounded-xl border border-blox-border bg-slate-50 p-3 text-xs text-slate-600">
                  <p>• Personal brand landing page</p>
                  <p>• Showcase work, who I am, how people can work with me</p>
                </div>
                <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-500">
                  <span className="rounded-full bg-emerald-100 px-2 py-1 font-semibold text-emerald-700">
                    Mostly for attracting clients
                  </span>
                </div>
              </Window>

              <Window>
                <p className="text-xs font-semibold text-slate-700">What changes should we make?</p>
                <div className="mt-3 space-y-2 text-xs text-slate-600">
                  <div className="rounded-lg border border-blox-border bg-white px-3 py-2">Add a clear call to action</div>
                  <div className="rounded-lg border border-blox-border bg-white px-3 py-2">Highlight key info above the fold</div>
                  <div className="rounded-lg border border-blox-border bg-white px-3 py-2">Show social proof</div>
                </div>
              </Window>
            </div>

            <Window>
              <div className="rounded-2xl border border-amber-100 bg-[#fff7ee] p-6 shadow-inner">
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="font-semibold text-slate-700">Variation A</span>
                    <span className="rounded-full bg-white px-2 py-1 font-semibold text-amber-600">Live</span>
                  </div>
                  <span className="rounded-full bg-white px-2 py-1 font-semibold text-slate-700">Start writing for free</span>
                </div>

                <div className="mt-6 space-y-4">
                  <h3 className="text-2xl font-bold text-blox-text">
                    Become an <span className="text-amber-600">expert</span> on any topics without leaving your editor
                  </h3>
                  <p className="text-sm text-slate-600">
                    Reword is your content team’s newest member, combining reader insights with AI to create content faster than ever.
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <button className="rounded-md bg-slate-900 px-3 py-2 text-xs font-semibold text-white">
                      Get started for free
                    </button>
                    <button className="rounded-md border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-800">
                      Learn More
                    </button>
                  </div>
                  <div className="rounded-xl border border-blox-border bg-white p-4 text-xs text-slate-700">
                    <p className="font-semibold">Testimonials</p>
                    <p className="mt-2 text-slate-600">
                      “Excellent service and fantastic product — cut our launch time by 70%.”
                    </p>
                  </div>
                </div>
              </div>
            </Window>
          </div>
        </section>

        <section className="rounded-2xl border border-blox-border bg-white px-6 py-6 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Trusted by 12,000+ company
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-sm font-semibold text-slate-600">
            {trusted.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
