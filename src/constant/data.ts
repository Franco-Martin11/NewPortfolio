import {
  ExperienceCard,
  LinkRoute,
  ListItem,
  MediaLink,
  Project,
  ProjectProps,
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
    route: "/home",
    id: 1,
    title: "Home",
    ariaLabel: "Link to home page",
  },
  {
    route: "/about",
    id: 2,
    title: "About",
    ariaLabel: "Link to about page",
  },
  {
    route: "/products",
    id: 3,
    title: "Products",
    ariaLabel: "Link to products page",
  },
  {
    route: "/services",
    id: 4,
    title: "Services",
    ariaLabel: "Link to services page",
  },
  {
    route: "/contact",
    id: 5,
    title: "Contact",
    ariaLabel: "Link to contact page",
  },
];

export const MediaLinkArray: MediaLink[] = [
  {
    route: "https://www.linkedin.com/in/franc-martin/",
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
      srcUrl: "image5.jpg",
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
      srcUrl: "image6.jpg",
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
    title: "Desarrollo de interfaces de usuario",
    id: "1",
  },
  {
    title: "Optimización de rendimiento",
    id: "2",
  },
  {
    title: "Resolución de problemas de compatibilidad",
    id: "3",
  },
  {
    title: "Implementación de diseños responsivos",
    id: "4",
  },
  {
    title: "Colaboración con el equipo de diseño",
    id: "5",
  },
];

export const companiesExperience: ExperienceCard[] = [
  {
    companies: "Empresa 1 del sector IT",
    date: "2019 - Presente",
    listResponsibilities,
    id: 1,
  },
  {
    companies: "Empresa 2 del sector IT",
    date: "2017 - 2019",
    listResponsibilities,
    id: 12,
  },
  {
    companies: "Empresa 3 del sector IT",
    date: "2015 - 2017",
    listResponsibilities,
    id: 123,
  },
  {
    companies: "Empresa 4 del sector IT",
    date: "2013 - 2015",
    listResponsibilities,
    id: 1234,
  },
  {
    companies: "Empresa 5 del sector IT",
    date: "2010 - 2013",
    listResponsibilities,
    id: 12345,
  },
  {
    companies: "Empresa 6 del sector IT",
    date: "2008 - 2010",
    listResponsibilities,
    id: 123456,
  },
];
