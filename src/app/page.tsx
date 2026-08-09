import Link from "next/link";
import HeroTitle from "@/components/motion/hero-title";
import FadeIn from "@/components/motion/fade-in";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import ServicesSection from "@/components/sections/services-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import ContactSection from "@/components/sections/contact-section";
import CTASection from "@/components/sections/cta-section";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({ title: "Главная" });

export default function Home() {
  return (
    <>
      <Section>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
        <Container>
          <div className="max-w-4xl">
            <FadeIn>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-(--accent)">
                Melkorp
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <HeroTitle className="mb-6 text-5xl font-black tracking-tight leading-[0.95] md:text-7xl wrap-break-word hyphens-auto">
                Создаю быстрые сайты, которые любят поисковики
              </HeroTitle>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mb-3 text-base md:text-lg leading-8 text-primary">
                Проектирую адаптивные интерфейсы с чистой архитектурой, высокой
                скоростью загрузки и продуманной SEO-структурой.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-sm text-secondary mb-10">
                Modern frontend, clean architecture, SEO that actually works.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Button href="#portfolio">Портфолио</Button>
                <Link
                  href="#contacts"
                  className="inline-flex items-center justify-center rounded-2xl bg-accent px-6 py-4 font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-(--accent-glow) active:scale-[0.98]"
                >
                  Связаться
                </Link>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <ServicesSection />
      <PortfolioSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
