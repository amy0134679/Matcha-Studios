// Save as src/MenuSection.tsx

import { useEffect, useRef, useState } from "react"
import strawberry from "./imports/strawberryMatcha.jpg"
import ube from "./imports/ubeMatcha.jpg"
import mango from "./imports/mangoMatcha.jpg"
import cookiescream from "./imports/cookiescream.jpg"

type Drink = {
  name: string
  desc: string
  tag?: string | null
  img?: string // drinks with an img appear in the spotlight carousel
}

type Tab = {
  id: string
  label: string
  items: Drink[]
  photo?: { src: string; alt: string; caption: string } // static spotlight (no carousel)
}

const MOBILE_PREVIEW = 4 // drinks shown on phones before "Show more"

const TABS: Tab[] = [
  {
    id: "matchas",
    label: "MATCHA",
    items: [
      { name: "Original Matcha", desc: "Ceremonial grade from Japan whisked to order, with an oat milk base. Sweetened with maple syrup" },
      { name: "Strawberry Matcha", desc: "Ceremonial grade matcha with strawberry flavour. Great for kids, anyone who is new to matcha, or loves strawberry!", tag: "bestseller", img: strawberry },
      { name: "Ube Matcha", desc: "The classic matcha with a Filipino Twist! Our classic matcha drizzled with our homemade ube syrup.", tag: "bestseller", img: ube },
      { name: "Mango Matcha", desc: "The classic matcha with a sweet and tangy mango syrup.", img: mango },
      { name: "Vanilla Matcha", desc: "The classic matcha with optional vanilla cold foam." },
      { name: "Banana Cream Matcha", desc: "The classic matcha with a banana cream top and skors bits." },
      { name: "Cookies & Cream Matcha", desc: "The classic matcha with cookies & cream, cream top.", img: cookiescream },
      { name: "Cookie Butter Matcha", desc: "The classic matcha with a cookie butter cream top." },
    ],
  },
  {
    id: "coffees",
    label: "COFFEE",
    photo: { src: "https://images.unsplash.com/photo-1776176623814-a570759b5190?q=80&w=891&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", alt: "Coffee beans", caption: "Coffee" },
    items: [
      { name: "Iced Coffee", desc: "Made with Vietnamese coffee and condensed milk.", tag: "bestseller" },
      { name: "Banana Cream Coffee", desc: "Iced coffee with a banana cream top and skors bits." },
      { name: "Cookies & Cream Coffee", desc: "Iced coffee with cookies & cream, cream top.", tag: "new" },
      { name: "Cookie Butter Coffee", desc: "Iced coffee with a cookie butter cream top." },
    ],
  },
  {
    id: "teas",
    label: "MORE TEAS",
    photo: { src: "https://plus.unsplash.com/premium_photo-1730833405504-bd732911e64e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", alt: "Loose tea leaves", caption: "More teas" },
    items: [
      { name: "Earl Grey Latte", desc: "A classic earl grey tea with a creamy oat milk base." },
      { name: "Mango Hojicha", desc: "Hojicha tea with a sweet and tangy mango syrup." },
    ],
  },
]

function TagPill({ tag }: { tag: string }) {
  return (
    <span
      className="px-2.5 py-0.5 text-xs font-semibold"
      style={{
        backgroundColor: tag === "new" ? "var(--color-dark)" : "var(--color-pink)",
        color: "white",
        borderRadius: "100px",
      }}
    >
      {tag}
    </span>
  )
}

const arrowStyle = {
  width: 44,
  height: 44,
  borderRadius: "50%",
  backgroundColor: "rgba(255,255,255,0.92)",
  color: "var(--color-dark)",
  fontSize: "1.4rem",
  boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
} as const

