document.addEventListener('DOMContentLoaded', () => {
    // --- SCRIPT DE CORAZONES ---
    const heartsContainer = document.getElementById('hearts-container');
    const hearts = 15; // Número de corazones
    
    if (heartsContainer) {
        for (let i = 0; i < hearts; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.animationDelay = `${Math.random() * 10}s`;
            heart.style.animationDuration = `${5 + Math.random() * 5}s`; // Duración variada
            heartsContainer.appendChild(heart);
        }
    }

    // --- SCRIPT DE CUENTA REGRESIVA ---
    const anniversaryDate = new Date("Sep 24, 2025 00:00:00").getTime();
    const countdownElement = document.getElementById('countdown');
    const anniversaryMessage = document.getElementById('anniversary-message');
    const countdownSection = document.getElementById('countdown-section');

    // Solo ejecuta el script si los elementos existen en la página
    if (countdownElement && anniversaryMessage && countdownSection) {
        const countdownInterval = setInterval(() => {
            const now = new Date().getTime();
            const distance = anniversaryDate - now;

            // Si la fecha ya pasó, muestra el mensaje de aniversario
            if (distance < 0) {
                clearInterval(countdownInterval);
                const countdownHeading = countdownSection.querySelector('h3');
                if(countdownHeading) {
                    countdownHeading.style.display = 'none';
                }
                countdownElement.style.display = 'none';
                anniversaryMessage.classList.remove('hidden');
                return;
            }

            // Cálculos de tiempo
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Muestra el resultado en el HTML
            countdownElement.innerHTML = `
                <div class="bg-white/50 p-3 rounded-lg shadow-md w-20 text-center">
                    <div class="text-3xl font-bold text-gray-800">${days}</div>
                    <div class="text-xs uppercase text-gray-600">Días</div>
                </div>
                <div class="bg-white/50 p-3 rounded-lg shadow-md w-20 text-center">
                    <div class="text-3xl font-bold text-gray-800">${hours}</div>
                    <div class="text-xs uppercase text-gray-600">Horas</div>
                </div>
                <div class="bg-white/50 p-3 rounded-lg shadow-md w-20 text-center">
                    <div class="text-3xl font-bold text-gray-800">${minutes}</div>
                    <div class="text-xs uppercase text-gray-600">Minutos</div>
                </div>
                <div class="bg-white/50 p-3 rounded-lg shadow-md w-20 text-center">
                    <div class="text-3xl font-bold text-gray-800">${seconds}</div>
                    <div class="text-xs uppercase text-gray-600">Segundos</div>
                </div>
            `;
        }, 1000);
    }
});
