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
    title: "Full stack Developer",
    company_name: "Varni Technology",
    icon: varni,
    iconBg: "#383E56",
    date: "July 2021 - July 2022",
    points: [
      "Led development initiatives using Next.js, Three.js, and React Native, contributing to the successful delivery of custom applications for clients.",
      "Utilized JavaScript ES6 and asynchronous libraries, such as Datatables.js, to create dynamic and high-performance frontend features.",
      "Developed interactive user interfaces with HTML, CSS, and React, ensuring seamless user experiences and efficient data visualization.",
      "Implemented Azure AD for secure authentication and single sign-on capabilities, enhancing application security and user convenience.",
      "Designed and optimized Microsoft SQL Server databases, employing Entity Framework and T-SQL stored procedures for efficient data management.",
      "Collaborated with cross-functional teams on Azure DevOps Repos and GitHub, maintaining version control and enabling smooth code integration.",
      "Conducted comprehensive unit testing using MSTest, ensuring reliable and error-free code for robust software applications.",
      "Worked with clients to understand their requirements, translating business needs into functional and technical specifications.",
      "Leveraged MongoDB for efficient NoSQL database management, ensuring scalable and flexible data storage solutions.",
    ],
  },

  {
    title: "Full Stack Developer",
    company_name: "Amnex Infotechnologies",
    icon: amnex,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - June 2021",
    points: [
      "Spearheaded the development of mission-critical web applications using C#, .NET Core, and ASP.NET MVC, delivering seamless user experiences to customers.",
      "Utilized Visual Studio IDE and Git to manage version control, ensuring efficient collaboration and code management within the development team.",
      "Developed and executed unit tests using Xunit, maintaining code quality and enabling continuous integration with Azure DevOps Boards",
      "Collaborated on Azure DevOps Repos and GitHub for code repositories and continuous deployment, streamlining development workflows.",
      "Designed and maintained Microsoft SQL Server databases, implementing Entity Framework and T-SQL stored procedures for optimal data storage and retrieval.",
      "Implemented ETL processes, transforming and loading data efficiently, supporting robust business intelligence solutions.",
      "Created responsive and modern frontends with HTML, CSS, JavaScript, React, and Bootstrap, enhancing user interactions and visual appeal.",
      "Integrated OAuth 2.0 for secure user authentication and authorization, ensuring data privacy and compliance with industry standards.",
      "Leveraged Microsoft Azure services for hosting and managing applications in a scalable and secure cloud environment.",
      "Developed RESTful APIs with JSON format, extensively documented with Open API (Swagger), fostering clear communication between teams.",
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
    name: "Amazon Clone",
    description:
      "An Amazon clone website replicates Amazon's core features, offering product listings, shopping carts, payment options, and order tracking. It delivers a similar online shopping experience by emulating the essential functionalities and user interface of Amazon's e-commerce platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: amazon,
    source_code_Link: "https://github.com/vatsal4545/A-ZClone4545",
  },
  {
    name: "Ai-Chatbot",
    description:
      "An AI chatbot is a conversational tool that uses artificial intelligence to understand and generate human-like text. It helps users by answering questions, providing information, and engaging in natural dialogue, using natural language processing (NLP) to deliver context-aware responses.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "spline",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: chatbot,
    source_code_Link: "https://github.com/vatsal4545/Ai-Chatbot",
  },
  {
    name: "NutriScan",
    description:
      "This project combines a Python backend and a React Native frontend to classify food products using Nutri-Score values. It employs a TensorFlow Lite model to assess healthiness from barcode scans, with the mobile app facilitating easy product identification through camera access.",
    tags: [
      {
        name: "react-Native",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "ANN",
        color: "pink-text-gradient",
      },
    ],
    image: nutriscan,
    source_code_Link: "https://github.com/vatsal4545/NutriScan",
  },
];

export { services, technologies, experiences, testimonials, projects };
