"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { SkillIcon } from "./components/SkillIcon";
import { SocialIcon } from "./components/SocialIcon";
import { ThemeToggle } from "./components/ThemeToggle";

const linkedInUrl = "https://www.linkedin.com/in/ahmed-ameer-/";
const githubUrl = "https://github.com/ahmedameer-100?tab=repositories";
const resumeUrl = "/ahmed-ameer-sqa-engineer-cv.pdf";

const manualExpertise = [
  "Functional Testing",
  "Smoke Testing",
  "Sanity Testing",
  "Regression Testing",
  "Exploratory Testing",
  "UI Testing",
  "UI/UX Testing",
  "Compatibility Testing",
  "Cross Browser Testing",
  "Cross Platform Testing",
  "Load Testing",
  "Performance Testing",
  "API Testing",
  "Database Testing",
  "User Acceptance Testing (UAT)",
  "Accessibility Testing",
  "Security Testing (Basic)",
  "Requirement Validation",
];

const automationExpertise = [
  "Selenium WebDriver",
  "Cypress Framework",
  "Playwright Automation",
  "Java & TestNG / JUnit",
  "Maven & Gradle Builds",
  "Page Object Model (POM)",
  "Data-Driven Frameworks",
  "CI/CD Integration (Jenkins/Actions)",
];

const skillCategories = [
  { title: "Manual Testing", tone: "blue", items: ["Jira", "Azure DevOps", "TestRail", "Postman", "Swagger", "SQL", "MySQL"] },
  { title: "Automation", tone: "green", items: ["Selenium", "Cypress", "Playwright", "Appium", "TestNG", "JUnit", "Maven", "Gradle"] },
  { title: "Programming Languages", tone: "blue", items: ["Java", "JavaScript", "Python"] },
  { title: "Version Control", tone: "green", items: ["Git", "GitHub"] },
  { title: "CI/CD", tone: "blue", items: ["Jenkins", "GitHub Actions"] },
  { title: "API Testing", tone: "green", items: ["Postman", "REST Assured"] },
  { title: "Performance", tone: "blue", items: ["JMeter"] },
];

const experienceEntries = [
  {
    title: "Software Quality Assurance Engineer",
    company: "AllZone Technologies",
    url: "https://allzonetech.com/",
    logo: "/logos/allzone.png",
    date: "Dec 2024 - Present",
    place: "Lahore, Pakistan",
    current: true,
    description:
      "Delivered end-to-end quality assurance across enterprise software products and client delivery platforms. Developed automated regression test suites using Selenium and Cypress, integrated automated runs into CI/CD pipelines, and collaborated within Agile/Scrum sprints to ensure bug-free production releases.",
    tags: ["Selenium", "Cypress", "Jira", "GitHub Actions", "API Testing", "Agile/Scrum"],
  },
  {
    title: "Associate Software Quality Assurance Engineer",
    company: "Ruby Zoom Solutions",
    url: "https://rubyzoomsolutions.com/",
    logo: "/logos/rubyzoom.png",
    date: "Oct 2022 - Nov 2024",
    place: "Rahim Yar Khan, Punjab, Pakistan",
    description:
      "Executed manual and API test cycles for client web platforms, designing structured test cases and reporting defects in Jira. Conducted regression validation, cross-browser compatibility testing, and Postman API contract checks in close collaboration with development teams.",
    tags: ["Manual Testing", "API Testing", "Postman", "Bug Reporting", "Regression Testing", "Test Case Design"],
  },
  {
    title: "Web Developer",
    company: "Code Hype Solution",
    url: "https://codehypesolution.com/",
    logo: "/logos/codehype.png",
    date: "Jun 2023 - Aug 2023",
    place: "Khanpur, Punjab, Pakistan",
    description:
      "Built responsive user interface components using HTML, CSS, JavaScript, and React. Gained deep hands-on understanding of modern frontend web architecture, DOM state, and client-server interactions that directly strengthen defect discovery and quality engineering.",
    tags: ["HTML/CSS", "JavaScript", "React", "Frontend Development", "Web Architecture"],
  },
];

type Project = {
  name: string;
  client: string;
  role: string;
  tech: string;
  description: string;
  image: string;
  url?: string;
  manualQa: string[];
  autoQa?: string[];
};

