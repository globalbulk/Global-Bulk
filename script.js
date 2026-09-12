(function() {
    'use strict';

    // ===== DONNÉES =====
    var categories = [
        { icon: 'fa-laptop', name: 'Électronique', count: 1240 },
        { icon: 'fa-tshirt', name: 'Mode', count: 980 },
        { icon: 'fa-shoe-prints', name: 'Chaussures', count: 540 },
        { icon: 'fa-spa', name: 'Beauté', count: 760 },
        { icon: 'fa-home', name: 'Maison', count: 1120 },
        { icon: 'fa-hard-hat', name: 'Construction', count: 430 },
        { icon: 'fa-seedling', name: 'Agriculture', count: 310 },
        { icon: 'fa-utensils', name: 'Alimentation', count: 890 },
        { icon: 'fa-car', name: 'Automobile', count: 520 },
        { icon: 'fa-cogs', name: 'Équipements', count: 380 },
        { icon: 'fa-solar-panel', name: 'Énergie', count: 210 },
        { icon: 'fa-pencil-alt', name: 'Fournitures', count: 470 },
        { icon: 'fa-gem', name: 'Bijoux', count: 150 },
        { icon: 'fa-child', name: 'Jouets', count: 280 },
        { icon: 'fa-book', name: 'Librairie', count: 190 },
        { icon: 'fa-futbol', name: 'Sport', count: 340 },
        { icon: 'fa-music', name: 'Instruments', count: 110 },
        { icon: 'fa-camera', name: 'Photo', count: 160 },
        { icon: 'fa-tools', name: 'Outillage', count: 320 },
        { icon: 'fa-paw', name: 'Animalerie', count: 95 }
    ];

    var products = [{
        id: 1, name: 'Smartphone Galaxy S24', price: 120, unit: 'Pi', minOrder: 10, stock: 850,
        supplier: 'MobileTech GmbH', country: 'Allemagne', verified: true, rating: 4.9, category: 'Électronique',
        images: ['https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&h=400&fit=crop']
    }, {
        id: 2, name: 'Ordinateur Portable Pro', price: 450, unit: 'Pi', minOrder: 5, stock: 320,
        supplier: 'TechImport SARL', country: 'Chine', verified: true, rating: 4.8, category: 'Électronique',
        images: ['https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop']
    }, {
        id: 3, name: 'Voiture Électrique Model 3', price: 35000, unit: 'Pi', minOrder: 1, stock: 45,
        supplier: 'AutoGreen SA', country: 'USA', verified: true, rating: 4.7, category: 'Automobile',
        images: ['https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop']
    }, {
        id: 4, name: 'T-shirt en coton bio', price: 2.5, unit: 'Pi', minOrder: 200, stock: 12000,
        supplier: 'EcoWear SARL', country: 'France', verified: true, rating: 4.7, category: 'Mode',
        images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=400&fit=crop']
    }, {
        id: 5, name: 'Chaussures de sport', price: 12, unit: 'Pi', minOrder: 50, stock: 320,
        supplier: 'SportFoot Inc', country: 'USA', verified: false, rating: 4.2, category: 'Chaussures',
        images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1605348532760-1633b2c78b2e?w=600&h=400&fit=crop']
    }, {
        id: 6, name: 'Montre connectée', price: 35, unit: 'Pi', minOrder: 20, stock: 1500,
        supplier: 'TechImport SARL', country: 'Chine', verified: true, rating: 4.6, category: 'Électronique',
        images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&h=400&fit=crop']
    }, {
        id: 7, name: 'Lampe solaire 10W', price: 4.5, unit: 'Pi', minOrder: 100, stock: 3000,
        supplier: 'GreenEnergy Ltd', country: 'Allemagne', verified: true, rating: 4.5, category: 'Énergie',
        images: ['https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=600&h=400&fit=crop']
    }, {
        id: 8, name: 'Meubles de salon (set)', price: 180, unit: 'Pi', minOrder: 5, stock: 120,
        supplier: 'HomeFurnish SARL', country: 'France', verified: false, rating: 4.0, category: 'Maison',
        images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop']
    }, {
        id: 9, name: 'Café Arabica 1kg', price: 3.2, unit: 'Pi', minOrder: 500, stock: 8000,
        supplier: 'AgriExport Co', country: 'Colombie', verified: true, rating: 4.9, category: 'Alimentation',
        images: ['https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=400&fit=crop']
    }, {
        id: 10, name: 'Crème Anti-Âge 50ml', price: 8, unit: 'Pi', minOrder: 100, stock: 2000,
        supplier: 'BeautyLab SAS', country: 'France', verified: true, rating: 4.3, category: 'Beauté',
        images: ['https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1556228454-3a6d7d1c5c7f?w=600&h=400&fit=crop']
    }, {
        id: 11, name: 'Tracteur Agricole 4x4', price: 45000, unit: 'Pi', minOrder: 1, stock: 12,
        supplier: 'AgriMachines Ltd', country: 'USA', verified: true, rating: 4.4, category: 'Agriculture',
        images: ['https://images.unsplash.com/photo-1531816458010-4f4c24de72e1?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop']
    }, {
        id: 12, name: 'Équipement de Chantier (set)', price: 220, unit: 'Pi', minOrder: 10, stock: 340,
        supplier: 'BuildPro SARL', country: 'France', verified: false, rating: 3.9, category: 'Construction',
        images: ['https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop']
    }];

    var suppliers = [
        { name: 'TechImport SARL', country: 'Chine', verified: true, products: 340, years: 8, rating: 4.8, responseRate: 96, categories: 'Électronique, Énergie' },
        { name: 'MobileTech GmbH', country: 'Allemagne', verified: true, products: 210, years: 12, rating: 4.9, responseRate: 98, categories: 'Électronique, Automobile' },
        { name: 'EcoWear SARL', country: 'France', verified: true, products: 180, years: 5, rating: 4.7, responseRate: 92, categories: 'Mode, Maison' },
        { name: 'GreenEnergy Ltd', country: 'Allemagne', verified: true, products: 90, years: 7, rating: 4.5, responseRate: 88, categories: 'Énergie, Équipements' },
        { name: 'SportFoot Inc', country: 'USA', verified: false, products: 65, years: 3, rating: 4.2, responseRate: 75, categories: 'Chaussures, Mode' }
    ];

    var cartItems = [];
    var allCountries = [
        'Afghanistan', 'Afrique du Sud', 'Albanie', 'Algérie', 'Allemagne', 'Andorre', 'Angola', 'Antigua-et-Barbuda',
        'Arabie saoudite', 'Argentine', 'Arménie', 'Australie', 'Autriche', 'Azerbaïdjan', 'Bahamas', 'Bahreïn',
        'Bangladesh', 'Barbade', 'Belgique', 'Belize', 'Bénin', 'Bhoutan', 'Biélorussie', 'Birmanie', 'Bolivie',
        'Bosnie-Herzégovine', 'Botswana', 'Brésil', 'Brunei', 'Bulgarie', 'Burkina Faso', 'Burundi', 'Cambodge',
        'Cameroun', 'Canada', 'Cap-Vert', 'Centrafrique', 'Chili', 'Chine', 'Chypre', 'Colombie', 'Comores',
        'Congo', 'Corée du Nord', 'Corée du Sud', 'Costa Rica', 'Côte d\'Ivoire', 'Croatie', 'Cuba', 'Danemark',
        'Djibouti', 'Dominique', 'Égypte', 'Émirats arabes unis', 'Équateur', 'Érythrée', 'Espagne', 'Estonie',
        'Eswatini', 'États-Unis', 'Éthiopie', 'Fidji', 'Finlande', 'France', 'Gabon', 'Gambie', 'Géorgie', 'Ghana',
        'Grèce', 'Grenade', 'Guatemala', 'Guinée', 'Guinée-Bissau', 'Guinée équatoriale', 'Guyana', 'Haïti',
        'Honduras', 'Hongrie', 'Inde', 'Indonésie', 'Irak', 'Iran', 'Irlande', 'Islande', 'Israël', 'Italie',
        'Jamaïque', 'Japon', 'Jordanie', 'Kazakhstan', 'Kenya', 'Kirghizistan', 'Kiribati', 'Koweït', 'Laos',
        'Lesotho', 'Lettonie', 'Liban', 'Libéria', 'Libye', 'Liechtenstein', 'Lituanie', 'Luxembourg', 'Macédoine du Nord',
        'Madagascar', 'Malaisie', 'Malawi', 'Maldives', 'Mali', 'Malte', 'Maroc', 'Marshall', 'Maurice', 'Mauritanie',
        'Mexique', 'Micronésie', 'Moldavie', 'Monaco', 'Mongolie', 'Monténégro', 'Mozambique', 'Namibie', 'Nauru',
        'Népal', 'Nicaragua', 'Niger', 'Nigeria', 'Norvège', 'Nouvelle-Zélande', 'Oman', 'Ouganda', 'Ouzbékistan',
        'Pakistan', 'Palaos', 'Palestine', 'Panama', 'Papouasie-Nouvelle-Guinée', 'Paraguay', 'Pays-Bas', 'Pérou',
        'Philippines', 'Pologne', 'Portugal', 'Qatar', 'République centrafricaine', 'République démocratique du Congo',
        'République dominicaine', 'République tchèque', 'Roumanie', 'Royaume-Uni', 'Russie', 'Rwanda', 'Saint-Christophe-et-Niévès',
        'Sainte-Lucie', 'Saint-Marin', 'Saint-Vincent-et-les-Grenadines', 'Salomon', 'Salvador', 'Samoa', 'São Tomé-et-Principe',
        'Sénégal', 'Serbie', 'Seychelles', 'Sierra Leone', 'Singapour', 'Slovaquie', 'Slovénie', 'Somalie', 'Soudan',
        'Soudan du Sud', 'Sri Lanka', 'Suède', 'Suisse', 'Suriname', 'Syrie', 'Tadjikistan', 'Tanzanie', 'Tchad',
        'Thaïlande', 'Timor oriental', 'Togo', 'Tonga', 'Trinité-et-Tobago', 'Tunisie', 'Turkménistan', 'Turquie',
        'Tuvalu', 'Ukraine', 'Uruguay', 'Vanuatu', 'Vatican', 'Venezuela', 'Viêt Nam', 'Yémen', 'Zambie', 'Zimbabwe'
    ];

    var selectedCountry = '';
    var selectedCategory = 'all';

    // ===== ÉTAT PI NETWORK =====
    var piUser = null; // { uid, username }
    var piInitialized = false;

    // ===== UTILITAIRES =====
    function formatNumber(n) {
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    function showToast(message, type) {
        type = type || 'info';
        var container = document.getElementById('toastContainer');
        if (!container) return;
        var toast = document.createElement('div');
        toast.className = 'toast ' + type;
        var iconMap = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle' };
        var icon = iconMap[type] || 'fa-info-circle';
        toast.innerHTML = '<i class="fas ' + icon + '"></i> ' + message;
        container.appendChild(toast);
        setTimeout(function() {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(20px)';
            setTimeout(function() { if (toast.parentNode) toast.remove(); }, 400);
        }, 3500);
    }

    // ===== PI NETWORK - INITIALISATION =====
    function initPiNetwork() {
        if (typeof Pi === 'undefined') {
            console.warn('Pi SDK non chargé. Ouvrez l\'application dans Pi Browser pour activer les paiements.');
            return;
        }
        try {
            Pi.init({ version: "2.0", sandbox: false });
            piInitialized = true;
            console.log('Pi SDK initialisé.');
        } catch (e) {
            console.warn('Erreur d\'initialisation Pi:', e);
        }
    }

    // ===== PI NETWORK - AUTHENTIFICATION =====
    function onIncompletePaymentFound(payment) {
        console.log('Paiement incomplet détecté :', payment);
        // Ici, dans une vraie application, on appellerait le backend pour compléter le paiement
        // Pour l'instant on affiche simplement un message
        showToast('Un paiement incomplet a été détecté', 'info');
    }

    function connectPi() {
        if (typeof Pi === 'undefined') {
            showToast('Veuillez ouvrir l\'application dans Pi Browser', 'error');
            return;
        }
        if (!piInitialized) {
            try {
                Pi.init({ version: "2.0", sandbox: false });
                piInitialized = true;
            } catch (e) {
                showToast('Erreur d\'initialisation Pi', 'error');
                return;
            }
        }
        Pi.authenticate(['username', 'payments'], onIncompletePaymentFound)
            .then(function(auth) {
                piUser = {
                    uid: auth.user.uid,
                    username: auth.user.username
                };
                try {
                    sessionStorage.setItem('pi_user', JSON.stringify(piUser));
                } catch (e) {}
                updatePiUI();
                showToast('Connecté à Pi : ' + auth.user.username, 'success');
                // Rafraîchir le contenu du profil si on est sur l'onglet connexion
                var activeTab = document.querySelector('.profile-betix-item.active');
                if (activeTab && activeTab.getAttribute('data-tab') === 'connexion') {
                    activateProfileBetixTab('connexion');
                }
            })
            .catch(function(err) {
                console.error('Erreur authentification Pi :', err);
                showToast('Connexion Pi annulée ou échouée', 'error');
            });
    }

    function disconnectPi() {
        piUser = null;
        try { sessionStorage.removeItem('pi_user'); } catch (e) {}
        updatePiUI();
        showToast('Déconnecté de Pi', 'info');
        var activeTab = document.querySelector('.profile-betix-item.active');
        if (activeTab && activeTab.getAttribute('data-tab') === 'connexion') {
            activateProfileBetixTab('connexion');
        }
    }

    function updatePiUI() {
        // Badge dans le header
        var badge = document.getElementById('piUserBadge');
        var usernameEl = document.getElementById('piUsername');
        if (piUser) {
            if (badge) badge.style.display = 'inline-flex';
            if (usernameEl) usernameEl.textContent = piUser.username;
        } else {
            if (badge) badge.style.display = 'none';
        }

        // En-tête du profil
        var profileNameDisplay = document.getElementById('profileNameDisplay');
        var profileRoleDisplay = document.getElementById('profileRoleDisplay');
        var profileAvatarLarge = document.getElementById('profileAvatarLarge');
        if (piUser) {
            if (profileNameDisplay) profileNameDisplay.textContent = piUser.username;
            if (profileRoleDisplay) profileRoleDisplay.textContent = 'Membre Pi Network';
            if (profileAvatarLarge) profileAvatarLarge.textContent = piUser.username.substring(0, 2).toUpperCase();
        } else {
            if (profileNameDisplay) profileNameDisplay.textContent = 'Non connecté';
            if (profileRoleDisplay) profileRoleDisplay.textContent = 'Connectez-vous avec Pi';
            if (profileAvatarLarge) profileAvatarLarge.textContent = '?';
        }
    }

    // Charge la session Pi si elle existe
    function loadPiSession() {
        try {
            var stored = sessionStorage.getItem('pi_user');
            if (stored) {
                piUser = JSON.parse(stored);
                updatePiUI();
            }
        } catch (e) {}
    }

    // ===== PI NETWORK - PAIEMENT =====
    function createPiPayment(total, memo, metadata) {
        return new Promise(function(resolve, reject) {
            if (typeof Pi === 'undefined') {
                reject(new Error('Pi SDK non disponible'));
                return;
            }
            if (!piUser) {
                reject(new Error('Utilisateur non connecté à Pi'));
                return;
            }
            Pi.createPayment({
                amount: total,
                memo: memo,
                metadata: metadata
            }, {
                onReadyForServerApproval: function(paymentId) {
                    // Dans une vraie app : envoyer paymentId à votre backend pour approbation
                    // Ici on simule une approbation immédiate
                    console.log('Paiement prêt pour approbation :', paymentId);
                    // En production : fetch('/api/approve', { method:'POST', body: { paymentId } })
                    // Puis : Pi Server API appelle /approve
                    // Simulation : on ne fait rien ici car Pi gère l'approbation côté SDK pour les tests
                },
                onReadyForServerCompletion: function(paymentId, txid) {
                    console.log('Paiement complété :', paymentId, txid);
                    resolve({ paymentId: paymentId, txid: txid });
                },
                onCancel: function(paymentId) {
                    console.log('Paiement annulé :', paymentId);
                    reject(new Error('Paiement annulé'));
                },
                onError: function(error, payment) {
                    console.error('Erreur paiement :', error, payment);
                    reject(error);
                }
            });
        });
    }

    // ===== LOADER =====
    function simulateLoader(callback) {
        var bar = document.getElementById('loaderBar');
        var text = document.getElementById('loaderText');
        var progress = 0;
        var interval = setInterval(function() {
            progress += Math.floor(Math.random() * 8) + 2;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                text.textContent = 'Prêt !';
                setTimeout(function() {
                    var loader = document.getElementById('globalLoader');
                    if (loader) loader.classList.add('hidden');
                    var app = document.getElementById('appContent');
                    if (app) app.style.display = 'block';
                    if (typeof callback === 'function') callback();
                }, 400);
            }
            if (bar) bar.style.width = progress + '%';
            if (text) text.textContent = 'Chargement ' + progress + '%';
        }, 120);
        setTimeout(function() {
            var loader = document.getElementById('globalLoader');
            if (loader && !loader.classList.contains('hidden')) {
                loader.classList.add('hidden');
                var app = document.getElementById('appContent');
                if (app) app.style.display = 'block';
                if (typeof callback === 'function') callback();
            }
        }, 5000);
    }

    // ===== SLIDER =====
    function initSlider() {
        var slides = [
            { image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop', title: 'First Purchase', subtitle: 'Enjoy a Special Offer!', cta: 'Découvrir', link: '#' },
            { image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&h=600&fit=crop', title: 'Électronique de pointe', subtitle: 'Des ordinateurs et smartphones au meilleur prix', cta: 'Voir les offres', link: '#' },
            { image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&h=600&fit=crop', title: 'Automobile et équipements', subtitle: 'Des véhicules et accessoires pour professionnels', cta: 'Explorer', link: '#' }
        ];
        var track = document.getElementById('sliderTrack');
        var dotsContainer = document.getElementById('sliderDots');
        if (!track || !dotsContainer) return;
        var currentIndex = 0;
        var totalSlides = slides.length;

        track.innerHTML = slides.map(function(s) {
            return '<div class="slider-slide" style="background-image: url(' + s.image + ');">' +
                '<div class="slide-overlay"></div>' +
                '<div class="slide-content">' +
                '<h2>' + s.title + '</h2>' +
                '<p>' + s.subtitle + '</p>' +
                '<a href="' + s.link + '" class="btn">' + s.cta + ' <i class="fas fa-arrow-right"></i></a>' +
                '</div></div>';
        }).join('');

        dotsContainer.innerHTML = slides.map(function(_, i) {
            return '<button class="dot' + (i === 0 ? ' active' : '') + '" data-index="' + i + '"></button>';
        }).join('');

        function goToSlide(index) {
            if (index < 0) index = totalSlides - 1;
            if (index >= totalSlides) index = 0;
            currentIndex = index;
            track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
            dotsContainer.querySelectorAll('.dot').forEach(function(dot, i) {
                dot.classList.toggle('active', i === currentIndex);
            });
        }
        var prevBtn = document.getElementById('sliderPrev');
        var nextBtn = document.getElementById('sliderNext');
        if (prevBtn) prevBtn.addEventListener('click', function() { goToSlide(currentIndex - 1); });
        if (nextBtn) nextBtn.addEventListener('click', function() { goToSlide(currentIndex + 1); });
        dotsContainer.addEventListener('click', function(e) {
            var dot = e.target.closest('.dot');
            if (dot) goToSlide(parseInt(dot.getAttribute('data-index')));
        });
        var autoPlayInterval = setInterval(function() { goToSlide(currentIndex + 1); }, 5000);
        var sliderContainer = document.querySelector('.slider-container');
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', function() { clearInterval(autoPlayInterval); });
            sliderContainer.addEventListener('mouseleave', function() {
                autoPlayInterval = setInterval(function() { goToSlide(currentIndex + 1); }, 5000);
            });
        }
    }

    // ===== FILTRES CATÉGORIES =====
    function renderCategoryFilters() {
        var container = document.getElementById('categoryFilterList');
        if (!container) return;
        container.innerHTML = '';
        var allNames = ['Tous'].concat(categories.map(function(c) { return c.name; }));
        allNames.forEach(function(catName, index) {
            var btn = document.createElement('button');
            btn.className = 'filter-cat' + (index === 0 ? ' active' : '');
            btn.setAttribute('data-cat', catName === 'Tous' ? 'all' : catName);
            btn.textContent = catName;
            btn.addEventListener('click', function() {
                selectCategoryFilter(btn.getAttribute('data-cat'));
            });
            container.appendChild(btn);
        });
    }

    function selectCategoryFilter(catName) {
        selectedCategory = catName;
        document.querySelectorAll('.filter-cat').forEach(function(btn) {
            btn.classList.remove('active');
            if (btn.getAttribute('data-cat') === catName) btn.classList.add('active');
        });
        applyFilters();
        showToast(catName === 'all' ? 'Toutes les catégories' : 'Catégorie : ' + catName, 'info');
    }

    // ===== RENDER PRODUCTS =====
    function renderProducts(list) {
        list = list || products;
        var grid = document.getElementById('productGrid');
        if (!grid) return;
        grid.innerHTML = list.map(function(p) {
            var verifiedBadge = p.verified ? '<span class="verified-badge"><i class="fas fa-check-circle"></i> Vérifié</span>' : '';
            var firstImage = p.images && p.images.length > 0 ? p.images[0] : 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop';
            var imageCount = p.images ? p.images.length : 0;
            var countBadge = imageCount > 1 ? '<span class="image-count-badge">+' + (imageCount - 1) + '</span>' : '';
            return '<div class="card-product" onclick="showProductDetail(' + p.id + ')">' +
                '<div class="image">' +
                '<img src="' + firstImage + '" alt="' + p.name + '" loading="lazy" />' +
                verifiedBadge + countBadge +
                '</div>' +
                '<div class="body">' +
                '<div class="title">' + p.name + '</div>' +
                '<div class="price">' + p.price + ' ' + p.unit + ' <small>/ unité</small></div>' +
                '<div class="meta">' +
                '<span><i class="fas fa-box"></i> Min: ' + p.minOrder + '</span>' +
                '<span><i class="fas fa-warehouse"></i> ' + formatNumber(p.stock) + '</span>' +
                '<span><i class="fas fa-star" style="color:var(--secondary);"></i> ' + p.rating + '</span>' +
                '</div>' +
                '<div style="font-size:12px;color:var(--text-muted);">' + p.supplier + ' · ' + p.country + '</div>' +
                '<div class="actions">' +
                '<button class="btn btn-primary btn-sm" onclick="event.stopPropagation();addToCart(' + p.id + ')"><i class="fas fa-cart-plus"></i></button>' +
                '<button class="btn btn-outline btn-sm" onclick="event.stopPropagation();showProductDetail(' + p.id + ')">Voir</button>' +
                '</div></div></div>';
        }).join('');
        var countEl = document.getElementById('productCount');
        if (countEl) countEl.textContent = list.length + ' produits';
    }

    function renderSuppliers() {
        var grid = document.getElementById('supplierGrid');
        if (!grid) return;
        grid.innerHTML = suppliers.map(function(s) {
            var verifiedBadge = s.verified ? '<span class="badge badge-verified"><i class="fas fa-check-circle"></i> Vérifié</span>' : '';
            return '<div class="card-supplier">' +
                '<div class="avatar"><i class="fas fa-building"></i></div>' +
                '<div class="info">' +
                '<div class="name">' + s.name + ' ' + verifiedBadge + '</div>' +
                '<div class="detail">' +
                '<span><i class="fas fa-map-marker-alt"></i> ' + s.country + '</span>' +
                '<span><i class="fas fa-box"></i> ' + s.products + ' produits</span>' +
                '<span><i class="fas fa-star" style="color:var(--secondary);"></i> ' + s.rating + '</span>' +
                '<span><i class="fas fa-clock"></i> ' + s.responseRate + '%</span>' +
                '</div></div></div>';
        }).join('');
    }

    function setupFilters() {
        var countrySelect = document.getElementById('filterCountry');
        if (countrySelect) {
            countrySelect.innerHTML = '<option value="">Tous</option>';
            allCountries.forEach(function(c) {
                countrySelect.innerHTML += '<option value="' + c + '">' + c + '</option>';
            });
            countrySelect.addEventListener('change', function() {
                selectedCountry = this.value;
                applyFilters();
            });
        }
    }

    function applyFilters() {
        var filtered = products.slice();
        if (selectedCountry) filtered = filtered.filter(function(p) { return p.country === selectedCountry; });
        if (selectedCategory && selectedCategory !== 'all') filtered = filtered.filter(function(p) { return p.category === selectedCategory; });
        renderProducts(filtered);
    }

    // ===== RECHERCHE =====
    document.getElementById('searchToggle').addEventListener('click', function() {
        document.getElementById('searchDropdown').classList.toggle('open');
    });
    document.getElementById('searchBtn').addEventListener('click', doSearch);
    document.getElementById('searchInput').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') doSearch();
    });

    function doSearch() {
        var q = document.getElementById('searchInput').value.trim().toLowerCase();
        if (!q) { showToast('Veuillez saisir un terme de recherche', 'error'); return; }
        var filtered = products.filter(function(p) {
            return p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.supplier.toLowerCase().includes(q);
        });
        if (filtered.length === 0) showToast('Aucun résultat trouvé', 'error');
        else {
            renderProducts(filtered);
            showToast(filtered.length + ' résultat(s) trouvé(s)', 'success');
        }
        document.getElementById('searchDropdown').classList.remove('open');
    }

    // ===== PAGES SECONDAIRES =====
    function showMainContent() {
        document.getElementById('mainContent').style.display = 'block';
        document.getElementById('productDetail').style.display = 'none';
        document.getElementById('publishSection').style.display = 'none';
        document.getElementById('profileSection').style.display = 'none';
    }

    function hideMainContent() {
        document.getElementById('mainContent').style.display = 'none';
    }

    window.showProductDetail = function(id) {
        var p = products.find(function(x) { return x.id === id; });
        if (!p) return;
        hideMainContent();
        document.getElementById('productDetail').style.display = 'block';
        document.getElementById('productDetailTitle').textContent = p.name;
        var content = document.getElementById('productDetailContent');
        if (!content) return;
        var images = p.images && p.images.length > 0 ? p.images : ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop'];
        var thumbnailsHtml = images.map(function(img, i) {
            return '<div class="thumb' + (i === 0 ? ' active' : '') + '" onclick="changeMainImage(this, \'' + img + '\')"><img src="' + img + '" alt="Image ' + (i+1) + '" /></div>';
        }).join('');
        content.innerHTML =
            '<div class="product-detail-grid">' +
            '<div class="gallery">' +
            '<div class="main-image"><img id="mainProductImage" src="' + images[0] + '" alt="' + p.name + '" /></div>' +
            '<div class="thumbnails">' + thumbnailsHtml + '</div>' +
            '</div>' +
            '<div class="info">' +
            '<h1>' + p.name + '</h1>' +
            '<div class="badges">' +
            '<span class="badge badge-verified"><i class="fas fa-check-circle"></i> ' + (p.verified ? 'Vérifié' : 'Non vérifié') + '</span>' +
            '<span class="badge"><i class="fas fa-star" style="color:var(--secondary);"></i> ' + p.rating + '</span>' +
            '<span class="badge"><i class="fas fa-box"></i> ' + formatNumber(p.stock) + ' en stock</span>' +
            '</div>' +
            '<div class="supplier-info"><i class="fas fa-building"></i> ' + p.supplier + ' · ' + p.country + '</div>' +
            '<div class="price-box">' +
            '<div><span style="font-size:13px;color:var(--text-muted);">Prix de gros</span><br><span style="font-size:28px;font-weight:700;color:var(--primary);">' + p.price + ' ' + p.unit + '</span> <span style="font-size:16px;font-weight:400;color:var(--text-muted);">/ unité</span></div>' +
            '<div><span style="font-size:13px;color:var(--text-muted);">Quantité min.</span><br><span style="font-size:20px;font-weight:600;">' + p.minOrder + ' unités</span></div>' +
            '</div>' +
            '<div><strong>Tarification par volume</strong></div>' +
            '<div class="volume-pricing">' +
            '<div class="tier"><div class="qty">' + p.minOrder + '–' + (p.minOrder * 5 - 1) + '</div><div class="price">' + p.price + ' Pi</div></div>' +
            '<div class="tier"><div class="qty">' + (p.minOrder * 5) + '–' + (p.minOrder * 10 - 1) + '</div><div class="price">' + (p.price * 0.9).toFixed(1) + ' Pi</div></div>' +
            '<div class="tier"><div class="qty">' + (p.minOrder * 10) + '+</div><div class="price">' + (p.price * 0.8).toFixed(1) + ' Pi</div></div>' +
            '</div>' +
            '<p style="color:var(--text-muted);font-size:14px;line-height:1.6;">Produit de haute qualité, idéal pour le commerce de gros. Livraison internationale disponible.</p>' +
            '<div class="actions">' +
            '<button class="btn btn-primary" onclick="addToCart(' + p.id + ')"><i class="fas fa-cart-plus"></i> Ajouter au panier</button>' +
            '<button class="btn btn-outline"><i class="fas fa-comment"></i> Contacter</button>' +
            '</div>' +
            '<div style="margin-top:16px;padding:12px 16px;background:#f0f7ff;border-radius:var(--radius-sm);font-size:13px;color:var(--text-muted);"><i class="fas fa-truck"></i> Livraison estimée : 5-10 jours</div>' +
            '</div></div>';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.changeMainImage = function(el, src) {
        document.getElementById('mainProductImage').src = src;
        document.querySelectorAll('.thumbnails .thumb').forEach(function(t) { t.classList.remove('active'); });
        el.classList.add('active');
    };

    window.closeProductDetail = function() {
        showMainContent();
        document.querySelectorAll('.bottom-nav .nav-item').forEach(function(b) { b.classList.remove('active'); });
        document.querySelector('.bottom-nav .nav-item[data-page="home"]').classList.add('active');
    };

    window.openPublish = function() {
        hideMainContent();
        document.getElementById('publishSection').style.display = 'block';
        document.getElementById('productDetail').style.display = 'none';
        document.getElementById('profileSection').style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.closePublish = function() {
        showMainContent();
        document.querySelectorAll('.bottom-nav .nav-item').forEach(function(b) { b.classList.remove('active'); });
        document.querySelector('.bottom-nav .nav-item[data-page="home"]').classList.add('active');
    };

    window.openProfile = function() {
        hideMainContent();
        document.getElementById('profileSection').style.display = 'block';
        document.getElementById('productDetail').style.display = 'none';
        document.getElementById('publishSection').style.display = 'none';
        updatePiUI();
        var firstTab = document.querySelector('.profile-betix-item');
        if (firstTab) activateProfileBetixTab(firstTab.getAttribute('data-tab'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.closeProfile = function() {
        showMainContent();
        document.querySelectorAll('.bottom-nav .nav-item').forEach(function(b) { b.classList.remove('active'); });
        document.querySelector('.bottom-nav .nav-item[data-page="home"]').classList.add('active');
    };

    // ===== PROFIL - ONGLETS =====
    function activateProfileBetixTab(tabId) {
        document.querySelectorAll('.profile-betix-item').forEach(function(item) {
            item.classList.remove('active');
            if (item.getAttribute('data-tab') === tabId) item.classList.add('active');
        });
        var content = document.getElementById('profileContent');
        if (!content) return;

        function infoLine(icon, label, value) {
            return '<div class="profile-info-item">' +
                '<i class="fas ' + icon + '"></i>' +
                '<span class="label">' + label + '</span>' +
                '<span class="value">' + value + '</span>' +
                '</div>';
        }

        var html = '';

        switch (tabId) {
            case 'connexion':
                if (piUser) {
                    // Utilisateur connecté : afficher bouton DÉCONNEXION rouge
                    html = '<div class="profile-page-title"><i class="fas fa-user-astronaut"></i> Connexion Pi</div>' +
                        '<div class="pi-connection-box">' +
                        '<div class="pi-logo-big"><i class="fab fa-pi"></i></div>' +
                        '<div class="pi-status connected"><i class="fas fa-check-circle"></i> Connecté</div>' +
                        '<div class="pi-user-info">' +
                        '<div class="row"><i class="fas fa-user"></i><strong>Nom d\'utilisateur :</strong> ' + piUser.username + '</div>' +
                        '<div class="row"><i class="fas fa-fingerprint"></i><strong>UID Pi :</strong> ' + piUser.uid + '</div>' +
                        '</div>' +
                        '<button class="btn-pi-disconnect" onclick="window.piDisconnect()">' +
                        '<i class="fas fa-sign-out-alt"></i> Déconnexion' +
                        '</button>' +
                        '</div>';
                } else {
                    // Non connecté : afficher bouton CONNEXION Pi violet
                    html = '<div class="profile-page-title"><i class="fas fa-user-astronaut"></i> Connexion Pi</div>' +
                        '<div class="pi-connection-box">' +
                        '<div class="pi-logo-big"><i class="fab fa-pi"></i></div>' +
                        '<div class="pi-status">Connectez-vous avec votre compte Pi Network pour accéder à toutes les fonctionnalités et effectuer des paiements.</div>' +
                        '<button class="btn-pi" onclick="window.piConnect()">' +
                        '<i class="fab fa-pi"></i> Connecter avec Pi Network' +
                        '</button>' +
                        '<p style="margin-top:12px;font-size:12px;color:var(--text-muted);">' +
                        '<i class="fas fa-info-circle"></i> Vous devez ouvrir cette application dans Pi Browser.' +
                        '</p>' +
                        '</div>';
                }
                break;

            case 'profil':
                if (piUser) {
                    html = '<div class="profile-page-title"><i class="fas fa-user-circle"></i> Mon profil</div>' +
                        infoLine('fa-user', 'Nom', piUser.username) +
                        infoLine('fa-fingerprint', 'UID Pi', piUser.uid) +
                        infoLine('fa-shield-alt', 'Statut', 'Membre Pi Network') +
                        infoLine('fa-globe', 'Réseau', 'Pi Network Mainnet') +
                        '<div class="profile-action-btn">' +
                        '<button class="btn btn-outline btn-sm" onclick="showToast(\'Profil Pi synchronisé\',\'info\')"><i class="fas fa-sync"></i> Synchroniser</button>' +
                        '</div>';
                } else {
                    html = '<div class="profile-page-title"><i class="fas fa-user-circle"></i> Mon profil</div>' +
                        '<div style="text-align:center;padding:20px 0;">' +
                        '<i class="fas fa-user-slash" style="font-size:48px;color:var(--text-muted);opacity:0.4;"></i>' +
                        '<p style="margin-top:12px;color:var(--text-muted);">Vous n\'êtes pas connecté.</p>' +
                        '<button class="btn-pi" style="max-width:300px;margin:16px auto 0;" onclick="window.piConnect()">' +
                        '<i class="fab fa-pi"></i> Se connecter avec Pi' +
                        '</button>' +
                        '</div>';
                }
                break;

            case 'parametres':
                html = '<div class="profile-page-title"><i class="fas fa-sliders-h"></i> Paramètres</div>' +
                    infoLine('fa-bell', 'Notifications', 'Activées') +
                    infoLine('fa-language', 'Langue', 'Français') +
                    infoLine('fa-palette', 'Thème', 'Clair') +
                    infoLine('fa-lock', 'Auth. 2 facteurs', 'Désactivée') +
                    '<div class="profile-action-btn"><button class="btn btn-primary btn-sm" onclick="showToast(\'Paramètres enregistrés\',\'success\')"><i class="fas fa-save"></i> Enregistrer</button></div>';
                break;

            case 'langues':
                html = '<div class="profile-page-title"><i class="fas fa-globe"></i> Langues</div>' +
                    '<ul class="profile-list">' +
                    '<li><i class="fas fa-check-circle" style="color:#4caf50;"></i> Français <span class="badge-status active">Actif</span></li>' +
                    '<li><i class="fas fa-circle" style="color:#ccc;"></i> English <span class="badge-status inactive">Inactif</span></li>' +
                    '<li><i class="fas fa-circle" style="color:#ccc;"></i> Español <span class="badge-status inactive">Inactif</span></li>' +
                    '<li><i class="fas fa-circle" style="color:#ccc;"></i> العربية <span class="badge-status inactive">Inactif</span></li>' +
                    '</ul>';
                break;

            case 'livre-blanc':
                html = '<div class="profile-page-title"><i class="fas fa-file-pdf" style="color:var(--secondary);"></i> Livre blanc</div>' +
                    '<ul class="profile-list">' +
                    '<li><i class="fas fa-file-pdf" style="color:var(--secondary);"></i> Guide commerce de gros 2026 <span class="badge-status active">Disponible</span></li>' +
                    '<li><i class="fas fa-file-pdf" style="color:var(--secondary);"></i> Stratégies d\'approvisionnement <span class="badge-status active">Disponible</span></li>' +
                    '<li><i class="fas fa-file-pdf" style="color:var(--secondary);"></i> Analyse marchés émergents <span class="badge-status inactive">À venir</span></li>' +
                    '</ul>';
                break;

            case 'mes-produits':
                html = '<div class="profile-page-title"><i class="fas fa-boxes"></i> Mes produits</div>' +
                    '<div style="display:flex;flex-direction:column;gap:8px;">' +
                    '<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid #f0f2f5;">' +
                    '<span><i class="fas fa-headphones" style="color:var(--primary);"></i> Écouteurs Bluetooth</span>' +
                    '<span class="text-muted">Stock: 5000</span>' +
                    '<button class="btn btn-sm btn-outline" onclick="showToast(\'Modifier le produit\',\'info\')">Modifier</button>' +
                    '</div>' +
                    '<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;">' +
                    '<span><i class="fas fa-watch" style="color:var(--primary);"></i> Montre connectée</span>' +
                    '<span class="text-muted">Stock: 120</span>' +
                    '<button class="btn btn-sm btn-outline" onclick="showToast(\'Modifier le produit\',\'info\')">Modifier</button>' +
                    '</div></div>' +
                    '<div class="profile-action-btn"><button class="btn btn-primary btn-sm" onclick="window.openPublish()"><i class="fas fa-plus"></i> Ajouter un produit</button></div>';
                break;

            case 'historique':
                html = '<div class="profile-page-title"><i class="fas fa-history"></i> Historique</div>' +
                    '<ul class="profile-list">' +
                    '<li><i class="fas fa-receipt" style="color:var(--secondary);"></i> 24/11/2024 - #GB-001 - 120 π <span class="badge-status active">Livré</span></li>' +
                    '<li><i class="fas fa-receipt" style="color:var(--secondary);"></i> 20/11/2024 - #GB-002 - 1200 π <span class="badge-status active">En cours</span></li>' +
                    '<li><i class="fas fa-receipt" style="color:var(--secondary);"></i> 15/11/2024 - #GB-003 - 850 π <span class="badge-status inactive">Annulée</span></li>' +
                    '</ul>';
                break;

            case 'achats-ventes':
                html = '<div class="profile-page-title"><i class="fas fa-chart-line"></i> Achats & Ventes</div>' +
                    '<div class="profile-grid-2">' +
                    '<div class="stat-card"><span class="number">12</span><span class="label">Achats</span></div>' +
                    '<div class="stat-card"><span class="number">8</span><span class="label">Ventes</span></div>' +
                    '</div>' +
                    '<div style="margin-top:12px;padding:12px;background:var(--gray-light);border-radius:var(--radius-sm);">' +
                    '<p style="font-weight:600;color:var(--primary);"><i class="fas fa-arrow-up" style="color:#4caf50;"></i> Chiffre d\'affaires : 45 230 π</p>' +
                    '</div>';
                break;

            case 'faq':
                html = '<div class="profile-page-title"><i class="fas fa-question-circle"></i> FAQ</div>' +
                    '<div class="faq-item"><div class="question">❓ Comment se connecter avec Pi ?</div><div class="answer">Allez dans Connexion Pi, cliquez sur "Connecter avec Pi Network". Assurez-vous d\'utiliser Pi Browser.</div></div>' +
                    '<div class="faq-item"><div class="question">❓ Comment payer avec Pi ?</div><div class="answer">Ajoutez des produits au panier, puis cliquez sur "Payer avec Pi". Confirmez la transaction dans Pi Browser.</div></div>' +
                    '<div class="faq-item"><div class="question">❓ Mes données sont-elles sécurisées ?</div><div class="answer">Oui, toutes les transactions sont sécurisées par la blockchain Pi Network.</div></div>' +
                    '<div class="faq-item"><div class="question">❓ Quels sont les délais de livraison ?</div><div class="answer">Généralement 5 à 10 jours ouvrés selon la destination.</div></div>';
                break;

            default:
                html = '<div class="profile-page-title"><i class="fas fa-home"></i> Bienvenue</div><p>Sélectionnez une option.</p>';
        }
        content.innerHTML = html;
    }

    // Exposition globale des fonctions Pi pour les boutons inline
    window.piConnect = connectPi;
    window.piDisconnect = disconnectPi;

    // ===== UPLOAD IMAGES =====
    var uploadedImages = [];
    document.getElementById('pImages').addEventListener('change', function(e) {
        var files = e.target.files;
        var maxImages = 6;
        if (uploadedImages.length + files.length > maxImages) {
            showToast('Maximum 6 images autorisées', 'error');
            this.value = '';
            return;
        }
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            if (!file.type.startsWith('image/')) continue;
            var reader = new FileReader();
            reader.onload = function(ev) {
                uploadedImages.push(ev.target.result);
                renderUploadPreview();
            };
            reader.readAsDataURL(file);
        }
        this.value = '';
    });

    function renderUploadPreview() {
        var preview = document.getElementById('uploadPreview');
        preview.innerHTML = uploadedImages.map(function(img, index) {
            return '<div class="preview-thumb"><img src="' + img + '" alt="Aperçu" /><button class="remove-btn" onclick="removeImage(' + index + ')"><i class="fas fa-times"></i></button></div>';
        }).join('');
    }

    window.removeImage = function(index) {
        uploadedImages.splice(index, 1);
        renderUploadPreview();
    };

    // ===== PANIER =====
    window.addToCart = function(id) {
        var p = products.find(function(x) { return x.id === id; });
        if (!p) return;
        var existing = cartItems.find(function(item) { return item.id === id; });
        if (existing) existing.qty += p.minOrder;
        else cartItems.push({ id: p.id, name: p.name, qty: p.minOrder, price: p.price, image: p.images ? p.images[0] : '' });
        updateCartBadge();
        showToast(p.name + ' ajouté au panier', 'success');
        if (isCartOpen) renderCartItems();
    };

    function removeFromCart(id) {
        cartItems = cartItems.filter(function(item) { return item.id !== id; });
        updateCartBadge();
        renderCartItems();
        showToast('Produit retiré du panier', 'info');
    }

    function updateQty(id, delta) {
        var item = cartItems.find(function(i) { return i.id === id; });
        if (!item) return;
        item.qty += delta;
        if (item.qty <= 0) { removeFromCart(id); return; }
        renderCartItems();
        updateCartBadge();
    }

    function renderCartItems() {
        var body = document.getElementById('cartBody');
        var footer = document.getElementById('cartFooter');
        var totalEl = document.getElementById('cartTotalPrice');
        if (!body) return;
        if (cartItems.length === 0) {
            body.innerHTML = '<div class="cart-empty"><i class="fas fa-shopping-bag"></i><p>Votre panier est vide</p></div>';
            footer.style.display = 'none';
            return;
        }
        body.innerHTML = cartItems.map(function(item) {
            var imgSrc = item.image || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop';
            return '<div class="cart-item">' +
                '<div class="item-image"><img src="' + imgSrc + '" alt="' + item.name + '" /></div>' +
                '<div class="item-info">' +
                '<div class="name">' + item.name + '</div>' +
                '<div class="price">' + (item.price * item.qty) + ' π</div>' +
                '<div class="item-qty">' +
                '<button onclick="updateQty(' + item.id + ',-1)">-</button>' +
                '<span>' + item.qty + '</span>' +
                '<button onclick="updateQty(' + item.id + ',1)">+</button>' +
                '</div></div>' +
                '<button class="btn btn-sm btn-danger" onclick="removeFromCart(' + item.id + ')"><i class="fas fa-trash"></i></button>' +
                '</div>';
        }).join('');
        footer.style.display = 'block';
        var total = cartItems.reduce(function(s, i) { return s + (i.price * i.qty); }, 0);
        totalEl.textContent = total + ' π';
    }

    function updateCartBadge() {
        var total = cartItems.reduce(function(s, i) { return s + i.qty; }, 0);
        document.querySelectorAll('.badge-count').forEach(function(el) {
            var parent = el.closest('.icon-btn, .nav-item');
            if (parent && (parent.querySelector('.fa-shopping-bag') || parent.querySelector('.fa-shopping-cart'))) {
                el.textContent = total;
                el.style.display = total > 0 ? 'flex' : 'none';
            }
        });
    }

    var isCartOpen = false;
    function toggleCart() {
        isCartOpen = !isCartOpen;
        var overlay = document.getElementById('cartOverlay');
        if (isCartOpen) { overlay.classList.add('open'); renderCartItems(); }
        else overlay.classList.remove('open');
    }

    document.getElementById('cartToggle').addEventListener('click', toggleCart);
    document.getElementById('cartClose').addEventListener('click', toggleCart);
    document.getElementById('cartOverlay').addEventListener('click', function(e) {
        if (e.target === this) toggleCart();
    });

    // ===== CHECKOUT AVEC PI PAYMENT =====
    document.getElementById('checkoutBtn').addEventListener('click', function() {
        if (cartItems.length === 0) { showToast('Panier vide', 'error'); return; }

        var total = cartItems.reduce(function(s, i) { return s + (i.price * i.qty); }, 0);
        var totalFixed = parseFloat(total.toFixed(7)); // Pi accepte jusqu'à 7 décimales

        if (typeof Pi === 'undefined') {
            showToast('Ouvrez l\'application dans Pi Browser pour payer', 'error');
            return;
        }

        if (!piUser) {
            showToast('Veuillez vous connecter avec Pi d\'abord', 'error');
            // Ouvrir le profil sur l'onglet connexion
            setTimeout(function() {
                window.openProfile();
                setTimeout(function() { activateProfileBetixTab('connexion'); }, 200);
            }, 800);
            return;
        }

        var memo = 'Global Bulk - Commande de ' + cartItems.length + ' article(s)';
        var metadata = {
            items: cartItems.map(function(i) {
                return { id: i.id, name: i.name, qty: i.qty, price: i.price };
            }),
            total: totalFixed,
            username: piUser.username,
            timestamp: Date.now()
        };

        // Feedback utilisateur
        var btn = this;
        var originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Traitement...';
        btn.disabled = true;

        createPiPayment(totalFixed, memo, metadata)
            .then(function(result) {
                console.log('Paiement réussi', result);
                showToast('Paiement Pi réussi ! Transaction : ' + result.txid.substring(0, 10) + '...', 'success');
                cartItems = [];
                updateCartBadge();
                renderCartItems();
                setTimeout(function() { toggleCart(); }, 800);
            })
            .catch(function(err) {
                console.error('Erreur paiement', err);
                if (err && err.message === 'Paiement annulé') {
                    showToast('Paiement annulé', 'info');
                } else {
                    showToast('Erreur de paiement : ' + (err.message || 'inconnue'), 'error');
                }
            })
            .finally(function() {
                btn.innerHTML = originalText;
                btn.disabled = false;
            });
    });

    // ===== STATS =====
    function animateStats() {
        document.querySelectorAll('.stats-grid .stat-item .number').forEach(function(el) {
            var target = parseInt(el.getAttribute('data-count'));
            var current = 0;
            var step = Math.ceil(target / 60);
            var interval = setInterval(function() {
                current += step;
                if (current >= target) { current = target; clearInterval(interval); }
                el.textContent = formatNumber(current);
            }, 25);
        });
    }

    // ===== BOTTOM NAV =====
    document.querySelectorAll('.bottom-nav .nav-item').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var page = this.getAttribute('data-page');
            if (page === 'profile') { window.openProfile(); return; }
            if (page === 'publish') { window.openPublish(); return; }
            showMainContent();
            document.querySelectorAll('.bottom-nav .nav-item').forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');
            var sections = {
                home: ['productsSection', 'suppliersSection'],
                market: ['productsSection'],
                suppliers: ['suppliersSection']
            };
            document.querySelectorAll('.section:not(.page-secondary)').forEach(function(s) { s.style.display = 'none'; });
            var ids = sections[page] || ['productsSection'];
            ids.forEach(function(id) {
                var el = document.getElementById(id);
                if (el) el.style.display = 'block';
            });
            if (page === 'home') {
                document.getElementById('productsSection').style.display = 'block';
                document.getElementById('suppliersSection').style.display = 'block';
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    document.querySelectorAll('.profile-betix-item').forEach(function(item) {
        item.addEventListener('click', function() {
            activateProfileBetixTab(this.getAttribute('data-tab'));
        });
    });

    document.getElementById('btnPublishFloating').addEventListener('click', function() { window.openPublish(); });

    document.getElementById('footerPublish').addEventListener('click', function(e) {
        e.preventDefault();
        window.openPublish();
    });
    document.getElementById('footerFaq').addEventListener('click', function(e) {
        e.preventDefault();
        window.openProfile();
        setTimeout(function() { activateProfileBetixTab('faq'); }, 100);
    });

    // ===== PUBLISH FORM =====
    document.getElementById('publishForm').addEventListener('submit', function(e) {
        e.preventDefault();
        var name = document.getElementById('pName').value.trim();
        var category = document.getElementById('pCategory').value;
        var description = document.getElementById('pDescription').value.trim();
        var price = parseFloat(document.getElementById('pPrice').value);
        var unit = document.getElementById('pUnit').value;
        var minOrder = parseInt(document.getElementById('pMinOrder').value);
        var stock = parseInt(document.getElementById('pStock').value);
        var supplier = document.getElementById('pSupplier').value.trim();
        var country = document.getElementById('pCountry').value;
        var rating = parseFloat(document.getElementById('pRating').value) || 4.5;
        var verified = document.getElementById('pVerified').checked;

        if (!name || !category || !description || isNaN(price) || isNaN(minOrder) || isNaN(stock) || !supplier || !country) {
            showToast('Veuillez remplir tous les champs obligatoires.', 'error');
            return;
        }

        var images = uploadedImages.length > 0 ? uploadedImages : ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop'];

        var newProduct = {
            id: products.length + 1, name: name, price: price, unit: unit,
            minOrder: minOrder, stock: stock, supplier: supplier, country: country,
            verified: verified, rating: rating, category: category, images: images
        };
        products.push(newProduct);
        renderProducts();
        applyFilters();
        showToast('Produit publié avec succès !', 'success');
        uploadedImages = [];
        document.getElementById('uploadPreview').innerHTML = '';
        this.reset();
        window.closePublish();
        var cat = categories.find(function(c) { return c.name === category; });
        if (cat) cat.count++;
        renderCategoryFilters();
    });

    function populateFormSelects() {
        var pCategory = document.getElementById('pCategory');
        if (pCategory) {
            pCategory.innerHTML = '<option value="">Catégorie *</option>';
            categories.forEach(function(c) {
                pCategory.innerHTML += '<option value="' + c.name + '">' + c.name + '</option>';
            });
        }
        var pCountry = document.getElementById('pCountry');
        if (pCountry) {
            pCountry.innerHTML = '<option value="">Pays *</option>';
            allCountries.forEach(function(c) {
                pCountry.innerHTML += '<option value="' + c + '">' + c + '</option>';
            });
        }
    }

    // ===== INITIALISATION =====
    initPiNetwork();
    loadPiSession();

    simulateLoader(function() {
        renderCategoryFilters();
        renderProducts();
        renderSuppliers();
        setupFilters();
        populateFormSelects();
        updateCartBadge();
        initSlider();
        updatePiUI();
        setTimeout(animateStats, 300);
        setTimeout(function() { showToast('Bienvenue sur Global Bulk', 'success'); }, 500);
    });

})();
