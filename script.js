document.addEventListener('DOMContentLoaded', () => {

    // =======================================
    // 1. NUEVO: Lógica para la Animación de Apertura
    // =======================================
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');

    // Muestra el contenido principal después de 3 segundos
    setTimeout(() => {
        if (loader) {
            loader.classList.add('hidden');
        }
        if (mainContent) {
            mainContent.classList.remove('hidden');
        }
    }, 3000); // 3000 milisegundos = 3 segundos


    // --- SCRIPT DE CORAZONES ---
    const heartsContainer = document.getElementById('hearts-container');
    if (heartsContainer) {
        const hearts = 15;
        for (let i = 0; i < hearts; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.animationDelay = `${Math.random() * 10}s`;
            heart.style.animationDuration = `${5 + Math.random() * 5}s`;
            heartsContainer.appendChild(heart);
        }
    }

    // --- SCRIPT DE CUENTA REGRESIVA ---
    const anniversaryDate = new Date("Sep 24, 2025 00:00:00").getTime();
    const countdownElement = document.getElementById('countdown');
    const anniversaryMessage = document.getElementById('anniversary-message');
    const countdownSection = document.getElementById('countdown-section');
    
    if (countdownElement && anniversaryMessage && countdownSection) {
        const countdownInterval = setInterval(() => {
            const now = new Date().getTime();
            const distance = anniversaryDate - now;

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

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

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

    // =======================================
    // 2. NUEVO: Lógica para el Botón de Razones
    // =======================================
    const reasonsButton = document.getElementById('reasons-button');
    const reasonDisplay = document.getElementById('reason-display');
    let lastReasonIndex = -1; // Para evitar repetir la misma razón seguida

    // ¡Personaliza esta lista con tus propias razones!
    const reasons = [
        "Por tu risa que ilumina todo.",
        "Porque me haces sentir en casa.",
        "Por cómo me miras.",
        "Porque siempre sabes qué decir.",
        "Por tu fuerza y tu valentía.",
        "Porque cada día contigo es una aventura.",
        "Porque me apoyas en todas mis locuras.",
        "Por lo increíblemente inteligente que eres.",
        "Porque haces el mejor café del mundo.",
        "Porque simplemente, eres tú."
    ];

    if (reasonsButton && reasonDisplay) {
        reasonsButton.addEventListener('click', () => {
            let randomIndex;
            // Bucle para asegurar que no se repita la razón anterior
            do {
                randomIndex = Math.floor(Math.random() * reasons.length);
            } while (reasons.length > 1 && randomIndex === lastReasonIndex);
            
            lastReasonIndex = randomIndex;
            reasonDisplay.innerHTML = `<p class="fade-in">${reasons[randomIndex]}</p>`;
        });
    }

    // Pequeña animación de fade-in para el texto de la razón
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .fade-in {
            animation: fadeIn 0.5s ease-in-out;
        }
    `;
    document.head.appendChild(styleSheet);
});
