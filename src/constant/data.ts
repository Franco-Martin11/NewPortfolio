import {
  ExperienceCard,
  LinkRoute,
  ListItem,
  MediaLink,
  ProjectProps,
} from "../types/types";
import { FaLinkedin, FaGithubSquare, FaLink } from "react-icons/fa";
import { MdPictureAsPdf } from "react-icons/md";
import { SiGmail } from "react-icons/si";


export const LinkRuoteArray: LinkRoute[] = [
  {
    route: "#about",
    id: 2,
    title: "About",
    ariaLabel: "Link to about page",
  },
  {
    route: "#projects",
    id: 3,
    title: "Projects",
    ariaLabel: "Link to Projects page",
  },
  {
    route: "#experience",
    id: 4,
    title: "Experience",
    ariaLabel: "Link to Experience page",
  },
  {
    route: "#contact",
    id: 5,
    title: "Contact",
    ariaLabel: "Link to Contact page",
  },
];

export const MediaLinkArray: MediaLink[] = [
  {
    route: "mailto:main.francomartin@gmail.com",
    ariaLabel: "Link to facebook page",
    label: "Gmail",
    icon: SiGmail,
  },
  {
    route: "https://github.com/Franco-Martin11",
    ariaLabel: "Link to Github page",
    label: "Github",
    icon: FaGithubSquare,
  },
  {
    route: "https://www.linkedin.com/in/franc-martin/",
    ariaLabel: "Link to Linkedin page",
    label: "Linkedin",
    icon: FaLinkedin,
  },
  // {
  //   route: "/CV-FrontendDeveloper.pdf",
  //   ariaLabel: "Link to download curriculum",
  //   label: "Curriculum",
  //   icon: MdPictureAsPdf,
  // },
  {
    route: "/CV-English.pdf",
    ariaLabel: "Link to download curriculum",
    label: "Curriculum in English",
    icon: MdPictureAsPdf,
  },
];

