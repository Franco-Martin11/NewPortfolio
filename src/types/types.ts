import { IconType } from "react-icons";
export type ProjectRoutes = { url: string; title: string; id: number };

export type Project = {
  title: string;
  imageSource: string;
  imageAlternate: string;
  routes: ProjectRoutes[];
};

export type LinkRoute = {
  route: string;
  id: number;
  title: string;
  ariaLabel: string;
};

export type MediaLink = {
  route: string;
  ariaLabel: string;
  id: number;
  label: string;
  icon: IconType;
};
