"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Bot, Cpu, Image as ImageIcon, Send, Sparkles, UserRound } from "lucide-react";
import { chatbotContent, samplePrompts } from "@/data/chatbotContent";
import { SectionShell } from "./SectionShell";

type Message = {
  role: "wen" | "visitor";
  text: string;
};

function findMockResponse(question: string) {
  const normalized = question.toLowerCase();
  const direct = samplePrompts.find((prompt) => prompt.question.toLowerCase() === normalized);

  if (direct) {
    return direct.answer;
  }

  for (const route of chatbotContent.keywordResponses) {
    if (route.keywords.some((keyword) => normalized.includes(keyword))) {
      return samplePrompts[route.promptIndex]?.answer ?? chatbotContent.fallbackAnswer;
    }
  }

  return chatbotContent.fallbackAnswer;
}

export function AskWen() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "wen",
      text: chatbotContent.introMessage
    }
  ]);
  const [input, setInput] = useState("");

  const suggestedCards = useMemo(() => chatbotContent.suggestedVisualCards, []);

  function submitQuestion(question: string) {
    const trimmed = question.trim();

    if (!trimmed) {
      return;
    }

    setMessages((current) => [
      ...current,
      { role: "visitor", text: trimmed },
      { role: "wen", text: findMockResponse(trimmed) }
    ]);
    setInput("");
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
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gilt text-ink">
              <Sparkles size={23} aria-hidden />
            </div>
            <div>
              <h3 className="font-serif text-3xl font-semibold">{chatbotContent.promptStarterTitle}</h3>
              <p className="text-sm font-medium text-white/50">{chatbotContent.promptStarterSubtitle}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            {samplePrompts.map((prompt) => (
              <button
                key={prompt.question}
                type="button"
                onClick={() => submitQuestion(prompt.question)}
                className="group rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-left transition hover:-translate-y-0.5 hover:border-gilt/50 hover:bg-white/20"
              >
                <span className="text-sm font-bold leading-6 text-white/80">{prompt.question}</span>
                <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.2em] text-gilt/70">
                  {chatbotContent.runPromptLabel}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-cyan-200/20 bg-[#08111f]/75 p-4">
            <div className="mb-4 flex items-center gap-2 text-sm font-bold text-cyan-200">
              <Cpu size={16} aria-hidden />
              {chatbotContent.suggestedVisualCardsTitle}
            </div>
            <div className="grid gap-3">
              {suggestedCards.map((card) => (
                <div key={card.title} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-gilt">
                    <ImageIcon size={17} aria-hidden />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{card.title}</p>
                    <p className="text-xs text-white/50">{card.meta}</p>
                  </div>
                </div>
              ))}
            </div>
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
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-cyan-200">
                <Bot size={21} aria-hidden />
              </div>
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
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-lapis text-white">
                    <Bot size={16} aria-hidden />
                  </div>
                )}
                <p
                  className={`max-w-[82%] rounded-3xl px-4 py-3 text-sm leading-6 shadow-sm ${
                    message.role === "visitor"
                      ? "bg-ink text-white"
                      : "border border-ink/10 bg-white text-ink/70"
                  }`}
                >
                  {message.text}
                </p>
                {message.role === "visitor" && (
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-gilt text-ink">
                    <UserRound size={16} aria-hidden />
                  </div>
                )}
              </motion.div>
            ))}
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
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cinnabar text-white shadow-lg shadow-cinnabar/20 transition hover:-translate-y-0.5 hover:bg-ink"
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
