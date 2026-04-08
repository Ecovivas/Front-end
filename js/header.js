function initHeaderMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  if (!menuBtn || !navMenu) return;

  // Toggle menu
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuBtn.classList.toggle("active");
  });

  // Fecha menu ao clicar em link
  const navLinks = navMenu.querySelectorAll("a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuBtn.classList.remove("active");
    });
  });

  // Fecha ao clicar fora
  document.addEventListener("click", (e) => {
    const isClickInside =
      navMenu.contains(e.target) || menuBtn.contains(e.target);

    if (!isClickInside) {
      navMenu.classList.remove("active");
      menuBtn.classList.remove("active");
    }
  });
}