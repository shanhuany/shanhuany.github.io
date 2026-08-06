(() => {
  const root = document.documentElement;
  const langButton = document.querySelector("#lang");
  const themeButton = document.querySelector("#theme");
  const menuButton = document.querySelector(".menu");
  const navlinks = document.querySelector(".navlinks");
  let language = localStorage.getItem("shan-language") || "en";

  function setLanguage(next) {
    language = next;
    root.lang = next === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-en][data-zh]").forEach(el => {
      el.textContent = el.dataset[next];
    });
    langButton.textContent = next === "en" ? "中文" : "EN";
    localStorage.setItem("shan-language", next);
  }

  function setTheme(theme) {
    root.dataset.theme = theme;
    themeButton.textContent = theme === "dark" ? "☀" : "☾";
    localStorage.setItem("shan-theme", theme);
  }

  setLanguage(language);
  setTheme(localStorage.getItem("shan-theme") || "dark");
  document.querySelector("#year").textContent = new Date().getFullYear();

  langButton.addEventListener("click", () => setLanguage(language === "en" ? "zh" : "en"));
  themeButton.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));
  menuButton.addEventListener("click", () => {
    const open = navlinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
  navlinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    navlinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }));
})();