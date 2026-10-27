import { useState } from "react"
import logo from "./imports/logo.jpg"
import covershot from "./imports/Covershot.jpg"
import booth from "./imports/booth.jpg"
import strawberry from "./imports/strawberryMatcha.jpg"
import ube from "./imports/ubeMatcha.jpg"
import mango from "./imports/mangoMatcha.jpg"
import banana from "./imports/bananaMatcha.jpg"
import cookiescream from "./imports/cookiescream.jpg"
import cookieButter from "./imports/cookiebutter.jpg"
import vanilla from "./imports/vanillamatcha.jpg"


const MENU_TABS = [
  {
    id: "matchas",
    label: "MATCHA",
    items: [
      {
        name: "Original Matcha",
        desc: "Ceremonial grade from Japan whisked to order, with an oat milk base. Sweetened with maple syrup",
        img: covershot,
        tag: null,
      },
      {
        name: "Strawberry Matcha",
        desc: "Ceremonial grade matcha with strawberry flavour. Great for kids, anyone who is new to matcha, or loves strawberry!",
        img: strawberry,
        tag: "bestseller",
      },
      {
        name: "Ube Matcha",
        desc: "The classic matcha with a Filipino Twist! Our classic matcha drizzled with our homemade ube syrup.",
        img: ube,
        tag: "bestseller",
      },
      {
        name: "Mango Matcha",
        desc: "The classic matcha with a sweet and tangy mango syrup.",
        img: mango,
        tag: "",
      },
      {
        name: "Vanilla Matcha",
        desc: "The classic matcha with optional vanilla cold foam.",
        img: vanilla,
        tag: "",
      },
      {
        name: "Banana Cream Matcha",
        desc: "The classic matcha with a banana cream top and skors bits .",
        img: banana,
        tag: "",
      },
      {
        name: "Cookies & Cream Matcha",
        desc: "The classic matcha with cookies & cream, cream top.",
        img: cookiescream,
        tag: "",
      },
      {
        name: "Cookie Butter Matcha",
        desc: "The classic matcha with a cookie butter cream top.",
        img: cookieButter,
        tag: "",
      },
    ],
  },
  {
    id: "coffees",
    label: "COFFEE",
    items: [
      {
        name: "Iced Coffee",
        desc: "Made with Vietnamese coffee and condensed milk.",
        img: logo,
        tag: "bestseller",
      },
      {
        name: "Banana Cream Coffee",
        desc: "Iced coffee with a banana cream top and skors bits.",
        img: "https://images.unsplash.com/photo-1777915836959-5182cb4fabba?w=700&h=700&fit=crop&auto=format",
        tag: "",
      },
      {
        name: "Cookies & Cream Coffee",
        desc: "Iced coffee with cookies & cream, cream top.",
        img: "https://images.unsplash.com/photo-1723960676396-c8d17f502f21?w=700&h=700&fit=crop&auto=format",
        tag: "new",
      },
      {
        name: "Cookie Butter Coffee",
        desc: "Iced coffee with a cookie butter cream top.",
        img: "https://images.unsplash.com/photo-1723960676396-c8d17f502f21?w=700&h=700&fit=crop&auto=format",
        tag: "",
      },
    ],
  },
  {
    id: "teas",
    label: "MORE TEAS",
    items: [
      {
        name: "Earl Grey Latte",
        desc: "A classic earl grey tea with a creamy oat milk base.",
        img: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=700&h=700&fit=crop&auto=format",
        tag: "",
      },
      {
        name: "Mango Hojicha",
        desc: "Hojicha tea with a sweet and tangy mango syrup.",
        img: "https://images.unsplash.com/photo-1777915836959-5182cb4fabba?w=700&h=700&fit=crop&auto=format",
        tag: null,
      },
    ],
  },
]

