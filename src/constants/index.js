import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  amnex,
  varni,
  chatbot,
  amazon,
  nutriscan,
  azure,
  python,
  aws,
  express,
  django,
  whissle,
  languagetutor,
  deepplaylist,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Next.js Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "python",
    icon: python,
  },
  {
    name: "django",
    icon: django,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "azure",
    icon: azure,
  },
  // {
  //   name: "express",
  //   icon: express,
  // },
];

const experiences = [
  {
    title: "Founding Software Engineer",
    company_name: "Whissle INC",
    icon: whissle,
    iconBg: "#383E56",
    date: "September 2024 - Present",
    points: [
      "Architected real-time audio streaming pipeline with WebSocket integration handling Twilio calls and web clients, processing diverse audio formats (mu-law, raw chunks) with sub-200ms latency for 2000+ concurrent sessions",
      "Implemented text summarization service with retry logic managing external API timeouts and usage tracking, reducing processing failures by 85% through intelligent error recovery",
      "Integrated Stripe payment processing handling $50K+ monthly transactions with 99.9% accuracy",
      "Designed transactional credit management system with atomic database operations, granular per-service pricing calculations, and credit threshold enforcement middleware preventing service overuse",
      "Implemented voice-to-voice conversation pipeline chaining Speech-to-Text → LLM → Text-to-Speech in real-time, ensuring seamless data transfer and comprehensive error handling across multiple AI services",
      "Created comprehensive usage tracking infrastructure logging detailed service metrics (transcription, TTS, translation, chat) including input/output units, processing time, and model usage for billing analytics managing $50K+ monthly transactions",
      "Developed RESTful APIs using Node.js and Express, deployed backend server on AWS EC2, with DynamoDB database and AWS S3 storage",
      "Conducted user research, designed dashboards in Figma, created UX frameworks, personas, journey maps, wireframes, and prototypes",
      "Developed dynamic real-time transcript visualization with client-side NER entity colorization, emotion/intent detection, and age/gender analysis providing rich interactive user experience",
      "Built secure API gateway patterns with authentication middleware and rate limiting, protecting backend services from 500+ daily malicious requests while maintaining 99.9% legitimate traffic flow",
      "Integrated Google Cloud Storage with secure file handling using multer middleware for efficient uploads, stream processing, filename sanitization, and public URL generation for audio/JSON files",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Varni Technology",
    icon: varni,
    iconBg: "#383E56",
    date: "July 2021 - July 2022",
    points: [
      "Developed scalable, responsive web applications using Vue.js and Node.js, improving application speed and supporting over 20,000 active users across desktop and mobile.",
      "Engineered backend services and database schemas with MongoDB, optimizing data access and reducing API response time by 35%.",
      "Integrated Stripe for automated subscription billing, utilizing webhooks and retry logic to achieve 99.5% transaction accuracy and reduce failed payments.",
      "Built secure, modular RESTful APIs and implemented role-based access control (RBAC) to ensure data privacy and enable content delivery.",
    ],
  },

  {
    title: "Full Stack Developer",
    company_name: "Amnex Infotechnologies",
    icon: amnex,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - June 2021",
    points: [
      "Streamlined and maintained a cross-platform mobile application using React Native and Expo Go, delivering seamless UX with 99.9% uptime for over 10,000+ users.",
      "Collaborated with product and QA teams to implement new feature rollouts and user feedback loops, resulting in a 25% improvement in app usability and customer satisfaction.",
      "Deployed and scaled applications using AWS (EC2, S3, Route 53), maintaining 99.99% uptime during a 50% year-over-year traffic increase.",
      "Created reusable front-end components and optimized mobile performance, reducing app load time by 40% and improving retention rates.",
    ],
  },

  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Video AI Tutor",
    description:
      "AI-powered language learning application featuring an intelligent avatar that teaches fluent English through real-time video interaction. Combines Azure Speech Services, OpenAI GPT, and Tavus AI for personalized coaching with instant pronunciation feedback, structured learning phases, and real-time speech analysis achieving 85% accuracy threshold.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Azure AI",
        color: "pink-text-gradient",
      },
      {
        name: "OpenAI GPT",
        color: "orange-text-gradient",
      },
      {
        name: "Tavus AI",
        color: "purple-text-gradient",
      },
    ],
    image: languagetutor, // You can replace this with a language tutor image later
    source_code_Link:
      "https://github.com/vatsal4545/fluent-ai-avatar-chat-9f2c5efb",
  },
  {
    name: "DeepPlayList",
    description:
      "AI-Powered Book-to-Music Playlist Generator that analyzes books using Google Gemini AI 2.0 Flash to create contextually relevant music playlists. Features dual music API integration (Spotify & YouTube), intelligent book analysis with 96% accuracy, and real-time playlist generation based on themes, characters, and emotional content.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "React Native",
        color: "pink-text-gradient",
      },
      {
        name: "Gemini AI",
        color: "orange-text-gradient",
      },
      {
        name: "Firestore",
        color: "purple-text-gradient",
      },
    ],
    image: deepplaylist, // You can replace this with a deepplaylist image later
    source_code_Link: "https://github.com/WhissleAI/DeepPlaylistApp",
    backend_link: "https://github.com/WhissleAI/deep-playlist",
    demo_link: "https://music.whissle.ai/",
  },
  {
    name: "NutriScan",
    description:
      "A full-stack food classification system with Python backend API and React Native mobile app. Uses TensorFlow Lite neural network to predict Nutri-Score healthiness classes from barcode scans. Features real-time camera barcode detection, nutrition analysis, and health recommendations.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "pink-text-gradient",
      },
      {
        name: "API",
        color: "orange-text-gradient",
      },
    ],
    image: nutriscan,
    source_code_Link: "https://github.com/vatsal4545/Nutri-front",
    backend_link: "https://github.com/vatsal4545/Nutri-back",
    demo_link: "https://youtu.be/tq8Xhff16W0",
  },
];

export { services, technologies, experiences, testimonials, projects };
