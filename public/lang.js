// ================= TRANSLATIONS =================
const translations = {
  en: {
    appName: "  Smart - Garbage",
    appName1:"Smart - Garbage Collector Dashboard",
    appName2:"Smart - Garbage Citizen Dashboard",
    tagline: "Report garbage issues in your area and help keep the city clean and sustainable.",
    tagline1:"Review citizen garbage reports, verify locations, and take action to keep the city clean.",
    login: "Login",
    signup: "Sign Up",
    googleSignIn: "Sign in with Google",
    logout: "Logout",
    reportGarbage: "Report Garbage Issue",
    useLocation: "Use Current Location",
    submit: "Submit Report",
    yourReports: "Your Reports",
    followUs: "Follow Us",
    contactUs: "Contact Us",
    rights: "© 2026 Smart-Garbage. All rights reserved.",
    enterLandmark: "Enter area / landmark (near bus stop, school, park...)",
    describeProblem: "Describe the garbage problem...",
    email: "Email",
    password: "Password",
    Report1: "Assigned Garbage Report",
    smart:"Smart-Garbage",
    line:"Building cleaner and smarter cities together.",
    address:"📍 3rd Cross,5th Main Road, J.P Nagar, Bengaluru, Karnataka, India",
    phoneno:"📞+91 98765 43210 - Anuj P",
    emailadd:"✉️smartgarbage@gmail.com",
    Follow1:"Instagram",
    Follow2:"Twitter",
    Follow3:"Facebook",
    Report2:"Submit Report",
    Report3:"Submitting your report...",
    select:"Select Role",
    citizen:"Citizen",
    collector:"Collector",
    admin:"Admin",
    update:"Upload Garbage Photo",
    camera:"📷 Open Camera",
    capture:"📸 Capture",
    upload:"📂 Upload File",
    citizenId:"Citizen Id"
  },

  kn: {
    appName: "  ಸ್ಮಾರ್ಟ್ ಗಾರ್ಬೇಜ್",
    appName1: "ಸ್ಮಾರ್ಟ್ - ಕಸ ಸಂಗ್ರಾಹಕ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    appName2:"ಸ್ಮಾರ್ಟ್ - ಗಾರ್ಬೇಜ್ ಸಿಟಿಜನ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    tagline: "ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿನ ಕಸದ ಸಮಸ್ಯೆಗಳನ್ನು ವರದಿ ಮಾಡಿ ಮತ್ತು ನಗರವನ್ನು ಸ್ವಚ್ಛವಾಗಿರಿಸಿ.",
    tagline1: "ನಾಗರಿಕ ಕಸದ ವರದಿಗಳನ್ನು ಪರಿಶೀಲಿಸಿ, ಸ್ಥಳಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ನಗರವನ್ನು ಸ್ವಚ್ಛವಾಗಿಡಲು ಕ್ರಮ ಕೈಗೊಳ್ಳಿ.",
    login: "ಲಾಗಿನ್",
    signup: "ಸೈನ್ ಅಪ್",
    googleSignIn: "ಗೂಗಲ್ ಮೂಲಕ ಲಾಗಿನ್",
    logout: "ಲಾಗ್ ಔಟ್",
    reportGarbage: "ಕಸದ ಸಮಸ್ಯೆ ವರದಿ ಮಾಡಿ",
    useLocation: "ಪ್ರಸ್ತುತ ಸ್ಥಳ ಬಳಸಿ",
    submit: "ವರದಿ ಸಲ್ಲಿಸಿ",
    yourReports: "ನಿಮ್ಮ ವರದಿಗಳು",
    followUs: "ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ",
    contactUs: "ಸಂಪರ್ಕಿಸಿ",
    rights: "© 2026 ಸ್ಮಾರ್ಟ್ ಗಾರ್ಬೇಜ್. ಎಲ್ಲಾ ಹಕ್ಕುಗಳು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    enterLandmark: "ಪ್ರದೇಶ / ಗುರುತಿನ ಸ್ಥಳ ನಮೂದಿಸಿ",
    describeProblem: "ಕಸದ ಸಮಸ್ಯೆಯನ್ನು ವಿವರಿಸಿ...",
    email: "ಇಮೇಲ್",
    password: "ಪಾಸ್ವರ್ಡ್",
    Report1: "ಕಸದ ವರದಿಯನ್ನು ನಿಯೋಜಿಸಲಾಗಿದೆ",
    smart:" ಸ್ಮಾರ್ಟ್-ಗಾರ್ಬೇಜ್",
    line:"ಒಟ್ಟಿಗೆ ಸ್ವಚ್ಛ ಮತ್ತು ಚುರುಕಾದ ನಗರಗಳನ್ನು ನಿರ್ಮಿಸುವುದು.",
    address:"📍 3ನೇ ಅಡ್ಡರಸ್ತೆ, 5ನೇ ಮುಖ್ಯರಸ್ತೆ, ಜೆ.ಪಿ. ನಗರ, ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ, ಭಾರತ",
    phoneno:"📞+91 98765 43210 - ಅನುಜ್ ಪಿ",
    emailadd:"✉️ಸ್ಮಾರ್ಟ್‌ಗಾರ್ಬೇಜ್@ಜಿಮೇಲ್.ಕಾಮ್",
    Follow1:"ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್",
    Follow2:"ಟ್ವಿಟರ್",
    Follow3:"ಫೇಸ್ಬುಕ್",
    Report2:"ವರದಿ ಸಲ್ಲಿಸಿ",
    Report3:"ನಿಮ್ಮ ವರದಿಯನ್ನು ಸಲ್ಲಿಸಲಾಗುತ್ತಿದೆ...",
    select:"ಪಾತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    citizen:"ನಾಗರಿಕ",
    collector:"ಕಲೆಕ್ಟರ್",
    admin:"ನಿರ್ವಾಹಕ",
    update:"ಕಸದ ಫೋಟೋವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    camera:"📷 ಕ್ಯಾಮೆರಾ ತೆರೆಯಿರಿ",
    capture:"📸 ಸೆರೆಹಿಡಿಯಿರಿ",
    upload:"📂 ಫೈಲ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    citizenId:"ನಾಗರಿಕ ಐಡಿ"
  }
};

// ================= APPLY LANGUAGE =================
function applyLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (translations[lang]?.[key]) {
      el.innerText = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-placeholder]").forEach(el => {
    const key = el.getAttribute("data-placeholder");
    if (translations[lang]?.[key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

// ================= CORE FUNCTIONS =================
function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  applyLanguage(lang);
}

function loadLanguage() {
  const lang = localStorage.getItem("lang") || "en";
  applyLanguage(lang);
}

// ================= USER-SPECIFIC (DASHBOARDS) =================
function setUserLanguage(lang) {
  localStorage.setItem("lang", lang);
  applyLanguage(lang);
}

function loadUserLanguage() {
  const lang = localStorage.getItem("lang") || "en";
  applyLanguage(lang);
}

// ================= RESET =================
function resetLanguage() {
  localStorage.removeItem("lang");
  applyLanguage("en");
}

// ================= EXPOSE GLOBALLY =================
window.setLanguage = setLanguage;
window.loadLanguage = loadLanguage;
window.setUserLanguage = setUserLanguage;
window.loadUserLanguage = loadUserLanguage;
window.resetLanguage = resetLanguage;