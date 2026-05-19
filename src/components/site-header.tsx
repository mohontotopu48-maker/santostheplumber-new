"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

/* ─── Colour Tokens ─── */
const NAVY = "#001F3F";
const YELLOW = "#FFD700";
const WHITE = "#FFFFFF";

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

/* ─── Mega-Menu Column Data ─── */
const megaMenuColumns = [
  {
    emoji: "\uD83D\uDD34",
    title: "EMERGENCY SERVICE",
    color: "#dc2626",
    items: [
      { label: "24/7 Emergency Response", slug: "24-7-emergency-response" },
      { label: "Burst Pipe Repair", slug: "burst-pipe-repair" },
      { label: "Sewer Backup Clearance", slug: "sewer-backup-clearance" },
      { label: "Gas Leak Detection", slug: "gas-leak-detection" },
      { label: "Same-Day Urgent Repairs", slug: "same-day-urgent-repairs" },
    ],
  },
  {
    emoji: "\uD83D\uDFE2",
    title: "DRAIN CLEANING",
    color: "#16a34a",
    items: [
      { label: "Clog Removal & Snaking", slug: "clog-removal-snaking" },
      { label: "Hydro Jetting Solutions", slug: "hydro-jetting-solutions" },
      { label: "Kitchen & Bath Drains", slug: "kitchen-bath-drains" },
      { label: "Main Sewer Line Cleaning", slug: "main-sewer-line-cleaning" },
      { label: "Preventative Maintenance", slug: "preventative-maintenance" },
    ],
  },
  {
    emoji: "\uD83D\uDFE0",
    title: "WATER HEATERS & PIPE REPAIRS",
    color: "#ea580c",
    items: [
      { label: "Water Heater Repair & Tune-Ups", slug: "water-heater-repair-tune-ups" },
      { label: "Tankless Installation & Flushes", slug: "tankless-installation-flushes" },
      { label: "Slab Leak Detection & Fixes", slug: "slab-leak-detection-fixes" },
      { label: "Copper & PEX Whole-Home Repiping", slug: "copper-pex-whole-home-repiping" },
      { label: "Advanced Leak Location & Repair", slug: "advanced-leak-location-repair" },
    ],
  },
  {
    emoji: "\uD83D\uDD35",
    title: "MAINTENANCE & FIXTURES",
    color: "#2563eb",
    items: [
      { label: "Faucet, Sink & Tub Installation", slug: "faucet-sink-tub-installation" },
      { label: "Toilet Repair & Replacement", slug: "toilet-repair-replacement" },
      { label: "Garbage Disposal Service", slug: "garbage-disposal-service" },
      { label: "Whole-Home Water Filtration", slug: "whole-home-water-filtration" },
      { label: "Annual Plumbing Safety Inspections", slug: "annual-plumbing-safety-inspections" },
    ],
  },
  {
    emoji: "\uD83D\uDC8E",
    title: "DIAMOND VIP CARE CLUB",
    color: "#FBBF24",
    items: [
      { label: "$22/mo Membership", slug: "diamond-vip" },
      { label: "$100 Fixed-Price Drain Unclogging", slug: "diamond-vip" },
      { label: "Priority 24/7 Service Booking", slug: "diamond-vip" },
      { label: "No Emergency Weekend Surge Fees", slug: "diamond-vip" },
      { label: "Early-Bird Pre-Launch Access", slug: "diamond-vip" },
    ],
  },
];

const serviceAreaBadges = ["Fullerton", "Rancho Cucamonga", "Ontario", "Fontana", "Upland", "Chino"];

/* ══════════════════════════════════════════════════════════════════════
   SITE HEADER — Global Mega-Menu Navigation
   ══════════════════════════════════════════════════════════════════════ */
