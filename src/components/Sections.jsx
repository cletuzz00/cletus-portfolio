import { useEffect, useRef, useState } from "react";

const assetPath = (fileName) => `${import.meta.env.BASE_URL}assets/${fileName}`;

const socials = {
  email: "mailto:cletuzz@gmail.com",
  linkedin: "https://www.linkedin.com/in/cletus-ngwerume",
  github: "https://github.com/cletuzz00",
  resume: assetPath("resume.pdf"),
};

const statItems = [
  { value: "5+", label: "Years building production-grade software and AI systems" },
  { value: "4.0", label: "Graduate GPA at Michigan Technological University" },
  { value: "3B-70B", label: "LLM benchmarking across model scales and retrieval settings" },
  { value: "1M+", label: "Users supported through revenue, ERP, and digital platforms" },
];

const quickFacts = [
  "Graduate researcher in LLMs, retrieval, and human-robot interaction",
  "Experienced in Python, PyTorch, AWS, Docker, Kubernetes, and enterprise systems",
  "Interested in AI infrastructure, energy analytics, and operational intelligence",
];

const experienceItems = [
  {
    title: "Research Assistant - Large Language Models",
    org: "Michigan Technological University",
    period: "Current",
    description:
      "Fine-tune and benchmark large language models on AWS across 3B to 70B parameter scales. Build reproducible evaluation pipelines, compare latency and accuracy trade-offs, and run ablation studies across chunking, embedding, and retrieval configurations.",
    accent: "cyan",
  },
  {
    title: "Research Assistant - Human Robot Interaction",
    org: "Michigan Technological University",
    period: "Current",
    description:
      "Integrate LLM-based language understanding into robot control workflows, evaluate STT/TTS pipelines, and collaborate across disciplines to enable more natural and human-centered robotic interaction.",
    accent: "emerald",
  },
  {
    title: "Provincial Project Manager / Technical Lead",
    org: "LADS Africa",
    period: "Industry",
    description:
      "Led the design and delivery of a custom ERP platform using Python, C#, Docker, and disciplined engineering workflows. Replaced SAP as the core enterprise system and helped reduce software and licensing costs by 60 percent.",
    accent: "violet",
  },
  {
    title: "Head of Software Development",
    org: "Intelli Africa Solutions",
    period: "Industry",
    description:
      "Architected distributed services for digital financial platforms spanning 200+ remote locations, improving resilience for low-bandwidth conditions and strengthening agile delivery, observability, and incident response.",
    accent: "amber",
  },
  {
    title: "Senior Software Engineer",
    org: "LADS Africa",
    period: "Industry",
    description:
      "Built billing and revenue collection systems used by more than 1M users, improved municipal and SME revenue collection, optimized SQL workloads, and integrated secure payment capabilities for real-world operations.",
    accent: "blue",
  },
];

const projects = [
  {
    title: "LLM-Powered Question Answering and RAG Platform",
    summary:
      "A modular retrieval and generation platform covering ingestion, preprocessing, embeddings, retrieval, inference, and evaluation with interchangeable model and retrieval strategies.",
    impact: "Explored the trade-offs among quality, latency, and operating cost across retrieval configurations.",
    stack: ["Python", "LLMs", "RAG", "AWS", "Evaluation"],
    image: assetPath("project-rag.svg"),
  },
  {
    title: "COVID-19 ICU Admission Risk Prediction",
    summary:
      "A clinical risk modeling workflow using structured data, feature engineering, cross-validation, threshold tuning, confusion matrices, and ROC analysis to support decision-aware classification.",
    impact: "Focused on interpretable classification performance and threshold-sensitive evaluation for high-stakes settings.",
    stack: ["Python", "scikit-learn", "Classification", "ROC/AUC"],
    image: assetPath("project-clinical.svg"),
  },
  {
    title: "AI for Document Understanding",
    summary: "A reserved slot for document pipelines, extraction workflows, and knowledge-centric AI systems.",
    impact: "Ready for a real project summary, links, and outcome metrics when you want to add one.",
    stack: ["OCR", "Embeddings", "Pipelines"],
    image: assetPath("project-docs.svg"),
  },
  {
    title: "Energy and Power Systems Analytics",
    summary: "A reserved slot for forecasting, monitoring, and applied AI in operational environments.",
    impact: "A strong slot for work at the intersection of AI, infrastructure, and energy systems.",
    stack: ["Time Series", "Monitoring", "Applied AI"],
    image: assetPath("project-energy.svg"),
  },
  {
    title: "Robotics Language Interface Tools",
    summary: "A reserved slot for human-robot interaction tools, speech interfaces, and robot instruction pipelines.",
    impact: "Ideal for demos combining STT/TTS, intent handling, and embodied systems.",
    stack: ["HRI", "STT/TTS", "LLMs"],
    image: assetPath("project-robotics.svg"),
  },
  {
    title: "Enterprise ERP Modernization",
    summary: "A reserved slot for architecture, migration, and business-critical platform modernization.",
    impact: "A natural place to highlight engineering leadership and measurable business outcomes.",
    stack: ["ERP", "Docker", "C#", "Python"],
    image: assetPath("project-erp.svg"),
  },
];

