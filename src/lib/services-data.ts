import {
  Brain,
  Bot,
  Zap,
  Cloud,
  Code2,
  Smartphone,
  BarChart3,
  Globe,
} from "lucide-react";

export type ServiceVisual =
  | "ai"
  | "software"
  | "web"
  | "mobile"
  | "chatbot"
  | "automation"
  | "cloud"
  | "analytics";

export type Service = {
  slug: string;
  icon: typeof Brain;
  name: string;
  summary: string;
  capabilities: string[];
  technologies: string[];
  industries: string[];
  featured?: boolean;
  visual: ServiceVisual;
  // Detail-page content
  tagline: string;
  overview: string;
  benefits: { title: string; description: string }[];
  process: { title: string; description: string }[];
  useCases: string[];
};

export const services: Service[] = [
  {
    slug: "ai-development",
    icon: Brain,
    featured: true,
    visual: "ai",
    name: "AI Development",
    summary:
      "Flagship offering. Custom AI agents, generative AI apps, ML models and vision systems engineered for production.",
    capabilities: [
      "AI Agents",
      "Generative AI",
      "Machine Learning",
      "NLP",
      "Recommendation Systems",
      "Predictive Analytics",
      "Computer Vision",
      "AI Integrations",
    ],
    technologies: ["OpenAI", "Gemini", "Claude", "LangChain", "Python", "TensorFlow"],
    industries: ["Healthcare", "Finance", "Retail", "Manufacturing"],
    tagline: "Production-grade AI, engineered end-to-end.",
    overview:
      "We design, build and deploy AI systems that solve real business problems — from autonomous agents and generative AI applications to custom ML models, NLP pipelines and computer vision. Every solution is architected for security, scalability and measurable ROI.",
    benefits: [
      { title: "Faster time-to-market", description: "Reusable AI accelerators shorten discovery-to-deploy cycles." },
      { title: "Enterprise-grade security", description: "Private deployments, data isolation and audit-ready pipelines." },
      { title: "Model-agnostic architecture", description: "Swap OpenAI, Gemini, Claude or open models without rewrites." },
      { title: "Measurable ROI", description: "Every model ships with KPIs, dashboards and cost telemetry." },
    ],
    process: [
      { title: "Discovery", description: "AI readiness assessment, data audit and opportunity mapping." },
      { title: "Prototype", description: "Rapid POC with real data to prove value in weeks, not months." },
      { title: "Build", description: "Production-grade engineering, evals, guardrails and MLOps." },
      { title: "Scale", description: "Monitoring, retraining and continuous improvement." },
    ],
    useCases: [
      "Autonomous support & sales agents",
      "Generative document & content workflows",
      "Predictive analytics & forecasting",
      "Vision-based quality inspection",
    ],
  },
  {
    slug: "custom-software",
    icon: Code2,
    visual: "software",
    name: "Custom Software Development",
    summary: "Bespoke enterprise platforms, CRMs, ERPs and SaaS built around your exact workflows.",
    capabilities: [
      "Enterprise Platforms",
      "CRM Systems",
      "ERP Solutions",
      "SaaS Applications",
      "Internal Tools",
      "Workflow Platforms",
      "Customer Portals",
    ],
    technologies: ["React", "Angular", "Node.js", ".NET", "Java", "PostgreSQL"],
    industries: ["Enterprise", "SaaS", "Logistics", "Healthcare"],
    tagline: "Bespoke platforms that fit your business perfectly.",
    overview:
      "Off-the-shelf software forces you to bend to its rules. We build custom platforms — CRMs, ERPs, SaaS products, internal tools and customer portals — that model your workflows exactly, scale with your growth and integrate cleanly with the rest of your stack.",
    benefits: [
      { title: "Exact-fit workflows", description: "No compromises to your operating model." },
      { title: "Owned IP", description: "You own the code, the data and the roadmap." },
      { title: "Deep integrations", description: "Connect legacy systems, ERPs, CRMs and third-party APIs." },
      { title: "Scale on your terms", description: "Architected for 10x growth without a rewrite." },
    ],
    process: [
      { title: "Product discovery", description: "User research, workflow mapping and success metrics." },
      { title: "Architecture", description: "Domain-driven design, data model and integration plan." },
      { title: "Iterative build", description: "Two-week sprints with working software each cycle." },
      { title: "Launch & support", description: "Handover, training and ongoing evolution." },
    ],
    useCases: [
      "Enterprise CRM & sales platforms",
      "Custom ERP & operations systems",
      "Multi-tenant SaaS products",
      "Internal tooling & admin portals",
    ],
  },
  {
    slug: "web-applications",
    icon: Globe,
    visual: "web",
    name: "Web Application Development",
    summary: "Progressive web apps, portals and dashboards with lightning performance and modern UX.",
    capabilities: [
      "Progressive Web Apps",
      "Customer Portals",
      "SaaS Products",
      "Enterprise Dashboards",
      "Booking Systems",
      "E-Commerce Platforms",
    ],
    technologies: ["React", "Next.js", "Vue.js", "Angular", "Node.js"],
    industries: ["SaaS", "Retail", "Media", "Education"],
    tagline: "Fast, modern web apps users actually love.",
    overview:
      "We build progressive web apps, customer portals, SaaS products and enterprise dashboards with modern frameworks, native-grade UX and best-in-class performance. Every product ships with accessibility, SEO and observability built in.",
    benefits: [
      { title: "Lightning performance", description: "Sub-second loads, edge rendering, aggressive caching." },
      { title: "Modern UX", description: "Design systems, motion and interactions that feel native." },
      { title: "SEO & accessibility", description: "WCAG-compliant, semantic HTML, structured data." },
      { title: "Cloud-native", description: "Deployed on edge networks with autoscaling by default." },
    ],
    process: [
      { title: "UX & prototypes", description: "Wireframes, design system and interactive prototypes." },
      { title: "Engineering", description: "Component libraries, APIs and state architecture." },
      { title: "Performance", description: "Core Web Vitals, caching and edge delivery." },
      { title: "Launch", description: "Analytics, monitoring and continuous iteration." },
    ],
    useCases: [
      "SaaS product frontends",
      "Enterprise admin dashboards",
      "Customer self-service portals",
      "High-conversion marketing sites",
    ],
  },
  {
    slug: "mobile-apps",
    icon: Smartphone,
    visual: "mobile",
    name: "Mobile App Development",
    summary: "Native and cross-platform mobile apps built for iOS and Android with native-grade UX.",
    capabilities: [
      "Android Apps",
      "iOS Apps",
      "Cross Platform",
      "Business Apps",
      "Customer Apps",
      "Enterprise Mobile",
    ],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin"],
    industries: ["Consumer", "Fintech", "Health", "Enterprise"],
    tagline: "Native-grade mobile experiences across iOS & Android.",
    overview:
      "We build mobile apps that feel native on every device — consumer apps, enterprise mobility, fintech and healthcare — using Flutter, React Native, Swift and Kotlin. From offline-first architecture to biometric auth and push, we ship apps that scale.",
    benefits: [
      { title: "One codebase, two platforms", description: "Cross-platform where it makes sense, native where it matters." },
      { title: "Offline-first", description: "Robust sync, caching and conflict resolution." },
      { title: "Store-ready", description: "App Store and Play Store submission handled end-to-end." },
      { title: "Enterprise MDM", description: "MDM/EMM, SSO and device policy support." },
    ],
    process: [
      { title: "Discovery", description: "Platform strategy, UX flows and prototypes." },
      { title: "Build", description: "Native modules, APIs and offline sync." },
      { title: "QA & release", description: "Device labs, beta channels and store rollout." },
      { title: "Grow", description: "Analytics, A/B testing and phased releases." },
    ],
    useCases: [
      "Consumer-facing mobile products",
      "Field-force & operations apps",
      "Fintech & wallet apps",
      "Healthcare & patient apps",
    ],
  },
  {
    slug: "chatbots",
    icon: Bot,
    featured: true,
    visual: "chatbot",
    name: "AI Chatbot Development",
    summary: "Conversational AI for support, sales, WhatsApp, internal assistants and knowledge search.",
    capabilities: [
      "Website Chatbots",
      "WhatsApp Bots",
      "Support Bots",
      "Internal AI Assistants",
      "Sales Chatbots",
      "Knowledge Base Bots",
    ],
    technologies: ["GPT", "Gemini", "LangChain", "Vector Databases"],
    industries: ["Ecommerce", "SaaS", "Banking", "Telecom"],
    tagline: "Conversational AI that actually gets work done.",
    overview:
      "We build production chatbots and AI assistants that go beyond FAQ — grounded in your knowledge base, integrated with your systems and safe by design. Deploy on web, WhatsApp, Slack and internal tools.",
    benefits: [
      { title: "Grounded answers", description: "RAG on your documents, no hallucinations." },
      { title: "Tool use", description: "Bots that book meetings, create tickets and call APIs." },
      { title: "Multi-channel", description: "Web, WhatsApp, Slack, Teams and mobile." },
      { title: "Human handoff", description: "Seamless escalation with full context." },
    ],
    process: [
      { title: "Knowledge audit", description: "Sources, structure and ingestion pipelines." },
      { title: "Prompt & tools", description: "Prompt design, tool schemas and guardrails." },
      { title: "Evals", description: "Automated evals for quality, safety and cost." },
      { title: "Deploy", description: "Rollout, monitoring and continuous tuning." },
    ],
    useCases: [
      "24/7 customer support",
      "Sales qualification & booking",
      "Internal knowledge assistants",
      "WhatsApp commerce",
    ],
  },
  {
    slug: "automation",
    icon: Zap,
    visual: "automation",
    name: "Business Automation",
    summary: "Intelligent workflow automation across sales, ops, finance and support — eliminate repetitive work.",
    capabilities: [
      "Process Automation",
      "CRM Automation",
      "Document Automation",
      "Email Automation",
      "Approval Workflows",
      "Operational Automation",
    ],
    technologies: ["n8n", "Zapier", "Temporal", "Python", "REST APIs"],
    industries: ["Operations", "Finance", "HR", "Logistics"],
    tagline: "Eliminate the busywork. Scale the outcomes.",
    overview:
      "We map, redesign and automate the workflows that quietly consume your team's time — from CRM and document processing to approvals, invoicing and cross-system sync. AI-powered where it adds value, deterministic where it must be.",
    benefits: [
      { title: "Hours back per week", description: "Free teams from repetitive, error-prone tasks." },
      { title: "Fewer errors", description: "Deterministic workflows with full audit trails." },
      { title: "Faster cycle times", description: "Approvals and handoffs in minutes, not days." },
      { title: "Full observability", description: "Dashboards for every workflow and failure mode." },
    ],
    process: [
      { title: "Process mapping", description: "Identify high-ROI workflows and bottlenecks." },
      { title: "Design", description: "Redesign for automation-first execution." },
      { title: "Build", description: "n8n, Temporal or custom pipelines with integrations." },
      { title: "Operate", description: "Monitor, alert and continuously optimize." },
    ],
    useCases: [
      "Lead-to-CRM sync & enrichment",
      "Document extraction & routing",
      "Invoice & approval workflows",
      "Cross-system data sync",
    ],
  },
  {
    slug: "cloud-devops",
    icon: Cloud,
    visual: "cloud",
    name: "Cloud & DevOps",
    summary: "Cloud-native architecture, CI/CD, infrastructure-as-code and 24/7 monitoring.",
    capabilities: [
      "AWS Solutions",
      "Azure Solutions",
      "CI/CD Pipelines",
      "Infrastructure Automation",
      "Monitoring",
      "Security",
    ],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins"],
    industries: ["Enterprise", "SaaS", "Fintech", "Streaming"],
    tagline: "Cloud infrastructure built to scale safely.",
    overview:
      "We architect, migrate and operate cloud environments on AWS, Azure and GCP — with infrastructure-as-code, container orchestration, CI/CD pipelines and 24/7 monitoring. Secure, cost-optimized and audit-ready.",
    benefits: [
      { title: "Cost-optimized", description: "Right-sizing, autoscaling and spend guardrails." },
      { title: "Zero-downtime deploys", description: "Blue/green and canary out of the box." },
      { title: "Compliance-ready", description: "SOC2, HIPAA and ISO baselines." },
      { title: "Full observability", description: "Metrics, traces and logs, unified." },
    ],
    process: [
      { title: "Assess", description: "Architecture review, cost audit and risk map." },
      { title: "Design", description: "Landing zone, IaC modules and CI/CD blueprint." },
      { title: "Migrate & build", description: "Iterative migration with zero downtime." },
      { title: "Operate", description: "SRE, monitoring and on-call." },
    ],
    useCases: [
      "Cloud migrations & modernization",
      "Kubernetes platforms",
      "CI/CD & release automation",
      "SRE & 24/7 operations",
    ],
  },
  {
    slug: "data-analytics",
    icon: BarChart3,
    visual: "analytics",
    name: "Data & Analytics",
    summary: "Modern data platforms, BI dashboards, warehousing and predictive analytics.",
    capabilities: [
      "Business Intelligence",
      "Reporting Dashboards",
      "Data Warehousing",
      "Predictive Analytics",
      "Data Visualization",
      "KPI Monitoring",
    ],
    technologies: ["Power BI", "Tableau", "Python", "SQL", "Snowflake"],
    industries: ["Retail", "Finance", "Media", "Healthcare"],
    tagline: "From raw data to real decisions.",
    overview:
      "We build modern data platforms — warehouses, lakehouses, ELT pipelines, BI dashboards and predictive models — that turn scattered data into a single source of truth and reliable, real-time decisions.",
    benefits: [
      { title: "Single source of truth", description: "Unified warehouse across every system." },
      { title: "Self-serve BI", description: "Dashboards teams can actually use." },
      { title: "Predictive models", description: "Forecasting, churn and demand modeling." },
      { title: "Governed & secure", description: "Row-level security, lineage and access control." },
    ],
    process: [
      { title: "Audit", description: "Source inventory, quality and gap analysis." },
      { title: "Platform", description: "Warehouse, ELT and semantic layer." },
      { title: "Dashboards", description: "KPI design, dashboards and alerts." },
      { title: "Predict", description: "ML models for forecasting and optimization." },
    ],
    useCases: [
      "Executive KPI dashboards",
      "Sales & marketing analytics",
      "Financial reporting & forecasting",
      "Operational & supply-chain analytics",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
