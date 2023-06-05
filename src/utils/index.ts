export const handleScrollTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const handleDisableScroll = (): void => {
  const scrollPosition =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  // Añadir estilos para desactivar el scroll
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollPosition}px`;
};

export const handleEnableScroll = () => {
  // Restaurar los estilos para habilitar el scroll
  document.body.style.overflow = "";
  document.documentElement.style.overflow = "";
  document.body.style.position = "";
  document.body.style.top = "";
};
