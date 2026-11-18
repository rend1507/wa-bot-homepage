(function () {
  var KEY = "wa-bot-theme";

  function systemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function currentTheme() {
    var stored = localStorage.getItem(KEY);
    if (stored === "dark" || stored === "light") return stored;
    return systemTheme();
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var buttons = document.querySelectorAll("[data-theme-toggle]");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      buttons[i].setAttribute(
        "aria-label",
        theme === "dark" ? "Aktifkan mode terang" : "Aktifkan mode gelap"
      );
    }
  }

  function toggleTheme() {
    var next = currentTheme() === "dark" ? "light" : "dark";
    localStorage.setItem(KEY, next);
    applyTheme(next);
  }

  applyTheme(currentTheme());

  document.addEventListener("click", function (event) {
    var target = event.target.closest("[data-theme-toggle]");
    if (!target) return;
    toggleTheme();
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
    if (localStorage.getItem(KEY)) return;
    applyTheme(systemTheme());
  });
})();
