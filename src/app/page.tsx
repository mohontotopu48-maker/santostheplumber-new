"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Menu,
  X,
  Shield,
  DollarSign,
  MapPin,
  Clock,
  Wrench,
  Droplets,
  ThermometerSun,
  AlertTriangle,
  Camera,
  MessageSquare,
  ChevronRight,
  CheckCircle2,
  Zap,
  ArrowRight,
} from "lucide-react";

/* ─── Colour Tokens ─── */
const NAVY = "#001F3F";
const YELLOW = "#FFD700";
const WHITE = "#FFFFFF";

/* ══════════════════════════════════════════════════════════════════════
   HEADER
   ══════════════════════════════════════════════════════════════════════ */
function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { label: "Emergency Service", href: "#emergency" },
    { label: "Water Heaters", href: "#water-heaters" },
    { label: "Pipe Repairs", href: "#pipe-repairs" },
    { label: "Maintenance", href: "#maintenance" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full" style={{ background: NAVY }}>
      {/* Top bar – contact strip */}
      <div
        className="hidden md:flex items-center justify-end gap-6 px-6 py-1.5 text-xs"
        style={{ background: "rgba(0,0,0,0.25)" }}
      >
        <span className="text-gray-300">Serving Inland Empire & Foothill Communities</span>
        <a
          href="tel:9092569224"
          className="font-bold flex items-center gap-1.5"
          style={{ color: YELLOW }}
        >
          <Phone className="w-3.5 h-3.5" />
          (909) 256-9224
        </a>
      </div>

      {/* Main nav row */}
      <div className="flex items-center justify-between px-4 md:px-8 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <img
            src="/santos-logo.png"
            alt="Santos Plumbing Logo"
            className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-full"
          />
          <div className="leading-tight">
            <span
              className="font-extrabold text-lg md:text-xl tracking-tight"
              style={{ color: WHITE }}
            >
              SANTOS
            </span>
            <span
              className="font-extrabold text-lg md:text-xl tracking-tight block -mt-0.5"
              style={{ color: YELLOW }}
            >
              PLUMBING
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-gray-200 hover:text-white transition-colors rounded-md hover:bg-white/10"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA + phone */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:9092569224"
            className="font-bold text-sm flex items-center gap-1.5"
            style={{ color: YELLOW }}
          >
            <Phone className="w-4 h-4" />
            (909) 256-9224
          </a>
          <Button
            asChild
            className="font-bold px-6 py-2.5 rounded-md text-black shadow-lg hover:scale-105 transition-transform"
            style={{ background: YELLOW }}
          >
            <a href="#contact">REQUEST SERVICE</a>
          </Button>
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
        <div
          className="lg:hidden px-4 pb-6 pt-2 space-y-1"
          style={{ background: NAVY }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-gray-200 font-medium rounded-md hover:bg-white/10"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-4 space-y-3">
            <a
              href="tel:9092569224"
              className="block font-bold text-center py-3 rounded-md"
              style={{ color: YELLOW }}
            >
              <Phone className="w-4 h-4 inline mr-2" />
              (909) 256-9224
            </a>
            <Button
              asChild
              className="w-full font-bold py-3 rounded-md text-black"
              style={{ background: YELLOW }}
            >
              <a href="#contact">REQUEST SERVICE</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   HERO
   ══════════════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero-kitchen.png"
          alt="Modern clean kitchen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/95 via-[#001F3F]/80 to-[#001F3F]/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ background: "rgba(255,215,0,0.15)", color: YELLOW, border: `1px solid ${YELLOW}40` }}
          >
            <Zap className="w-3.5 h-3.5" />
            24/7 EMERGENCY RESPONSE
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
            <span style={{ color: WHITE }}>If You Got A Leak,</span>
            <br />
            <span style={{ color: YELLOW }}>We&apos;ll Take A Peek!</span>
          </h1>

          {/* Sub-headline */}
          <p className="mt-6 text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
            Fast, professional plumbing solutions for Inland Empire and Foothill homeowners.
            From emergency pipe repairs to water heater installations, we get it
            flowing right the first time.
          </p>

          {/* CTA row */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              className="font-bold text-lg px-8 py-6 rounded-md text-black shadow-xl hover:scale-105 transition-transform"
              style={{ background: YELLOW }}
            >
              <a href="#contact">
                REQUEST SERVICE
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="font-bold text-base px-8 py-6 rounded-md border-gray-500 text-white hover:bg-white/10"
            >
              <a href="tel:9092569224">
                <Phone className="w-5 h-5 mr-2" />
                (909) 256-9224
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="relative z-10" style={{ background: WHITE }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: Shield,
                title: "Licensed & Insured",
                desc: "Full protection for your home",
              },
              {
                icon: DollarSign,
                title: "Upfront Pricing",
                desc: "No surprise charges, ever",
              },
              {
                icon: MapPin,
                title: "909 & 951 Local Experts",
                desc: "Greater IE & Foothill Coverage",
              },
              {
                icon: Clock,
                title: "24/7 Emergency",
                desc: "We answer when you call",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: `${YELLOW}20` }}
                >
                  <item.icon className="w-5 h-5" style={{ color: NAVY }} />
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: NAVY }}>
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   HIDDEN LEAK EDUCATION
   ══════════════════════════════════════════════════════════════════════ */