export default function MenuSection(_props: { instagramUrl?: string }) {
  const [tabId, setTabId] = useState("matchas")
  const [slide, setSlide] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const [hovered, setHovered] = useState(false) // mouse over the card or focus inside it
  const [expanded, setExpanded] = useState(false) // phones: show all drinks
  const [stopped, setStopped] = useState(false) // tapped/clicked, or paused with the button

  const tab = TABS.find((t) => t.id === tabId) ?? TABS[0]
  const slides = tab.items.filter((i) => i.img)
  const current = slides[slide] ?? slides[0]
  const go = (n: number) => setSlide((n + slides.length) % slides.length)

  // Auto-advance every 5s. Pauses on hover/focus, stops after a tap or click,
  // and never runs for people who prefer reduced motion.
  useEffect(() => {
    if (slides.length < 2 || hovered || stopped) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const timer = setTimeout(() => setSlide((s) => (s + 1) % slides.length), 5000)
    return () => clearTimeout(timer)
  }, [slide, slides.length, hovered, stopped])

  return (
    <section id="menu" className="max-w-7xl mx-auto px-10 py-16 md:py-20 scroll-mt-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-7">
        <h2
          className="text-2xl md:text-[1.7rem]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-dark)", letterSpacing: "-0.003em" }}
        >
          The Menu
        </h2>

        <div
          className="flex gap-1 p-1 self-start sm:self-auto"
          style={{ backgroundColor: "var(--color-matcha-pale)", borderRadius: "100px" }}
        >
          {TABS.map((m) => (
            <button
              key={m.id}
              onClick={() => {
                setTabId(m.id)
                setSlide(0)
                setStopped(false)
                setExpanded(false)
              }}
              className="px-4 sm:px-5 py-1.5 text-xs sm:text-sm font-medium transition-all whitespace-nowrap"
              style={{
                borderRadius: "100px",
                backgroundColor: tabId === m.id ? "var(--color-matcha)" : "transparent",
                color: tabId === m.id ? "white" : "var(--color-mid)",
              }}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm pb-5 md:pb-6 max-w-5xl" style={{ color: "var(--color-mid)" }}>
        View our selection of hand-crafted drinks below. Each drink has gone through intense testing to ensure the
        perfect balance of flavour. <br/>We are always experimenting with new flavours, so check back often for new drinks!
      </p>

      {/* 3 columns: spotlight (bigger) + 2 columns of tiles */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr] gap-4">
        {/* Spotlight */}
        {current ? (
          <div
            role="group"
            aria-roledescription="carousel"
            aria-label="Spotlight drinks"
            className="flex flex-col overflow-hidden"
            style={{ backgroundColor: "white", borderRadius: "16px", border: "2px solid var(--color-matcha-pale)" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
            onClick={() => setStopped(true)}
            onTouchStart={(e) => {
              setStopped(true)
              touchStartX.current = e.touches[0].clientX
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return
              const dx = e.changedTouches[0].clientX - touchStartX.current
              if (Math.abs(dx) > 50) go(slide + (dx < 0 ? 1 : -1))
              touchStartX.current = null
            }}
          >
            <div
              className="relative flex-1 min-h-[300px] sm:min-h-[400px]"
              style={{ backgroundColor: "var(--color-matcha-bg)" }}
            >
              {slides.map((s, i) => (
                <img
                  key={s.name}
                  src={s.img}
                  alt={i === slide ? s.name : ""}
                  aria-hidden={i !== slide}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out motion-reduce:transition-none"
                  style={{ opacity: i === slide ? 1 : 0 }}
                />
              ))}
              {current.tag && (
                <div className="absolute top-3 left-3">
                  <TagPill tag={current.tag} />
                </div>
              )}
              <button
                type="button"
                aria-label="Previous drink"
                onClick={() => go(slide - 1)}
                className="absolute left-3 top-1/2 -translate-y-1/2"
                style={arrowStyle}
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next drink"
                onClick={() => go(slide + 1)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
                style={arrowStyle}
              >
                ›
              </button>
            </div>
            <style>{`
              @keyframes menuFade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
              .menu-fade { animation: menuFade 0.6s ease-out; }
              @media (prefers-reduced-motion: reduce) { .menu-fade { animation: none; } }
            `}</style>
            <div className="p-5" aria-live="polite">
              <div key={current.name} className="menu-fade">
                <h3 className="font-semibold text-lg leading-snug mb-1.5" style={{ color: "var(--color-dark)" }}>
                {current.name}
              </h3>
              <p className="text-sm leading-snug mb-5" style={{ color: "var(--color-mid)" }}>
                {current.desc}
              </p>
              </div>
              <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {slides.map((s, i) => (
                  <button
                    key={s.name}
                    type="button"
                    aria-label={`Show ${s.name}`}
                    aria-current={i === slide}
                    onClick={() => setSlide(i)}
                    style={{
                      width: i === slide ? 24 : 10,
                      height: 10,
                      borderRadius: 100,
                      backgroundColor: i === slide ? "var(--color-matcha)" : "var(--color-matcha-pale)",
                      transition: "width 0.3s ease, background-color 0.3s ease",
                    }}
                  />
                ))}
              </div>
                <button
                  type="button"
                  className="text-xs font-semibold px-3 py-1.5"
                  style={{ color: "var(--color-matcha)", border: "1.5px solid var(--color-matcha-pale)", borderRadius: 100 }}
                  aria-label={stopped ? "Resume slideshow" : "Pause slideshow"}
                  onClick={(e) => {
                    e.stopPropagation() // don't also count as a "tap to stop"
                    setStopped((v) => !v)
                  }}
                >
                  {stopped ? "▶ Play" : "❚❚ Pause"}
                </button>
              </div>
            </div>
          </div>
        ) : (
          tab.photo && (
            <div
              className="relative overflow-hidden min-h-[320px] sm:min-h-[420px]"
              style={{ borderRadius: "16px", border: "2px solid var(--color-matcha-pale)", backgroundColor: "var(--color-matcha-bg)" }}
            >
              <img src={tab.photo.src} alt={tab.photo.alt} className="absolute inset-0 w-full h-full object-cover" />
              <span
                className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold"
                style={{ backgroundColor: "var(--color-dark)", color: "white", borderRadius: "100px" }}
              >
                {tab.photo.caption}
              </span>
            </div>
          )
        )}

        {/* Tiles: 2 columns, as many rows as there are drinks */}
        <div className="lg:col-span-2 flex flex-col">
        <div
          className={`flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 ${
            slides.length > 0 ? "auto-rows-fr" : "content-start"
          }`}
        >
          {tab.items.map((item, idx) => (
            <div
              key={item.name}
              className={`p-5 transition-all duration-300 hover:-translate-y-1 ${
                !expanded && idx >= MOBILE_PREVIEW ? "hidden sm:block" : ""
              }`}
              style={{ backgroundColor: "white", borderRadius: "16px", border: "2px solid var(--color-matcha-pale)" }}
            >
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <h3 className="font-semibold text-base leading-snug" style={{ color: "var(--color-dark)" }}>
                  {item.name}
                </h3>
                {item.tag && <TagPill tag={item.tag} />}
              </div>
              <p className="text-sm leading-snug" style={{ color: "var(--color-mid)" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Phones only: collapse long lists */}
        {tab.items.length > MOBILE_PREVIEW && (
          <button
            type="button"
            aria-expanded={expanded}
            className="sm:hidden mt-4 self-center px-6 py-3 text-sm font-semibold"
            style={{ color: "var(--color-matcha)", border: "1.5px solid var(--color-matcha)", borderRadius: 100, backgroundColor: "white" }}
            onClick={() => {
              setExpanded((v) => !v)
              if (expanded) document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            {expanded ? "Show fewer drinks" : `Show more drinks`}
          </button>
        )}
        </div>
      </div>
    </section>
  )
}