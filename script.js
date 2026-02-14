function startApp() {
    document.getElementById('vibeMusic').play();
    nextScene(2);
}

function nextScene(n) {
    document.querySelectorAll('.scene').forEach(s => s.classList.remove('active'));
    document.getElementById('s' + n).classList.add('active');
}

function runAway() {
    const btn = document.getElementById('runBtn');
    const x = Math.random() * (window.innerWidth - btn.clientWidth);
    const y = Math.random() * (window.innerHeight - btn.clientHeight);
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-20px';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.opacity = Math.random();
    heart.style.zIndex = '1';
    heart.style.transition = 'transform 6s linear, opacity 6s';
    
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = 'translateY(110vh)';
        heart.style.opacity = '0';
    }, 100);

    setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 300);