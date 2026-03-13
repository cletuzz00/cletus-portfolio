import { useEffect, useMemo, useState } from "react";
import {
  AboutSection,
  BlogSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  Footer,
  HeroSection,
  ImpactSection,
  InterestsSection,
  Navigation,
  ProjectsSection,
  SectionDivider,
  SkillsSection,
  TestimonialsSection,
} from "./components/Sections";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)
      .map((element) => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
              }
            });
          },
          {
            rootMargin: "-40% 0px -40% 0px",
            threshold: 0.1,
          },
        );

        observer.observe(element);
        return observer;
      });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const parallaxStyle = useMemo(
    () => ({
      transform: `translateY(${scrollY * 0.18}px)`,
    }),
    [scrollY],
  );

  return (
    <div className="app-shell">
      <div className="background-grid" />
      <div className="aurora aurora-left" style={parallaxStyle} />
      <div className="aurora aurora-right" style={{ transform: `translateY(${scrollY * -0.1}px)` }} />
      <div className="noise-overlay" />

      <Navigation
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        onMenuToggle={() => setMobileMenuOpen((current) => !current)}
        onNavigate={() => setMobileMenuOpen(false)}
        sections={sections}
      />

      <main>
        <HeroSection />
        <SectionDivider />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <InterestsSection />
        <SkillsSection />
        <EducationSection />
        <ImpactSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