const projects: Project[] = [
  {
    name: "Gift Well Soon (GWS)",
    client: "Gift Well Soon",
    role: "SQA Engineer",
    tech: "Manual QA, Cross-Browser Testing, Postman, Jira",
    description:
      "Delivered end-to-end quality assurance for an e-commerce gift and wellness platform. Validated product catalog navigation, gift box customization, cart calculations, coupon redemption, and multi-gateway checkout flows across desktop and mobile browsers. Conducted functional, regression, and API contract testing to ensure a flawless customer purchasing experience.",
    image: "/projects/gift-well-soon.jpg",
    url: "https://www.giftwellsoon.com/",
    manualQa: ["Functional Testing", "Smoke Testing", "Regression Testing", "UI/UX Validation", "API Testing", "Checkout Testing"],
    autoQa: ["Cypress", "Postman API Scripts"],
  },
  {
    name: "Cargo ID Secure",
    client: "Cargo ID Secure",
    role: "SQA Engineer",
    tech: "Selenium, Manual QA, Postman, Jira",
    description:
      "Validated secure cargo identification workflows across authentication, shipment tracking, and role-based access modules for an enterprise logistics platform. Performed functional testing of critical user journeys, API validation for backend integrations, and regression coverage for release candidates. Verified permission boundaries for admin and operator roles.",
    image: "/projects/cargo-id-secure.jpg",
    url: "https://app.cargoidsecure.com/",
    manualQa: ["Functional Testing", "Role-Based Access", "API Testing", "Database Validation", "Regression Testing"],
    autoQa: ["Selenium WebDriver", "TestNG", "Maven", "API Automation"],
  },
  {
    name: "AllZone Technologies",
    client: "AllZone Technologies",
    role: "SQA Engineer",
    tech: "Selenium, Cypress, Jira, GitHub Actions",
    description:
      "Contributed to quality initiatives for company web properties and client delivery pipelines. Built and maintained automated regression suites, integrated tests into CI/CD workflows, and supported sprint-level validation for feature releases. Coordinated with developers on defect triage, test coverage gaps, and release readiness criteria.",
    image: "/projects/allzone-technologies.jpg",
    url: "https://allzonetech.com/",
    manualQa: ["Functional Testing", "Regression Testing", "Cross-Browser Testing", "UAT Support"],
    autoQa: ["Selenium", "Cypress", "GitHub Actions CI/CD", "Page Object Model"],
  },
  {
    name: "InstaCare B2C",
    client: "InstaCare",
    role: "SQA Engineer",
    tech: "Manual QA, Cypress, Postman",
    description:
      "Ensured quality for a consumer healthcare platform connecting patients with providers, doctor appointments, and digital health services. Tested registration, booking, payment, and notification flows across web and mobile-responsive views. Validated API contracts for third-party integrations and executed regression suites before each release.",
    image: "/projects/instacare-b2c.jpg",
    url: "https://instacare.pk/",
    manualQa: ["Functional Testing", "Smoke Testing", "Regression Testing", "API Testing", "Usability Testing"],
    autoQa: ["Cypress", "Postman API Validation"],
  },
  {
    name: "InstaCare B2B",
    client: "InstaCare",
    role: "SQA Engineer",
    tech: "Selenium, Manual QA, TestNG",
    description:
      "Delivered quality assurance for the B2B portal enabling clinics, hospitals, and partners to manage operations, staff, and patient records. Validated admin dashboards, bulk operations, reporting modules, and integration points with the consumer platform. Executed role-based access testing and regression automation for high-traffic modules.",
    image: "/projects/instacare-b2b.jpg",
    url: "https://app.instacare.pk/",
    manualQa: ["Enterprise Workflow Testing", "API Validation", "Role-Based Access", "Regression Testing"],
    autoQa: ["Selenium", "TestNG", "Page Object Model", "Data-Driven Testing"],
  },
  {
    name: "Big As Balloons",
    client: "Big As Balloons",
    role: "SQA Engineer",
    tech: "Manual QA, Cross-Browser Testing, Jira",
    description:
      "Delivered comprehensive quality assurance for a customer-facing e-commerce storefront specializing in balloon and event products. Validated product discovery, cart workflows, and checkout journeys across desktop and mobile browsers. Created detailed test cases, executed regression cycles before releases, and reported defects with clear reproduction steps.",
    image: "/projects/big-as-balloons.jpg",
    url: "https://bigasballoons.co.nz/",
    manualQa: ["Functional Testing", "Checkout Validation", "Cross-Browser Testing", "Regression Testing"],
  },
  {
    name: "The Sage Vintage",
    client: "The Sage Vintage",
    role: "SQA Engineer",
    tech: "Manual QA, Mobile Testing, Responsive QA",
    description:
      "Provided end-to-end quality validation for a curated vintage retail platform with rich product browsing and responsive layouts. Tested catalog navigation, filtering, product detail pages, and mobile-first interactions to ensure consistent behavior across devices. Conducted usability reviews, cross-browser regression testing, and release sign-off cycles.",
    image: "/projects/the-sage-vintage.jpg",
    url: "https://thesagevintage.com/",
    manualQa: ["Functional Testing", "Responsive UI Testing", "Usability Testing", "Regression Testing"],
  },
  {
    name: "Restaurant Chairs",
    client: "Restaurant Chairs",
    role: "SQA Engineer",
    tech: "Manual QA, Cross-Platform Testing, TestRail",
    description:
      "Supported quality assurance for a commercial seating catalog and B2B purchase journey serving hospitality buyers. Validated product listings, specification details, quote requests, and checkout flows against business requirements. Authored structured test documentation, tracked defects through resolution, and performed sanity checks before production deployments.",
    image: "/projects/restaurant-chairs.jpg",
    url: "https://restaurantchairs.com/",
    manualQa: ["Functional Testing", "UI/UX Validation", "Sanity Testing", "B2B Workflow Testing"],
  },
  {
    name: "CRCLS",
    client: "AllZone Technologies",
    role: "SQA Engineer",
    tech: "Manual QA, Postman, Jira",
    description:
      "Provided quality assurance for an application focused on core deployment workflows and operational visibility. Authored test documentation aligned with STLC standards, validated REST API endpoints, and executed release testing before production pushes. Verified system health monitoring, audit logs, and user permission models to support reliable operations.",
    image: "/projects/crcls.jpg",
    url: "https://crcls-main-geebf9e6f0hfcngf.centralus-01.azurewebsites.net/Home/Index",
    manualQa: ["API Testing", "STLC Documentation", "System Health Monitoring", "Regression Testing"],
  },
  {
    name: "HRMS",
    client: "AllZone Technologies",
    role: "SQA Engineer",
    tech: "Selenium, Cypress, Postman, JMeter",
    description:
      "Validated internal human-resource management workflows including employee onboarding, attendance, leave management, and payroll modules. Developed automation coverage for recurring regression scenarios and performed API testing for HR service integrations. Conducted performance validation on high-traffic dashboard endpoints.",
    image: "/projects/hrms.jpg",
    url: "https://azt-hrms-dev.azurewebsites.net/",
    manualQa: ["HR Workflow Validation", "API Testing", "Database Validation", "UAT Support"],
    autoQa: ["Selenium", "Cypress", "JMeter Performance Testing"],
  },
];

