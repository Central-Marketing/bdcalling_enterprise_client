// Privacy Policy content. Describes what this website actually collects (see /api/contact and the
// contact page). Have it reviewed by your legal advisor and update it whenever data handling changes.
import { site } from "./site";

export const privacyUpdated = "November 9, 2026";

import type { LegalSection } from "@/components/LegalDocument";

export const privacyIntro = `This Privacy Policy explains how ${site.name} ("we", "us", "our") collects, uses and protects personal information when you visit ${new URL(site.url).host} or contact us through it. By using this website, you agree to the practices described here.`;

export const privacySections: LegalSection[] = [
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: [
      "We only collect information that you choose to give us, plus a small amount of technical information needed to run the website securely.",
      {
        list: [
          "Contact and consultation forms: your name, email address, and, if you provide them, your company name, phone number, the service you are interested in, the subject and your message.",
          "Technical information sent with a form: your IP address, browser type (user agent) and the page you submitted the form from. We use this to prevent spam and abuse.",
          "Direct communication: information you share when you email or call us.",
        ],
      },
      "We do not ask for, and ask that you do not send, sensitive personal information (such as national ID numbers, financial account details or health information) through the website.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How we use your information",
    body: [
      {
        list: [
          "To respond to your enquiry or consultation request and provide the services you ask about.",
          "To prepare proposals, tender support, quotations or other information you request.",
          "To keep records of our communication with you.",
          "To protect the website against spam, fraud and misuse.",
          "To comply with legal, regulatory and accounting obligations.",
        ],
      },
      "We do not sell your personal information, and we do not use it for automated decision-making or profiling.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and tracking",
    body: [
      "This website does not use advertising or analytics cookies and does not track you across other websites. Our fonts and images are served from our own website.",
      "Our Contact page includes an embedded Google Map so you can find our office. When that map loads, Google may set its own cookies and collect information under the Google Privacy Policy (policies.google.com/privacy). You can avoid this by not loading the Contact page map or by blocking third-party cookies in your browser.",
    ],
  },
  {
    id: "sharing",
    title: "How we share information",
    body: [
      "We share personal information only where necessary:",
      {
        list: [
          "Service providers who host our website and database on our behalf, under appropriate confidentiality and security obligations.",
          "Manufacturers (OEMs), suppliers or logistics partners, only when needed to fulfil a request you have made, and only the information they need.",
          "Government or regulatory authorities, where required by law or as part of a procurement process you have asked us to support.",
          "Professional advisors such as lawyers and auditors, under confidentiality.",
        ],
      },
    ],
  },
  {
    id: "storage-security",
    title: "Data storage and security",
    body: [
      "Form submissions are stored in a secure cloud database operated by our service provider, which may be located outside Bangladesh. Access is restricted to authorised staff who need it to respond to you.",
      "We use encrypted connections (HTTPS) and reasonable technical and organisational measures to protect your information. No method of transmission or storage is completely secure, but we work to protect your data and will act promptly if a security issue occurs.",
    ],
  },
  {
    id: "retention",
    title: "How long we keep information",
    body: [
      "We keep enquiry and consultation records for as long as needed to respond to you and manage any resulting business relationship, and generally for no longer than 24 months after our last contact, unless a longer period is required by law, contract or an ongoing procurement process. After that, we delete or anonymise it.",
    ],
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: [
      "You can contact us at any time to:",
      {
        list: [
          "Ask what personal information we hold about you.",
          "Ask us to correct information that is inaccurate or incomplete.",
          "Ask us to delete your information, where we are not required to keep it.",
          "Object to or ask us to stop using your information for a particular purpose.",
        ],
      },
      `To make a request, email ${site.email}. We may need to confirm your identity before acting on a request, and we aim to respond within 30 days.`,
    ],
  },
  {
    id: "third-party-links",
    title: "Links to other websites",
    body: [
      "Our website links to other sites, such as our social media pages and government procurement portals. We are not responsible for the privacy practices of those sites, and we encourage you to read their privacy policies.",
    ],
  },
  {
    id: "children",
    title: "Children's privacy",
    body: [
      "This website is intended for businesses and organisations. It is not directed at children, and we do not knowingly collect personal information from anyone under 18.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time. The \"Last updated\" date at the top of this page shows when it was last changed. Significant changes will be highlighted on this page.",
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    body: [
      "If you have any questions about this Privacy Policy or how we handle your information, please contact us:",
      { list: [`${site.name}`, site.address, `Email: ${site.email}`, `Phone: ${site.phone}`] },
    ],
  },
];
