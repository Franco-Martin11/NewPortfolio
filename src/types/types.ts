import { Dispatch, SetStateAction } from "react";
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

export type SetIsHovering = Dispatch<SetStateAction<boolean>>;

type ImageProps = {
  srcUrl: string;
  alt: string;
};

type HyperLinkItem = {
  icon: IconType;
  route: string;
  id: number;
  title: string;
};

type DescriptionProps = {
  numberProject: number;
  title: string;
  paragraph: string;
};

export type ProjectProps = {
  descriptions: DescriptionProps;
  image: ImageProps;
  route: string;
  hyperLink: HyperLinkItem[];
};
