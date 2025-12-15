export type Bursary = {
  slug: string;
  title: string;
  blurb: string;
  details: string[];
  applyUrl: string;
};

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const bursaries: Bursary[] = [
  {
    title: "National Student Financial Aid Scheme (NSFAS)",
    slug: slugify("National Student Financial Aid Scheme (NSFAS)"),
    blurb: "Government support for students from low-income households.",
    details: [
      "Eligibility: SA citizens; combined household income < R350,000/year",
      "Covers: Full tuition, accommodation, meals, transport, learning materials",
      "Application Window: September–November annually",
      "Requirement: Maintain satisfactory academic progress",
    ],
    applyUrl: "https://www.nsfas.org.za/content/how-to-apply.html",
  },
  {
    title: "Funza Lushaka Bursary Programme",
    slug: slugify("Funza Lushaka Bursary Programme"),
    blurb: "Full-cost bursary supporting teaching qualifications with a service commitment.",
    details: [
      "Fields: Teaching (Foundation, Intermediate, Senior/FET)",
      "Priority: Mathematics, Physical Science, Technology, African Languages",
      "Service Agreement: Teach one year for each funded year",
      "Support: Mentorship and teaching practice assistance",
    ],
    applyUrl: "https://www.funzalushaka.doe.gov.za/Home/FirstTime",
  },
  {
    title: "Sasol Bursary Programme",
    slug: slugify("Sasol Bursary Programme"),
    blurb: "Comprehensive support with practical work experience.",
    details: [
      "Fields: Chemical/Mechanical Engineering, Data Science, Accounting",
      "Includes: Tuition, residence fees, book allowance, monthly stipend",
      "Work Experience: Compulsory vacation work & potential employment",
      "Competitiveness: Typically require 70%+ academic average",
    ],
    applyUrl: "https://www.sasolbursaries.com/welcome/sasol-foundation-bursaries/",
  },
  {
    title: "Investec Bursary Programme",
    slug: slugify("Investec Bursary Programme"),
    blurb: "Targets high-achieving students in finance and tech.",
    details: [
      "Fields: Chartered Accounting, Actuarial Science, IT, Finance",
      "Features: Leadership development, networking, mentoring",
      "Selection: Academic excellence (~75%+), need, leadership",
    ],
    applyUrl: "https://www.investec.com/en_za/welcome-to-investec/sustainability/our-community/bursaries.html",
  },
  {
    title: "Standard Bank Bursary",
    slug: slugify("Standard Bank Bursary"),
    blurb: "Developing diverse talent for Africa's banking future.",
    details: [
      "Fields: IT, Data Analytics, Finance, Economics, Marketing",
      "Focus: Transformation, excellence, digital innovation",
      "Opportunities: Vacation work & graduate programmes",
    ],
    applyUrl: "https://www.standardbank.com/sbg/standard-bank-group/careers/early-careers/bursaries",
  },
  {
    title: "Absa Bursary Programme",
    slug: slugify("Absa Bursary Programme"),
    blurb: "Building Africa's next generation of banking professionals.",
    details: [
      "Fields: Finance, Accounting, IT, Mathematics, Statistics",
      "Package: Tuition, accommodation, meal allowance, laptop",
      "Career: Priority for Absa graduate programmes",
    ],
    applyUrl: "https://www.absa.co.za/about-us/careers/students-and-graduates/",
  },
  {
    title: "Anglo American Bursary",
    slug: slugify("Anglo American Bursary"),
    blurb: "Mining innovation and sustainable resource development.",
    details: [
      "Fields: Mining Engineering, Geology, Metallurgy, Environmental Science",
      "Includes: Tuition, accommodation, books, mentorship",
      "Experience: Structured vacation work; potential global exposure",
      "Global Opportunities: Potential international exposure and training",
    ],
    applyUrl: "https://www.angloamerican.com/careers/students-and-graduates",
  },
  {
    title: "Eskom Bursary Scheme",
    slug: slugify("Eskom Bursary Scheme"),
    blurb: "Developing critical skills for South Africa's energy future.",
    details: [
      "Fields: Electrical/Mechanical Engineering, Nuclear Physics",
      "Critical Skills: Focus on disciplines essential for energy security",
      "Benefits: Stipend, paid vacation work, employment opportunities",
    ],
    applyUrl: "https://www.eskom.co.za/careers/bursaries/",
  },
  {
    title: "Mandela Rhodes Foundation Scholarship",
    slug: slugify("Mandela Rhodes Foundation Scholarship"),
    blurb: "Prestigious postgraduate scholarship for ethical leadership.",
    details: [
      "Level: Honours and Masters",
      "Criteria: Excellence, leadership, reconciliation, entrepreneurship",
      "Programme: Leadership development & mentoring",
      "Prestige: Highly competitive and respected across Africa",
    ],
    applyUrl: "https://www.mandelarhodes.org/scholarship/",
  },
  {
    title: "Allan Gray Orbis Foundation",
    slug: slugify("Allan Gray Orbis Foundation"),
    blurb: "Cultivates entrepreneurial leadership in SA.",
    details: [
      "Eligibility: Grade 12 & 1st-year university",
      "Support: Tuition, allowance, laptop, entrepreneurial development",
      "Network: Mentors & like-minded peers",
    ],
    applyUrl: "https://allangrayorbis.org/programmes/scholarship/",
  },
  {
    title: "Nedbank Bursary",
    slug: slugify("Nedbank Bursary"),
    blurb: "Supports careers in finance and technology.",
    details: [
      "Fields: BCom Accounting, IT, Data Science",
      "Highlights: Tuition coverage & academic support",
    ],
    applyUrl: "https://www.nedbank.co.za/content/nedbank/desktop/gt/en/aboutus/about-nedbank-group/careers/students-and-graduates.html",
  },
  {
    title: "Old Mutual Bursary",
    slug: slugify("Old Mutual Bursary"),
    blurb: "Invests in analytically strong students.",
    details: [
      "Fields: Actuarial Science, Finance, IT",
      "Highlights: Mentorship, vacation work, graduate opportunities",
    ],
    applyUrl: "https://www.oldmutual.co.za/careers/students-graduates/",
  },
  {
    title: "Transnet Bursary",
    slug: slugify("Transnet Bursary"),
    blurb: "Build SA’s transport & logistics sector.",
    details: [
      "Fields: Engineering, Logistics, Supply Chain",
      "Highlights: Practical training & work exposure",
    ],
    applyUrl: "https://www.transnet.net/Careers/Bursaries/Pages/Home.aspx",
  },
  {
    title: "Discovery Bursary",
    slug: slugify("Discovery Bursary"),
    blurb: "For careers in health sciences & tech.",
    details: [
      "Fields: Actuarial Science, Data Analytics, Health Sciences",
      "Highlights: Innovation, wellness, leadership development",
    ],
    applyUrl: "https://www.discovery.co.za/corporate/careers-students-and-graduates",
  },
  {
    title: "Shoprite Bursary",
    slug: slugify("Shoprite Bursary"),
    blurb: "Grow in retail and supply chain sectors.",
    details: [
      "Fields: Retail Management, Supply Chain, Commerce",
      "Highlights: Guaranteed job placement for top performers",
    ],
    applyUrl: "https://www.shopriteholdings.co.za/careers/bursaries.html",
  },
  {
    title: "MTN Foundation Bursary",
    slug: slugify("MTN Foundation Bursary"),
    blurb: "Aligned with SA’s digital future.",
    details: [
      "Fields: IT, Engineering, Commerce, Data Science",
      "Highlights: Mentorship and graduate programme opportunities",
    ],
    applyUrl: "https://www.mtn.co.za/about-mtn/careers/students-and-graduates",
  },
  {
    title: "FNB Fund Bursary",
    slug: slugify("FNB Fund Bursary"),
    blurb: "Invests in innovation-driven careers.",
    details: [
      "Fields: IT, Commerce, Engineering, Data Science",
      "Highlights: Emphasis on digital skills & future-focused learning",
    ],
    applyUrl: "https://www.fnb.co.za/about-fnb/careers/students-graduates.html",
  },
];