"use client";

import Link from "next/link";
import {
  Phone,
  Shield,
  CheckCircle2,
  ArrowRight,
  Heart,
  Facebook,
  Instagram,
  Linkedin,
  Gift,
  MapPin,
  Smartphone,
  Wrench,
  Tag,
  Scissors,
  Camera,
  Droplets,
  Gauge,
} from "lucide-react";

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

/* ─── Coupon Scissors Icon ─── */
function CouponIcon({ className }: { className?: string }) {
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
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}


/* ══════════════════════════════════════════════════════════════════════
   SECTION 1: HERO HEADER
   ══════════════════════════════════════════════════════════════════════ */
function HeroHeader() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36 lg:py-44" style={{ background: NAVY }}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F] via-[#001a35] to-[#002244]" />

      {/* Decorative diamond glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{ background: `radial-gradient(circle, ${WARM_YELLOW} 0%, transparent 70%)` }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        {/* Tagline */}
        <span
          className="inline-block text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-6"
          style={{ color: ELECTRIC_BLUE }}
        >
          THE SANTOS CARE ADVANTAGE
        </span>

        {/* H1 Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.08] tracking-tight">
          <span style={{ color: WHITE }}>The </span>
          <span style={{ color: WARM_YELLOW }}>Diamond VIP</span>
          <br />
          <span style={{ color: WHITE }}>Care Club</span>
        </h1>

        {/* Subhead */}
        <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Priority scheduling, major savings, and a friend in the plumbing
          business. All for just{" "}
          <span className="font-black" style={{ color: WARM_YELLOW }}>$22 a month</span>.
        </p>

        {/* Dual CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:9092562244"
            className="font-bold text-lg px-10 py-5 rounded-xl text-black shadow-2xl hover:scale-105 transition-transform inline-flex items-center justify-center"
            style={{ background: YELLOW }}
          >
            Join the Club — $22/mo
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <a
            href="tel:9092562244"
            className="font-bold text-lg px-10 py-5 rounded-xl border-2 shadow-xl hover:scale-105 transition-transform inline-flex items-center justify-center"
            style={{ borderColor: ELECTRIC_BLUE, color: ELECTRIC_BLUE, background: "transparent" }}
          >
            <Phone className="w-5 h-5 mr-2" />
            Call (909) 256-2244
          </a>
        </div>

        {/* Micro trust line */}
        <p className="mt-6 text-xs text-gray-500">
          No contracts &middot; Cancel anytime &middot; Instant activation &middot; $20 welcome credit on signup
        </p>
      </div>
    </section>
  );
}


/* ══════════════════════════════════════════════════════════════════════
   SECTION 2: "FRIEND IN THE PLUMBING BUSINESS" STORY CLOSE
   ══════════════════════════════════════════════════════════════════════ */
function StoryClose() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#0d1117" }}>
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        {/* Section accent header */}
        <div className="text-center mb-10">
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{ background: "rgba(251,191,36,0.10)", color: WARM_YELLOW, border: `1px solid ${WARM_YELLOW}25` }}
          >
            <DiamondIcon className="w-4 h-4" />
            WHY BECOME A VIP?
          </span>
          <h2
            className="mt-6 text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight"
            style={{ color: WHITE }}
          >
            You Need a Friend in the
            <br />
            <span style={{ color: WARM_YELLOW }}>Plumbing Business.</span>
          </h2>
        </div>

        {/* Storytelling close copy */}
        <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
          <p>
            Most of us associate savings clubs with big box stores or airlines,
            but did you know you can also secure absolute peace of mind on your
            home&apos;s plumbing?
          </p>

          <p>
            With a dedicated priority hotline, you&apos;ll never have to gamble
            with unexpected plumbing headaches. Annoying leaking toilet or a
            relentlessly dripping faucet? Consider it handled with preferred
            daytime scheduling. Not sure how to shut off your main water valve
            when a fixture fails? Call us and we&apos;ll walk you through it
            step-by-step,{" "}
            <em style={{ color: ELECTRIC_BLUE }}>
              disarming-a-nuclear-bomb-style
            </em>
            . (As in, the steps are fast, specific, and helpful — even if the
            stakes are a little lower!)
          </p>

          <p>
            When you join the{" "}
            <strong style={{ color: WARM_YELLOW }}>
              Santos Diamond VIP Care Club
            </strong>{" "}
            for our magic number of just{" "}
            <strong style={{ color: WARM_YELLOW }}>$22 a month</strong>, you
            aren&apos;t just saving money — you&apos;re jumping right to the
            top of our service schedule. We make sure our members are taken care
            of <em>first</em> during regular business hours, so you can focus on
            going out to dinner or taking a vacation instead of stressing over
            scheduling.
          </p>

          <p>
            Plus, the moment you enroll today, we are instantly dropping a{" "}
            <strong style={{ color: WARM_YELLOW }}>
              $20 Welcome Gift Certificate
            </strong>{" "}
            into your account to use toward your very first scheduled service or
            routine checkup. You can opt out at any time. We&apos;re just out
            here trying to keep the Inland Empire free of hassle, stress, and
            plumbing overpayments!
          </p>
        </div>
      </div>
    </section>
  );
}


