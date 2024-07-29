function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    // Guardar el estado del modo oscuro en el almacenamiento local
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Verificar el estado del modo oscuro al cargar la página
window.onload = function() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
}

document.getElementById('startLabBtn').addEventListener('click', function() {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('virtual-lab').classList.remove('hidden');
    this.style.display = 'none';
  });
  

  function showDetails(linkElement) {
    const title = linkElement.getAttribute('data-title');
    const description = linkElement.getAttribute('data-description');
    const features = linkElement.getAttribute('data-features');
    const imageSrc = linkElement.getAttribute('data-image');
    
    // Configurar los detalles de la imagen
    document.getElementById('detail-image').src = imageSrc;
    document.getElementById('detail-title').innerHTML = `<h2>${title}</h2>`;
    const descriptionElement = document.getElementById('detail-description');
    descriptionElement.innerHTML = `<p>${description}</p>`;
    const featuresElement = document.getElementById('detail-features');
    
    // Mostrar los detalles
    document.getElementById('image-details').classList.remove('hidden');
    document.body.classList.add('no-scroll');
}

function hideDetails() {
    document.getElementById('image-details').classList.add('hidden');
    document.body.classList.remove('no-scroll');
}

document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');

    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    document.getElementById('send-btn').addEventListener('click', sendMessage);
    document.getElementById('user-input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    console.log('User input:', userInput);
    if (userInput.trim() === '') return;

    addMessageToChat(userInput, 'user');
    document.getElementById('user-input').value = '';

    // Simulate AI response
    const aiResponse = getAIResponse(userInput);
    setTimeout(() => {
        addMessageToChat(aiResponse, 'ai');
    }, 500);
}

function addMessageToChat(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
    console.log('Message added to chat:', message, 'Sender:', sender);
}

function getAIResponse(userInput) {
    // Basic AI responses for AWS services
    const responses = {
        'ec2': 'Amazon EC2 (Elastic Compute Cloud) permite a los usuarios alquilar máquinas virtuales para ejecutar sus propias aplicaciones.',
        's3': 'Amazon S3 (Simple Storage Service) es un servicio de almacenamiento en la nube que ofrece almacenamiento escalable, alta disponibilidad y seguridad.',
        'lambda': 'AWS Lambda es un servicio de computación sin servidor que ejecuta código en respuesta a eventos y automáticamente gestiona los recursos computacionales requeridos.',
        'rds': 'Amazon RDS (Relational Database Service) facilita la configuración, operación y escalabilidad de una base de datos relacional en la nube.'
    };

    const lowerCaseInput = userInput.toLowerCase();
    return responses[lowerCaseInput] || 'Lo siento, no tengo información sobre ese servicio. Por favor, pregúntame sobre otro servicio de AWS.';
}

document.addEventListener('DOMContentLoaded', function () {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
});

