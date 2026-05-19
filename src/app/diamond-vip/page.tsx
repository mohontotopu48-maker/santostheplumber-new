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
  Percent,
  MapPin,
  Smartphone,
  Wrench,
  Ban,
  Tag,
  Scissors,
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
   SECTION 1: "FRIEND IN THE PLUMBING BUSINESS" STORY CLOSE
   ══════════════════════════════════════════════════════════════════════ */
function StorySection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 lg:py-40" style={{ background: NAVY }}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F] via-[#001a35] to-[#002244]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8">
        {/* Accent header */}
        <div className="text-center mb-10">
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
            style={{ background: "rgba(251,191,36,0.12)", color: WARM_YELLOW, border: `1px solid ${WARM_YELLOW}30` }}
          >
            <DiamondIcon className="w-4 h-4" />
            WHY BECOME A VIP?
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mt-6">
            <span style={{ color: WHITE }}>You Need a Friend in the</span>
            <br />
            <span style={{ color: WARM_YELLOW }}>Plumbing Business.</span>
          </h1>
        </div>

        {/* Story copy */}
        <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          <p>
            Picture this: you notice a slow drip under the kitchen sink. Not an emergency — not yet —
            but you know that &quot;not yet&quot; has a funny way of becoming &quot;right now&quot; at the worst
            possible moment. So you do what every homeowner does: you start Googling, you start calling
            around, and you start getting quotes that feel like they were written on a napkin by someone
            who just makes up numbers for a living.
          </p>

          <p>
            Now imagine a different version. You notice that drip, and you call{" "}
            <strong style={{ color: WARM_YELLOW }}>Santos</strong>. A real person picks up — not a
            robot, not a dispatch queue — a person who already knows your name, your address, and your
            plumbing history. They schedule you a priority daytime appointment, bumped straight to the
            top of the book. No waiting until Thursday between &quot;8 and 4.&quot;
          </p>

          <p>
            And here&apos;s the part that makes people do a double-take: when you join Diamond VIP,
            we walk through your home like we&apos;re{" "}
            <em style={{ color: ELECTRIC_BLUE }}>disarming a nuclear bomb</em>. We label and photograph
            every single water valve, every shutoff, every emergency access point. We hand you a map of
            your own plumbing — a literal blueprint of every pipe, valve, and drain in your house. So
            if something ever does go sideways, you know exactly which valve to turn. The water stops
            before the panic starts. Then you call us, and we handle the rest.
          </p>

          <p>
            Plus, the moment you sign up, a{" "}
            <strong style={{ color: WARM_YELLOW }}>$20 Instant Welcome Credit</strong> certificate
            drops into your account. Use it on your very first scheduled service, your first routine
            flush — whatever you need. Think of it as your first drink on the house, except
            it&apos;s plumbing, and your house isn&apos;t flooding.
          </p>

          <p>
            No wading through the{" "}
            <strong style={{ color: "#dc2626" }}>Bog of Eternal Stench</strong> — that swamp of
            surprise fees, shady quotes, and &quot;we&apos;ll get there when we get there&quot;
            attitude that other plumbers drag you through. (Yes, we named it after the Labyrinth
            swamp. If you know, you know. If you don&apos;t, ask your plumber why they charge
            double on Saturdays.) We help families across the Inland Empire stay free of hassle
            and plumbing overpayments — one Diamond VIP at a time.
          </p>

          <p
            className="text-xl md:text-2xl font-black leading-snug pt-4"
            style={{ color: WHITE }}
          >
            For <span style={{ color: WARM_YELLOW }}>$22 a month</span> — less than your streaming
            subscription — you&apos;ve got a friend in the plumbing business.
            <br />
            <span style={{ color: WARM_YELLOW }}>
              And that friend actually picks up the phone.
            </span>
          </p>
        </div>

        {/* CTA row */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
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
            JOIN DIAMOND VIP
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   SECTION 2: PREMIUM 4-ITEM GRID (NON-EMERGENCY)
   ══════════════════════════════════════════════════════════════════════ */
function BenefitsGrid() {
  const benefits = [
    {
      icon: Smartphone,
      title: "Dedicated VIP Hotline",
      desc: "Preferred member scheduling — bumped straight to the top of our daytime appointment book. No waiting, no hold music, no \"we'll call you back.\"",
      accent: ELECTRIC_BLUE,
    },
    {
      icon: Gift,
      title: "$20 Instant Welcome Gift",
      desc: "A $20 instant welcome credit certificate dropped into your account the moment you sign up. Good toward your very first scheduled service or routine flush.",
      accent: WARM_YELLOW,
    },
    {
      icon: Wrench,
      title: "Preferred 15% Savings",
      desc: "Majorly cuts down your bill on all preventative maintenance and fixture upgrades. Members save an average of $150/year on routine work alone.",
      accent: "#10b981",
    },
    {
      icon: Shield,
      title: "No Bog of Eternal Stench",
      desc: "Free annual main line camera checkups keep your yard and property pristine. No surprise backups, no mystery clogs — just peace of mind, every single year.",
      accent: "#8b5cf6",
    },
  ];

  return (
    <section className="py-20 md:py-28" style={{ background: "#0d1117" }}>
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Section label */}
        <div className="text-center mb-14">
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: ELECTRIC_BLUE }}
          >
            Premium Perks
          </span>
          <h2
            className="mt-3 text-3xl md:text-4xl font-black leading-tight tracking-tight"
            style={{ color: WHITE }}
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
              className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/60 hover:border-zinc-700 transition-all duration-300 group"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${b.accent}15` }}
              >
                <b.icon className="w-7 h-7" style={{ color: b.accent }} />
              </div>
              <h3 className="text-lg font-black" style={{ color: WHITE }}>
                {b.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
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
   SECTION 3: HIGH-CONVERSION DIGITAL COUPONS GRID
   ══════════════════════════════════════════════════════════════════════ */
function CouponsGrid() {
  const coupons = [
    {
      title: "HD Camera Mainline Inspection",
      price: "$99",
      savings: "Save $151",
      originalPrice: "$250",
      accent: ELECTRIC_BLUE,
    },
    {
      title: "System Flush & Tune-Up",
      price: "$49",
      savings: "Save $140",
      originalPrice: "$189",
      accent: WARM_YELLOW,
    },
    {
      title: "Leak & Pressure Diagnostic",
      price: "$69",
      savings: "Save $106",
      originalPrice: "$175",
      accent: "#10b981",
    },
  ];

  return (
    <section className="py-20 md:py-28" style={{ background: NAVY }}>
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Section label */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase" style={{ color: WARM_YELLOW }}>
            <CouponIcon className="w-4 h-4" />
            VIP-ONLY COUPONS
          </span>
          <h2
            className="mt-3 text-3xl md:text-4xl font-black leading-tight tracking-tight"
            style={{ color: WHITE }}
          >
            Your Digital Coupon Book
            <br />
            <span style={{ color: WARM_YELLOW }}>Already Loaded &amp; Ready</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            These exclusive rates are available to Diamond VIP members only. Not
            someday — right now. Use them on your very first scheduled service.
          </p>
        </div>

        {/* Coupon cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {coupons.map((c, i) => (
            <div
              key={i}
              className="relative rounded-2xl border-2 border-dashed p-8 text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              style={{
                borderColor: c.accent,
                background: "rgba(13,17,23,0.7)",
              }}
            >
              {/* Scissors notch top-left */}
              <div
                className="absolute -top-3 -left-3 w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: "#0d1117", border: `2px dashed ${c.accent}` }}
              >
                <Scissors className="w-3.5 h-3.5" style={{ color: c.accent }} />
              </div>

              {/* Savings badge */}
              <div
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold mb-5"
                style={{ background: `${c.accent}18`, color: c.accent }}
              >
                <Tag className="w-3.5 h-3.5" />
                {c.savings}
              </div>

              {/* Service title */}
              <h3 className="text-base font-bold mb-4" style={{ color: WHITE }}>
                {c.title}
              </h3>

              {/* Price */}
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl font-black" style={{ color: c.accent }}>
                  {c.price}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  {c.originalPrice}
                </span>
              </div>

              {/* Fine print */}
              <p className="mt-4 text-xs text-gray-500 leading-relaxed">
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
   SECTION 4: VERIFIED NEXTDOOR TESTIMONIALS
   ══════════════════════════════════════════════════════════════════════ */
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Marcus T.",
      location: "Rancho Cucamonga",
      text: "I called Santos on a Monday morning for a routine water heater check. They had someone at my door by noon that same day — no waiting, no hassle. The Diamond VIP priority booking is the real deal. Feels good knowing I can just call and get on the schedule same-day.",
    },
    {
      name: "Elena R.",
      location: "Fontana",
      text: "The annual camera checkup caught a slab leak forming under our foundation before it ever surfaced. That alone saved us thousands in potential damage. The 15% preferred savings on top of that? Diamond VIP has paid for itself ten times over. I tell every neighbor about it.",
    },
    {
      name: "David K.",
      location: "Chino",
      text: "Three plumbers before Santos gave me estimates that were all over the map. Santos gave me a flat rate upfront, no games, no hidden line items. I signed up for Diamond VIP that same visit. Upfront pricing and priority scheduling — what more could you want?",
    },
  ];

  return (
    <section className="py-20 md:py-28" style={{ background: "#0d1117" }}>
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

              {/* Quote */}
              <p className="text-sm text-gray-400 leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
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
    <footer style={{ background: "#0d1117" }} className="pt-12 pb-8">
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
        <StorySection />
        <BenefitsGrid />
        <CouponsGrid />
        <TestimonialsSection />
        <PricingCTA />
      </main>
      <Footer />
    </div>
  );
}
