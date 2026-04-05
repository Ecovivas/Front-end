function loadComponent(id, file) {
  fetch(file)
    .then((res) => res.text())
    .then((data) => {
      const element = document.getElementById(id);

      if (!element) return;

      element.innerHTML = data;

      if (id === "header") {
        highlightActiveNav();
      }
    })
    .catch((error) => {
      console.error(`Erro ao carregar o componente ${id}:`, error);
    });
}

function highlightActiveNav() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav a");

  navLinks.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href");

    if (
      (currentPath === "/" || currentPath.endsWith("/index.html")) &&
      href === "/index.html"
    ) {
      link.classList.add("active");
    }

    if (currentPath.includes("/cursos.html") && href.includes("/cursos.html")) {
      link.classList.add("active");
    }

    if (currentPath.includes("/sobre.html") && href.includes("/sobre.html")) {
      link.classList.add("active");
    }

    if (
      currentPath.includes("/contato.html") &&
      href.includes("/contato.html")
    ) {
      link.classList.add("active");
    }
  });
}

loadComponent("header", "/pages/header.html");
loadComponent("footer", "/pages/footer.html");
