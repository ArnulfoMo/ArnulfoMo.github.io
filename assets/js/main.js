const html = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const themeKnob = document.getElementById("themeKnob");

const languageToggle = document.getElementById("languageToggle");
const languageKnob = document.getElementById("languageKnob");

function applyTheme(theme) {
  if (theme === "dark") {
    html.classList.add("dark");
    themeKnob.style.transform = "translateX(32px)";
  } else {
    html.classList.remove("dark");
    themeKnob.style.transform = "translateX(0)";
  }
  localStorage.setItem("theme", theme);
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-es]").forEach((el) => {
    el.textContent = lang === "en" ? el.dataset.en : el.dataset.es;
  });

  if (lang === "en") {
    languageKnob.style.transform = "translateX(32px)";
  } else {
    languageKnob.style.transform = "translateX(0)";
  }

  localStorage.setItem("language", lang);
}

const savedTheme = localStorage.getItem("theme") || "dark";
const savedLanguage = localStorage.getItem("language") || "es";

applyTheme(savedTheme);
applyLanguage(savedLanguage);

themeToggle.addEventListener("click", () => {
  const newTheme = html.classList.contains("dark") ? "light" : "dark";
  applyTheme(newTheme);
});

languageToggle.addEventListener("click", () => {
  const currentLang = document.documentElement.lang || "es";
  const newLang = currentLang === "es" ? "en" : "es";
  applyLanguage(newLang);
});