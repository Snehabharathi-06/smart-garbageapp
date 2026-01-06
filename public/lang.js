const translations = {
  en: {
    appName: "Smart-Garbage",
    tagline: "Building cleaner and smarter cities together.",
    login: "Login",
    signup: "Sign Up",
    googleSignIn: "Sign in with Google",
    logout: "Logout",
    followUs: "Follow Us",
    contact: "Contact",
    reportGarbage: "Report Garbage Issue",
    submit: "Submit Report",
    yourReports: "Your Reports",
    rights: "© 2026 Smart-Garbage. All rights reserved.",
    enterLandmark: "Enter area / landmark (near bus stop, school, park...)",
useLocation: "Use Current Location",
describeProblem: "Describe the garbage problem..."

  },

  kn: {
    appName: "ಸ್ಮಾರ್ಟ್ ಗಾರ್ಬೇಜ್",
    tagline: "ಸ್ವಚ್ಛ ಮತ್ತು ಸ್ಮಾರ್ಟ್ ನಗರಗಳ ನಿರ್ಮಾಣ.",
    login: "ಲಾಗಿನ್",
    signup: "ಸೈನ್ ಅಪ್",
    googleSignIn: "ಗೂಗಲ್ ಮೂಲಕ ಲಾಗಿನ್",
    logout: "ಲಾಗ್ ಔಟ್",
    followUs: "ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ",
    contact: "ಸಂಪರ್ಕ",
    reportGarbage: "ಕಸ ಸಮಸ್ಯೆ ವರದಿ ಮಾಡಿ",
    submit: "ವರದಿ ಸಲ್ಲಿಸಿ",
    yourReports: "ನಿಮ್ಮ ವರದಿಗಳು",
    rights: "© 2026 ಸ್ಮಾರ್ಟ್ ಗಾರ್ಬೇಜ್. ಎಲ್ಲಾ ಹಕ್ಕುಗಳು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    enterLandmark: "ಪ್ರದೇಶ / ಗುರುತಿನ ಸ್ಥಳ ನಮೂದಿಸಿ",
useLocation: "ಪ್ರಸ್ತುತ ಸ್ಥಳ ಬಳಸಿ",
describeProblem: "ಕಸದ ಸಮಸ್ಯೆಯನ್ನು ವಿವರಿಸಿ..."

  }
};

/* Apply language to page */
function applyLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
  // translate placeholders
document.querySelectorAll("[data-placeholder]").forEach(el => {
  const key = el.getAttribute("data-placeholder");
  if (translations[lang][key]) {
    el.placeholder = translations[lang][key];
  }
});
}

/* Change language */
function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  applyLanguage(lang);
}

/* Load saved language (after login) */
function loadUserLanguage() {
  const savedLang = localStorage.getItem("lang") || "en";
  applyLanguage(savedLang);
}

/* Reset language on logout */
function resetLanguage() {
  localStorage.removeItem("lang");
  applyLanguage("en");
}

/* 🔥 Expose functions globally */
window.setLanguage = setLanguage;
window.loadUserLanguage = loadUserLanguage;
window.resetLanguage = resetLanguage;
