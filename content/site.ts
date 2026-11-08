/**
 * Everything on the page comes from this file. To make the site yours, edit the values here;
 * you shouldn't need to touch the components.
 */

export type LiveProject = {
  name: string;
  url: string;
  domain: string;
  desc: string;
  tags: string[];
  metric: string;
};

export type RoadmapItem = { text: string; done: boolean };

export type BuildingProject = {
  name: string;
  url: string;
  domain: string;
  desc: string;
  stage: string;
  eta: string;
  /** 0 to 100. */
  pct: number;
  /** The first item that isn't done is shown as "current". */
  roadmap: RoadmapItem[];
};

export type TimelineItem = { when: string; role: string; org: string; desc: string };

export const site = {
  /** Used for the page title, the footer and the nav. */
  name: "Ali Alnujaidi",
  handle: "ali-alnujaidi",
  promptUser: "ali@dev",
  url: "https://alialnujaidi.com",
  metaDescription:
    "Full-stack software engineer in Riyadh. I build products end-to-end and run them in production.",

  headline: "Hi, I'm Ali. I build products end-to-end and run them in production",
  lede: "Full-stack software engineer based in Riyadh, working across web, mobile and the cloud underneath. Co-founder & CTO of a fintech startup. Some of my products are live, and some are still being built.",
  status: "open to collaborations",

  about: [
    "I'm a software engineer (B.Sc., KFUPM) who likes owning the whole thing: design, build, deploy, and the dashboards that tell me when something's off. I've shipped with Next.js, React Native, NestJS, ASP.NET Core and Spring Boot, on Azure and Cloudflare.",
    "By day I look after CEER Motors' digital channels. Outside that I build my own products and lead engineering at Ayo, an earned-wage access platform, where I work with a team of AI agents that handle analysis, implementation and review.",
  ],

  stack: {
    frontend: ["Next.js", "React Native", "Angular"],
    backend: ["NestJS", "ASP.NET Core", "Spring Boot"],
    data: ["PostgreSQL", "MySQL", "MongoDB"],
    cloud: ["Azure", "Cloudflare", "Docker", "K8s"],
    observe: ["Grafana", "Azure Monitor", "Sentry"],
  } as Record<string, string[]>,

  live: [
    {
      name: "Hoof",
      url: "https://hooof.app",
      domain: "hooof.app",
      desc: "Stable management for horse owners and their teams in Saudi Arabia. Feed, medication, vet and farrier visits, expenses, and a shared daily list. Arabic-first.",
      tags: ["React Native", "Expo", "NestJS"],
      metric: "37 accounts · 27 horses in week 1",
    },
    {
      name: "Nbta",
      url: "https://nbta.app",
      domain: "nbta.app",
      desc: "AI plant care for the Gulf. Photo diagnosis, care reminders and a library of 45 plants, tuned for local heat and indoor AC. Arabic-first.",
      tags: ["React Native", "Expo", "NestJS", "Claude vision"],
      metric: "just launched on the App Store",
    },
  ] as LiveProject[],

  building: [
    {
      name: "Ayo",
      stage: "private beta",
      eta: "TBD",
      pct: 80,
      url: "https://tryayo.co",
      domain: "tryayo.co",
      desc: "Earned wage access for employees in Saudi Arabia. In private beta with real money, manual review and payouts. I co-founded it and built it end-to-end as CTO.",
      roadmap: [
        { text: "Platform revamp", done: true },
        { text: "Private beta", done: true },
        { text: "QA batches 1 and 2", done: true },
        { text: "Nafath and bank integrations", done: false },
        { text: "Public launch", done: false },
      ],
    },
    {
      name: "Rattib",
      stage: "testflight",
      eta: "Q1 2027",
      pct: 70,
      url: "https://rattib.alialnujaidi.com",
      domain: "rattib.alialnujaidi.com",
      desc: "Personal life management for Saudi Arabia: reminders, medicine, document expiry, expenses, bills, subscriptions and budgets in one place.",
      roadmap: [
        { text: "v1 core app", done: true },
        { text: "TestFlight", done: true },
        { text: "v1.1 features", done: false },
        { text: "App Store launch", done: false },
      ],
    },
    {
      name: "Mifak",
      stage: "testflight",
      eta: "Q1 2027",
      pct: 70,
      url: "https://mifak.app",
      domain: "mifak.app",
      desc: "Booking platform for car workshops in Saudi Arabia: a customer app plus a workshop dashboard with notifications and reminders.",
      roadmap: [
        { text: "API and dashboard", done: true },
        { text: "Customer app on TestFlight", done: true },
        { text: "Workshop onboarding", done: false },
        { text: "Public launch", done: false },
      ],
    },
    {
      name: "Riwaq",
      stage: "in development",
      eta: "TBD",
      pct: 50,
      url: "https://riwaqq.com",
      domain: "riwaqq.com",
      desc: "Marketplace for Saudi brands, with a storefront and brand onboarding. Built on Next.js, NestJS and Cloudflare.",
      roadmap: [
        { text: "Storefront and backend", done: true },
        { text: "Cloudflare migration", done: true },
        { text: "Catalog fixes", done: false },
        { text: "Brand onboarding and launch", done: false },
      ],
    },
  ] as BuildingProject[],

  timeline: [
    {
      when: "2026 — now",
      role: "Digital Channels Development Specialist",
      org: "CEER Motors",
      desc: "Run the corporate web estate on Azure Container Apps and Cloudflare, set up observability with Azure Monitor and Grafana, and own integrations with Auth0, SAP and payment gateways.",
    },
    {
      when: "2024 — 26",
      role: "Web Developer",
      org: "THIQAH",
      desc: "Built modular ASP.NET Core services on the ABP Framework and Angular UIs from Figma, shipping user stories across the full stack.",
    },
    {
      when: "2024",
      role: "Software Engineer",
      org: "Ebana",
      desc: "Designed GraphQL schemas, implemented event sourcing, and built Spring Boot services with React front-ends, containerised with Docker.",
    },
    {
      when: "2018 — 24",
      role: "B.Sc. Software Engineering",
      org: "KFUPM",
      desc: "King Fahd University of Petroleum and Minerals, Second Honors. Plus a Full Stack JavaScript Nanodegree from Udacity.",
    },
  ] as TimelineItem[],

  contact: {
    headline: "Building something, or want to try one of mine? Say hi.",
    email: "ali.alnujaidi4@gmail.com",
    socials: [
      { label: "github", url: "https://github.com/AliAlnujaidi" },
      { label: "linkedin", url: "https://linkedin.com/in/AliAlnujaidi" },
    ],
  },

  footerRight: "built & shipped by me · exit 0",
};
