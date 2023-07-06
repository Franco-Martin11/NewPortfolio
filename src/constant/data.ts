import {
  ExperienceCard,
  LinkRoute,
  ListItem,
  MediaLink,
  Project,
  ProjectProps,
} from "../types/types";
import { FaLinkedin, FaGithubSquare, FaLink } from "react-icons/fa";
import { MdPictureAsPdf } from "react-icons/md";
import { SiGmail } from "react-icons/si";

export const projectData: Project[] = [
  {
    title: "prueba",
    imageSource: "./image5.jpg",
    imageAlternate: "string",
    routes: [
      { url: "string", title: "repository", id: 22 },
      { url: "/", title: "deploy", id: 1 },
    ],
  },
  {
    title: "prueba2",
    imageSource: "./image6.jpg",
    imageAlternate: "string2",
    routes: [
      { url: "string", title: "repository", id: 22 },
      { url: "/", title: "deploy", id: 2 },
    ],
  },
  {
    title: "prueba",
    imageSource: "./image5.jpg",
    imageAlternate: "string",
    routes: [
      { url: "string", title: "repository", id: 22 },
      { url: "/", title: "deploy", id: 3 },
    ],
  },
  {
    title: "prueba2",
    imageSource: "./image6.jpg",
    imageAlternate: "string2",
    routes: [
      { url: "string", title: "repository", id: 22 },
      { url: "/", title: "deploy", id: 4 },
    ],
  },
];

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
    id: 1,
    icon: SiGmail,
  },
  {
    route: "https://github.com/Franco-Martin11",
    ariaLabel: "Link to Github page",
    id: 2,
    label: "Github",
    icon: FaGithubSquare,
  },
  {
    route: "https://www.linkedin.com/in/franc-martin/",
    ariaLabel: "Link to Linkedin page",
    id: 3,
    label: "Linkedin",
    icon: FaLinkedin,
  },
  {
    route: "/CV-FrontendDeveloper.pdf",
    ariaLabel: "Link to download curriculum",
    id: 4,
    label: "Curriculum",
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
      srcUrl: "/YoMeAnimo.jpeg",
      alt: "Ejemplo de imagen",
    },
    route: "/ruta-ejemplo",
    hyperLink: [
      {
        icon: FaLink,
        route: "/ruta1",
        id: 1,
        title: "Deploy",
      },
      {
        icon: FaGithubSquare,
        route: "/ruta2",
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
      numberProject: 11,
      title: "AudioPhile E-Commerce",
      paragraph:
        "an audio e-commerce app built using Chakra UI, Next.js, Redux Toolkit, and Formik. This app combines stunning visual design with robust functionality, offering a seamless shopping experience for audio enthusiasts. With Chakra UI, the app showcases a sleek and intuitive interface. Next.js powers fast and efficient page loading, while Redux Toolkit ensures smooth state management. Formik simplifies form handling, making it easy for users to interact with the app. Explore the endless possibilities of audio shopping with this captivating and feature-rich e-commerce app.",
    },
    listTecnologies: [
      { item: "Next.js", id: 1 },
      { item: "Redux Tollkit", id: 12 },
      { item: "Chakra UI", id: 123 },
      { item: "Formik", id: 1234 },
    ],
    image: {
      srcUrl: "/AudioPhile.png",
      alt: "Ejemplo de imagen",
    },
    route: "/ruta-ejemplo",
    hyperLink: [
      {
        icon: FaLink,
        route: "/ruta1",
        id: 4,
        title: "Deploy",
      },
      {
        icon: FaGithubSquare,
        route: "/ruta2",
        id: 5,
        title: "Repository",
      },
    ],
  },
  {
    descriptions: {
      numberProject: 11,
      title: "Designo Web Page",
      paragraph:
        "This application is a landing page that serves to publicize both designs and applications already created for our customers around the world, this business has several franchises throughout the world therefore serves as a platform for redirecting customers depending on the country or region where they are.",
    },
    listTecnologies: [
      { item: "React.js", id: 1 },
      { item: "Emotion", id: 12 },
      { item: "HTML5", id: 12 },
    ],
    image: {
      srcUrl: "/Desing.png",
      alt: "Ejemplo de imagen",
    },
    route: "/ruta-ejemplo",
    hyperLink: [
      {
        icon: FaLink,
        route: "/ruta1",
        id: 4,
        title: "Deploy",
      },
      {
        icon: FaGithubSquare,
        route: "/ruta2",
        id: 5,
        title: "Repository",
      },
    ],
  },
  {
    descriptions: {
      numberProject: 11,
      title: "MarieClaire Redesing",
      paragraph:
        "In this case I took the UI design of a very famous fashion magazine in Europe (Marie Claire) which I adapted using different styles and layouts.",
    },
    listTecnologies: [
      { item: "HTML5", id: 1 },
      { item: "SASS", id: 12 },
    ],
    image: {
      srcUrl: "/MarieClaire.png",
      alt: "Ejemplo de imagen",
    },
    route: "/ruta-ejemplo",
    hyperLink: [
      {
        icon: FaLink,
        route: "/ruta1",
        id: 4,
        title: "Deploy",
      },
      {
        icon: FaGithubSquare,
        route: "/ruta2",
        id: 5,
        title: "Repository",
      },
    ],
  },
  {
    descriptions: {
      numberProject: 11,
      title: "Beer Shop",
      paragraph:
        "a responsive app crafted with Next.js, SWR, and CSS Modules. Inspired by a design in Figma, this application showcases my expertise in creating seamless user experiences across various devices. Leveraging the power of Next.js, the app delivers fast loading times and server-side rendering. With SWR, data fetching becomes effortless, ensuring real-time updates. CSS Modules enable modular styling, maintaining code readability and scalability. Immerse yourself in the beauty of this responsive app and enjoy a smooth browsing experience..",
    },
    listTecnologies: [
      { item: "Next.js", id: 1 },
      { item: "Next API-Routes", id: 1 },
      { item: "SWR", id: 12 },
      { item: "CSS Modules", id: 123 },
    ],
    image: {
      srcUrl: "/BeerShop.png",
      alt: "Ejemplo de imagen",
    },
    route: "/ruta-ejemplo",
    hyperLink: [
      {
        icon: FaLink,
        route: "/ruta1",
        id: 4,
        title: "Deploy",
      },
      {
        icon: FaGithubSquare,
        route: "/ruta2",
        id: 5,
        title: "Repository",
      },
    ],
  },
  {
    descriptions: {
      numberProject: 11,
      title: "Filo Landing Page",
      paragraph:
        "A dynamic website crafted using HTML, CSS, and JavaScript. Drawing inspiration from a frontend mentor starter pack, this endeavor showcases my skills in creating interactive and visually appealing user interfaces. From seamless navigation to captivating animations, I've brought the design to life, ensuring a delightful user experience. Explore the harmonious blend of aesthetics and functionality as you interact with this frontend masterpiece.",
    },
    listTecnologies: [
      { item: "HTML5", id: 1 },
      { item: "CSS3", id: 12 },
    ],
    image: {
      srcUrl: "/FiloLanding.jpeg",
      alt: "Ejemplo de imagen",
    },
    route: "/ruta-ejemplo",
    hyperLink: [
      {
        icon: FaLink,
        route: "/ruta1",
        id: 4,
        title: "Deploy",
      },
      {
        icon: FaGithubSquare,
        route: "/ruta2",
        id: 5,
        title: "Repository",
      },
    ],
  },
  {
    descriptions: {
      numberProject: 11,
      title: "MercadoLibre Clone",
      paragraph:
        "In this case I took the UI design of a very famous ecommerce in Latin America (MercadoLibre) as a reference and made some changes in the layout and styles.",
    },
    listTecnologies: [
      { item: "React.Js", id: 12 },
      { item: "Chakra UI", id: 1 },
      { item: "Emotion", id: 123 },
      { item: "Wouter", id: 1234 },
    ],
    image: {
      srcUrl: "/MercadoLibreClone.jpeg",
      alt: "Ejemplo de imagen",
    },
    route: "/ruta-ejemplo",
    hyperLink: [
      {
        icon: FaLink,
        route: "/ruta1",
        id: 4,
        title: "Deploy",
      },
      {
        icon: FaGithubSquare,
        route: "/ruta2",
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
      id: "1",
    },
    {
      item: "Develop visually appealing and responsive user interfaces using Vue.js and Vuetify.",
      id: "1",
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
      id: "1",
    },
    {
      item: "Performance optimization",
      id: "2",
    },
    {
      item: "Leverage Redux Toolkit Query to handle data fetching, caching, and synchronization with the server.",
      id: "3",
    },
    {
      item: "Utilize React Router DOM for efficient client-side routing, ensuring smooth navigation and a seamless user experience.",
      id: "31",
    },
    {
      item: "Collaborate closely with backend developers and designers to integrate frontend components with backend APIs and ensure a seamless end-to-end application experience.",
      id: "3",
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
    { item: "Rx.js", id: 123456132 },
    { item: "Tailwind", id: 1234123 },
    { item: "Figma", id: 123456132 },
    { item: "GitLab", id: 123456132 },
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
    id: 1,
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
