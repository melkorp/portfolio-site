"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import FadeIn from "@/components/motion/fade-in";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactSection() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/mzepbdqn", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Не удалось отправить сообщение. Попробуйте ещё раз.");
      }

      setSucceeded(true);
      setValues(initialValues);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Не удалось отправить сообщение. Попробуйте ещё раз.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (succeeded) {
    return (
      <FadeIn>
        <Section id="contacts">
          <Container>
            <div className="rounded-3xl border border-surface bg-surface md:backdrop-blur-xl p-10 md:p-16 shadow-(--shadow-soft) overflow-hidden">
              <div className="max-w-3xl text-center">
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-(--accent)">
                  Contacts
                </p>
                <h2 className="mt-2 text-3xl font-bold">Спасибо</h2>
                <p className="mt-4 text-sm text-secondary">
                  Ваше сообщение отправлено — я свяжусь с вами в ближайшее
                  время.
                </p>
              </div>
            </div>
          </Container>
        </Section>
      </FadeIn>
    );
  }

  return (
    <FadeIn>
      <Section id="contacts">
        <Container>
          <div className="rounded-3xl border border-surface bg-surface md:backdrop-blur-xl p-10 md:p-16 shadow-(--shadow-soft) overflow-hidden">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-(--accent)">
                Contacts
              </p>
              <Heading
                title="Напишите мне"
                description="Есть задача, вопрос или идея? Я открыт к сотрудничеству — выходите на связь удобным способом."
              />
              <p className="text-sm text-secondary mb-10">
                Available for frontend projects, SEO consulting and web
                development.
              </p>

              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <form onSubmit={handleSubmit} className="grid gap-4">
                    <label className="block text-sm font-medium text-secondary">
                      Имя
                      <input
                        type="text"
                        name="name"
                        required
                        value={values.name}
                        onChange={(event) =>
                          setValues((current) => ({
                            ...current,
                            name: event.target.value,
                          }))
                        }
                        className="mt-2 w-full rounded-3xl border border-surface bg-background/70 px-4 py-3 text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                      />
                    </label>

                    <label className="block text-sm font-medium text-secondary">
                      Email
                      <input
                        type="email"
                        name="email"
                        required
                        value={values.email}
                        onChange={(event) =>
                          setValues((current) => ({
                            ...current,
                            email: event.target.value,
                          }))
                        }
                        className="mt-2 w-full rounded-3xl border border-surface bg-background/70 px-4 py-3 text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                      />
                    </label>

                    <label className="block text-sm font-medium text-secondary">
                      Тема (опционально)
                      <input
                        type="text"
                        name="subject"
                        value={values.subject}
                        onChange={(event) =>
                          setValues((current) => ({
                            ...current,
                            subject: event.target.value,
                          }))
                        }
                        className="mt-2 w-full rounded-3xl border border-surface bg-background/70 px-4 py-3 text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                      />
                    </label>

                    <label className="block text-sm font-medium text-secondary">
                      Сообщение
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={values.message}
                        onChange={(event) =>
                          setValues((current) => ({
                            ...current,
                            message: event.target.value,
                          }))
                        }
                        className="mt-2 w-full resize-none rounded-3xl border border-surface bg-background/70 px-4 py-3 text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                      />
                    </label>

                    {error ? (
                      <p className="text-sm text-red-400">{error}</p>
                    ) : null}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center justify-center rounded-2xl bg-accent px-6 py-4 text-sm font-medium text-white transition hover:bg-primary/90 disabled:opacity-60"
                    >
                      {submitting ? "Отправка..." : "Отправить сообщение"}
                    </button>
                  </form>
                </div>

                <div className="space-y-6 rounded-3xl border border-surface bg-surface/80 p-8">
                  <div>
                    <p className="mb-2 text-sm uppercase tracking-[0.2em] text-secondary">
                      GitHub
                    </p>
                    <a
                      href="https://github.com/melkorp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg transition hover:text-(--accent-hover)"
                    >
                      github.com/melkorp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </FadeIn>
  );
}