function HiddenLeakSection() {
  return (
    <section id="emergency" className="py-20 md:py-28" style={{ background: WHITE }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section label */}
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5" style={{ color: "#dc2626" }} />
          <span className="text-xs font-bold tracking-widest uppercase text-red-600">
            Don&apos;t Ignore the Signs
          </span>
        </div>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight"
          style={{ color: NAVY }}
        >
          The Silent Flood: What&apos;s Happening
          <br className="hidden md:block" />
          <span style={{ color: "#dc2626" }}> Under Your Slab?</span>
        </h2>

        <div className="mt-12 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left – Thermal image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/thermal-leak.png"
              alt="Thermal imaging of a slab leak showing hot spot"
              className="w-full h-auto object-cover"
            />
            <div
              className="absolute bottom-4 left-4 px-3 py-1.5 rounded-md text-xs font-bold text-black"
              style={{ background: YELLOW }}
            >
              THERMAL LEAK DETECTION
            </div>
          </div>

          {/* Right – Copy */}
          <div className="space-y-6">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              A tiny pinhole leak in a copper pipe beneath your foundation might
              seem harmless — but it&apos;s anything but. Day after day, water
              erodes the soil under your slab, creating voids that cause your
              foundation to shift and crack. The damage compounds silently: what
              starts as a $200 repair can escalate into{" "}
              <strong className="text-red-600">$10,000+ in structural damage</strong>{" "}
              if left unchecked.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Foundation Cracks",
                  desc: "Water erodes soil beneath your slab, causing uneven settling and visible cracks in walls and floors.",
                },
                {
                  title: "Mold & Mildew Growth",
                  desc: "Hidden moisture creates the perfect breeding ground for toxic mold that threatens your family's health.",
                },
                {
                  title: "Skyrocketing Water Bills",
                  desc: "A pinhole leak can waste hundreds of gallons per day, sending your monthly bill through the roof.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle2
                    className="w-5 h-5 mt-0.5 shrink-0"
                    style={{ color: NAVY }}
                  />
                  <div>
                    <p className="font-bold text-sm" style={{ color: NAVY }}>
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="font-bold px-8 py-6 rounded-md text-black shadow-lg hover:scale-105 transition-transform mt-4"
              style={{ background: YELLOW }}
            >
              <a href="#contact">
                Schedule a Leak Detection — Free Inspection
                <ChevronRight className="w-5 h-5 ml-1 inline" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   SERVICE CARD HELPER
   ══════════════════════════════════════════════════════════════════════ */
function ServiceCard({
  id,
  icon: Icon,
  label,
  title,
  subtitle,
  description,
  features,
  imageSrc,
  imageAlt,
  ctaText,
  reversed,
}: {
  id: string;
  icon: React.ElementType;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  features: { title: string; desc: string }[];
  imageSrc: string;
  imageAlt: string;
  ctaText: string;
  reversed?: boolean;
}) {
  return (
    <section id={id} className="py-20 md:py-28">
      <div
        className="max-w-7xl mx-auto px-4 md:px-8"
      >
        {/* Label */}
        <div className="flex items-center gap-2 mb-4">
          <Icon className="w-5 h-5" style={{ color: YELLOW }} />
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: NAVY }}
          >
            {label}
          </span>
        </div>

        <h2
          className="text-3xl md:text-4xl font-black leading-tight tracking-tight"
          style={{ color: NAVY }}
        >
          {title}
        </h2>
        <p className="mt-2 text-lg font-medium" style={{ color: YELLOW }}>
          {subtitle}
        </p>

        <div
          className={`mt-12 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
            reversed ? "lg:direction-rtl" : ""
          }`}
        >
          {/* Image */}
          <div
            className={`relative rounded-2xl overflow-hidden shadow-2xl ${
              reversed ? "lg:order-2" : ""
            }`}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto object-cover"
            />
            <div
              className="absolute top-4 left-4 px-3 py-1.5 rounded-md text-xs font-bold text-black"
              style={{ background: YELLOW }}
            >
              SANTOS PLUMBING
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-6 ${reversed ? "lg:order-1" : ""}`}>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {description}
            </p>

            <div className="space-y-4">
              {features.map((f, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle2
                    className="w-5 h-5 mt-0.5 shrink-0"
                    style={{ color: YELLOW }}
                  />
                  <div>
                    <p className="font-bold text-sm" style={{ color: NAVY }}>
                      {f.title}
                    </p>
                    <p className="text-sm text-gray-500">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="font-bold px-8 py-6 rounded-md text-black shadow-lg hover:scale-105 transition-transform mt-4"
              style={{ background: YELLOW }}
            >
              <a href="#contact">
                {ctaText}
                <ChevronRight className="w-5 h-5 ml-1 inline" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   SERVICES DEEP-DIVE
   ══════════════════════════════════════════════════════════════════════ */
function ServicesDeepDive() {
  return (
    <div>
      {/* Divider */}
      <div className="h-px w-full" style={{ background: "#e5e7eb" }} />

      <ServiceCard
        id="pipe-repairs"
        icon={Wrench}
        label="Service"
        title="Pipe Repairs & Re-piping"
        subtitle="Structural fixes that last a lifetime"
        description="Whether it's a single leaky joint or your entire home needs new pipes, our certified technicians deliver permanent solutions. We use only premium-grade copper and PEX materials, backed by industry-leading warranties. No band-aid fixes — we get to the root of the problem and rebuild it right."
        features={[
          {
            title: "Full-Depth Structural Repairs",
            desc: "We don't patch over problems. We replace damaged sections with code-compliant materials that stand the test of time.",
          },
          {
            title: "Trenchless Options Available",
            desc: "Minimal yard disruption with our pipe lining and pipe bursting technology for underground repairs.",
          },
          {
            title: "Whole-Home Re-piping",
            desc: "Galvanized or polybutylene pipes? We'll upgrade your entire system with modern, safe materials in as little as one day.",
          },
        ]}
        imageSrc="/plumber-service.png"
        imageAlt="Santos Plumbing technician performing pipe repair"
        ctaText="Get a Pipe Repair Quote"
      />

      {/* Alternating bg */}
      <div style={{ background: "#f8fafc" }}>
        <ServiceCard
          id="water-heaters"
          icon={ThermometerSun}
          label="Installation & Repair"
          title="Water Heaters"
          subtitle="Efficiency and same-day installs"
          description="Nobody likes a cold shower. Whether your water heater needs a quick repair or it's time for a brand-new energy-efficient unit, Santos Plumbing has you covered. We stock top-rated tank and tankless models and offer same-day installation so you're never left in the cold."
          features={[
            {
              title: "Same-Day Installation",
              desc: "We keep popular models in stock so we can install your new unit the same day you call — no waiting, no cold showers.",
            },
            {
              title: "Tankless Upgrades",
              desc: "Switch to endless hot water and save up to 30% on energy bills with a modern tankless system.",
            },
            {
              title: "All Brands Serviced",
              desc: "Rheem, Bradford White, AO Smith, Navien — our techs are certified to repair and install every major brand.",
            },
          ]}
          imageSrc="/plumber-service.png"
          imageAlt="Water heater installation by Santos Plumbing"
          ctaText="Schedule Water Heater Service"
          reversed
        />
      </div>

      <ServiceCard
        id="maintenance"
        icon={Droplets}
        label="Preventive Care"
        title="Maintenance & Drain Cleaning"
        subtitle='Your annual "Peek" keeps disasters at bay'
        description="An ounce of prevention is worth a gallon of cure. Our Annual Peek Inspection catches small problems before they become expensive emergencies. Combined with professional drain cleaning that clears blockages without damaging your pipes, regular maintenance is the smartest investment you can make in your home's plumbing."
        features={[
          {
            title: 'Annual "Peek" Inspection',
            desc: "A comprehensive 20-point check of your entire plumbing system — from water pressure to sewer lines — that catches issues early.",
          },
          {
            title: "Hydro-Jet Drain Cleaning",
            desc: "High-pressure water jetting removes grease, roots, and scale buildup without corrosive chemicals that damage your pipes.",
          },
          {
            title: "Priority Scheduling",
            desc: "Maintenance plan members jump to the front of the line when emergencies strike — because loyalty should be rewarded.",
          },
        ]}
        imageSrc="/plumber-service.png"
        imageAlt="Drain cleaning and plumbing maintenance"
        ctaText="Book Your Annual Peek"
      />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   SEND US A PHOTO
   ══════════════════════════════════════════════════════════════════════ */
function SendPhotoSection() {
  return (
    <section id="contact" className="py-20 md:py-28" style={{ background: "#f8fafc" }}>
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
        {/* Label */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Camera className="w-5 h-5" style={{ color: YELLOW }} />
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: NAVY }}
          >
            Instant Digital Estimate
          </span>
        </div>

        <h2
          className="text-3xl md:text-4xl font-black leading-tight tracking-tight"
          style={{ color: NAVY }}
        >
          Send Us A Photo — <span style={{ color: YELLOW }}>Get An Estimate Fast</span>
        </h2>

        <p className="mt-4 text-gray-500 text-base md:text-lg max-w-xl mx-auto">
          Snap a photo of your leak, water heater, or plumbing issue and send it
          our way. We&apos;ll review it and get back to you with a preliminary
          estimate — no commitment, no charge.
        </p>

        {/* Dashed upload box */}
        <div className="mt-10 border-2 border-dashed rounded-2xl p-10 md:p-14 transition-colors hover:border-yellow-400"
          style={{ borderColor: "#d1d5db" }}
        >
          <div
            className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4"
            style={{ background: `${YELLOW}20` }}
          >
            <Camera className="w-8 h-8" style={{ color: NAVY }} />
          </div>

          <p className="font-bold text-lg" style={{ color: NAVY }}>
            Snap a photo of your leak or water heater
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Drag & drop or click to upload — JPG, PNG, up to 10 MB
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="font-bold px-8 py-5 rounded-md text-black shadow-lg hover:scale-105 transition-transform"
              style={{ background: YELLOW }}
              onClick={() => {
                const input = document.createElement("input");
                input.type = "file";
                input.accept = "image/*";
                input.click();
              }}
            >
              <Camera className="w-4 h-4 mr-2" />
              Upload Photo
            </Button>

            <Button
              asChild
              variant="outline"
              className="font-bold px-8 py-5 rounded-md"
              style={{ borderColor: NAVY, color: NAVY }}
            >
              <a href="sms:9092569224">
                <MessageSquare className="w-4 h-4 mr-2" />
                Text to (909) 256-9224
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   CTA BANNER
   ══════════════════════════════════════════════════════════════════════ */
function CtaBanner() {
  return (
    <section style={{ background: NAVY }} className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h2
          className="text-3xl md:text-4xl font-black leading-tight tracking-tight"
          style={{ color: WHITE }}
        >
          Plumbing Emergency?{" "}
          <span style={{ color: YELLOW }}>We&apos;re On Our Way.</span>
        </h2>
        <p className="mt-4 text-gray-400 text-base md:text-lg max-w-xl mx-auto">
          Don&apos;t wait for a small leak to become a big disaster. Our 909 &amp; 951
          team is standing by 24/7 to take your call and get your home back to
          normal — fast.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="font-bold text-lg px-10 py-6 rounded-md text-black shadow-xl hover:scale-105 transition-transform"
            style={{ background: YELLOW }}
          >
            <a href="tel:9092569224">
              <Phone className="w-5 h-5 mr-2 inline" />
              (909) 256-9224
            </a>
          </Button>
          <Button
            asChild
            className="font-bold text-lg px-10 py-6 rounded-md border-2 shadow-xl hover:scale-105 transition-transform"
            style={{
              borderColor: YELLOW,
              color: YELLOW,
              background: "transparent",
            }}
          >
            <a href="#contact">REQUEST SERVICE ONLINE</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   FOOTER
   ══════════════════════════════════════════════════════════════════════ */
function Footer() {
  const serviceAreas = {
    "West Valley & Foothills": ["Upland", "Claremont", "La Verne", "San Dimas", "Glendora", "Montclair"],
    "The 71/60 Corridor": ["Chino", "Chino Hills", "Ontario", "Eastvale", "Diamond Bar", "Walnut"],
    "East Valley & IE Central": ["Rancho Cucamonga", "Fontana", "Rialto", "San Bernardino", "Colton", "Loma Linda"],
    "High Desert Hub": ["Victorville", "Hesperia", "Apple Valley", "Adelanto"],
  };

  return (
    <footer style={{ background: NAVY }} className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/santos-logo.png"
                alt="Santos Plumbing"
                className="h-10 w-10 object-contain rounded-full"
              />
              <div className="leading-tight">
                <span
                  className="font-extrabold text-lg tracking-tight"
                  style={{ color: WHITE }}
                >
                  SANTOS
                </span>
                <span
                  className="font-extrabold text-lg tracking-tight block -mt-0.5"
                  style={{ color: YELLOW }}
                >
                  PLUMBING
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Trusted by Inland Empire and Foothill homeowners since day one. Licensed,
              insured, and committed to getting it flowing right the first time.
            </p>
            <div className="mt-6 space-y-2">
              <a
                href="tel:9092569224"
                className="font-bold flex items-center gap-2 text-sm"
                style={{ color: YELLOW }}
              >
                <Phone className="w-4 h-4" />
                (909) 256-9224
              </a>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4" style={{ color: YELLOW }} />
                15-Mile Radius from Upland, CA
              </div>
            </div>
          </div>

          {/* Service areas columns */}
          <div className="lg:col-span-2">
            <h3
              className="font-bold text-sm tracking-widest uppercase mb-6"
              style={{ color: YELLOW }}
            >
              Service Areas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(serviceAreas).map(([region, cities]) => (
                <div key={region}>
                  <p className="font-semibold text-sm mb-3" style={{ color: WHITE }}>
                    {region}
                  </p>
                  <ul className="space-y-1.5">
                    {cities.map((city) => (
                      <li key={city}>
                        <span className="text-sm text-gray-400 hover:text-gray-200 transition-colors">
                          {city}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compliance & SEO notice */}
        <div className="mt-10 p-4 rounded-lg" style={{ background: "rgba(255,215,0,0.08)", border: `1px solid rgba(255,215,0,0.2)` }}>
          <p className="text-xs text-gray-400 text-center leading-relaxed">
            <MapPin className="w-3.5 h-3.5 inline mr-1" style={{ color: YELLOW }} />
            Serving a <strong className="text-gray-300">15-mile radius from Upland, CA</strong> including{" "}
            <strong className="text-gray-300">San Bernardino, Riverside, and East Los Angeles Counties.</strong>
          </p>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" style={{ color: YELLOW }} />
              <span className="font-bold text-sm" style={{ color: YELLOW }}>
                License # 987654
              </span>
            </div>
            <p className="text-gray-500 text-xs text-center">
              © {new Date().getFullYear()} Santos Plumbing. All rights reserved. | Inland Empire &amp; Foothill Communities, California
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   PAGE COMPOSER
   ══════════════════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <HiddenLeakSection />
        <ServicesDeepDive />
        <SendPhotoSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