const interestCards = [
  "Large Language Models (LLMs)",
  "Retrieval-Augmented Generation (RAG)",
  "NLP and semantic retrieval",
  "AI evaluation and model benchmarking",
  "Human-Robot Interaction",
  "Speech systems (STT/TTS)",
  "Applied machine learning",
  "Distributed systems and scalable AI infrastructure",
  "AI for energy, electrical, and data-center systems",
];

const skillGroups = [
  {
    title: "Programming",
    items: ["Python", "R", "SQL", "JavaScript", "C#", "Visual Basic"],
  },
  {
    title: "AI / ML",
    items: [
      "PyTorch",
      "Hugging Face",
      "scikit-learn",
      "Deep learning",
      "Classification",
      "Clustering",
      "ROC/AUC",
      "LLMs",
      "RAG",
    ],
  },
  {
    title: "Data & Systems",
    items: ["PostgreSQL", "MySQL", "MongoDB", "REST APIs", "Microservices", "Data pipelines", "pgvector"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Nginx", "Supervisor"],
  },
  {
    title: "Engineering",
    items: ["OOP", "Design patterns", "Agile/Scrum", "SDLC", "Monitoring", "Incident response", "Root-cause analysis"],
  },
];

const education = [
  {
    school: "Michigan Technological University",
    degree: "Master of Science in Data Science",
    meta: "Expected April 2026 · GPA 4.0",
    details: "Graduate work centered on machine learning, model evaluation, applied AI systems, and research-oriented experimentation.",
  },
  {
    school: "Harare Institute of Technology",
    degree: "Bachelor of Technology in Computer Science",
    meta: "First Class",
    details: "Built the software engineering, systems, and analytical foundation that now spans enterprise engineering and AI research.",
  },
];

const impactItems = [
  { label: "Years of experience", value: "5+" },
  { label: "Software cost reduction", value: "60%" },
  { label: "Remote operating locations supported", value: "200+" },
  { label: "Users served by production systems", value: "1M+" },
  { label: "LLM model scales benchmarked", value: "3B-70B" },
];

const articleTopics = [
  "LLM evaluation, retrieval design, and experiment rigor",
  "AI infrastructure, observability, and real-world deployment",
  "Robotics interfaces and operational intelligence",
];

function useReveal() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

function Section({ id, eyebrow, title, intro, children, wide = false }) {
  const [ref, isVisible] = useReveal();

  return (
    <section id={id} ref={ref} className={`section-shell ${isVisible ? "revealed" : ""}`}>
      <div className={`section-inner ${wide ? "section-inner-wide" : ""}`}>
        <div className="section-header">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export function Navigation({ activeSection, mobileMenuOpen, onMenuToggle, onNavigate, sections }) {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand" href="#home" onClick={onNavigate}>
          <span className="brand-mark">CTN</span>
          <span className="brand-copy">
            <strong>Cletus Ngwerume</strong>
            <small>AI Researcher · Software Engineer</small>
          </span>
        </a>

        <nav className={`nav-links ${mobileMenuOpen ? "nav-open" : ""}`}>
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={activeSection === section.id ? "active" : ""}
              onClick={onNavigate}
            >
              {section.label}
            </a>
          ))}
          <a className="nav-button" href={socials.resume}>
            Resume
          </a>
        </nav>

        <button className="menu-button" type="button" onClick={onMenuToggle} aria-label="Toggle navigation menu">
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export function HeroSection() {
  const titles = ["Data Scientist", "AI Researcher", "Software Engineer", "LLM & RAG Engineer"];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTitleIndex((current) => (current + 1) % titles.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero-shell">
      <div className="hero-backdrop">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="hero-panel" />
      </div>

      <div className="hero-content">
        <div className="hero-copy">
          <span className="eyebrow">AI research · production engineering · systems thinking</span>
          <h1>Cletus Takudzwa Ngwerume</h1>
          <div className="hero-title-rail">
            <span className="hero-title-label">Currently positioned as</span>
            <strong>{titles[titleIndex]}</strong>
          </div>
          <p>
            Building intelligent systems at the intersection of AI research, scalable software, and real-world
            deployment.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#projects">
              View Projects
            </a>
            <a className="button-secondary" href={socials.resume}>
              Download Resume
            </a>
            <a className="button-tertiary" href="#contact">
              Contact Me
            </a>
          </div>
          <div className="social-row">
            <a href={socials.email}>Email</a>
            <a href={socials.linkedin}>LinkedIn</a>
            <a href={socials.github}>GitHub</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-card glass-card">
            <img
              src={assetPath("headshot.jpg")}
              alt="Portrait for Cletus Takudzwa Ngwerume"
              loading="eager"
            />
            <div className="portrait-caption">Graduate researcher and engineer focused on robust, deployable AI systems.</div>
          </div>
          <div className="hero-stats">
            {statItems.map((item) => (
              <div key={item.label} className="stat-card glass-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionDivider() {
  return (
    <div className="divider-shell" aria-hidden="true">
      <div className="divider-line" />
    </div>
  );
}

export function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Research-minded engineering with a systems view"
      intro="Cletus is a graduate student in Data Science at Michigan Technological University and a data scientist/software engineer with 5+ years of experience designing and operationalizing machine learning systems, distributed systems, and enterprise platforms."
    >
      <div className="about-grid">
        <div className="about-visual glass-card">
          <img src={assetPath("lab-visual.svg")} alt="AI research and systems visual" loading="lazy" />
        </div>

        <div className="about-copy">
          <p>
            His work spans LLM fine-tuning, retrieval-augmented generation, speech systems, robotics integration,
            analytics, and production-ready ML workflows. Across research and industry, he focuses on bridging sound
            experimentation with engineering discipline so models can perform reliably in practical environments.
          </p>
          <p>
            He brings hands-on experience with Python, PyTorch, scikit-learn, SQL, AWS, Docker, Kubernetes, enterprise
            architecture, AI system evaluation, and deployment-conscious software design. He also maintains a strong
            interest in electrical and power systems, especially where AI intersects with infrastructure monitoring,
            energy systems, and data-center environments.
          </p>

          <div className="fact-grid">
            {quickFacts.map((fact) => (
              <div key={fact} className="fact-card glass-card">
                {fact}
              </div>
            ))}
          </div>

          <div className="work-list glass-card">
            <h3>What I work on</h3>
            <ul>
              <li>LLM fine-tuning, benchmarking, and retrieval pipeline design</li>
              <li>Applied machine learning with reproducible evaluation workflows</li>
              <li>Distributed systems, enterprise architecture, and software modernization</li>
              <li>Human-robot interaction, speech interfaces, and operational AI systems</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Built across research labs, enterprise systems, and high-impact operational environments"
      intro="This timeline emphasizes measurable outcomes, technical depth, and the ability to move from experimentation to deployment."
      wide
    >
      <div className="timeline">
        {experienceItems.map((item, index) => (
          <article key={item.title} className={`timeline-card glass-card accent-${item.accent}`}>
            <span className="timeline-index">0{index + 1}</span>
            <div className="timeline-meta">
              <span>{item.org}</span>
              <span>{item.period}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work across AI systems, modeling, robotics, and enterprise platforms"
      intro="Featured cards are ready for live links, GitHub URLs, and screenshot replacement without changing layout structure."
      wide
    >
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card glass-card">
            <img src={project.image} alt={`${project.title} project visual`} loading="lazy" />
            <div className="project-copy">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="badge-row">
                {project.stack.map((tag) => (
                  <span key={tag} className="badge">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="project-impact">{project.impact}</p>
              <div className="project-links">
                <a href={socials.github}>GitHub</a>
                <a href="#contact">Request Details</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function InterestsSection() {
  return (
    <Section
      id="research"
      eyebrow="Research Interests"
      title="Breadth across language systems, interaction, infrastructure, and applied intelligence"
      intro="These areas reflect both current work and longer-term technical interests."
    >
      <div className="interest-grid">
        {interestCards.map((interest) => (
          <div key={interest} className="interest-card glass-card">
            <span>{interest}</span>
          </div>
        ))}
      </div>
      <div className="exploring-card glass-card">
        <h3>Currently exploring</h3>
        <p>
          Evaluation-first RAG design, retrieval quality diagnostics, scalable inference trade-offs, and how AI can
          support energy systems, infrastructure monitoring, and data-center operations.
        </p>
      </div>
    </Section>
  );
}

export function SkillsSection() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A technical toolkit shaped by research rigor and production responsibility"
      intro="Presented as categories so visitors can quickly scan for modeling, platform, and engineering depth."
      wide
    >
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="skill-card glass-card">
            <h3>{group.title}</h3>
            <div className="chip-grid">
              {group.items.map((item) => (
                <span key={item} className="skill-chip">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function EducationSection() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic foundation with strong performance and active research involvement"
      intro="A blend of formal training, research participation, and hands-on systems work."
    >
      <div className="education-grid">
        {education.map((item) => (
          <article key={item.school} className="education-card glass-card">
            <h3>{item.school}</h3>
            <strong>{item.degree}</strong>
            <span>{item.meta}</span>
            <p>{item.details}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function ImpactSection() {
  return (
    <Section
      id="impact"
      eyebrow="Impact"
      title="Highlights that connect research, engineering, and operational outcomes"
      intro="A quick signal for recruiters, collaborators, and labs looking for technical depth with delivery credibility."
      wide
    >
      <div className="impact-grid">
        {impactItems.map((item) => (
          <div key={item.label} className="impact-card glass-card">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function TestimonialsSection() {
  return (
    <Section
      id="testimonials"
      eyebrow="Testimonials"
      title="Recommendations and collaborator feedback"
      intro="This section is ready for advisor, manager, or collaborator notes whenever you want to add them."
    >
      <div className="testimonial-card glass-card">
        <p>
          Add a brief quote from a professor, manager, or collaborator here with emphasis on research quality,
          engineering ownership, or leadership in delivery.
        </p>
        <span>Recommendation space reserved</span>
      </div>
    </Section>
  );
}

export function BlogSection() {
  return (
    <Section
      id="articles"
      eyebrow="Articles"
      title="A home for technical writing, experiments, and research reflections"
      intro="Structured for future essays, lab notes, and technical writing."
    >
      <div className="article-grid">
        {articleTopics.map((item) => (
          <article key={item} className="article-card glass-card">
            <h3>{item}</h3>
            <p>Reserved for a future article, note, or lab-style write-up.</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Open to research collaboration, engineering opportunities, and technically ambitious work"
      intro="Use the links below for collaboration, research conversations, and engineering opportunities."
      wide
    >
      <div className="contact-grid">
        <div className="contact-card glass-card">
          <h3>Reach out</h3>
          <a href={socials.email}>cletuzz@gmail.com</a>
          <a href={socials.linkedin}>LinkedIn</a>
          <a href={socials.github}>GitHub</a>
          <a className="button-primary button-inline" href={socials.resume}>
            Download Resume
          </a>
          <p className="contact-note">
            Best for research collaboration, AI engineering opportunities, software roles, and conversations around
            intelligent systems in operational environments.
          </p>
        </div>

        <div className="contact-card glass-card">
          <h3>What to reach out about</h3>
          <p>
            I am especially interested in work involving large language models, retrieval systems, applied machine
            learning, distributed platforms, and research-to-production engineering.
          </p>
          <p>
            I also welcome conversations around human-robot interaction, AI infrastructure, energy and power analytics,
            and intelligent systems for monitoring and operational decision support.
          </p>
          <a className="button-secondary button-inline" href="#projects">
            Explore Featured Work
          </a>
        </div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div>
          <strong>Cletus Takudzwa Ngwerume</strong>
          <p>Data Scientist, AI Researcher, and Software Engineer</p>
        </div>
        <div className="footer-links">
          <a href={socials.email}>Email</a>
          <a href={socials.linkedin}>LinkedIn</a>
          <a href={socials.github}>GitHub</a>
        </div>
        <span>© 2026 Cletus Takudzwa Ngwerume. All rights reserved.</span>
      </div>
    </footer>
  );
}
