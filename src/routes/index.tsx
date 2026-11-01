import { createFileRoute } from "@tanstack/react-router";
import { CheckSquare, ChevronDown, Trophy } from "lucide-react";
import mentorAsset from "../assets/mentor.png.asset.json";
import reviewsAsset from "../assets/client-reviews.png.asset.json";
import videosAsset from "../assets/video-testimonials.png.asset.json";

const REGISTRATION_URL = "#registration";

const topicsLeft = [
  "Introduction of Indian Business Portal by IIEIM PUNE",
  "Identifying best market for your products & Establishing your own brand",
  "Segmentation and Positioning in International Market",
  "International Commercial Terms (INCOTERMS 2020)",
  "Terms of Payments through L/C Export Finance",
  "Introduction of Currency Risk Management – Profit-Oriented Approach",
  "MSME Registration and its benefits",
  "Role of ECGC in International Trade",
  "Role of E-Commerce",
];

const topicsRight = [
  "Role of Digital Marketing in International Marketing",
  "Design Innovation in Packaging in International Trade",
  "Role of Bar Coding in International Trade",
  "Free Trade Agreements Trade with overseas countries",
  "Supply Chain Management in International Trade",
  "How to Get Importer Export Code Number",
  "Get Certificate of Origin online",
  "Role of Logistics in International Trade",
  "Export Documentation & Procedures",
  "How to Process Export Orders",
];

const faqs = [
  {
    question: "01. What are the initial steps to start exporting?",
    answer:
      "Start by selecting a suitable product, understanding your target market, obtaining the required registrations, and preparing a clear export plan.",
  },
  {
    question: "02. How do I find potential markets for my products?",
    answer:
      "Use trade data, industry research, buyer directories, exhibitions, and local demand analysis to identify promising markets.",
  },
  {
    question: "03. What are the legal requirements for exporting goods?",
    answer:
      "Requirements vary by product and destination, but commonly include an Importer Exporter Code, compliant documentation, and product-specific approvals.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Live Export Import Business Webinar | IIEIM Pune" },
      {
        name: "description",
        content:
          "Join IIEIM Pune's live export-import business webinar with experienced industry mentor Rammdas Sir.",
      },
      { property: "og:title", content: "Live Export Import Business Webinar | IIEIM Pune" },
      {
        property: "og:description",
        content: "Learn export-import business fundamentals in a focused live webinar from IIEIM Pune.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WebinarLandingPage,
});

function CTAButton({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href={REGISTRATION_URL}
      className={compact ? "cta-button cta-button-compact" : "cta-button"}
      aria-label="Join the webinar for 99 rupees"
    >
      {compact ? "Join Now!" : "Join webinar at ₹99/-"}
      {!compact && <CheckSquare aria-hidden="true" size={15} strokeWidth={2.5} />}
    </a>
  );
}

function UrgencyLine() {
  return <p className="urgency">Limited Seats are Available. Join Now and Reserve Your Seat. Hurry up!</p>;
}

function HeroSection() {
  return (
    <section className="hero-section section-shell" aria-labelledby="webinar-title">
      <p className="hero-kicker">Boost Your Growth With Mastering Export &amp; Import Business</p>
      <h1 id="webinar-title" className="hero-title">
        Join Live Webinar By Industry Experts in Export And
        <br className="hidden sm:block" /> Import Business Management - IIEIM, Pune
      </h1>
      <p className="hero-promise">Start Your Export Import Business</p>
      <p className="hero-time">This Friday, 7:30 PM</p>
      <p className="hero-date">11th July, 2025</p>
      <div id="registration" className="cta-wrap">
        <CTAButton />
      </div>
      <UrgencyLine />
    </section>
  );
}

