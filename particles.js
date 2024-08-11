// Confetti and music functionality
const canvas = document.getElementById('canvas');
const musicButton = document.getElementById('musicButton');
const backgroundMusic = document.getElementById('backgroundMusic');

musicButton.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicButton.textContent = "⏸️";
    } else {
        backgroundMusic.pause();
        musicButton.textContent = "🎵";
    }
});


// Parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    document.querySelector('.background').style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Confetti animation
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Send confirmation email using Formspree
const confirmButton = document.getElementById('confirmButton');
confirmButton.addEventListener('click', () => {
    const confirmationMessage = document.getElementById('confirmationMessage').value;

    fetch('https://formspree.io/f/mgvwylqy', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: confirmationMessage
        })
    })
    .then(response => response.json())
    .then(data => {
        alert('Nos vemos ahí entonces👀💖');
        document.getElementById('confirmationMessage').value = '';  // Limpia el mensaje de confirmación
    })
    .catch(error => {
        console.error('Error al enviar el correo:', error);
        alert('Ups, hubo un error y no se pudo mandar el mensaje 😢.');
    });
});
