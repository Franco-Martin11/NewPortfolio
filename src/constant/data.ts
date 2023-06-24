import {
  ExperienceCard,
  LinkRoute,
  ListItem,
  MediaLink,
  Project,
  ProjectProps,
  StackItem,
} from "../types/types";
import { FaLinkedin, FaGithubSquare, FaLink } from "react-icons/fa";
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
];

export const ProjectExampleData: ProjectProps[] = [
  {
    descriptions: {
      numberProject: 10,
      title: "Project",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illum commodi dolor impedit. Tempora non asperiores soluta commodi dolorum inventore earum magni?.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illum commodi dolor impedit. Tempora non asperiores soluta commodi dolorum inventore earum magni?",
    },
    image: {
      srcUrl: "/Desingno.jpg",
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
  },
  {
    descriptions: {
      numberProject: 11,
      title: "Project",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illum commodi dolor impedit. Tempora non asperiores soluta commodi dolorum inventore earum magni?.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illum commodi dolor impedit. Tempora non asperiores soluta commodi dolorum inventore earum magni?",
    },
    image: {
      srcUrl: "/DesingnoLG.png",
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

const listResponsibilities: ListItem[] = [
  {
    item: "User interface development",
    id: "1",
  },
  {
    item: "Performance optimization",
    id: "2",
  },
  {
    item: "Solving compatibility issues",
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
];

export const listTecnologies: ListItem[] = [
  { item: "Vue", id: 1 },
  { item: "Vuex", id: 12 },
  { item: "React", id: 123 },
  { item: "Redux", id: 1234 },
  { item: "Nuxt", id: 12345 },
  { item: "Tailwind", id: 123456 },
];

export const companiesExperience: ExperienceCard[] = [
  {
    companies: "Xirect Software Solutions",
    date: "2019 - Presente",
    listResponsibilities,
    listTecnologies,
    id: 1,
  },
  {
    companies: "Dupan.io",
    date: "2017 - 2019",
    listResponsibilities,
    listTecnologies,
    id: 12,
  },
];