export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<number | null>(null);

  /* Close mega-menu on scroll */
  useEffect(() => {
    const onScroll = () => setMegaMenuOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mega-menu on click outside */
  useEffect(() => {
    if (!megaMenuOpen) return;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".mega-menu-trigger") && !target.closest(".mega-menu-panel")) {
        setMegaMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [megaMenuOpen]);

  /* Close mobile menu on route change (link click) */
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileAccordion(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full" style={{ background: NAVY }}>
      {/* Top bar – service area strip */}
      <div
        className="hidden md:flex items-center justify-center px-6 py-1.5 text-xs"
        style={{ background: "rgba(0,0,0,0.25)" }}
      >
        <span className="text-gray-300">Serving Inland Empire & Foothill Communities</span>
      </div>

      {/* Main nav row */}
      <div className="flex items-center justify-between px-4 md:px-8 py-3 max-w-7xl mx-auto">
        {/* Logo — links to homepage */}
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0"
          style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1 }}
          onClick={() => setMegaMenuOpen(false)}
        >
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
            className="brand-subtext font-semibold text-[0.65rem] md:text-xs uppercase tracking-[0.12em] ml-[52px] md:ml-[58px] mt-[-2px]"
            style={{ color: "#FBBF24" }}
          >
            Plumbing
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Our Services – mega-menu trigger */}
          <button
            className="mega-menu-trigger nav-link flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md hover:bg-white/5 transition-colors"
            onClick={() => setMegaMenuOpen(!megaMenuOpen)}
            onMouseEnter={() => setMegaMenuOpen(true)}
            aria-expanded={megaMenuOpen}
            aria-haspopup="true"
          >
            Our Services
            <ChevronDown
              className="w-4 h-4 transition-transform duration-200"
              style={{ transform: megaMenuOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>

          {/* Diamond VIP link */}
          <Link
            href="/diamond-vip"
            className="nav-link flex items-center gap-1.5 px-4 py-2 text-sm font-bold rounded-md transition-all"
            style={{ color: "#FBBF24" }}
            onClick={() => setMegaMenuOpen(false)}
          >
            <DiamondIcon className="w-4 h-4" />
            Diamond VIP
          </Link>
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
          <a
            href="tel:9092562244"
            className="font-bold px-6 py-2.5 rounded-md text-black shadow-lg hover:scale-105 transition-transform inline-block"
            style={{ background: YELLOW }}
          >
            REQUEST SERVICE
          </a>
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

      {/* ── Desktop Mega-Menu Panel ── */}
      <div
        className={`mega-menu-panel hidden lg:block ${megaMenuOpen ? "mega-menu-open" : "mega-menu-closed"}`}
        onMouseLeave={() => setMegaMenuOpen(false)}
      >
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="grid grid-cols-5 gap-6">
            {megaMenuColumns.map((col, i) => (
              <div key={i} className="mega-menu-column">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-base">{col.emoji}</span>
                  <h3
                    className="text-xs font-black tracking-wider uppercase"
                    style={{ color: col.color }}
                  >
                    {col.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {col.items.map((item, j) => (
                    <li key={j}>
                      <Link
                        href={i === 4 ? "/diamond-vip" : `/services/${item.slug}`}
                        className="mega-menu-item block text-sm leading-snug transition-colors"
                        style={{ color: "rgba(255,255,255,0.75)" }}
                        onClick={() => setMegaMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mega-menu footer */}
          <div className="mega-menu-footer mt-8 pt-6">
            <p className="text-white font-bold text-lg tracking-tight">
              If You Got A Leak, We&apos;ll Take A Peek!
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Serving our community with honest upfront flat rates and surgical execution.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {serviceAreaBadges.map((city) => (
                <span key={city} className="service-badge">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div
          className="lg:hidden px-4 pb-6 pt-2"
          style={{ background: NAVY }}
        >
          {/* Our Services accordion */}
          <button
            className="nav-link-mobile flex items-center justify-between w-full px-4 py-3 font-medium rounded-md hover:bg-white/5"
            onClick={() => setMobileAccordion(mobileAccordion === 0 ? null : 0)}
            aria-expanded={mobileAccordion === 0}
          >
            Our Services
            <ChevronDown
              className="w-4 h-4 transition-transform duration-200"
              style={{ transform: mobileAccordion === 0 ? "rotate(180deg)" : "rotate(0deg)", color: "#9CA3AF" }}
            />
          </button>

          {mobileAccordion === 0 && (
            <div className="mobile-accordion-content pl-4 space-y-3">
              {megaMenuColumns.map((col, i) => (
                <div key={i} className="py-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">{col.emoji}</span>
                    <span
                      className="text-xs font-bold tracking-wider uppercase"
                      style={{ color: col.color }}
                    >
                      {col.title}
                    </span>
                  </div>
                  <ul className="space-y-1.5 pl-6">
                    {col.items.map((item, j) => (
                      <li key={j}>
                        <Link
                          href={i === 4 ? "/diamond-vip" : `/services/${item.slug}`}
                          className="block text-sm py-1 transition-colors"
                          style={{ color: "rgba(255,255,255,0.65)" }}
                          onClick={closeMobileMenu}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Service area badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {serviceAreaBadges.map((city) => (
                  <span key={city} className="service-badge text-[10px] px-2 py-0.5">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Diamond VIP standalone link */}
          <Link
            href="/diamond-vip"
            className="nav-link-mobile flex items-center gap-2 px-4 py-3 font-bold rounded-md hover:bg-white/5"
            style={{ color: "#FBBF24" }}
            onClick={closeMobileMenu}
          >
            <DiamondIcon className="w-4 h-4" />
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
            <a
              href="tel:9092562244"
              className="block w-full font-bold py-3 rounded-md text-black text-center"
              style={{ background: YELLOW }}
              onClick={closeMobileMenu}
            >
              REQUEST SERVICE
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