export const ProjectExampleData: ProjectProps[] = [
  {
    descriptions: {
      numberProject: 10,
      title: "Yo Me Animo Lading Page",
      paragraph:
        "The purpose of giving the exact information in relation to the country of the user and the country where he wants to arrive. These functionalities vary from types of visas, jobs, studies and important data at the time of arrival in a new country. It has personalized services, newsletters, blogs and community.",
    },
    image: {
      srcUrl: "/Yomeanimo-Traveling.webp",
      alt: "Ejemplo de imagen",
    },
    route: "/ruta-ejemplo",
    hyperLink: [
      {
        icon: FaLink,
        route: "https://yomeanimo-chakra.netlify.app/",
        id: 123436798,
        title: "Deploy",
      },
      {
        icon: FaGithubSquare,
        route: "https://github.com/Franco-Martin11/ReWork-Yomeanimo",
        id: 2,
        title: "Repository",
      },
    ],
    listTecnologies: [
      { item: "Chakra UI", id: 1 },
      { item: "React.js", id: 12 },
      { item: "React Router Dom", id: 123 },
      { item: "Emotion", id: 1234 },
    ],
  },
  {
    descriptions: {
      numberProject: 10,
      title: "Insight-Dashboard Aplication",
      paragraph:
      "The purpose of providing accurate information about the status of your personal finances and expenses. These functionalities range from visa types, transfers, pending projects, pending payments, credit history, tax history and different important data. It has an interactive dashboard and different sections that help you to have a more accurate and easy to understand financial overview of your income.",
    },
    image: {
      srcUrl: "/Dashboard-Vue.webp",
      alt: "Ejemplo de imagen",
      scroll: false,
    },
    route: "/ruta-ejemplo",
    hyperLink: [
      // {
      //   icon: FaLink,
      //   route: "https://yomeanimo-chakra.netlify.app/",
      //   id: 1236798,
      //   title: "Deploy",
      // },
      {
        icon: FaGithubSquare,
        route: "https://github.com/Franco-Martin11/Dashboard-Vue",
        id: 21125,
        title: "Repository",
      },
    ],
    listTecnologies: [
      { item: "Figma", id: 1212313 },
      { item: "Vue.js", id: 12123 },
      { item: "Vue Router", id: 132122 },
      { item: "Tailwind", id: 123213 },
      { item: "Apextchart", id: 122134 },
      { item: "Motion", id: 121234 },
    ],
  },
  {
    descriptions: {
      numberProject: 112,
      title: "AudioPhile E-Commerce",
      paragraph:
        "an audio e-commerce app built using Chakra UI, Next.js, Redux Toolkit, and Formik. This app combines stunning visual design with robust functionality, offering a seamless shopping experience for audio enthusiasts. With Chakra UI, the app showcases a sleek and intuitive interface. Next.js powers fast and efficient page loading, while Redux Toolkit ensures smooth state management. Formik simplifies form handling, making it easy for users to interact with the app. Explore the endless possibilities of audio shopping with this captivating and feature-rich e-commerce app.",
    },
    listTecnologies: [
      { item: "Next.js", id: 13112345546432 },
      { item: "Redux Tollkit", id: 12 },
      { item: "Chakra UI", id: 123 },
      { item: "Formik", id: 1234 },
    ],
    image: {
      srcUrl: "/XX99-Mark-I-Headphones.webp",
      alt: "Ejemplo de imagen",
    },
    route: "/ruta-ejemplo",
    hyperLink: [
      {
        icon: FaLink,
        route: "https://audiophile-ecommerce-pearl.vercel.app/",
        id: 4,
        title: "Deploy",
      },
      {
        icon: FaGithubSquare,
        route: "https://github.com/Franco-Martin11/Audiophile-ecommerce",
        id: 5,
        title: "Repository",
      },
    ],
  },
  {
    descriptions: {
      numberProject: 113,
      title: "Designo Web Page",
      paragraph:
        "This application is a landing page that serves to publicize both designs and applications already created for our customers around the world, this business has several franchises throughout the world therefore serves as a platform for redirecting customers depending on the country or region where they are.",
    },
    listTecnologies: [
      { item: "React.js", id: 1 },
      { item: "Emotion", id: 1232 },
      { item: "HTML5", id: 12132 },
    ],
    image: {
      srcUrl: "/DESIGNO.webp",
      alt: "Ejemplo de imagen",
    },
    route: "/ruta-ejemplo",
    hyperLink: [
      {
        icon: FaLink,
        route: "https://designo-website.netlify.app/",
        id: 4,
        title: "Deploy",
      },
      {
        icon: FaGithubSquare,
        route: "https://github.com/Franco-Martin11/DesignoWebSite",
        id: 5,
        title: "Repository",
      },
    ],
  },
  {
    descriptions: {
      numberProject: 114,
      title: "MarieClaire Redesing",
      paragraph:
        "In this case I took the UI design of a very famous fashion magazine in Europe (Marie Claire) which I adapted using different styles and layouts.",
    },
    listTecnologies: [
      { item: "HTML5", id: 131256 },
      { item: "SASS", id: 342 },
    ],
    image: {
      srcUrl: "/Claire-Magazine.webp",
      alt: "Ejemplo de imagen",
    },
    route: "/ruta-ejemplo",
    hyperLink: [
      {
        icon: FaLink,
        route: "https://claire-page-demo.netlify.app/",
        id: 4,
        title: "Deploy",
      },
      {
        icon: FaGithubSquare,
        route: "https://github.com/Franco-Martin11/Claire-page",
        id: 5,
        title: "Repository",
      },
    ],
  },
  {
    descriptions: {
      numberProject: 115,
      title: "Beer Shop",
      paragraph:
        "a responsive app crafted with Next.js, SWR, and CSS Modules. Inspired by a design in Figma, this application showcases my expertise in creating seamless user experiences across various devices. Leveraging the power of Next.js, the app delivers fast loading times and server-side rendering. With SWR, data fetching becomes effortless, ensuring real-time updates. CSS Modules enable modular styling, maintaining code readability and scalability. Immerse yourself in the beauty of this responsive app and enjoy a smooth browsing experience..",
    },
    listTecnologies: [
      { item: "Next.js", id: 1 },
      { item: "Next API-Routes", id: 1312132 },
      { item: "SWR", id: 2345 },
      { item: "CSS Modules", id: 123 },
    ],
    image: {
      srcUrl: "/BeerShop.webp",
      alt: "Ejemplo de imagen",
      scroll: false,
    },
    route: "/ruta-ejemplo",
    hyperLink: [
      {
        icon: FaLink,
        route: "",
        id: 4,
        title: "Deploy",
      },
      {
        icon: FaGithubSquare,
        route: "",
        id: 5,
        title: "Repository",
      },
    ],
  },
  {
    descriptions: {
      numberProject: 116,
      title: "Filo Landing Page",
      paragraph:
        "A dynamic website crafted using HTML, CSS, and JavaScript. Drawing inspiration from a frontend mentor starter pack, this endeavor showcases my skills in creating interactive and visually appealing user interfaces. From seamless navigation to captivating animations, I've brought the design to life, ensuring a delightful user experience. Explore the harmonious blend of aesthetics and functionality as you interact with this frontend masterpiece.",
    },
    listTecnologies: [
      { item: "HTML5", id: 1 },
      { item: "CSS3", id: 12653 },
    ],
    image: {
      srcUrl: "/FiloLanding.webp",
      alt: "Ejemplo de imagen",
      scroll: false,
    },
    route: "/ruta-ejemplo",
    hyperLink: [
      {
        icon: FaLink,
        route: "",
        id: 4,
        title: "Deploy",
      },
      {
        icon: FaGithubSquare,
        route: "",
        id: 5,
        title: "Repository",
      },
    ],
  },
  {
    descriptions: {
      numberProject: 117,
      title: "MercadoLibre Clone",
      paragraph:
        "In this case I took the UI design of a very famous ecommerce in Latin America (MercadoLibre) as a reference and made some changes in the layout and styles.",
    },
    listTecnologies: [
      { item: "React.Js", id: 1277657 },
      { item: "Chakra UI", id: 1 },
      { item: "Emotion", id: 123 },
      { item: "Wouter", id: 1234 },
    ],
    image: {
      srcUrl: "/Mercadolibre-Clone.webp",
      alt: "Ejemplo de imagen",
    },
    route: "/ruta-ejemplo",
    hyperLink: [
      {
        icon: FaLink,
        route: "https://freemarket-clone.netlify.app/",
        id: 4,
        title: "Deploy",
      },
      {
        icon: FaGithubSquare,
        route: "https://github.com/Franco-Martin11/MercadoLibreCLONE",
        id: 5,
        title: "Repository",
      },
    ],
  },
];

