"use client";

import Link from "next/link";
import {
  Phone,
  MapPin,
  ArrowRight,
  Heart,
  Facebook,
  Instagram,
  Linkedin,
  Shield,
  Clock,
  Zap,
  Activity,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─── Colour Tokens ─── */
const NAVY = "#001F3F";
const YELLOW = "#FFD700";
const WHITE = "#FFFFFF";
const ELECTRIC_BLUE = "#38BDF8";
const WARM_YELLOW = "#FBBF24";

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
   HERO SECTION
   ══════════════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 lg:py-40" style={{ background: NAVY }}>
      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F] via-[#001a35] to-[#002244]" />

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold mb-8"
          style={{ background: "rgba(56,189,248,0.12)", color: ELECTRIC_BLUE, border: `1px solid ${ELECTRIC_BLUE}30` }}
        >
          <Activity className="w-4 h-4" />
          INTU-MAP AREA MONITOR
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
          <span style={{ color: WHITE }}>Real-Time Service Territory</span>
          <br />
          <span style={{ color: ELECTRIC_BLUE }}>&amp; Coverage Mapping</span>
        </h1>

        {/* Subhead */}
        <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Proving our presence on the ground. A lightweight, 100% free interactive geospatial layout showing every community Santos Plumbing serves across the Inland Empire and Foothill regions.
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
            style={{ borderColor: ELECTRIC_BLUE, color: ELECTRIC_BLUE, background: "transparent" }}
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
   INTERACTIVE MAP COMPONENT PANEL
   ══════════════════════════════════════════════════════════════════════ */
function MapPanel() {
  return (
    <section className="py-16 md:py-24" style={{ background: NAVY }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Glassmorphism container */}
        <div
          className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 shadow-2xl overflow-hidden"
        >
          {/* ── Faux Tech Status Bar ── */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-4 py-3 mb-4 rounded-xl"
            style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            {/* System status */}
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#10b981" }} />
                <span className="relative inline-flex rounded-full h-3 w-3" style={{ background: "#10b981" }} />
              </span>
              <span className="text-sm font-bold tracking-wider" style={{ color: "#10b981" }}>
                SYSTEM STATUS: ACTIVE
              </span>
            </div>

            {/* Tracking counter */}
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" style={{ color: ELECTRIC_BLUE }} />
              <span className="text-sm font-semibold text-gray-300">
                Primary Service Hubs: <span className="font-black" style={{ color: ELECTRIC_BLUE }}>6 Cities Secured</span>
              </span>
            </div>
          </div>

          {/* ── Map Embed Container ── */}
          <div className="relative rounded-xl overflow-hidden border border-zinc-800">
            {/* Scan-line overlay for premium tech aesthetic */}
            <div
              className="absolute inset-0 z-10 pointer-events-none opacity-[0.04]"
              style={{
                backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(56,189,248,0.15) 2px, rgba(56,189,248,0.15) 4px)",
                backgroundSize: "100% 4px",
              }}
            />

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105743.14249339396!2d-117.70119285!3d34.0964724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c334336c117d87%3A0x272ae4cb9b09ef32!2sUpland%2C%20CA!5e0!3m2!1sen!2sus!4v1716123456789!5m2!1sen!2sus"
              className="w-full h-[450px] rounded-xl border border-zinc-800 grayscale invert brightness-[0.9] contrast-[1.2]"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Santos Plumbing Service Territory Map"
            />

            {/* Corner accents for HUD-like framing */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 z-20 pointer-events-none" style={{ borderColor: ELECTRIC_BLUE }} />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 z-20 pointer-events-none" style={{ borderColor: ELECTRIC_BLUE }} />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 z-20 pointer-events-none" style={{ borderColor: ELECTRIC_BLUE }} />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 z-20 pointer-events-none" style={{ borderColor: ELECTRIC_BLUE }} />
          </div>

          {/* ── Mini Status Footer ── */}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-4 px-2">
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" style={{ color: "#10b981" }} />
                Coverage Verified
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" style={{ color: ELECTRIC_BLUE }} />
                Updated Daily
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" style={{ color: WARM_YELLOW }} />
                15-Mile Dispatch Radius
              </span>
            </div>
            <span className="text-xs text-gray-600">
              Powered by INTU-MAP v2.4
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   6 TARGET HUB INFORMATION CARDS
   ══════════════════════════════════════════════════════════════════════ */
const hubData = [
  {
    city: "Upland Hub",
    tagline: "Central Dispatch Headquarters",
    description:
      "Providing localized rooter support across all historic Foothill neighborhoods. Upland serves as the primary operations base where Santos technicians are dispatched from, ensuring the fastest possible response times for emergency and scheduled calls throughout the Foothill corridor.",
    accent: ELECTRIC_BLUE,
    icon: "HQ",
    metrics: { responseTime: "< 25 min", coverage: "15 mi radius", dispatchPriority: "Primary" },
  },
  {
    city: "Rancho Cucamonga Hub",
    tagline: "Premium Scheduled Priority Coverage",
    description:
      "Premium scheduled priority coverage across all master-planned communities north of Foothill Blvd. From Victoria Gardens to Alta Loma, Santos maintains dedicated routing for homeowners who expect white-glove service windows and guaranteed arrival slots.",
    accent: "#10b981",
    icon: "RC",
    metrics: { responseTime: "< 30 min", coverage: "12 mi radius", dispatchPriority: "Priority" },
  },
  {
    city: "Fontana Hub",
    tagline: "Dedicated Drain & Pipe Restoration",
    description:
      "Dedicated drain cleaning and pipe restoration maintenance routes operating daily. Fontana residents benefit from Santos\u2019 specialized hydro-jetting crews and trenchless repair teams who run scheduled routes through the city\u2019s established neighborhoods every business day.",
    accent: "#f97316",
    icon: "FN",
    metrics: { responseTime: "< 35 min", coverage: "10 mi radius", dispatchPriority: "Daily Route" },
  },
  {
    city: "Ontario Hub",
    tagline: "Commercial & Residential Fixture Specialist",
    description:
      "Commercial and residential fixture upgrades specializing in immediate daytime priority dispatch. Ontario\u2019s mix of newer developments and established commercial properties requires versatile plumbing expertise, and Santos technicians are cross-trained to handle both with equal precision.",
    accent: "#8b5cf6",
    icon: "ON",
    metrics: { responseTime: "< 30 min", coverage: "12 mi radius", dispatchPriority: "Daytime Priority" },
  },
  {
    city: "Chino Hub",
    tagline: "Whole-Home Health & Safety Checkups",
    description:
      "Systemic home health plumbing safety checkups and whole-home water purification layouts. Chino\u2019s ranch-style homes and growing family developments benefit from Santos\u2019 comprehensive safety inspection protocols and advanced water filtration installations that protect every tap in the house.",
    accent: "#ec4899",
    icon: "CH",
    metrics: { responseTime: "< 35 min", coverage: "10 mi radius", dispatchPriority: "Scheduled" },
  },
  {
    city: "Fullerton Hub",
    tagline: "Structural Diagnostics & Modernization",
    description:
      "Strategic residential structural line scoping, camera diagnostics, and fixture modernizations. Fullerton\u2019s mature housing stock demands advanced diagnostic capabilities, and Santos brings fiber-optic camera inspection technology and trenchless rehabilitation methods to keep older homes flowing perfectly.",
    accent: WARM_YELLOW,
    icon: "FL",
    metrics: { responseTime: "< 40 min", coverage: "8 mi radius", dispatchPriority: "Specialist" },
  },
];

function HubCards() {
  return (
    <section className="py-20 md:py-28" style={{ background: WHITE }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: NAVY }}
          >
            Service Territory
          </span>
          <h2
            className="mt-3 text-3xl md:text-4xl font-black leading-tight tracking-tight"
            style={{ color: NAVY }}
          >
            6 Primary Service Hubs
            <br />
            <span style={{ color: ELECTRIC_BLUE }}>Across the Inland Empire</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Every hub is staffed with certified Santos technicians who live in the communities they serve. That local knowledge means faster arrivals, better diagnostics, and neighbors who genuinely care about your home.
          </p>
        </div>

        {/* Hub cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {hubData.map((hub, i) => (
            <div
              key={i}
              className="group relative p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Top accent stripe */}
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
                style={{ background: hub.accent }}
              />

              {/* Hub badge */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm"
                  style={{ background: `${hub.accent}15`, color: hub.accent }}
                >
                  {hub.icon}
                </div>
                <MapPin className="w-5 h-5 text-gray-300 group-hover:text-gray-400 transition-colors" />
              </div>

              {/* City name */}
              <h3 className="text-lg font-black" style={{ color: NAVY }}>
                {hub.city}
              </h3>
              <p className="text-sm font-semibold mt-1" style={{ color: hub.accent }}>
                {hub.tagline}
              </p>

              {/* Description */}
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                {hub.description}
              </p>

              {/* Metrics row */}
              <div className="mt-5 pt-4 border-t border-gray-100 grid grid-cols-3 gap-2">
                <div className="text-center">
                  <p className="text-xs font-bold" style={{ color: NAVY }}>{hub.metrics.responseTime}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Response</p>
                </div>
                <div className="text-center">
                  <p className="text-xs font-bold" style={{ color: NAVY }}>{hub.metrics.coverage}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Coverage</p>
                </div>
                <div className="text-center">
                  <p className="text-xs font-bold" style={{ color: hub.accent }}>{hub.metrics.dispatchPriority}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Priority</p>
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
   COVERAGE STATS BAR
   ══════════════════════════════════════════════════════════════════════ */
function StatsBar() {
  const stats = [
    { value: "1,000+", label: "Neighbors Served", icon: "👥" },
    { value: "6", label: "City Hubs Active", icon: "📍" },
    { value: "15 mi", label: "Dispatch Radius", icon: "📡" },
    { value: "24/7", label: "Emergency Coverage", icon: "⚡" },
  ];

  return (
    <section className="py-12 md:py-16" style={{ background: "#0a1628" }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <span className="text-2xl mb-2 block">{stat.icon}</span>
              <p
                className="text-3xl md:text-4xl font-black tracking-tight"
                style={{ color: ELECTRIC_BLUE }}
              >
                {stat.value}
              </p>
              <p className="text-sm text-gray-400 mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   CTA SECTION
   ══════════════════════════════════════════════════════════════════════ */
function CtaSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: NAVY }}>
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight" style={{ color: WHITE }}>
          We&apos;re in Your Neighborhood.
          <br />
          <span style={{ color: WARM_YELLOW }}>Let&apos;s Prove It.</span>
        </h2>
        <p className="mt-5 text-gray-300 leading-relaxed max-w-xl mx-auto">
          Whether you&apos;re in Upland, Rancho Cucamonga, Fontana, Ontario, Chino, or Fullerton — a certified Santos technician is already close by. Call now and see how fast we arrive.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:9092562244"
            className="font-bold text-lg px-10 py-5 rounded-md text-black shadow-xl hover:scale-105 transition-transform inline-flex items-center justify-center"
            style={{ background: YELLOW }}
          >
            <Phone className="w-5 h-5 mr-2" />
            (909) 256-2244
          </a>
          <Link
            href="/diamond-vip"
            className="font-bold text-lg px-10 py-5 rounded-md border-2 shadow-xl hover:scale-105 transition-transform inline-flex items-center justify-center"
            style={{ borderColor: WARM_YELLOW, color: WARM_YELLOW, background: "transparent" }}
          >
            JOIN DIAMOND VIP
            <ChevronRight className="w-5 h-5 ml-1" />
          </Link>
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
              Locally Owned &amp; Family Operated
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
export default function ServiceTerritoryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection />
        <MapPanel />
        <HubCards />
        <StatsBar />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
