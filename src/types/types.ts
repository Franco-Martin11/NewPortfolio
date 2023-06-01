export type ProjectRoutes = { url: string; title: string; id: number };

export type Project = {
  title: string;
  imageSource: string;
  imageAlternate: string;
  routes: ProjectRoutes[];
};
