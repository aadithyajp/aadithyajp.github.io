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
    subtitle: "I take ownership of the entire problem space — from discovery and stakeholder alignment, to AI-assisted execution and results you can measure.",
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
        description: "I map the technical limits, business timelines, and user tolerance before committing to a solution. The best product move is always the best move inside the real box — not an imaginary one."
      },
      {
        number: "02",
        title: "Make trade-offs explicit",
        description: "I surface speed vs quality, vendor lock-in, scope cuts, and data risks upfront — so no one is surprised mid-sprint. If we're choosing convenience over control, everyone knows it going in."
      },
      {
        number: "03",
        title: "Ship to learn, not to launch",
        description: "A release is the fastest way to validate whether our assumptions hold. I use AI to compress discovery cycles and optimise for learning velocity — not just feature count."
      },
      {
        number: "04",
        title: "Own the problem, not just the backlog",
        description: "I go to the source — users, logs, support data — before writing a single ticket. I use AI to surface patterns in usage data faster, so I'm solving the right problem, not just the loudest one."
      },
      {
        number: "05",
        title: "Use AI as leverage, not a shortcut",
        description: "I use AI to accelerate discovery, draft artifacts, model scenarios, and detect patterns — but every decision, trade-off, and product narrative stays human and accountable."
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
        description: "I turn vague problem statements into scoped, delivery-ready work. I structure stories as vertical slices — each one delivering end-to-end value so teams ship working product every sprint, not just completed tasks. Every release has a clear success metric and proof of impact.",
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
      headline: "Migrating 4,000+ repositories within strict cutover windows",
      intro: "A large enterprise needed to consolidate source code from multiple legacy SCM platforms to a single Git-based system. Teams across the org had active development workflows tied to those repos.",
      client: "UST (PACE)",
      domain: "DevOps / SCM",
      status: "Live in production",
      tags: ["SCM migration", "GitHub Enterprise", "Enterprise DevOps", "Compliance", "AI-powered automation"],
      details: {
        context: "The migration was part of a broader cloud modernisation initiative. Executive pressure to deliver within firm cutover dates, with repo complexity varying significantly across projects.",
        userNeed: "Development teams needed source code and branch history preserved cleanly. Platform engineers needed a repeatable, low-risk process across hundreds of repositories.",
        constraints: "Client environments had defined freeze windows for migrations. Repository complexity varied widely across teams and projects.",
        optionsConsidered: "Big-bang migration over a weekend. Phased migration by repository complexity. Hybrid approach with one-way sync during transition.",
        tradeOffs: "Big-bang was fastest but too risky given complexity variance. Phased was safest but needed delta migration planning. Hybrid reduced risk but added operational overhead.",
        decision: "Chose phased migration sequenced by repository complexity, starting with simpler repos to validate tooling. Each phase included a delta migration pass before final cutover.",
        execution: "Built an automated migration toolkit with validation checks. Ran migration cohorts tied to freeze windows. Created a self-service dashboard for teams to track status and flag issues.",
        outcome: "4,000+ repos migrated in under 2 months. All deliveries within approved freeze windows with no source code loss. SCM licensing costs reduced by ~40%.",
        lessonLearned: "In large-scale migrations, the tooling you build for confidence — dashboards, validators, delta checks — matters more than the migration scripts themselves."
      }
    },
    {
      category: "CLOUD · INFRASTRUCTURE-AS-CODE",
      headline: "Reducing cloud provisioning time from days to hours",
      intro: "Enterprise platform teams were stuck with manual, ticket-based infrastructure provisioning. A new project could wait 3–5 days for basic cloud resources, blocking product velocity.",
      client: "UST (PACE)",
      domain: "Cloud / IaC",
      status: "In production",
      tags: ["Infrastructure-as-code", "Multi-cloud", "AI automation", "GitOps", "Cloud modernisation"],
      details: {
        context: "The company was scaling rapidly, adding 10+ new services per quarter. Manual provisioning created a bottleneck and cloud costs were spiralling due to lack of governance.",
        userNeed: "Product teams needed self-service infrastructure provisioning. Platform teams needed governance and compliance built into the workflow — not bolted on after.",
        constraints: "Teams had varying IaC expertise. Had to work within existing AWS, Azure, and GCP footprints without forcing a platform switch.",
        optionsConsidered: "Build a custom portal. Adopt an open-source IaC tool. Use a commercial platform like Terraform Cloud — but it wasn't cloud-agnostic enough for our multi-cloud environment.",
        tradeOffs: "Custom portal: flexible but high maintenance. Open-source: low cost but required deep expertise to standardise. Commercial: battle-tested but locked us into a single cloud provider.",
        decision: "Built InfraFlow — an AI-driven IaC platform that generates compliant infrastructure code for the target cloud type from simple inputs, integrated with GitOps workflows for review and approval.",
        execution: "Created modular IaC templates for common patterns across AWS, Azure, and GCP. Built a web UI for self-service provisioning. Integrated policy-as-code checks using OPA for automated compliance.",
        outcome: "50% faster provisioning — from days to hours. 90% Day-0 compliance with security policies. Reduced manual toil for platform teams by 70%.",
        lessonLearned: "Self-service infrastructure only works if governance is built into the platform itself. Trust but verify — with automated policy checks at every step."
      }
    },
    {
      category: "PAYMENTS · PAYMENT GATEWAY AGGREGATOR",
      headline: "Building resilient payment flows for 60%+ success rates",
      intro: "A travel marketplace serving clients across multiple countries was losing transactions to payment gateway failures. Customers were abandoning bookings, and revenue was bleeding out — especially on cross-border and multi-currency purchases.",
      client: "Clarity Travel Technology",
      domain: "Payments / Travel",
      status: "Production",
      tags: ["Payment orchestration", "Multi-currency", "Travel-tech", "PCI-DSS", "Virtual cards", "Fintech"],
      details: {
        context: "The platform onboarded clients from different regions, each with customers purchasing in different currencies. A single payment gateway couldn't handle the volume, currency variety, or regional compliance needs — and frequent downtime made failures worse.",
        userNeed: "Customers needed reliable payment processing regardless of currency or region. Business needed to maximise transaction success across all client accounts and minimise revenue loss.",
        constraints: "PCI-DSS compliance required across all payment flows. Multiple PSPs had different APIs, pricing, and currency support. Existing payment flows had to stay live during migration.",
        optionsConsidered: "Stick with a single gateway and negotiate SLA. Build a simple failover to a backup gateway. Create a full payment gateway aggregator platform.",
        tradeOffs: "Single gateway: simplest but couldn't support multi-currency clients or handle regional failures. Simple failover: quick win but not flexible enough for currency-aware routing. Full aggregator: complex to build but the only future-proof option for multi-client, multi-currency scale.",
        decision: "Built a payment gateway aggregator platform with intelligent routing based on transaction currency, client region, real-time success rates, and cost optimisation — with virtual card processing as a fallback layer.",
        execution: "Integrated 18+ payment gateways, each covering different currencies and regional strengths. Built intelligent routing logic with real-time success rate monitoring. Implemented virtual card processing with fallback for edge cases. Built reconciliation workflows for full audit transparency.",
        outcome: "60% improvement in transaction success rates. 99% reduction in payment failures. 18+ gateways live across multi-currency, multi-client payment flows with full reconciliation.",
        lessonLearned: "Payment resilience isn't just redundancy — it's intelligent routing that accounts for currency, region, and real-time gateway performance."
      }
    },
    {
      category: "TRAVEL APIs · AIRLINE DISTRIBUTION",
      headline: "Integrating 25+ airlines with zero booking failures",
      intro: "A travel aggregator needed to connect to multiple airlines for real-time flight search and booking. Each airline had different APIs, IATA schemas, and SLAs — and airlines wanted to offer dynamic pricing with rich content to travellers.",
      client: "Clarity Travel Technology",
      domain: "Travel / API Platforms",
      status: "Live",
      tags: ["NDC integration", "IATA compliance", "Travel APIs", "GDS systems", "Airline distribution"],
      details: {
        context: "The travel industry was shifting from legacy GDS to modern NDC standards. Customers expected real-time pricing and instant booking confirmation. Airlines wanted to move away from GDS to offer dynamic pricing and richer content directly to travel agents.",
        userNeed: "Travel agents needed unified access to airline inventory across NDC and GDS. Airlines needed IATA-compliant integrations with reliable uptime and the ability to pass commissions and incentives to agencies.",
        constraints: "NDC schemas vary significantly by airline. GDS systems carry legacy constraints and limited pricing flexibility. Both standards had to be supported simultaneously during the industry transition.",
        optionsConsidered: "Focus only on NDC (modern standard). Focus only on GDS (proven coverage). Build a hybrid platform supporting both.",
        tradeOffs: "NDC-only: future-proof but limited airline coverage during transition. GDS-only: broad coverage but outdated pricing and content. Hybrid: complex to build and maintain but the only option for full coverage and modern capability.",
        decision: "Built a unified API layer that abstracts NDC and GDS differences, providing a consistent interface to travel agents regardless of airline backend — while also supporting airline-defined commission and incentive structures for agencies.",
        execution: "Integrated NDC APIs for Air India, Emirates, Etihad, British Airways, and more. Maintained GDS connections for legacy airlines. Built a schema transformation layer for IATA compliance across all integrations.",
        outcome: "25+ airline integrations across NDC and GDS. Real-time pricing with <2s response times. 99.5% booking success rate across all integrated airlines.",
        lessonLearned: "In industries undergoing technical transitions, supporting both legacy and modern standards is the only way to maximise coverage, reliability, and airline adoption."
      }
    }
  ],

  experience: [
    {
      role: "Associate II – Business Analysis",
      company: "UST (PACE)",
      period: "Jul 2025 – Present",
      description: "Leading product strategy and delivery for PACE GitLift — an AI-powered SCM migration platform — and PACE InfraFlow, a self-service IaC provisioning platform. Driving product vision, roadmap execution, and cross-functional collaboration for enterprise DevOps and cloud modernisation products. Key outcomes: 70%+ reduction in manual scripting, 50% faster infrastructure provisioning, and 90% Day-0 compliance."
    },
    {
      role: "Product Associate",
      company: "Clarity Travel Technology Solutions",
      period: "Mar 2025 – Jul 2025 · 5 mos",
      description: "Led product initiatives across airline NDC API integrations, payment gateway aggregator platform, and GDS enhancements. Owned IATA schema compliance across all airline integrations. Delivered a payment gateway and VCC orchestration platform — improving transaction success by 60% and reducing failures by 99% across 18+ payment gateways."
    },
    {
      role: "Junior Product Associate",
      company: "Clarity Travel Technology Solutions",
      period: "Mar 2023 – Mar 2025 · 2 yrs 1 mo",
      description: "Drove product development for 25+ airline API integrations (Air India, Emirates, Etihad, British Airways, and more) and the payment gateway aggregator platform. Implemented sprint capacity planning, MoSCoW prioritisation, and market analysis to improve velocity and roadmap alignment. Led end-to-end UI/UX versioning improvements and cross-functional stakeholder collaboration."
    }
  ],

  skills: [
    {
      category: "Product craft",
      skills: ["Product lifecycle management", "Roadmap prioritisation", "Vertical slice user story mapping", "Backlog management", "Product discovery", "Go-to-market strategy", "Competitive analysis", "Product-market fit"]
    },
    {
      category: "Systems and delivery",
      skills: ["Agile / Scrum / Kanban", "Sprint capacity planning", "API-first design", "Platform architecture", "Cross-functional leadership", "Stakeholder management"]
    },
    {
      category: "Domain depth",
      skills: ["DevOps tooling", "SCM migration (Git, Perforce, ADO)", "Infrastructure-as-code (Terraform)", "Payment systems (PSP, PCI-DSS)", "Travel APIs (NDC, GDS, IATA)", "Cloud modernisation"]
    },
    {
      category: "AI and analytics",
      link: {
        text: "View Data Science Portfolio",
        url: "https://aadithyajp.github.io/Aadithyadatascientist.github.io/"
      },
      skills: ["Data science foundation", "ML data modelling", "A/B testing and experimentation", "User analytics and dashboarding", "Python / Pandas for analysis", "Business intelligence", "AI-assisted product discovery", "AI workflow automation"]
    },
    {
      category: "Technical skills",
      skills: ["Figma (Wireframing, Prototyping, Figma Make)", "Postman and API testing", "System integration", "Data-driven decision making", "Digital and social media marketing"]
    },
    {
      category: "Business contexts",
      skills: ["B2C", "B2B2B SaaS", "Self-service platforms", "Professional services", "Enterprise sales cycles", "Technical buyer personas", "Compliance and benchmarks", "Cloud economics", "Supplier and client management"]
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