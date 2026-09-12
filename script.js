(function() {
    'use strict';

    // ============ DONNÉES ============
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
        images: ['https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop']
    }, {
        id: 3, name: 'Voiture Électrique Model 3', price: 35000, unit: 'Pi', minOrder: 1, stock: 45,
        supplier: 'AutoGreen SA', country: 'USA', verified: true, rating: 4.7, category: 'Automobile',
        images: ['https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop']
    }, {
        id: 4, name: 'T-shirt en coton bio', price: 2.5, unit: 'Pi', minOrder: 200, stock: 12000,
        supplier: 'EcoWear SARL', country: 'France', verified: true, rating: 4.7, category: 'Mode',
        images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop']
    }, {
        id: 5, name: 'Chaussures de sport', price: 12, unit: 'Pi', minOrder: 50, stock: 320,
        supplier: 'SportFoot Inc', country: 'USA', verified: false, rating: 4.2, category: 'Chaussures',
        images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop']
    }, {
        id: 6, name: 'Montre connectée', price: 35, unit: 'Pi', minOrder: 20, stock: 1500,
        supplier: 'TechImport SARL', country: 'Chine', verified: true, rating: 4.6, category: 'Électronique',
        images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop']
    }, {
        id: 7, name: 'Lampe solaire 10W', price: 4.5, unit: 'Pi', minOrder: 100, stock: 3000,
        supplier: 'GreenEnergy Ltd', country: 'Allemagne', verified: true, rating: 4.5, category: 'Énergie',
        images: ['https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop']
    }, {
        id: 8, name: 'Meubles de salon (set)', price: 180, unit: 'Pi', minOrder: 5, stock: 120,
        supplier: 'HomeFurnish SARL', country: 'France', verified: false, rating: 4.0, category: 'Maison',
        images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop']
    }, {
        id: 9, name: 'Café Arabica 1kg', price: 3.2, unit: 'Pi', minOrder: 500, stock: 8000,
        supplier: 'AgriExport Co', country: 'Colombie', verified: true, rating: 4.9, category: 'Alimentation',
        images: ['https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop']
    }, {
        id: 10, name: 'Crème Anti-Âge 50ml', price: 8, unit: 'Pi', minOrder: 100, stock: 2000,
        supplier: 'BeautyLab SAS', country: 'France', verified: true, rating: 4.3, category: 'Beauté',
        images: ['https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=400&fit=crop']
    }, {
        id: 11, name: 'Tracteur Agricole 4x4', price: 45000, unit: 'Pi', minOrder: 1, stock: 12,
        supplier: 'AgriMachines Ltd', country: 'USA', verified: true, rating: 4.4, category: 'Agriculture',
        images: ['https://images.unsplash.com/photo-1531816458010-4f4c24de72e1?w=600&h=400&fit=crop']
    }, {
        id: 12, name: 'Équipement de Chantier (set)', price: 220, unit: 'Pi', minOrder: 10, stock: 340,
        supplier: 'BuildPro SARL', country: 'France', verified: false, rating: 3.9, category: 'Construction',
        images: ['https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop']
    }];

    var suppliers = [
        { name: 'TechImport SARL', country: 'Chine', verified: true, products: 340, rating: 4.8, responseRate: 96 },
        { name: 'MobileTech GmbH', country: 'Allemagne', verified: true, products: 210, rating: 4.9, responseRate: 98 },
        { name: 'EcoWear SARL', country: 'France', verified: true, products: 180, rating: 4.7, responseRate: 92 },
        { name: 'GreenEnergy Ltd', country: 'Allemagne', verified: true, products: 90, rating: 4.5, responseRate: 88 },
        { name: 'SportFoot Inc', country: 'USA', verified: false, products: 65, rating: 4.2, responseRate: 75 }
    ];

    var cartItems = [];
    var allCountries = ['Allemagne', 'Chine', 'France', 'USA', 'Colombie', 'Espagne', 'Italie', 'Belgique', 'Canada', 'Japon', 'Brésil', 'Inde', 'Royaume-Uni', 'Pays-Bas', 'Maroc', 'Sénégal', 'Côte d\'Ivoire', 'Cameroun', 'Congo', 'Nigeria'];

    var selectedCountry = '';
    var selectedCategory = 'all';

    // ============ ÉTAT PI NETWORK ============
    var piUser = null; // { uid, username }
    var piSdkReady = false;
    var isDemoMode = false; // Mode test pour navigateur normal

    // ============ UTILITAIRES ============
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

    // ============ PI NETWORK - INIT ============
    function initPiNetwork() {
        // Vérifier si le SDK Pi est chargé
        if (typeof Pi === 'undefined') {
            console.warn('[Pi] SDK non chargé. Mode démo activé.');
            isDemoMode = true;
            updatePiHint();
            return;
        }

        try {
            Pi.init({ version: "2.0", sandbox: false });
            piSdkReady = true;
            console.log('[Pi] SDK initialisé avec succès.');
        } catch (e) {
            console.error('[Pi] Erreur init :', e);
            isDemoMode = true;
            updatePiHint();
        }
    }

    function isPiBrowser() {
        // Détection : soit le SDK existe, soit l'user agent contient "PiBrowser"
        return typeof Pi !== 'undefined' || /PiBrowser/i.test(navigator.userAgent);
    }

    function updatePiHint() {
        var hint = document.getElementById('piHint');
        if (!hint) return;
        if (isDemoMode) {
            hint.innerHTML = '<i class="fas fa-flask"></i> <strong>Mode démo</strong> : Simulation de connexion Pi (test hors Pi Browser).';
            hint.style.color = '#e6b000';
        } else {
            hint.innerHTML = '<i class="fas fa-info-circle"></i> Ouvrez cette application dans <strong>Pi Browser</strong> pour vous connecter.';
            hint.style.color = '';
        }
    }

    // ============ PI NETWORK - AUTHENTIFICATION ============
    function onIncompletePaymentFound(payment) {
        console.log('[Pi] Paiement incomplet :', payment);
        showToast('Un paiement incomplet a été détecté', 'info');
    }

    function connectPi() {
        console.log('[Pi] Tentative de connexion...');

        // Si le SDK n'est pas disponible, utiliser le mode démo
        if (typeof Pi === 'undefined' || !piSdkReady) {
            console.warn('[Pi] SDK indisponible, bascule en mode démo');
            showToast('Mode démo : simulation de connexion', 'info');
            // Simulation de connexion en mode démo
            setTimeout(function() {
                piUser = {
                    uid: 'demo-' + Math.random().toString(36).substring(2, 10),
                    username: 'PiPioneer_' + Math.floor(Math.random() * 1000)
                };
                try { sessionStorage.setItem('pi_user', JSON.stringify(piUser)); } catch (e) {}
                updatePiUI();
                showToast('Connecté (démo) : ' + piUser.username, 'success');
            }, 600);
            return;
        }

        // Vraie authentification Pi
        Pi.authenticate(['username', 'payments'], onIncompletePaymentFound)
            .then(function(auth) {
                console.log('[Pi] Auth réussie :', auth);
                piUser = {
                    uid: auth.user.uid,
                    username: auth.user.username
                };
                try { sessionStorage.setItem('pi_user', JSON.stringify(piUser)); } catch (e) {}
                updatePiUI();
                showToast('Connecté à Pi : ' + auth.user.username, 'success');
            })
            .catch(function(err) {
                console.error('[Pi] Erreur auth :', err);
                var msg = (err && err.message) ? err.message : 'Connexion échouée';
                showToast('Erreur Pi : ' + msg, 'error');
            });
    }

    function disconnectPi() {
        piUser = null;
        try { sessionStorage.removeItem('pi_user'); } catch (e) {}
        updatePiUI();
        showToast('Déconnecté de Pi', 'info');
    }

    function updatePiUI() {
        var badge = document.getElementById('piUserBadge');
        var usernameEl = document.getElementById('piUsername');
        var avatar = document.getElementById('profileAvatar');
        var usernameDisplay = document.getElementById('profileUsername');
        var subtitle = document.getElementById('profileSubtitle');
        var btnConnect = document.getElementById('btnPiConnect');
        var btnText = document.getElementById('btnPiConnectText');
        var piMessage = document.getElementById('piMessage');

        if (piUser) {
            // Header badge
            if (badge) badge.style.display = 'inline-flex';
            if (usernameEl) usernameEl.textContent = piUser.username;

            // En-tête profil
            if (avatar) avatar.textContent = piUser.username.substring(0, 2).toUpperCase();
            if (usernameDisplay) usernameDisplay.textContent = piUser.username;
            if (subtitle) subtitle.textContent = 'Membre Pi Network';

            // Bouton
            if (btnConnect) {
                btnConnect.classList.add('disconnect');
                btnConnect.innerHTML = '<i class="fas fa-sign-out-alt"></i><span>Déconnexion</span>';
            }
            if (piMessage) {
                piMessage.innerHTML = '<i class="fas fa-check-circle" style="color:#2e7d32;"></i> Vous êtes connecté à Pi Network.<br><small style="color:var(--text-muted);">UID : ' + piUser.uid.substring(0, 12) + '...</small>';
            }
        } else {
            if (badge) badge.style.display = 'none';
            if (avatar) avatar.textContent = '?';
            if (usernameDisplay) usernameDisplay.textContent = 'Non connecté';
            if (subtitle) subtitle.textContent = 'Connectez-vous avec Pi Network';

            if (btnConnect) {
                btnConnect.classList.remove('disconnect');
                btnConnect.innerHTML = '<i class="fab fa-pi"></i><span>Connecter avec Pi Network</span>';
            }
            if (piMessage) {
                piMessage.textContent = 'Connectez-vous pour accéder à toutes les fonctionnalités et effectuer des paiements.';
            }
        }
    }

    function loadPiSession() {
        try {
            var stored = sessionStorage.getItem('pi_user');
            if (stored) {
                piUser = JSON.parse(stored);
                console.log('[Pi] Session restaurée :', piUser.username);
                updatePiUI();
            }
        } catch (e) { console.warn('[Pi] Erreur restauration session', e); }
    }

    // ============ PI NETWORK - PAIEMENT ============
    function createPiPayment(amount, memo, metadata) {
        return new Promise(function(resolve, reject) {
            if (typeof Pi === 'undefined') {
                // Mode démo
                console.log('[Pi] Paiement simulé (démo) :', amount, memo);
                setTimeout(function() {
                    resolve({ paymentId: 'demo-' + Date.now(), txid: 'demo-tx-' + Math.random().toString(36).substring(2, 12) });
                }, 1500);
                return;
            }
            if (!piUser) { reject(new Error('Non connecté')); return; }

            Pi.createPayment({
                amount: amount,
                memo: memo,
                metadata: metadata
            }, {
                onReadyForServerApproval: function(paymentId) {
                    console.log('[Pi] Paiement prêt :', paymentId);
                },
                onReadyForServerCompletion: function(paymentId, txid) {
                    console.log('[Pi] Paiement complété :', paymentId, txid);
                    resolve({ paymentId: paymentId, txid: txid });
                },
                onCancel: function(paymentId) {
                    reject(new Error('Paiement annulé'));
                },
                onError: function(error) {
                    reject(error);
                }
            });
        });
    }

    // ============ LOADER ============
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
        }, 100);
    }

    // ============ SLIDER ============
    function initSlider() {
        var slides = [
            { image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop', title: 'First Purchase', subtitle: 'Enjoy a Special Offer!', cta: 'Découvrir' },
            { image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&h=600&fit=crop', title: 'Électronique de pointe', subtitle: 'Au meilleur prix', cta: 'Voir les offres' },
            { image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&h=600&fit=crop', title: 'Automobile', subtitle: 'Pour professionnels', cta: 'Explorer' }
        ];
        var track = document.getElementById('sliderTrack');
        var dotsContainer = document.getElementById('sliderDots');
        if (!track || !dotsContainer) return;
        var currentIndex = 0;
        var totalSlides = slides.length;

        track.innerHTML = slides.map(function(s) {
            return '<div class="slider-slide" style="background-image: url(' + s.image + ');">' +
                '<div class="slide-overlay"></div>' +
                '<div class="slide-content"><h2>' + s.title + '</h2><p>' + s.subtitle + '</p>' +
                '<a href="#" class="btn">' + s.cta + ' <i class="fas fa-arrow-right"></i></a></div></div>';
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
        document.getElementById('sliderPrev').addEventListener('click', function() { goToSlide(currentIndex - 1); });
        document.getElementById('sliderNext').addEventListener('click', function() { goToSlide(currentIndex + 1); });
        dotsContainer.addEventListener('click', function(e) {
            var dot = e.target.closest('.dot');
            if (dot) goToSlide(parseInt(dot.getAttribute('data-index')));
        });
        setInterval(function() { goToSlide(currentIndex + 1); }, 5000);
    }

    // ============ FILTRES CATÉGORIES ============
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
                selectedCategory = btn.getAttribute('data-cat');
                document.querySelectorAll('.filter-cat').forEach(function(b) {
                    b.classList.remove('active');
                    if (b === btn) b.classList.add('active');
                });
                applyFilters();
            });
            container.appendChild(btn);
        });
    }

    // ============ PRODUITS ============
    function renderProducts(list) {
        list = list || products;
        var grid = document.getElementById('productGrid');
        if (!grid) return;
        grid.innerHTML = list.map(function(p) {
            var verifiedBadge = p.verified ? '<span class="verified-badge"><i class="fas fa-check-circle"></i> Vérifié</span>' : '';
            var firstImage = p.images && p.images.length > 0 ? p.images[0] : 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop';
            return '<div class="card-product" onclick="showProductDetail(' + p.id + ')">' +
                '<div class="image"><img src="' + firstImage + '" alt="' + p.name + '" loading="lazy" />' + verifiedBadge + '</div>' +
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
            return '<div class="card-supplier">' +
                '<div class="avatar"><i class="fas fa-building"></i></div>' +
                '<div class="info">' +
                '<div class="name">' + s.name + (s.verified ? ' <span class="badge badge-verified" style="font-size:10px;"><i class="fas fa-check-circle"></i></span>' : '') + '</div>' +
                '<div class="detail">' +
                '<span><i class="fas fa-map-marker-alt"></i> ' + s.country + '</span>' +
                '<span><i class="fas fa-star" style="color:var(--secondary);"></i> ' + s.rating + '</span>' +
                '</div></div></div>';
        }).join('');
    }

    function setupFilters() {
        var countrySelect = document.getElementById('filterCountry');
        if (!countrySelect) return;
        countrySelect.innerHTML = '<option value="">Tous</option>';
        allCountries.forEach(function(c) {
            countrySelect.innerHTML += '<option value="' + c + '">' + c + '</option>';
        });
        countrySelect.addEventListener('change', function() {
            selectedCountry = this.value;
            applyFilters();
        });
    }

    function applyFilters() {
        var filtered = products.slice();
        if (selectedCountry) filtered = filtered.filter(function(p) { return p.country === selectedCountry; });
        if (selectedCategory && selectedCategory !== 'all') filtered = filtered.filter(function(p) { return p.category === selectedCategory; });
        renderProducts(filtered);
    }

    // ============ RECHERCHE ============
    document.getElementById('searchToggle').addEventListener('click', function() {
        document.getElementById('searchDropdown').classList.toggle('open');
    });
    document.getElementById('searchBtn').addEventListener('click', doSearch);
    document.getElementById('searchInput').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') doSearch();
    });

    function doSearch() {
        var q = document.getElementById('searchInput').value.trim().toLowerCase();
        if (!q) { showToast('Entrez un terme de recherche', 'error'); return; }
        var filtered = products.filter(function(p) {
            return p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.supplier.toLowerCase().includes(q);
        });
        if (filtered.length === 0) showToast('Aucun résultat', 'error');
        else { renderProducts(filtered); showToast(filtered.length + ' résultat(s)', 'success'); }
        document.getElementById('searchDropdown').classList.remove('open');
    }

    // ============ NAVIGATION ============
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
        var images = p.images && p.images.length > 0 ? p.images : ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop'];
        var thumbnailsHtml = images.map(function(img, i) {
            return '<div class="thumb' + (i === 0 ? ' active' : '') + '" onclick="changeMainImage(this, \'' + img + '\')"><img src="' + img + '" /></div>';
        }).join('');
        content.innerHTML =
            '<div class="product-detail-grid">' +
            '<div class="gallery"><div class="main-image"><img id="mainProductImage" src="' + images[0] + '" /></div>' +
            '<div class="thumbnails">' + thumbnailsHtml + '</div></div>' +
            '<div class="info">' +
            '<h1>' + p.name + '</h1>' +
            '<div style="margin-bottom:10px;">' +
            '<span class="badge badge-verified"><i class="fas fa-check-circle"></i> ' + (p.verified ? 'Vérifié' : 'Non vérifié') + '</span> ' +
            '<span class="badge"><i class="fas fa-star" style="color:var(--secondary);"></i> ' + p.rating + '</span>' +
            '</div>' +
            '<div style="font-size:13px;color:var(--text-muted);margin-bottom:14px;"><i class="fas fa-building"></i> ' + p.supplier + ' · ' + p.country + '</div>' +
            '<div class="price-box">' +
            '<div><span style="font-size:13px;color:var(--text-muted);">Prix de gros</span><br><span style="font-size:28px;font-weight:700;color:var(--primary);">' + p.price + ' ' + p.unit + '</span></div>' +
            '<div><span style="font-size:13px;color:var(--text-muted);">Qté min.</span><br><span style="font-size:20px;font-weight:600;">' + p.minOrder + ' unités</span></div>' +
            '</div>' +
            '<div style="margin-bottom:10px;"><strong>Tarification par volume</strong></div>' +
            '<div class="volume-pricing">' +
            '<div class="tier"><div style="font-size:12px;color:var(--text-muted);">' + p.minOrder + '+' + '</div><div class="price">' + p.price + ' Pi</div></div>' +
            '<div class="tier"><div style="font-size:12px;color:var(--text-muted);">' + (p.minOrder * 5) + '+' + '</div><div class="price">' + (p.price * 0.9).toFixed(1) + ' Pi</div></div>' +
            '<div class="tier"><div style="font-size:12px;color:var(--text-muted);">' + (p.minOrder * 10) + '+</div><div class="price">' + (p.price * 0.8).toFixed(1) + ' Pi</div></div>' +
            '</div>' +
            '<div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:16px;">' +
            '<button class="btn btn-primary" onclick="addToCart(' + p.id + ')"><i class="fas fa-cart-plus"></i> Ajouter au panier</button>' +
            '<button class="btn btn-outline"><i class="fas fa-comment"></i> Contacter</button>' +
            '</div></div></div>';
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
        document.getElementById('profileSubpage').style.display = 'none';
        document.querySelector('.profile-wrapper').style.display = 'block';
        updatePiUI();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.closeProfile = function() {
        showMainContent();
        document.querySelectorAll('.bottom-nav .nav-item').forEach(function(b) { b.classList.remove('active'); });
        document.querySelector('.bottom-nav .nav-item[data-page="home"]').classList.add('active');
    };

    // ============ SOUS-PAGE PROFIL ============
    function openProfileSubpage(tabId, title) {
        document.querySelector('.profile-wrapper').style.display = 'none';
        var subpage = document.getElementById('profileSubpage');
        subpage.style.display = 'block';
        document.getElementById('profileSubpageTitle').textContent = title;
        var content = document.getElementById('profileSubpageContent');
        content.innerHTML = renderProfileSubpageContent(tabId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.closeProfileSubpage = function() {
        document.getElementById('profileSubpage').style.display = 'none';
        document.querySelector('.profile-wrapper').style.display = 'block';
    };

    function renderProfileSubpageContent(tabId) {
        function infoItem(icon, label, value) {
            return '<div class="info-item">' +
                '<i class="fas ' + icon + '"></i>' +
                '<span class="label">' + label + '</span>' +
                '<span class="value">' + value + '</span>' +
                '</div>';
        }

        switch(tabId) {
            case 'monprofil':
                if (!piUser) {
                    return '<div style="text-align:center;padding:20px;">' +
                        '<i class="fas fa-user-slash" style="font-size:48px;color:var(--text-muted);opacity:0.4;"></i>' +
                        '<p style="margin-top:12px;color:var(--text-muted);">Connectez-vous pour voir votre profil.</p>' +
                        '</div>';
                }
                return '<h3>👤 Mon profil</h3>' +
                    infoItem('fa-user', 'Pseudo', piUser.username) +
                    infoItem('fa-fingerprint', 'UID', piUser.uid) +
                    infoItem('fa-shield-alt', 'Statut', 'Membre Pi Network') +
                    infoItem('fa-globe', 'Réseau', 'Pi Network Mainnet');

            case 'parametres':
                return '<h3>⚙️ Paramètres</h3>' +
                    infoItem('fa-bell', 'Notifications', 'Activées') +
                    infoItem('fa-language', 'Langue', 'Français') +
                    infoItem('fa-palette', 'Thème', 'Clair') +
                    infoItem('fa-lock', 'Sécurité', 'Activée');

            case 'langues':
                return '<h3>🌐 Langues</h3>' +
                    '<div class="info-item"><i class="fas fa-check-circle" style="color:#4caf50;"></i><span class="label">Français</span><span class="value">Actif</span></div>' +
                    '<div class="info-item"><i class="fas fa-circle" style="color:#ccc;"></i><span class="label">English</span><span class="value">Inactif</span></div>' +
                    '<div class="info-item"><i class="fas fa-circle" style="color:#ccc;"></i><span class="label">Español</span><span class="value">Inactif</span></div>';

            case 'livre-blanc':
                return '<h3>📄 Livre blanc</h3>' +
                    '<div class="info-item"><i class="fas fa-file-pdf" style="color:var(--secondary);"></i><span>Guide commerce de gros 2026</span></div>' +
                    '<div class="info-item"><i class="fas fa-file-pdf" style="color:var(--secondary);"></i><span>Stratégies d\'approvisionnement</span></div>' +
                    '<div class="info-item"><i class="fas fa-file-pdf" style="color:var(--secondary);"></i><span>Analyse des marchés émergents</span></div>';

            case 'mes-produits':
                return '<h3>📦 Mes produits</h3>' +
                    '<div class="info-item"><i class="fas fa-headphones"></i><span class="label">Écouteurs BT</span><span class="value">5000 en stock</span></div>' +
                    '<div class="info-item"><i class="fas fa-watch"></i><span class="label">Montre connectée</span><span class="value">120 en stock</span></div>';

            case 'historique':
                return '<h3>🕒 Historique</h3>' +
                    '<div class="info-item"><i class="fas fa-receipt"></i><span class="label">24/11/2024</span><span class="value">120 π</span></div>' +
                    '<div class="info-item"><i class="fas fa-receipt"></i><span class="label">20/11/2024</span><span class="value">1200 π</span></div>' +
                    '<div class="info-item"><i class="fas fa-receipt"></i><span class="label">15/11/2024</span><span class="value">850 π</span></div>';

            case 'achats-ventes':
                return '<h3>📊 Achats & Ventes</h3>' +
                    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:16px;">' +
                    '<div style="background:var(--gray-light);padding:20px;text-align:center;border-radius:12px;">' +
                    '<div style="font-size:28px;font-weight:800;color:var(--primary);">12</div>' +
                    '<div style="font-size:13px;color:var(--text-muted);">Achats</div></div>' +
                    '<div style="background:var(--gray-light);padding:20px;text-align:center;border-radius:12px;">' +
                    '<div style="font-size:28px;font-weight:800;color:var(--primary);">8</div>' +
                    '<div style="font-size:13px;color:var(--text-muted);">Ventes</div></div>' +
                    '</div>';

            case 'faq':
                return '<h3>❓ FAQ</h3>' +
                    '<div style="margin-bottom:16px;"><strong>Comment se connecter avec Pi ?</strong><p style="color:var(--text-muted);margin-top:4px;">Ouvrez l\'app dans Pi Browser, puis cliquez sur "Connecter avec Pi Network".</p></div>' +
                    '<div style="margin-bottom:16px;"><strong>Comment payer avec Pi ?</strong><p style="color:var(--text-muted);margin-top:4px;">Ajoutez des produits au panier puis cliquez sur "Payer avec Pi".</p></div>' +
                    '<div><strong>Mes données sont-elles sécurisées ?</strong><p style="color:var(--text-muted);margin-top:4px;">Oui, toutes les transactions sont sécurisées par la blockchain Pi Network.</p></div>';

            default:
                return '<p>Sélectionnez une option.</p>';
        }
    }

    // Bind menu items
    document.querySelectorAll('.profile-menu-item').forEach(function(item) {
        item.addEventListener('click', function() {
            var tab = this.getAttribute('data-tab');
            var label = this.querySelector('.menu-label').textContent;
            openProfileSubpage(tab, label);
        });
    });

    // ============ BOUTON CONNEXION PI ============
    // Liaison DIRECTE via addEventListener (plus fiable que onclick inline)
    var btnPiConnect = document.getElementById('btnPiConnect');
    if (btnPiConnect) {
        btnPiConnect.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('[Pi] Bouton cliqué. État actuel :', piUser ? 'connecté' : 'non connecté');
            if (piUser) {
                disconnectPi();
            } else {
                connectPi();
            }
        });
    }

    // ============ UPLOAD IMAGES ============
    var uploadedImages = [];
    var pImages = document.getElementById('pImages');
    if (pImages) {
        pImages.addEventListener('change', function(e) {
            var files = e.target.files;
            if (uploadedImages.length + files.length > 6) {
                showToast('Maximum 6 images', 'error');
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
    }

    function renderUploadPreview() {
        var preview = document.getElementById('uploadPreview');
        if (!preview) return;
        preview.innerHTML = uploadedImages.map(function(img, index) {
            return '<div class="preview-thumb"><img src="' + img + '" /><button class="remove-btn" onclick="removeImage(' + index + ')"><i class="fas fa-times"></i></button></div>';
        }).join('');
    }

    window.removeImage = function(index) {
        uploadedImages.splice(index, 1);
        renderUploadPreview();
    };

    // ============ PANIER ============
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
    }

    window.updateQty = function(id, delta) {
        var item = cartItems.find(function(i) { return i.id === id; });
        if (!item) return;
        item.qty += delta;
        if (item.qty <= 0) { removeFromCart(id); return; }
        renderCartItems();
        updateCartBadge();
    };

    window.removeFromCart = removeFromCart;

    function renderCartItems() {
        var body = document.getElementById('cartBody');
        var footer = document.getElementById('cartFooter');
        var totalEl = document.getElementById('cartTotalPrice');
        if (!body) return;
        if (cartItems.length === 0) {
            body.innerHTML = '<div class="cart-empty"><i class="fas fa-shopping-bag"></i><p>Panier vide</p></div>';
            footer.style.display = 'none';
            return;
        }
        body.innerHTML = cartItems.map(function(item) {
            var imgSrc = item.image || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop';
            return '<div class="cart-item">' +
                '<div class="item-image"><img src="' + imgSrc + '" /></div>' +
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
        totalEl.textContent = total.toFixed(2) + ' π';
    }

    function updateCartBadge() {
        var total = cartItems.reduce(function(s, i) { return s + i.qty; }, 0);
        document.querySelectorAll('.badge-count').forEach(function(el) {
            var parent = el.closest('.icon-btn');
            if (parent && parent.querySelector('.fa-shopping-bag')) {
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

    // ============ CHECKOUT PI ============
    document.getElementById('checkoutBtn').addEventListener('click', function() {
        if (cartItems.length === 0) { showToast('Panier vide', 'error'); return; }

        var total = cartItems.reduce(function(s, i) { return s + (i.price * i.qty); }, 0);
        var totalFixed = parseFloat(total.toFixed(2));

        // Vérifier connexion
        if (!piUser) {
            showToast('Connectez-vous avec Pi d\'abord', 'error');
            closePublishIfOpen();
            setTimeout(function() {
                window.openProfile();
                showToast('Cliquez sur "Connecter avec Pi Network"', 'info');
            }, 500);
            return;
        }

        var btn = this;
        var originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Traitement...';
        btn.disabled = true;

        createPiPayment(totalFixed, 'Global Bulk - ' + cartItems.length + ' article(s)', {
            items: cartItems.map(function(i) { return { id: i.id, name: i.name, qty: i.qty, price: i.price }; }),
            total: totalFixed,
            username: piUser.username,
            timestamp: Date.now()
        })
        .then(function(result) {
            showToast('✅ Paiement Pi réussi ! TxID: ' + result.txid.substring(0, 12) + '...', 'success');
            cartItems = [];
            updateCartBadge();
            renderCartItems();
            setTimeout(toggleCart, 800);
        })
        .catch(function(err) {
            console.error('Erreur paiement :', err);
            showToast('Erreur : ' + (err.message || 'paiement échoué'), 'error');
        })
        .finally(function() {
            btn.innerHTML = originalHTML;
            btn.disabled = false;
        });
    });

    function closePublishIfOpen() {
        var pub = document.getElementById('publishSection');
        if (pub && pub.style.display !== 'none') pub.style.display = 'none';
    }

    // ============ STATS ============
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

    // ============ BOTTOM NAV ============
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
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    document.getElementById('btnPublishFloating').addEventListener('click', function() { window.openPublish(); });
    document.getElementById('footerPublish').addEventListener('click', function(e) { e.preventDefault(); window.openPublish(); });
    document.getElementById('footerFaq').addEventListener('click', function(e) {
        e.preventDefault();
        window.openProfile();
        setTimeout(function() { openProfileSubpage('faq', 'FAQ'); }, 100);
    });

    // ============ PUBLISH FORM ============
    document.getElementById('publishForm').addEventListener('submit', function(e) {
        e.preventDefault();
        var name = document.getElementById('pName').value.trim();
        var category = document.getElementById('pCategory').value;
        var price = parseFloat(document.getElementById('pPrice').value);
        var minOrder = parseInt(document.getElementById('pMinOrder').value);
        var stock = parseInt(document.getElementById('pStock').value);
        var supplier = document.getElementById('pSupplier').value.trim();
        var country = document.getElementById('pCountry').value;

        if (!name || !category || isNaN(price) || isNaN(minOrder) || isNaN(stock) || !supplier || !country) {
            showToast('Remplissez tous les champs', 'error');
            return;
        }

        var images = uploadedImages.length > 0 ? uploadedImages : ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop'];
        products.push({
            id: products.length + 1, name: name, price: price,
            unit: document.getElementById('pUnit').value, minOrder: minOrder, stock: stock,
            supplier: supplier, country: country, verified: true,
            rating: parseFloat(document.getElementById('pRating').value) || 4.5,
            category: category, images: images
        });
        renderProducts();
        applyFilters();
        showToast('Produit publié !', 'success');
        uploadedImages = [];
        document.getElementById('uploadPreview').innerHTML = '';
        this.reset();
        window.closePublish();
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

    // ============ INITIALISATION ============
    console.log('[App] Démarrage...');
    console.log('[App] Pi SDK disponible :', typeof Pi !== 'undefined');

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

        if (isDemoMode) {
            setTimeout(function() {
                showToast('Mode démo activé (test hors Pi Browser)', 'info');
            }, 1000);
        } else {
            setTimeout(function() { showToast('Bienvenue sur Global Bulk', 'success'); }, 500);
        }
    });

})();
