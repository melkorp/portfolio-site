import FadeIn from "@/components/motion/fade-in";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";

export default function CTASection() {
  return (
    <FadeIn>
      <Section>
        <Container>
          <div className="rounded-3xl border border-surface bg-surface md:backdrop-blur-xl p-10 md:p-16 shadow-(--shadow-soft) overflow-hidden">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-(--accent)">
                Collaboration
              </p>
              <Heading
                title="Готовы обсудить проект?"
                description="Ищу интересные задачи — от лендингов до сложных frontend-систем. Пишите, разберём идею бесплатно."
              />
              <p className="text-sm text-secondary mb-10">
                Open for collaboration — let&apos;s build something fast and
                SEO-friendly.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </FadeIn>
  );
}
