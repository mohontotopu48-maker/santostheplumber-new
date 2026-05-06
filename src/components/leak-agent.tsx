"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { X, Send, RotateCcw, Camera, ImagePlus } from "lucide-react";

/* ─── Colour Tokens (must match page.tsx) ─── */
const NAVY = "#001F3F";
const YELLOW = "#FFD700";
const WHITE = "#FFFFFF";
const ELECTRIC_BLUE = "#38BDF8";

/* ─── Water Drop Icon (custom SVG) ─── */
function WaterDropIcon({ className }: { className?: string }) {
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
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}

/* ─── Message Types ─── */
interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  photo?: string | null; // base64 data URL for user photo messages
}

/* ─── Suggested Quick Actions ─── */
const QUICK_ACTIONS = [
  { emoji: "\uD83D\uDCB0", label: "Get an instant estimate", query: "Can I get an instant estimate for my plumbing issue?" },
  { emoji: "\uD83C\uDFE0", label: "Is my leak a 'Slab Leak'?", query: "How do I know if my leak is a slab leak? What are the signs?" },
  { emoji: "\uD83D\uDD25", label: "Water heater making noise?", query: "My water heater is making strange noises. What does that mean and should I be worried?" },
  { emoji: "\uD83D\uDCCD", label: "Are you available in [City]?", query: "Are you available in my city? What areas do you serve?" },
  { emoji: "\uD83D\uDCC5", label: "Book a 'Peek' Inspection", query: "I'd like to book an Annual Peek Inspection. How does that work and what does it include?" },
];

/* ══════════════════════════════════════════════════════════════════════
   LEAK AGENT AI — Full Component with Photo Drop Zone
   ══════════════════════════════════════════════════════════════════════ */
