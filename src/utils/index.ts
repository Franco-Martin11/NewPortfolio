import { SetIsHovering } from "../types/types";

export const handleScrollTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const scrollPosition =
  window.scrollY ||
  document.documentElement.scrollTop ||
  document.body.scrollTop ||
  0;

export const handleDisableScroll = (): void => {
  // Añadir estilos para desactivar el scroll
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollPosition}px`;
};

export const handleEnableScroll = (): void => {
  // Restaurar los estilos para habilitar el scroll
  document.body.style.overflow = "";
  document.documentElement.style.overflow = "";
  document.body.style.position = "";
  document.body.style.top = "";
};

export const HandleMouseEvent = {
  MouseOver: (setIsHovering: SetIsHovering) => {
    setIsHovering(true);
  },
  MouseOut: (setIsHovering: SetIsHovering) => {
    setIsHovering(false);
  },
};

import { v4 } from "uuid";

export function uuidGenerator() {
  const uuid = v4();
  const truncatedUuid = uuid.replace(/-/g, "").slice(0, 8);
  return truncatedUuid;
}
