const html = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const langToggle = document.getElementById("langToggle");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  html.classList.add("dark");
}

function updateThemeIcon() {
  if (!themeToggle) return;
  const isDark = html.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
}

if (themeToggle) {
  updateThemeIcon();

  themeToggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    const isDark = html.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeIcon();
  });
}

let currentLang = localStorage.getItem("lang") || "es";

function applyLanguage(lang) {
  document.querySelectorAll("[data-es][data-en]").forEach((el) => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

applyLanguage(currentLang);

if (langToggle) {
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    localStorage.setItem("lang", currentLang);
    applyLanguage(currentLang);
  });
}

// Copiar correo
const copyButtons = document.querySelectorAll(".copy-email-btn");

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const email = button.dataset.email;
    const textElement = button.querySelector(".copy-email-text");

    try {
      await navigator.clipboard.writeText(email);

      if (textElement) {
        const originalEs = textElement.getAttribute("data-es") || "Copiar";
        const originalEn = textElement.getAttribute("data-en") || "Copy";

        textElement.textContent = currentLang === "es" ? "Copiado" : "Copied";

        setTimeout(() => {
          textElement.textContent = currentLang === "es" ? originalEs : originalEn;
        }, 1500);
      }
    } catch (error) {
      console.error("No se pudo copiar el correo:", error);
    }
  });
});