const certifications = [
  { title: "Scrum Fundamentals Certified", issuer: "ScrumStudy", url: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1080784" },
  { title: "Test Automation with Cypress", issuer: "10Pearls University", url: "https://10pearlsuniversity.org/view-certificate/?cid=10PUC-f5f5868050919977b69707fa3971a52b7d20ae963bc8aa62418654496" },
  { title: "Certified QA Professional", issuer: "Alison", url: "https://alison.com/certification/check/f9c5b3ffee" },
  { title: "10Pearls University Certificate", issuer: "10Pearls University", url: "https://10pearlsuniversity.org/view-certificate?cid=10PUC-239362ad17bcf8b9658b0afdf1f58b2d6850c27df9f309a2418655426" },
  {
    title: "LinkedIn Learning Certificate — course title unavailable",
    issuer: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/certificates/6b6e6399b8fd899e4c47956569610255faeb449bc4ed8b750458f53032b80004?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3B7XQTSyqvTF6Sp8A%2BE9eCLg%3D%3D",
    linkedInLearning: true,
  },
  {
    title: "LinkedIn Learning Certificate — course title unavailable",
    issuer: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/certificates/7982bab9e0942f0c585ab215a3a90e4ae69fc5b3f80b61bb85a32cee4ec2ae61?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BSJuaXjKVRc%2BwNDFjvwN%2BJQ%3D%3D",
    linkedInLearning: true,
  },
];

function LinkedInLearningIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M3 3h18v18H3V3Zm3.8 6.1H5.1V18h1.7V9.1Zm-0.85-2.7a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM18.9 18v-4.84c0-2.38-1.27-3.49-2.97-3.49-1.37 0-1.98.75-2.32 1.28V9.1h-1.7V18h1.7v-4.4c0-1.16.22-2.28 1.66-2.28 1.42 0 1.44 1.33 1.44 2.36V18h1.7Z" />
    </svg>
  );
}