const listResponsibilities: { xirect: ListItem[]; dupan: ListItem[] } = {
  xirect: [
    {
      item: "User interface development",
      id: "1312",
    },
    {
      item: "Develop visually appealing and responsive user interfaces using Vue.js and Vuetify.",
      id: "132",
    },
    {
      item: "Utilize Nuxt.js to build universal web applications with enhanced performance and fast initial load times.",
      id: "12",
    },
    {
      item: "Integrate JWT for secure authentication and authorization to control access to protected resources.",
      id: "2",
    },
    {
      item: "Implement state management using Vuex to ensure efficient data flow and communication between components.",
      id: "3",
    },
    {
      item: "Handle HTTP requests and manage responses using Axios to connect with web services and APIs",
      id: "3312",
    },
    {
      item: "Collaborate with the backend team to integrate the frontend with web services and APIs, ensuring smooth communication and a consistent user experience.",
      id: "4",
    },
    {
      item: "Collaboration with team in desing issues",
      id: "5",
    },
  ],
  dupan: [
    {
      item: "User interface development",
      id: "1321",
    },
    {
      item: "Performance optimization",
      id: "2123",
    },
    {
      item: "Leverage Redux Toolkit Query to handle data fetching, caching, and synchronization with the server.",
      id: "332",
    },
    {
      item: "Utilize React Router DOM for efficient client-side routing, ensuring smooth navigation and a seamless user experience.",
      id: "31",
    },
    {
      item: "Collaborate closely with backend developers and designers to integrate frontend components with backend APIs and ensure a seamless end-to-end application experience.",
      id: "3231",
    },
    {
      item: "Utilize RxJS to implement reactive programming.",
      id: "3",
    },
    {
      item: "Implementation of responsive designs",
      id: "4",
    },
    {
      item: "Collaboration with the design team",
      id: "5",
    },
  ],
};

