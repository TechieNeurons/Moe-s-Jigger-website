// Localization content matrix
const translations = {
    en: {
        title: "Moe's Jigger",
        tagline: "The Mixologist's Companion",
        downloadBtn: "COMING SOON",
        conceptText: "Your personal digital recipe book designed for cocktail enthusiasts. Beautifully catalog, grade, and tailor your favorite libations. Seamlessly swap measurement units to fit your mixing style and master the art of bartending."
    },
    fr: {
        title: "Le Jigger de Moe",
        tagline: "Le Compagnon du Mixologue",
        downloadBtn: "BIENTOT DISPO",
        conceptText: "Votre carnet de recettes numérique personnel conçu pour les passionnés de cocktails. Répertoriez, notez et personnalisez magnifiquement vos créations. Modifiez instantanément les unités de mesure selon vos préférences et maîtrisez l'art du bar."
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    
    // Apply text translations
    document.getElementById('langToggle').innerText = currentLang === 'en' ? 'FR' : 'EN';
    document.title = translations[currentLang].title + ' - ' + translations[currentLang].tagline;
    document.getElementById('title').innerText = translations[currentLang].title;
    document.getElementById('tagline').innerText = translations[currentLang].tagline;
    document.getElementById('downloadBtn').innerText = translations[currentLang].downloadBtn;
    document.getElementById('conceptText').innerText = translations[currentLang].conceptText;

    // Apply image label translations
    document.querySelectorAll('.screenshot-label').forEach(label => {
        label.innerText = label.getAttribute(`data-${currentLang}`);
    });
}

function toggleTheme() {
    const html = document.documentElement;
    const themeBtn = document.getElementById('themeToggle');
    const currentTheme = html.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        html.setAttribute('data-theme', 'light');
        themeBtn.innerText = '🌙 Dark';
    } else {
        html.setAttribute('data-theme', 'dark');
        themeBtn.innerText = '☀️ Light';
    }
}