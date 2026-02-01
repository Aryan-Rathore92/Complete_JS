
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
const btn = document.querySelector("button");

function applyTheme(theme) {
    document.body.classList.toggle("dark", theme === "dark");
    document.body.classList.toggle("light", theme === "light");
}

/* 1️⃣ Load theme */
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    applyTheme(savedTheme);
} else {
    applyTheme(mediaQuery.matches ? "dark" : "light");
}

/* 2️⃣ Listen to OS theme change (only if user didn't choose) */
mediaQuery.addEventListener("change", e => {
    if (!localStorage.getItem("theme")) {
        applyTheme(e.matches ? "dark" : "light");
    }
});

/* 3️⃣ Toggle button */
btn.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
});