"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Accessibility,
  X,
  Contrast,
  Type,
  BookOpen,
  Pause,
  Link2,
  RotateCcw,
} from "lucide-react";

/* ─── Colour Tokens ─── */
const NAVY = "#001F3F";
const ELECTRIC_BLUE = "#38BDF8";
const WARM_YELLOW = "#FBBF24";

/* ─── Toggle type ─── */
interface A11yToggle {
  id: string;
  label: string;
  description: string;
  icon: React.ElementType;
  cssClass: string;
}

const TOGGLES: A11yToggle[] = [
  {
    id: "high-contrast",
    label: "Increase Contrast",
    description: "Boosts color contrast for better readability",
    icon: Contrast,
    cssClass: "a11y-high-contrast",
  },
  {
    id: "bigger-text",
    label: "Bigger Text",
    description: "Enlarge all text across the site",
    icon: Type,
    cssClass: "a11y-bigger-text",
  },
  {
    id: "readable-font",
    label: "Readable Font",
    description: "Switch to a dyslexia-friendly typeface",
    icon: BookOpen,
    cssClass: "a11y-readable-font",
  },
  {
    id: "reduce-motion",
    label: "Reduce Motion",
    description: "Minimize animations and transitions",
    icon: Pause,
    cssClass: "a11y-reduce-motion",
  },
  {
    id: "highlight-links",
    label: "Highlight Links",
    description: "Underline all clickable links for visibility",
    icon: Link2,
    cssClass: "a11y-highlight-links",
  },
];

/* ══════════════════════════════════════════════════════════════════════
   ACCESSIBILITY WIDGET — Floating button + Apple-style dark panel
   ══════════════════════════════════════════════════════════════════════ */
export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [activeToggles, setActiveToggles] = useState<Set<string>>(new Set());

  /* ── Sync CSS classes on <html> element ── */
  useEffect(() => {
    const html = document.documentElement;
    TOGGLES.forEach((t) => {
      if (activeToggles.has(t.id)) {
        html.classList.add(t.cssClass);
      } else {
        html.classList.remove(t.cssClass);
      }
    });
  }, [activeToggles]);

  /* ── Close on Escape key ── */
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.addEventListener("keydown", handleEsc);
      return () => document.removeEventListener("keydown", handleEsc);
    }
  }, [open]);

  /* ── Close on click outside ── */
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        !target.closest(".a11y-widget-btn") &&
        !target.closest(".a11y-widget-panel")
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  /* ── Toggle a single feature ── */
  const toggleFeature = useCallback((id: string) => {
    setActiveToggles((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  /* ── Reset all ── */
  const resetAll = useCallback(() => {
    setActiveToggles(new Set());
  }, []);

  return (
    <>
      {/* ── Floating Trigger Button ── */}
      <button
        className="a11y-widget-btn"
        onClick={() => setOpen(!open)}
        aria-label="Accessibility options"
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        {/* Pulsing ring when panel is closed */}
        {!open && <span className="a11y-btn-ring" />}

        <Accessibility className="w-5 h-5" />
      </button>

      {/* ── Panel ── */}
      {open && (
        <div className="a11y-widget-panel" role="dialog" aria-label="Accessibility settings">
          {/* Header */}
          <div className="a11y-panel-header">
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: `${ELECTRIC_BLUE}18` }}
              >
                <Accessibility className="w-4 h-4" style={{ color: ELECTRIC_BLUE }} />
              </div>
              <div>
                <h3 className="text-sm font-black tracking-tight" style={{ color: "#FFFFFF" }}>
                  Accessibility
                </h3>
                <p className="text-[10px] text-gray-500">Customize your experience</p>
              </div>
            </div>
            <button
              className="a11y-panel-close"
              onClick={() => setOpen(false)}
              aria-label="Close accessibility panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Badge */}
          <div className="a11y-panel-badge">
            <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: ELECTRIC_BLUE }}>
              WCAG 2.1 COMPLIANT
            </span>
          </div>

          {/* Toggle rows */}
          <div className="a11y-panel-body">
            {TOGGLES.map((t) => {
              const isActive = activeToggles.has(t.id);
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  className={`a11y-toggle-row ${isActive ? "a11y-toggle-active" : ""}`}
                  onClick={() => toggleFeature(t.id)}
                  aria-pressed={isActive}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="a11y-toggle-icon"
                      style={{
                        background: isActive ? `${ELECTRIC_BLUE}18` : "rgba(255,255,255,0.04)",
                      }}
                    >
                      <Icon
                        className="w-4 h-4"
                        style={{ color: isActive ? ELECTRIC_BLUE : "#6b7280" }}
                      />
                    </div>
                    <div className="text-left">
                      <p
                        className="text-sm font-semibold"
                        style={{ color: isActive ? "#FFFFFF" : "#d1d5db" }}
                      >
                        {t.label}
                      </p>
                      <p className="text-[11px] text-gray-500 leading-snug mt-0.5">
                        {t.description}
                      </p>
                    </div>
                  </div>

                  {/* Toggle switch */}
                  <div className={`a11y-toggle-switch ${isActive ? "a11y-switch-on" : ""}`}>
                    <div className="a11y-toggle-knob" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="a11y-panel-footer">
            <button
              className="a11y-reset-btn"
              onClick={resetAll}
              disabled={activeToggles.size === 0}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset All
            </button>
            <span className="text-[9px] text-gray-600">
              Powered by NXLBYLDR a11y
            </span>
          </div>
        </div>
      )}
    </>
  );
}
