"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Send, UserRound } from "lucide-react";
import { additionalPreparedPrompts, chatbotContent, samplePrompts, type ChatPrompt } from "@/data/chatbotContent";
import { SectionShell } from "./SectionShell";

type Message = {
  role: "wen" | "visitor";
  text: string;
};

function normalizeQuestion(question: string) {
  return question
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function findPreparedResponse(question: string): Pick<ChatPrompt, "answer"> {
  const normalized = normalizeQuestion(question);
  const allKnownPrompts = [...samplePrompts, ...additionalPreparedPrompts];
  const direct = allKnownPrompts.find((prompt) => normalizeQuestion(prompt.question) === normalized);

  if (direct) {
    return direct;
  }

  for (const route of chatbotContent.keywordResponses) {
    if (route.keywords.some((keyword) => normalized.includes(keyword))) {
      return samplePrompts[route.promptIndex] ?? {
        answer: chatbotContent.fallbackAnswer
      };
    }
  }

  return {
    answer: chatbotContent.fallbackAnswer
  };
}

function WAvatar({ size = "medium" }: { size?: "small" | "medium" | "large" }) {
  const [imageFailed, setImageFailed] = useState(false);
  const sizeClasses = {
    small: "h-9 w-9 rounded-xl",
    medium: "h-12 w-12 rounded-2xl",
    large: "h-16 w-16 rounded-2xl"
  };

  return (
    <div
      className={`relative shrink-0 overflow-hidden border border-gilt/35 bg-[#071224] text-gilt shadow-[0_0_24px_rgba(84,127,224,0.3)] ${sizeClasses[size]}`}
      aria-label="W, Wen’s robot guide"
    >
      {imageFailed ? (
        <span className="flex h-full w-full items-center justify-center font-serif text-xl font-semibold">W</span>
      ) : (
        <Image
          src="/images/w-avatar.png"
          alt="W, Wen’s robot guide"
          fill
          className="object-cover object-top"
          sizes={size === "large" ? "64px" : size === "medium" ? "48px" : "36px"}
          onError={() => setImageFailed(true)}
        />
      )}
    </div>
  );
}

export function AskWen() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "wen",
      text: chatbotContent.introMessage
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, isTyping]);

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    []
  );

  function submitQuestion(question: string) {
    const trimmed = question.trim();

    if (!trimmed) {
      return;
    }

    if (isTyping) {
      return;
    }

    const response = findPreparedResponse(trimmed);
    setMessages((current) => [...current, { role: "visitor", text: trimmed }]);
    setInput("");
    setIsTyping(true);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setMessages((current) => [...current, { role: "wen", text: response.answer }]);
      setIsTyping(false);
    }, 650);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submitQuestion(input);
  }

  return (
    <SectionShell
      id="ask-wen"
      eyebrow={chatbotContent.section.eyebrow}
      title={chatbotContent.section.title}
      titleClassName="!text-3xl sm:!text-4xl"
      className="relative overflow-hidden bg-ink text-white"
    >
      <div className="absolute inset-0 tech-scan opacity-50" />
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cinnabar/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-lapis/25 blur-3xl" />

      <div className="relative grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl shadow-black/25 backdrop-blur"
        >
          <div className="flex items-center gap-3">
            <WAvatar size="large" />
            <div>
              <h3 className="font-serif text-3xl font-semibold text-gilt">{chatbotContent.promptStarterTitle}</h3>
              <p className="text-sm font-medium text-white/50">{chatbotContent.promptStarterSubtitle}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {samplePrompts.map((prompt) => (
              <button
                key={prompt.question}
                type="button"
                disabled={isTyping}
                onClick={() => submitQuestion(prompt.question)}
                className="group rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-left transition hover:-translate-y-0.5 hover:border-gilt/50 hover:bg-white/20 disabled:cursor-wait disabled:opacity-60"
              >
                <span className="text-sm font-bold leading-6 text-white/80">{prompt.question}</span>
                <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.2em] text-gilt/70">
                  {chatbotContent.runPromptLabel}
                </span>
              </button>
            ))}
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2rem] border border-white/20 bg-[#f8f2e6] text-ink shadow-2xl shadow-black/30"
        >
          <div className="flex items-center justify-between border-b border-ink/10 bg-white/80 px-5 py-4">
            <div className="flex items-center gap-3">
              <WAvatar size="medium" />
              <div>
                <p className="font-black">{chatbotContent.consoleTitle}</p>
                <p className="text-xs font-semibold text-ink/50">{chatbotContent.consoleSubtitle}</p>
              </div>
            </div>
            <span className="rounded-full bg-jade/10 px-3 py-1 text-xs font-black text-jade">{chatbotContent.statusLabel}</span>
          </div>

          <div className="chat-surface max-h-[500px] space-y-4 overflow-y-auto p-5">
            {messages.map((message, index) => (
              <motion.div
                key={`${message.role}-${index}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 ${message.role === "visitor" ? "justify-end" : "justify-start"}`}
              >
                {message.role === "wen" && (
                  <div className="mt-1">
                    <WAvatar size="small" />
                  </div>
                )}
                <div className="max-w-[82%]">
                  <p
                    className={`whitespace-pre-line rounded-3xl px-4 py-3 text-sm leading-6 shadow-sm ${
                      message.role === "visitor"
                        ? "bg-ink text-white"
                        : "border border-ink/10 bg-white text-ink/70"
                    }`}
                  >
                    {message.text}
                  </p>
                </div>
                {message.role === "visitor" && (
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-gilt text-ink">
                    <UserRound size={16} aria-hidden />
                  </div>
                )}
              </motion.div>
            ))}
            <AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3"
                >
                  <WAvatar size="small" />
                  <div className="flex items-center gap-3 rounded-3xl border border-ink/10 bg-white px-4 py-3" aria-label="W is thinking">
                    <span className="text-xs font-bold text-ink/55">W is thinking</span>
                    <span className="flex gap-1">
                      {[0, 1, 2].map((dot) => (
                        <span
                          key={dot}
                          className="h-1.5 w-1.5 rounded-full bg-lapis/60 animate-bounce"
                          style={{ animationDelay: `${dot * 120}ms` }}
                        />
                      ))}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={chatEndRef} />
          </div>

          <div className="border-t border-ink/10 bg-white/80 p-5">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={chatbotContent.inputPlaceholder}
                className="min-w-0 flex-1 rounded-2xl border border-ink/10 bg-white px-5 py-4 text-sm font-semibold text-ink outline-none transition focus:border-lapis/50 focus:ring-4 focus:ring-lapis/10"
              />
              <button
                type="submit"
                aria-label="Send question"
                disabled={isTyping}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cinnabar text-white shadow-lg shadow-cinnabar/20 transition hover:-translate-y-0.5 hover:bg-ink disabled:cursor-wait disabled:opacity-50"
              >
                <Send size={19} aria-hidden />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
