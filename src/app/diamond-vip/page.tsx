"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Shield,
  DollarSign,
  CheckCircle2,
  ArrowRight,
  Heart,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  X,
  ChevronDown,
  Gift,
  Percent,
  MapPin,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─── Colour Tokens ─── */
const NAVY = "#001F3F";
const YELLOW = "#FFD700";
const WHITE = "#FFFFFF";
const ELECTRIC_BLUE = "#38BDF8";
const WARM_YELLOW = "#FBBF24";

/* ─── Diamond Icon (custom SVG — gem shape for VIP) ─── */
function DiamondIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 3h12l4 6-10 12L2 9z" />
      <path d="M2 9h20" />
      <path d="M10 3L6 9l6 12" />
      <path d="M14 3l4 6-6 12" />
    </svg>
  );
}

/* ─── Nextdoor Icon (custom SVG — house with door) ─── */
function NextdoorIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 10.5L12 3l9 7.5" />
      <path d="M5 9.5V19a1 1 0 001 1h3.5v-5h5v5H18a1 1 0 001-1V9.5" />
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   STICKY HEADER BAR
   ══════════════════════════════════════════════════════════════════════ */
function StickyHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full" style={{ background: NAVY }}>
      <div className="flex items-center justify-between px-4 md:px-8 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1 }}>
          <div className="flex items-center gap-2.5">
            <img
              src="/santos-logo-v2.png"
              alt="Santos Plumbing Logo"
              className="h-10 w-10 md:h-11 md:w-11 object-contain"
            />
            <span
              className="font-extrabold text-xl md:text-2xl tracking-tight"
              style={{ color: WHITE }}
            >
              SANTOS
            </span>
          </div>
          <span
            className="font-semibold text-[0.65rem] md:text-xs uppercase tracking-[0.12em] ml-[52px] md:ml-[58px] mt-[-2px]"
            style={{ color: WARM_YELLOW }}
          >
            Plumbing
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-4">
          <Link
            href="/"
            className="nav-link flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-md hover:bg-white/5 transition-colors"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Home
          </Link>
          <Link
            href="/#services"
            className="nav-link flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-md hover:bg-white/5 transition-colors"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Services
          </Link>
          <a
            href="/diamond-vip"
            className="nav-link flex items-center gap-1.5 px-4 py-2 text-sm font-bold rounded-md transition-all"
            style={{ color: WARM_YELLOW }}
          >
            <DiamondIcon className="w-4 h-4" />
            Diamond VIP
          </a>
        </nav>

        {/* CTA + phone */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:9092562244"
            className="font-bold text-sm flex items-center gap-1.5"
            style={{ color: YELLOW, whiteSpace: "nowrap" }}
          >
            <Phone className="w-4 h-4" />
            (909) 256-2244
          </a>
          <Link
            href="/"
            className="font-bold px-6 py-2.5 rounded-md text-black shadow-lg hover:scale-105 transition-transform inline-block"
            style={{ background: YELLOW }}
          >
            REQUEST SERVICE
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" style={{ color: YELLOW }} />
          ) : (
            <Menu className="w-6 h-6" style={{ color: YELLOW }} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden px-4 pb-6 pt-2" style={{ background: NAVY }}>
          <Link
            href="/"
            className="block px-4 py-3 font-medium rounded-md hover:bg-white/5"
            style={{ color: "rgba(255,255,255,0.8)" }}
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/#services"
            className="block px-4 py-3 font-medium rounded-md hover:bg-white/5"
            style={{ color: "rgba(255,255,255,0.8)" }}
            onClick={() => setMobileOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/diamond-vip"
            className="block px-4 py-3 font-bold rounded-md hover:bg-white/5"
            style={{ color: WARM_YELLOW }}
            onClick={() => setMobileOpen(false)}
          >
            <DiamondIcon className="w-4 h-4 inline mr-2" />
            Diamond VIP
          </Link>
          <div className="pt-4 space-y-3">
            <a
              href="tel:9092562244"
              className="block font-bold text-center py-3 rounded-md"
              style={{ color: YELLOW }}
            >
              <Phone className="w-4 h-4 inline mr-2" />
              (909) 256-2244
            </a>
            <Link
              href="/"
              className="block w-full font-bold py-3 rounded-md text-black text-center"
              style={{ background: YELLOW }}
              onClick={() => setMobileOpen(false)}
            >
              REQUEST SERVICE
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   HERO SECTION
   ══════════════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 lg:py-40" style={{ background: NAVY }}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F] via-[#001a35] to-[#002244]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold mb-8"
          style={{ background: "rgba(251,191,36,0.15)", color: WARM_YELLOW, border: `1px solid ${WARM_YELLOW}40` }}
        >
          <DiamondIcon className="w-4 h-4" />
          DIAMOND VIP CARE CLUB
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
          <span style={{ color: WHITE }}>Your Friend in the</span>
          <br />
          <span style={{ color: WARM_YELLOW }}>Plumbing Business</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
          For just <span className="font-black" style={{ color: WARM_YELLOW }}>$22/month</span>, you get a
          plumber who answers at 2 AM, skips the surge fees, and treats your home
          like their own. That&apos;s not a membership — that&apos;s a friend.
        </p>

        {/* CTA row */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:9092562244"
            className="font-bold text-lg px-10 py-5 rounded-md text-black shadow-xl hover:scale-105 transition-transform inline-flex items-center justify-center"
            style={{ background: YELLOW }}
          >
            <Phone className="w-5 h-5 mr-2" />
            (909) 256-2244
          </a>
          <Link
            href="/"
            className="font-bold text-lg px-10 py-5 rounded-md border-2 shadow-xl hover:scale-105 transition-transform inline-flex items-center justify-center"
            style={{ borderColor: WARM_YELLOW, color: WARM_YELLOW, background: "transparent" }}
          >
            REQUEST SERVICE
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   4-ITEM ICON GRID
   ══════════════════════════════════════════════════════════════════════ */
function BenefitsGrid() {
  const benefits = [
    {
      icon: Phone,
      title: "VIP Hotline",
      desc: "Skip the line. Your calls jump to the front, 24/7/365.",
      accent: ELECTRIC_BLUE,
    },
    {
      icon: Gift,
      title: "$20 Welcome Gift",
      desc: "$20 Instant Welcome Gift Credit dropped into your account the moment you sign up. Use it on your first service call.",
      accent: WARM_YELLOW,
    },
    {
      icon: Percent,
      title: "15% Preferred Savings",
      desc: "15% off every service call, every time. Members save an average of $150/year.",
      accent: "#10b981",
    },
    {
      icon: Shield,
      title: "No Bog of Eternal Stench",
      desc: "No surprise surge fees. No weekend penalties. No 'after-hours' markup. Ever.",
      accent: "#8b5cf6",
    },
  ];

  return (
    <section className="py-20 md:py-28" style={{ background: WHITE }}>
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Section label */}
        <div className="text-center mb-14">
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: NAVY }}
          >
            What You Get
          </span>
          <h2
            className="mt-3 text-3xl md:text-4xl font-black leading-tight tracking-tight"
            style={{ color: NAVY }}
          >
            Four Reasons to Stop Googling
            <br />
            <span style={{ color: WARM_YELLOW }}>&quot;Plumber Near Me&quot;</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${b.accent}15` }}
              >
                <b.icon className="w-7 h-7" style={{ color: b.accent }} />
              </div>
              <h3 className="text-lg font-black" style={{ color: NAVY }}>
                {b.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   EMOTIONAL CLOSE / STORY BLOCK
   ══════════════════════════════════════════════════════════════════════ */
function StoryBlock() {
  return (
    <section className="py-20 md:py-28" style={{ background: NAVY }}>
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        {/* Diamond badge */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <DiamondIcon className="w-5 h-5" style={{ color: WARM_YELLOW }} />
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: WARM_YELLOW }}
          >
            Why This Is Different
          </span>
        </div>

        {/* Story */}
        <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
          <p>
            It&apos;s 11 PM on a Tuesday. You hear it first — a faint drip behind the
            hallway wall. Then you see the ceiling stain, spreading like a watercolor
            painting you never asked for. Your heart rate climbs. You grab your phone
            and Google &quot;emergency plumber near me.&quot;
          </p>

          <p>
            Three calls later: one goes to voicemail, one says they&apos;ll &quot;try to fit
            you in tomorrow,&quot; and the third quotes you double because it&apos;s
            &quot;after hours.&quot; You&apos;re standing in your hallway, watching your
            ceiling bubble, feeling that particular mix of panic and helplessness
            that only a plumbing emergency at 11 PM can deliver.
          </p>

          <p style={{ color: WHITE }} className="font-semibold text-xl md:text-2xl leading-snug">
            Now imagine a different version.
          </p>

          <p>
            You see the stain. You call <strong style={{ color: WARM_YELLOW }}>Santos</strong>.
            A real person picks up on the first ring. They already know your name,
            your address, and — here&apos;s the part that makes people do a double-take
            — <em>exactly which valve to turn off</em>.
          </p>

          <p>
            That&apos;s because when you join Diamond VIP, we walk through your home
            like we&apos;re disarming a nuclear bomb: we label and photograph every
            single water valve, every shutoff, every emergency access point. We
            hand you a map of your own plumbing. So when the ceiling starts
            bubbling at 11 PM, you don&apos;t panic. You flip the valve we tagged,
            and the water stops. Then you call us, and we handle the rest.
          </p>

          <p>
            No wading through the <strong style={{ color: "#dc2626" }}>Bog of Eternal Stench</strong> —
            that swamp of surprise fees, shady quotes, and &quot;we&apos;ll get there when
            we get there&quot; attitude that other plumbers drag you through. (Yes, we
            named it after the Labyrinth swamp. If you know, you know. If you
            don&apos;t, ask your plumber why they charge double on Saturdays.)
          </p>

          <p>
            And the <strong style={{ color: WARM_YELLOW }}>$20 Instant Welcome Gift Credit</strong>?
            It&apos;s dropped into your account the moment you sign up. Use it on
            your first service call. It&apos;s like your first drink is on the house —
            except it&apos;s plumbing, and the house isn&apos;t flooding.
          </p>

          <p className="text-xl md:text-2xl font-black leading-snug pt-4" style={{ color: WHITE }}>
            For $22 a month — less than your streaming subscription — you&apos;ve got
            a friend in the plumbing business.
            <br />
            <span style={{ color: WARM_YELLOW }}>And that friend answers the phone at 2 AM.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   NEXTDOOR TESTIMONIALS
   ══════════════════════════════════════════════════════════════════════ */
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Marcus T.",
      location: "Rancho Cucamonga",
      text: "Santos answered at midnight on a Sunday. My wife was panicking about the flooded bathroom, and he had someone at our door in 40 minutes. That\u2019s not a plumber \u2014 that\u2019s a friend.",
    },
    {
      name: "Elena R.",
      location: "Upland",
      text: "The Diamond VIP membership has paid for itself five times over. Fixed-price drain clearing alone saved us $200 last year. No surge fees on a Saturday emergency? Chef\u2019s kiss.",
    },
    {
      name: "David K.",
      location: "Fontana",
      text: "I called three other plumbers before Santos. Two didn\u2019t answer, one quoted me double for \u201cafter-hours.\u201d Santos picked up on the first ring and charged me the standard rate. I signed up for Diamond VIP that same day.",
    },
  ];

  return (
    <section className="py-20 md:py-28" style={{ background: WHITE }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section label */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <NextdoorIcon className="w-5 h-5" style={{ color: "#00b946" }} />
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: NAVY }}
            >
              Nextdoor Reviews
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-black leading-tight tracking-tight"
            style={{ color: NAVY }}
          >
            Don&apos;t Take Our Word for It
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, s) => (
                  <svg
                    key={s}
                    className="w-5 h-5"
                    fill={WARM_YELLOW}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Attribution */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="font-bold text-sm" style={{ color: NAVY }}>
                  {t.name}
                </p>
                <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3" />
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   PRICING CTA BLOCK
   ══════════════════════════════════════════════════════════════════════ */
function PricingCTA() {
  return (
    <section className="py-20 md:py-28" style={{ background: NAVY }}>
      <div className="max-w-xl mx-auto px-4 md:px-8 text-center">
        <div
          className="p-10 md:p-14 rounded-3xl border"
          style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(251,191,36,0.25)",
          }}
        >
          <DiamondIcon className="w-12 h-12 mx-auto mb-5" style={{ color: WARM_YELLOW }} />

          {/* Price */}
          <p className="font-black text-5xl md:text-6xl" style={{ color: WARM_YELLOW }}>
            $22
            <span className="text-xl font-semibold text-gray-400">/month</span>
          </p>

          <p className="mt-3 text-gray-400 text-sm">
            Cancel anytime. No contracts.
          </p>

          {/* CTA Button */}
          <a
            href="tel:9092562244"
            className="mt-8 font-bold text-lg px-10 py-5 rounded-md text-black shadow-xl hover:scale-105 transition-transform inline-flex items-center justify-center w-full"
            style={{ background: YELLOW }}
          >
            <Phone className="w-5 h-5 mr-2" />
            JOIN DIAMOND VIP
          </a>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" style={{ color: WARM_YELLOW }} />
              No contracts
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" style={{ color: WARM_YELLOW }} />
              Cancel anytime
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" style={{ color: WARM_YELLOW }} />
              Instant activation
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" style={{ color: WARM_YELLOW }} />
              $20 welcome credit
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   FOOTER
   ══════════════════════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer style={{ background: NAVY }} className="pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Brand row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <img
              src="/santos-logo-v2.png"
              alt="Santos Plumbing"
              className="h-10 w-10 object-contain"
            />
            <span className="font-extrabold text-xl tracking-tight" style={{ color: WHITE }}>
              SANTOS
            </span>
            <span className="font-semibold text-xs uppercase tracking-wider ml-1" style={{ color: WARM_YELLOW }}>
              Plumbing
            </span>
          </div>

          <a
            href="tel:9092562244"
            className="font-bold flex items-center gap-2 text-sm"
            style={{ color: YELLOW }}
          >
            <Phone className="w-4 h-4" />
            (909) 256-2244
          </a>
        </div>

        {/* Social icons */}
        <div className="mt-6 flex items-center justify-center gap-3">
          {[
            { icon: Facebook, href: "https://facebook.com/SantosPlumbingIE", label: "Facebook" },
            { icon: Instagram, href: "https://instagram.com/SantosPlumbingIE", label: "Instagram" },
            { icon: Linkedin, href: "https://linkedin.com/company/SantosPlumbingIE", label: "LinkedIn" },
            { icon: NextdoorIcon, href: "https://nextdoor.com/pages/santos-plumbing-upland-ca/recommendations/", label: "Nextdoor" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Locally Owned badge */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-4 h-4" style={{ color: YELLOW }} />
            <span className="font-bold text-xs" style={{ color: YELLOW }}>
              Locally Owned & Family Operated
            </span>
          </div>

          {/* Dual-wing footer bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} Santos Plumbing. All rights reserved.
            </p>
            <div className="text-right space-y-0.5">
              <p className="text-xs">
                <span className="text-gray-500">Powered by </span>
                <span className="font-semibold tracking-wide" style={{ color: ELECTRIC_BLUE }}>
                  NXLBYLDR CRM
                </span>
              </p>
              <p className="text-xs">
                <span className="text-gray-500">managed by </span>
                <a
                  href="https://vsualdigitalmedia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline"
                >
                  <span className="font-bold text-white">VSUAL</span>
                  <span className="text-gray-500">digitalmedia.com</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   PAGE COMPOSER
   ══════════════════════════════════════════════════════════════════════ */
export default function DiamondVIPPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <StickyHeader />
      <main className="flex-1">
        <HeroSection />
        <BenefitsGrid />
        <StoryBlock />
        <TestimonialsSection />
        <PricingCTA />
      </main>
      <Footer />
    </div>
  );
}