/* ══════════════════════════════════════════════════════════════════════
   SECTION 3: QUICK VIP PERKS SUMMARY GRID
   ══════════════════════════════════════════════════════════════════════ */
function PerksGrid() {
  const perks = [
    {
      icon: Smartphone,
      emoji: "📱",
      title: "Dedicated VIP Hotline",
      desc: "Preferred member scheduling — bumped straight to the top of our daytime appointment book.",
      accent: ELECTRIC_BLUE,
    },
    {
      icon: Gift,
      emoji: "💵",
      title: "$20 Instant Welcome Gift",
      desc: "Good toward your very first scheduled service or system flush.",
      accent: WARM_YELLOW,
    },
    {
      icon: Wrench,
      emoji: "🛠️",
      title: "Preferred 15% Savings",
      desc: "Majorly cuts down your bill on all preventative maintenance and fixture upgrades.",
      accent: "#10b981",
    },
    {
      icon: Shield,
      emoji: "🛑",
      title: "No Bog of Eternal Stench",
      desc: "Free annual main line camera checkups keep your yard and property pristine.",
      accent: "#8b5cf6",
    },
  ];

  return (
    <section className="py-20 md:py-28" style={{ background: NAVY }}>
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Section label */}
        <div className="text-center mb-14">
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: ELECTRIC_BLUE }}
          >
            Quick VIP Perks
          </span>
          <h2
            className="mt-3 text-3xl md:text-4xl font-black leading-tight tracking-tight"
            style={{ color: WHITE }}
          >
            Everything You Get for{" "}
            <span style={{ color: WARM_YELLOW }}>$22/mo</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {perks.map((p, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/60 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                {/* Icon container */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${p.accent}12` }}
                >
                  <p.icon className="w-7 h-7" style={{ color: p.accent }} />
                </div>

                <div>
                  <h3 className="text-lg font-black" style={{ color: WHITE }}>
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-gray-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ══════════════════════════════════════════════════════════════════════
   SECTION 4: EXCLUSIVE PROMOTIONAL OFFERS (THE COUPONS)
   ══════════════════════════════════════════════════════════════════════ */
function CouponsSection() {
  const coupons = [
    {
      icon: Camera,
      title: "$99 Camera Mainline Inspection",
      regularPrice: "$250",
      savings: "Save $151 Instantly",
      badge: "MOST POPULAR",
      badgeColor: ELECTRIC_BLUE,
      accent: ELECTRIC_BLUE,
      copy:
        "Stop guessing what\u2019s choking your lines. We will run our high-definition sewer diagnostic cameras straight down your main line to locate root intrusions, bellies, or cracks with surgical precision. Includes full video playback report.",
    },
    {
      icon: Droplets,
      title: "$49 System Flush & Tune-Up",
      regularPrice: "$189",
      savings: "Save $140 Instantly",
      badge: "SEASONAL SPECIAL",
      badgeColor: WARM_YELLOW,
      accent: WARM_YELLOW,
      copy:
        "Hard water and calcium deposits destroy water heaters from the inside out, spiking your gas bill. We will completely flush your tank, clear out sediment buildup, check your pressure relief valve, and calibrate your heating elements for peak efficiency.",
    },
    {
      icon: Gauge,
      title: "$69 Leak & Pressure Diagnostic",
      regularPrice: "$175",
      savings: "Save $106 Instantly",
      badge: "HOMEOWNER ESSENTIAL",
      badgeColor: "#10b981",
      accent: "#10b981",
      copy:
        "High municipal water pressure is the #1 silent killer of appliances, ice-makers, and hidden pipe joints. We will audit your entire home\u2019s pressure regulatory valves, run deep acoustic checks for hidden slab leaks, and test every fixture for micro-drips.",
    },
  ];

  return (
    <section className="py-20 md:py-28" style={{ background: "#0d1117" }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section label */}
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase"
            style={{ color: WARM_YELLOW }}
          >
            <CouponIcon className="w-4 h-4" />
            EXCLUSIVE PROMOTIONAL OFFERS
          </span>
          <h2
            className="mt-3 text-3xl md:text-4xl font-black leading-tight tracking-tight"
            style={{ color: WHITE }}
          >
            VIP-Only Coupons
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm">
            These exclusive rates are available to Diamond VIP members only.
            Use them on your very first scheduled service.
          </p>
        </div>

        {/* Coupon cards — 3-column grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {coupons.map((c, i) => (
            <div
              key={i}
              className="relative border-dashed border-zinc-700 bg-zinc-900/90 rounded-2xl p-6 flex flex-col transition-all duration-300 hover:border-zinc-600 hover:scale-[1.02] hover:shadow-xl"
            >
              {/* Scissors notch top-right */}
              <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center bg-[#0d1117] border-2 border-dashed border-zinc-700">
                <Scissors className="w-3.5 h-3.5 text-zinc-500" />
              </div>

              {/* Badge */}
              <div
                className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-black tracking-wide uppercase mb-5"
                style={{ background: `${c.badgeColor}15`, color: c.badgeColor }}
              >
                {c.badge}
              </div>

              {/* Service icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${c.accent}12` }}
              >
                <c.icon className="w-6 h-6" style={{ color: c.accent }} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-black mb-3" style={{ color: WHITE }}>
                {c.title}
              </h3>

              {/* Price row */}
              <div className="flex items-baseline gap-2 mb-4">
                <span
                  className="text-xs font-semibold line-through"
                  style={{ color: "#6b7280" }}
                >
                  Regular Price: {c.regularPrice}
                </span>
                <span
                  className="text-xs font-bold"
                  style={{ color: c.accent }}
                >
                  ({c.savings})
                </span>
              </div>

              {/* Copy */}
              <p className="text-sm text-gray-400 leading-relaxed flex-1">
                {c.copy}
              </p>

              {/* Fine print */}
              <p className="mt-5 pt-4 border-t border-zinc-800 text-[11px] text-gray-600 leading-relaxed">
                Diamond VIP members only. Present at time of service. Cannot be combined with other offers.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ══════════════════════════════════════════════════════════════════════
   SECTION 5: VERIFIED NEXTDOOR TESTIMONIALS
   ══════════════════════════════════════════════════════════════════════ */
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Marcus T.",
      location: "Rancho Cucamonga",
      headline: "Bypassed the regular waiting list",
      text: "Had a backed-up main line right before hosting a family dinner. Because we are Santos VIP members, they moved us right to the top of the daytime appointment book, arrived in under an hour, and cleared it for a flat $100 using our club special. Best $22 a month we\u2019ve ever spent.",
    },
    {
      name: "Elena R.",
      location: "Fontana",
      headline: "The annual checkup found a hidden slab leak",
      text: "Santos came out for our complimentary annual 100-point inspection and ran his camera line down our pipes. He found a tiny hairline fracture developing under our floor that would have ruined our wood laminates. Getting that caught early during our free VIP checkout saved us thousands.",
    },
    {
      name: "David K.",
      location: "Chino",
      headline: "Total peace of mind for my home",
      text: "Knowing we have a dedicated, unlisted VIP hotline to call for quick scheduling whenever a fixture acts up gives us total peace of mind. Santos treats us like family, handles everything with upfront flat rates, and answers our questions directly. Truly a friend in the plumbing business.",
    },
  ];

  return (
    <section className="py-20 md:py-28" style={{ background: NAVY }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section label */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <NextdoorIcon className="w-5 h-5" style={{ color: "#00b946" }} />
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "#00b946" }}
            >
              Verified Nextdoor Reviews
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-black leading-tight tracking-tight"
            style={{ color: WHITE }}
          >
            Don&apos;t Take Our Word for It
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/60 hover:border-zinc-700 transition-all duration-300 flex flex-col"
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

              {/* Headline */}
              <p className="font-bold text-sm mb-3" style={{ color: WARM_YELLOW }}>
                &ldquo;{t.headline}&rdquo;
              </p>

              {/* Quote */}
              <p className="text-sm text-gray-400 leading-relaxed flex-1">
                {t.text}
              </p>

              {/* Attribution */}
              <div className="mt-6 pt-4 border-t border-zinc-800">
                <p className="font-bold text-sm" style={{ color: WHITE }}>
                  {t.name}
                </p>
                <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
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
    <section className="py-20 md:py-28" style={{ background: "#0d1117" }}>
      <div className="max-w-xl mx-auto px-4 md:px-8 text-center">
        <div
          className="p-10 md:p-14 rounded-3xl border"
          style={{
            background: "rgba(255,255,255,0.03)",
            borderColor: "rgba(251,191,36,0.20)",
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
            className="mt-8 font-bold text-lg px-10 py-5 rounded-xl text-black shadow-2xl hover:scale-105 transition-transform inline-flex items-center justify-center w-full"
            style={{ background: YELLOW }}
          >
            <Phone className="w-5 h-5 mr-2" />
            JOIN THE CLUB — $22/MO
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
              className="social-tile"
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
      <main className="flex-1">
        <HeroHeader />
        <StoryClose />
        <PerksGrid />
        <CouponsSection />
        <TestimonialsSection />
        <PricingCTA />
      </main>
      <Footer />
    </div>
  );
}
