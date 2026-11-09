// All company-wide content, scraped from bdcallingenterprise.com (WordPress). Edit here.

export const site = {
  name: "Bdcalling Enterprise",
  tagline: "Government Procurement & Supply Solutions",
  url: "https://bdcallingenterprise.com",
  description:
    "Bdcalling Enterprise specializes in government procurement, OEM spare parts indenting, RFQ management and turnkey supply solutions for Bangladesh's power, energy and infrastructure sectors.",
  email: "info@bdcallingenterprise.com",
  phone: "01335202929",
  phoneIntl: "+8801335202929",
  // Shown in the old site's top bar; confirm which number should be public
  phoneAlt: "+8801977259912",
  address:
    "Daisy Garden, House 14 (Level-3), Block A, Main Road, Banasree, Dhaka 1219, Bangladesh",
  hours: [
    { days: "Saturday – Thursday", time: "9:00 AM – 6:00 PM" },
    { days: "Friday", time: "Closed" },
  ],
  social: {
    facebook: "https://www.facebook.com/bdcalling.enterprise",
    linkedin: "https://www.linkedin.com/company/bdcalling-enterprise/",
    instagram: "https://www.instagram.com/bdcallingenterprise/",
  },
  // Structured address for search engines (schema.org PostalAddress)
  addressParts: {
    street: "Daisy Garden, House 14 (Level-3), Block A, Main Road, Banasree",
    city: "Dhaka",
    postalCode: "1219",
    region: "Dhaka Division",
    country: "BD",
  },
  // Approximate coordinates for Banasree, Dhaka. Verify against the office pin on Google Maps.
  geo: { lat: 23.7631, lng: 90.4291 },
  // schema.org openingHours format
  openingHours: { days: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"], opens: "09:00", closes: "18:00" },
  areaServed: "Bangladesh",
  locale: "en_BD",
  keywords: [
    "government procurement Bangladesh",
    "e-GP tender support",
    "RFQ management",
    "OEM spare parts indenting",
    "turnkey supply and installation",
    "power plant spare parts Bangladesh",
    "tender bid documentation",
    "procurement compliance Bangladesh",
    "Bdcalling Enterprise",
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about-us",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "Leadership & Oversight", href: "/leadership-oversight" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries-we-serve" },
  { label: "Contact", href: "/contact-us" },
];

export const about = {
  focus: ["Procurement", "Government Tenders", "OEM Supply Solutions"],
  intro:
    "Bdcalling Enterprise specializes in government procurement, OEM spare parts indenting, RFQ management and turnkey supply solutions. Backed by strong corporate governance and strategic leadership, we serve Bangladesh's power, energy, and infrastructure sectors with integrity and precision.",
  achievement: "Premium Solutions & 100% Spotless Results",
};

export const pillars = [
  { title: "Excellency", text: "We bring operational excellence to every engagement." },
  { title: "Expertise", text: "We bring the expertise of public procurement with professional global advisors." },
  { title: "Engagement", text: "We provide strong e-GP, RFQ, and OEM partner engagement." },
  { title: "Reliability", text: "We aim to serve reliable, compliant and delivery-focused execution." },
];

export const servicesIntro = {
  title: "Your growth, our priority: premium services that deliver.",
  text: "We're committed to excellence in everything we do. As your trusted partner, we go above and beyond to exceed expectations. Your satisfaction drives us as we grow and succeed together.",
};

export const industriesIntro = {
  title: "Delivering impact where it matters most.",
  text: "We collaborate with essential government bodies and national sectors to deliver purpose-driven solutions that improve systems, drive innovation, and meet the country's evolving needs. Our expertise lies in ensuring compliant, timely, and effective execution across diverse industries.",
  lead: "We aim to serve the following government procurement entities:",
};

export const leadershipIntro =
  "Supported by our Dhaka, USA & Dubai-based procurement and documentation team.";

export const leaders = [
  {
    name: "Shahidul Islam",
    role: "Director, Business Development",
    image: "/images/leader-shahidul-cutout.png" as string | null,
    bio: "An experienced procurement and supply chain specialist, Shahidul Islam brings over 15 years of expertise in managing government RFQs, public-sector partnerships, and OEM sourcing. With a strong network across Bangladeshi ministries and procurement agencies, he drives the operational direction of Bdcalling Enterprise, ensuring continuous international coordination and best-in-class tender execution.",
  },
];

export const contactIntro = {
  title: "Have questions or need assistance?",
  text: "Bdcalling Enterprise is here to help. Reach out today for reliable solutions and expert support. We're here to answer your questions and provide the support you need.",
};