function SectionTitle({ icon, title }: { icon: string; title: string }) {
  return (
    <h2 className="section-title">
      <span className="icon" aria-hidden="true">
        {icon}
      </span>
      {title}
    </h2>
  );
}

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setContactOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  // IntersectionObserver for subtle scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("loading");
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 400));
      form.reset();
      setStatus("success");
    } catch (submissionError) {
      setStatus("error");
      setError(submissionError instanceof Error ? submissionError.message : "Unable to send your message.");
    }
  }

  return (
    <div className="site-shell">
      {/* Top Header with Theme Toggle */}
      <header className="top-header">
        <ThemeToggle />
      </header>

      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <a className="brand" href="#about">
          <div className="profile-avatar-wrap">
            <Image
              className="profile-photo"
              src="/ahmed-ameer.jpg"
              alt="Ahmed Ameer — SQA Engineer"
              width={52}
              height={52}
              priority
            />
          </div>
          <span>
            Ahmed Ameer
            <small>SQA Engineer</small>
          </span>
        </a>

        <nav aria-label="Primary navigation">
          {[
            ["about", "About"],
            ["skills", "Skills"],
            ["experience", "Experience"],
            ["projects", "Projects"],
            ["certifications", "Certifications"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <a href={`#${id}`} key={id}>
              <span>{label}</span>
              <b aria-hidden="true">↗</b>
            </a>
          ))}
        </nav>
  
        <div className="sidebar-bottom">
          <a className="button primary sidebar-resume-btn" href={resumeUrl} download="Ahmed-Ameer-SQA-Engineer-CV.pdf">
            Download Resume <span aria-hidden="true">↓</span>
          </a>
          <div className="sidebar-footer">
            <p className="eyebrow">AVAILABLE FOR</p>
            <p>SQA, Automation &amp; Quality Engineering Roles</p>
            <div className="socials">
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="social-btn" data-tooltip="View LinkedIn Profile">
                <SocialIcon type="linkedin" />
                <span>LinkedIn</span>
              </a>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="social-btn" data-tooltip="View GitHub Profile">
                <SocialIcon type="github" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero section animate-on-scroll" id="about">
          <div>
            <p className="eyebrow accent">// QUALITY ENGINEERING</p>
            <h1>
              Bulletproof <em>Code Quality.</em>
              <br />
              Automated Testing at Scale.
            </h1>

            <p className="">
              Software Quality Assurance Engineer with 3+ years of experience delivering high-reliability web and enterprise applications. Specialized in comprehensive manual testing including functional, regression, smoke, sanity, UI/UX, cross-browser, cross-platform, load, performance, API, database, accessibility, and security testing. Expert in automation frameworks using Selenium, Cypress, Playwright, Java, TestNG, Maven, and CI/CD integration. Proven track record in Agile/Scrum collaboration, defect lifecycle management, and requirement validation. Passionate about software quality and continuous learning, with a strong ability to improve release confidence through systematic quality engineering practices.
            </p>

            <div className="hero-expertise">
              <div className="hero-expertise-card panel">
                <div className="hero-expertise-header">
                  <div className="qa-visual-icon">
                    <SkillIcon name="Manual Testing" />
                  </div>
                  <h3 className="group-title blue">Manual Testing</h3>
                </div>
                <p className="hero-expertise-desc">
                  Focus on ensuring software quality through Functional, Regression, Smoke, Sanity, API, Database, UI/UX, Cross-Browser, Compatibility, Exploratory, and User Acceptance Testing to identify defects early and validate business requirements.
                </p>
                <ul className="expertise-list">
                  {manualExpertise.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="hero-expertise-card panel">
                <div className="hero-expertise-header">
                  <div className="qa-visual-icon green">
                    <SkillIcon name="Automation Testing" />
                  </div>
                  <h3 className="group-title green">Automation Testing</h3>
                </div>
                <p className="hero-expertise-desc">
                  Focus on building scalable and maintainable automation frameworks using Selenium, Cypress, Playwright, Java, TestNG, Maven, API Automation, CI/CD, and Page Object Model for faster regression execution and release confidence.
                </p>
                <ul className="expertise-list">
                  {automationExpertise.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="actions">
              <button className="button primary" type="button" onClick={() => setContactOpen(true)}>
                Contact Me <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          <div className="terminal" aria-label="Test suite runner simulation">
            <div className="dots">
              <i />
              <i />
              <i />
            </div>
            <p className="green">$ npm test --automation-suite</p>
            <p>Running 512 test cases...</p>
            <p>
              Coverage: <strong>92.4%</strong>
            </p>
            <p>
              Status: <strong>All tests passed</strong>
            </p>
          </div>
        </section>

        {/* Metrics Banner */}
        <section className="metrics animate-on-scroll" aria-label="Key performance metrics">
          {[
            ["99.9%", "Bug-Free Deployments"],
            ["80%", "Automation Coverage"],
            ["3+", "Years Experience"],
            ["500+", "Automated Tests"],
          ].map(([value, label], index) => (
            <div className="panel metric" key={label}>
              <strong className={index % 2 ? "green" : ""}>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        {/* Skills Section */}
        <section className="section animate-on-scroll" id="skills">
          <SectionTitle icon="⌘" title="Core Expertise" />
          <div className="skill-grid">
            {skillCategories.map((category) => (
              <div className="skill-category panel" key={category.title}>
                <h3 className={`group-title ${category.tone}`}>{category.title}</h3>
                <div className="skill-icon-grid">
                  {category.items.map((item) => (
                    <div className="skill-icon-card" key={item} data-tooltip={item}>
                      <span className={`skill-icon-wrap ${category.tone}`}>
                        <SkillIcon name={item} />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="section animate-on-scroll" id="experience">
          <SectionTitle icon="◷" title="Professional Journey" />
          <div className="timeline">
            {experienceEntries.map((entry) => (
              <article className="experience" key={entry.company}>
                <span className={entry.current ? "node current" : "node"} />
                <div className="panel">
                  <header>
                    <div className="experience-heading">
                      <div className="company-logo-box" data-tooltip={entry.company}>
                        <Image className="company-logo-img" src={entry.logo} alt={`${entry.company} logo`} width={32} height={32} />
                      </div>
                      <div>
                        <h3>{entry.title}</h3>
                        <a className="company-link" href={entry.url} target="_blank" rel="noopener noreferrer">
                          {entry.company} <span aria-hidden="true">↗</span>
                        </a>
                      </div>
                    </div>
                    <p>
                      {entry.date}
                      <br />
                      {entry.place}
                    </p>
                  </header>
                  <p className="exp-description">{entry.description}</p>
                  <div className="tag-list">
                    {entry.tags.map((t) => (
                      <span key={t} data-tooltip={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="section animate-on-scroll" id="projects">
          <SectionTitle icon="▣" title="Featured Projects" />
          <div className="projects">
            {projects.map((project) => (
              <article className="project panel" key={project.name}>
                <div className="project-visual">
                  <Image
                    src={project.image}
                    alt={`${project.name} live application screenshot`}
                    width={960}
                    height={540}
                    loading="lazy"
                    sizes="(max-width: 850px) 100vw, 50vw"
                  />
                </div>
                <div className="project-body">
                  <h3>{project.name}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-qa-details">
                    <div className="qa-group">
                      <p className="qa-title">Manual QA Highlights</p>
                      <div className="qa-tags">
                        {project.manualQa.map((tag) => (
                          <span className="qa-tag" key={tag} data-tooltip={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {project.autoQa && (
                      <div className="qa-group">
                        <p className="qa-title">Automation QA Highlights</p>
                        <div className="qa-tags">
                          {project.autoQa.map((tag) => (
                            <span className="qa-tag" key={tag} data-tooltip={tag}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="project-footer-link">
                    {project.url ? (
                      <a className="project-btn" href={project.url} target="_blank" rel="noopener noreferrer">
                        Visit Live Site <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <span className="project-btn coming-soon">Coming Soon</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="section animate-on-scroll" id="certifications">
          <SectionTitle icon="✓" title="Certifications" />
          <div className="certs">
            {certifications.map((certification) => (
              <article className="cert panel" key={certification.url}>
                <div className={`certificate-mark${certification.linkedInLearning ? " linkedin-learning-mark" : ""}`} aria-hidden="true">
                  {certification.linkedInLearning ? <LinkedInLearningIcon /> : "✓"}
                </div>
                <h3>{certification.title}</h3>
                <p>{certification.issuer}</p>
                <a className="certificate-link" href={certification.url} target="_blank" rel="noopener noreferrer">
                  View Certificate <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact section panel animate-on-scroll" id="contact">
          <p className="eyebrow accent">// START A CONVERSATION</p>
          <h2>Let&apos;s Connect</h2>
          <p className="hero-intro">
            Looking for a dedicated Software Quality Assurance Engineer to ensure the highest quality of your applications? Whether it&apos;s manual testing, test automation, API testing, or performance validation, feel free to send me a message.
          </p>

          <form onSubmit={submit}>
            <div className="form-row">
              <label>
                Full Name
                <input name="name" type="text" placeholder="Enter your full name" required />
              </label>
              <label>
                Email Address
                <input name="email" type="email" placeholder="Enter your email address" required />
              </label>
            </div>

            <div className="form-row">
              <label>
                Subject
                <input name="subject" type="text" placeholder="How can I help you?" required />
              </label>
            </div>

            <label>
              Message
              <textarea name="message" rows={5} placeholder="Tell me about your project..." required />
            </label>

            <div className="form-submit-row">
              <button className="button primary" type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Sending message..." : "Send Message"}
              </button>
            </div>

            <p className={`form-status ${status}`} aria-live="polite">
              {status === "success"
                ? "Thank you — your message has been received."
                : status === "error"
                ? error
                : ""}
            </p>
          </form>

          {/* Prominent Download Resume Banner */}
          <div className="resume-banner">
            <div className="resume-banner-text">
              <h3>Download Complete Resume</h3>
              <p>Review my full career progression, automation accomplishments, and technical expertise.</p>
            </div>
            <a className="button primary download-resume-btn" href={resumeUrl} download="Ahmed-Ameer-SQA-Engineer-CV.pdf">
              Download Resume <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <div>
            <strong>Ahmed Ameer</strong>
            <p>© 2026 Ahmed Ameer. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <a href="mailto:ahmedameer7337@gmail.com">Email</a>
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="#about">Portfolio Top</a>
          </div>
        </footer>
      </main>

      {/* Contact Modal */}
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} linkedInUrl={linkedInUrl} />}
    </div>
  );
}

function ContactModal({ onClose, linkedInUrl }: { onClose: () => void; linkedInUrl: string }) {
  const [copied, setCopied] = useState("");

  const copy = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
    } catch {
      setCopied("Clipboard unavailable");
    }
    setTimeout(() => setCopied(""), 1800);
  };

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close contact details">
          ×
        </button>
        <p className="eyebrow accent">// CONTACT DETAILS</p>
        <h2 id="contact-modal-title">Let&apos;s Talk</h2>
        <p className="hero-intro" style={{ margin: "0 0 20px" }}>
          Reach out directly for SQA, automation, and quality engineering opportunities.
        </p>

        <div className="contact-detail">
          <div className="contact-detail-info">
            <span>Email</span>
            <strong>ahmedameer7337@gmail.com</strong>
          </div>
          <button type="button" onClick={() => copy("ahmedameer7337@gmail.com", "Email")}>
            Copy
          </button>
        </div>

        <div className="contact-detail">
          <div className="contact-detail-info">
            <span>Phone</span>
            <strong>+92 316 6533606</strong>
          </div>
          <button type="button" onClick={() => copy("+923166533606", "Phone number")}>
            Copy
          </button>
        </div>

        <div className="modal-linkedin-box">
          <p>LinkedIn Profile</p>
          <a className="modal-linkedin-url" href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            {linkedInUrl}
          </a>
        </div>

        <p className="form-status success" aria-live="polite" style={{ minHeight: "16px", marginTop: "12px" }}>
          {copied === "Clipboard unavailable"
            ? "Clipboard access is unavailable in this browser."
            : copied
            ? `${copied} copied to clipboard.`
            : ""}
        </p>
      </section>
    </div>
  );
}
