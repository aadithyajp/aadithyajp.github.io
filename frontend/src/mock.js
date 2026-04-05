// Mock data for portfolio
export const portfolioData = {
  personal: {
    name: "Aadithya Julius Prince",
    role: "PRODUCT OWNER · PAYMENTS · PLATFORMS · DEVOPS",
    tagline: "I convert ambiguous business problems into platform products teams rely on every day.",
    summary: "I'm a product owner with 3+ years building DevOps, travel-tech, and payment platforms. I focus on real workflow pain—using data and AI where it helps—and deliver products with outcomes you can measure.",
    email: "aadithyajp26@gmail.com",
    phone: "+91 9384184215",
    location: "Chennai, India",
    linkedin: "https://www.linkedin.com/in/aadithyajp",
    github: "#",
    recognition: "Above and Beyond award for exceptional performance in product ownership"
  },

  metrics: {
    title: "Proof in outcomes",
    description: "I've led platform products for DevOps and cloud teams, migration engineers, payment and travel operators—solving real workflow problems and using data and AI to deliver measurable results.",
    stats: [
      { label: "Products shipped", value: "4+" },
      { label: "Years in product", value: "3+" },
      { label: "Users impacted", value: "500+" }
    ]
  },

  whyMe: {
    title: "I don't just manage products. I own outcomes.",
    subtitle: "Most product managers can run a sprint. I take ownership of the entire problem space—from stakeholder alignment and trade-off analysis to execution and measurable results.",
    strengths: [
      {
        title: "Complex systems, clear outcomes",
        description: "I specialise in products where the architecture is intricate — DevOps pipelines, payment orchestration, NDC integrations, SCM migrations — and where the business cannot afford ambiguity. I use AI to surface patterns faster and reduce the time between problem and decision."
      },
      {
        title: "Cross-domain fluency",
        description: "Travel-tech, cloud modernisation, repository migration, payments, professional services. I learn fast, connect dots across industries, and use AI tools to compress research and discovery cycles — so I spend more time on decisions, less on information gathering."
      },
      {
        title: "Decisions backed by data and AI",
        description: "With a foundation in data science and analytics, I build the evidence before I commit to a direction. I use AI to validate assumptions, detect patterns in usage data, and prioritise with confidence"
      },
      {
        title: "Growth-minded communication",
        description: "Clear communication is how products get adopted. I use plain language, structured artifacts, and AI-assisted content to align stakeholders, explain complex decisions, and drive real usage — not just feature launches."
      }
    ]
  },

  howIThink: {
    title: "Principles that guide every product decision.",
    principles: [
      {
        number: "01",
        title: "Start with the constraint, not the feature",
        description: "Every product decision exists inside a box of technical limits, business timelines, and user tolerance. I map the box first, then find the best move inside it."
      },
      {
        number: "02",
        title: "Make trade-offs explicit",
        description: "I don't hide trade-offs behind optimistic roadmaps. If speed costs quality, or if we're choosing vendor lock-in for faster delivery, everyone knows upfront."
      },
      {
        number: "03",
        title: "Ship to learn, not to launch",
        description: "A release isn't a finish line. It's the fastest way to get real data on whether our assumptions hold. I optimize for learning velocity over feature count."
      },
      {
        number: "04",
        title: "Own the problem, not just the backlog",
        description: "I don't wait for requirements to arrive. I go to the source—users, data, support logs—and define the problem worth solving before writing a single ticket."
      },
      {
        number: "05",
        title: "Bridge the gap between technical and business",
        description: "I speak both languages fluently. Engineers trust me because I understand system constraints. Executives trust me because I tie every decision to business outcomes."
      }
    ]
  },

  operatingSystem: {
    title: "My product operating system",
    subtitle: "I don't just ship features—I build systems people rely on. Here's how I think about product work:",
    principles: [
      {
        title: "Platform thinking",
        description: "I design products as platforms—not one-off tools. That means thinking in abstractions, reusable components, and workflows that scale across teams and use cases.",
        tags: ["API-first design", "Reusable components", "Multi-tenant architecture", "Workflow automation"]
      },
      {
        title: "Execution clarity",
        description: "I turn vague requirements into scoped milestones. Every feature is tied to a user pain point, every release has clear success metrics, and every sprint delivers proof.",
        tags: ["User story mapping", "Metrics-driven roadmaps", "Sprint planning", "Stakeholder alignment"]
      },
      {
        title: "Business outcomes",
        description: "I speak business. I translate technical wins into revenue impact, efficiency gains, and compliance wins—and I make sure engineering effort ties back to strategic goals.",
        tags: ["ROI modeling", "Cost optimization", "Compliance impact", "Revenue acceleration"]
      }
    ]
  },

  caseStudies: [
    {
      category: "DEVOPS · CLOUD MODERNIZATION",
      headline: "Migrating 2,000+ repositories without breaking CI/CD",
      intro: "A large enterprise needed to consolidate repositories from multiple legacy SCM platforms to a single Git-based system. Hundreds of teams depended on active CI/CD pipelines tied to those repos.",
      client: "UST (PACE)",
      domain: "DevOps / SCM",
      status: "Live in production",
      tags: ["SCM migration", "GitHub Enterprise", "Enterprise DevOps", "Compliance", "AI-powered automation"],
      details: {
        context: "The migration was part of a broader cloud modernization initiative. Executive pressure to move fast, but any pipeline breakage would halt deployments across the org.",
        userNeed: "Development teams needed their workflows to continue uninterrupted. Platform engineers needed a clean, maintainable target state.",
        constraints: "Zero-downtime migration. No dedicated migration budget. Teams had varying levels of Git maturity.",
        optionsConsidered: "Big-bang migration over a weekend. Phased migration by business unit. Hybrid approach with parallel systems during transition.",
        tradeOffs: "Big-bang was fastest but riskiest. Phased was safest but would take 6+ months. Hybrid added operational overhead but preserved safety.",
        decision: "Chose the phased approach grouped by CI/CD pipeline complexity, starting with low-risk repos to build confidence and tooling before tackling critical ones.",
        execution: "Built an automated migration toolkit with validation checks. Ran weekly migration cohorts. Created a self-service dashboard for teams to track their migration status.",
        outcome: "2,000+ repos migrated in 14 weeks. Zero CI/CD pipeline failures during migration. Reduced SCM licensing costs by 40%.",
        lessonLearned: "In large-scale migrations, the tooling you build for confidence (dashboards, validators) matters more than the migration scripts themselves."
      }
    },
    {
      category: "CLOUD · INFRASTRUCTURE-AS-CODE",
      headline: "Reducing cloud provisioning time from days to hours",
      intro: "Enterprise platform teams were stuck with manual, ticket-based infrastructure provisioning. A new project could wait 3-5 days for basic cloud resources, blocking product velocity.",
      client: "UST (PACE)",
      domain: "Cloud / IaC",
      status: "In production",
      tags: ["Infrastructure-as-code", "Terraform", "Cloud modernization", "AI automation", "GitOps"],
      details: {
        context: "The company was scaling rapidly, adding 10+ new services per quarter. Manual provisioning created a bottleneck. Cloud costs were spiraling due to lack of governance.",
        userNeed: "Product teams needed self-service infrastructure provisioning. Platform teams needed governance and compliance built into the workflow.",
        constraints: "Teams had varying Terraform expertise. No dedicated platform engineering budget. Had to work with existing AWS/Azure/GCP footprints.",
        optionsConsidered: "Build a custom portal. Adopt an open-source IaC tool. Use a commercial platform like Terraform Cloud.",
        tradeOffs: "Custom portal: flexible but high maintenance. Open-source: free but requires expertise. Commercial: expensive but battle-tested.",
        decision: "Built an AI-driven IaC platform (InfraFlow) that generates compliant Terraform code from simple inputs, integrated with GitOps workflows for review and approval.",
        execution: "Created modular Terraform templates for common patterns (VPC, EKS, RDS). Built a web UI for self-service provisioning. Integrated policy-as-code checks using OPA.",
        outcome: "50% faster provisioning (days to hours). 90% Day-0 compliance with security policies. Reduced manual toil for platform teams by 70%.",
        lessonLearned: "Self-service infrastructure only works if you build governance into the platform itself. Trust but verify with automated policy checks."
      }
    },
    {
      category: "PAYMENTS · TRAVEL-TECH",
      headline: "Building resilient payment flows for 60%+ success rates",
      intro: "A travel marketplace was losing 40% of transactions due to payment gateway failures. Customers were abandoning bookings, and revenue was bleeding out.",
      client: "Clarity Travel Technology",
      domain: "Payments / Travel",
      status: "Production",
      tags: ["Payment orchestration", "Travel-tech", "PCI-DSS", "Virtual cards", "Fintech"],
      details: {
        context: "The company relied on a single payment gateway with frequent downtime. International transactions had high failure rates. No fallback mechanism existed.",
        userNeed: "Customers needed reliable payment processing. Business needed to maximize transaction success and minimize revenue loss.",
        constraints: "PCI-DSS compliance required. Multiple PSPs had different APIs and pricing. Had to maintain existing payment flows during migration.",
        optionsConsidered: "Stick with single gateway and negotiate SLA. Build a simple failover to a backup gateway. Create a full payment orchestration layer.",
        tradeOffs: "Single gateway: simplest but risky. Simple failover: quick win but limited. Full orchestration: complex but future-proof.",
        decision: "Built a payment gateway aggregator with intelligent routing based on success rates, transaction type, and cost optimization.",
        execution: "Integrated 3 PSPs (Stripe, Razorpay, PayU). Built routing logic with real-time success rate monitoring. Implemented virtual card processing with Terrapay/Nium fallback.",
        outcome: "60% improvement in transaction success rates. 99% reduction in payment failures. Built reconciliation workflows for audit transparency.",
        lessonLearned: "Payment resilience isn't just about redundancy—it's about intelligent routing based on real-time performance data."
      }
    },
    {
      category: "TRAVEL APIs · AIRLINE DISTRIBUTION",
      headline: "Integrating 10+ airlines with zero booking failures",
      intro: "A travel aggregator needed to connect to multiple airlines for real-time flight search and booking. Each airline had different APIs (NDC vs GDS), schemas, and SLAs.",
      client: "Clarity Travel Technology",
      domain: "Travel / API Platforms",
      status: "Live",
      tags: ["NDC integration", "IATA compliance", "Travel APIs", "GDS systems", "Airline distribution"],
      details: {
        context: "The travel industry was transitioning from legacy GDS to modern NDC standards. Customers expected real-time pricing and instant booking confirmation.",
        userNeed: "Travel agents needed unified access to airline inventory. Airlines needed IATA-compliant integrations with reliable uptime.",
        constraints: "NDC schemas vary by airline. GDS systems have legacy constraints. Had to support both during industry transition.",
        optionsConsidered: "Focus only on NDC (modern). Focus only on GDS (proven). Build a hybrid platform supporting both.",
        tradeOffs: "NDC-only: future-proof but limited airline coverage. GDS-only: broad coverage but outdated. Hybrid: complex but comprehensive.",
        decision: "Built a unified API layer that abstracts NDC and GDS differences, providing a consistent interface to travel agents regardless of airline backend.",
        execution: "Integrated NDC APIs for Air India, Emirates, Etihad, British Airways. Maintained GDS connections for legacy airlines. Built schema transformation layer for IATA compliance.",
        outcome: "10+ airline integrations (NDC + GDS). Real-time pricing with <2s response times. 99.5% booking success rate.",
        lessonLearned: "In industries undergoing technical transitions, supporting both legacy and modern standards is key to maximizing coverage and reliability."
      }
    }
  ],

  experience: [
    {
      role: "Associate II - Business Analysis",
      company: "UST (PACE)",
      period: "Jul 2025 – Present",
      description: "Leading product strategy and delivery for PACE GitLift (AI-powered SCM migration platform) and PACE InfraFlow (AI-driven IaC platform). Driving vision, roadmap execution, and cross-functional collaboration for enterprise DevOps and cloud modernization products. Delivered measurable outcomes: 70%+ reduction in manual scripting, 50% faster provisioning, and 90% Day-0 compliance."
    },
    {
      role: "Product Associate",
      company: "Clarity Travel Technology Solutions",
      period: "Mar 2025 – Jul 2025 · 5 mos",
      description: "Led product initiatives across airline API integrations, payment gateway aggregator platform, and GDS enhancements. Owned NDC API integrations ensuring IATA schema compliance. Delivered payment orchestration platform improving transaction success by 60% and reducing failures by 99%."
    },
    {
      role: "Junior Product Associate",
      company: "Clarity Travel Technology Solutions",
      period: "Mar 2023 – Mar 2025 · 2 yrs 1 mo",
      description: "Drove product development for airline API integrations (Air India, Emirates, Etihad, British Airways) and GDS platform enhancements. Implemented sprint capacity planning, MoSCoW prioritization, and market analysis to enhance velocity and roadmap alignment. Led UI/UX improvements and cross-functional stakeholder collaboration."
    }
  ],

  skills: [
    {
      category: "Product craft",
      skills: ["Product lifecycle management", "Roadmap prioritization", "User story mapping", "Backlog management", "Product discovery", "Go-to-market strategy", "Competitive analysis", "Product-market fit"]
    },
    {
      category: "Systems and delivery",
      skills: ["Agile / Scrum / Kanban", "Sprint capacity planning", "API-first design", "Platform architecture", "CI/CD workflows", "Cross-functional leadership", "Stakeholder management"]
    },
    {
      category: "Domain depth",
      skills: ["DevOps tooling", "SCM migration (Git, Perforce, ADO)", "Infrastructure-as-code (Terraform)", "Payment systems (PSP, PCI-DSS)", "Travel APIs (NDC, GDS, IATA)", "Cloud modernization"]
    },
    {
      category: "Technical skills",
      skills: ["Figma (Wireframing & Prototyping)", "Postman & API testing", "System integration", "Data-driven decision making", "SQL & data modeling", "Digital & social media marketing"]
    },
    {
      category: "Analytics background",
      skills: ["Data science foundation", "A/B testing", "User analytics", "Dashboarding", "Python for analysis", "Business intelligence", "Metrics modeling"]
    },
    {
      category: "Business contexts",
      skills: ["B2B SaaS", "Enterprise sales cycles", "Technical buyer personas", "Compliance (SOC2, CIS Benchmark)", "Cloud economics", "ROI modeling", "Supplier & client management"]
    }
  ],

  portfolioExtensions: [
    {
      title: "Analytics and machine learning foundation",
      description: "Before product management, I built my foundation in data science and analytics. I still use these skills for experimentation, metrics modeling, and understanding user behavior at scale.",
      links: [
        { label: "View data science portfolio", url: "#" },
        { label: "View Kaggle profile", url: "#" }
      ]
    },
    {
      title: "Range across markets and go-to-market thinking",
      description: "I've worked across B2B SaaS, payments, and travel-tech—giving me fluency in different business models, buyer personas, and go-to-market motions.",
      tags: ["B2B SaaS", "Payments", "Travel-tech", "PLG", "Enterprise sales", "API products"]
    }
  ],

  about: {
    title: "A product owner building toward platform leadership",
    content: [
      "I started with a foundation in biomedical engineering and data science, then transitioned into product management because I wanted to be closer to the decision-making that drives business outcomes. My technical background—including certification as a Data Scientist—helps me speak the language of engineers while staying focused on business value: ROI, efficiency, and strategic impact.",
      "Right now, I'm building platform products for DevOps and infrastructure teams at UST (PACE)—products that need to scale across workflows, integrate into existing toolchains, and deliver measurable outcomes. I thrive in environments where technical complexity meets real business problems, translating ambiguous requirements into structured roadmaps and functional solutions.",
      "I've been recognized with the \"Above and Beyond\" award for exceptional performance in product ownership, demonstrating my commitment to driving measurable business outcomes through structured, data-informed decision-making. Long-term, I'm working toward platform product leadership—building teams, defining product vision at scale, and driving multi-product strategies in technical domains."
    ],
    quote: "I believe the best product managers are translators—they convert customer pain into engineering priorities, technical wins into business value, and ambiguous problems into structured roadmaps that teams can execute with confidence."
  }
};