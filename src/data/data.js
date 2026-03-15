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
  { number: "1+", label: "Years Experience" },
  { number: "3",  label: "Projects Built"   },
];

export const skills = [
  {
    icon: "⚛️",
    title: "Frontend",
    tags: ["React.js","Next.js","JavaScript","HTML5","CSS3","Tailwind CSS","Material UI","Responsive Design"],
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
    period: "March 2025 ",
    location: "Tirunelveli, Tamil Nadu",
    points: [
      "Built and maintained a full stack POS system with billing, order management, tax calculation, stock tracking and daily closing reports using React.js, Node.js and MongoDB",
      "Developed secure REST APIs with JWT authentication and role-based access control for ADMIN and OPERATOR roles",
      "Built sales report APIs with date filters, order-type grouping (LINE, PARCEL, AC, HD, SWIGGY) and unit-wise quantity tracking (KG, G, PCS)",
      "Implemented payment integration supporting CASH, CARD and UPI with balance calculation and refund processing",
      "Developed stock management system with daily tracking, sold quantity calculation and low stock alerts",
      "Contributed to Temple Management System with Archanai, Prasadam bookings and admin dashboard",
      "Built responsive UI components using Material UI and Tailwind CSS for cross-device compatibility",
    ],
    tags: ["React.js","Node.js","MongoDB","Express.js","JWT","Material UI","Tailwind CSS"],
  },
];

export const projects = [
  {
    id: "01",
    title: "POS System",
    type: "Full Stack",
    featured: true,
    desc: "A complete Point of Sale system for restaurant management. Handles everything from order creation to payment processing and sales analytics.",
    features: [
      "Developed responsive frontend interfaces for billing, menu management, and order processing.",
      "Implemented real-time order updates and stock tracking through API integration.",
      "Designed reusable UI components using Material UI for improved performance and maintainability.",
      "Sales reports with date filters and order-type grouping",
      "Stock management with daily tracking and alerts",
      "Integrated tax calculation and daily closing report features",
       "Collaborated with backend developers to ensure seamless API communication and data accuracy."
    ],
    tech: ["React.js","Node.js","MongoDB","Express.js","Tailwind CSS","Material UI"],
    github: "https://github.com/venkatesh20502",
    live: "",
  },
  {
    id: "02",
    title: "Papanasanathar Temple Website",
    type: "Backend",
    featured: false,
    desc: "Full stack temple management platform managing events, donations, bookings and admin operations with secure APIs.",
    features: [
      "Developed backend architecture for the official temple website to manage events, images, donations, and homepage content.",
      "Designed and implemented secure RESTful APIs with proper routing and controller structure",
      "Built dynamic CRUD operations for managing events, news, and announcements",
      "Implemented authentication and role-based access for admin operations.",
      "Optimized database queries and structured MongoDB collections for efficient data handling.",
    ],
    tech: ["Node.js","Express.js","MongoDB","JWT","React.js"],
    github: "https://github.com/venkatesh20502",
    live: "",
  },
  {
    id: "03",
    title: "Mandir Management System",
    type: "Full Stack",
    featured: false,
    desc: "Complete admin dashboard for managing temple operations including Archanai, Prasadam, Donations, Hall and Annadhanam bookings.",
    features: [
     "Built a complete admin dashboard for managing Archanai, Donations, Prasadam, Ubayam, Hall, and Annadhanam bookings.",
     "Developed dynamic booking management interfaces with real-time data updates0.",
     "Created fully responsive UI layouts using Tailwind CSS for cross-device compatibility.",
     "Integrated authentication and protected routes for secure admin access.",
     "Improved operational workflow by implementing user-friendly counter and admin modules.",
    ],
    tech: ["React.js","Node.js","MongoDB","Tailwind CSS","JWT"],
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
