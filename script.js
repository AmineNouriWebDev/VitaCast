// Initialiser AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Gérer le menu mobile
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    const icon = this.querySelector('i');

    // Toggle menu
    menu.classList.toggle('hidden');

    // Changer l'icône
    if (menu.classList.contains('hidden')) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }
});

// Fermer le menu mobile quand on clique sur un lien
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('hidden');
        document.getElementById('mobile-menu-button').querySelector('i').classList.remove('fa-times');
        document.getElementById('mobile-menu-button').querySelector('i').classList.add('fa-bars');
    });
});

// Gérer le scroll pour ajouter une ombre à la navbar
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 10) {
        header.style.boxShadow = '0 10px 40px rgba(168, 85, 247, 0.3)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Gestion des formulaires (pour contact.html seulement)
if (document.getElementById('contact-form')) {
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Merci pour votre message! Nous vous répondrons dans les plus brefs délais.');
        this.reset();
    });
}

if (document.getElementById('devis-form')) {
    document.getElementById('devis-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Votre demande de devis a été envoyée avec succès! Notre équipe commerciale vous contactera rapidement.');
        this.reset();
    });
}

// Animation des particules supplémentaires
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    
    const particlesContainer = document.querySelector('.particles');
    if (particlesContainer) {
        particlesContainer.appendChild(particle);
        
        setTimeout(() => particle.remove(), 20000);
    }
}

// Créer des particules périodiquement si on a un conteneur de particules
if (document.querySelector('.particles')) {
    setInterval(createParticle, 2000);
}