export const listTecnologies: { xirect: ListItem[]; dupan: ListItem[] } = {
  xirect: [
    { item: "Vue", id: 11 },
    { item: "Vuex", id: 122 },
    { item: "Nuxt.js", id: 1233 },
    { item: "Vuetify", id: 12344 },
    { item: "Axios", id: 123455 },
    { item: "JWT", id: 1234566 },
    { item: "Apexcharts", id: 12345668 },
    { item: "HTML5", id: 12345668312 },
    { item: "Flex & Grid", id: 123456312 },
    { item: "Figma", id: 12345667 },
    { item: "GitLab", id: 12345669 },
    { item: "Git", id: 12345660 },
  ],
  dupan: [
    { item: "React.js", id: 1 },
    { item: "Typescript", id: 12345 },
    { item: "HTML5", id: 123456 },
    { item: "Flex & Grid", id: 123456312 },
    { item: "Redux", id: 12132253 },
    { item: "Redux Toolkit", id: 123132134 },
    { item: "React Router Dom", id: 1234561322 },
    { item: "Toolkit Query", id: 12345613234 },
    { item: "Rx.js", id: 123456132278132 },
    { item: "Tailwind", id: 1234123 },
    { item: "Figma", id: 1234561323 },
    { item: "GitLab", id: 1234561324 },
    { item: "Git", id: 123456213231 },
  ],
};

export const companiesExperience: ExperienceCard[] = [
  {
    companies: "Xirect Software Solutions",
    date: "10/2022 - 03/2023",
    listResponsibilities: listResponsibilities.xirect,
    desciption: `The first was a web application for customers, providing them with detailed information about the company's products and services. The second was designed for distributors, allowing efficient management of orders and invoicing. Both applications were connected to each other and dynamically adjusted depending on the role of each user.

    Finally, the third application was a betting system that offered users a unique and intuitive gaming experience. All applications were developed using technologies such as Vue, Vuex, Nuxt.js, JWT, Axios and Vuetify.`,
    listTecnologies: listTecnologies.xirect,
    id: 11321123,
  },
  {
    companies: "Dupan.io",
    date: "07/2022 - 10/2022",
    listResponsibilities: listResponsibilities.dupan,
    desciption: `The primary focus of the project was the development of a robust e-commerce platform using React.js 17. To accomplish this, we utilized a range of cutting-edge technologies, including Tailwind.css for efficient styling, RxJS for reactive programming, Redux for state management, HTML5 for structuring web content, redux toolkit query for data management, and react router dom for seamless routing. TypeScript was also employed to enhance type safety and maintainability. Moreover, we implemented a microservices architecture through an API-REST interface to ensure scalability and modularity.

    Throughout the project, I collaborated closely with a talented team of developers, utilizing my skills in frontend development to create an immersive and visually appealing e-commerce experience. The result was a dynamic and intuitive platform that provided seamless navigation and an enhanced user interface.`,
    listTecnologies: listTecnologies.dupan,
    id: 12,
  },
];
