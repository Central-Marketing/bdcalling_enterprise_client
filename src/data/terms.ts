// Terms & Conditions for use of this website. Have it reviewed by your legal advisor before launch.
import type { LegalSection } from "@/components/LegalDocument";
import { site } from "./site";

export const termsUpdated = "November 9, 2026";

const host = new URL(site.url).host;

export const termsIntro = `These Terms & Conditions govern your use of ${host} (the "website"), operated by ${site.name} ("we", "us", "our"). By accessing or using the website, you agree to these terms. If you do not agree, please do not use the website.`;

export const termsSections: LegalSection[] = [
  {
    id: "about-the-website",
    title: "About this website",
    body: [
      `This website provides general information about ${site.name} and our government procurement, tender and RFQ support, OEM spare parts indenting, turnkey supply and installation, and compliance documentation services in Bangladesh.`,
      "The content is for general information only. It is not professional, legal or financial advice, and it should not be relied on as the basis for any procurement, bidding or investment decision.",
    ],
  },
  {
    id: "services-and-agreements",
    title: "Services and separate agreements",
    body: [
      "Nothing on this website is an offer, quotation or binding commitment to supply goods or services. Descriptions of services, sectors and capabilities are general and may change without notice.",
      "Any engagement with us, including tender support, OEM sourcing, supply or installation, is governed by a separate written quotation, proposal, purchase order or contract. If those documents conflict with these terms, the signed agreement takes priority.",
      "Product names, specifications and manufacturer (OEM) references are provided for identification only. Availability, pricing, lead times and warranties are confirmed only in a written quotation.",
    ],
  },
  {
    id: "enquiries",
    title: "Enquiries and form submissions",
    body: [
      "When you contact us or request a consultation through the website, you agree to:",
      {
        list: [
          "Provide accurate and complete information.",
          "Not submit information you do not have the right to share, including confidential tender documents belonging to others.",
          "Not use the forms to send spam, advertising, malicious code or unlawful content.",
        ],
      },
      "Submitting an enquiry does not create a client relationship or oblige us to provide any service. We handle the information you send as described in our Privacy Policy.",
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: [
      "You agree not to:",
      {
        list: [
          "Use the website in any way that breaks applicable law or regulation.",
          "Attempt to gain unauthorised access to the website, its servers, database or any connected system.",
          "Interfere with the website's operation, for example by introducing viruses or overloading it with automated requests.",
          "Copy, scrape or harvest content or contact details from the website for commercial purposes without our written permission.",
          "Impersonate us or misrepresent your relationship with us.",
        ],
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    body: [
      `All content on this website, including text, graphics, the ${site.name} name and logo, and page design, belongs to ${site.name} or its licensors and is protected by copyright and trademark law.`,
      "You may view and print pages for your own reference. You may not reproduce, modify, distribute or use our content or branding for commercial purposes without our prior written consent.",
      "Names and logos of government bodies, organisations and manufacturers shown on this website belong to their respective owners. Their appearance identifies the sectors we serve and does not imply endorsement.",
    ],
  },
  {
    id: "accuracy",
    title: "Accuracy of information",
    body: [
      "We work to keep the information on this website accurate and up to date, but we do not guarantee that it is complete, current or free of errors. Procurement rules, e-GP processes and regulatory requirements change, so always confirm important details with us or the relevant authority before acting on them.",
    ],
  },
  {
    id: "third-party-links",
    title: "Third-party links",
    body: [
      "The website may link to third-party websites, such as government procurement portals, manufacturers and social media. We do not control these websites and are not responsible for their content, availability or privacy practices. A link does not mean we endorse the website.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: [
      "The website is provided \"as is\" and \"as available\". To the fullest extent permitted by law, we make no warranties of any kind about the website or its content.",
      `To the fullest extent permitted by law, ${site.name} is not liable for any indirect, incidental or consequential loss, including loss of business, profit, data or tender opportunity, arising from your use of, or inability to use, the website or reliance on its content. Liability for services we provide is governed solely by the agreement for those services.`,
      "Nothing in these terms limits liability that cannot be limited under applicable law.",
    ],
  },
  {
    id: "indemnity",
    title: "Indemnity",
    body: [
      `You agree to indemnify ${site.name} against any claims, losses or costs arising from your breach of these terms or your misuse of the website.`,
    ],
  },
  {
    id: "governing-law",
    title: "Governing law",
    body: [
      "These terms are governed by the laws of the People's Republic of Bangladesh. Any dispute arising from them or from your use of the website is subject to the exclusive jurisdiction of the courts of Dhaka, Bangladesh.",
    ],
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: [
      "We may update these terms from time to time. The \"Last updated\" date at the top of this page shows when they last changed. Continuing to use the website after changes are posted means you accept the updated terms.",
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    body: [
      "If you have any questions about these Terms & Conditions, please contact us:",
      { list: [`${site.name}`, site.address, `Email: ${site.email}`, `Phone: ${site.phone}`] },
    ],
  },
];
