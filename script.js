// script.js
const messages = [
    { text: "¡Hola!, quiero invitarte a mi graduación :D 🎓", image: "image1.jpg" },
    { text: "¡Me gradúo y quiero celebrarlo contigo!, sería muy bonito que estuvieras ahí", image: "image2.jpg" },
    { text: "La entrega de las cartas de pasante será el 5 de Septiembre, a las 7:00 PM, el lugar aún no lo informan 🫣", image: "image3.jpg" },
    { text: "Pero te lo haré saber apenas sepa 💖", image: "image4.png" },
    { text: "Ojalá puedas asistir y que te encuentres muy bien ✨👀", image: "image5.jpg" },
    { text: "¡Espero que podamos celebrar juntos! 🎉, hasta el 15 🙌", image: "image6.png" }
];

let currentMessageIndex = 0;
const messageContainer = document.getElementById('messageContainer');
const nextButton = document.getElementById('nextButton');
const progressBar = document.getElementById('progressBar');
const confirmationContainer = document.getElementById('confirmationContainer');
const totalMessages = messages.length + 1; // Including final message without images

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.card').style.transform = 'translateY(-90px)';
    }, 1000);

    // Reproduce la música automáticamente al cargar la página
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.play();
});

document.querySelector('.valentines').addEventListener('click', () => {
    document.querySelector('.valentines').style.opacity = '0';
    document.querySelector('.valentines').style.transition = 'opacity 1s';
    setTimeout(() => {
        document.querySelector('.valentines').style.display = 'none';
        document.getElementById('inviteContainer').style.display = 'block';
    }, 1000);
});

nextButton.addEventListener('click', () => {
    const currentMessage = document.querySelector('.message.visible');
    if (currentMessage) {
        currentMessage.classList.remove('visible');
        setTimeout(() => currentMessage.remove(), 500); // Remove message after fade-out
    }

    currentMessageIndex++;
    if (currentMessageIndex < messages.length) {
        const newMessage = document.createElement('div');
        newMessage.className = 'message';
        newMessage.innerHTML = `<p>${messages[currentMessageIndex].text}</p><img src="${messages[currentMessageIndex].image}" alt="Imagen ${currentMessageIndex + 1}">`;
        messageContainer.appendChild(newMessage);
        
        setTimeout(() => {
            newMessage.classList.add('visible');
        }, 10);
    } else {
        // Display full message without images
        const finalMessage = document.createElement('div');
        finalMessage.className = 'message';
        finalMessage.innerHTML = messages.map(m => `<p>${m.text}</p>`).join('');
        messageContainer.appendChild(finalMessage);
        
        setTimeout(() => {
            finalMessage.classList.add('visible');
        }, 10);

        // Mostrar contenedor de confirmación y cambiar fondo
        document.body.style.backgroundImage = "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)";
        setTimeout(() => {
            confirmationContainer.style.display = 'block';
            triggerConfetti();
        }, 1000);
        
        nextButton.style.display = 'none'; // Ocultar botón después de la última pantalla
    }
    
    // Update progress bar
    progressBar.style.width = `${((currentMessageIndex + 1) / totalMessages) * 100}%`;
});

