// script.js - Version mise à jour pour VITA CAST
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== GESTION DU MENU MOBILE ==========
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('hidden');
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
                mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
            });
        });
    }
    
    // ========== OMBRE SUR LE HEADER AU SCROLL ==========
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 10px 30px rgba(10, 2, 15, 0.15)';
            } else {
                header.style.boxShadow = '0 4px 12px rgba(10, 2, 15, 0.1)';
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
    const cards = document.querySelectorAll('.avantage-card, .product-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // ========== OPTIMISATION MOBILE ==========
    function optimizeForMobile() {
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // Désactiver certaines animations lourdes sur mobile
            document.querySelectorAll('.float-animation').forEach(el => {
                el.style.animation = 'none';
            });
        }
    }
    
    // Exécuter au chargement et au redimensionnement
    optimizeForMobile();
    window.addEventListener('resize', optimizeForMobile);
    
    // ========== SCROLL LISSE POUR LES ANCRES ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && href.startsWith('#') && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});