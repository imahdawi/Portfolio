// ====== LANGUAGE TOGGLE ======
const langToggle = document.getElementById('lang-toggle');
const langSpan = langToggle.querySelector('span');
let currentLang = 'ar';

const translations = {
    ar: {
        heroBadge: ' متاح الأن ✅',
        greeting: '👋 مرحباً',
        name: 'أنا <span class="highlight">مهدي أحمد</span>',
        typed: ['Front-End Developer', 'HTML & CSS', 'JavaScript', 'Building Modern Web', 'Learning Every Day'],
        desc: 'Front-End Developer شغوف ببناء واجهات ويب حديثة. أتعلم وأطبّق يومياً، وأبحث عن فرص للتعاون والمشاركة في مشاريع حقيقية.',
        projects: 'شوف شغلي',
        contact: 'تواصل معي',
        skills: 'المهارات التقنية',
        services: 'إيه اللي بقدر أبنيه؟',
        journey: 'رحلتي 🛤️',
        footer: 'Built with 💻 & ❤️'
    },
    en: {
        heroBadge: 'Available Now ✅',
        greeting: '👋 Hello',
        name: 'I\'m <span class="highlight">Mahdi Ahmed</span>',
        typed: ['Front-End Developer', 'HTML & CSS', 'JavaScript', 'Building Modern Web', 'Learning Every Day'],
        desc: 'Passionate Front-End Developer building modern web experiences. I learn and apply daily, looking for opportunities to collaborate on real projects.',
        projects: 'See My Work',
        contact: 'Contact Me',
        skills: 'Technical Skills',
        services: 'What I Can Build',
        journey: 'My Journey 🛤️',
        footer: 'Built with 💻 & ❤️'
    }
};

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    langSpan.textContent = currentLang === 'ar' ? 'EN' : 'ع';
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    localStorage.setItem('lang', currentLang);
    updateContent(currentLang);
});

if (localStorage.getItem('lang')) {
    currentLang = localStorage.getItem('lang');
    langSpan.textContent = currentLang === 'ar' ? 'EN' : 'ع';
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    updateContent(currentLang);
}

function updateContent(lang) {
    const t = translations[lang];
    
    document.querySelector('.hero-badge').innerHTML = `<span class="pulse-dot"></span> ${t.heroBadge}`;
    document.querySelector('.greeting').textContent = t.greeting;
    document.querySelector('.hero-title .name').innerHTML = t.name;
    document.querySelector('.hero-desc').textContent = t.desc;
    
    document.querySelector('.hero-buttons .btn-primary').innerHTML = '<i class="fas fa-code"></i> ' + t.projects;
    document.querySelector('.hero-buttons .btn-outline').innerHTML = '<i class="fas fa-paper-plane"></i> ' + t.contact;
    
    document.querySelector('#skills .section-title').innerHTML = '<i class="fas fa-cogs"></i> ' + t.skills;
    document.querySelector('#services .section-title').innerHTML = '<i class="fas fa-tools"></i> ' + t.services;
    document.querySelector('#projects .section-title').innerHTML = '<i class="fas fa-project-diagram"></i> مشاريعي 🚀';
    document.querySelector('#journey .section-title').innerHTML = '<i class="fas fa-road"></i> ' + t.journey;
    document.querySelector('#contact .section-title').innerHTML = '<i class="fas fa-envelope"></i> تواصل معي 📬';
    
    const footerText = document.querySelector('footer p');
    footerText.innerHTML = `&copy; 2026 <span class="highlight">مهدي أحمد</span> - ${t.footer}`;
}