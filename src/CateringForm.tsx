// TypeScript version. Save as src/CateringForm.tsx
// SETUP
// 1) npm install @hcaptcha/react-hcaptcha
// 2) Get your access key at https://web3forms.com (it's emailed to you) and paste it below.
// 3) In your Web3Forms dashboard, set "Block Spam" to hCaptcha.
// 4) In App.jsx:  import CateringForm from "./CateringForm"
//    then replace the "Enquire about catering" <a> button with:  <CateringForm />

import {
  useEffect, useRef, useState,
  type ChangeEvent, type CSSProperties, type FormEvent, type ReactNode,
} from "react"
import HCaptcha from "@hcaptcha/react-hcaptcha"

const ACCESS_KEY = "YOUR_ACCESS_KEY_HERE"
const HCAPTCHA_SITEKEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2" // Web3Forms free-plan key

const PACKAGES = [
  { id: "Basic", price: "$200", time: "Up to 2 hours", detail: "20 8oz drinks · 3 flavours · 1 barista" },
  { id: "Standard", price: "$450", time: "Up to 3 hours", detail: "80 8oz drinks · 3 flavours · 1–2 baristas" },
]

const pad = (n: number) => String(n).padStart(2, "0")
const toKey = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
const parseKey = (k: string): Date => {
  const [y, m, d] = k.split("-").map(Number)
  return new Date(y, m - 1, d)
}
const startOfToday = (): Date => {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  return d
}

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "0.8rem 1rem",
  fontSize: "1rem", // 16px stops iOS zooming into the field
  borderRadius: "12px",
  border: "1.5px solid var(--color-matcha-pale)",
  backgroundColor: "white",
  color: "var(--color-dark)",
}

type FieldProps = {
  label: string
  id: string
  error?: string
  hint?: string
  children: ReactNode
}

function Field({ label, id, error, hint, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold" style={{ color: "var(--color-dark)" }}>
        {label}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="text-xs" style={{ color: "var(--color-mid)" }}>
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs font-medium" style={{ color: "#b3304f" }}>
          {error}
        </p>
      )}
    </div>
  )
}

type DatePickerProps = {
  id: string
  value: string
  onChange: (value: string) => void
  error?: string
}

