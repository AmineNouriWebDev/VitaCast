// ========== FORCER HTTPS ==========
if (window.location.protocol === 'http:' && window.location.hostname === 'vita-cast.com.tn') {
    window.location.href = window.location.href.replace('http:', 'https:');
}

if (window.location.hostname === 'www.vita-cast.com.tn') {
    window.location.href = window.location.href.replace('www.vita-cast.com.tn', 'vita-cast.com.tn');
}
// ========== GESTION DES ERREURS 404 ==========
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier si la page actuelle n'existe pas (simulation)
    const currentPath = window.location.pathname;
    const validPages = ['/', '/index.html', '/about.html', '/products.html', '/contact.html'];
    
    if (!validPages.includes(currentPath) && !currentPath.includes('#')) {
        // Rediriger vers l'accueil après 2 secondes
        setTimeout(function() {
            window.location.href = 'https://vita-cast.com.tn/';
        }, 2000);
    }
});

// script.js - Version VITA CAST 
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== GESTION DU MENU MOBILE ==========
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    if (mobileMenuBtn && mobileNav) {
        // Au clic sur le bouton burger
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation(); // Empêche les conflits éventuels
            
            // Basculer la classe hidden
            mobileNav.classList.toggle('hidden');
            
            // Changer l'icône
            const icon = this.querySelector('i');
            if (mobileNav.classList.contains('hidden')) {
                icon.className = 'fas fa-bars';
            } else {
                icon.className = 'fas fa-times';
            }
        });
        
        // Fermer le menu en cliquant sur un lien
        document.querySelectorAll('#mobileNav a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                if(icon) icon.className = 'fas fa-bars';
            });
        });
        
        // Fermer le menu en cliquant en dehors (optionnel)
        document.addEventListener('click', function(e) {
            if (!mobileNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileNav.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                if(icon) icon.className = 'fas fa-bars';
            }
        });
    }
    
    // Le reste du code reste inchangé...
    // ========== OMBRE SUR LE HEADER AU SCROLL ==========
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 20) {
                header.classList.add('shadow-lg');
                header.style.boxShadow = '0 10px 30px rgba(10, 2, 15, 0.3)';
            } else {
                header.classList.remove('shadow-lg');
                header.style.boxShadow = 'none';
            }
        }
    });
    
    // ========== GESTION DU FORMULAIRE DE DEVIS ==========
    const devisForm = document.getElementById('devis-form');
    if (devisForm) {
        devisForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Votre demande de devis a été envoyée avec succès ! Notre équipe commerciale vous contactera rapidement.');
            this.reset();
        });
    }

    // ========== ANIMATION DES CARTES AU HOVER ==========
    // On vérifie si c'est desktop pour éviter les bugs tactiles
    if (window.innerWidth > 768) {
        const cards = document.querySelectorAll('.avantage-card, .product-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }
    
    // ========== SCROLL LISSE POUR LES ANCRES ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});