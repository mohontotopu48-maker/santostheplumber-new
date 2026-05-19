"use client";

import { Phone, ArrowRight } from "lucide-react";

const NAVY = "#001F3F";
const YELLOW = "#FFD700";

interface ServiceCtaProps {
  phone: string;
  serviceTitle: string;
}

export function ServiceCtaButtons({ phone, serviceTitle }: ServiceCtaProps) {
  const handleRequestService = () => {
    const popupEvent = new CustomEvent("openServicePopup", {
      detail: { service: serviceTitle },
    });
    window.dispatchEvent(popupEvent);

    // Fallback: if the main page popup isn't available, open phone dialer
    setTimeout(() => {
      window.location.href = `tel:${phone.replace(/[^\d+]/g, "")}`;
    }, 3000);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <button
        onClick={handleRequestService}
        className="font-bold text-base px-6 py-4 rounded-md text-black shadow-xl hover:scale-105 transition-transform inline-flex items-center justify-center gap-2"
        style={{ background: YELLOW }}
      >
        REQUEST SERVICE
        <ArrowRight className="w-4 h-4" />
      </button>
      <a
        href={`tel:${phone.replace(/[^\d+]/g, "")}`}
        className="hero-phone-btn font-bold text-base px-6 py-4 rounded-md shadow-xl hover:scale-105 transition-transform inline-flex items-center justify-center gap-2"
      >
        <Phone className="w-4 h-4" />
        {phone}
      </a>
    </div>
  );
}

export function StickyHeaderCta({ phone }: { phone: string }) {
  return (
    <div className="flex items-center gap-3">
      <a
        href={`tel:${phone.replace(/[^\d+]/g, "")}`}
        className="font-bold text-sm flex items-center gap-1.5"
        style={{ color: YELLOW, whiteSpace: "nowrap" }}
      >
        <Phone className="w-4 h-4" />
        {phone}
      </a>
      <a
        href={`tel:${phone.replace(/[^\d+]/g, "")}`}
        className="font-bold px-5 py-2 rounded-md text-black shadow-lg hover:scale-105 transition-transform text-sm"
        style={{ background: YELLOW }}
      >
        REQUEST SERVICE
      </a>
    </div>
  );
}