const CATERING_OPTIONS = [
  {
    title: "Basic",
    price: "$200",
    eyebrow: "Up to 2 hours",
    desc: "Perfect for small gatherings or short events.",
    features: [
      "20 8oz drinks",
      "2 hours of live matcha-making service",
      "3 flavours",
      "1 trained barista",
      "Customizable menu sign",
      "Set up and clean up",
    ],
  },
  {
    title: "Standard",
    price: "$450",
    eyebrow: "Up to 3 hours",
    desc: "Great for mid-size weddings, team parties, or pop-up activations.",
    features: [
      "80 8oz drinks",
      "3 hours of live matcha-making service",
      "3 flavours",
      "1–2 baristas depending on volume",
      "Customizable menu sign",
      "Custom cup stickers, including brand logos or wedding names",
      "Set up and clean up",
    ],
  },
]

const NAV_LINKS = [
  { label: "MENU", href: "#menu" },
  { label: "ABOUT", href: "#about" },
  { label: "CATERING", href: "#catering" },
  { label: "CONTACT & SOCIALS", href: "#find-us" },
]

const INSTAGRAM_URL = "https://www.instagram.com/matcha.studiosx/?hl=en"

export default function App() {
  const [tab, setTab] = useState("matchas")
  const [menuOpen, setMenuOpen] = useState(false)

  const activeItems = MENU_TABS.find((m) => m.id === tab)?.items ?? []

  return (
    <div
      style={{
        fontFamily: "var(--font-body)",
        backgroundColor: "var(--color-cream)",
        minHeight: "100vh",
      }}
    >
      {/* Nav */}
      <nav
        style={{
          backgroundColor: "var(--color-dark)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
          <img
            src={logo}
            alt="Matcha Studios"
            className="h-10 sm:h-11 w-auto object-contain"
          />

          {/* Desktop + tablet links */}
          <div className="hidden md:flex gap-8 lg:gap-14 items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm transition-opacity hover:opacity-70"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Phone hamburger */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            style={{ color: "white" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Phone dropdown */}
        {menuOpen && (
          <div
            className="md:hidden px-6 pb-5 pt-2 flex flex-col gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm py-1"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        style={{ backgroundColor: "var(--color-matcha)", overflow: "hidden" }}
      >
        <div className="max-w-7xl mx-auto px-10 pt-19 lg:pt-14 pb-0 grid grid-cols-1 lg:grid-cols-2 items-end gap-8">
          <div className="pb-4 lg:pb-16">
            <div
              className="inline-block mb-7 px-4 py-1 text-xs font-medium tracking-wide"
              style={{
                backgroundColor: "var(--color-pink)",
                color: "white",
                borderRadius: "100px",
              }}
            >
              Pop-up Matcha Booth
            </div>
            <h1
              className="leading-[0.92] mb-5 text-4xl sm:text-6xl lg:text-7xl"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                color: "white",
                letterSpacing: "-0.02em",
              }}
            >
              Wanna get
              <br />
              Matcha?
            </h1>
            <p
              className="mb-9 text-base leading-relaxed max-w-xs sm:max-w-sm"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              A pop-up matcha stand bringing quality ceremonial grade matcha,
              and other delicious drinks to you!
            </p>
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() =>
                  document
                    .getElementById("menu")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 text-sm font-semibold transition-all hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: "white",
                  color: "var(--color-matcha)",
                  borderRadius: "100px",
                }}
              >
                See our menu ↓
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("find-us")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                aria-label="Pop-up locations in Toronto and Durham"
                title="Toronto and Durham pop-up locations"
                className="px-6 py-3 text-sm font-medium transition-all hover:opacity-80"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.35)",
                  color: "white",
                  borderRadius: "150px",
                }}
              >
                Find our next pop-up
              </button>
            </div>
          </div>

          <div className="relative flex justify-center items-end h-[300px] sm:h-[500px] w-full max-w-md mx-auto lg:max-w-none">
            <div
              className="absolute inset-x-9 bottom-0 top-0 overflow-hidden"
              style={{
                borderRadius: "999px 999px 0 0",
                backgroundColor: "var(--color-matcha-pale)",
              }}
            >
              <img
                src={covershot}
                alt="Iced matcha latte"
                className="w-full h-full object-cover"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
      >
        {[
          { icon: "📍", label: "Based in Toronto and Durham" },
          { icon: "🍃", label: "Each Drink made Fresh to order" },
          { icon: "🗾", label: "Ceremonial grade, imported from Japan" },
          { icon: "🍁", label: "Canadian Owned Business" },
        ].map((s) => (
          <div
            key={s.label}
            className="flex items-center justify-center gap-3 px-6 py-4"
            style={{ backgroundColor: "var(--color-dark)" }}
          >
            <span>{s.icon}</span>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* Menu */}
      <section
        id="menu"
        className="max-w-7xl mx-auto px-6 py-14 md:py-20 scroll-mt-16"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-7">
          <h2
            className="text-2xl md:text-[1.7rem]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              color: "var(--color-dark)",
              letterSpacing: "-0.003em",
            }}
          >
            The Menu
          </h2>

          <div
            className="flex gap-1 p-1 self-start sm:self-auto"
            style={{
              backgroundColor: "var(--color-matcha-pale)",
              borderRadius: "150px",
            }}
          >
            {MENU_TABS.map((m) => (
              <button
                key={m.id}
                onClick={() => setTab(m.id)}
                className="px-4 sm:px-5 py-1.5 text-xs sm:text-sm font-medium transition-all whitespace-nowrap"
                style={{
                  borderRadius: "100px",
                  backgroundColor:
                    tab === m.id ? "var(--color-matcha)" : "transparent",
                  color: tab === m.id ? "white" : "var(--color-mid)",
                }}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        <p
          className="text-sm pb-8 md:pb-12 max-w-3xl"
          style={{ color: "var(--color-mid)" }}
        >
          View our selection of hand-crafted drinks below. Each drink is has
          gone through intense testing to ensure the perfect balance of
          flavour. We are always experimenting with new flavours, so check back
          often for new drinks! Follow us on{" "}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-pink)" }}
          >
            Instagram
          </a>{" "}
          to find our next event, or book us on our contact page to below to
          book us for your next event!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {activeItems.map((item) => (
            <div
              key={item.name}
              className="group overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                border: "2px solid var(--color-matcha-pale)",
              }}
            >
              <div
                className="relative overflow-hidden h-[220px] sm:h-[210px]"
                style={{ backgroundColor: "var(--color-matcha-bg)" }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.tag && (
                  <div
                    className="absolute top-3 left-3 px-2.5 py-0.5 text-xs font-semibold"
                    style={{
                      backgroundColor:
                        item.tag === "new"
                          ? "var(--color-dark)"
                          : "var(--color-pink)",
                      color: "white",
                      borderRadius: "100px",
                    }}
                  >
                    {item.tag}
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="mb-1.5">
                  <h3
                    className="font-semibold text-base leading-snug"
                    style={{ color: "var(--color-dark)" }}
                  >
                    {item.name}
                  </h3>
                </div>
                <p
                  className="text-sm leading-snug"
                  style={{ color: "var(--color-mid)" }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-16"
        style={{
          backgroundColor: "var(--color-matcha-bg)",
          borderTop: "1.5px solid var(--color-matcha-pale)",
          borderBottom: "1.5px solid var(--color-matcha-pale)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: "var(--color-pink)" }}
            >
              Who we are
            </p>
            <h2
              className="mb-5 text-[1.6rem] md:text-[1.9rem]"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                color: "var(--color-dark)",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              Just two people
              <br />
              obsessed with matcha.
            </h2>
            <p
              className="text-sm leading-relaxed mb-3"
              style={{ color: "var(--color-mid)" }}
            >
              Matcha Studios was started as a way to share our love for quality
              matcha with our community at an affordable price. With ceremonial
              grade matcha shipped from Japan, our goal is to make matcha
              accessible and fun for matcha lovers, and those new to it aswell.
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-mid)" }}
            >
              We've poured more than 5,000 cups across Durham and Toronto.
              Every one is still hand-whisked with ceremonial grade matcha.
            </p>
          </div>
          <div className="relative h-[300px] sm:h-[380px] mb-4 md:mb-0">
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                borderRadius: "16px",
                backgroundColor: "var(--color-matcha-pale)",
              }}
            >
              <img
                src={booth}
                alt="Our matcha booth at a pop-up event"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-4 left-0 sm:-left-4 px-5 py-4"
              style={{
                backgroundColor: "var(--color-pink)",
                borderRadius: "14px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.8rem",
                  color: "white",
                  lineHeight: 1,
                }}
              >
                5k+
              </p>
              <p
                className="text-xs mt-0.5"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                cups poured
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pop-ups & Catering */}
      <section
        id="catering"
        className="max-w-5xl mx-auto px-6 py-12 md:py-20 scroll-mt-16"
      >
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-5"
          style={{ color: "var(--color-pink)" }}
        >
          Bring us with you
        </p>
        <h2
          className="mb-4 text-[1.6rem] md:text-[1.9rem]"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            color: "var(--color-dark)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          Pop-ups & catering
        </h2>
        <p
          className="text-sm leading-relaxed mb-10 max-w-md"
          style={{ color: "var(--color-mid)" }}
        >
          We don't do online ordering, but we do come to you. Book us for a
          market pop-up, a wedding, celebration, or any event that could use a
          sweet treat.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {CATERING_OPTIONS.map((o) => (
            <div
              key={o.title}
              className="p-5 sm:p-6"
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                border: "1.5px solid var(--color-matcha-pale)",
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3
                    className="font-semibold text-base"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-dark)",
                    }}
                  >
                    {o.title}
                  </h3>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "var(--color-matcha)" }}
                  >
                    {o.eyebrow}
                  </p>
                </div>
                <p
                  className="text-xl font-semibold"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-matcha)",
                  }}
                >
                  {o.price}
                </p>
              </div>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--color-mid)" }}
              >
                {o.desc}
              </p>
              <ul className="space-y-2">
                {o.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2 text-sm leading-snug"
                    style={{ color: "var(--color-mid)" }}
                  >
                    <span
                      aria-hidden="true"
                      style={{ color: "var(--color-matcha)" }}
                    >
                      •
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <a
          href="mailto:hello@matchastudios.com?subject=Pop-up%20%2F%20catering%20inquiry"
          className="inline-block px-7 py-3 text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
          style={{
            backgroundColor: "var(--color-matcha)",
            color: "white",
            borderRadius: "100px",
          }}
        >
          Enquire about catering
        </a>
      </section>

      {/* CTA */}
      <section
        id="find-us"
        className="max-w-5xl mx-auto px-6 py-12 md:py-16 scroll-mt-16"
      >
        <div
          className="px-6 py-10 sm:px-12 sm:py-14 text-center"
          style={{ backgroundColor: "var(--color-dark)", borderRadius: "20px" }}
        >
          <p
            className="text-xs tracking-widest uppercase mb-3 font-medium"
            style={{ color: "var(--color-matcha-pale)" }}
          >
            Come hang
          </p>
          <h2
            className="mb-2 text-2xl sm:text-[2rem]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
            }}
          >
            Find our next pop-up on Instagram
          </h2>
          <p
            className="mb-8 text-sm"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            We hope to see you soon!
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3 text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
              style={{
                backgroundColor: "var(--color-matcha)",
                color: "white",
                borderRadius: "100px",
              }}
            >
              Open Instagram
            </a>
            <a
              href="#catering"
              className="px-7 py-3 text-sm font-medium transition-all hover:opacity-80 active:scale-95"
              style={{
                border: "1.5px solid rgba(255,255,255,0.2)",
                color: "white",
                borderRadius: "100px",
              }}
            >
              Book catering
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="max-w-5xl mx-auto px-6 pb-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        style={{
          borderTop: "1.5px solid var(--color-matcha-pale)",
          paddingTop: "2rem",
        }}
      >
        <img
          src={logo}
          alt="Matcha Studios"
          className="h-12 sm:h-14 w-auto object-contain"
        />
        <p className="text-xs" style={{ color: "var(--color-mid)" }}>
          © 2026 ·Toronto On
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {[
            { label: "Instagram", href: INSTAGRAM_URL },
            {
              label: "matcha.studios@outlook.com",
              href: "mailto:matcha.studios@outlook.com",
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === "Instagram" ? "_blank" : undefined}
              rel={link.label === "Instagram" ? "noreferrer" : undefined}
              className="text-xs transition-opacity hover:opacity-60"
              style={{ color: "var(--color-mid)" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}