export default function LeakAgentAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoBase64, setPhotoBase64] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatFileInputRef = useRef<HTMLInputElement>(null);

  /* Auto-scroll to bottom on new messages */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* Focus input when chat opens */
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 400);
    }
  }, [isOpen]);

  /* Generate unique message ID */
  const genId = useCallback(() => `msg_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`, []);

  /* Process a photo file — creates preview URL and base64 data URL */
  const processPhoto = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) return;
    const previewUrl = URL.createObjectURL(file);
    setPhotoPreview(previewUrl);
    const reader = new FileReader();
    reader.onload = () => {
      setPhotoBase64(reader.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

  /* Handle drag-and-drop on the photo drop zone */
  const handlePhotoDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files?.[0];
    if (file) processPhoto(file);
  }, [processPhoto]);

  /* Handle drag-over to show visual feedback */
  const handlePhotoDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  /* Handle file selection from camera/gallery via hidden input */
  const handlePhotoSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processPhoto(file);
    // Reset input so the same file can be re-selected
    e.target.value = "";
  }, [processPhoto]);

  /* Clear the pending photo */
  const clearPhoto = useCallback(() => {
    setPhotoPreview(null);
    setPhotoBase64(null);
  }, []);

  /* Send message to AI backend (with optional photo) */
  const sendMessage = useCallback(async (text: string) => {
    if ((!text.trim() && !photoBase64) || isLoading) return;

    const userMessage: ChatMessage = {
      id: genId(),
      role: "user",
      content: text.trim() || (photoBase64 ? "📷 Photo of my plumbing issue — what do you see?" : ""),
      timestamp: new Date(),
      photo: photoPreview,
    };

    // Capture photo for API before clearing state
    const capturedBase64 = photoBase64;

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setPhotoPreview(null);
    setPhotoBase64(null);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m, idx) => {
            // Only attach image to the latest user message
            const isLatestWithPhoto =
              m.role === "user" &&
              idx === messages.length &&
              !!capturedBase64;
            return {
              role: m.role,
              content: m.content,
              image: isLatestWithPhoto ? capturedBase64 : undefined,
            };
          }),
        }),
      });

      if (!res.ok) throw new Error("Chat API error");

      const data = await res.json();
      const assistantMessage: ChatMessage = {
        id: genId(),
        role: "assistant",
        content: data.content || "I'm having trouble connecting right now. Please call (909) 256-9224 for immediate help!",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      const errorMessage: ChatMessage = {
        id: genId(),
        role: "assistant",
        content: "I'm having trouble connecting right now. For immediate assistance, please call (909) 256-9224 and our team will help you directly!",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [messages, isLoading, genId, photoBase64, photoPreview]);

  /* Handle quick action click */
  const handleQuickAction = useCallback((query: string) => {
    sendMessage(query);
  }, [sendMessage]);

  /* Handle form submit */
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  }, [inputValue, sendMessage]);

  /* Reset conversation */
  const handleReset = useCallback(() => {
    setMessages([]);
    setInputValue("");
    setPhotoPreview(null);
    setPhotoBase64(null);
  }, []);

  /* Close chat */
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  /* Open chat */
  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      {/* ══════ Sticky Tab (always visible when chat is closed) ══════ */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="leak-agent-tab"
          aria-label="Open Leak Agent AI"
        >
          {/* Yellow accent stripe */}
          <div className="leak-agent-tab-accent" />
          {/* Water drop icon — white for max contrast on navy tab */}
          <WaterDropIcon className="w-5 h-5" style={{ color: WHITE }} />
          {/* Vertical text */}
          <span className="leak-agent-tab-text">Ask Leak Agent AI</span>
        </button>
      )}

      {/* ══════ Expanded Chat Panel ══════ */}
      {isOpen && (
        <div className="leak-agent-chat">
          {/* ── Chat Header ── */}
          <div className="leak-agent-header">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(56, 189, 248, 0.15)" }}
              >
                <WaterDropIcon className="w-5 h-5" style={{ color: ELECTRIC_BLUE }} />
              </div>
              <div>
                <h3 className="font-extrabold text-base leading-tight" style={{ color: WHITE }}>
                  Leak Agent AI
                </h3>
                <p
                  className="text-[10px] font-bold tracking-[0.15em] uppercase"
                  style={{ color: YELLOW }}
                >
                  Your Emergency Response Assistant
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={handleReset}
                className="leak-agent-header-btn"
                aria-label="Reset conversation"
                title="Reset conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={handleClose}
                className="leak-agent-header-btn"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ── Chat Body ── */}
          <div className="leak-agent-body">
            {messages.length === 0 ? (
              /* ── Welcome State ── */
              <div className="leak-agent-welcome">
                <div
                  className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-4"
                  style={{ background: "rgba(56, 189, 248, 0.10)" }}
                >
                  <WaterDropIcon className="w-7 h-7" style={{ color: ELECTRIC_BLUE }} />
                </div>
                <h4
                  className="font-extrabold text-base text-center mb-3"
                  style={{ color: NAVY }}
                >
                  Hey there! I&apos;m Leak Agent AI
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed text-center mb-1">
                  Your personal plumbing diagnosis assistant.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed text-center mb-5">
                  I&apos;m trained on Inland Empire plumbing codes, slab leak detection,
                  and 24/7 emergency protocols. I&apos;m here to help you:
                </p>
                <ul className="space-y-2.5 text-sm text-gray-600 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-base leading-none mt-0.5">{"\uD83D\uDCA7"}</span>
                    <span>Identify if your leak is an emergency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-base leading-none mt-0.5">{"\uD83D\uDCF8"}</span>
                    <span>Analyze photos of your water heater or pipes for AI Analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-base leading-none mt-0.5">{"\uD83D\uDCB0"}</span>
                    <span>Explain upfront pricing for repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-base leading-none mt-0.5">{"\u23F1\uFE0F"}</span>
                    <span>Dispatch a tech to your IE home immediately</span>
                  </li>
                </ul>
                <p className="text-sm font-medium text-center" style={{ color: NAVY }}>
                  What can I help you with today?
                </p>
              </div>
            ) : (
              /* ── Message Thread ── */
              <div className="leak-agent-messages">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`leak-agent-msg ${msg.role === "user" ? "leak-agent-msg-user" : "leak-agent-msg-ai"}`}
                  >
                    {msg.role === "assistant" && (
                      <div
                        className="leak-agent-msg-avatar"
                        style={{ background: "rgba(56, 189, 248, 0.10)" }}
                      >
                        <WaterDropIcon className="w-3.5 h-3.5" style={{ color: ELECTRIC_BLUE }} />
                      </div>
                    )}
                    <div
                      className={`leak-agent-msg-bubble ${msg.role === "user" ? "leak-agent-msg-bubble-user" : "leak-agent-msg-bubble-ai"}`}
                    >
                      {/* Show photo thumbnail in user message if present */}
                      {msg.photo && (
                        <div className="mb-2">
                          <img
                            src={msg.photo}
                            alt="Uploaded plumbing photo"
                            className="leak-agent-photo-thumb"
                          />
                        </div>
                      )}
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {isLoading && (
                  <div className="leak-agent-msg leak-agent-msg-ai">
                    <div
                      className="leak-agent-msg-avatar"
                      style={{ background: "rgba(56, 189, 248, 0.10)" }}
                    >
                      <WaterDropIcon className="w-3.5 h-3.5" style={{ color: ELECTRIC_BLUE }} />
                    </div>
                    <div className="leak-agent-msg-bubble leak-agent-msg-bubble-ai">
                      <div className="leak-agent-typing">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            )}

            {/* ── Suggested Questions (show when no messages) ── */}
            {messages.length === 0 && (
              <div className="leak-agent-quick-actions">
                {QUICK_ACTIONS.map((action, i) => (
                  <button
                    key={i}
                    className="leak-agent-quick-btn"
                    onClick={() => handleQuickAction(action.query)}
                  >
                    <span className="text-sm">{action.emoji}</span>
                    <span className="text-xs font-semibold" style={{ color: NAVY }}>
                      {action.label}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Photo Drop Zone (above input) ── */}
          <div
            className="leak-agent-photo-drop"
            onDragOver={handlePhotoDragOver}
            onDrop={handlePhotoDrop}
            onClick={() => chatFileInputRef.current?.click()}
          >
            {photoPreview ? (
              <div className="leak-agent-photo-preview-row">
                <img
                  src={photoPreview}
                  alt="Photo preview"
                  className="leak-agent-photo-preview-img"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold truncate" style={{ color: ELECTRIC_BLUE }}>
                    Photo ready!
                  </p>
                  <p className="text-[10px] text-gray-400">Send with your message or tap to replace</p>
                </div>
                <button
                  className="leak-agent-photo-clear"
                  onClick={(e) => {
                    e.stopPropagation();
                    clearPhoto();
                  }}
                  aria-label="Remove photo"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div className="leak-agent-photo-prompt">
                <Camera className="w-4 h-4 shrink-0" style={{ color: YELLOW }} />
                <span className="text-xs font-semibold" style={{ color: NAVY }}>
                  Drop photos here or <span style={{ color: ELECTRIC_BLUE }}>Snap a new one!</span>
                </span>
              </div>
            )}
          </div>
          {/* Hidden file input for camera / gallery */}
          <input
            ref={chatFileInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={handlePhotoSelect}
          />

          {/* ── Input Area ── */}
          <form className="leak-agent-input-area" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              className="leak-agent-input"
              placeholder={photoBase64 ? "Add a description (optional)..." : "Ask Leak Agent anything..."}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isLoading}
            />
            <button
              type="submit"
              className="leak-agent-send-btn"
              disabled={(!inputValue.trim() && !photoBase64) || isLoading}
              aria-label="Send message"
            >
              {photoBase64 ? (
                <ImagePlus className="w-4 h-4" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </button>
          </form>

          {/* ── Compliance Footer ── */}
          <div className="leak-agent-footer">
            <p className="text-[9px] text-gray-400 text-center leading-relaxed">
              Powered by{" "}
              <span className="font-semibold" style={{ color: ELECTRIC_BLUE }}>
                NXLBYLDR AI
              </span>{" "}
              | managed by{" "}
              <a
                href="https://vsualdigitalmedia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="agency-link inline"
              >
                <span className="agency-brand font-semibold text-gray-400 transition-colors">VSUAL</span>
                <span className="agency-domain text-gray-400 transition-colors">digitalmedia.com</span>
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
