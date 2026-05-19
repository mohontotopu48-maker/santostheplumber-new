import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  services,
  getServiceBySlug,
  getAllServiceSlugs,
  SERVICE_COLUMNS,
  SERVICE_AREA_CITIES,
} from "@/lib/services-data";
import { CheckCircle2, AlertTriangle, Phone, ArrowRight, Star, Shield, Clock, MapPin, ChevronRight, Heart, Crown, Zap, Users, CalendarCheck, BadgeCheck } from "lucide-react";
import { ServiceCtaButtons, StickyHeaderCta } from "@/components/service-cta";

/* ─── Colour Tokens ─── */
const NAVY = "#001F3F";
const YELLOW = "#FFD700";
const WHITE = "#FFFFFF";
const ELECTRIC_BLUE = "#38BDF8";
const WARM_YELLOW = "#FBBF24";

/* ─── Custom Nextdoor Icon ─── */
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

/* ══════════════════════════════════════════════════════════════════════
   STATIC GENERATION
   ══════════════════════════════════════════════════════════════════════ */
export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const service = getServiceBySlug(slug);
    if (!service) return { title: "Service Not Found" };

    return {
      title: `${service.title} | Santos Plumbing — Inland Empire & Foothill Communities`,
      description: service.metaDescription,
      openGraph: {
        title: service.h1,
        description: service.metaDescription,
        type: "website",
      },
    };
  });
}