function DatePicker({ id, value, onChange, error }: DatePickerProps) {
  const today = startOfToday()
  const [open, setOpen] = useState(false)
  const [view, setView] = useState(
    value ? parseKey(value) : new Date(today.getFullYear(), today.getMonth(), 1)
  )
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    document.addEventListener("mousedown", onDown)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onDown)
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  const year = view.getFullYear()
  const month = view.getMonth()
  const blanks = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const canGoBack = year > today.getFullYear() || month > today.getMonth()
  const monthLabel = view.toLocaleDateString("en-CA", { month: "long", year: "numeric" })
  const display = value
    ? parseKey(value).toLocaleDateString("en-CA", {
        weekday: "short", year: "numeric", month: "long", day: "numeric",
      })
    : "Select a date"

  const navBtn: CSSProperties = {
    width: 40, height: 40, borderRadius: "50%", fontSize: "1.1rem",
    color: "var(--color-matcha)", border: "1.5px solid var(--color-matcha-pale)",
  }

  return (
    <div ref={wrapRef} className="relative">
      <button
        id={id}
        type="button"
        className="cf-focus text-left flex items-center justify-between"
        style={{ ...inputStyle, color: value ? "var(--color-dark)" : "var(--color-mid)" }}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={!!error}
        onClick={() => setOpen((o) => !o)}
      >
        <span>{display}</span>
        <span aria-hidden="true">📅</span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Choose event date"
          className="absolute z-30 mt-2 p-4"
          style={{
            backgroundColor: "white",
            borderRadius: "16px",
            border: "1.5px solid var(--color-matcha-pale)",
            boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
            width: "min(100%, 340px)",
            minWidth: 290,
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <button
              type="button"
              className="cf-focus"
              style={{ ...navBtn, opacity: canGoBack ? 1 : 0.3 }}
              disabled={!canGoBack}
              aria-label="Previous month"
              onClick={() => setView(new Date(year, month - 1, 1))}
            >
              ‹
            </button>
            <p className="font-semibold text-sm" style={{ color: "var(--color-dark)" }} aria-live="polite">
              {monthLabel}
            </p>
            <button
              type="button"
              className="cf-focus"
              style={navBtn}
              aria-label="Next month"
              onClick={() => setView(new Date(year, month + 1, 1))}
            >
              ›
            </button>
          </div>

          <div className="grid grid-cols-7 text-center text-xs mb-1" style={{ color: "var(--color-mid)" }}>
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
              <span key={i} className="py-1" aria-hidden="true">{d}</span>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-y-1">
            {Array.from({ length: blanks }).map((_, i) => <span key={`b${i}`} />)}
            {Array.from({ length: daysInMonth }, (_, i) => {
              const date = new Date(year, month, i + 1)
              const key = toKey(date)
              const past = date < today
              const selected = key === value
              const isToday = key === toKey(today)
              return (
                <button
                  key={key}
                  type="button"
                  disabled={past}
                  aria-pressed={selected}
                  aria-label={date.toLocaleDateString("en-CA", { weekday: "long", month: "long", day: "numeric" })}
                  className="cf-focus mx-auto"
                  style={{
                    width: 40, height: 40, borderRadius: "50%", fontSize: "0.875rem",
                    backgroundColor: selected ? "var(--color-matcha)" : "transparent",
                    color: selected ? "white" : past ? "#b9b9b9" : "var(--color-dark)",
                    fontWeight: selected || isToday ? 700 : 400,
                    border: isToday && !selected ? "1.5px solid var(--color-pink)" : "1.5px solid transparent",
                    cursor: past ? "not-allowed" : "pointer",
                  }}
                  onClick={() => {
                    onChange(key)
                    setOpen(false)
                  }}
                >
                  {i + 1}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

type FormValues = {
  first_name: string
  last_name: string
  email: string
  event_date: string
  location: string
  guests: string
  package: string
}
type Errors = Partial<Record<keyof FormValues | "captcha", string>>

const EMPTY: FormValues = { first_name: "", last_name: "", email: "", event_date: "", location: "", guests: "", package: "" }

function validate(v: FormValues, captcha: string): Errors {
  const e: Errors = {}
  if (!v.first_name.trim()) e.first_name = "Please enter your first name."
  if (!v.last_name.trim()) e.last_name = "Please enter your last name."
  if (!v.email.trim()) e.email = "Please enter your email."
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    e.email = "That email doesn't look right. Try something like name@example.com."
  if (!v.event_date) e.event_date = "Please choose your event date."
  else if (parseKey(v.event_date) < startOfToday()) e.event_date = "Please choose a date in the future."
  if (v.location.trim().length < 3) e.location = "Please enter where the event will be (address or city)."
  if (!/^\d+$/.test(v.guests.trim()) || Number(v.guests) < 1) e.guests = "Please enter a whole number of 1 or more."
  if (!v.package) e.package = "Please choose a package."
  if (!captcha) e.captcha = "Please confirm you're not a robot."
  return e
}

export default function CateringForm() {
  const [values, setValues] = useState<FormValues>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [captcha, setCaptcha] = useState("")
  const loadedAt = useRef(Date.now())
  const captchaRef = useRef<HCaptcha>(null)
  const honeypotRef = useRef<HTMLInputElement>(null)

  const set = (name: keyof FormValues) => (valueOrEvent: string | ChangeEvent<HTMLInputElement>) => {
    const value = typeof valueOrEvent === "string" ? valueOrEvent : valueOrEvent.target.value
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // Spam checks: honeypot ticked, or sent in under 3 seconds
    if (honeypotRef.current?.checked || Date.now() - loadedAt.current < 3000) {
      setStatus("success") // look successful to bots, send nothing
      return
    }

    const errs = validate(values, captcha)
    setErrors(errs)
    const firstBad = (Object.keys(errs) as (keyof Errors)[]).find((k) => errs[k])
    if (firstBad) {
      document.getElementById(firstBad === "captcha" ? "captcha-box" : firstBad)?.focus()
      return
    }

    setStatus("sending")
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "New catering inquiry – Matcha Studios",
          from_name: "Matcha Studios website",
          name: `${values.first_name.trim()} ${values.last_name.trim()}`,
          first_name: values.first_name.trim(),
          last_name: values.last_name.trim(),
          email: values.email.trim(),
          event_date: parseKey(values.event_date).toLocaleDateString("en-CA", {
            weekday: "long", year: "numeric", month: "long", day: "numeric",
          }),
          location: values.location.trim(),
          number_of_people: values.guests.trim(),
          package: values.package,
          "h-captcha-response": captcha,
        }),
      })
      const json = await res.json()
      if (json.success) {
        setStatus("success")
        setValues(EMPTY)
        setCaptcha("")
        captchaRef.current?.resetCaptcha()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="p-6 sm:p-8 text-center"
        style={{ backgroundColor: "white", borderRadius: "16px", border: "1.5px solid var(--color-matcha-pale)" }}
      >
        <h3 className="text-xl mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-dark)" }}>
          Thanks, we got your request!
        </h3>
        <p className="text-sm" style={{ color: "var(--color-mid)" }}>
          We'll email you soon to confirm the details.
        </p>
      </div>
    )
  }

  const describe = (id: keyof Errors) => (errors[id] ? `${id}-error` : undefined)

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="p-5 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
      style={{ backgroundColor: "white", borderRadius: "16px", border: "1.5px solid var(--color-matcha-pale)" }}
    >
      <style>{`
        .cf-focus:focus-visible, .cf-input:focus { outline: 2px solid var(--color-matcha); outline-offset: 2px; }
        .cf-card:focus-within { outline: 2px solid var(--color-matcha); outline-offset: 2px; }
      `}</style>

      <p className="sm:col-span-2 text-xs" style={{ color: "var(--color-mid)" }}>
        All fields are required.
      </p>

      <Field label="First name" id="first_name" error={errors.first_name}>
        <input id="first_name" className="cf-input" type="text" autoComplete="given-name"
          value={values.first_name} onChange={set("first_name")}
          aria-invalid={!!errors.first_name} aria-describedby={describe("first_name")} style={inputStyle} />
      </Field>
      <Field label="Last name" id="last_name" error={errors.last_name}>
        <input id="last_name" className="cf-input" type="text" autoComplete="family-name"
          value={values.last_name} onChange={set("last_name")}
          aria-invalid={!!errors.last_name} aria-describedby={describe("last_name")} style={inputStyle} />
      </Field>

      <div className="sm:col-span-2">
        <Field label="Email" id="email" error={errors.email}>
          <input id="email" className="cf-input" type="email" autoComplete="email" inputMode="email"
            value={values.email} onChange={set("email")}
            aria-invalid={!!errors.email} aria-describedby={describe("email")} style={inputStyle} />
        </Field>
      </div>

      <Field label="Date of event" id="event_date" error={errors.event_date}>
        <DatePicker id="event_date" value={values.event_date} onChange={set("event_date")} error={errors.event_date} />
      </Field>
      <Field label="Number of people" id="guests" error={errors.guests} hint="An estimate is fine.">
        <input id="guests" className="cf-input" type="text" inputMode="numeric" autoComplete="off"
          value={values.guests} onChange={set("guests")}
          aria-invalid={!!errors.guests} aria-describedby={errors.guests ? "guests-error" : "guests-hint"} style={inputStyle} />
      </Field>

      <div className="sm:col-span-2">
        <Field label="Event location" id="location" error={errors.location}>
          <input id="location" className="cf-input" type="text" autoComplete="street-address"
            placeholder="Address or city" value={values.location} onChange={set("location")}
            aria-invalid={!!errors.location} aria-describedby={describe("location")} style={inputStyle} />
        </Field>
      </div>

      <fieldset id="package" tabIndex={-1} className="sm:col-span-2" aria-describedby={describe("package")}>
        <legend className="text-sm font-semibold mb-2" style={{ color: "var(--color-dark)" }}>
          Package
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PACKAGES.map((p) => {
            const selected = values.package === p.id
            return (
              <label
                key={p.id}
                className="cf-card flex gap-3 p-4 cursor-pointer"
                style={{
                  borderRadius: "14px",
                  border: `2px solid ${selected ? "var(--color-matcha)" : "var(--color-matcha-pale)"}`,
                  backgroundColor: selected ? "var(--color-matcha-bg)" : "white",
                }}
              >
                <input
                  type="radio"
                  name="package"
                  value={p.id}
                  checked={selected}
                  onChange={set("package")}
                  className="mt-1"
                  style={{ accentColor: "var(--color-matcha)", width: 18, height: 18 }}
                />
                <span className="flex-1">
                  <span className="flex items-baseline justify-between gap-2">
                    <span className="font-semibold" style={{ color: "var(--color-dark)" }}>{p.id}</span>
                    <span className="font-semibold" style={{ color: "var(--color-matcha)" }}>{p.price}</span>
                  </span>
                  <span className="block text-xs mt-0.5" style={{ color: "var(--color-matcha)" }}>{p.time}</span>
                  <span className="block text-sm mt-1" style={{ color: "var(--color-mid)" }}>{p.detail}</span>
                </span>
              </label>
            )
          })}
        </div>
        {errors.package && (
          <p id="package-error" role="alert" className="text-xs font-medium mt-2" style={{ color: "#b3304f" }}>
            {errors.package}
          </p>
        )}
      </fieldset>

      {/* Honeypot: hidden from people, bots tend to tick it */}
      <input ref={honeypotRef} type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off"
        aria-hidden="true" style={{ display: "none" }} />

      <div className="sm:col-span-2">
        <div id="captcha-box" tabIndex={-1}>
          <HCaptcha
            ref={captchaRef}
            sitekey={HCAPTCHA_SITEKEY}
            reCaptchaCompat={false}
            onVerify={(token: string) => {
              setCaptcha(token)
              setErrors((e) => ({ ...e, captcha: undefined }))
            }}
            onExpire={() => setCaptcha("")}
          />
        </div>
        {errors.captcha && (
          <p role="alert" className="text-xs font-medium mt-2" style={{ color: "#b3304f" }}>
            {errors.captcha}
          </p>
        )}
      </div>

      <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="cf-focus px-7 py-3.5 text-sm font-semibold transition-all hover:opacity-90 active:scale-95 disabled:opacity-60"
          style={{ backgroundColor: "var(--color-matcha)", color: "white", borderRadius: "100px" }}
        >
          {status === "sending" ? "Sending..." : "Send request"}
        </button>
        {status === "error" && (
          <p role="alert" className="text-sm" style={{ color: "#b3304f" }}>
            We couldn't send that. Please try again, or email us directly.
          </p>
        )}
      </div>
    </form>
  )
}