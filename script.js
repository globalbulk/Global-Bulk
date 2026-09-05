(function() {
    'use strict';

    // ===== DATA =====
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
        { icon: 'fa-pencil-alt', name: 'Fournitures', count: 470 }
    ];

    var products = [{
        id: 1,
        name: 'Écouteurs Bluetooth Pro',
        price: 5,
        unit: 'Pi',
        minOrder: 100,
        stock: 5000,
        supplier: 'TechImport SARL',
        country: 'Chine',
        verified: true,
        rating: 4.8,
        icon: 'fa-headphones',
        category: 'Électronique'
    }, {
        id: 2,
        name: 'Smartphone X200',
        price: 120,
        unit: 'Pi',
        minOrder: 10,
        stock: 850,
        supplier: 'MobileTech GmbH',
        country: 'Allemagne',
        verified: true,
        rating: 4.9,
        icon: 'fa-mobile-alt',
        category: 'Électronique'
    }, {
        id: 3,
        name: 'T-shirt en coton bio',
        price: 2.5,
        unit: 'Pi',
        minOrder: 200,
        stock: 12000,
        supplier: 'EcoWear SARL',
        country: 'France',
        verified: true,
        rating: 4.7,
        icon: 'fa-tshirt',
        category: 'Mode'
    }, {
        id: 4,
        name: 'Chaussures de sport',
        price: 12,
        unit: 'Pi',
        minOrder: 50,
        stock: 320,
        supplier: 'SportFoot Inc',
        country: 'USA',
        verified: false,
        rating: 4.2,
        icon: 'fa-shoe-prints',
        category: 'Chaussures'
    }, {
        id: 5,
        name: 'Montre connectée',
        price: 35,
        unit: 'Pi',
        minOrder: 20,
        stock: 1500,
        supplier: 'TechImport SARL',
        country: 'Chine',
        verified: true,
        rating: 4.6,
        icon: 'fa-clock',
        category: 'Électronique'
    }, {
        id: 6,
        name: 'Lampes solaires 10W',
        price: 4.5,
        unit: 'Pi',
        minOrder: 100,
        stock: 3000,
        supplier: 'GreenEnergy Ltd',
        country: 'Allemagne',
        verified: true,
        rating: 4.5,
        icon: 'fa-lightbulb',
        category: 'Énergie'
    }, {
        id: 7,
        name: 'Meubles de salon (set)',
        price: 180,
        unit: 'Pi',
        minOrder: 5,
        stock: 120,
        supplier: 'HomeFurnish SARL',
        country: 'France',
        verified: false,
        rating: 4.0,
        icon: 'fa-couch',
        category: 'Maison'
    }, {
        id: 8,
        name: 'Café Arabica 1kg',
        price: 3.2,
        unit: 'Pi',
        minOrder: 500,
        stock: 8000,
        supplier: 'AgriExport Co',
        country: 'Colombie',
        verified: true,
        rating: 4.9,
        icon: 'fa-mug-hot',
        category: 'Alimentation'
    }];

    var suppliers = [
        { name: 'TechImport SARL', country: 'Chine', verified: true, products: 340, years: 8, rating: 4.8,
            responseRate: 96, categories: 'Électronique, Énergie' },
        { name: 'MobileTech GmbH', country: 'Allemagne', verified: true, products: 210, years: 12, rating: 4.9,
            responseRate: 98, categories: 'Électronique, Automobile' },
        { name: 'EcoWear SARL', country: 'France', verified: true, products: 180, years: 5, rating: 4.7,
            responseRate: 92, categories: 'Mode, Maison' },
        { name: 'GreenEnergy Ltd', country: 'Allemagne', verified: true, products: 90, years: 7, rating: 4.5,
            responseRate: 88, categories: 'Énergie, Équipements' },
        { name: 'SportFoot Inc', country: 'USA', verified: false, products: 65, years: 3, rating: 4.2,
            responseRate: 75, categories: 'Chaussures, Mode' }
    ];

    var cartItems = [];

    // ===== UTILITIES =====
    function formatNumber(n) {
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    function showToast(message, type) {
        type = type || 'info';
        var container = document.getElementById('toastContainer');
        var toast = document.createElement('div');
        toast.className = 'toast ' + type;
        var iconMap = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle' };
        var icon = iconMap[type] || 'fa-info-circle';
        toast.innerHTML = '<i class="fas ' + icon + '"></i> ' + message;
        container.appendChild(toast);
        setTimeout(function() {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(20px)';
            setTimeout(function() { toast.remove(); }, 400);
        }, 3500);
    }

    // ===== RENDER CATEGORIES =====
    function renderCategories() {
        var grid = document.getElementById('categoryGrid');
        grid.innerHTML = categories.map(function(c) {
            return '<div class="category-item">' +
                '<i class="fas ' + c.icon + ' icon"></i>' +
                '<div class="name">' + c.name + '</div>' +
                '<div class="count">' + formatNumber(c.count) + '</div>' +
                '</div>';
        }).join('');
    }

    // ===== RENDER PRODUCTS =====
    function renderProducts(list) {
        list = list || products;
        var grid = document.getElementById('productGrid');
        grid.innerHTML = list.map(function(p) {
            var verifiedBadge = p.verified ?
                '<span class="verified-badge"><i class="fas fa-check-circle"></i> Vérifié</span>' :
                '';
            return '<div class="card-product" onclick="window.showProductDetail(' + p.id + ')">' +
                '<div class="image">' +
                '<i class="fas ' + p.icon + '"></i>' +
                verifiedBadge +
                '</div>' +
                '<div class="body">' +
                '<div class="title">' + p.name + '</div>' +
                '<div class="price">' + p.price + ' ' + p.unit + ' <small>/ unité</small></div>' +
                '<div class="meta">' +
                '<span><i class="fas fa-box"></i> Min: ' + p.minOrder + '</span>' +
                '<span><i class="fas fa-warehouse"></i> ' + formatNumber(p.stock) + '</span>' +
                '<span><i class="fas fa-star" style="color:var(--secondary);"></i> ' + p.rating +
                '</span>' +
                '</div>' +
                '<div style="font-size:13px;color:var(--text-muted);">' + p.supplier + ' · ' + p.country +
                '</div>' +
                '<div class="actions">' +
                '<button class="btn btn-primary btn-sm" onclick="event.stopPropagation();window.addToCart(' +
                p.id + ')"><i class="fas fa-cart-plus"></i></button>' +
                '<button class="btn btn-outline btn-sm" onclick="event.stopPropagation();window.showProductDetail(' +
                p.id + ')">Voir</button>' +
                '</div>' +
                '</div>' +
                '</div>';
        }).join('');
    }

    // ===== RENDER SUPPLIERS =====
    function renderSuppliers() {
        var grid = document.getElementById('supplierGrid');
        grid.innerHTML = suppliers.map(function(s) {
            var verifiedBadge = s.verified ?
                '<span class="badge badge-verified"><i class="fas fa-check-circle"></i> Vérifié</span>' :
                '';
            return '<div class="card-supplier">' +
                '<div class="avatar"><i class="fas fa-building"></i></div>' +
                '<div class="info">' +
                '<div class="name">' + s.name + ' ' + verifiedBadge + '</div>' +
                '<div class="detail">' +
                '<span><i class="fas fa-map-marker-alt"></i> ' + s.country + '</span>' +
                '<span><i class="fas fa-box"></i> ' + s.products + ' produits</span>' +
                '<span><i class="fas fa-star" style="color:var(--secondary);"></i> ' + s.rating +
                '</span>' +
                '<span><i class="fas fa-clock"></i> ' + s.responseRate + '%</span>' +
                '</div>' +
                '</div>' +
                '</div>';
        }).join('');
    }

    // ===== PRODUCT DETAIL =====
    window.showProductDetail = function(id) {
        var p = products.find(function(x) { return x.id === id; });
        if (!p) return;
        document.getElementById('productsSection').style.display = 'none';
        document.getElementById('suppliersSection').style.display = 'none';
        document.getElementById('categoriesSection').style.display = 'none';
        document.getElementById('productDetail').style.display = 'block';

        var content = document.getElementById('productDetailContent');
        content.innerHTML =
            '<div class="product-detail-grid">' +
            '<div class="gallery"><i class="fas ' + p.icon + '"></i></div>' +
            '<div class="info">' +
            '<h1>' + p.name + '</h1>' +
            '<div class="badges">' +
            '<span class="badge badge-verified"><i class="fas fa-check-circle"></i> ' + (p.verified ?
                'Vérifié' : 'Non vérifié') + '</span>' +
            '<span class="badge"><i class="fas fa-star" style="color:var(--secondary);"></i> ' + p.rating +
            '</span>' +
            '<span class="badge"><i class="fas fa-box"></i> ' + formatNumber(p.stock) +
            ' en stock</span>' +
            '</div>' +
            '<div class="supplier-info"><i class="fas fa-building"></i> ' + p.supplier + ' · ' + p.country +
            '</div>' +
            '<div class="price-box">' +
            '<div><span style="font-size:13px;color:var(--text-muted);">Prix de gros</span><br><span style="font-size:28px;font-weight:700;color:var(--primary);">' +
            p.price + ' ' + p.unit + '</span> <span style="font-size:16px;font-weight:400;color:var(--text-muted);">/ unité</span></div>' +
            '<div><span style="font-size:13px;color:var(--text-muted);">Quantité min.</span><br><span style="font-size:20px;font-weight:600;">' +
            p.minOrder + ' unités</span></div>' +
            '</div>' +
            '<div><strong>Tarification par volume</strong></div>' +
            '<div class="volume-pricing">' +
            '<div class="tier"><div class="qty">' + p.minOrder + '–' + (p.minOrder * 5 - 1) +
            '</div><div class="price">' + p.price + ' Pi</div></div>' +
            '<div class="tier"><div class="qty">' + (p.minOrder * 5) + '–' + (p.minOrder * 10 - 1) +
            '</div><div class="price">' + (p.price * 0.9).toFixed(1) + ' Pi</div></div>' +
            '<div class="tier"><div class="qty">' + (p.minOrder * 10) + '+</div><div class="price">' +
            (p.price * 0.8).toFixed(1) + ' Pi</div></div>' +
            '</div>' +
            '<p style="color:var(--text-muted);font-size:14px;line-height:1.6;">Produit de haute qualité, idéal pour le commerce de gros. Livraison internationale disponible.</p>' +
            '<div class="actions">' +
            '<button class="btn btn-primary" onclick="window.addToCart(' + p.id +
            ')"><i class="fas fa-cart-plus"></i> Ajouter au panier</button>' +
            '<button class="btn btn-outline"><i class="fas fa-comment"></i> Contacter</button>' +
            '</div>' +
            '<div style="margin-top:16px;padding:12px 16px;background:#f0f7ff;border-radius:var(--radius-sm);font-size:13px;color:var(--text-muted);"><i class="fas fa-truck"></i> Livraison estimée : 5-10 jours · Suivi inclus</div>' +
            '</div>' +
            '</div>';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.closeProductDetail = function() {
        document.getElementById('productDetail').style.display = 'none';
        document.getElementById('productsSection').style.display = 'block';
        document.getElementById('suppliersSection').style.display = 'block';
        document.getElementById('categoriesSection').style.display = 'block';
    };

    // ===== CART =====
    window.addToCart = function(id) {
        var p = products.find(function(x) { return x.id === id; });
        if (!p) return;
        var existing = cartItems.find(function(item) { return item.id === id; });
        if (existing) {
            existing.qty += p.minOrder;
        } else {
            cartItems.push({ id: p.id, name: p.name, qty: p.minOrder, price: p.price });
        }
        updateCartBadge();
        showToast(p.name + ' ajouté au panier', 'success');
    };

    function updateCartBadge() {
        var total = cartItems.reduce(function(s, i) { return s + i.qty; }, 0);
        document.querySelectorAll('.badge-count').forEach(function(el) {
            var parent = el.closest('.icon-btn, .nav-item');
            if (parent && (parent.querySelector('.fa-shopping-cart') || parent.querySelector(
                    '.fa-cart-plus'))) {
                el.textContent = total;
                el.style.display = total > 0 ? 'flex' : 'none';
            }
        });
    }

    // ===== STATS ANIMATION =====
    function animateStats() {
        document.querySelectorAll('.stat-item .number').forEach(function(el) {
            var target = parseInt(el.getAttribute('data-count'));
            var current = 0;
            var step = Math.ceil(target / 60);
            var interval = setInterval(function() {
                current += step;
                if (current >= target) { current = target;
                    clearInterval(interval); }
                el.textContent = formatNumber(current);
            }, 25);
        });
    }

    // ===== FILTERS =====
    function applyFilters() {
        var category = document.getElementById('filterCategory').value;
        var country = document.getElementById('filterCountry').value;
        var sort = document.getElementById('filterSort').value;
        var verified = document.getElementById('filterVerified').checked;

        var filtered = products.slice();
        if (category) filtered = filtered.filter(function(p) { return p.category === category; });
        if (country) filtered = filtered.filter(function(p) { return p.country === country; });
        if (verified) filtered = filtered.filter(function(p) { return p.verified; });
        if (sort === 'price-asc') filtered.sort(function(a, b) { return a.price - b.price; });
        else if (sort === 'price-desc') filtered.sort(function(a, b) { return b.price - a.price; });
        else if (sort === 'rating') filtered.sort(function(a, b) { return b.rating - a.rating; });
        renderProducts(filtered);
    }

    document.querySelectorAll('.filter-bar select, .filter-bar input').forEach(function(el) {
        el.addEventListener('change', applyFilters);
    });

    // ===== SEARCH =====
    document.getElementById('searchInput').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            var q = this.value.trim().toLowerCase();
            if (q) {
                var filtered = products.filter(function(p) {
                    return p.name.toLowerCase().includes(q) ||
                        p.supplier.toLowerCase().includes(q) ||
                        p.category.toLowerCase().includes(q);
                });
                renderProducts(filtered);
                if (!filtered.length) showToast('Aucun produit trouvé', 'error');
                else showToast(filtered.length + ' résultat(s)', 'success');
            } else {
                renderProducts(products);
            }
        }
    });

    // ===== BOTTOM NAV =====
    document.querySelectorAll('.bottom-nav .nav-item').forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.bottom-nav .nav-item').forEach(function(b) { b.classList.remove(
                    'active'); });
            this.classList.add('active');
            var page = this.getAttribute('data-page');
            var sections = {
                home: ['productsSection', 'suppliersSection', 'categoriesSection'],
                market: ['productsSection'],
                categories: ['categoriesSection'],
                suppliers: ['suppliersSection'],
                profile: ['dashboardBuyer', 'dashboardSupplier']
            };
            document.querySelectorAll('.section').forEach(function(s) { s.style.display = 'none'; });
            var ids = sections[page] || ['productsSection'];
            ids.forEach(function(id) {
                var el = document.getElementById(id);
                if (el) el.style.display = 'block';
            });
            if (page === 'profile') {
                var buyer = document.getElementById('dashboardBuyer');
                var supplier = document.getElementById('dashboardSupplier');
                if (buyer.style.display === 'none') {
                    buyer.style.display = 'block';
                    supplier.style.display = 'none';
                } else {
                    buyer.style.display = 'none';
                    supplier.style.display = 'block';
                }
            }
            if (page === 'home') {
                document.getElementById('productDetail').style.display = 'none';
            }
        });
    });

    // ===== TOP NAV PROFILE =====
    document.querySelector('.profile-avatar').addEventListener('click', function() {
        document.querySelector('.bottom-nav .nav-item[data-page="profile"]').click();
    });

    // ===== INIT =====
    renderCategories();
    renderProducts();
    renderSuppliers();
    updateCartBadge();
    setTimeout(animateStats, 400);
    setTimeout(function() { showToast('Bienvenue sur Global Bulk', 'success'); }, 700);

})();