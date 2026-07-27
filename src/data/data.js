export const profile = {
  name: "Venkatesh B",
  role: "Full Stack Developer",
  email: "bvenkatesh0502@gmail.com",
  phone: "+91 8012090611",
  location: "Tirunelveli, Tamil Nadu",
  linkedin: "https://linkedin.com/in/venkatesh20502",
  github: "https://github.com/venkatesh20502",
  summary:
    "Full Stack Developer with 1 year of experience building production-ready web applications using Node.js, React.js and MongoDB. Passionate about building real-world systems that solve actual problems.",
};

export const stats = [
  { number: "1.5+", label: "Years Experience" },
  { number: "3",  label: "Projects Built"   },
];

export const skills = [
  {
    icon: "⚛️",
    title: "Frontend",
    tags: ["HTML","CSS","JavaScript","React.js","Next.js","Tailwind CSS","Material UI"],
  },
  {
    icon: "⚙️",
    title: "Backend",
    tags: ["Node.js","Express.js","REST API",],
  },
  {
    icon: "🗄️",
    title: "Database",
    tags: ["MongoDB"],
  },
  {
    icon: "🔧",
    title: "Tools",
    tags: ["Git","GitHub","Postman","VS Code"],
  },
];

export const experience = [
  {
    company: "Sentinix Tech Solutions",
    role: "Full Stack Developer",
    period: "March 2025 - July 2026",
    location: "Tirunelveli, Tamil Nadu",
    points: [
      "Developed and maintained enterprise web applications including NIX POS, NIX Temple Tech and Kanora using React.js, Node.js, Express.js and MongoDB.",
      "Built frontend and backend modules by integrating REST APIs and implementing business requirements.",
      "Developed features for restaurant billing, temple booking management, quotation and invoice generation, inventory tracking, reports and GST calculation.",
      "Implemented JWT authentication, role-based access control and secure API integration.",
      "Collaborated with cross-functional teams to deliver scalable, responsive and user-friendly web applications while optimizing application performance."
    ],
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Material UI",
      "Tailwind CSS"
    ],
  },
];

export const projects = [
  {
    id: "01",
    title: "Nix POS – Restaurant Billing System",
    type: "Full Stack",
    featured: true,
    desc: "A complete restaurant Point of Sale (POS) system for billing, order management, inventory tracking and sales reporting.",
    features: [
      "Built a complete restaurant POS frontend with category-wise product listing, multi-location support and order management.",
      "Developed a billing interface with cart management, table and waiter selection, tax calculation and end-to-end order processing.",
      "Integrated REST APIs for real-time order updates, inventory tracking and sales data.",
      "Built admin modules for Categories, Products, Add-ons, Suppliers, Discounts and User Management.",
      "Implemented Sales Report, Stock Report, CashBook Report and Shift Closing modules with advanced date filtering."
    ],
    tech: [
      "React.js",
      "Material UI",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    github: "https://github.com/venkatesh20502",
    live: "",
  },

  {
    id: "02",
    title: "NIX Temple Tech – Temple Management Platform",
    type: "Full Stack",
    featured: false,
    desc: "A complete temple management platform for handling bookings, donations, reports and daily temple operations.",
    features: [
      "Built a complete temple management frontend with an Admin Dashboard displaying real-time booking statistics for Archanai, Donation, Prasadam, Ubayam, Hall and Annadhanam modules.",
      "Developed a cart-based Counter Dashboard with grouped categories, quantity management and multiple payment methods including Banking, PhonePe, UPI, Card and Cash.",
      "Integrated REST APIs with Node.js and MongoDB for booking management, reporting and real-time data updates.",
      "Implemented JWT authentication with role-based access control for Admin and Counter users.",
      "Built Daily Closing, Expenses Tracking, Reports and Site Settings modules."
    ],
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT"
    ],
    github: "https://github.com/venkatesh20502",
    live: "",
  },

  {
    id: "03",
    title: "Kanora – Billing & Quotation Management System",
    type: "Full Stack",
    featured: true,
    desc: "A GST-enabled billing and quotation management system with quotation-to-invoice conversion, inventory validation and multi-location support.",
    features: [
      "Built a quotation and invoice management system with auto-generated QUO/INV numbers, item-level GST calculation and support for Inclusive and Exclusive tax modes with real-time CGST/SGST breakdown.",
      "Developed one-click Quotation-to-Invoice conversion with automatic GST data carry-over, editable Tax Type and real-time total recalculation.",
      "Implemented a dynamic GST billing toggle to switch between GST and non-GST invoices with instant recalculation of taxes and net totals.",
      "Built real-time stock validation during invoice creation to prevent overselling by checking available inventory against existing invoices and daily stock entries.",
      "Implemented multi-location support with location-wise client and product filtering, automatically clearing invoice items when switching locations.",
      "Secured REST APIs using JWT authentication with company-wise data isolation for a multi-tenant architecture."
    ],
    tech: [
      "React.js",
      "Material UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT"
    ],
    github: "https://github.com/venkatesh20502",
    live: "",
  },
];

export const education = [
  {
    degree: "M.SC Computer Science",
    level: "Post Graduate",
    college: "ST. Xavier's College, Palayamkottai",
    university: "Manonmaniam Sundaranar University",
    year: "2022 — 2024",
    cgpa: "7.2",
  },
  {
    degree: "B.SC Computer Science",
    level: "Under Graduate",
    college: "ST. John's College, Palayamkottai",
    university: "Manonmaniam Sundaranar University",
    year: "2019 — 2022",
    cgpa: "7.82",
  },
];
