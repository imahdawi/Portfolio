// ====== LOADER ======
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const progress = document.querySelector('.loader-progress');
    const percent = document.querySelector('.loader-percent');
    
    let width = 0;
    const interval = setInterval(() => {
        width += Math.random() * 15 + 5;
        if (width >= 100) {
            width = 100;
            clearInterval(interval);
            setTimeout(() => {
                loader.classList.add('hidden');
                document.body.style.overflow = 'auto';
                initAnimations();
                initTyping();
                initStatsCounter();
                initSkillBars();
            }, 500);
        }
        progress.style.width = width + '%';
        percent.textContent = Math.floor(width) + '%';
    }, 200);
});

// ====== CUSTOM CURSOR ======
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

document.addEventListener('mousemove', (e) => {
    cursorDot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    cursorOutline.style.left = e.clientX + 'px';
    cursorOutline.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
    cursorOutline.style.transform = 'translate(-50%, -50%) scale(0.8)';
});

document.addEventListener('mouseup', () => {
    cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
});

document.addEventListener('mouseleave', () => {
    cursorDot.style.display = 'none';
    cursorOutline.style.display = 'none';
});

document.addEventListener('mouseenter', () => {
    cursorDot.style.display = 'block';
    cursorOutline.style.display = 'block';
});

// ====== MOUSE GLOW ======
const glow = document.querySelector('.mouse-glow');
document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// ====== THEME TOGGLE ======
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    if (document.body.classList.contains('light')) {
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'dark');
    }
});

if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
    themeIcon.className = 'fas fa-sun';
}

// ====== TYPING EFFECT ======
function initTyping() {
    const typedText = document.getElementById('typed-text');
    const words = ['Front-End Developer', 'HTML & CSS', 'JavaScript', 'Building Modern Web', 'Learning Every Day'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typedText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }
    type();
}

// ====== STATS COUNTER ======
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.count);
                let current = 0;
                const increment = target / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        entry.target.textContent = target + (target === 100 ? '%' : '+');
                        clearInterval(timer);
                    } else {
                        entry.target.textContent = Math.floor(current);
                    }
                }, 30);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => observer.observe(stat));
}

// ====== SKILL BARS ======
function initSkillBars() {
    const bars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.dataset.width;
                entry.target.style.width = width;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    bars.forEach(bar => observer.observe(bar));
}

// ====== SCROLL ANIMATIONS ======
function initAnimations() {
    const elements = document.querySelectorAll('.skill-card, .project-card, .timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
}

// ====== SMOOTH SCROLL ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

console.log('🚀 DevPortfolio - تم التحميل بنجاح!');