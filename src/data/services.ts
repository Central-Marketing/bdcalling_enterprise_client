// Scraped from bdcallingenterprise.com service posts.

export type Section = { heading: string; items?: string[]; text?: string };

export type Service = {
  slug: string;
  title: string;
  short: string;
  image: string;
  icon: "tender" | "gear" | "truck" | "doc";
  intro: string[];
  sections: Section[];
  closing: string;
};

export const services: Service[] = [
  {
    slug: "government-tender-rfq-strategy",
    title: "Government Tender & RFQ Strategy",
    short: "End-to-end support for e-GP tender submissions and government procurement workflows.",
    image: "/images/service-tender.jpg",
    icon: "tender",
    intro: [
      "Comprehensive support for public procurement & e-GP success.",
      "We offer end-to-end strategic and technical support for businesses participating in government tenders, RFQs (Request for Quotation), and public procurement opportunities, with a focus on navigating Bangladesh's e-GP (Electronic Government Procurement) system efficiently and compliantly.",
    ],
    sections: [
      {
        heading: "Our services include",
        items: [
          "Tender Identification & Monitoring: continuous tracking of relevant tenders and RFQs across government portals and sectors.",
          "Bid Preparation & Documentation: technically sound, compliant, and competitive bid submissions, including drafting, formatting, and packaging.",
          "e-GP System Management: complete support in using the e-GP portal, from registration and DSC setup to bid uploads and submissions.",
          "Pricing & Compliance Strategy: market analysis, BOQ interpretation, and pricing guidance with strict alignment to procurement rules.",
          "Post-Bid Follow-Up & Clarifications: handling correspondence, addendums, clarifications, and updates until final evaluation and award.",
        ],
      },
      {
        heading: "Why partner with us",
        items: [
          "In-depth knowledge of public procurement regulations",
          "Experienced team with a successful track record in national-level tender submissions",
          "Customized strategies for maximizing bid success rate",
        ],
      },
    ],
    closing:
      "Whether you're a newcomer or a seasoned bidder, we streamline the entire government tendering process so you can focus on execution, not paperwork.",
  },
  {
    slug: "oem-spare-parts-indenting",
    title: "OEM Spare Parts & Indenting",
    short: "Genuine and OEM-certified components for power plants, generators, turbines, and instrumentation systems.",
    image: "/images/service-oem.jpg",
    icon: "gear",
    intro: [
      "We specialize in the sourcing, indenting, and supply of genuine and OEM-certified spare parts tailored for critical industrial systems. Our expertise ensures that clients receive high-quality, reliable components that meet strict operational and safety standards.",
    ],
    sections: [
      {
        heading: "What we offer",
        items: [
          "Genuine OEM and OEM-certified spare parts, guaranteeing full compatibility and optimal performance",
          "Comprehensive support for power plants, diesel and gas generators, steam and gas turbines, and instrumentation systems",
        ],
      },
      {
        heading: "Parts include (but are not limited to)",
        items: [
          "Engine and turbine components",
          "Filters, gaskets, and seals",
          "Control panels and PLC modules",
          "Instrumentation and calibration devices",
          "Electrical connectors and circuit boards",
        ],
      },
      {
        heading: "Industries we serve",
        items: [
          "Energy and Power Generation (thermal, hydro, gas)",
          "Industrial Automation",
          "Oil & Gas",
          "Utilities and Infrastructure Projects",
        ],
      },
      {
        heading: "Why choose us",
        items: [
          "Direct sourcing from original equipment manufacturers or their authorized distributors",
          "Guaranteed authenticity and certification to maintain system warranties and performance",
          "Technical support and documentation provided with each order",
          "Custom indenting services to meet urgent or specialized procurement requirements",
        ],
      },
    ],
    closing:
      "Whether you're planning preventive maintenance or handling emergency replacements, we ensure timely, cost-effective, and trustworthy delivery of OEM spare parts worldwide.",
  },
  {
    slug: "turnkey-supply-installation",
    title: "Turnkey Supply & Installation",
    short: "Logistics, project management, delivery, and installation supervision for critical industrial supplies.",
    image: "/images/service-turnkey.jpg",
    icon: "truck",
    intro: [
      "We offer comprehensive end-to-end solutions for the supply, delivery, and supervised installation of critical industrial systems and components. Our turnkey services are designed to streamline complex procurement and deployment processes, ensuring every project is executed with precision, efficiency, and accountability.",
    ],
    sections: [
      {
        heading: "Project Planning & Procurement",
        items: [
          "Identification of technical requirements",
          "Sourcing of compliant and certified equipment",
          "Procurement coordination with OEMs and approved vendors",
        ],
      },
      {
        heading: "Logistics & Global Delivery",
        items: [
          "International shipping, customs clearance, and inland transport",
          "Warehousing and inventory management",
          "Timely delivery to project sites in remote or high-security zones",
        ],
      },
      {
        heading: "On-site Installation & Supervision",
        items: [
          "Deployment of qualified technical supervisors",
          "Coordination with local contractors and engineers",
          "Oversight of mechanical, electrical, and instrumentation setup",
          "On-site testing and quality assurance support",
        ],
      },
      {
        heading: "Applications & Industries",
        items: [
          "Power Plants (thermal, hydro, renewable)",
          "Oil & Gas facilities",
          "Industrial manufacturing and processing plants",
          "Public infrastructure and utilities",
          "Defense and critical government projects",
        ],
      },
      {
        heading: "Why choose us",
        items: [
          "Single-point accountability from procurement to commissioning",
          "Experienced project management team with multi-sector exposure",
          "Compliance with international standards and safety protocols",
          "Minimized downtime through efficient planning and execution",
        ],
      },
    ],
    closing:
      "With our Turnkey Supply & Installation services, clients benefit from a seamless, risk-mitigated delivery pipeline, from order placement to operational readiness.",
  },
  {
    slug: "compliance-documentation",
    title: "Compliance & Documentation",
    short: "Bid document preparation, audit support, regulatory filings, and logistics certifications.",
    image: "/images/service-compliance.jpg",
    icon: "doc",
    intro: [
      "We provide end-to-end support for preparing and managing all critical documentation required for regulatory compliance, project bidding, audits, and certified logistics. Our services keep your operations fully aligned with national and international standards, minimizing risks and maximizing eligibility for government and institutional projects.",
    ],
    sections: [
      {
        heading: "Bid Document Preparation",
        items: [
          "Drafting and compiling technical and financial proposals",
          "Prequalification documents, tender compliance checklists, and annexures",
          "Assistance with e-GP and manual tender submissions",
          "Formatting and review for alignment with RFP/RFQ requirements",
        ],
      },
      {
        heading: "Audit & Inspection Support",
        items: [
          "Documentation for internal and external audits",
          "Asset tracking reports, purchase logs, and vendor certifications",
          "Support for third-party inspections and compliance verifications",
        ],
      },
      {
        heading: "Regulatory Filings",
        items: [
          "Preparation and submission of documents required by regulatory bodies",
          "Support for import/export permits, industry certifications, and government registrations",
          "Alignment with sector-specific compliance frameworks (power, defense, infrastructure, etc.)",
        ],
      },
      {
        heading: "Logistics & Delivery Certifications",
        items: [
          "Delivery notes, packing lists, and certificates of conformity",
          "Manufacturer authorization and warranty documents",
          "Customs documentation, Bill of Lading (BL), and freight clearance files",
        ],
      },
      {
        heading: "Why this matters",
        items: [
          "Ensures eligibility in competitive bidding",
          "Reduces regulatory risks and penalties",
          "Strengthens your audit readiness and transparency",
          "Builds credibility with government, institutional, and international clients",
        ],
      },
    ],
    closing:
      "We act as your trusted compliance partner, removing administrative burdens and enabling you to focus on execution and growth.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
