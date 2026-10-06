(function() {
    'use strict';

    /* =========================================================
       ===== CONFIG SUPABASE ===================================
       ========================================================= */
    var SUPABASE_URL = 'https://rixdxgmsbjweyptzlfj.supabase.co';
    var SUPABASE_KEY = 'sb_publishable_6uixjhvDKduS3yyqGtp32Q_uY7_tAyg';

    var SupaAPI = {
        headers: function() {
            return {
                'apikey': SUPABASE_KEY,
                'Authorization': 'Bearer ' + SUPABASE_KEY,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            };
        },
        get: function(path) {
            return fetch(SUPABASE_URL + '/rest/v1/' + path, { headers: SupaAPI.headers() })
                .then(function(r) { if (!r.ok) throw new Error('GET ' + path + ' ' + r.status); return r.json(); });
        },
        post: function(path, body) {
            return fetch(SUPABASE_URL + '/rest/v1/' + path, {
                method: 'POST',
                headers: SupaAPI.headers(),
                body: JSON.stringify(body)
            }).then(function(r) { if (!r.ok) throw new Error('POST ' + path + ' ' + r.status); return r.json(); });
        },
        patch: function(path, body) {
            return fetch(SUPABASE_URL + '/rest/v1/' + path, {
                method: 'PATCH',
                headers: SupaAPI.headers(),
                body: JSON.stringify(body)
            }).then(function(r) { if (!r.ok) throw new Error('PATCH ' + path + ' ' + r.status); return r.json(); });
        },
        upsert: function(path, body, onConflict) {
            var h = SupaAPI.headers();
            h['Prefer'] = 'resolution=merge-duplicates,return=representation';
            return fetch(SUPABASE_URL + '/rest/v1/' + path + (onConflict ? '?on_conflict=' + onConflict : ''), {
                method: 'POST',
                headers: h,
                body: JSON.stringify(body)
            }).then(function(r) { if (!r.ok) throw new Error('UPSERT ' + path + ' ' + r.status); return r.json(); });
        }
    };

    /* =========================================================
       ===== CATÉGORIES ========================================
       ========================================================= */
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

    /* =========================================================
       ===== PAYS ==============================================
       ========================================================= */
    var allCountries = [
        { name: 'Afrique du Sud', flag: '🇿🇦' }, { name: 'Algérie', flag: '🇩🇿' }, { name: 'Angola', flag: '🇦🇴' },
        { name: 'Bénin', flag: '🇧🇯' }, { name: 'Burkina Faso', flag: '🇧🇫' }, { name: 'Cameroun', flag: '🇨🇲' },
        { name: 'Congo', flag: '🇨🇬' }, { name: 'RD Congo', flag: '🇨🇩' }, { name: 'Côte d\'Ivoire', flag: '🇨🇮' },
        { name: 'Égypte', flag: '🇪🇬' }, { name: 'Éthiopie', flag: '🇪🇹' }, { name: 'Gabon', flag: '🇬🇦' },
        { name: 'Ghana', flag: '🇬🇭' }, { name: 'Guinée', flag: '🇬🇳' }, { name: 'Kenya', flag: '🇰🇪' },
        { name: 'Madagascar', flag: '🇲🇬' }, { name: 'Mali', flag: '🇲🇱' }, { name: 'Maroc', flag: '🇲🇦' },
        { name: 'Maurice', flag: '🇲🇺' }, { name: 'Niger', flag: '🇳🇪' }, { name: 'Nigeria', flag: '🇳🇬' },
        { name: 'Rwanda', flag: '🇷🇼' }, { name: 'Sénégal', flag: '🇸🇳' }, { name: 'Tanzanie', flag: '🇹🇿' },
        { name: 'Togo', flag: '🇹🇬' }, { name: 'Tunisie', flag: '🇹🇳' }, { name: 'Canada', flag: '🇨🇦' },
        { name: 'États-Unis', flag: '🇺🇸' }, { name: 'Mexique', flag: '🇲🇽' }, { name: 'Costa Rica', flag: '🇨🇷' },
        { name: 'Cuba', flag: '🇨🇺' }, { name: 'Guatemala', flag: '🇬🇹' }, { name: 'Haïti', flag: '🇭🇹' },
        { name: 'Panama', flag: '🇵🇦' }, { name: 'République Dominicaine', flag: '🇩🇴' }, { name: 'Argentine', flag: '🇦🇷' },
        { name: 'Bolivie', flag: '🇧🇴' }, { name: 'Brésil', flag: '🇧🇷' }, { name: 'Chili', flag: '🇨🇱' },
        { name: 'Colombie', flag: '🇨🇴' }, { name: 'Équateur', flag: '🇪🇨' }, { name: 'Pérou', flag: '🇵🇪' },
        { name: 'Uruguay', flag: '🇺🇾' }, { name: 'Venezuela', flag: '🇻🇪' }, { name: 'Arabie Saoudite', flag: '🇸🇦' },
        { name: 'Bangladesh', flag: '🇧🇩' }, { name: 'Chine', flag: '🇨🇳' }, { name: 'Corée du Sud', flag: '🇰🇷' },
        { name: 'Émirats arabes unis', flag: '🇦🇪' }, { name: 'Inde', flag: '🇮🇳' }, { name: 'Indonésie', flag: '🇮🇩' },
        { name: 'Israël', flag: '🇮🇱' }, { name: 'Japon', flag: '🇯🇵' }, { name: 'Malaisie', flag: '🇲🇾' },
        { name: 'Pakistan', flag: '🇵🇰' }, { name: 'Philippines', flag: '🇵🇭' }, { name: 'Qatar', flag: '🇶🇦' },
        { name: 'Singapour', flag: '🇸🇬' }, { name: 'Thaïlande', flag: '🇹🇭' }, { name: 'Turquie', flag: '🇹🇷' },
        { name: 'Vietnam', flag: '🇻🇳' }, { name: 'Allemagne', flag: '🇩🇪' }, { name: 'Autriche', flag: '🇦🇹' },
        { name: 'Belgique', flag: '🇧🇪' }, { name: 'Bulgarie', flag: '🇧🇬' }, { name: 'Danemark', flag: '🇩🇰' },
        { name: 'Espagne', flag: '🇪🇸' }, { name: 'Estonie', flag: '🇪🇪' }, { name: 'Finlande', flag: '🇫🇮' },
        { name: 'France', flag: '🇫🇷' }, { name: 'Grèce', flag: '🇬🇷' }, { name: 'Hongrie', flag: '🇭🇺' },
        { name: 'Irlande', flag: '🇮🇪' }, { name: 'Italie', flag: '🇮🇹' }, { name: 'Luxembourg', flag: '🇱🇺' },
        { name: 'Norvège', flag: '🇳🇴' }, { name: 'Pays-Bas', flag: '🇳🇱' }, { name: 'Pologne', flag: '🇵🇱' },
        { name: 'Portugal', flag: '🇵🇹' }, { name: 'Roumanie', flag: '🇷🇴' }, { name: 'Royaume-Uni', flag: '🇬🇧' },
        { name: 'Russie', flag: '🇷🇺' }, { name: 'Suède', flag: '🇸🇪' }, { name: 'Suisse', flag: '🇨🇭' },
        { name: 'Ukraine', flag: '🇺🇦' }, { name: 'Australie', flag: '🇦🇺' }, { name: 'Nouvelle-Zélande', flag: '🇳🇿' }
    ];

    /* =========================================================
       ===== PRODUITS (fallback local, en attendant Supabase)
       ========================================================= */
    var products = [
        { id: 1, name: 'Smartphone Galaxy S24', price: 120, unit: 'Pi', minOrder: 10, stock: 850, supplier: 'MobileTech GmbH', country: 'Allemagne', verified: true, rating: 4.9, category: 'Électronique', images: ['https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&h=400&fit=crop'] },
        { id: 2, name: 'Ordinateur Portable Pro', price: 450, unit: 'Pi', minOrder: 5, stock: 320, supplier: 'TechImport SARL', country: 'Chine', verified: true, rating: 4.8, category: 'Électronique', images: ['https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop'] },
        { id: 3, name: 'Voiture Électrique Model 3', price: 35000, unit: 'Pi', minOrder: 1, stock: 45, supplier: 'AutoGreen SA', country: 'États-Unis', verified: true, rating: 4.7, category: 'Automobile', images: ['https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop'] },
        { id: 4, name: 'T-shirt en coton bio', price: 2.5, unit: 'Pi', minOrder: 200, stock: 12000, supplier: 'EcoWear SARL', country: 'France', verified: true, rating: 4.7, category: 'Mode', images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop'] },
        { id: 5, name: 'Chaussures de sport', price: 12, unit: 'Pi', minOrder: 50, stock: 320, supplier: 'SportFoot Inc', country: 'États-Unis', verified: false, rating: 4.2, category: 'Chaussures', images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop'] },
        { id: 6, name: 'Montre connectée', price: 35, unit: 'Pi', minOrder: 20, stock: 1500, supplier: 'TechImport SARL', country: 'Chine', verified: true, rating: 4.6, category: 'Électronique', images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop'] },
        { id: 7, name: 'Lampe solaire 10W', price: 4.5, unit: 'Pi', minOrder: 100, stock: 3000, supplier: 'GreenEnergy Ltd', country: 'Allemagne', verified: true, rating: 4.5, category: 'Énergie', images: ['https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop'] },
        { id: 8, name: 'Meubles de salon (set)', price: 180, unit: 'Pi', minOrder: 5, stock: 120, supplier: 'HomeFurnish SARL', country: 'France', verified: false, rating: 4.0, category: 'Maison', images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop'] },
        { id: 9, name: 'Café Arabica 1kg', price: 3.2, unit: 'Pi', minOrder: 500, stock: 8000, supplier: 'AgriExport Co', country: 'Colombie', verified: true, rating: 4.9, category: 'Alimentation', images: ['https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop'] },
        { id: 10, name: 'Crème Anti-Âge 50ml', price: 8, unit: 'Pi', minOrder: 100, stock: 2000, supplier: 'BeautyLab SAS', country: 'France', verified: true, rating: 4.3, category: 'Beauté', images: ['https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=400&fit=crop'] },
        { id: 11, name: 'Tracteur Agricole 4x4', price: 45000, unit: 'Pi', minOrder: 1, stock: 12, supplier: 'AgriMachines Ltd', country: 'États-Unis', verified: true, rating: 4.4, category: 'Agriculture', images: ['https://images.unsplash.com/photo-1531816458010-4f4c24de72e1?w=600&h=400&fit=crop'] },
        { id: 12, name: 'Équipement de Chantier (set)', price: 220, unit: 'Pi', minOrder: 10, stock: 340, supplier: 'BuildPro SARL', country: 'France', verified: false, rating: 3.9, category: 'Construction', images: ['https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop'] }
    ];

    var suppliers = [
        { name: 'TechImport SARL', country: 'Chine', verified: true, products: 340, rating: 4.8, responseRate: 96 },
        { name: 'MobileTech GmbH', country: 'Allemagne', verified: true, products: 210, rating: 4.9, responseRate: 98 },
        { name: 'EcoWear SARL', country: 'France', verified: true, products: 180, rating: 4.7, responseRate: 92 },
        { name: 'GreenEnergy Ltd', country: 'Allemagne', verified: true, products: 90, rating: 4.5, responseRate: 88 },
        { name: 'SportFoot Inc', country: 'États-Unis', verified: false, products: 65, rating: 4.2, responseRate: 75 }
    ];

    var cartItems = [];
    var selectedCountry = '';
    var selectedCategory = 'all';

    var piUser = null;
    var piReady = false;
    var inPiBrowser = false;
    var userProfile = null;
    var userOrders = [];
    var userHistory = [];

    /* =========================================================
       ===== PROFIL UTILISATEUR (Supabase + cache mémoire)
       ========================================================= */
    function isProfileComplete() {
        if (!userProfile) return false;
        return !!(userProfile.nom && userProfile.post_nom && userProfile.email && userProfile.phone && userProfile.address);
    }

    function loadProfileFromSupabase() {
        if (!piUser) return Promise.resolve(null);
        return SupaAPI.get('profils?pi_uid=eq.' + encodeURIComponent(piUser.uid) + '&limit=1')
            .then(function(rows) {
                userProfile = (rows && rows.length > 0) ? rows[0] : null;
                return userProfile;
            })
            .catch(function(e) {
                console.error('[Supa] loadProfile error', e);
                userProfile = null;
                return null;
            });
    }

    function saveProfileToSupabase(data) {
        if (!piUser) return Promise.reject(new Error('Non connecté'));
        var payload = {
            pi_uid: piUser.uid,
            pi_username: piUser.username,
            nom: data.nom,
            post_nom: data.postNom,
            email: data.email,
            phone: data.phone,
            address: data.address,
            updated_at: new Date().toISOString()
        };
        return SupaAPI.upsert('profils', payload, 'pi_uid')
            .then(function(rows) {
                userProfile = (rows && rows.length > 0) ? rows[0] : payload;
                return userProfile;
            });
    }

    /* =========================================================
       ===== PRODUITS (Supabase)
       ========================================================= */
    function loadProductsFromSupabase() {
        return SupaAPI.get('produits?select=*&order=created_at.desc')
            .then(function(rows) {
                if (!rows || rows.length === 0) return [];
                return rows.map(function(r) {
                    return {
                        id: r.id,
                        name: r.name,
                        description: r.description,
                        price: Number(r.price),
                        unit: r.unit,
                        minOrder: r.min_order,
                        stock: r.stock,
                        supplier: r.owner_pi_uid,
                        ownerPiUid: r.owner_pi_uid,
                        country: r.country,
                        verified: !!r.verified,
                        rating: Number(r.rating || 4.5),
                        category: r.category,
                        images: Array.isArray(r.images) ? r.images : (r.images ? JSON.parse(r.images) : []),
                        _fromSupa: true
                    };
                });
            })
            .catch(function(e) {
                console.error('[Supa] loadProducts error', e);
                return [];
            });
    }

    function saveProductToSupabase(p) {
        if (!piUser) return Promise.reject(new Error('Non connecté'));
        var payload = {
            owner_pi_uid: piUser.uid,
            name: p.name,
            description: p.description || '',
            category: p.category,
            country: p.country,
            price: p.price,
            unit: p.unit,
            min_order: p.minOrder,
            stock: p.stock,
            images: p.images && p.images.length ? p.images : [],
            verified: true,
            rating: 4.5
        };
        return SupaAPI.post('produits', payload);
    }

    /* =========================================================
       ===== COMMANDES (Supabase)
       ========================================================= */
    function saveOrderToSupabase(order) {
        if (!piUser) return Promise.reject(new Error('Non connecté'));
        var payload = {
            buyer_pi_uid: piUser.uid,
            seller_pi_uid: order.seller_pi_uid || null,
            items: order.items,
            total: order.total,
            status: order.status || 'pending',
            payment_id: order.payment_id || null,
            txid: order.txid || null
        };
        return SupaAPI.post('ordres', payload);
    }

    function loadOrdersFromSupabase() {
        if (!piUser) return Promise.resolve([]);
        var uid = encodeURIComponent(piUser.uid);
        return SupaAPI.get('ordres?or=(buyer_pi_uid.eq.' + uid + ',seller_pi_uid.eq.' + uid + ')&order=created_at.desc')
            .then(function(rows) { userOrders = rows || []; return userOrders; })
            .catch(function(e) { console.error('[Supa] loadOrders error', e); return []; });
    }

    /* =========================================================
       ===== HISTORIQUE (Supabase)
       ========================================================= */
    function saveHistoryToSupabase(entry) {
        if (!piUser) return Promise.reject(new Error('Non connecté'));
        var payload = {
            user_pi_uid: piUser.uid,
            type: entry.type,
            description: entry.description || '',
            amount: entry.amount || null,
            meta: entry.meta || null
        };
        return SupaAPI.post('histoire', payload);
    }

    function loadHistoryFromSupabase() {
        if (!piUser) return Promise.resolve([]);
        var uid = encodeURIComponent(piUser.uid);
        return SupaAPI.get('histoire?user_pi_uid=eq.' + uid + '&order=created_at.desc&limit=50')
            .then(function(rows) { userHistory = rows || []; return userHistory; })
            .catch(function(e) { console.error('[Supa] loadHistory error', e); return []; });
    }

    /* =========================================================
       ===== HELPERS ===========================================
       ========================================================= */
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
        toast.innerHTML = '<i class="fas ' + (iconMap[type] || 'fa-info-circle') + '"></i> ' + message;
        container.appendChild(toast);
        setTimeout(function() {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(20px)';
            setTimeout(function() { if (toast.parentNode) toast.remove(); }, 400);
        }, 4000);
    }

    function waitForPiSdk(maxMs) {
        maxMs = maxMs || 5000;
        return new Promise(function(resolve, reject) {
            var start = Date.now();
            function check() {
                if (typeof Pi !== 'undefined' && Pi.init && Pi.authenticate) { resolve(true); }
                else if (Date.now() - start > maxMs) { reject(new Error('SDK timeout')); }
                else { setTimeout(check, 150); }
            }
            check();
        });
    }

    function detectPiBrowser() {
        var uaIsPi = /PiBrowser/i.test(navigator.userAgent);
        var hasPi = typeof Pi !== 'undefined';
        inPiBrowser = uaIsPi || hasPi;
        return inPiBrowser;
    }

    function initPiSdk() {
        if (!inPiBrowser) return false;
        try { Pi.init({ version: "2.0", sandbox: false }); piReady = true; return true; }
        catch (e) { return false; }
    }

    function onIncompletePaymentFound(payment) { console.log('[Pi] Paiement incomplet :', payment); }

    function connectPi() {
        if (!inPiBrowser) { showToast('Ouvrez cette app dans Pi Browser', 'error'); return; }
        if (!piReady && !initPiSdk()) { showToast('Erreur initialisation Pi SDK', 'error'); return; }
        var btn = document.getElementById('piActionBtn');
        var actionText = document.getElementById('piActionText');
        if (btn) btn.disabled = true;
        if (actionText) actionText.textContent = 'Connexion...';
        showToast('Ouverture de Pi Network...', 'info');
        Pi.authenticate(['username', 'payments'], onIncompletePaymentFound)
            .then(function(auth) {
                piUser = { uid: auth.user.uid, username: auth.user.username };
                try { localStorage.setItem('pi_user', JSON.stringify(piUser)); } catch (e) {}
                return loadProfileFromSupabase();
            })
            .then(function() {
                return Promise.all([
                    loadProductsFromSupabase().then(function(list) {
                        if (list && list.length > 0) {
                            var localExtra = products.filter(function(p) { return !p._fromSupa; });
                            products = list.concat(localExtra);
                            renderProducts();
                            applyFilters();
                        }
                    }),
                    loadOrdersFromSupabase(),
                    loadHistoryFromSupabase()
                ]);
            })
            .then(function() {
                updatePiUI();
                closeAuthModal();
                showToast('Bienvenue ' + piUser.username + ' !', 'success');
                if (!isProfileComplete()) {
                    setTimeout(function() { showToast('Complétez votre profil pour continuer', 'info'); }, 1200);
                }
            })
            .catch(function(err) {
                var msg = (err && err.message) ? err.message : 'Connexion échouée';
                if (/denied|cancel/i.test(msg)) { showToast('Connexion annulée', 'info'); }
                else { showToast('Erreur : ' + msg, 'error'); }
            })
            .finally(function() { if (btn) btn.disabled = false; updatePiUI(); });
    }

    function disconnectPi() {
        piUser = null;
        userProfile = null;
        userOrders = [];
        userHistory = [];
        try { localStorage.removeItem('pi_user'); } catch (e) {}
        updatePiUI();
        showToast('Déconnecté de Pi', 'info');
    }

    function updatePiUI() {
        var avatar = document.getElementById('piAvatar');
        var accountCard = document.getElementById('piAccountCard');
        var accountUsername = document.getElementById('piAccountUsername');
        var accountSubtitle = document.getElementById('piAccountSubtitle');
        var actionBtn = document.getElementById('piActionBtn');
        var actionText = document.getElementById('piActionText');
        var hint = document.getElementById('piAccountHint');
        var publishAvatar = document.getElementById('publishAvatar');
        var publishName = document.getElementById('publishName');
        var publishHandle = document.getElementById('publishHandle');

        if (piUser) {
            var profileOk = isProfileComplete();
            if (accountCard) accountCard.classList.add('connected');
            if (avatar) avatar.textContent = piUser.username.substring(0, 2).toUpperCase();
            if (accountUsername) accountUsername.textContent = piUser.username;
            if (accountSubtitle) accountSubtitle.textContent = profileOk ? 'Profil complet' : 'Profil à compléter';
            if (actionBtn) { actionBtn.classList.add('disconnect'); actionBtn.disabled = false; }
            if (actionText) actionText.textContent = 'Déconnexion';
            if (hint) {
                if (profileOk) {
                    hint.innerHTML = '<i class="fas fa-shield-alt" style="color:var(--success);"></i> Connecté en tant que <strong>' + piUser.username + '</strong>';
                } else {
                    hint.innerHTML = '<i class="fas fa-exclamation-triangle" style="color:#e6b000;"></i> Complétez votre profil pour effectuer des transactions.';
                }
            }
            if (publishAvatar) publishAvatar.textContent = piUser.username.substring(0, 2).toUpperCase();
            if (publishName) publishName.textContent = piUser.username;
            if (publishHandle) publishHandle.textContent = '@' + piUser.username.toLowerCase();
        } else {
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
            if (stored) { piUser = JSON.parse(stored); }
        } catch (e) {}
    }

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
                '<span class="price">' + (item.price * item.qty).toFixed(2) + ' π</span></div>';
        }).join('');
        var total = cartItems.reduce(function(s, i) { return s + (i.price * i.qty); }, 0);
        amount.textContent = total.toFixed(2) + ' π';
        modal.classList.add('open');
    }
    function closePaymentModal() {
        var modal = document.getElementById('paymentModal');
        if (modal) modal.classList.remove('open');
    }

    function requireAuth(actionName) {
        if (!piUser) {
            var messages = {
                'panier': 'Connectez-vous avec Pi Network pour ajouter des produits au panier.',
                'commande': 'Connectez-vous avec Pi Network pour passer commande.',
                'publier': 'Connectez-vous avec Pi Network pour publier un produit.',
                'contacter': 'Connectez-vous avec Pi Network pour contacter un fournisseur.'
            };
            openAuthModal(messages[actionName] || 'Connectez-vous avec Pi Network pour continuer.');
            return false;
        }
        if (!isProfileComplete()) {
            showToast('Complétez votre profil avant de continuer', 'error');
            setTimeout(function() { openSideDrawer('mon-profil', 'Mon profil'); }, 300);
            return false;
        }
        return true;
    }

    function createPiPayment(amount, memo, metadata) {
        return new Promise(function(resolve, reject) {
            if (!piUser) { reject(new Error('Non connecté')); return; }
            if (typeof Pi === 'undefined' || !Pi.createPayment) { reject(new Error('SDK Pi introuvable')); return; }
            Pi.createPayment({ amount: amount, memo: memo, metadata: metadata }, {
                onReadyForServerApproval: function(paymentId) {
                    fetch('https://global-bulk-pi-backend.onrender.com/approve', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ paymentId: paymentId })
                    }).catch(function(e) { console.error(e); });
                },
                onReadyForServerCompletion: function(paymentId, txid) {
                    fetch('https://global-bulk-pi-backend.onrender.com/complete', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ paymentId: paymentId, txid: txid })
                    })
                    .then(function(r) { return r.json(); })
                    .then(function(data) { resolve({ paymentId: paymentId, txid: txid }); })
                    .catch(function(error) { reject(error); });
                },
                onCancel: function() { reject(new Error('Paiement annulé')); },
                onError: function(error) { reject(error); }
            });
        });
    }

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
            dotsContainer.querySelectorAll('.dot').forEach(function(dot, i) { dot.classList.toggle('active', i === currentIndex); });
        }
        document.getElementById('sliderPrev').addEventListener('click', function() { goToSlide(currentIndex - 1); });
        document.getElementById('sliderNext').addEventListener('click', function() { goToSlide(currentIndex + 1); });
        dotsContainer.addEventListener('click', function(e) {
            var dot = e.target.closest('.dot');
            if (dot) goToSlide(parseInt(dot.getAttribute('data-index')));
        });
        setInterval(function() { goToSlide(currentIndex + 1); }, 5000);
    }

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

    function renderProducts(list) {
        list = list || products;
        var grid = document.getElementById('productGrid');
        if (!grid) return;
        grid.innerHTML = list.map(function(p) {
            var verifiedBadge = p.verified ? '<span class="verified-badge"><i class="fas fa-check-circle"></i> Vérifié</span>' : '';
            var firstImage = p.images && p.images.length > 0 ? p.images[0] : '';
            var supplierLabel = p.ownerPiUid ? ('@' + p.ownerPiUid.substring(0, 8)) : p.supplier;
            return '<div class="card-product" onclick="showProductDetail(\'' + p.id + '\')">' +
                '<div class="image"><img src="' + firstImage + '" alt="' + p.name + '" loading="lazy" />' + verifiedBadge + '</div>' +
                '<div class="body">' +
                '<div class="title">' + p.name + '</div>' +
                '<div class="price">' + p.price + ' ' + p.unit + ' <small>/ unité</small></div>' +
                '<div class="meta">' +
                '<span><i class="fas fa-box"></i> Min: ' + p.minOrder + '</span>' +
                '<span><i class="fas fa-warehouse"></i> ' + formatNumber(p.stock) + '</span>' +
                '<span><i class="fas fa-star" style="color:var(--secondary);"></i> ' + p.rating + '</span>' +
                '</div>' +
                '<div style="font-size:12px;color:var(--text-muted);">' + supplierLabel + ' · ' + p.country + '</div>' +
                '<div class="actions">' +
                '<button class="btn btn-primary btn-sm" onclick="event.stopPropagation();addToCart(\'' + p.id + '\')"><i class="fas fa-cart-plus"></i></button>' +
                '<button class="btn btn-outline btn-sm" onclick="event.stopPropagation();showProductDetail(\'' + p.id + '\')">Voir</button>' +
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
                '<div class="info"><div class="name">' + s.name + (s.verified ? ' <span class="badge badge-verified" style="font-size:10px;"><i class="fas fa-check-circle"></i></span>' : '') + '</div>' +
                '<div class="detail"><span><i class="fas fa-map-marker-alt"></i> ' + s.country + '</span>' +
                '<span><i class="fas fa-star" style="color:var(--secondary);"></i> ' + s.rating + '</span></div></div></div>';
        }).join('');
    }

    function setupFilters() {
        var countrySelect = document.getElementById('filterCountry');
        if (!countrySelect) return;
        countrySelect.innerHTML = '<option value="">🌍 Tous les pays</option>';
        allCountries.forEach(function(c) {
            countrySelect.innerHTML += '<option value="' + c.name + '">' + c.flag + ' ' + c.name + '</option>';
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
            return p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || String(p.supplier || '').toLowerCase().includes(q);
        });
        if (filtered.length === 0) showToast('Aucun résultat', 'error');
        else { renderProducts(filtered); showToast(filtered.length + ' résultat(s)', 'success'); }
        document.getElementById('searchDropdown').classList.remove('open');
    }

    function showMainContent() {
        document.getElementById('mainContent').style.display = 'block';
        document.getElementById('productDetail').style.display = 'none';
        document.getElementById('publishSection').style.display = 'none';
        document.getElementById('profileSection').style.display = 'none';
    }
    function hideMainContent() { document.getElementById('mainContent').style.display = 'none'; }

    window.showProductDetail = function(id) {
        var p = products.find(function(x) { return String(x.id) === String(id); });
        if (!p) return;
        hideMainContent();
        document.getElementById('productDetail').style.display = 'block';
        document.getElementById('productDetailTitle').textContent = p.name;
        var content = document.getElementById('productDetailContent');
        var images = p.images && p.images.length > 0 ? p.images : [''];
        content.innerHTML =
            '<div class="product-detail-grid">' +
            '<div class="gallery"><div class="main-image"><img src="' + images[0] + '" /></div></div>' +
            '<div class="info"><h1>' + p.name + '</h1>' +
            '<div style="margin-bottom:10px;"><span class="badge badge-verified"><i class="fas fa-check-circle"></i> ' + (p.verified ? 'Vérifié' : 'Non vérifié') + '</span></div>' +
            '<div style="font-size:13px;color:var(--text-muted);margin-bottom:14px;"><i class="fas fa-building"></i> ' + (p.ownerPiUid || p.supplier) + ' · ' + p.country + '</div>' +
            '<div class="price-box"><div><span style="font-size:13px;color:var(--text-muted);">Prix de gros</span><br><span style="font-size:28px;font-weight:700;color:var(--primary);">' + p.price + ' ' + p.unit + '</span></div>' +
            '<div><span style="font-size:13px;color:var(--text-muted);">Qté min.</span><br><span style="font-size:20px;font-weight:600;">' + p.minOrder + ' unités</span></div></div>' +
            '<div class="volume-pricing">' +
            '<div class="tier"><div style="font-size:12px;color:var(--text-muted);">' + p.minOrder + '+</div><div class="price">' + p.price + ' Pi</div></div>' +
            '<div class="tier"><div style="font-size:12px;color:var(--text-muted);">' + (p.minOrder * 5) + '+</div><div class="price">' + (p.price * 0.9).toFixed(1) + ' Pi</div></div>' +
            '<div class="tier"><div style="font-size:12px;color:var(--text-muted);">' + (p.minOrder * 10) + '+</div><div class="price">' + (p.price * 0.8).toFixed(1) + ' Pi</div></div></div>' +
            '<div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:16px;"><button class="btn btn-primary" onclick="addToCart(\'' + p.id + '\')"><i class="fas fa-cart-plus"></i> Ajouter au panier</button></div></div></div>';
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
        document.body.classList.add('drawer-open');
        if (tabId === 'livre-blanc') { initDocDrawerEvents(); }
        if (tabId === 'mon-profil') { initProfileFormEvents(); }
    }
    function closeSideDrawer() {
        var drawer = document.getElementById('sideDrawer');
        var overlay = document.getElementById('sideDrawerOverlay');
        if (drawer) drawer.classList.remove('open');
        if (overlay) overlay.classList.remove('open');
        document.body.style.overflow = '';
        document.body.classList.remove('drawer-open');
    }

    function initDocDrawerEvents() {
        var items = document.querySelectorAll('#sideDrawerContent .doc-item');
        for (var i = 0; i < items.length; i++) {
            (function(item) {
                item.addEventListener('click', function() {
                    var url = item.getAttribute('data-url');
                    var label = item.getAttribute('data-label');
                    if (url) {
                        window.location.href = url;
                    } else {
                        showToast('« ' + label + ' » sera bientôt disponible', 'info');
                    }
                });
            })(items[i]);
        }
    }

    function renderProfileForm() {
        if (!piUser) {
            return '<div class="empty-state"><i class="fas fa-user-slash"></i><p>Connectez-vous avec Pi Network pour compléter votre profil.</p></div>';
        }
        var p = userProfile || {};
        var complete = isProfileComplete();
        var statusHtml = complete
            ? '<div class="profile-status-ok"><i class="fas fa-check-circle"></i> Profil complété</div>'
            : '<div class="profile-status-warn"><i class="fas fa-exclamation-triangle"></i> Profil à compléter</div>';

        function esc(v) {
            return String(v || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        }

        return '<h3><i class="fas fa-id-card"></i> Mon profil</h3>' +
            '<p style="color:var(--text-muted);font-size:13px;margin-bottom:14px;line-height:1.5;">Ces informations sont obligatoires avant toute opération d\'achat ou de vente.</p>' +
            statusHtml +
            '<form id="profileForm" class="profile-form" novalidate>' +
                '<div class="form-group"><label>Nom <span class="req">*</span></label><input type="text" id="pfNom" value="' + esc(p.nom) + '" placeholder="Votre nom" required /></div>' +
                '<div class="form-group"><label>Post-nom <span class="req">*</span></label><input type="text" id="pfPostNom" value="' + esc(p.post_nom) + '" placeholder="Votre post-nom" required /></div>' +
                '<div class="form-group"><label>Email <span class="req">*</span></label><input type="email" id="pfEmail" value="' + esc(p.email) + '" placeholder="exemple@email.com" required /></div>' +
                '<div class="form-group"><label>Numéro de téléphone <span class="req">*</span></label><input type="tel" id="pfPhone" value="' + esc(p.phone) + '" placeholder="+243 ..." required /></div>' +
                '<div class="form-group"><label>Adresse de résidence <span class="req">*</span></label><textarea id="pfAddress" rows="3" placeholder="Ville, quartier, rue, n°" required>' + esc(p.address) + '</textarea></div>' +
                '<div class="profile-note"><i class="fas fa-info-circle"></i><span>Veuillez mettre les <strong>vraies informations</strong>, car celles-ci serviront à l\'<strong>expédition</strong> de vos commandes.</span></div>' +
                '<button type="submit" class="btn btn-primary btn-block publish-submit" style="margin-top:16px;"><i class="fas fa-save"></i> Enregistrer mon profil</button>' +
            '</form>';
    }

    function initProfileFormEvents() {
        var form = document.getElementById('profileForm');
        if (!form) return;
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (!piUser) { showToast('Connectez-vous avec Pi Network', 'error'); return; }

            var nom = document.getElementById('pfNom').value.trim();
            var postNom = document.getElementById('pfPostNom').value.trim();
            var email = document.getElementById('pfEmail').value.trim();
            var phone = document.getElementById('pfPhone').value.trim();
            var address = document.getElementById('pfAddress').value.trim();

            if (!nom || !postNom || !email || !phone || !address) {
                showToast('Veuillez remplir tous les champs', 'error');
                return;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                showToast('Email invalide', 'error');
                return;
            }

            var btn = form.querySelector('button[type="submit"]');
            if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enregistrement...'; }

            saveProfileToSupabase({ nom: nom, postNom: postNom, email: email, phone: phone, address: address })
                .then(function() {
                    showToast('Profil enregistré avec succès', 'success');
                    updatePiUI();
                    var content = document.getElementById('sideDrawerContent');
                    if (content) {
                        content.innerHTML = renderProfileForm();
                        initProfileFormEvents();
                    }
                })
                .catch(function(err) {
                    console.error(err);
                    showToast('Erreur : impossible d\'enregistrer le profil', 'error');
                })
                .finally(function() {
                    if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-save"></i> Enregistrer mon profil'; }
                });
        });
    }

    function renderSideDrawerContent(tabId) {
        function infoItem(icon, label, value) {
            return '<div class="info-item"><i class="fas ' + icon + '"></i><span class="label">' + label + '</span><span class="value">' + value + '</span></div>';
        }
        switch(tabId) {
            case 'mon-profil':
                return renderProfileForm();
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
                return '<h3><i class="fas fa-store"></i> Livre blanc</h3>' +
                    '<p style="color:var(--text-muted);font-size:13.5px;margin-bottom:18px;line-height:1.5;">Découvrez Global Bulk comme un véritable centre commercial B2B international : organisation, fonctionnement, services et perspectives.</p>' +
                    '<button type="button" class="doc-item" data-url="whitepaper.html" data-label="Livre blanc complet">' +
                        '<i class="fas fa-file-pdf"></i>' +
                        '<span class="label">Livre blanc 2026</span>' +
                        '<span class="value">Ouvrir</span>' +
                        '<i class="fas fa-chevron-right doc-arrow"></i>' +
                    '</button>' +
                    '<div style="margin-top:20px;padding:16px;background:var(--gray-light);border-radius:12px;">' +
                        '<div style="font-size:12px;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Document officiel</div>' +
                        '<div style="font-size:14px;font-weight:600;color:var(--primary);">Le centre commercial B2B mondial, expliqué</div>' +
                        '<div style="font-size:12.5px;color:var(--text-muted);margin-top:4px;line-height:1.5;">Édition 2026 — 12 chapitres — lecture ~18 min</div>' +
                    '</div>';
            case 'mes-produits':
                if (!piUser) return '<div class="empty-state"><i class="fas fa-box-open"></i><p>Connectez-vous pour voir vos produits.</p></div>';
                var myProducts = products.filter(function(p) {
                    return p.ownerPiUid === piUser.uid || p.supplier === piUser.username;
                });
                var html = '<h3><i class="fas fa-boxes"></i> Mes produits</h3>';
                if (myProducts.length === 0) {
                    html += '<div class="empty-state" style="padding:20px 0;"><i class="fas fa-box-open" style="font-size:36px;margin-bottom:10px;"></i><p style="font-size:14px;">Vous n\'avez publié aucun produit pour le moment.</p></div>';
                } else {
                    myProducts.forEach(function(p) {
                        html += infoItem('fa-box', p.name, p.price + ' ' + p.unit + ' <br><small style="font-weight:400;color:var(--text-muted);">Stock: ' + p.stock + '</small>');
                    });
                }
                return html;
            case 'historique':
                if (!piUser) return '<div class="empty-state"><i class="fas fa-history"></i><p>Connectez-vous pour voir votre historique.</p></div>';
                if (userHistory.length === 0) {
                    return '<h3><i class="fas fa-history"></i> Historique</h3>' +
                        '<div class="empty-state" style="padding:20px 0;"><i class="fas fa-receipt" style="font-size:36px;margin-bottom:10px;"></i><p style="font-size:14px;">Aucune opération enregistrée.</p></div>';
                }
                var hHtml = '<h3><i class="fas fa-history"></i> Historique</h3>';
                userHistory.forEach(function(h) {
                    var d = new Date(h.created_at).toLocaleDateString('fr-FR');
                    var amount = h.amount ? h.amount + ' π' : '';
                    hHtml += infoItem('fa-receipt', d, h.description + (amount ? ' <br><small>' + amount + '</small>' : ''));
                });
                return hHtml;
            case 'achats-ventes':
                if (!piUser) return '<div class="empty-state"><i class="fas fa-chart-line"></i><p>Connectez-vous pour voir vos statistiques.</p></div>';
                var achats = userOrders.filter(function(o) { return o.buyer_pi_uid === piUser.uid; }).length;
                var ventes = userOrders.filter(function(o) { return o.seller_pi_uid === piUser.uid; }).length;
                return '<h3><i class="fas fa-chart-line"></i> Achats & Ventes</h3>' +
                    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:16px;">' +
                    '<div style="background:var(--gray-light);padding:20px;text-align:center;border-radius:12px;"><div style="font-size:28px;font-weight:800;color:var(--primary);">' + achats + '</div><div style="font-size:13px;color:var(--text-muted);">Achats</div></div>' +
                    '<div style="background:var(--gray-light);padding:20px;text-align:center;border-radius:12px;"><div style="font-size:28px;font-weight:800;color:var(--primary);">' + ventes + '</div><div style="font-size:13px;color:var(--text-muted);">Ventes</div></div></div>';
            default:
                return '<p>Sélectionnez une option.</p>';
        }
    }

    document.querySelectorAll('.menu-item').forEach(function(item) {
        item.addEventListener('click', function() {
            var tab = this.getAttribute('data-tab');
            var label = this.querySelector('.menu-label').textContent;
            if (tab === 'faq') { window.location.href = 'faq.html'; return; }
            openSideDrawer(tab, label);
        });
    });

    document.getElementById('sideDrawerClose').addEventListener('click', closeSideDrawer);
    document.getElementById('sideDrawerBack').addEventListener('click', closeSideDrawer);
    document.getElementById('sideDrawerOverlay').addEventListener('click', closeSideDrawer);

    var btnPiConnect = document.getElementById('piActionBtn');
    if (btnPiConnect) {
        btnPiConnect.addEventListener('click', function(e) {
            e.preventDefault();
            if (piUser) { disconnectPi(); } else { connectPi(); }
        });
    }

    document.getElementById('authModalConnectBtn').addEventListener('click', function() {
        closeAuthModal();
        window.openProfile();
        setTimeout(function() {
            var card = document.getElementById('piAccountCard');
            if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    });
    document.getElementById('authModalCancelBtn').addEventListener('click', closeAuthModal);
    document.getElementById('paymentCancelBtn').addEventListener('click', closePaymentModal);
    document.getElementById('paymentConfirmBtn').addEventListener('click', function() {
        closePaymentModal();
        executePayment();
    });

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
            return '<div class="preview-thumb"><img src="' + img + '" /><button type="button" class="remove-btn" onclick="removeImage(' + index + ')"><i class="fas fa-times"></i></button></div>';
        }).join('');
    }
    window.removeImage = function(index) {
        uploadedImages.splice(index, 1);
        renderUploadPreview();
    };

    window.addToCart = function(id) {
        if (!requireAuth('panier')) return;
        var p = products.find(function(x) { return String(x.id) === String(id); });
        if (!p) return;
        var existing = cartItems.find(function(item) { return String(item.id) === String(id); });
        if (existing) existing.qty += p.minOrder;
        else cartItems.push({ id: p.id, name: p.name, qty: p.minOrder, price: p.price, image: p.images ? p.images[0] : '', ownerPiUid: p.ownerPiUid || null });
        updateCartBadge();
        showToast(p.name + ' ajouté au panier', 'success');
        if (isCartOpen) renderCartItems();
    };
    window.removeFromCart = function(id) {
        cartItems = cartItems.filter(function(item) { return String(item.id) !== String(id); });
        updateCartBadge();
        renderCartItems();
    };
    window.updateQty = function(id, delta) {
        var item = cartItems.find(function(i) { return String(i.id) === String(id); });
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
            body.innerHTML = '<div class="cart-empty"><i class="fas fa-shopping-bag"></i><p>Panier vide</p></div>';
            footer.style.display = 'none';
            return;
        }
        body.innerHTML = cartItems.map(function(item) {
            return '<div class="cart-item"><div class="item-image"><img src="' + (item.image || '') + '" /></div>' +
                '<div class="item-info"><div class="name">' + item.name + '</div>' +
                '<div class="price">' + (item.price * item.qty).toFixed(2) + ' π</div>' +
                '<div class="item-qty"><button onclick="updateQty(\'' + item.id + '\',-1)">-</button><span>' + item.qty + '</span><button onclick="updateQty(\'' + item.id + '\',1)">+</button></div></div>' +
                '<button class="btn btn-sm btn-danger" onclick="removeFromCart(\'' + item.id + '\')"><i class="fas fa-trash"></i></button></div>';
        }).join('');
        footer.style.display = 'block';
        var total = cartItems.reduce(function(s, i) { return s + (i.price * i.qty); }, 0);
        totalEl.textContent = total.toFixed(2) + ' π';
    }
    function updateCartBadge() {
        var total = cartItems.reduce(function(s, i) { return s + i.qty; }, 0);
        document.querySelectorAll('.badge-count').forEach(function(el) {
            var parent = el.closest('.icon-btn');
            if (parent && parent.querySelector('.fa-cart-shopping')) {
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
    document.getElementById('cartOverlay').addEventListener('click', function(e) { if (e.target === this) toggleCart(); });

    document.getElementById('checkoutBtn').addEventListener('click', function() {
        if (!requireAuth('commande')) return;
        if (cartItems.length === 0) { showToast('Panier vide', 'error'); return; }
        toggleCart();
        setTimeout(openPaymentModal, 300);
    });

    function executePayment() {
        var total = cartItems.reduce(function(s, i) { return s + (i.price * i.qty); }, 0);
        var totalFixed = parseFloat(total.toFixed(2));
        var itemsSnapshot = cartItems.slice();
        showToast('Traitement du paiement...', 'info');
        createPiPayment(totalFixed, 'Global Bulk - ' + cartItems.length + ' article(s)', {
            items: cartItems.map(function(i) { return { id: i.id, name: i.name, qty: i.qty, price: i.price }; }),
            total: totalFixed, username: piUser.username, timestamp: Date.now()
        })
        .then(function(result) {
            var sellerUid = itemsSnapshot[0] && itemsSnapshot[0].ownerPiUid ? itemsSnapshot[0].ownerPiUid : null;
            var orderPayload = {
                seller_pi_uid: sellerUid,
                items: itemsSnapshot.map(function(i) { return { id: i.id, name: i.name, qty: i.qty, price: i.price }; }),
                total: totalFixed,
                status: 'paid',
                payment_id: result.paymentId,
                txid: result.txid
            };
            return saveOrderToSupabase(orderPayload).then(function() {
                return saveHistoryToSupabase({
                    type: 'achat',
                    description: 'Achat de ' + itemsSnapshot.length + ' article(s)',
                    amount: totalFixed,
                    meta: { payment_id: result.paymentId, txid: result.txid }
                });
            }).then(function() {
                return loadOrdersFromSupabase();
            }).then(function() {
                return loadHistoryFromSupabase();
            }).then(function() {
                showToast('✅ Paiement réussi et enregistré !', 'success');
                cartItems = [];
                updateCartBadge();
                renderCartItems();
            });
        })
        .catch(function(err) {
            if (/annulé/i.test(err.message)) { showToast('Paiement annulé', 'info'); }
            else { showToast('Erreur : ' + (err.message || 'paiement échoué'), 'error'); }
        });
    }

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

    document.querySelectorAll('.bottom-nav .nav-item').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var page = this.getAttribute('data-page');
            if (page === 'profile') { window.openProfile(); return; }
            if (page === 'publish') { window.openPublish(); return; }
            showMainContent();
            document.querySelectorAll('.bottom-nav .nav-item').forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');
            var sections = { home: ['productsSection', 'suppliersSection'], market: ['productsSection'], suppliers: ['suppliersSection'] };
            document.querySelectorAll('.section:not(.page-secondary)').forEach(function(s) { s.style.display = 'none'; });
            var ids = sections[page] || ['productsSection'];
            ids.forEach(function(id) {
                var el = document.getElementById(id);
                if (el) el.style.display = 'block';
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    document.getElementById('footerPublish').addEventListener('click', function(e) { e.preventDefault(); window.openPublish(); });

    document.getElementById('publishForm').addEventListener('submit', function(e) {
        e.preventDefault();
        if (!requireAuth('publier')) return;

        var name = document.getElementById('pName').value.trim();
        var description = document.getElementById('pDescription').value.trim();
        var category = document.getElementById('pCategory').value;
        var price = parseFloat(document.getElementById('pPrice').value);
        var minOrder = parseInt(document.getElementById('pMinOrder').value);
        var stock = parseInt(document.getElementById('pStock').value);
        var supplier = document.getElementById('pSupplier').value.trim();
        var country = document.getElementById('pCountry').value;

        if (!name || !description || !category || isNaN(price) || isNaN(minOrder) || isNaN(stock) || !supplier || !country) {
            showToast('Veuillez remplir tous les champs obligatoires', 'error');
            return;
        }

        var images = uploadedImages.length > 0 ? uploadedImages : [''];

        var newProduct = {
            name: name,
            description: description,
            price: price,
            unit: document.getElementById('pUnit').value,
            minOrder: minOrder,
            stock: stock,
            country: country,
            category: category,
            images: images,
            supplier: piUser.username,
            ownerPiUid: piUser.uid,
            verified: true,
            rating: 4.5
        };

        var submitBtn = this.querySelector('button[type="submit"]');
        if (submitBtn) { submitBtn.disabled = true; submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Publication...'; }

        saveProductToSupabase(newProduct)
            .then(function(rows) {
                var saved = rows && rows[0] ? rows[0] : null;
                var localProduct = {
                    id: saved ? saved.id : products.length + 1,
                    name: name,
                    description: description,
                    price: price,
                    unit: newProduct.unit,
                    minOrder: minOrder,
                    stock: stock,
                    supplier: piUser.username,
                    ownerPiUid: piUser.uid,
                    country: country,
                    verified: true,
                    rating: 4.5,
                    category: category,
                    images: images,
                    _fromSupa: true
                };
                products.unshift(localProduct);
                renderProducts();
                applyFilters();
                return saveHistoryToSupabase({
                    type: 'publication',
                    description: 'Publication : ' + name,
                    amount: null,
                    meta: { product_id: localProduct.id }
                });
            })
            .then(function() { return loadHistoryFromSupabase(); })
            .then(function() {
                showToast('✅ Produit publié et enregistré !', 'success');
                uploadedImages = [];
                document.getElementById('uploadPreview').innerHTML = '';
                document.getElementById('publishForm').reset();
                window.closePublish();
            })
            .catch(function(err) {
                console.error(err);
                showToast('Erreur : publication non enregistrée', 'error');
            })
            .finally(function() {
                if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = '<i class="fas fa-rocket"></i> Publier mon produit'; }
            });
    });

    function populateFormSelects() {
        var pCategory = document.getElementById('pCategory');
        if (pCategory) {
            pCategory.innerHTML = '<option value="">Sélectionner une catégorie</option>';
            categories.forEach(function(c) {
                pCategory.innerHTML += '<option value="' + c.name + '">' + c.name + '</option>';
            });
        }
        var pCountry = document.getElementById('pCountry');
        if (pCountry) {
            pCountry.innerHTML = '<option value="">Sélectionner un pays</option>';
            allCountries.forEach(function(c) {
                pCountry.innerHTML += '<option value="' + c.name + '">' + c.flag + ' ' + c.name + '</option>';
            });
        }
    }

    console.log('[App] 🚀 Démarrage');
    detectPiBrowser();
    loadPiSession();

    waitForPiSdk(5000)
        .then(function() { initPiSdk(); updatePiUI(); })
        .catch(function() { inPiBrowser = false; updatePiUI(); });

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

        // Restauration automatique de la session précédente (si piUser en cache)
        if (piUser) {
            loadProfileFromSupabase()
                .then(function() {
                    return Promise.all([
                        loadProductsFromSupabase().then(function(list) {
                            if (list && list.length > 0) {
                                var localExtra = products.filter(function(p) { return !p._fromSupa; });
                                products = list.concat(localExtra);
                                renderProducts();
                                applyFilters();
                            }
                        }),
                        loadOrdersFromSupabase(),
                        loadHistoryFromSupabase()
                    ]);
                })
                .then(function() {
                    updatePiUI();
                    if (isProfileComplete()) {
                        showToast('Bon retour ' + piUser.username + ' !', 'success');
                    } else {
                        showToast('Complétez votre profil dans Mon profil', 'info');
                    }
                })
                .catch(function(e) { console.error('[Init] restore error', e); });
        } else {
            setTimeout(function() {
                if (inPiBrowser) { showToast('Allez dans Profil pour vous connecter', 'info'); }
                else { showToast('Ouvrez dans Pi Browser pour Pi', 'info'); }
            }, 800);
        }
    });

})();
