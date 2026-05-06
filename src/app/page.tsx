"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";

/* ─── Lazy-load Leak Agent AI (client-only, no SSR) ─── */
const LeakAgentAI = dynamic(() => import("@/components/leak-agent"), {
  ssr: false,
});

import {
  Phone,
  Menu,
  X,
  Users,
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
  Heart,
  Facebook,
  Instagram,
  Linkedin,
  Upload,
  ArrowLeft,
  CheckCircle,
  ImagePlus,
} from "lucide-react";

/* ─── Colour Tokens ─── */
const NAVY = "#001F3F";
const YELLOW = "#FFD700";
const WHITE = "#FFFFFF";
const ELECTRIC_BLUE = "#38BDF8"; /* Electric Light Blue — wave accent */

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
   MULTI-STEP POPUP
   ══════════════════════════════════════════════════════════════════════ */
interface PopupFormData {
  firstName: string;
  lastName: string;
  phone: string;
  issue: string;
  photoFile: File | null;
  photoPreview: string | null;
}

function MultiStepPopup({ open, onClose, initialPhoto }: { open: boolean; onClose: () => void; initialPhoto?: { file: File; preview: string } | null }) {
  const [step, setStep] = useState<1 | 2 | 3 | "success">(1);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<PopupFormData>({
    firstName: "",
    lastName: "",
    phone: "",
    issue: "",
    photoFile: initialPhoto?.file || null,
    photoPreview: initialPhoto?.preview || null,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  // When initialPhoto changes (hero drop zone), pre-populate photo and skip to step 1
  // The user still needs to fill in their name, but photo is already attached
  useEffect(() => {
    if (initialPhoto) {
      setForm((prev) => ({
        ...prev,
        photoFile: initialPhoto.file,
        photoPreview: initialPhoto.preview,
      }));
    }
  }, [initialPhoto]);

  const progressWidth = step === 1 ? "33%" : step === 2 ? "66%" : step === 3 ? "100%" : "100%";

  const updateField = useCallback((field: keyof PopupFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const preview = URL.createObjectURL(file);
      setForm((prev) => ({ ...prev, photoFile: file, photoPreview: preview }));
    }
  }, []);

  const submitToCRM = useCallback(async () => {
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("firstName", form.firstName);
      formData.append("lastName", form.lastName);
      formData.append("phone", form.phone);
      formData.append("issue", form.issue);
      if (form.photoFile) {
        formData.append("photo", form.photoFile);
      }

      await fetch("/api/lead", {
        method: "POST",
        body: formData,
      });
    } catch {
      // Silently handle — lead is still captured in UI
    } finally {
      setSubmitting(false);
    }
  }, [form]);

  const handleStep1Next = useCallback(() => {
    if (form.firstName.trim() && form.lastName.trim()) {
      setStep(2);
    }
  }, [form.firstName, form.lastName]);

  const handleStep2Next = useCallback(async () => {
    if (form.phone.trim()) {
      // Create lead in CRM on step 2 to prevent drop-off loss
      await submitToCRM();
      setStep(3);
    }
  }, [form.phone, submitToCRM]);

  const handleStep3Submit = useCallback(async () => {
    // If they have a photo, update the CRM record
    if (form.photoFile) {
      await submitToCRM();
    }
    setStep("success");
  }, [form.photoFile, submitToCRM]);

  const handleClose = useCallback(() => {
    onClose();
    // Reset after close animation
    setTimeout(() => {
      setStep(1);
      setForm({
        firstName: "",
        lastName: "",
        phone: "",
        issue: "",
        photoFile: null,
        photoPreview: null,
      });
    }, 300);
  }, [onClose, initialPhoto]);

  if (!open) return null;

  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        {/* Progress bar */}
        <div className="popup-progress-track">
          <div className="popup-progress-fill" style={{ width: progressWidth }} />
        </div>

        {/* Close button */}
        <button className="popup-close" onClick={handleClose} aria-label="Close">
          <X className="w-5 h-5" />
        </button>

        {/* ── STEP 1: Identity ── */}
        {step === 1 && (
          <div className="popup-step" key="step1">
            <h2
              className="text-2xl font-black tracking-tight mb-1"
              style={{ color: NAVY }}
            >
              Let&apos;s Get Your Leak Fixed.
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Step 1 of 3 — Your Info
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: NAVY }}>
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="popup-input"
                  placeholder="John"
                  value={form.firstName}
                  onChange={(e) => updateField("firstName", e.target.value)}
                  autoFocus
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: NAVY }}>
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="popup-input"
                  placeholder="Doe"
                  value={form.lastName}
                  onChange={(e) => updateField("lastName", e.target.value)}
                />
              </div>
            </div>

            {/* Trust badge */}
            <div className="mt-5 flex items-center gap-3 p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.06)" }}>
              <div className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center icon-glow">
                <Users className="w-4.5 h-4.5" style={{ color: NAVY }} />
              </div>
              <div>
                <p className="font-bold text-xs" style={{ color: NAVY }}>1,000+ Neighbors Served</p>
                <p className="text-[11px] text-gray-500">Trusted by families across the IE</p>
              </div>
            </div>

            <Button
              className="w-full font-bold text-base py-4 rounded-md text-black shadow-lg hover:scale-[1.02] transition-transform mt-6"
              style={{ background: YELLOW }}
              onClick={handleStep1Next}
              disabled={!form.firstName.trim() || !form.lastName.trim()}
            >
              CONTINUE <ArrowRight className="w-4 h-4 ml-1 inline" />
            </Button>
          </div>
        )}

        {/* ── STEP 2: Photo Drop Zone ── */}
        {step === 2 && (
          <div className="popup-step" key="step2">
            <h2
              className="text-2xl font-black tracking-tight mb-1"
              style={{ color: NAVY }}
            >
              Snap a Photo — Get an Estimate Fast
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Step 2 of 3 — Photo (Optional)
            </p>

            {/* Hidden file input with camera support */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={handleFileChange}
            />

            {/* Upload zone */}
            <div
              className="popup-upload-zone"
              onClick={() => fileInputRef.current?.click()}
            >
              {form.photoPreview ? (
                <div className="space-y-3">
                  <img
                    src={form.photoPreview}
                    alt="Uploaded photo preview"
                    className="w-full max-h-48 object-contain rounded-lg"
                  />
                  <p className="text-xs font-medium" style={{ color: ELECTRIC_BLUE }}>
                    Photo added! Tap to replace.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <div
                    className="w-14 h-14 rounded-full mx-auto flex items-center justify-center icon-glow"
                  >
                    <Camera className="w-7 h-7" style={{ color: NAVY }} />
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: NAVY }}>
                      Drop photos here or Snap a new one!
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Tap to use camera or select a photo — JPG, PNG
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-3 mt-6">
              <Button
                className="font-bold py-4 px-5 rounded-md border-2 transition-colors"
                style={{ borderColor: "#d1d5db", color: NAVY, background: WHITE }}
                onClick={() => setStep(1)}
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <Button
                className="flex-1 font-bold text-base py-4 rounded-md text-black shadow-lg hover:scale-[1.02] transition-transform"
                style={{ background: YELLOW }}
                onClick={() => setStep(3)}
              >
                {form.photoPreview ? "CONTINUE (PHOTO ADDED) →" : "CONTINUE"}{" "}
                {!form.photoPreview && <ArrowRight className="w-4 h-4 ml-1 inline" />}
              </Button>
            </div>

            {/* Skip link */}
            <button
              className="w-full text-center text-xs text-gray-400 mt-3 hover:text-gray-600 transition-colors"
              onClick={() => setStep(3)}
            >
              Skip photo &amp; continue without image
            </button>
          </div>
        )}

        {/* ── STEP 3: Contact & Description ── */}
        {step === 3 && (
          <div className="popup-step" key="step3">
            <h2
              className="text-2xl font-black tracking-tight mb-1"
              style={{ color: NAVY }}
            >
              How Can We Reach You?
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Step 3 of 3 — Contact &amp; Issue
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: NAVY }}>
                  Mobile Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className="popup-input"
                  placeholder="(909) 555-1234"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  autoFocus
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: NAVY }}>
                  What&apos;s happening?
                </label>
                <textarea
                  className="popup-textarea"
                  placeholder="e.g., slab leak, water heater noise, dripping faucet..."
                  value={form.issue}
                  onChange={(e) => updateField("issue", e.target.value)}
                />
              </div>
            </div>

            {/* Photo indicator if uploaded */}
            {form.photoPreview && (
              <div className="mt-4 flex items-center gap-3 p-3 rounded-lg" style={{ background: "rgba(56, 189, 248, 0.06)" }}>
                <img
                  src={form.photoPreview}
                  alt="Uploaded photo"
                  className="w-10 h-10 rounded object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold" style={{ color: ELECTRIC_BLUE }}>Photo attached</p>
                  <p className="text-[10px] text-gray-400">Your photo will be included with the request</p>
                </div>
              </div>
            )}

            <div className="flex gap-3 mt-6">
              <Button
                className="font-bold py-4 px-5 rounded-md border-2 transition-colors"
                style={{ borderColor: "#d1d5db", color: NAVY, background: WHITE }}
                onClick={() => setStep(2)}
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <Button
                className="flex-1 font-bold text-base py-4 rounded-md text-black shadow-lg hover:scale-[1.02] transition-transform"
                style={{ background: YELLOW }}
                onClick={handleStep2Next}
                disabled={!form.phone.trim() || submitting}
              >
                {submitting ? "SUBMITTING..." : form.photoPreview ? "SUBMIT (PHOTO ADDED) →" : "SUBMIT"}{" "}
                {!form.photoPreview && !submitting && <ArrowRight className="w-4 h-4 ml-1 inline" />}
              </Button>
            </div>
          </div>
        )}

        {/* ── SUCCESS STATE ── */}
        {step === "success" && (
          <div className="popup-step popup-success text-center" key="success">
            <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ background: "rgba(56, 189, 248, 0.10)" }}>
              <CheckCircle className="w-8 h-8" style={{ color: ELECTRIC_BLUE }} />
            </div>
            <h2
              className="text-2xl font-black tracking-tight mb-2"
              style={{ color: NAVY }}
            >
              We&apos;re On It, {form.firstName}!
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
              Your request has been submitted. A text from (909) 256-9224 is on its way with your preliminary estimate.
            </p>
            <Button
              className="w-full font-bold text-base py-4 rounded-md text-black shadow-lg hover:scale-[1.02] transition-transform mt-6"
              style={{ background: YELLOW }}
              onClick={handleClose}
            >
              DONE
            </Button>
          </div>
        )}

        {/* Agency credit — always visible */}
        {step !== "success" && (
          <div className="popup-footer">
            <p className="text-[10px] text-gray-400">
              managed by{" "}
              <a
                href="https://vsualdigitalmedia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="agency-link"
              >
                <span className="agency-brand font-semibold text-gray-400 transition-colors">VSUAL</span>
                <span className="agency-domain text-gray-400 transition-colors">digitalmedia.com</span>
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   HEADER
   ══════════════════════════════════════════════════════════════════════ */
function Header({ onRequestService }: { onRequestService: () => void }) {
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
        <a href="#" className="flex items-center gap-2.5 shrink-0">
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
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link px-4 py-2 text-sm font-medium rounded-md hover:bg-white/5"
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
            className="font-bold px-6 py-2.5 rounded-md text-black shadow-lg hover:scale-105 transition-transform"
            style={{ background: YELLOW }}
            onClick={onRequestService}
          >
            REQUEST SERVICE
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
              className="nav-link-mobile block px-4 py-3 font-medium rounded-md hover:bg-white/5"
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
              className="w-full font-bold py-3 rounded-md text-black"
              style={{ background: YELLOW }}
              onClick={() => {
                setMobileOpen(false);
                onRequestService();
              }}
            >
              REQUEST SERVICE
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
function Hero({ onRequestService, onPhotoDrop }: { onRequestService: () => void; onPhotoDrop?: (photo: { file: File; preview: string }) => void }) {
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
            Join over 1,000 local families who trust Santos for honest, fast repairs.
            From emergency pipe repairs to water heater installations, the Inland
            Empire&apos;s most referred plumber gets it flowing right the first time.
          </p>

          {/* CTA row */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              className="font-bold text-lg px-8 py-6 rounded-md text-black shadow-xl hover:scale-105 transition-transform"
              style={{ background: YELLOW }}
              onClick={onRequestService}
            >
              REQUEST SERVICE
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Button>
            <Button
              asChild
              className="hero-phone-btn font-bold text-lg px-8 py-6 rounded-md shadow-xl hover:scale-105"
            >
              <a href="tel:9092569224">
                <Phone className="w-5 h-5 mr-2" />
                (909) 256-9224
              </a>
            </Button>
          </div>

          {/* ── Hero Photo Drop Zone ── */}
          <div
            className="hero-drop-zone mt-8"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              const file = e.dataTransfer.files?.[0];
              if (file && file.type.startsWith("image/")) {
                const preview = URL.createObjectURL(file);
                onPhotoDrop?.({ file, preview });
              }
            }}
            onClick={() => {
              const input = document.getElementById("hero-file-input") as HTMLInputElement;
              input?.click();
            }}
          >
            <input
              id="hero-file-input"
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const preview = URL.createObjectURL(file);
                  onPhotoDrop?.({ file, preview });
                }
                e.target.value = "";
              }}
            />
            <div className="flex items-center gap-3 justify-center">
              <Droplets className="w-5 h-5 shrink-0" style={{ color: ELECTRIC_BLUE }} />
              <Camera className="w-5 h-5 shrink-0" style={{ color: YELLOW }} />
              <span className="text-sm font-semibold text-gray-200">
                Drag & Drop photos of your leak here for an instant AI estimate.
              </span>
            </div>
            <Button
              asChild
              className="font-bold text-sm px-6 py-3 rounded-md text-black shadow-lg hover:scale-105 transition-transform mt-3"
              style={{ background: YELLOW }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <a href="sms:9092569224?body=Hi%20Santos%20Plumbing%2C%20I%20have%20a%20plumbing%20issue%20I%27d%20like%20to%20share%20a%20photo%20of.">
                TAKE A PEEK (SMS) <ArrowRight className="w-4 h-4 ml-1 inline" />
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
                icon: Users,
                title: "1,000+ Neighbors Served",
                desc: "Trusted by families across the IE",
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
                  className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center icon-glow"
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
function HiddenLeakSection({ onRequestService }: { onRequestService: () => void }) {
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
              className="font-bold px-8 py-6 rounded-md text-black shadow-lg hover:scale-105 transition-transform mt-4"
              style={{ background: YELLOW }}
              onClick={onRequestService}
            >
              Schedule a Leak Detection — Free Inspection
              <ChevronRight className="w-5 h-5 ml-1 inline" />
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
  onRequestService,
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
  onRequestService: () => void;
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
              className="font-bold px-8 py-6 rounded-md text-black shadow-lg hover:scale-105 transition-transform mt-4"
              style={{ background: YELLOW }}
              onClick={onRequestService}
            >
              {ctaText}
              <ChevronRight className="w-5 h-5 ml-1 inline" />
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
function ServicesDeepDive({ onRequestService }: { onRequestService: () => void }) {
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
        onRequestService={onRequestService}
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
          onRequestService={onRequestService}
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
        onRequestService={onRequestService}
      />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   SEND US A PHOTO
   ══════════════════════════════════════════════════════════════════════ */
function SendPhotoSection({ onRequestService }: { onRequestService: () => void }) {
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
        <div className="mt-10 border-2 border-dashed rounded-2xl p-10 md:p-14 transition-colors"
          style={{ borderColor: "#d1d5db" }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = ELECTRIC_BLUE)}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#d1d5db")}
        >
          <div
            className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4 icon-glow"
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
              onClick={onRequestService}
            >
              <Upload className="w-4 h-4 mr-2" />
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
function CtaBanner({ onRequestService }: { onRequestService: () => void }) {
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
            className="font-bold text-lg px-10 py-6 rounded-md border-2 shadow-xl hover:scale-105 transition-transform"
            style={{
              borderColor: YELLOW,
              color: YELLOW,
              background: "transparent",
            }}
            onClick={onRequestService}
          >
            REQUEST SERVICE ONLINE
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
            <div className="flex items-center gap-2.5 mb-6">
              <img
                src="/santos-logo-v2.png"
                alt="Santos Plumbing"
                className="h-10 w-10 object-contain"
              />
              <span
                className="font-extrabold text-xl tracking-tight"
                style={{ color: WHITE }}
              >
                SANTOS
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Trusted by Inland Empire and Foothill homeowners since day one. Locally
              owned, family operated, and committed to getting it flowing right the first time.
              With over 1,000 neighbors served, we don&apos;t just fix pipes — we help our community win.
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

        {/* Divider — Locally Owned badge */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <div className="flex items-center justify-center gap-3">
            <Heart className="w-5 h-5" style={{ color: YELLOW }} />
            <span className="font-bold text-sm" style={{ color: YELLOW }}>
              Locally Owned & Family Operated
            </span>
          </div>
        </div>

        {/* Social media icon row — centered above dual-wing bar */}
        <div className="mt-6 flex items-center justify-center gap-3">
          {[
            {
              icon: Facebook,
              href: "https://facebook.com/SantosPlumbingIE",
              label: "Facebook",
            },
            {
              icon: Instagram,
              href: "https://instagram.com/SantosPlumbingIE",
              label: "Instagram",
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/company/SantosPlumbingIE",
              label: "LinkedIn",
            },
            {
              icon: NextdoorIcon,
              href: "https://nextdoor.com/pages/santos-plumbing-upland-ca/recommendations/",
              label: "Nextdoor",
            },
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

        {/* Dual-wing footer bar — Copyright left, Agency credits right */}
        <div className="mt-6 pt-5 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left wing — Copyright */}
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} Santos Plumbing. All rights reserved.
            </p>

            {/* Right wing — Agency credits */}
            <div className="agency-credits text-right space-y-0.5">
              <p className="text-xs">
                <span className="text-gray-500">Powered by </span>
                <span className="font-semibold tracking-wide" style={{ color: ELECTRIC_BLUE }}>NXLBYLDR CRM</span>
              </p>
              <p className="text-xs agency-managed-line transition-colors">
                <span className="text-gray-500">managed by </span>
                <a
                  href="https://vsualdigitalmedia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="agency-link inline"
                >
                  <span className="agency-brand font-bold text-white transition-colors">VSUAL</span>
                  <span className="agency-domain text-gray-500 transition-colors">digitalmedia.com</span>
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
export default function Home() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [heroPhoto, setHeroPhoto] = useState<{ file: File; preview: string } | null>(null);
  const openPopup = useCallback(() => setPopupOpen(true), []);
  const closePopup = useCallback(() => {
    setPopupOpen(false);
    setHeroPhoto(null);
  }, []);

  const handleHeroPhotoDrop = useCallback((photo: { file: File; preview: string }) => {
    setHeroPhoto(photo);
    // Automatically open the popup so the photo flows into the lead form
    setPopupOpen(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onRequestService={openPopup} />
      <main className="flex-1">
        <Hero onRequestService={openPopup} onPhotoDrop={handleHeroPhotoDrop} />
        <HiddenLeakSection onRequestService={openPopup} />
        <ServicesDeepDive onRequestService={openPopup} />
        <SendPhotoSection onRequestService={openPopup} />
        <CtaBanner onRequestService={openPopup} />
      </main>
      <Footer />
      <MultiStepPopup open={popupOpen} onClose={closePopup} initialPhoto={heroPhoto} />
      <LeakAgentAI />
    </div>
  );
}
