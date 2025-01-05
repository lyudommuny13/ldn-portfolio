export function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault();
  const element = document.querySelector(id);
  if (!element) return;

  // Add extra delay for mobile to allow menu animation to complete
  const isMobile = window.innerWidth < 768;
  const delay = isMobile ? 10 : 0;

  setTimeout(() => {
    const offset = 80; // Height of the fixed navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }, delay);
}