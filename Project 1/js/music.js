// ====== MUSIC PLAYER ======
const musicToggle = document.getElementById('music-toggle');
let audio = null;
let isPlaying = false;

// إنشاء عنصر audio
function createAudio() {
    // يمكنك وضع رابط ملف موسيقى حقيقي هنا
    // audio = new Audio('assets/music/background.mp3');
    // audio.loop = true;
    // audio.volume = 0.3;
    
    // محاكاة (بدون ملف فعلي)
    console.log('🎵 Music player ready - Add your audio file!');
}

musicToggle.addEventListener('click', () => {
    if (!audio) {
        createAudio();
        // إذا لم يوجد ملف، نعطي إشعار
        alert('🎵 أضف ملف موسيقى في مجلد assets/music/ وقم بتفعيله في الكود');
        return;
    }
    
    if (isPlaying) {
        audio.pause();
        musicToggle.innerHTML = '<i class="fas fa-music"></i>';
        musicToggle.style.borderColor = 'var(--border-color)';
    } else {
        audio.play();
        musicToggle.innerHTML = '<i class="fas fa-stop"></i>';
        musicToggle.style.borderColor = '#00ff88';
    }
    isPlaying = !isPlaying;
});

// حفظ حالة التشغيل
document.addEventListener('visibilitychange', () => {
    if (document.hidden && isPlaying) {
        audio?.pause();
    }
});

console.log('🎵 Music module loaded');