function MentorSection() {
  return (
    <section className="section-shell mentor-section" aria-labelledby="mentor-heading">
      <h2 id="mentor-heading" className="section-title">Meet Your Mentor</h2>
      <div className="mentor-photo-frame">
        <img src={mentorAsset.url} alt="Rammdas Sir, export-import business mentor" />
      </div>
      <h3 className="mentor-name">Rammdas Sir (51 Years)</h3>
      <p className="mentor-experience">(25 Years of Experience in International Business)</p>
      <p className="mentor-bio">
        Rammdas Sir, with over 25 years of rich experience in the export-import business, has built a stellar reputation in the industry. As the chairman of Sree Balaji Exports, he has successfully expanded his business operations globally. His journey is marked by strong relationships with exporters and importers worldwide, reflecting his deep industry knowledge and global networking.
      </p>
      <div className="mentor-details">
        <h3>Want to take your business to new heights?</h3>
        <p>Join a special webinar hosted by the International Institute of Export-Import Management, Kharadi, Pune, with Mr. Rammdas Sir!</p>
        <p>Conducted export training programs across India and has guided thousands of budding entrepreneurs on the path to success.</p>
        <div className="mentor-highlight">
          <Trophy aria-hidden="true" />
          <div>
            <h4>Expert Business Consultation</h4>
            <p>He has advised hundreds of businesses on export strategies and developed over 8,000 sales channels.</p>
          </div>
        </div>
        <div className="mentor-highlight">
          <span className="highlight-star" aria-hidden="true">★</span>
          <div>
            <h4>Turn Opportunity into Success!</h4>
            <p>Attend this 3-hour live webinar with Mr. Ramdas and learn how to succeed in the export business. Sign up now and take your first step toward scaling your business globally!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WebinarCTA() {
  return (
    <section className="section-shell webinar-cta" aria-label="Webinar registration">
      <h2>On This Friday at 7:30 PM–9:30 PM</h2>
      <p>11th July, 2025</p>
      <CTAButton />
      <UrgencyLine />
    </section>
  );
}

function TopicList({ topics }: { topics: string[] }) {
  return <ul>{topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>;
}

function TopicsSection() {
  return (
    <section className="section-shell topics-section" aria-labelledby="topics-heading">
      <p className="topics-eyebrow">Join Our Expert Trainers On</p>
      <h2 id="topics-heading" className="gradient-title">2 Hours Live Webinar</h2>
      <div className="topics-banner">The following major topics will be covered in the programme</div>
      <div className="topics-grid">
        <div className="topic-box"><TopicList topics={topicsLeft} /></div>
        <div className="topic-box"><TopicList topics={topicsRight} /></div>
      </div>
      <p className="topics-date">Friday, 11th July, 2025</p>
      <CTAButton />
      <UrgencyLine />
    </section>
  );
}

function ClientFeedback() {
  return (
    <section className="section-shell feedback-section" aria-labelledby="feedback-heading">
      <h2 id="feedback-heading" className="gradient-title">Feedback from Our Clients</h2>
      <p className="feedback-intro">Don’t just take our word for it—hear from our satisfied clients who have transformed their careers with the International Institute of Export and Import Business Training at IIEIM, Kharadi, Pune!</p>
      <div className="asset-viewport reviews-viewport">
        <img src={reviewsAsset.url} alt="Three client reviews for IIEIM training" loading="lazy" />
      </div>
      <div className="carousel-dots" aria-hidden="true"><span className="active" /><span /></div>
    </section>
  );
}

function VideoTestimonials() {
  return (
    <section className="section-shell video-section" aria-labelledby="video-heading">
      <h2 id="video-heading" className="section-title">Video Testimonials</h2>
      <div className="asset-viewport video-viewport">
        <img src={videosAsset.url} alt="Two client video testimonial previews with controls" loading="lazy" />
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="section-shell faq-section" aria-labelledby="faq-heading">
      <p className="faq-eyebrow">Do you have questions?</p>
      <h2 id="faq-heading" className="section-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map(({ question, answer }) => (
          <details key={question}>
            <summary><span>{question}</span><ChevronDown aria-hidden="true" /></summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function StickyOfferBar() {
  return (
    <aside className="sticky-offer" aria-label="Special webinar offer">
      <p><span>Special Offer...</span> Only For First 50 Seats!</p>
      <CTAButton compact />
    </aside>
  );
}

function WebinarLandingPage() {
  return (
    <main className="webinar-page">
      <HeroSection />
      <MentorSection />
      <WebinarCTA />
      <TopicsSection />
      <ClientFeedback />
      <VideoTestimonials />
      <FAQSection />
      <StickyOfferBar />
    </main>
  );
}