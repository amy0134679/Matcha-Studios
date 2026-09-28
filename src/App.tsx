import { useState } from "react"
import logo from "./imports/logo.png";


const MENU_TABS = [
  {
    id: "classics",
    label: "The Classics",
    items: [
      {
        name: "Iced Original Matcha",
        desc: "Ceremonial grade from Japan whisked to order, with an oat milk base. Sweetened with maple syrup",
        img: "https://images.unsplash.com/photo-1775891395012-b9edf8cecc1b?w=700&h=700&fit=crop&auto=format",
        tag: null,
      },
      {
        name: "Iced Strawberry Matcha",
        desc: "Ceremonial grade matcha with strawberry flavour. Great for kids, anyone who is new to matcha, or loves strawberry!",
        img: "https://images.unsplash.com/photo-1751033390078-b605c8727fa4?w=700&h=700&fit=crop&auto=format",
        tag: "popular",
      },
      {
        name: "Iced Ube Matcha",
        desc: "The classic matcha with a Filipino Twist! Our classic matcha drizzled with our homemade ube syrup.",
        img: "https://images.unsplash.com/photo-1745725247846-12a3e3109bbf?w=700&h=700&fit=crop&auto=format",
        tag: "popular",
      },
    ],
  },
  {
    id: "rotating",
    label: "Rotating Flavours",
    items: [
      {
        name: "Vietnamese Iced Coffee",
        desc: "Rich coffee over oat milk.",
        img: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=700&h=700&fit=crop&auto=format",
        tag: "bestseller",
      },
      {
        name: "Iced Mango Matcha",
        desc: "The classic matcha with a sweet and tangy mango syrup",
        img: "https://images.unsplash.com/photo-1777915836959-5182cb4fabba?w=700&h=700&fit=crop&auto=format",
        tag: null,
      },
      {
        name: "Sparkling Matcha",
        desc: "Matcha concentrate over fizzy soda.",
        img: "https://images.unsplash.com/photo-1723960676396-c8d17f502f21?w=700&h=700&fit=crop&auto=format",
        tag: "new",
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

export default function App() {
  const [tab, setTab] = useState("classics")

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
          backgroundColor: "var(--color-matcha)",
          position: "sticky",
          top: 0,
          zIndex: 30,
        }}
      >
          <div className="flex items-center justify-between px-4 py-3 max-w-5xl mx-auto">
              <img
                src={logo}
                alt="Matcha Studios"
                className="h-14 w-auto object-contain"
              />
          <div className="hidden sm:flex gap-8 items-center">
            {[
              { label: "Menu", href: "#menu" },
              { label: "About", href: "#about" },
              { label: "Catering", href: "#catering" },
              { label: "Contact us", href: "#find-us" },
            ].map((link) => (
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
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{ backgroundColor: "var(--color-matcha)", overflow: "hidden" }}
      >
        <div
          className="max-w-5xl mx-auto px-6 pt-16 pb-0 grid"
          style={{
            gridTemplateColumns: "1fr 1fr",
            alignItems: "end",
            gap: "2rem",
          }}
        >
          <div className="pb-16">
            <div
              className="inline-block mb-6 px-3 py-1 text-xs font-medium tracking-wide"
              style={{
                backgroundColor: "var(--color-matcha-light)",
                color: "white",
                borderRadius: "100px",
              }}
            >
              Toronto & Durham pop-up matcha booth
            </div>
            <h1
              className="leading-[0.92] mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
                color: "white",
                letterSpacing: "-0.03em",
              }}
            >
              Wanna get Matcha?
            </h1>
            <p
              className="mb-8 text-base leading-relaxed max-w-xs"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              A pop-up matcha stand bringing quality ceremonial grade matcha to
              you!
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
          <div
            className="relative flex justify-center items-end"
            style={{ height: "400px" }}
          >
            <div
              className="absolute inset-x-4 bottom-0 top-0 overflow-hidden"
              style={{
                borderRadius: "999px 999px 0 0",
                backgroundColor: "var(--color-matcha-pale)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1749280447307-31a68eb38673?w=700&h=900&fit=crop&auto=format"
                alt="Iced matcha latte at a café"
                className="w-full h-full object-cover"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <div
        className="flex items-stretch divide-x"
        style={{
          backgroundColor: "var(--color-dark)",
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        {[
          { icon: "📍", label: "Based in Durham and Toronto" },
          { icon: "🍃", label: "Each Drink made Fresh to order" },
          { icon: "🗾", label: "Ceremonial grade, straight from Japan" },
        ].map((s) => (
          <div
            key={s.label}
            className="flex items-center gap-3 px-8 py-4 flex-1"
          >
            <span>{s.icon}</span>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* Menu */}
      <section id="menu" className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1.6rem",
              color: "var(--color-dark)",
              letterSpacing: "-0.03em",
            }}
          >
            The menu
          </h2>
          <div
            className="flex gap-1 p-1"
            style={{
              backgroundColor: "var(--color-matcha-pale)",
              borderRadius: "100px",
            }}
          >
            {MENU_TABS.map((m) => (
              <button
                key={m.id}
                onClick={() => setTab(m.id)}
                className="px-5 py-1.5 text-sm font-medium transition-all"
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

        <div className="grid grid-cols-3 gap-4">
          {activeItems.map((item) => (
            <div
              key={item.name}
              className="group overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                border: "1.5px solid var(--color-matcha-pale)",
              }}
            >
              <div
                className="relative overflow-hidden"
                style={{
                  height: "200px",
                  backgroundColor: "var(--color-matcha-bg)",
                }}
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
                          : "var(--color-matcha)",
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

        <p className="text-sm mt-8" style={{ color: "var(--color-mid)" }}>
          Follow us on Instagram to find our next event, or book us for your
          event below.
        </p>
      </section>

      {/* About */}
      <section
        id="about"
        style={{
          backgroundColor: "var(--color-matcha-bg)",
          borderTop: "1.5px solid var(--color-matcha-pale)",
          borderBottom: "1.5px solid var(--color-matcha-pale)",
        }}
      >
        <div
          className="max-w-5xl mx-auto px-6 py-20 grid gap-16"
          style={{ gridTemplateColumns: "1fr 1fr", alignItems: "center" }}
        >
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: "var(--color-matcha)" }}
            >
              Who we are
            </p>
            <h2
              className="mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.9rem",
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
              We've poured more than 3,000 cups across Durham and Toronto. Every
              one is still hand-whisked with ceremonial grade matcha.
            </p>
          </div>
          <div className="relative" style={{ height: "380px" }}>
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                borderRadius: "16px",
                backgroundColor: "var(--color-matcha-pale)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1760992004210-44a502a2872d?w=800&h=900&fit=crop&auto=format"
                alt="A pop-up booth welcoming visitors at an outdoor market"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-4 -left-4 px-5 py-4"
              style={{
                backgroundColor: "var(--color-matcha)",
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
                3k+
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
      <section id="catering" className="max-w-5xl mx-auto px-6 py-20">
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-5"
          style={{ color: "var(--color-matcha)" }}
        >
          Bring us with you
        </p>
        <h2
          className="mb-4"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1.9rem",
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
          market pop-up, a wedding, celebration, or any event that could use a sweet
          treat.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {CATERING_OPTIONS.map((o) => (
            <div
              key={o.title}
              className="p-6"
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
      <section id="find-us" className="max-w-5xl mx-auto px-6 py-16">
        <div
          className="px-12 py-14 text-center"
          style={{ backgroundColor: "var(--color-dark)", borderRadius: "20px" }}
        >
          <p
            className="text-xs tracking-widest uppercase mb-3 font-medium"
            style={{ color: "var(--color-matcha-pale)" }}
          >
            Come hang
          </p>
          <h2
            className="mb-2"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "2rem",
              color: "white",
              letterSpacing: "-0.03em",
            }}
          >
            Toronto & Durham
          </h2>
          <p
            className="mb-8 text-sm"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Find our next pop-up on Instagram
          </p>
          <div className="flex gap-3 justify-center">
            <a
              href={"https://www.instagram.com/matcha.studiosx/?hl=en"}
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
        className="max-w-5xl mx-auto px-6 pb-10 flex items-center justify-between"
        style={{
          borderTop: "1.5px solid var(--color-matcha-pale)",
          paddingTop: "2rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "0.9rem",
            color: "var(--color-matcha)",
            letterSpacing: "-0.02em",
          }}
        >
          matcha studios
        </span>
        <p className="text-xs" style={{ color: "var(--color-mid)" }}>
          © 2026 ·Durham On
        </p>
        <div className="flex gap-6">
          {[
            { label: "Instagram", href: "https://www.instagram.com/matcha.studiosx/?hl=en" },
            { label: "TikTok", href: "#" },
            { label: "Email", href: "#" },
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