/* ══════════════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ══════════════════════════════════════════════════════════════════════ */
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const categoryColumn = SERVICE_COLUMNS.find(
    (c) => c.title === service.category
  );

  return (
    <div className="min-h-screen flex flex-col" style={{ background: WHITE }}>
      {/* ─── A. STICKY SERVICE HEADER ─── */}
      <header className="sticky top-0 z-50 w-full" style={{ background: NAVY }}>
        <div className="flex items-center justify-between px-4 md:px-8 py-3 max-w-7xl mx-auto">
          {/* Logo + Breadcrumb */}
          <div className="flex items-center gap-3 min-w-0">
            <a href="/" className="flex items-center gap-2 shrink-0">
              <img
                src="/santos-logo-v2.png"
                alt="Santos Plumbing Logo"
                className="h-8 w-8 md:h-9 md:w-9 object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span
                  className="font-extrabold text-lg md:text-xl tracking-tight"
                  style={{ color: WHITE }}
                >
                  SANTOS
                </span>
                <span
                  className="font-semibold text-[0.55rem] md:text-[0.65rem] uppercase tracking-[0.12em] mt-[-2px]"
                  style={{ color: WARM_YELLOW }}
                >
                  Plumbing
                </span>
              </div>
            </a>
            <ChevronRight className="w-4 h-4 shrink-0" style={{ color: "#6b7280" }} />
            <span className="text-sm text-gray-400 truncate hidden sm:inline">Our Services</span>
            <ChevronRight className="w-4 h-4 shrink-0 hidden sm:inline" style={{ color: "#6b7280" }} />
            <span className="text-sm font-semibold truncate" style={{ color: ELECTRIC_BLUE }}>
              {service.title}
            </span>
          </div>

          {/* Phone + CTA */}
          <div className="hidden lg:block">
            <StickyHeaderCta phone="(909) 256-2244" />
          </div>

          {/* Mobile phone only */}
          <a
            href="tel:9092562244"
            className="lg:hidden font-bold text-sm flex items-center gap-1.5"
            style={{ color: YELLOW, whiteSpace: "nowrap" }}
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">(909) 256-2244</span>
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* ─── B. HERO SECTION ─── */}
        <section className="relative overflow-hidden" style={{ background: NAVY }}>
          {/* Subtle gradient overlay */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(ellipse at 80% 20%, ${service.categoryColor}22 0%, transparent 60%)`,
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-center">
              {/* Left side — Content */}
              <div className="lg:col-span-3">
                {/* Category breadcrumb */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5"
                  style={{ background: `${service.categoryColor}18`, color: service.categoryColor, border: `1px solid ${service.categoryColor}30` }}
                >
                  <span>{service.categoryEmoji}</span>
                  {service.category}
                </div>

                {/* H1 Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.12] tracking-tight mb-5">
                  <span style={{ color: WHITE }}>{service.h1}</span>
                </h1>

                {/* Hook paragraph */}
                <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mb-8">
                  {service.hook}
                </p>

                {/* Dual CTA Buttons */}
                <ServiceCtaButtons
                  phone="(909) 256-2244"
                  serviceTitle={service.title}
                />
              </div>

              {/* Right side — Category accent card */}
              <div className="lg:col-span-2 flex justify-center lg:justify-end">
                <div
                  className="relative w-full max-w-sm rounded-2xl p-8 text-center overflow-hidden"
                  style={{ background: `${service.categoryColor}12`, border: `2px solid ${service.categoryColor}30` }}
                >
                  {/* Accent stripe */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5"
                    style={{ background: service.categoryColor }}
                  />
                  <div className="text-6xl mb-4">{service.categoryEmoji}</div>
                  <h2
                    className="text-xl font-black tracking-tight mb-2"
                    style={{ color: WHITE }}
                  >
                    {service.title}
                  </h2>
                  <p className="text-sm text-gray-400">
                    {service.category}
                  </p>
                  {/* Decorative bottom accent */}
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full"
                    style={{ background: service.categoryColor }}
                  />
                </div>
              </div>
            </div>

            {/* Trust bar */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Star, text: "5.0 Google Rating", sub: "Verified Reviews" },
                  { icon: Shield, text: "Nextdoor Local Verified", sub: "Community Trusted" },
                  { icon: Clock, text: "Same-Day Service Available", sub: "When You Need Us" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <div
                      className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: `${service.categoryColor}15` }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: service.categoryColor }} />
                    </div>
                    <div>
                      <p className="font-bold text-sm" style={{ color: WHITE }}>{item.text}</p>
                      <p className="text-xs text-gray-500">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── C. ABOUT SECTION ─── */}
        <section className="py-16 md:py-24" style={{ background: WHITE }}>
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
              {/* Left — Description */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-1 h-8 rounded-full"
                    style={{ background: service.categoryColor }}
                  />
                  <h2 className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: NAVY }}>
                    About This Service
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {service.description}
                </p>
              </div>

              {/* Right — Sticky contact box */}
              <div className="lg:col-span-1">
                <div
                  className="sticky top-24 rounded-2xl p-6 shadow-xl"
                  style={{ background: NAVY, border: `2px solid ${service.categoryColor}30` }}
                >
                  <div
                    className="h-1.5 w-16 rounded-full mb-5"
                    style={{ background: YELLOW }}
                  />
                  <h3 className="text-xl font-black mb-2" style={{ color: WHITE }}>
                    Get Expert Help Now
                  </h3>
                  <p className="text-sm text-gray-400 mb-6">
                    Speak directly with a certified Santos technician about your {service.title.toLowerCase()} needs.
                  </p>

                  <a
                    href="tel:9092562244"
                    className="w-full font-bold text-base px-6 py-4 rounded-md text-black shadow-xl hover:scale-105 transition-transform inline-flex items-center justify-center gap-2 mb-3"
                    style={{ background: YELLOW }}
                  >
                    <Phone className="w-4 h-4" />
                    (909) 256-2244
                  </a>

                  <a
                    href="tel:9092562244"
                    className="w-full font-bold text-sm px-6 py-3 rounded-md inline-flex items-center justify-center gap-2 border-2 transition-colors"
                    style={{ borderColor: ELECTRIC_BLUE, color: ELECTRIC_BLUE, background: "transparent" }}
                  >
                    REQUEST SERVICE
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2">
                    <Clock className="w-4 h-4" style={{ color: service.categoryColor }} />
                    <span className="text-xs text-gray-400">24/7 Emergency Line Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── D. INCLUSIONS SECTION ─── */}
        <section className="py-16 md:py-24" style={{ background: "#f8fafc" }}>
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex items-center gap-2 mb-8">
              <CheckCircle2 className="w-6 h-6" style={{ color: service.categoryColor }} />
              <h2 className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: NAVY }}>
                What&apos;s Included in This Service
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {service.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div
                    className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                    style={{ background: `${service.categoryColor}12` }}
                  >
                    <CheckCircle2 className="w-4.5 h-4.5" style={{ color: service.categoryColor }} />
                  </div>
                  <p className="font-semibold text-sm" style={{ color: NAVY }}>
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── E. WARNING SIGNS SECTION ─── */}
        <section className="py-16 md:py-24" style={{ background: WHITE }}>
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div
              className="rounded-2xl p-6 md:p-10"
              style={{
                background: `${service.categoryColor}06`,
                border: `2px solid ${service.categoryColor}25`,
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: `${service.categoryColor}15` }}
                >
                  <AlertTriangle className="w-5 h-5" style={{ color: service.categoryColor }} />
                </div>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: NAVY }}>
                  Warning Signs to Watch For
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {service.warningSigns.map((sign, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl"
                    style={{ background: WHITE, borderLeft: `3px solid ${service.categoryColor}` }}
                  >
                    <AlertTriangle
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: service.categoryColor }}
                    />
                    <p className="text-sm text-gray-700 font-medium">{sign}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 rounded-xl" style={{ background: WHITE }}>
                <p className="text-sm text-gray-600">
                  Experiencing any of these signs? Don&apos;t wait for the problem to get worse.
                </p>
                <a
                  href="tel:9092562244"
                  className="font-bold text-sm px-5 py-2.5 rounded-md text-black shadow-lg hover:scale-105 transition-transform inline-flex items-center gap-2 shrink-0"
                  style={{ background: YELLOW }}
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call (909) 256-2244
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── F. AUTHORITY SECTION ─── */}
        <section className="py-16 md:py-24" style={{ background: NAVY }}>
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-3" style={{ color: WHITE }}>
                Why Choose Santos Plumbing &amp; Rooter?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Trusted by over 1,000 families across the Inland Empire and Foothill Communities
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: "💰",
                  title: "Flat-Rate Transparent Pricing",
                  desc: "Know the price before work begins. No surprise charges, no hidden fees, no variable rate games.",
                },
                {
                  icon: "🏆",
                  title: "Certified Local Mastery",
                  desc: "Santos technicians are certified, background-checked, and trained to surgical precision standards.",
                },
                {
                  icon: "🚫",
                  title: "Zero Hidden Weekend/Surge Fees",
                  desc: "Diamond VIP members never pay surge pricing. Same honest rate 365 days a year.",
                },
                {
                  icon: "⚡",
                  title: "Immediate Dispatch Routing",
                  desc: "Live 24/7 dispatch gets a certified technician to your door when you need one — not next week.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl hover:translate-y-[-2px] transition-transform"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="text-3xl mb-3">{card.icon}</div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: WHITE }}>
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── F2. DIAMOND VIP CTA — "FRIEND IN THE PLUMBING BUSINESS" ─── */}
        <section className="py-16 md:py-20" style={{ background: "linear-gradient(135deg, #001F3F 0%, #0a2e52 50%, #001F3F 100%)" }}>
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div
              className="relative rounded-2xl p-8 md:p-12 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${WARM_YELLOW}10 0%, ${WARM_YELLOW}05 100%)`,
                border: `2px solid ${WARM_YELLOW}35`,
              }}
            >
              {/* Accent glow */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
                style={{ background: WARM_YELLOW }}
              />

              <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
                {/* Left — Copy */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5"
                    style={{ background: `${WARM_YELLOW}20`, color: WARM_YELLOW, border: `1px solid ${WARM_YELLOW}40` }}
                  >
                    <Crown className="w-3.5 h-3.5" />
                    DIAMOND VIP CARE CLUB
                  </div>

                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mb-4" style={{ color: WHITE }}>
                    Your Friend in the Plumbing Business
                  </h2>

                  <p className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg">
                    For just <span className="font-black" style={{ color: WARM_YELLOW }}>$22/month</span>, the Santos Diamond VIP Care Club gives you a dedicated plumbing partner on call — with priority scheduling, zero surge fees, and exclusive member pricing on every service. It&apos;s like having a friend in the plumbing business, 365 days a year.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="/services/diamond-vip-membership"
                      className="font-bold text-base px-6 py-4 rounded-md text-black shadow-xl hover:scale-105 transition-transform inline-flex items-center justify-center gap-2"
                      style={{ background: WARM_YELLOW }}
                    >
                      <Crown className="w-4 h-4" />
                      JOIN DIAMOND VIP — $22/MO
                    </a>
                    <a
                      href="tel:9092562244"
                      className="font-bold text-sm px-6 py-4 rounded-md inline-flex items-center justify-center gap-2 border-2 transition-colors hover:bg-white/5"
                      style={{ borderColor: ELECTRIC_BLUE, color: ELECTRIC_BLUE }}
                    >
                      <Phone className="w-4 h-4" />
                      Call (909) 256-2244
                    </a>
                  </div>
                </div>

                {/* Right — Perks Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Zap, title: "Priority Dispatch", desc: "First in line, every time" },
                    { icon: Shield, title: "Zero Surge Fees", desc: "Same rate 365 days/year" },
                    { icon: CalendarCheck, title: "Annual Safety Inspection", desc: "20-point system check included" },
                    { icon: Users, title: "VIP-Only Pricing", desc: "Exclusive member discounts" },
                    { icon: BadgeCheck, title: "Leak Agent AI Access", desc: "Smart diagnostics first" },
                    { icon: Star, title: "Early Service Access", desc: "New offerings before anyone" },
                  ].map((perk, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <perk.icon className="w-5 h-5 mb-2" style={{ color: WARM_YELLOW }} />
                      <p className="font-bold text-xs mb-0.5" style={{ color: WHITE }}>{perk.title}</p>
                      <p className="text-[10px] text-gray-500 leading-tight">{perk.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tagline */}
              <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <p className="text-xs text-gray-400">
                  Join 1,000+ Inland Empire and Foothill homeowners who trust Santos as their friend in the plumbing business.
                </p>
                <a
                  href="/services/diamond-vip-membership"
                  className="text-xs font-bold inline-flex items-center gap-1 transition-colors hover:underline"
                  style={{ color: WARM_YELLOW }}
                >
                  View all Diamond VIP benefits
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── G. COVERAGE SECTION ─── */}
        <section className="py-16 md:py-24" style={{ background: WHITE }}>
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <MapPin className="w-8 h-8 mx-auto mb-4" style={{ color: service.categoryColor }} />
            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-3" style={{ color: NAVY }}>
              Our Core Service Territory
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
              Available Across the Inland Empire &amp; Foothills
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {SERVICE_AREA_CITIES.map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105"
                  style={{
                    background: `${service.categoryColor}10`,
                    color: service.categoryColor,
                    border: `1.5px solid ${service.categoryColor}30`,
                  }}
                >
                  <MapPin className="w-3.5 h-3.5 mr-1.5" style={{ color: service.categoryColor }} />
                  {city}
                </span>
              ))}
            </div>

            <p className="mt-8 text-sm text-gray-400">
              Serving a 15-mile radius from Upland, CA across San Bernardino, Riverside, and East Los Angeles Counties.
            </p>
          </div>
        </section>
      </main>

      {/* ─── H. SERVICE FOOTER ─── */}
      <footer style={{ background: NAVY }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <img
                  src="/santos-logo-v2.png"
                  alt="Santos Plumbing Logo"
                  className="h-9 w-9 object-contain"
                />
                <div className="flex flex-col leading-tight">
                  <span className="font-extrabold text-lg tracking-tight" style={{ color: WHITE }}>
                    SANTOS
                  </span>
                  <span
                    className="font-semibold text-[0.55rem] uppercase tracking-[0.12em] mt-[-2px]"
                    style={{ color: WARM_YELLOW }}
                  >
                    Plumbing
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-2">
                <span style={{ color: WARM_YELLOW }} className="font-bold">
                  &ldquo;If You Got A Leak, We&apos;ll Take A Peek!&rdquo;
                </span>
              </p>
              <a
                href="tel:9092562244"
                className="font-bold text-lg flex items-center gap-2 mt-3"
                style={{ color: YELLOW }}
              >
                <Phone className="w-5 h-5" />
                (909) 256-2244
              </a>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-bold text-sm mb-4" style={{ color: WHITE }}>
                Our Services
              </h4>
              <div className="space-y-2">
                {services.slice(0, 6).map((s) => (
                  <a
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block text-sm text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Social + back */}
            <div>
              <h4 className="font-bold text-sm mb-4" style={{ color: WHITE }}>
                Connect With Us
              </h4>
              <div className="flex gap-2 mb-6">
                {[
                  { label: "Facebook", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                  { label: "Instagram", icon: "M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zM12 15a3 3 0 110-6 3 3 0 010 6z" },
                  { label: "LinkedIn", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" },
                  { label: "Nextdoor", icon: "" },
                ].map((social, i) => (
                  <a
                    key={social.label}
                    href="#"
                    className="social-tile"
                    aria-label={social.label}
                  >
                    {social.label === "Nextdoor" ? (
                      <NextdoorIcon className="w-5 h-5" />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                      >
                        <path d={social.icon} />
                      </svg>
                    )}
                  </a>
                ))}
              </div>

              <a
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-gray-200"
                style={{ color: ELECTRIC_BLUE }}
              >
                ← Back to Homepage
              </a>
            </div>
          </div>

          {/* Bottom credits */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Santos Plumbing. All rights reserved.
            </p>
            <p className="text-[10px] text-gray-500 agency-credits">
              <span className="agency-managed-line">
                Powered by NXLBYLDR CRM | managed by{" "}
                <a
                  href="https://vsualdigitalmedia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="agency-link"
                >
                  <span className="agency-brand font-semibold text-gray-500 transition-colors">VSUAL</span>
                  <span className="agency-domain text-gray-500 transition-colors">digitalmedia.com</span>
                </a>
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
