// Scraped from bdcallingenterprise.com industry posts.
import type { Section } from "./services";

export type Industry = {
  slug: string;
  title: string;
  short: string;
  image: string;
  imageKind: "logo" | "photo";
  intro: string[];
  sections: Section[];
  closing?: string;
};

export const industries: Industry[] = [
  {
    slug: "power-energy-sector",
    title: "Power & Energy Sector",
    short: "Turnkey supply of power plant components, HV equipment, control systems and instrumentation.",
    image: "/images/industry-power-energy.jpg",
    imageKind: "photo",
    intro: [
      "The Power and Energy Sector of Bangladesh is one of the most crucial pillars supporting national development. It comprises government ministries, energy authorities, and power generation/distribution entities that manage the country's energy needs, ensuring the uninterrupted generation, transmission, and distribution of electricity to homes, commercial establishments, industries, and rural communities.",
    ],
    sections: [
      {
        heading: "Key responsibilities include",
        items: [
          "Development and operation of power plants (gas, thermal, hydro, solar)",
          "Grid infrastructure expansion and modernization",
          "Renewable energy integration",
          "Energy efficiency and policy reform",
        ],
      },
    ],
    closing:
      "Our role within this sector involves the turnkey supply of power plant components, high-voltage electrical equipment, control systems, and instrumentation. We also support EPC contractors and government utilities through our OEM-certified spare parts indenting, logistics, and compliance documentation services, ensuring projects are delivered on time and in accordance with regulatory standards.",
  },
  {
    slug: "rural-power-company-ltd-rpcl",
    title: "Rural Power Company Ltd. (RPCL)",
    short: "Engineering equipment, spare parts and installation services tailored for rural deployment.",
    image: "/images/industry-rpcl.png",
    imageKind: "logo",
    intro: [
      "The Rural Power Company Limited (RPCL) is an autonomous government-owned utility established to bridge the urban-rural electricity divide. Operating under the Rural Electrification Board (REB), RPCL plays a pivotal role in improving the quality of life in rural areas by developing reliable, sustainable, and cost-effective power generation facilities.",
    ],
    sections: [
      {
        heading: "Core functions of RPCL include",
        items: [
          "Planning and construction of rural power plants",
          "Operation and maintenance of power generation units",
          "Promoting public-private partnerships in energy projects",
          "Empowering rural industries and communities through electrification",
        ],
      },
    ],
    closing:
      "We have collaborated with RPCL in providing specialized engineering equipment, spare parts, and installation services tailored for rural deployment. Our expertise helps RPCL meet its mission of achieving 100% electrification across underserved regions with high reliability and technical precision.",
  },
  {
    slug: "ministry-of-food",
    title: "Ministry of Food",
    short: "Infrastructure, equipment and systems for efficient grain handling, monitoring and logistics.",
    image: "/images/industry-ministry-of-food.jpg",
    imageKind: "logo",
    intro: [
      "The Ministry of Food is a vital arm of the Government of Bangladesh, responsible for developing and enforcing national food security policies. Its mandate includes the procurement, storage, and distribution of food grains to ensure that essential food supplies remain available and affordable for all citizens, especially during times of crisis or natural disaster.",
    ],
    sections: [
      {
        heading: "The Ministry oversees",
        items: [
          "Strategic grain reserves and buffer stocks",
          "National food ration and subsidy programs",
          "Emergency food aid coordination",
          "Monitoring of food market trends and supply chains",
        ],
      },
    ],
    closing:
      "As a key stakeholder in food policy and public welfare, the Ministry works closely with national agencies, NGOs, and international partners such as the World Food Programme (WFP) and FAO. Our engagement includes the supply and installation of critical infrastructure, equipment, and systems that support efficient grain handling, monitoring, and logistical operations.",
  },
  {
    slug: "security-printing-organizations",
    title: "Security Printing Organizations",
    short: "Supporting the producers of passports, ID cards, currency and other high-security documents.",
    image: "/images/industry-security-printing.png",
    imageKind: "logo",
    intro: [
      "Security Printing Organizations are specialized entities entrusted with producing high-security documents for government agencies and national institutions. They use cutting-edge technology and advanced printing methods to produce passports, national identity cards, currency notes, postage stamps, bond certificates, and other sensitive materials.",
      "Their operations are governed by stringent security protocols to ensure that all printed items resist counterfeiting and tampering, incorporating features such as watermarks, holograms, microprinting, and UV printing.",
      "Beyond government-issued documents, these organizations work with banks, financial institutions, and other sectors that require secure printing, including documents used in international trade such as customs declarations and security bonds.",
    ],
    sections: [],
    closing:
      "These organizations continuously innovate, adopting technologies like digital printing and encryption, to stay ahead of evolving security threats, contributing to the country's social and economic stability and to public confidence in national institutions.",
  },
  {
    slug: "bangladesh-biman-caab",
    title: "Bangladesh Biman & CAAB",
    short: "Serving the national airline and the Civil Aviation Authority of Bangladesh.",
    image: "/images/industry-caab.png",
    imageKind: "logo",
    intro: [
      "Bangladesh Biman and the Civil Aviation Authority of Bangladesh (CAAB) are pivotal organizations in the country's aviation sector. Biman, the national airline, provides domestic and international air travel, connecting Bangladesh with key global destinations and facilitating economic growth through tourism, trade, and remittances.",
      "CAAB is the regulatory body overseeing the safety, security, and efficiency of the country's airports, air traffic management, and aviation infrastructure, ensuring compliance with international aviation standards, improving airport facilities, and managing air traffic for safe and timely operations.",
    ],
    sections: [],
    closing:
      "Together, these organizations are at the heart of Bangladesh's growing aviation industry, contributing significantly to the nation's connectivity and its integration into the global economy.",
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
