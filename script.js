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

    var products = [
        { id: 1, name: 'Smartphone Galaxy S24', price: 120, unit: 'Pi', minOrder: 10, stock: 850, supplier: 'MobileTech GmbH', country: 'Allemagne', verified: true, rating: 4.9, category: 'Électronique', images: ['https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&h=400&fit=crop'] },
        { id: 2, name: 'Ordinateur Portable Pro', price: 450, unit: 'Pi', minOrder: 5, stock: 320, supplier: 'TechImport SARL', country: 'Chine', verified: true, rating: 4.8, category: 'Électronique', images: ['https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop'] },
        { id: 3, name: 'Voiture Électrique Model 3', price: 35000, unit: 'Pi', minOrder: 1, stock: 45, supplier: 'AutoGreen SA', country: 'USA', verified: true, rating: 4.7, category: 'Automobile', images: ['https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop'] },
        { id: 4, name: 'T-shirt en coton bio', price: 2.5, unit: 'Pi', minOrder: 200, stock: 12000, supplier: 'EcoWear SARL', country: 'France', verified: true, rating: 4.7, category: 'Mode', images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop'] },
        { id: 5, name: 'Chaussures de sport', price: 12, unit: 'Pi', minOrder: 50, stock: 320, supplier: 'SportFoot Inc', country: 'USA', verified: false, rating: 4.2, category: 'Chaussures', images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop'] },
        { id: 6, name: 'Montre connectée', price: 35, unit: 'Pi', minOrder: 20, stock: 1500, supplier: 'TechImport SARL', country: 'Chine', verified: true, rating: 4.6, category: 'Électronique', images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop'] },
        { id: 7, name: 'Lampe solaire 10W', price: 4.5, unit: 'Pi', minOrder: 100, stock: 3000, supplier: 'GreenEnergy Ltd', country: 'Allemagne', verified: true, rating: 4.5, category: 'Énergie', images: ['https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop'] },
        { id: 8, name: 'Meubles de salon (set)', price: 180, unit: 'Pi', minOrder: 5, stock: 120, supplier: 'HomeFurnish SARL', country: 'France', verified: false, rating: 4.0, category: 'Maison', images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop'] },
        { id: 9, name: 'Café Arabica 1kg', price: 3.2, unit: 'Pi', minOrder: 500, stock: 8000, supplier: 'AgriExport Co', country: 'Colombie', verified: true, rating: 4.9, category: 'Alimentation', images: ['https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop'] },
        { id: 10, name: 'Crème Anti-Âge 50ml', price: 8, unit: 'Pi', minOrder: 100, stock: 2000, supplier: 'BeautyLab SAS', country: 'France', verified: true, rating: 4.3, category: 'Beauté', images: ['https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=400&fit=crop'] },
        { id: 11, name: 'Tracteur Agricole 4x4', price: 45000, unit: 'Pi', minOrder: 1, stock: 12, supplier: 'AgriMachines Ltd', country: 'USA', verified: true, rating: 4.4, category: 'Agriculture', images: ['https://images.unsplash.com/photo-1531816458010-4f4c24de72e1?w=600&h=400&fit=crop'] },
        { id: 12, name: 'Équipement de Chantier (set)', price: 220, unit: 'Pi', minOrder: 10, stock: 340, supplier: 'BuildPro SARL', country: 'France', verified: false, rating: 3.9, category: 'Construction', images: ['https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop'] }
    ];

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

    // ============ ÉTAT PI ============
    var piUser = null;
    var piReady = false;
    var inPiBrowser = false;

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
        }, 4000);
    }

    // ============ DÉTECTION & INIT PI ============
    function waitForPiSdk(maxMs) {
        maxMs = maxMs || 5000;
        return new Promise(function(resolve, reject) {
            var start = Date.now();
            function check() {
                if (typeof Pi !== 'undefined' && Pi.init && Pi.authenticate) {
                    console.log('[Pi] ✅ SDK détecté après ' + (Date.now() - start) + 'ms');
                    resolve(true);
                } else if (Date.now() - start > maxMs) {
                    console.warn('[Pi] ⏱️ Timeout SDK après ' + maxMs + 'ms');
                    reject(new Error('SDK timeout'));
                } else {
                    setTimeout(check, 150);
                }
            }
            check();
        });
    }

    function detectPiBrowser() {
        var uaIsPi = /PiBrowser/i.test(navigator.userAgent);
        var hasPi = typeof Pi !== 'undefined';
        inPiBrowser = uaIsPi || hasPi;
        console.log('[Pi] UA PiBrowser:', uaIsPi, '| SDK:', hasPi, '| =>', inPiBrowser);
        return inPiBrowser;
    }

    function initPiSdk() {
        if (!inPiBrowser) return false;
        try {
            Pi.init({ version: "2.0", sandbox: false });
            piReady = true;
            console.log('[Pi] ✅ SDK initialisé');
            return true;
        } catch (e) {
            console.error('[Pi] ❌ Erreur init :', e);
            return false;
        }
    }

    // ============ AUTHENTIFICATION PI ============
    function onIncompletePaymentFound(payment) {
        console.log('[Pi] Paiement incomplet :', payment);
    }

    function connectPi() {
        console.log('[Pi] 🚀 Connexion demandée');
        if (!inPiBrowser) { showToast('Ouvrez cette app dans Pi Browser', 'error'); return; }
        if (!piReady && !initPiSdk()) { showToast('Erreur initialisation Pi SDK', 'error'); return; }

        var btn = document.getElementById('piActionBtn');
        var actionText = document.getElementById('piActionText');
        if (btn) btn.disabled = true;
        if (actionText) actionText.textContent = 'Connexion...';
        showToast('Ouverture de Pi Network...', 'info');

        Pi.authenticate(['username', 'payments'], onIncompletePaymentFound)
            .then(function(auth) {
                console.log('[Pi] ✅ SUCCÈS :', auth.user);
                piUser = { uid: auth.user.uid, username: auth.user.username };
                try { localStorage.setItem('pi_user', JSON.stringify(piUser)); } catch (e) {}
                updatePiUI();
                closeAuthModal();
                showToast('Bienvenue ' + auth.user.username + ' !', 'success');
            })
            .catch(function(err) {
                console.error('[Pi] ❌ Erreur auth :', err);
                var msg = (err && err.message) ? err.message : 'Connexion échouée';
                if (/denied|cancel/i.test(msg)) { showToast('Connexion annulée', 'info'); }
                else { showToast('Erreur : ' + msg, 'error'); }
            })
            .finally(function() {
                if (btn) btn.disabled = false;
                updatePiUI();
            });
    }

    function disconnectPi() {
        piUser = null;
        try { localStorage.removeItem('pi_user'); } catch (e) {}
        updatePiUI();
        showToast('Déconnecté de Pi', 'info');
    }

    function updatePiUI() {
        var badge = document.getElementById('piUserBadge');
        var usernameEl = document.getElementById('piUsername');
        var accountCard = document.getElementById('piAccountCard');
        var avatar = document.getElementById('piAvatar');
        var accountUsername = document.getElementById('piAccountUsername');
        var accountSubtitle = document.getElementById('piAccountSubtitle');
        var actionBtn = document.getElementById('piActionBtn');
        var actionText = document.getElementById('piActionText');
        var hint = document.getElementById('piAccountHint');
        var publishAvatar = document.getElementById('publishAvatar');
        var publishName = document.getElementById('publishName');
        var publishHandle = document.getElementById('publishHandle');

        if (piUser) {
            if (badge) badge.style.display = 'inline-flex';
            if (usernameEl) usernameEl.textContent = piUser.username;
            if (accountCard) accountCard.classList.add('connected');
            if (avatar) avatar.textContent = piUser.username.substring(0, 2).toUpperCase();
            if (accountUsername) accountUsername.textContent = piUser.username;
            if (accountSubtitle) accountSubtitle.textContent = 'Membre Pi Network';
            if (actionBtn) { actionBtn.classList.add('disconnect'); actionBtn.disabled = false; }
            if (actionText) actionText.textContent = 'Déconnexion';
            if (hint) hint.innerHTML = '<i class="fas fa-shield-alt" style="color:var(--success);"></i> Connecté en tant que <strong>' + piUser.username + '</strong>';
            if (publishAvatar) publishAvatar.textContent = piUser.username.substring(0, 2).toUpperCase();
            if (publishName) publishName.textContent = piUser.username;
            if (publishHandle) publishHandle.textContent = '@' + piUser.username.toLowerCase();
        } else {
            if (badge) badge.style.display = 'none';
            if (accountCard) accountCard.classList.remove('connected');
            if (avatar) avatar.innerHTML = '<i class="fab fa-pi"></i>';
            if (accountUsername) accountUsername.textContent = 'Non connecté';
            if (accountSubtitle) accountSubtitle.textContent = 'Connectez-vous avec Pi Network';
            if (actionBtn) { actionBtn.classList.remove('disconnect'); actionBtn.disabled = !inPiBrowser; }
            if (actionText) actionText.textContent = 'Connecter avec Pi Network';
            if (hint) {
                if (inPiBrowser) { hint.innerHTML = '<i class="fas fa-check-circle" style="color:var(--success);"></i> Pi Browser détecté. Cliquez pour vous connecter.'; }
                else { hint.innerHTML = '<i class="fas fa-exclamation-triangle" style="color:#e6b000;"></i> Ouvrez cette app dans <strong>Pi Browser</strong> pour vous connecter.'; }
            }
            if (publishAvatar) publishAvatar.textContent = 'GB';
            if (publishName) publishName.textContent = 'Global Bulk';
            if (publishHandle) publishHandle.textContent = '@globalbulk';
        }
    }

    function loadPiSession() {
        try {
            var stored = localStorage.getItem('pi_user');
            if (stored) { piUser = JSON.parse(stored); console.log('[Pi] Session restaurée :', piUser.username); }
        } catch (e) {}
    }

    // ============ MODALES ============
    function openAuthModal(message) {
        var modal = document.getElementById('authRequiredModal');
        var msgEl = document.getElementById('authModalMessage');
        if (msgEl && message) msgEl.textContent = message;
        if (modal) modal.classList.add('open');
    }
    function closeAuthModal() {
        var modal = document.getElementById('authRequiredModal');
        if (modal) modal.classList.remove('open');
    }
    function openPaymentModal() {
        var modal = document.getElementById('paymentModal');
        var summary = document.getElementById('paymentSummary');
        var amount = document.getElementById('paymentAmount');
        if (!summary) return;
        summary.innerHTML = cartItems.map(function(item) {
            return '<div class="payment-summary-item">' +
                '<span class="name">' + item.name + '</span>' +
                '<span class="qty">×' + item.qty + '</span>' +
                '<span class="price">' + (item.price * item.qty).toFixed(2) + ' π</span>' +
                '</div>';
        }).join('');
        var total = cartItems.reduce(function(s, i) { return s + (i.price * i.qty); }, 0);
        amount.textContent = total.toFixed(2) + ' π';
        modal.classList.add('open');
    }
    function closePaymentModal() {
        var modal = document.getElementById('paymentModal');
        if (modal) modal.classList.remove('open');
    }

    // ============ GUARD AUTH ============
    function requireAuth(actionName) {
        if (piUser) return true;
        console.log('[Auth] Refusé : ' + actionName);
        var messages = {
            'panier': 'Connectez-vous avec Pi Network pour ajouter des produits au panier.',
            'commande': 'Connectez-vous avec Pi Network pour passer commande.',
            'publier': 'Connectez-vous avec Pi Network pour publier un produit.',
            'contacter': 'Connectez-vous avec Pi Network pour contacter un fournisseur.'
        };
        openAuthModal(messages[actionName] || 'Connectez-vous avec Pi Network pour continuer.');
        return false;
    }

    // ============ PAIEMENT PI (INCHANGÉ) ============
    function createPiPayment(amount, memo, metadata) {
        return new Promise(function(resolve, reject) {
            if (!piUser) { reject(new Error('Non connecté')); return; }
            if (typeof Pi === 'undefined' || !Pi.createPayment) { reject(new Error('SDK Pi introuvable')); return; }
            Pi.createPayment({
                amount: amount,
                memo: memo,
                metadata: metadata
            }, {
                onReadyForServerApproval: function(paymentId) {
                    console.log('[Pi] 📤 Prêt pour approbation serveur :', paymentId);
                    fetch('https://global-bulk-pi-backend.onrender.com/approve', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ paymentId: paymentId })
                    })
                    .then(response => response.json())
                    .then(data => console.log('[Pi] ✅ Approbation confirmée par le serveur:', data))
                    .catch(error => console.error('[Pi] ❌ Erreur approbation:', error));
                },
                onReadyForServerCompletion: function(paymentId, txid) {
                    console.log('[Pi] ✅ Paiement complété :', paymentId, txid);
                    fetch('https://global-bulk-pi-backend.onrender.com/complete', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ paymentId: paymentId, txid: txid })
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log('[Pi] ✅ Finalisation confirmée:', data);
                        resolve({ paymentId: paymentId, txid: txid });
                    })
                    .catch(error => {
                        console.error('[Pi] ❌ Erreur finalisation:', error);
                        reject(error);
                    });
                },
                onCancel: function(paymentId) {
                    console.log('[Pi] ❌ Paiement annulé');
                    reject(new Error('Paiement annulé'));
                },
                onError: function(error) {
                    console.error('[Pi] ❌ Erreur paiement :', error);
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
                    document.getElementById('globalLoader').classList.add('hidden');
                    document.getElementById('appContent').style.display = 'block';
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
        if (!track) return;
        var currentIndex = 0;
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
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;
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

    // ============ FILTRES ============
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
            var firstImage = p.images && p.images.length > 0 ? p.images[0] : '';
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
        allCountries.forEach(function(c) { countrySelect.innerHTML += '<option value="' + c + '">' + c + '</option>'; });
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
        if (!q) { showToast('Entrez un terme', 'error'); return; }
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
        var images = p.images && p.images.length > 0 ? p.images : [''];
        content.innerHTML =
            '<div class="product-detail-grid">' +
            '<div class="gallery"><div class="main-image"><img src="' + images[0] + '" /></div></div>' +
            '<div class="info">' +
            '<h1>' + p.name + '</h1>' +
            '<div style="margin-bottom:10px;"><span class="badge badge-verified"><i class="fas fa-check-circle"></i> ' + (p.verified ? 'Vérifié' : 'Non vérifié') + '</span></div>' +
            '<div style="font-size:13px;color:var(--text-muted);margin-bottom:14px;"><i class="fas fa-building"></i> ' + p.supplier + ' · ' + p.country + '</div>' +
            '<div class="price-box">' +
            '<div><span style="font-size:13px;color:var(--text-muted);">Prix de gros</span><br><span style="font-size:28px;font-weight:700;color:var(--primary);">' + p.price + ' ' + p.unit + '</span></div>' +
            '<div><span style="font-size:13px;color:var(--text-muted);">Qté min.</span><br><span style="font-size:20px;font-weight:600;">' + p.minOrder + ' unités</span></div>' +
            '</div>' +
            '<div class="volume-pricing">' +
            '<div class="tier"><div style="font-size:12px;color:var(--text-muted);">' + p.minOrder + '+</div><div class="price">' + p.price + ' Pi</div></div>' +
            '<div class="tier"><div style="font-size:12px;color:var(--text-muted);">' + (p.minOrder * 5) + '+</div><div class="price">' + (p.price * 0.9).toFixed(1) + ' Pi</div></div>' +
            '<div class="tier"><div style="font-size:12px;color:var(--text-muted);">' + (p.minOrder * 10) + '+</div><div class="price">' + (p.price * 0.8).toFixed(1) + ' Pi</div></div>' +
            '</div>' +
            '<div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:16px;">' +
            '<button class="btn btn-primary" onclick="addToCart(' + p.id + ')"><i class="fas fa-cart-plus"></i> Ajouter au panier</button>' +
            '</div></div></div>';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.closeProductDetail = function() {
        showMainContent();
        document.querySelectorAll('.bottom-nav .nav-item').forEach(function(b) { b.classList.remove('active'); });
        document.querySelector('.bottom-nav .nav-item[data-page="home"]').classList.add('active');
    };

    window.openPublish = function() {
        if (!requireAuth('publier')) return;
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
        updatePiUI();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.closeProfile = function() {
        showMainContent();
        document.querySelectorAll('.bottom-nav .nav-item').forEach(function(b) { b.classList.remove('active'); });
        document.querySelector('.bottom-nav .nav-item[data-page="home"]').classList.add('active');
    };

    // ============ TIROIR LATÉRAL ============
    function openSideDrawer(tabId, title) {
        var drawer = document.getElementById('sideDrawer');
        var overlay = document.getElementById('sideDrawerOverlay');
        var titleEl = document.getElementById('sideDrawerTitle');
        var content = document.getElementById('sideDrawerContent');
        if (titleEl) titleEl.textContent = title;
        if (content) content.innerHTML = renderSideDrawerContent(tabId);
        if (drawer) drawer.classList.add('open');
        if (overlay) overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeSideDrawer() {
        var drawer = document.getElementById('sideDrawer');
        var overlay = document.getElementById('sideDrawerOverlay');
        if (drawer) drawer.classList.remove('open');
        if (overlay) overlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    function renderSideDrawerContent(tabId) {
        function infoItem(icon, label, value) {
            return '<div class="info-item">' +
                '<i class="fas ' + icon + '"></i>' +
                '<span class="label">' + label + '</span>' +
                '<span class="value">' + value + '</span>' +
                '</div>';
        }
        switch(tabId) {
            case 'monprofil':
                if (!piUser) return '<div class="empty-state"><i class="fas fa-user-slash"></i><p>Connectez-vous avec Pi pour voir votre profil.</p></div>';
                return '<h3><i class="fas fa-user-circle"></i> Mon profil</h3>' +
                    infoItem('fa-user', 'Pseudo', piUser.username) +
                    infoItem('fa-fingerprint', 'UID', piUser.uid.substring(0, 20) + '...') +
                    infoItem('fa-shield-alt', 'Statut', 'Membre Pi Network') +
                    infoItem('fa-globe', 'Réseau', 'Pi Network Mainnet');

            // ✅ DYNAMIQUE : Affiche les produits publiés par l'utilisateur connecté
            case 'mes-produits':
                if (!piUser) {
                    return '<div class="empty-state"><i class="fas fa-box-open"></i><p>Connectez-vous avec Pi pour voir vos produits.</p></div>';
                }
                
                var myProducts = products.filter(function(p) { return p.supplier === piUser.username; });
                var html = '<h3><i class="fas fa-boxes"></i> Mes produits (' + myProducts.length + ')</h3>';
                
                if (myProducts.length === 0) {
                    html += '<div class="empty-state">' +
                            '<i class="fas fa-box-open"></i>' +
                            '<p>Vous n\'avez publié aucun produit pour le moment.</p>' +
                            '<p style="font-size:12px; margin-top:8px;">Rendez-vous dans l\'onglet <strong>Publier</strong> pour ajouter votre premier produit.</p>' +
                            '</div>';
                } else {
                    html += '<div style="display:flex;flex-direction:column;gap:10px;">';
                    myProducts.forEach(function(p) {
                        var img = (p.images && p.images.length > 0) ? p.images[0] : '';
                        html += '<div class="my-product-item" onclick="closeSideDrawer(); showProductDetail(' + p.id + ');">' +
                                    '<img class="my-product-img" src="' + img + '" alt="' + p.name + '" />' +
                                    '<div class="my-product-info">' +
                                        '<div class="my-product-name">' + p.name + '</div>' +
                                        '<div class="my-product-price">' + p.price + ' ' + p.unit + '</div>' +
                                        '<div class="my-product-meta">Stock: ' + p.stock + ' · Cat: ' + p.category + '</div>' +
                                    '</div>' +
                                    '<i class="fas fa-chevron-right" style="color:var(--text-muted);"></i>' +
                                '</div>';
                    });
                    html += '</div>';
                }
                return html;

            case 'parametres':
                return '<h3><i class="fas fa-sliders-h"></i> Paramètres</h3>' +
                    infoItem('fa-bell', 'Notifications', 'Activées') +
                    infoItem('fa-language', 'Langue', 'Français') +
                    infoItem('fa-palette', 'Thème', 'Clair');
            case 'langues':
                return '<h3><i class="fas fa-globe"></i> Langues</h3>' +
                    '<div class="info-item"><i class="fas fa-check-circle" style="color:#4caf50;"></i><span class="label">Français</span><span class="value">Actif</span></div>' +
                    '<div class="info-item"><i class="fas fa-circle" style="color:#ccc;"></i><span class="label">English</span><span class="value">Inactif</span></div>' +
                    '<div class="info-item"><i class="fas fa-circle" style="color:#ccc;"></i><span class="label">Español</span><span class="value">Inactif</span></div>';
            case 'livre-blanc':
                return '<h3><i class="fas fa-file-pdf"></i> Livre blanc</h3>' +
                    infoItem('fa-file-pdf', 'Guide 2026', 'Disponible') +
                    infoItem('fa-file-pdf', 'Stratégies', 'Disponible') +
                    infoItem('fa-file-pdf', 'Marchés émergents', 'Bientôt');
            case 'historique':
                if (!piUser) return '<div class="empty-state"><i class="fas fa-history"></i><p>Connectez-vous pour voir votre historique.</p></div>';
                return '<h3><i class="fas fa-history"></i> Historique</h3>' +
                    infoItem('fa-receipt', '24/11/2024', '120 π') +
                    infoItem('fa-receipt', '20/11/2024', '1200 π') +
                    infoItem('fa-receipt', '15/11/2024', '850 π');
            case 'achats-ventes':
                if (!piUser) return '<div class="empty-state"><i class="fas fa-chart-line"></i><p>Connectez-vous pour voir vos statistiques.</p></div>';
                return '<h3><i class="fas fa-chart-line"></i> Achats & Ventes</h3>' +
                    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:16px;">' +
                    '<div style="background:var(--gray-light);padding:20px;text-align:center;border-radius:12px;">' +
                    '<div style="font-size:28px;font-weight:800;color:var(--primary);">12</div>' +
                    '<div style="font-size:13px;color:var(--text-muted);">Achats</div></div>' +
                    '<div style="background:var(--gray-light);padding:20px;text-align:center;border-radius:12px;">' +
                    '<div style="font-size:28px;font-weight:800;color:var(--primary);">8</div>' +
                    '<div style="font-size:13px;color:var(--text-muted);">Ventes</div></div></div>';
            case 'faq':
                return '<h3><i class="fas fa-question-circle"></i> FAQ</h3>' +
                    '<div style="margin-bottom:20px;"><strong>Comment se connecter ?</strong><p style="color:var(--text-muted);margin-top:6px;">Ouvrez l\'app dans Pi Browser puis cliquez sur "Connecter avec Pi Network".</p></div>' +
                    '<div style="margin-bottom:20px;"><strong>Comment payer ?</strong><p style="color:var(--text-muted);margin-top:6px;">Ajoutez des produits au panier puis cliquez sur "Payer avec Pi".</p></div>' +
                    '<div><strong>Pourquoi se connecter ?</strong><p style="color:var(--text-muted);margin-top:6px;">La connexion Pi est obligatoire pour toutes les opérations.</p></div>';
            default:
                return '<p>Sélectionnez une option.</p>';
        }
    }

    // Écouteurs menu profil
    document.querySelectorAll('.menu-item').forEach(function(item) {
        item.addEventListener('click', function() {
            var tab = this.getAttribute('data-tab');
            var label = this.querySelector('.menu-label').textContent;
            openSideDrawer(tab, label);
        });
    });

    // Boutons fermeture drawer
    document.getElementById('sideDrawerClose').addEventListener('click', closeSideDrawer);
    document.getElementById('sideDrawerBack').addEventListener('click', closeSideDrawer);
    document.getElementById('sideDrawerOverlay').addEventListener('click', closeSideDrawer);

    // ============ BOUTON CONNEXION PI ============
    var btnPiConnect = document.getElementById('piActionBtn');
    if (btnPiConnect) {
        btnPiConnect.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('[Pi] Action clic. État :', piUser ? 'connecté' : 'non connecté');
            if (piUser) { disconnectPi(); } else { connectPi(); }
        });
    }

    // Modale auth - bouton
    document.getElementById('authModalConnectBtn').addEventListener('click', function() {
        closeAuthModal();
        window.openProfile();
        setTimeout(function() {
            var card = document.getElementById('piAccountCard');
            if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    });
    document.getElementById('authModalCancelBtn').addEventListener('click', closeAuthModal);

    // Modale paiement
    document.getElementById('paymentCancelBtn').addEventListener('click', closePaymentModal);
    document.getElementById('paymentConfirmBtn').addEventListener('click', function() {
        closePaymentModal();
        executePayment();
    });

    // ============ UPLOAD ============
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
        if (!requireAuth('panier')) return;
        var p = products.find(function(x) { return x.id === id; });
        if (!p) return;
        var existing = cartItems.find(function(item) { return item.id === id; });
        if (existing) existing.qty += p.minOrder;
        else cartItems.push({ id: p.id, name: p.name, qty: p.minOrder, price: p.price, image: p.images ? p.images[0] : '' });
        updateCartBadge();
        showToast(p.name + ' ajouté au panier', 'success');
        if (isCartOpen) renderCartItems();
    };

    window.removeFromCart = function(id) {
        cartItems = cartItems.filter(function(item) { return item.id !== id; });
        updateCartBadge();
        renderCartItems();
    };

    window.updateQty = function(id, delta) {
        var item = cartItems.find(function(i) { return i.id === id; });
        if (!item) return;
        item.qty += delta;
        if (item.qty <= 0) { removeFromCart(id); return; }
        renderCartItems();
        updateCartBadge();
    };

    function renderCartItems() {
        var body = document.getElementById('cartBody');
        var footer = document.getElementById('cartFooter');
        var totalEl = document.getElementById('cartTotalPrice');
        if (!body) return;
        if (cartItems.length === 0) {
            body.innerHTML = '<div class="cart-empty"><i class="fas fa-cart-shopping"></i><p>Panier vide</p></div>';
            footer.style.display = 'none';
            return;
        }
        body.innerHTML = cartItems.map(function(item) {
            var imgSrc = item.image || '';
            return '<div class="cart-item">' +
                '<div class="item-image"><img src="' + imgSrc + '" /></div>' +
                '<div class="item-info">' +
                '<div class="name">' + item.name + '</div>' +
                '<div class="price">' + (item.price * item.qty).toFixed(2) + ' π</div>' +
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

    // ✅ MISE À JOUR : Utilise l'ID 'cartToggle' (plus fiable que la classe de l'icône)
    function updateCartBadge() {
        var total = cartItems.reduce(function(s, i) { return s + i.qty; }, 0);
        var cartToggle = document.getElementById('cartToggle');
        if (cartToggle) {
            var badge = cartToggle.querySelector('.badge-count');
            if (badge) {
                badge.textContent = total;
                badge.style.display = total > 0 ? 'flex' : 'none';
            }
        }
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

    // ============ CHECKOUT (INCHANGÉ) ============
    document.getElementById('checkoutBtn').addEventListener('click', function() {
        if (!requireAuth('commande')) return;
        if (cartItems.length === 0) { showToast('Panier vide', 'error'); return; }
        toggleCart();
        setTimeout(openPaymentModal, 300);
    });

    function executePayment() {
        var total = cartItems.reduce(function(s, i) { return s + (i.price * i.qty); }, 0);
        var totalFixed = parseFloat(total.toFixed(2));
        showToast('Traitement du paiement...', 'info');
        createPiPayment(totalFixed, 'Global Bulk - ' + cartItems.length + ' article(s)', {
            items: cartItems.map(function(i) { return { id: i.id, name: i.name, qty: i.qty, price: i.price }; }),
            total: totalFixed,
            username: piUser.username,
            timestamp: Date.now()
        })
        .then(function(result) {
            showToast('✅ Paiement réussi !', 'success');
            console.log('[Pi] Transaction ID:', result.txid);
            cartItems = [];
            updateCartBadge();
            renderCartItems();
        })
        .catch(function(err) {
            console.error('[Pi] Erreur paiement :', err);
            if (/annulé/i.test(err.message)) { showToast('Paiement annulé', 'info'); }
            else { showToast('Erreur : ' + (err.message || 'paiement échoué'), 'error'); }
        });
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

    var btnPublishFloating = document.getElementById('btnPublishFloating');
    if (btnPublishFloating) {
        btnPublishFloating.addEventListener('click', function() { window.openPublish(); });
    }

    document.getElementById('footerPublish').addEventListener('click', function(e) { e.preventDefault(); window.openPublish(); });
    document.getElementById('footerFaq').addEventListener('click', function(e) {
        e.preventDefault();
        window.openProfile();
        setTimeout(function() { openSideDrawer('faq', 'FAQ'); }, 400);
    });

    // ============ PUBLISH FORM (INCHANGÉ) ============
    document.getElementById('publishForm').addEventListener('submit', function(e) {
        e.preventDefault();
        if (!requireAuth('publier')) return;

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

        var images = uploadedImages.length > 0 ? uploadedImages : [''];
        products.push({
            id: products.length + 1, name: name, price: price,
            unit: document.getElementById('pUnit').value, minOrder: minOrder, stock: stock,
            supplier: piUser.username, country: country, verified: true,
            rating: parseFloat(document.getElementById('pRating').value) || 4.5,
            category: category, images: images
        });
        renderProducts();
        applyFilters();
        showToast('Produit publié ! Retrouvez-le dans "Mes produits".', 'success');
        uploadedImages = [];
        document.getElementById('uploadPreview').innerHTML = '';
        this.reset();
        window.closePublish();
    });

    function populateFormSelects() {
        var pCategory = document.getElementById('pCategory');
        if (pCategory) {
            pCategory.innerHTML = '<option value="">Catégorie *</option>';
            categories.forEach(function(c) { pCategory.innerHTML += '<option value="' + c.name + '">' + c.name + '</option>'; });
        }
        var pCountry = document.getElementById('pCountry');
        if (pCountry) {
            pCountry.innerHTML = '<option value="">Pays *</option>';
            allCountries.forEach(function(c) { pCountry.innerHTML += '<option value="' + c + '">' + c + '</option>'; });
        }
    }

    // ============ INITIALISATION ============
    console.log('[App] 🚀 Démarrage');
    detectPiBrowser();
    loadPiSession();

    waitForPiSdk(5000)
        .then(function() {
            console.log('[Pi] SDK prêt');
            initPiSdk();
            updatePiUI();
        })
        .catch(function() {
            console.warn('[Pi] SDK non chargé. Ouvrez dans Pi Browser.');
            inPiBrowser = false;
            updatePiUI();
        });

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

        setTimeout(function() {
            if (piUser) { showToast('Bon retour ' + piUser.username + ' !', 'success'); }
            else if (inPiBrowser) { showToast('Allez dans Profil pour vous connecter', 'info'); }
            else { showToast('Ouvrez dans Pi Browser pour Pi', 'info'); }
        }, 800);
    });

})();
