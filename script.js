(function() {
    'use strict';

    /* =========================================================
       ===== CONFIG SUPABASE ==================================
       ========================================================= */
    var SUPABASE_URL = 'https://rixxdxgmsbjweyptzlfj.supabase.co';
    var SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpeHhkeGdtc2Jqd2V5cHR6bGZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEyNTQ2MTIsImV4cCI6MjEwNjgzMDYxMn0.1yO_8kQ7LemA55KDuIKRX8eR7_1rrZyDtSS3U2Cv_lo';

    /* =========================================================
       ===== TRADUCTIONS (EN par défaut) =======================
       ========================================================= */
    var TEXTS = {
        en: {
            nav_home: 'Home', nav_market: 'Market', nav_publish: 'Publish', nav_suppliers: 'Suppliers', nav_profile: 'Profile',
            menu_profile: 'My profile', menu_purchases: 'My purchases', menu_sales: 'My sales', menu_orders: 'My orders', menu_history: 'History', menu_settings: 'Settings', menu_faq: 'FAQ', menu_whitepaper: 'Whitepaper',
            profile_not_connected: 'Not connected', profile_connect_pi: 'Connect with Pi Network', profile_connected_as: 'Connected as', profile_complete_label: 'Profile complete', profile_incomplete_label: 'Profile to complete',
            profile_hint_complete: 'Complete your profile to perform transactions.', profile_hint_pi_detected: 'Pi Browser detected. Click to connect.', profile_hint_open_pi: 'Open this app in Pi Browser to connect.',
            search_placeholder: 'Search for a product...', search_button: 'Search', search_enter_term: 'Enter a term', search_no_results: 'No results', search_results: 'result(s)',
            marketplace_title: 'Wholesale offers', products_count: 'products',
            filter_country: 'Country', filter_all_countries: 'All countries',
            suppliers_title: 'Verified suppliers', suppliers_see_all: 'See all',
            stats_suppliers: 'Suppliers', stats_products: 'Products', stats_countries: 'Countries', stats_orders: 'Orders',
            product_min: 'Min', product_per_unit: '/ unit', product_verified: 'Verified', product_not_verified: 'Not verified',
            product_wholesale_price: 'Wholesale price', product_min_qty: 'Min qty', product_units: 'units', product_add_to_cart: 'Add to cart',
            cart_title: 'Your cart', cart_empty: 'Your cart is empty', cart_total: 'Total', cart_pay_pi: 'Pay with Pi',
            publish_title: 'Publish a product', publish_section_info: 'Product presentation', publish_name: 'Product name', publish_name_placeholder: 'Ex: Samsung Galaxy S24',
            publish_description: 'Detailed description', publish_description_placeholder: 'Describe your product (features, quality, packaging...)',
            publish_section_photos: 'Product photos', publish_add_photos: 'Add photos (max 4)',
            publish_section_category: 'Category & Location', publish_category: 'Category', publish_select_category: 'Select a category',
            publish_country: 'Country of origin', publish_select_country: 'Select a country',
            publish_section_price: 'Price & Availability', publish_price: 'Price', publish_unit: 'Unit',
            publish_unit_piece: 'Piece', publish_unit_kg: 'Kilogram', publish_unit_liter: 'Liter', publish_unit_meter: 'Meter', publish_unit_set: 'Set', publish_unit_ton: 'Ton',
            publish_min_order: 'Min order', publish_stock: 'Available stock', publish_section_supplier: 'Supplier',
            publish_supplier_name: 'Supplier name', publish_supplier_placeholder: 'Ex: TechImport Ltd',
            publish_submit: 'Publish my product', publish_publishing: 'Publishing...', publish_success: 'Product published and saved!', publish_fill_all: 'Please fill all required fields',
            profile_form_title: 'My profile', profile_form_intro: 'This information is required before any purchase or sale. You can modify it at any time.',
            profile_field_lastname: 'Last name', profile_field_firstname: 'Post-name', profile_field_email: 'Email', profile_field_phone: 'Phone number', profile_field_address: 'Residence address',
            profile_field_address_placeholder: 'City, district, street, no.', profile_note: 'Please enter real information, as it will be used for shipping your orders.',
            profile_save: 'Save my profile', profile_update: 'Update my profile', profile_saving: 'Saving...', profile_saved: 'Profile saved successfully',
            profile_invalid_email: 'Invalid email', profile_fill_all: 'Please fill all fields', profile_not_connected_msg: 'Connect with Pi Network to complete your profile.',
            purchases_title: 'My purchases', purchases_empty: 'You have not made any purchases yet.', purchases_count: 'order(s)',
            sales_title: 'My sales', sales_empty: 'You have not published any product.', sales_publish_cta: 'Publish a product', sales_count: 'product(s) published',
            sales_edit: 'Edit', sales_delete: 'Delete', sales_stock: 'Stock',
            orders_title: 'My orders', orders_empty: 'No orders received yet.', orders_empty_hint: 'Your customers\' orders will appear here.',
            orders_pending_tab: 'Pending', orders_shipped_tab: 'Shipped', orders_pending_empty: 'No orders awaiting processing.', orders_shipped_empty: 'No shipped orders yet.',
            orders_count: 'order(s) to process', orders_delivery_to: 'Delivery to', orders_products_ordered: 'Products ordered',
            orders_total_received: 'Total received', orders_mark_shipped: 'Mark as shipped', orders_shipped_done: 'Order shipped',
            orders_ship_confirm: 'Confirm this order has been shipped?', orders_ship_success: 'Order marked as shipped', orders_ship_error: 'Unable to update',
            orders_ship_processing: 'Processing...', orders_buyer_unavailable: 'Buyer profile unavailable', orders_uid: 'UID',
            status_paid: 'Paid', status_shipped: 'Shipped', status_delivered: 'Delivered', status_pending: 'Pending',
            history_title: 'History', history_empty: 'No operations recorded.', history_count: 'operation(s)',
            history_purchase: 'Purchase of', history_shipped: 'Order shipped',
            edit_title: 'Edit product', edit_name: 'Product name', edit_description: 'Description', edit_price: 'Price', edit_unit: 'Unit',
            edit_min_order: 'Min order', edit_stock: 'Available stock', edit_category: 'Category', edit_country: 'Country',
            edit_save: 'Save', edit_cancel: 'Cancel', edit_saving: 'Saving...', edit_success: 'Product edited successfully',
            edit_delete_confirm: 'Do you really want to delete', edit_deleted: 'Product deleted', edit_deleting: 'Deleting...',
            auth_title: 'Pi connection required', auth_default_msg: 'You must connect with Pi Network to continue.', auth_connect_now: 'Connect now', auth_later: 'Later',
            auth_cart_msg: 'Connect with Pi Network to add products to cart.', auth_order_msg: 'Connect with Pi Network to place an order.',
            auth_publish_msg: 'Connect with Pi Network to publish a product.', auth_contact_msg: 'Connect with Pi Network to contact a supplier.',
            auth_complete_profile: 'Complete your profile before continuing',
            payment_title: 'Confirm payment', payment_verify: 'Verify details before validating', payment_total: 'Total to pay',
            payment_pay: 'Pay with Pi Network', payment_cancel: 'Cancel', payment_processing: 'Processing payment...',
            payment_success: 'Payment successful and saved!', payment_cancelled: 'Payment cancelled', payment_error: 'Payment failed',
            settings_title: 'Settings', settings_notifications: 'Notifications', settings_enabled: 'Enabled',
            settings_language: 'Language', settings_theme: 'Theme', settings_light: 'Light', settings_language_intro: 'Choose your preferred language',
            whitepaper_title: 'Whitepaper', whitepaper_intro: 'Discover Global Bulk as a true international B2B shopping center: organization, operations, services and perspectives.',
            whitepaper_open: 'Open', whitepaper_official: 'Official document', whitepaper_subtitle: 'The global B2B shopping center, explained',
            whitepaper_meta: 'Edition 2026 — 12 chapters — reading ~18 min',
            toast_welcome: 'Welcome', toast_connect_info: 'Go to Profile to connect', toast_open_pi: 'Open in Pi Browser for Pi',
            toast_photo_deleted: 'Photo deleted', toast_max_images: 'Maximum 4 images', toast_product_added: 'added to cart',
            toast_connecting: 'Opening Pi Network...', toast_connection_cancelled: 'Connection cancelled', toast_error: 'Error',
            toast_pi_browser_required: 'Open this app in Pi Browser', toast_pi_sdk_error: 'Error initializing Pi SDK',
            toast_profile_to_complete: 'Complete your profile in My profile', toast_no_result: 'No result',
            loader_loading: 'Loading', loader_ready: 'Ready!',
            back: 'Back', delete: 'Delete', confirm: 'Confirm'
        },
        fr: {
            nav_home: 'Accueil', nav_market: 'Marché', nav_publish: 'Publier', nav_suppliers: 'Fournisseurs', nav_profile: 'Profil',
            menu_profile: 'Mon profil', menu_purchases: 'Mes achats', menu_sales: 'Mes ventes', menu_orders: 'Mes commandes', menu_history: 'Historique', menu_settings: 'Paramètres', menu_faq: 'FAQ', menu_whitepaper: 'Livre blanc',
            profile_not_connected: 'Non connecté', profile_connect_pi: 'Connecter avec Pi Network', profile_connected_as: 'Connecté en tant que', profile_complete_label: 'Profil complet', profile_incomplete_label: 'Profil à compléter',
            profile_hint_complete: 'Complétez votre profil pour effectuer des transactions.', profile_hint_pi_detected: 'Pi Browser détecté. Cliquez pour vous connecter.', profile_hint_open_pi: 'Ouvrez cette app dans Pi Browser pour vous connecter.',
            search_placeholder: 'Rechercher un produit...', search_button: 'Rechercher', search_enter_term: 'Entrez un terme', search_no_results: 'Aucun résultat', search_results: 'résultat(s)',
            marketplace_title: 'Offres en gros', products_count: 'produits',
            filter_country: 'Pays', filter_all_countries: 'Tous les pays',
            suppliers_title: 'Fournisseurs vérifiés', suppliers_see_all: 'Voir tout',
            stats_suppliers: 'Fournisseurs', stats_products: 'Produits', stats_countries: 'Pays', stats_orders: 'Commandes',
            product_min: 'Min', product_per_unit: '/ unité', product_verified: 'Vérifié', product_not_verified: 'Non vérifié',
            product_wholesale_price: 'Prix de gros', product_min_qty: 'Qté min.', product_units: 'unités', product_add_to_cart: 'Ajouter au panier',
            cart_title: 'Votre panier', cart_empty: 'Votre panier est vide', cart_total: 'Total', cart_pay_pi: 'Payer avec Pi',
            publish_title: 'Publier un produit', publish_section_info: 'Présentation du produit', publish_name: 'Nom du produit', publish_name_placeholder: 'Ex : Smartphone Galaxy S24',
            publish_description: 'Description détaillée', publish_description_placeholder: 'Décrivez votre produit (caractéristiques, qualité, conditionnement...)',
            publish_section_photos: 'Photos du produit', publish_add_photos: 'Ajouter des photos (max 4)',
            publish_section_category: 'Catégorie & Localisation', publish_category: 'Catégorie', publish_select_category: 'Sélectionner une catégorie',
            publish_country: 'Pays d\'origine', publish_select_country: 'Sélectionner un pays',
            publish_section_price: 'Prix & Disponibilité', publish_price: 'Prix', publish_unit: 'Unité',
            publish_unit_piece: 'Pièce', publish_unit_kg: 'Kilogramme', publish_unit_liter: 'Litre', publish_unit_meter: 'Mètre', publish_unit_set: 'Set', publish_unit_ton: 'Tonne',
            publish_min_order: 'Qté minimum', publish_stock: 'Stock disponible', publish_section_supplier: 'Fournisseur',
            publish_supplier_name: 'Nom du fournisseur', publish_supplier_placeholder: 'Ex : TechImport SARL',
            publish_submit: 'Publier mon produit', publish_publishing: 'Publication...', publish_success: 'Produit publié et enregistré !', publish_fill_all: 'Veuillez remplir tous les champs obligatoires',
            profile_form_title: 'Mon profil', profile_form_intro: 'Ces informations sont obligatoires avant toute opération d\'achat ou de vente. Vous pouvez les modifier à tout moment.',
            profile_field_lastname: 'Nom', profile_field_firstname: 'Post-nom', profile_field_email: 'Email', profile_field_phone: 'Numéro de téléphone', profile_field_address: 'Adresse de résidence',
            profile_field_address_placeholder: 'Ville, quartier, rue, n°', profile_note: 'Veuillez mettre les vraies informations, car celles-ci serviront à l\'expédition de vos commandes.',
            profile_save: 'Enregistrer mon profil', profile_update: 'Mettre à jour mon profil', profile_saving: 'Enregistrement...', profile_saved: 'Profil enregistré avec succès',
            profile_invalid_email: 'Email invalide', profile_fill_all: 'Veuillez remplir tous les champs', profile_not_connected_msg: 'Connectez-vous avec Pi Network pour compléter votre profil.',
            purchases_title: 'Mes achats', purchases_empty: 'Vous n\'avez encore effectué aucun achat.', purchases_count: 'commande(s)',
            sales_title: 'Mes ventes', sales_empty: 'Vous n\'avez publié aucun produit.', sales_publish_cta: 'Publier un produit', sales_count: 'produit(s) publié(s)',
            sales_edit: 'Modifier', sales_delete: 'Supprimer', sales_stock: 'Stock',
            orders_title: 'Mes commandes', orders_empty: 'Aucune commande reçue pour le moment.', orders_empty_hint: 'Les commandes de vos clients apparaîtront ici.',
            orders_pending_tab: 'En attente', orders_shipped_tab: 'Expédié', orders_pending_empty: 'Aucune commande en attente de traitement.', orders_shipped_empty: 'Aucune commande expédiée pour le moment.',
            orders_count: 'commande(s) à traiter', orders_delivery_to: 'Livraison à', orders_products_ordered: 'Produits commandés',
            orders_total_received: 'Total encaissé', orders_mark_shipped: 'Marquer comme expédié', orders_shipped_done: 'Commande expédiée',
            orders_ship_confirm: 'Confirmer que cette commande a été expédiée ?', orders_ship_success: 'Commande marquée comme expédiée', orders_ship_error: 'Impossible de mettre à jour',
            orders_ship_processing: 'Traitement...', orders_buyer_unavailable: 'Profil acheteur indisponible', orders_uid: 'UID',
            status_paid: 'Payé', status_shipped: 'Expédié', status_delivered: 'Livré', status_pending: 'En attente',
            history_title: 'Historique', history_empty: 'Aucune opération enregistrée.', history_count: 'opération(s)',
            history_purchase: 'Achat de', history_shipped: 'Commande expédiée',
            edit_title: 'Modifier le produit', edit_name: 'Nom du produit', edit_description: 'Description', edit_price: 'Prix', edit_unit: 'Unité',
            edit_min_order: 'Qté minimum', edit_stock: 'Stock disponible', edit_category: 'Catégorie', edit_country: 'Pays',
            edit_save: 'Enregistrer', edit_cancel: 'Annuler', edit_saving: 'Enregistrement...', edit_success: 'Produit modifié avec succès',
            edit_delete_confirm: 'Voulez-vous vraiment supprimer', edit_deleted: 'Produit supprimé', edit_deleting: 'Suppression...',
            auth_title: 'Connexion Pi requise', auth_default_msg: 'Vous devez vous connecter avec Pi Network pour continuer.', auth_connect_now: 'Se connecter maintenant', auth_later: 'Plus tard',
            auth_cart_msg: 'Connectez-vous avec Pi Network pour ajouter des produits au panier.', auth_order_msg: 'Connectez-vous avec Pi Network pour passer commande.',
            auth_publish_msg: 'Connectez-vous avec Pi Network pour publier un produit.', auth_contact_msg: 'Connectez-vous avec Pi Network pour contacter un fournisseur.',
            auth_complete_profile: 'Complétez votre profil avant de continuer',
            payment_title: 'Confirmer le paiement', payment_verify: 'Vérifiez les détails avant de valider', payment_total: 'Total à payer',
            payment_pay: 'Payer avec Pi Network', payment_cancel: 'Annuler', payment_processing: 'Traitement du paiement...',
            payment_success: 'Paiement réussi et enregistré !', payment_cancelled: 'Paiement annulé', payment_error: 'Paiement échoué',
            settings_title: 'Paramètres', settings_notifications: 'Notifications', settings_enabled: 'Activées',
            settings_language: 'Langue', settings_theme: 'Thème', settings_light: 'Clair', settings_language_intro: 'Choisissez votre langue préférée',
            whitepaper_title: 'Livre blanc', whitepaper_intro: 'Découvrez Global Bulk comme un véritable centre commercial B2B international : organisation, fonctionnement, services et perspectives.',
            whitepaper_open: 'Ouvrir', whitepaper_official: 'Document officiel', whitepaper_subtitle: 'Le centre commercial B2B mondial, expliqué',
            whitepaper_meta: 'Édition 2026 — 12 chapitres — lecture ~18 min',
            toast_welcome: 'Bienvenue', toast_connect_info: 'Allez dans Profil pour vous connecter', toast_open_pi: 'Ouvrez dans Pi Browser pour Pi',
            toast_photo_deleted: 'Photo supprimée', toast_max_images: 'Maximum 4 images', toast_product_added: 'ajouté au panier',
            toast_connecting: 'Ouverture de Pi Network...', toast_connection_cancelled: 'Connexion annulée', toast_error: 'Erreur',
            toast_pi_browser_required: 'Ouvrez cette app dans Pi Browser', toast_pi_sdk_error: 'Erreur initialisation Pi SDK',
            toast_profile_to_complete: 'Complétez votre profil dans Mon profil', toast_no_result: 'Aucun résultat',
            loader_loading: 'Chargement', loader_ready: 'Prêt !',
            back: 'Retour', delete: 'Supprimer', confirm: 'Confirmer'
        }
    };

    var currentLang = 'en';
    try { var savedLang = localStorage.getItem('gb_lang'); if (savedLang === 'fr' || savedLang === 'en') currentLang = savedLang; } catch(e) {}

    function t(key) {
        var dict = TEXTS[currentLang] || TEXTS.en;
        return dict[key] || TEXTS.en[key] || key;
    }

    function setLang(lang) {
        if (lang !== 'en' && lang !== 'fr') return;
        currentLang = lang;
        try { localStorage.setItem('gb_lang', lang); } catch(e) {}
        document.documentElement.lang = lang;
        applyStaticTranslations();
        renderProducts();
        renderSuppliers();
        renderCategoryFilters();
        setupFilters();
        populateFormSelects();
        updatePiUI();
        if (document.getElementById('sideDrawer').classList.contains('open')) {
            closeSideDrawer();
            setTimeout(function() { openSideDrawer('parametres', t('settings_title')); }, 250);
        }
    }

    /* =========================================================
       ===== SUPABASE API =====================================
       ========================================================= */
    var SupaAPI = {
        headers: function() { return { 'apikey': SUPABASE_KEY, 'Authorization': 'Bearer ' + SUPABASE_KEY, 'Content-Type': 'application/json', 'Prefer': 'return=representation' }; },
        get: function(path) { return fetch(SUPABASE_URL + '/rest/v1/' + path, { headers: SupaAPI.headers() }).then(function(r) { if (!r.ok) return r.text().then(function(t) { throw new Error('GET ' + r.status + ' — ' + t); }); return r.json(); }); },
        post: function(path, body) { return fetch(SUPABASE_URL + '/rest/v1/' + path, { method: 'POST', headers: SupaAPI.headers(), body: JSON.stringify(body) }).then(function(r) { if (!r.ok) return r.text().then(function(t) { throw new Error('POST ' + r.status + ' — ' + t); }); return r.json(); }); },
        patch: function(path, body) { var h = SupaAPI.headers(); h['Prefer'] = 'return=representation'; return fetch(SUPABASE_URL + '/rest/v1/' + path, { method: 'PATCH', headers: h, body: JSON.stringify(body) }).then(function(r) { if (!r.ok) return r.text().then(function(t) { throw new Error('PATCH ' + r.status + ' — ' + t); }); return r.json(); }); },
        del: function(path) { return fetch(SUPABASE_URL + '/rest/v1/' + path, { method: 'DELETE', headers: SupaAPI.headers() }).then(function(r) { if (!r.ok) return r.text().then(function(t) { throw new Error('DELETE ' + r.status + ' — ' + t); }); return true; }); },
        upsert: function(path, body, onConflict) { var h = SupaAPI.headers(); h['Prefer'] = 'resolution=merge-duplicates,return=representation'; return fetch(SUPABASE_URL + '/rest/v1/' + path + (onConflict ? '?on_conflict=' + onConflict : ''), { method: 'POST', headers: h, body: JSON.stringify(body) }).then(function(r) { if (!r.ok) return r.text().then(function(t) { throw new Error('UPSERT ' + r.status + ' — ' + t); }); return r.json(); }); }
    };

    /* ===== CATÉGORIES & PAYS (jamais traduits) ===== */
    var categories = [
        { name: 'Électronique' }, { name: 'Mode' }, { name: 'Chaussures' }, { name: 'Beauté' },
        { name: 'Maison' }, { name: 'Construction' }, { name: 'Agriculture' }, { name: 'Alimentation' },
        { name: 'Automobile' }, { name: 'Équipements' }, { name: 'Énergie' }, { name: 'Fournitures' },
        { name: 'Bijoux' }, { name: 'Jouets' }, { name: 'Librairie' }, { name: 'Sport' },
        { name: 'Instruments' }, { name: 'Photo' }, { name: 'Outillage' }, { name: 'Animalerie' }
    ];

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

    var products = [
        { id: 1, name: 'Smartphone Galaxy S24', price: 0.000120, unit: 'Pi', minOrder: 10, stock: 850, supplier: 'MobileTech GmbH', country: 'Allemagne', verified: true, rating: 4.9, category: 'Électronique', images: ['https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&h=400&fit=crop'] },
        { id: 2, name: 'Ordinateur Portable Pro', price: 0.000450, unit: 'Pi', minOrder: 5, stock: 320, supplier: 'TechImport SARL', country: 'Chine', verified: true, rating: 4.8, category: 'Électronique', images: ['https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop'] },
        { id: 3, name: 'Voiture Électrique Model 3', price: 0.035000, unit: 'Pi', minOrder: 1, stock: 45, supplier: 'AutoGreen SA', country: 'États-Unis', verified: true, rating: 4.7, category: 'Automobile', images: ['https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop'] },
        { id: 4, name: 'T-shirt en coton bio', price: 0.0000025, unit: 'Pi', minOrder: 200, stock: 12000, supplier: 'EcoWear SARL', country: 'France', verified: true, rating: 4.7, category: 'Mode', images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop'] },
        { id: 5, name: 'Chaussures de sport', price: 0.000012, unit: 'Pi', minOrder: 50, stock: 320, supplier: 'SportFoot Inc', country: 'États-Unis', verified: false, rating: 4.2, category: 'Chaussures', images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop'] },
        { id: 6, name: 'Montre connectée', price: 0.000035, unit: 'Pi', minOrder: 20, stock: 1500, supplier: 'TechImport SARL', country: 'Chine', verified: true, rating: 4.6, category: 'Électronique', images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop'] },
        { id: 7, name: 'Lampe solaire 10W', price: 0.0000045, unit: 'Pi', minOrder: 100, stock: 3000, supplier: 'GreenEnergy Ltd', country: 'Allemagne', verified: true, rating: 4.5, category: 'Énergie', images: ['https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop'] },
        { id: 8, name: 'Meubles de salon (set)', price: 0.000180, unit: 'Pi', minOrder: 5, stock: 120, supplier: 'HomeFurnish SARL', country: 'France', verified: false, rating: 4.0, category: 'Maison', images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop'] },
        { id: 9, name: 'Café Arabica 1kg', price: 0.0000032, unit: 'Pi', minOrder: 500, stock: 8000, supplier: 'AgriExport Co', country: 'Colombie', verified: true, rating: 4.9, category: 'Alimentation', images: ['https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop'] },
        { id: 10, name: 'Crème Anti-Âge 50ml', price: 0.0000080, unit: 'Pi', minOrder: 100, stock: 2000, supplier: 'BeautyLab SAS', country: 'France', verified: true, rating: 4.3, category: 'Beauté', images: ['https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=400&fit=crop'] },
        { id: 11, name: 'Tracteur Agricole 4x4', price: 0.045000, unit: 'Pi', minOrder: 1, stock: 12, supplier: 'AgriMachines Ltd', country: 'États-Unis', verified: true, rating: 4.4, category: 'Agriculture', images: ['https://images.unsplash.com/photo-1531816458010-4f4c24de72e1?w=600&h=400&fit=crop'] },
        { id: 12, name: 'Équipement de Chantier (set)', price: 0.000220, unit: 'Pi', minOrder: 10, stock: 340, supplier: 'BuildPro SARL', country: 'France', verified: false, rating: 3.9, category: 'Construction', images: ['https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop'] }
    ];

    var suppliers = [
        { name: 'TechImport SARL', country: 'Chine', verified: true, products: 340, rating: 4.8 },
        { name: 'MobileTech GmbH', country: 'Allemagne', verified: true, products: 210, rating: 4.9 },
        { name: 'EcoWear SARL', country: 'France', verified: true, products: 180, rating: 4.7 },
        { name: 'GreenEnergy Ltd', country: 'Allemagne', verified: true, products: 90, rating: 4.5 },
        { name: 'SportFoot Inc', country: 'États-Unis', verified: false, products: 65, rating: 4.2 }
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
    var buyerProfilesCache = {};
    var currentCommandesTab = 'pending';

    /* ===== HELPERS ===== */
    function formatPrice(p) {
        var n = Number(p);
        if (!isFinite(n) || n === 0) return '0';
        if (Number.isInteger(n)) return n.toString();
        var s = n.toString();
        if (s.indexOf('e') !== -1 || s.indexOf('E') !== -1) s = n.toFixed(10).replace(/0+$/, '').replace(/\.$/, '');
        return s;
    }
    function formatNumber(n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
    function escapeHtml(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
    function formatDateFr(iso) {
        var locale = currentLang === 'fr' ? 'fr-FR' : 'en-US';
        try { return new Date(iso).toLocaleDateString(locale, { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }); }
        catch (e) { return ''; }
    }
    function statusLabel(status) {
        if (!status) return t('status_paid');
        var s = String(status).toLowerCase();
        if (s === 'paid') return t('status_paid');
        if (s === 'shipped') return t('status_shipped');
        if (s === 'delivered') return t('status_delivered');
        if (s === 'pending') return t('status_pending');
        return status;
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
        setTimeout(function() { toast.style.opacity = '0'; toast.style.transform = 'translateX(20px)'; setTimeout(function() { if (toast.parentNode) toast.remove(); }, 400); }, 5000);
    }

    /* ===== APPLIQUER LES TRADUCTIONS AUX ÉLÉMENTS STATIQUES ===== */
    function applyStaticTranslations() {
        // Nav
        var navMap = { home: 'nav_home', market: 'nav_market', publish: 'nav_publish', suppliers: 'nav_suppliers', profile: 'nav_profile' };
        document.querySelectorAll('.bottom-nav .nav-item').forEach(function(btn) {
            var page = btn.getAttribute('data-page');
            var span = btn.querySelector('span');
            if (span && navMap[page]) span.textContent = t(navMap[page]);
        });
        // Search
        var si = document.getElementById('searchInput');
        if (si) si.placeholder = t('search_placeholder');
        var sb = document.getElementById('searchBtn');
        if (sb) sb.textContent = t('search_button');
        // Section titles
        var mh = document.querySelector('#productsSection .marketplace-header h2');
        if (mh) mh.textContent = t('marketplace_title');
        var sh = document.querySelector('#suppliersSection .section-header h2');
        if (sh) sh.textContent = t('suppliers_title');
        var shLink = document.querySelector('#suppliersSection .section-header a');
        if (shLink) shLink.innerHTML = t('suppliers_see_all') + ' <i class="fas fa-arrow-right"></i>';
        // Stats labels
        var statLabels = document.querySelectorAll('.stats-grid .stat-item .label');
        if (statLabels.length === 4) {
            statLabels[0].textContent = t('stats_suppliers');
            statLabels[1].textContent = t('stats_products');
            statLabels[2].textContent = t('stats_countries');
            statLabels[3].textContent = t('stats_orders');
        }
        // Filter label
        var filterLabel = document.querySelector('.filter-country label');
        if (filterLabel) filterLabel.innerHTML = '<i class="fas fa-globe"></i> ' + t('filter_country');
        // Publish form
        var pTitle = document.querySelector('#publishSection .page-header .page-title');
        if (pTitle) pTitle.textContent = t('publish_title');
        var pBack = document.querySelector('#publishSection .page-header .btn-back');
        if (pBack) pBack.innerHTML = '<i class="fas fa-arrow-left"></i> ' + t('back');
        // Publish section titles
        var pst = document.querySelectorAll('#publishForm .form-section-title');
        if (pst.length >= 5) {
            pst[0].innerHTML = '<i class="fas fa-info-circle"></i> ' + t('publish_section_info');
            pst[1].innerHTML = '<i class="fas fa-camera"></i> ' + t('publish_section_photos');
            pst[2].innerHTML = '<i class="fas fa-tags"></i> ' + t('publish_section_category');
            pst[3].innerHTML = '<i class="fas fa-coins"></i> ' + t('publish_section_price');
            pst[4].innerHTML = '<i class="fas fa-building"></i> ' + t('publish_section_supplier');
        }
        // Publish labels & placeholders
        setLabelAndPlaceholder('pName', 'publish_name', 'publish_name_placeholder');
        setLabelAndPlaceholder('pDescription', 'publish_description', 'publish_description_placeholder');
        setSelectLabel('pCategory', 'publish_category');
        setSelectLabel('pCountry', 'publish_country');
        setLabelAndPlaceholder('pPrice', 'publish_price', null);
        setSelectLabel('pUnit', 'publish_unit');
        setLabelAndPlaceholder('pMinOrder', 'publish_min_order', null);
        setLabelAndPlaceholder('pStock', 'publish_stock', null);
        setLabelAndPlaceholder('pSupplier', 'publish_supplier_name', 'publish_supplier_placeholder');
        var uploadLabel = document.querySelector('.upload-label');
        if (uploadLabel) uploadLabel.innerHTML = '<i class="fas fa-cloud-upload-alt"></i> ' + t('publish_add_photos');
        var submitBtn = document.querySelector('.publish-submit');
        if (submitBtn) submitBtn.innerHTML = '<i class="fas fa-rocket"></i> ' + t('publish_submit');
        // Profile page
        var profTitle = document.querySelector('#profileSection .page-header .page-title');
        if (profTitle) profTitle.textContent = t('menu_profile');
        var profBack = document.querySelector('#profileSection .page-header .btn-back');
        if (profBack) profBack.innerHTML = '<i class="fas fa-arrow-left"></i> ' + t('back');
        // Menu labels
        var menuMap = { 'mon-profil': 'menu_profile', 'mes-achats': 'menu_purchases', 'mes-ventes': 'menu_sales', 'mes-commandes': 'menu_orders', 'historique': 'menu_history', 'parametres': 'menu_settings', 'faq': 'menu_faq', 'livre-blanc': 'menu_whitepaper' };
        document.querySelectorAll('.menu-item').forEach(function(item) {
            var tab = item.getAttribute('data-tab');
            var label = item.querySelector('.menu-label');
            if (label && menuMap[tab]) label.textContent = t(menuMap[tab]);
        });
        // Cart
        var cartTitle = document.querySelector('.cart-header h3');
        if (cartTitle) cartTitle.textContent = t('cart_title');
        var cartEmpty = document.querySelector('.cart-empty p');
        if (cartEmpty) cartEmpty.textContent = t('cart_empty');
        var cartTotal = document.querySelector('.cart-total span:first-child');
        if (cartTotal) cartTotal.textContent = t('cart_total');
        var payBtn = document.getElementById('checkoutBtn');
        if (payBtn) payBtn.innerHTML = '<i class="fab fa-pi"></i> ' + t('cart_pay_pi');
        // Auth modal
        var authTitle = document.querySelector('#authRequiredModal h2');
        if (authTitle) authTitle.textContent = t('auth_title');
        var authDefault = document.getElementById('authModalMessage');
        if (authDefault && !authDefault.dataset.keep) authDefault.textContent = t('auth_default_msg');
        var authConnect = document.querySelector('#authModalConnectBtn span');
        if (authConnect) authConnect.textContent = t('auth_connect_now');
        var authLater = document.getElementById('authModalCancelBtn');
        if (authLater) authLater.textContent = t('auth_later');
        // Payment modal
        var payTitle = document.querySelector('#paymentModal h2');
        if (payTitle) payTitle.textContent = t('payment_title');
        var payVerify = document.querySelector('#paymentModal .payment-modal-header p');
        if (payVerify) payVerify.textContent = t('payment_verify');
        var payTotalLbl = document.querySelector('.payment-total span:first-child');
        if (payTotalLbl) payTotalLbl.textContent = t('payment_total');
        var payConfirmSpan = document.querySelector('#paymentConfirmBtn span');
        if (payConfirmSpan) payConfirmSpan.textContent = t('payment_pay');
        var payCancel = document.getElementById('paymentCancelBtn');
        if (payCancel) payCancel.textContent = t('payment_cancel');
        // Edit modal
        var editTitle = document.querySelector('.edit-product-header h2');
        if (editTitle) editTitle.innerHTML = '<i class="fas fa-edit"></i> ' + t('edit_title');
        setEditLabel('epName', 'edit_name');
        setEditLabel('epDescription', 'edit_description');
        setEditLabel('epPrice', 'edit_price');
        setEditLabel('epUnit', 'edit_unit');
        setEditLabel('epMinOrder', 'edit_min_order');
        setEditLabel('epStock', 'edit_stock');
        setEditLabel('epCategory', 'edit_category');
        setEditLabel('epCountry', 'edit_country');
        var editCancel = document.getElementById('editProductCancel');
        if (editCancel) editCancel.textContent = t('edit_cancel');
        var editSave = document.querySelector('#editProductForm button[type="submit"]');
        if (editSave) editSave.innerHTML = '<i class="fas fa-save"></i> ' + t('edit_save');
        // Loader
        var lt = document.getElementById('loaderText');
        if (lt && lt.textContent === 'Chargement...') lt.textContent = t('loader_loading') + '...';
    }

    function setLabelAndPlaceholder(id, labelKey, placeholderKey) {
        var el = document.getElementById(id);
        if (!el) return;
        var group = el.closest('.form-group');
        if (!group) return;
        var lbl = group.querySelector('label');
        if (lbl) {
            var req = lbl.querySelector('.req');
            lbl.innerHTML = t(labelKey) + (req ? ' <span class="req">*</span>' : '');
        }
        if (placeholderKey) el.placeholder = t(placeholderKey);
    }
    function setSelectLabel(id, labelKey) {
        var el = document.getElementById(id);
        if (!el) return;
        var group = el.closest('.form-group');
        if (!group) return;
        var lbl = group.querySelector('label');
        if (lbl) {
            var req = lbl.querySelector('.req');
            lbl.innerHTML = t(labelKey) + (req ? ' <span class="req">*</span>' : '');
        }
        var firstOpt = el.querySelector('option[value=""]');
        if (firstOpt) {
            if (id === 'pCategory') firstOpt.textContent = t('publish_select_category');
            if (id === 'pCountry') firstOpt.textContent = t('publish_select_country');
        }
    }
    function setEditLabel(id, labelKey) {
        var el = document.getElementById(id);
        if (!el) return;
        var group = el.closest('.form-group');
        if (!group) return;
        var lbl = group.querySelector('label');
        if (lbl) {
            var req = lbl.querySelector('.req');
            lbl.innerHTML = t(labelKey) + (req ? ' <span class="req">*</span>' : '');
        }
    }

    /* ===== SUPABASE PROFIL ===== */
    function isProfileComplete() {
        if (!userProfile) return false;
        return !!(userProfile.nom && userProfile.post_nom && userProfile.email && userProfile.phone && userProfile.adresse);
    }

    function loadProfileFromSupabase() {
        if (!piUser) return Promise.resolve(null);
        return SupaAPI.get('profils?pi_uid=eq.' + encodeURIComponent(piUser.uid) + '&limit=1')
            .then(function(rows) { userProfile = (rows && rows.length > 0) ? rows[0] : null; return userProfile; })
            .catch(function(e) { console.error('[Supa] loadProfile error', e); userProfile = null; return null; });
    }

    function saveProfileToSupabase(data) {
        if (!piUser) return Promise.reject(new Error('Not connected'));
        var payload = { pi_uid: piUser.uid, pi_username: piUser.username, nom: data.nom, post_nom: data.postNom, email: data.email, phone: data.phone, adresse: data.address, updated_at: new Date().toISOString() };
        return SupaAPI.upsert('profils', payload, 'pi_uid').then(function(rows) { userProfile = (rows && rows.length > 0) ? rows[0] : payload; return userProfile; });
    }

    function loadProductsFromSupabase() {
        return SupaAPI.get('produits?select=*&order=created_at.desc').then(function(rows) {
            if (!rows || rows.length === 0) return [];
            return rows.map(function(r) {
                return { id: r.id, name: r.name, description: r.description, price: Number(r.price), unit: r.unit, minOrder: r.min_order, stock: r.stock, supplier: r.owner_pi_uid, ownerPiUid: r.owner_pi_uid, country: r.country, verified: !!r.verified, rating: Number(r.rating || 4.5), category: r.category, images: Array.isArray(r.images) ? r.images : (r.images ? JSON.parse(r.images) : []), _fromSupa: true };
            });
        }).catch(function(e) { console.error('[Supa] loadProducts error', e); return []; });
    }

    function saveProductToSupabase(p) {
        if (!piUser) return Promise.reject(new Error('Not connected'));
        var payload = { owner_pi_uid: piUser.uid, name: p.name, description: p.description || '', category: p.category, country: p.country, price: p.price, unit: p.unit, min_order: p.minOrder, stock: p.stock, images: p.images && p.images.length ? p.images : [], verified: true, rating: 4.5 };
        return SupaAPI.post('produits', payload);
    }

    function deleteProductFromSupabase(id) { return SupaAPI.del('produits?id=eq.' + encodeURIComponent(id)); }
    function updateProductInSupabase(id, data) {
        return SupaAPI.patch('produits?id=eq.' + encodeURIComponent(id), { name: data.name, description: data.description, category: data.category, country: data.country, price: data.price, unit: data.unit, min_order: data.minOrder, stock: data.stock });
    }

    function saveOrderToSupabase(order) {
        if (!piUser) return Promise.reject(new Error('Not connected'));
        var payload = { buyer_pi_uid: piUser.uid, seller_pi_uid: order.seller_pi_uid || null, items: order.items, total: order.total, status: order.status || 'paid', payment_id: order.payment_id || null, txid: order.txid || null };
        return SupaAPI.post('ordres', payload);
    }
    function updateOrderStatus(orderId, newStatus) {
        return SupaAPI.patch('ordres?id=eq.' + encodeURIComponent(orderId), { status: newStatus });
    }
    function loadOrdersFromSupabase() {
        if (!piUser) return Promise.resolve([]);
        var uid = encodeURIComponent(piUser.uid);
        return SupaAPI.get('ordres?or=(buyer_pi_uid.eq.' + uid + ',seller_pi_uid.eq.' + uid + ')&order=created_at.desc')
            .then(function(rows) { userOrders = rows || []; return userOrders; })
            .catch(function(e) { console.error('[Supa] loadOrders error', e); return []; });
    }
    function saveHistoryToSupabase(entry) {
        if (!piUser) return Promise.reject(new Error('Not connected'));
        return SupaAPI.post('histoire', { user_pi_uid: piUser.uid, type: entry.type, description: entry.description || '', amount: entry.amount || null, meta: entry.meta || null });
    }
    function loadHistoryFromSupabase() {
        if (!piUser) return Promise.resolve([]);
        var uid = encodeURIComponent(piUser.uid);
        return SupaAPI.get('histoire?user_pi_uid=eq.' + uid + '&order=created_at.desc&limit=100')
            .then(function(rows) { userHistory = rows || []; return userHistory; })
            .catch(function(e) { console.error('[Supa] loadHistory error', e); return []; });
    }
    function loadBuyerProfiles(uids) {
        if (!uids || uids.length === 0) return Promise.resolve({});
        var unique = uids.filter(function(v, i, a) { return v && a.indexOf(v) === i; });
        var inList = unique.map(function(u) { return '"' + u + '"'; }).join(',');
        return SupaAPI.get('profils?pi_uid=in.(' + inList + ')')
            .then(function(rows) { var map = {}; (rows || []).forEach(function(r) { map[r.pi_uid] = r; }); return map; })
            .catch(function(e) { console.error('[Supa] loadBuyerProfiles error', e); return {}; });
    }

    /* ===== PI SDK ===== */
    function waitForPiSdk(maxMs) {
        maxMs = maxMs || 5000;
        return new Promise(function(resolve, reject) {
            var start = Date.now();
            function check() { if (typeof Pi !== 'undefined' && Pi.init && Pi.authenticate) resolve(true); else if (Date.now() - start > maxMs) reject(new Error('SDK timeout')); else setTimeout(check, 150); }
            check();
        });
    }
    function detectPiBrowser() { inPiBrowser = /PiBrowser/i.test(navigator.userAgent) || (typeof Pi !== 'undefined'); return inPiBrowser; }
    function initPiSdk() { if (!inPiBrowser) return false; try { Pi.init({ version: "2.0", sandbox: false }); piReady = true; return true; } catch (e) { return false; } }
    function onIncompletePaymentFound(payment) { console.log('[Pi] Incomplete payment:', payment); }

    function connectPi() {
        if (!inPiBrowser) { showToast(t('toast_pi_browser_required'), 'error'); return; }
        if (!piReady && !initPiSdk()) { showToast(t('toast_pi_sdk_error'), 'error'); return; }
        var btn = document.getElementById('piActionBtn');
        var actionText = document.getElementById('piActionText');
        if (btn) btn.disabled = true;
        if (actionText) actionText.textContent = '...';
        showToast(t('toast_connecting'), 'info');
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
                            renderProducts(); applyFilters();
                        }
                    }),
                    loadOrdersFromSupabase(), loadHistoryFromSupabase()
                ]);
            })
            .then(function() {
                updatePiUI(); closeAuthModal();
                showToast(t('toast_welcome') + ' ' + piUser.username + ' !', 'success');
                if (!isProfileComplete()) setTimeout(function() { showToast(t('toast_profile_to_complete'), 'info'); }, 1200);
            })
            .catch(function(err) {
                var msg = (err && err.message) ? err.message : t('toast_error');
                if (/denied|cancel/i.test(msg)) showToast(t('toast_connection_cancelled'), 'info');
                else showToast(t('toast_error') + ' : ' + msg, 'error');
            })
            .finally(function() { if (btn) btn.disabled = false; updatePiUI(); });
    }

    function disconnectPi() {
        piUser = null; userProfile = null; userOrders = []; userHistory = []; buyerProfilesCache = {};
        try { localStorage.removeItem('pi_user'); } catch (e) {}
        updatePiUI();
        showToast('Disconnected', 'info');
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
            if (accountSubtitle) accountSubtitle.textContent = profileOk ? t('profile_complete_label') : t('profile_incomplete_label');
            if (actionBtn) { actionBtn.classList.add('disconnect'); actionBtn.disabled = false; }
            if (actionText) actionText.textContent = currentLang === 'fr' ? 'Déconnexion' : 'Disconnect';
            if (hint) {
                if (profileOk) hint.innerHTML = '<i class="fas fa-shield-alt" style="color:var(--success);"></i> ' + t('profile_connected_as') + ' <strong>' + escapeHtml(piUser.username) + '</strong>';
                else hint.innerHTML = '<i class="fas fa-exclamation-triangle" style="color:#e6b000;"></i> ' + t('profile_hint_complete');
            }
            if (publishAvatar) publishAvatar.textContent = piUser.username.substring(0, 2).toUpperCase();
            if (publishName) publishName.textContent = piUser.username;
            if (publishHandle) publishHandle.textContent = '@' + piUser.username.toLowerCase();
        } else {
            if (accountCard) accountCard.classList.remove('connected');
            if (avatar) avatar.innerHTML = '<i class="fab fa-pi"></i>';
            if (accountUsername) accountUsername.textContent = t('profile_not_connected');
            if (accountSubtitle) accountSubtitle.textContent = t('profile_connect_pi');
            if (actionBtn) { actionBtn.classList.remove('disconnect'); actionBtn.disabled = !inPiBrowser; }
            if (actionText) actionText.textContent = t('profile_connect_pi');
            if (hint) {
                if (inPiBrowser) hint.innerHTML = '<i class="fas fa-check-circle" style="color:var(--success);"></i> ' + t('profile_hint_pi_detected');
                else hint.innerHTML = '<i class="fas fa-exclamation-triangle" style="color:#e6b000;"></i> ' + t('profile_hint_open_pi');
            }
            if (publishAvatar) publishAvatar.textContent = 'GB';
            if (publishName) publishName.textContent = 'Global Bulk';
            if (publishHandle) publishHandle.textContent = '@globalbulk';
        }
    }

    function loadPiSession() { try { var stored = localStorage.getItem('pi_user'); if (stored) piUser = JSON.parse(stored); } catch (e) {} }

    function openAuthModal(message) { var modal = document.getElementById('authRequiredModal'); var msgEl = document.getElementById('authModalMessage'); if (msgEl) { msgEl.textContent = message || t('auth_default_msg'); msgEl.dataset.keep = message ? '1' : ''; } if (modal) modal.classList.add('open'); }
    function closeAuthModal() { var modal = document.getElementById('authRequiredModal'); if (modal) modal.classList.remove('open'); }

    function openPaymentModal() {
        var modal = document.getElementById('paymentModal');
        var summary = document.getElementById('paymentSummary');
        var amount = document.getElementById('paymentAmount');
        if (!summary) return;
        summary.innerHTML = cartItems.map(function(item) {
            return '<div class="payment-summary-item"><span class="name">' + escapeHtml(item.name) + '</span><span class="qty">×' + item.qty + '</span><span class="price">' + formatPrice(item.price * item.qty) + ' π</span></div>';
        }).join('');
        var total = cartItems.reduce(function(s, i) { return s + (i.price * i.qty); }, 0);
        amount.textContent = formatPrice(total) + ' π';
        modal.classList.add('open');
    }
    function closePaymentModal() { var modal = document.getElementById('paymentModal'); if (modal) modal.classList.remove('open'); }

    function requireAuth(actionName) {
        if (!piUser) {
            var messages = { 'panier': t('auth_cart_msg'), 'commande': t('auth_order_msg'), 'publier': t('auth_publish_msg'), 'contacter': t('auth_contact_msg') };
            openAuthModal(messages[actionName] || t('auth_default_msg'));
            return false;
        }
        if (!isProfileComplete()) {
            showToast(t('auth_complete_profile'), 'error');
            setTimeout(function() { openSideDrawer('mon-profil', t('menu_profile')); }, 300);
            return false;
        }
        return true;
    }

    function createPiPayment(amount, memo, metadata) {
        return new Promise(function(resolve, reject) {
            if (!piUser) { reject(new Error('Not connected')); return; }
            if (typeof Pi === 'undefined' || !Pi.createPayment) { reject(new Error('Pi SDK missing')); return; }
            Pi.createPayment({ amount: amount, memo: memo, metadata: metadata }, {
                onReadyForServerApproval: function(paymentId) { fetch('https://global-bulk-pi-backend.onrender.com/approve', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ paymentId: paymentId }) }).catch(function(e) { console.error(e); }); },
                onReadyForServerCompletion: function(paymentId, txid) { fetch('https://global-bulk-pi-backend.onrender.com/complete', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ paymentId: paymentId, txid: txid }) }).then(function(r) { return r.json(); }).then(function() { resolve({ paymentId: paymentId, txid: txid }); }).catch(function(error) { reject(error); }); },
                onCancel: function() { reject(new Error(t('payment_cancelled'))); },
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
                progress = 100; clearInterval(interval); text.textContent = t('loader_ready');
                setTimeout(function() { document.getElementById('globalLoader').classList.add('hidden'); document.getElementById('appContent').style.display = 'block'; if (typeof callback === 'function') callback(); }, 400);
            }
            if (bar) bar.style.width = progress + '%';
            if (text) text.textContent = t('loader_loading') + ' ' + progress + '%';
        }, 100);
    }

    function initSlider() {
        var slides = [
            { image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop', title: 'First Purchase', subtitle: 'Enjoy a Special Offer!', cta: currentLang === 'fr' ? 'Découvrir' : 'Discover' },
            { image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&h=600&fit=crop', title: currentLang === 'fr' ? 'Électronique de pointe' : 'Cutting-edge electronics', subtitle: currentLang === 'fr' ? 'Au meilleur prix' : 'At the best price', cta: currentLang === 'fr' ? 'Voir les offres' : 'View offers' },
            { image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&h=600&fit=crop', title: currentLang === 'fr' ? 'Automobile' : 'Automotive', subtitle: currentLang === 'fr' ? 'Pour professionnels' : 'For professionals', cta: currentLang === 'fr' ? 'Explorer' : 'Explore' }
        ];
        var track = document.getElementById('sliderTrack');
        var dotsContainer = document.getElementById('sliderDots');
        if (!track) return;
        var currentIndex = 0;
        track.innerHTML = slides.map(function(s) { return '<div class="slider-slide" style="background-image: url(' + s.image + ');"><div class="slide-overlay"></div><div class="slide-content"><h2>' + s.title + '</h2><p>' + s.subtitle + '</p><a href="#" class="btn">' + s.cta + ' <i class="fas fa-arrow-right"></i></a></div></div>'; }).join('');
        dotsContainer.innerHTML = slides.map(function(_, i) { return '<button class="dot' + (i === 0 ? ' active' : '') + '" data-index="' + i + '"></button>'; }).join('');
        function goToSlide(index) { if (index < 0) index = slides.length - 1; if (index >= slides.length) index = 0; currentIndex = index; track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)'; dotsContainer.querySelectorAll('.dot').forEach(function(dot, i) { dot.classList.toggle('active', i === currentIndex); }); }
        document.getElementById('sliderPrev').addEventListener('click', function() { goToSlide(currentIndex - 1); });
        document.getElementById('sliderNext').addEventListener('click', function() { goToSlide(currentIndex + 1); });
        dotsContainer.addEventListener('click', function(e) { var dot = e.target.closest('.dot'); if (dot) goToSlide(parseInt(dot.getAttribute('data-index'))); });
        setInterval(function() { goToSlide(currentIndex + 1); }, 5000);
    }

    function renderCategoryFilters() {
        var container = document.getElementById('categoryFilterList');
        if (!container) return;
        container.innerHTML = '';
        var allNames = [t('filter_all')].concat(categories.map(function(c) { return c.name; }));
        allNames.forEach(function(catName, index) {
            var btn = document.createElement('button');
            btn.className = 'filter-cat' + (index === 0 ? ' active' : '');
            btn.setAttribute('data-cat', index === 0 ? 'all' : catName);
            btn.textContent = catName;
            btn.addEventListener('click', function() { selectedCategory = btn.getAttribute('data-cat'); document.querySelectorAll('.filter-cat').forEach(function(b) { b.classList.remove('active'); if (b === btn) b.classList.add('active'); }); applyFilters(); });
            container.appendChild(btn);
        });
    }

    function renderProducts(list) {
        list = list || products;
        var grid = document.getElementById('productGrid');
        if (!grid) return;
        grid.innerHTML = list.map(function(p) {
            var verifiedBadge = p.verified ? '<span class="verified-badge"><i class="fas fa-check-circle"></i> ' + t('product_verified') + '</span>' : '';
            var images = (p.images && p.images.length > 0) ? p.images : [''];
            var imgsHtml = images.map(function(img, idx) { return '<img src="' + img + '" alt="' + escapeHtml(p.name) + '" loading="lazy" data-idx="' + idx + '" />'; }).join('');
            var dotsHtml = images.length > 1 ? '<div class="image-dots">' + images.map(function(_, i) { return '<span class="dot' + (i === 0 ? ' active' : '') + '"></span>'; }).join('') + '</div>' : '';
            var supplierLabel = p.ownerPiUid ? ('@' + String(p.ownerPiUid).substring(0, 8)) : p.supplier;
            return '<div class="card-product" onclick="showProductDetail(\'' + p.id + '\')">' +
                '<div class="image"><div class="image-track" data-id="' + p.id + '">' + imgsHtml + '</div>' + verifiedBadge + dotsHtml + '</div>' +
                '<div class="body">' +
                '<div class="title">' + escapeHtml(p.name) + '</div>' +
                '<div class="price">' + formatPrice(p.price) + ' ' + p.unit + ' <small>' + t('product_per_unit') + '</small></div>' +
                '<div class="meta"><span><i class="fas fa-box"></i> ' + t('product_min') + ': ' + p.minOrder + '</span><span><i class="fas fa-warehouse"></i> ' + formatNumber(p.stock) + '</span><span><i class="fas fa-star" style="color:var(--secondary);"></i> ' + p.rating + '</span></div>' +
                '<div style="font-size:12px;color:var(--text-muted);">' + escapeHtml(supplierLabel) + ' · ' + escapeHtml(p.country) + '</div>' +
                '<div class="actions"><button class="btn btn-primary btn-sm" onclick="event.stopPropagation();addToCart(\'' + p.id + '\')"><i class="fas fa-cart-plus"></i></button><button class="btn btn-outline btn-sm" onclick="event.stopPropagation();showProductDetail(\'' + p.id + '\')">' + (currentLang === 'fr' ? 'Voir' : 'View') + '</button></div></div></div>';
        }).join('');
        var countEl = document.getElementById('productCount');
        if (countEl) countEl.textContent = list.length + ' ' + t('products_count');
        initImageCarousels();
    }

    function initImageCarousels() {
        document.querySelectorAll('.image-track').forEach(function(track) {
            if (track._carouselInit) return;
            track._carouselInit = true;
            var card = track.closest('.card-product');
            if (!card) return;
            var dots = card.querySelectorAll('.image-dots .dot');
            if (dots.length === 0) return;
            track.addEventListener('scroll', function() { var w = track.clientWidth; if (w === 0) return; var idx = Math.round(track.scrollLeft / w); dots.forEach(function(d, i) { d.classList.toggle('active', i === idx); }); }, { passive: true });
        });
    }

    function renderSuppliers() {
        var grid = document.getElementById('supplierGrid');
        if (!grid) return;
        grid.innerHTML = suppliers.map(function(s) {
            return '<div class="card-supplier"><div class="avatar"><i class="fas fa-building"></i></div><div class="info"><div class="name">' + escapeHtml(s.name) + (s.verified ? ' <span class="badge badge-verified" style="font-size:10px;"><i class="fas fa-check-circle"></i></span>' : '') + '</div><div class="detail"><span><i class="fas fa-map-marker-alt"></i> ' + escapeHtml(s.country) + '</span><span><i class="fas fa-star" style="color:var(--secondary);"></i> ' + s.rating + '</span></div></div></div>';
        }).join('');
    }

    function setupFilters() {
        var countrySelect = document.getElementById('filterCountry');
        if (!countrySelect) return;
        countrySelect.innerHTML = '<option value="">🌍 ' + t('filter_all_countries') + '</option>';
        allCountries.forEach(function(c) { countrySelect.innerHTML += '<option value="' + c.name + '">' + c.flag + ' ' + c.name + '</option>'; });
        countrySelect.addEventListener('change', function() { selectedCountry = this.value; applyFilters(); });
    }

    function applyFilters() {
        var filtered = products.slice();
        if (selectedCountry) filtered = filtered.filter(function(p) { return p.country === selectedCountry; });
        if (selectedCategory && selectedCategory !== 'all') filtered = filtered.filter(function(p) { return p.category === selectedCategory; });
        renderProducts(filtered);
    }

    document.getElementById('searchToggle').addEventListener('click', function() { document.getElementById('searchDropdown').classList.toggle('open'); });
    document.getElementById('searchBtn').addEventListener('click', doSearch);
    document.getElementById('searchInput').addEventListener('keydown', function(e) { if (e.key === 'Enter') doSearch(); });

    function doSearch() {
        var q = document.getElementById('searchInput').value.trim().toLowerCase();
        if (!q) { showToast(t('search_enter_term'), 'error'); return; }
        var filtered = products.filter(function(p) { return p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || String(p.supplier || '').toLowerCase().includes(q); });
        if (filtered.length === 0) showToast(t('search_no_results'), 'error');
        else { renderProducts(filtered); showToast(filtered.length + ' ' + t('search_results'), 'success'); }
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
        var images = (p.images && p.images.length > 0) ? p.images : [''];
        var galleryHtml = images.map(function(img, idx) { return '<img src="' + img + '" class="gallery-img' + (idx === 0 ? ' active' : '') + '" data-idx="' + idx + '" />'; }).join('');
        content.innerHTML =
            '<div class="product-detail-grid">' +
            '<div class="gallery"><div class="main-image"><img id="pdMainImage" src="' + images[0] + '" /></div>' + (images.length > 1 ? '<div class="thumb-strip">' + galleryHtml + '</div>' : '') + '</div>' +
            '<div class="info"><h1>' + escapeHtml(p.name) + '</h1>' +
            '<div style="margin-bottom:10px;"><span class="badge badge-verified"><i class="fas fa-check-circle"></i> ' + (p.verified ? t('product_verified') : t('product_not_verified')) + '</span></div>' +
            '<div style="font-size:13px;color:var(--text-muted);margin-bottom:14px;"><i class="fas fa-building"></i> ' + escapeHtml(p.ownerPiUid || p.supplier) + ' · ' + escapeHtml(p.country) + '</div>' +
            '<div class="price-box"><div><span style="font-size:13px;color:var(--text-muted);">' + t('product_wholesale_price') + '</span><br><span style="font-size:28px;font-weight:700;color:var(--primary);">' + formatPrice(p.price) + ' ' + p.unit + '</span></div>' +
            '<div><span style="font-size:13px;color:var(--text-muted);">' + t('product_min_qty') + '</span><br><span style="font-size:20px;font-weight:600;">' + p.minOrder + ' ' + t('product_units') + '</span></div></div>' +
            '<div class="volume-pricing">' +
            '<div class="tier"><div style="font-size:12px;color:var(--text-muted);">' + p.minOrder + '+</div><div class="price">' + formatPrice(p.price) + ' Pi</div></div>' +
            '<div class="tier"><div style="font-size:12px;color:var(--text-muted);">' + (p.minOrder * 5) + '+</div><div class="price">' + formatPrice(p.price * 0.9) + ' Pi</div></div>' +
            '<div class="tier"><div style="font-size:12px;color:var(--text-muted);">' + (p.minOrder * 10) + '+</div><div class="price">' + formatPrice(p.price * 0.8) + ' Pi</div></div></div>' +
            '<div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:16px;"><button class="btn btn-primary" onclick="addToCart(\'' + p.id + '\')"><i class="fas fa-cart-plus"></i> ' + t('product_add_to_cart') + '</button></div></div></div>';
        var thumbs = content.querySelectorAll('.thumb-strip .gallery-img');
        var mainImg = content.querySelector('#pdMainImage');
        thumbs.forEach(function(t2) { t2.addEventListener('click', function() { if (mainImg) mainImg.src = t2.getAttribute('src'); thumbs.forEach(function(x) { x.classList.remove('active'); }); t2.classList.add('active'); }); });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.closeProductDetail = function() { showMainContent(); document.querySelectorAll('.bottom-nav .nav-item').forEach(function(b) { b.classList.remove('active'); }); document.querySelector('.bottom-nav .nav-item[data-page="home"]').classList.add('active'); };
    window.openPublish = function() { if (!requireAuth('publier')) return; hideMainContent(); document.getElementById('publishSection').style.display = 'block'; window.scrollTo({ top: 0, behavior: 'smooth' }); };
    window.closePublish = function() { showMainContent(); document.querySelectorAll('.bottom-nav .nav-item').forEach(function(b) { b.classList.remove('active'); }); document.querySelector('.bottom-nav .nav-item[data-page="home"]').classList.add('active'); };
    window.openProfile = function() { hideMainContent(); document.getElementById('profileSection').style.display = 'block'; updatePiUI(); window.scrollTo({ top: 0, behavior: 'smooth' }); };
    window.closeProfile = function() { showMainContent(); document.querySelectorAll('.bottom-nav .nav-item').forEach(function(b) { b.classList.remove('active'); }); document.querySelector('.bottom-nav .nav-item[data-page="home"]').classList.add('active'); };

    function openSideDrawer(tabId, title) {
        var drawer = document.getElementById('sideDrawer');
        var overlay = document.getElementById('sideDrawerOverlay');
        var titleEl = document.getElementById('sideDrawerTitle');
        var content = document.getElementById('sideDrawerContent');
        if (titleEl) titleEl.textContent = title;
        if (drawer) drawer.classList.add('open');
        if (overlay) overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        document.body.classList.add('drawer-open');

        if (tabId === 'mes-commandes' && piUser) {
            if (content) content.innerHTML = '<div style="text-align:center;padding:40px 20px;color:var(--text-muted);"><i class="fas fa-spinner fa-spin" style="font-size:32px;opacity:0.5;"></i></div>';
            var myOrders = userOrders.filter(function(o) { return o.seller_pi_uid === piUser.uid; });
            var buyerUids = myOrders.map(function(o) { return o.buyer_pi_uid; });
            loadBuyerProfiles(buyerUids).then(function(map) { buyerProfilesCache = map; if (content) { content.innerHTML = renderMesCommandes(); initMesCommandesEvents(); } });
        } else {
            if (content) content.innerHTML = renderSideDrawerContent(tabId);
        }

        if (tabId === 'livre-blanc') initDocDrawerEvents();
        if (tabId === 'mon-profil') initProfileFormEvents();
        if (tabId === 'mes-ventes') initMesVentesEvents();
        if (tabId === 'parametres') initSettingsEvents();
    }
    function closeSideDrawer() {
        var drawer = document.getElementById('sideDrawer');
        var overlay = document.getElementById('sideDrawerOverlay');
        if (drawer) drawer.classList.remove('open');
        if (overlay) overlay.classList.remove('open');
        document.body.style.overflow = '';
        document.body.classList.remove('drawer-open');
    }
    window.closeSideDrawer = closeSideDrawer;

    function initDocDrawerEvents() {
        var items = document.querySelectorAll('#sideDrawerContent .doc-item');
        for (var i = 0; i < items.length; i++) {
            (function(item) {
                item.addEventListener('click', function() {
                    var url = item.getAttribute('data-url');
                    var label = item.getAttribute('data-label');
                    if (url) window.location.href = url;
                    else showToast('« ' + label + ' » — ' + (currentLang === 'fr' ? 'bientôt disponible' : 'coming soon'), 'info');
                });
            })(items[i]);
        }
    }

    function initSettingsEvents() {
        var content = document.getElementById('sideDrawerContent');
        if (!content) return;
        content.querySelectorAll('[data-lang]').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var lang = btn.getAttribute('data-lang');
                if (lang === currentLang) return;
                setLang(lang);
                showToast(lang === 'fr' ? 'Langue changée en Français' : 'Language changed to English', 'success');
            });
        });
    }

    function initMesVentesEvents() {
        var container = document.getElementById('sideDrawerContent');
        if (!container) return;
        container.querySelectorAll('.drawer-product-card').forEach(function(card) {
            var id = card.getAttribute('data-id');
            var editBtn = card.querySelector('[data-action="edit"]');
            var delBtn = card.querySelector('[data-action="delete"]');
            if (editBtn) editBtn.addEventListener('click', function() { openEditProductModal(id); });
            if (delBtn) delBtn.addEventListener('click', function() { confirmDeleteProduct(id); });
        });
    }

    function openEditProductModal(id) {
        var p = products.find(function(x) { return String(x.id) === String(id); });
        if (!p) return;
        var modal = document.getElementById('editProductModal');
        document.getElementById('epId').value = id;
        document.getElementById('epName').value = p.name || '';
        document.getElementById('epDescription').value = p.description || '';
        document.getElementById('epPrice').value = p.price || 0;
        document.getElementById('epUnit').value = p.unit || 'Pi';
        document.getElementById('epMinOrder').value = p.minOrder || 1;
        document.getElementById('epStock').value = p.stock || 0;
        var catSel = document.getElementById('epCategory');
        catSel.innerHTML = categories.map(function(c) { return '<option value="' + c.name + '"' + (c.name === p.category ? ' selected' : '') + '>' + c.name + '</option>'; }).join('');
        var countrySel = document.getElementById('epCountry');
        countrySel.innerHTML = allCountries.map(function(c) { return '<option value="' + c.name + '"' + (c.name === p.country ? ' selected' : '') + '>' + c.flag + ' ' + c.name + '</option>'; }).join('');
        modal.classList.add('open');
    }
    function closeEditProductModal() { var modal = document.getElementById('editProductModal'); if (modal) modal.classList.remove('open'); }

    function confirmDeleteProduct(id) {
        var p = products.find(function(x) { return String(x.id) === String(id); });
        var name = p ? p.name : '';
        if (!window.confirm(t('edit_delete_confirm') + ' « ' + name + ' » ?')) return;
        showToast(t('edit_deleting'), 'info');
        deleteProductFromSupabase(id).then(function() {
            products = products.filter(function(x) { return String(x.id) !== String(id); });
            renderProducts(); applyFilters();
            showToast(t('edit_deleted'), 'success');
            openSideDrawer('mes-ventes', t('menu_sales'));
        }).catch(function(err) { console.error('[Delete] error', err); showToast(t('toast_error') + ' : ' + err.message, 'error'); });
    }

    function initEditProductForm() {
        var modal = document.getElementById('editProductModal');
        var form = document.getElementById('editProductForm');
        var closeBtn = document.getElementById('editProductClose');
        var cancelBtn = document.getElementById('editProductCancel');
        if (closeBtn) closeBtn.addEventListener('click', closeEditProductModal);
        if (cancelBtn) cancelBtn.addEventListener('click', closeEditProductModal);
        if (modal) modal.addEventListener('click', function(e) { if (e.target === modal) closeEditProductModal(); });
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                var id = document.getElementById('epId').value;
                var data = { name: document.getElementById('epName').value.trim(), description: document.getElementById('epDescription').value.trim(), price: parseFloat(document.getElementById('epPrice').value), unit: document.getElementById('epUnit').value, minOrder: parseInt(document.getElementById('epMinOrder').value), stock: parseInt(document.getElementById('epStock').value), category: document.getElementById('epCategory').value, country: document.getElementById('epCountry').value };
                if (!data.name || !data.category || isNaN(data.price) || isNaN(data.minOrder) || isNaN(data.stock)) { showToast(t('profile_fill_all'), 'error'); return; }
                var submitBtn = form.querySelector('button[type="submit"]');
                if (submitBtn) { submitBtn.disabled = true; submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + t('edit_saving'); }
                updateProductInSupabase(id, data).then(function() {
                    var p = products.find(function(x) { return String(x.id) === String(id); });
                    if (p) { p.name = data.name; p.description = data.description; p.price = data.price; p.unit = data.unit; p.minOrder = data.minOrder; p.stock = data.stock; p.category = data.category; p.country = data.country; }
                    renderProducts(); applyFilters();
                    closeEditProductModal();
                    showToast(t('edit_success'), 'success');
                    openSideDrawer('mes-ventes', t('menu_sales'));
                }).catch(function(err) { console.error('[Edit] error', err); showToast(t('toast_error') + ' : ' + err.message, 'error'); })
                  .finally(function() { if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = '<i class="fas fa-save"></i> ' + t('edit_save'); } });
            });
        }
    }

    function renderProfileForm() {
        if (!piUser) return '<div class="empty-state"><i class="fas fa-user-slash"></i><p>' + t('profile_not_connected_msg') + '</p></div>';
        var p = userProfile || {};
        var complete = isProfileComplete();
        var statusHtml = complete ? '<div class="profile-status-ok"><i class="fas fa-check-circle"></i> ' + t('profile_status_ok') + '</div>' : '<div class="profile-status-warn"><i class="fas fa-exclamation-triangle"></i> ' + t('profile_status_warn') + '</div>';
        if (!TEXTS[currentLang].profile_status_ok) {
            statusHtml = complete ? '<div class="profile-status-ok"><i class="fas fa-check-circle"></i> ' + (currentLang === 'fr' ? 'Profil complété' : 'Profile completed') + '</div>' : '<div class="profile-status-warn"><i class="fas fa-exclamation-triangle"></i> ' + (currentLang === 'fr' ? 'Profil à compléter' : 'Profile to complete') + '</div>';
        }
        return '<h3><i class="fas fa-id-card"></i> ' + t('profile_form_title') + '</h3>' +
            '<p style="color:var(--text-muted);font-size:13px;margin-bottom:14px;line-height:1.5;">' + t('profile_form_intro') + '</p>' +
            statusHtml +
            '<form id="profileForm" class="profile-form" novalidate>' +
                '<div class="form-group"><label>' + t('profile_field_lastname') + ' <span class="req">*</span></label><input type="text" id="pfNom" value="' + escapeHtml(p.nom) + '" required /></div>' +
                '<div class="form-group"><label>' + t('profile_field_firstname') + ' <span class="req">*</span></label><input type="text" id="pfPostNom" value="' + escapeHtml(p.post_nom) + '" required /></div>' +
                '<div class="form-group"><label>' + t('profile_field_email') + ' <span class="req">*</span></label><input type="email" id="pfEmail" value="' + escapeHtml(p.email) + '" required /></div>' +
                '<div class="form-group"><label>' + t('profile_field_phone') + ' <span class="req">*</span></label><input type="tel" id="pfPhone" value="' + escapeHtml(p.phone) + '" placeholder="+243 ..." required /></div>' +
                '<div class="form-group"><label>' + t('profile_field_address') + ' <span class="req">*</span></label><textarea id="pfAddress" rows="3" placeholder="' + t('profile_field_address_placeholder') + '" required>' + escapeHtml(p.adresse) + '</textarea></div>' +
                '<div class="profile-note"><i class="fas fa-info-circle"></i><span>' + t('profile_note') + '</span></div>' +
                '<button type="submit" class="btn btn-primary btn-block publish-submit" style="margin-top:16px;"><i class="fas fa-save"></i> ' + (complete ? t('profile_update') : t('profile_save')) + '</button>' +
            '</form>';
    }

    function initProfileFormEvents() {
        var form = document.getElementById('profileForm');
        if (!form) return;
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (!piUser) { showToast(t('profile_not_connected_msg'), 'error'); return; }
            var nom = document.getElementById('pfNom').value.trim();
            var postNom = document.getElementById('pfPostNom').value.trim();
            var email = document.getElementById('pfEmail').value.trim();
            var phone = document.getElementById('pfPhone').value.trim();
            var address = document.getElementById('pfAddress').value.trim();
            if (!nom || !postNom || !email || !phone || !address) { showToast(t('profile_fill_all'), 'error'); return; }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showToast(t('profile_invalid_email'), 'error'); return; }
            var btn = form.querySelector('button[type="submit"]');
            if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + t('profile_saving'); }
            saveProfileToSupabase({ nom: nom, postNom: postNom, email: email, phone: phone, address: address })
                .then(function() {
                    showToast(t('profile_saved'), 'success');
                    updatePiUI();
                    var content = document.getElementById('sideDrawerContent');
                    if (content) { content.innerHTML = renderProfileForm(); initProfileFormEvents(); }
                })
                .catch(function(err) { console.error(err); showToast(t('toast_error') + ' : ' + (err.message || '?'), 'error'); })
                .finally(function() { if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-save"></i> ' + (isProfileComplete() ? t('profile_update') : t('profile_save')); } });
        });
    }

    function getProductImageForItem(itemId, productSnapshot) {
        if (productSnapshot && productSnapshot.image) return productSnapshot.image;
        var p = products.find(function(x) { return String(x.id) === String(itemId); });
        if (p && p.images && p.images[0]) return p.images[0];
        return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" fill="%23F0F2F5"/><text x="40" y="50" text-anchor="middle" font-size="32" fill="%236b7a8f">📦</text></svg>';
    }

    function renderMesAchats() {
        if (!piUser) return '<div class="empty-state"><i class="fas fa-user-slash"></i><p>' + t('profile_not_connected_msg') + '</p></div>';
        var achats = userOrders.filter(function(o) { return o.buyer_pi_uid === piUser.uid; });
        var html = '<h3><i class="fas fa-shopping-bag"></i> ' + t('purchases_title') + '</h3>';
        if (achats.length === 0) { html += '<div class="empty-state" style="padding:40px 20px;"><i class="fas fa-shopping-bag" style="font-size:48px;margin-bottom:12px;opacity:0.25;"></i><p style="font-size:14px;">' + t('purchases_empty') + '</p></div>'; return html; }
        html += '<p style="color:var(--text-muted);font-size:12.5px;margin-bottom:14px;">' + achats.length + ' ' + t('purchases_count') + '</p>';
        achats.forEach(function(o) {
            var date = formatDateFr(o.created_at);
            var items = o.items || [];
            var itemsHtml = items.map(function(it) {
                var img = getProductImageForItem(it.id, it);
                return '<div class="order-item"><div class="order-item-img"><img src="' + img + '" alt="" /></div><div class="order-item-body"><div class="order-item-name">' + escapeHtml(it.name) + '</div><div class="order-item-meta">' + it.qty + ' × ' + formatPrice(it.price) + ' π</div></div><div class="order-item-sub">' + formatPrice(it.qty * it.price) + ' π</div></div>';
            }).join('');
            var statusCls = (o.status === 'shipped' || o.status === 'delivered') ? 'order-status shipped' : 'order-status';
            html += '<div class="order-card">' +
                '<div class="order-header"><div><i class="fas fa-receipt"></i> ' + date + '</div><span class="' + statusCls + '">' + escapeHtml(statusLabel(o.status)) + '</span></div>' +
                '<div class="order-items">' + itemsHtml + '</div>' +
                '<div class="order-total"><span>' + t('cart_total') + '</span><strong>' + formatPrice(o.total) + ' π</strong></div></div>';
        });
        return html;
    }

    function renderMesVentes() {
        if (!piUser) return '<div class="empty-state"><i class="fas fa-user-slash"></i><p>' + t('profile_not_connected_msg') + '</p></div>';
        var myProducts = products.filter(function(p) { return p.ownerPiUid === piUser.uid; });
        var html = '<h3><i class="fas fa-store"></i> ' + t('sales_title') + '</h3>';
        if (myProducts.length === 0) { html += '<div class="empty-state" style="padding:40px 20px;"><i class="fas fa-box-open" style="font-size:48px;margin-bottom:12px;opacity:0.25;"></i><p style="font-size:14px;">' + t('sales_empty') + '</p><button class="btn btn-primary" style="margin-top:14px;" onclick="closeSideDrawer(); window.openPublish();"><i class="fas fa-plus-circle"></i> ' + t('sales_publish_cta') + '</button></div>'; return html; }
        html += '<p style="color:var(--text-muted);font-size:12.5px;margin-bottom:14px;">' + myProducts.length + ' ' + t('sales_count') + '</p>';
        myProducts.forEach(function(p) {
            var img = p.images && p.images[0] ? p.images[0] : 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" fill="%23F0F2F5"/></svg>';
            html += '<div class="drawer-product-card" data-id="' + p.id + '">' +
                '<div class="dpc-img"><img src="' + img + '" alt="" /></div>' +
                '<div class="dpc-info"><div class="dpc-name">' + escapeHtml(p.name) + '</div><div class="dpc-price">' + formatPrice(p.price) + ' ' + p.unit + '</div>' +
                '<div class="dpc-meta"><span><i class="fas fa-box"></i> ' + t('sales_stock') + ': ' + p.stock + '</span><span><i class="fas fa-tag"></i> ' + escapeHtml(p.category) + '</span></div>' +
                '<div class="dpc-actions"><button type="button" class="dpc-btn dpc-edit" data-action="edit"><i class="fas fa-edit"></i> ' + t('sales_edit') + '</button><button type="button" class="dpc-btn dpc-delete" data-action="delete"><i class="fas fa-trash"></i> ' + t('sales_delete') + '</button></div></div></div>';
        });
        return html;
    }

    function renderMesCommandes() {
        if (!piUser) return '<div class="empty-state"><i class="fas fa-user-slash"></i><p>' + t('profile_not_connected_msg') + '</p></div>';
        var allCommandes = userOrders.filter(function(o) { return o.seller_pi_uid === piUser.uid; });
        var pending = allCommandes.filter(function(o) { return o.status !== 'shipped' && o.status !== 'delivered'; });
        var shipped = allCommandes.filter(function(o) { return o.status === 'shipped' || o.status === 'delivered'; });
        var currentList = (currentCommandesTab === 'shipped') ? shipped : pending;

        var html = '<h3><i class="fas fa-clipboard-list"></i> ' + t('orders_title') + '</h3>';
        html += '<div class="commandes-tabs">' +
            '<button class="cmd-tab' + (currentCommandesTab === 'pending' ? ' active' : '') + '" data-cmdtab="pending"><i class="fas fa-hourglass-half"></i> ' + t('orders_pending_tab') + ' <span class="cmd-count">' + pending.length + '</span></button>' +
            '<button class="cmd-tab' + (currentCommandesTab === 'shipped' ? ' active' : '') + '" data-cmdtab="shipped"><i class="fas fa-truck"></i> ' + t('orders_shipped_tab') + ' <span class="cmd-count">' + shipped.length + '</span></button>' +
        '</div>';

        if (currentList.length === 0) {
            var emptyMsg = currentCommandesTab === 'pending' ? t('orders_pending_empty') : t('orders_shipped_empty');
            var emptyIcon = currentCommandesTab === 'pending' ? 'fa-hourglass-half' : 'fa-truck';
            html += '<div class="empty-state" style="padding:40px 20px;"><i class="fas ' + emptyIcon + '" style="font-size:48px;margin-bottom:12px;opacity:0.25;"></i><p style="font-size:14px;">' + emptyMsg + '</p></div>';
            return html;
        }

        currentList.forEach(function(o) {
            var date = formatDateFr(o.created_at);
            var items = o.items || [];
            var buyer = buyerProfilesCache[o.buyer_pi_uid] || null;
            var deliveryHtml = '';
            if (buyer) {
                var fullName = [buyer.nom, buyer.post_nom].filter(Boolean).join(' ') || 'Client';
                var email = buyer.email || '—';
                var phone = buyer.phone || '—';
                var addr = buyer.adresse || '—';
                deliveryHtml = '<div class="delivery-box"><div class="delivery-title"><i class="fas fa-truck"></i> ' + t('orders_delivery_to') + '</div>' +
                    '<div class="delivery-row"><i class="fas fa-user"></i><span><strong>' + escapeHtml(fullName) + '</strong></span></div>' +
                    '<div class="delivery-row"><i class="fas fa-phone"></i><span><a href="tel:' + escapeHtml(phone) + '">' + escapeHtml(phone) + '</a></span></div>' +
                    '<div class="delivery-row"><i class="fas fa-envelope"></i><span><a href="mailto:' + escapeHtml(email) + '">' + escapeHtml(email) + '</a></span></div>' +
                    '<div class="delivery-row"><i class="fas fa-map-marker-alt"></i><span class="delivery-address">' + escapeHtml(addr) + '</span></div></div>';
            } else {
                deliveryHtml = '<div class="delivery-box delivery-warn"><div class="delivery-title"><i class="fas fa-exclamation-triangle"></i> ' + t('orders_buyer_unavailable') + '</div><div class="delivery-row"><span style="font-size:12.5px;">' + t('orders_uid') + ': ' + escapeHtml(o.buyer_pi_uid || '') + '</span></div></div>';
            }
            var itemsHtml = items.map(function(it) {
                var img = getProductImageForItem(it.id, it);
                return '<div class="order-item"><div class="order-item-img"><img src="' + img + '" alt="" /></div><div class="order-item-body"><div class="order-item-name">' + escapeHtml(it.name) + '</div><div class="order-item-meta"><strong>' + it.qty + '</strong> × ' + formatPrice(it.price) + ' π</div></div><div class="order-item-sub">' + formatPrice(it.qty * it.price) + ' π</div></div>';
            }).join('');
            var statusCls = (o.status === 'shipped' || o.status === 'delivered') ? 'order-status shipped' : 'order-status';
            var actionBtn = '';
            if (currentCommandesTab === 'pending') actionBtn = '<button type="button" class="ship-btn" data-action="ship" data-order-id="' + o.id + '"><i class="fas fa-truck"></i> ' + t('orders_mark_shipped') + '</button>';
            else actionBtn = '<div class="ship-done"><i class="fas fa-check-circle"></i> ' + t('orders_shipped_done') + '</div>';
            html += '<div class="order-card seller-order">' +
                '<div class="order-header"><div><i class="fas fa-receipt"></i> ' + date + '</div><span class="' + statusCls + '">' + escapeHtml(statusLabel(o.status)) + '</span></div>' +
                deliveryHtml +
                '<div class="order-subtitle"><i class="fas fa-box-open"></i> ' + t('orders_products_ordered') + ' (' + items.length + ')</div>' +
                '<div class="order-items">' + itemsHtml + '</div>' +
                '<div class="order-total"><span>' + t('orders_total_received') + '</span><strong>' + formatPrice(o.total) + ' π</strong></div>' +
                actionBtn + '</div>';
        });
        return html;
    }

    function initMesCommandesEvents() {
        var content = document.getElementById('sideDrawerContent');
        if (!content) return;
        content.querySelectorAll('.cmd-tab').forEach(function(btn) {
            btn.addEventListener('click', function() { currentCommandesTab = btn.getAttribute('data-cmdtab'); content.innerHTML = renderMesCommandes(); initMesCommandesEvents(); });
        });
        content.querySelectorAll('[data-action="ship"]').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var orderId = btn.getAttribute('data-order-id');
                if (!orderId) return;
                if (!window.confirm(t('orders_ship_confirm'))) return;
                markOrderAsShipped(orderId);
            });
        });
    }

    function markOrderAsShipped(orderId) {
        if (!piUser) return;
        var btn = document.querySelector('[data-order-id="' + orderId + '"]');
        if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + t('orders_ship_processing'); }
        updateOrderStatus(orderId, 'shipped')
            .then(function() {
                var o = userOrders.find(function(x) { return String(x.id) === String(orderId); });
                if (o) o.status = 'shipped';
                return saveHistoryToSupabase({ type: 'vente', description: t('history_shipped') + ' (' + (o ? o.items.length : '') + ')', amount: o ? o.total : null, meta: { order_id: orderId } }).catch(function(e) { console.error('[History ship]', e); });
            })
            .then(function() { return loadHistoryFromSupabase(); })
            .then(function() {
                showToast('✅ ' + t('orders_ship_success'), 'success');
                currentCommandesTab = 'shipped';
                var content = document.getElementById('sideDrawerContent');
                if (content) { content.innerHTML = renderMesCommandes(); initMesCommandesEvents(); }
            })
            .catch(function(err) { console.error('[Ship] error', err); showToast(t('toast_error') + ' : ' + (err.message || t('orders_ship_error')), 'error'); if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-truck"></i> ' + t('orders_mark_shipped'); } });
    }

    function renderHistorique() {
        if (!piUser) return '<div class="empty-state"><i class="fas fa-user-slash"></i><p>' + t('profile_not_connected_msg') + '</p></div>';
        var html = '<h3><i class="fas fa-history"></i> ' + t('history_title') + '</h3>';
        if (userHistory.length === 0) { html += '<div class="empty-state" style="padding:40px 20px;"><i class="fas fa-receipt" style="font-size:48px;margin-bottom:12px;opacity:0.25;"></i><p style="font-size:14px;">' + t('history_empty') + '</p></div>'; return html; }
        html += '<p style="color:var(--text-muted);font-size:12.5px;margin-bottom:14px;">' + userHistory.length + ' ' + t('history_count') + '</p>';
        userHistory.forEach(function(h) {
            var type = h.type || 'info';
            var iconClass = type === 'achat' ? 'achat' : (type === 'vente' ? 'vente' : (type === 'publication' ? 'publication' : ''));
            var iconFa = type === 'achat' ? 'fa-shopping-bag' : (type === 'vente' ? 'fa-store' : (type === 'publication' ? 'fa-box' : 'fa-circle-info'));
            var date = formatDateFr(h.created_at);
            var amount = h.amount ? formatPrice(h.amount) + ' π' : '';
            html += '<div class="history-entry"><div class="he-icon ' + iconClass + '"><i class="fas ' + iconFa + '"></i></div><div class="he-body"><div class="he-desc">' + escapeHtml(h.description || '') + '</div><div class="he-meta">' + date + '</div></div>' + (amount ? '<div class="he-amount">' + amount + '</div>' : '') + '</div>';
        });
        return html;
    }

    function renderSettings() {
        var html = '<h3><i class="fas fa-sliders-h"></i> ' + t('settings_title') + '</h3>';
        // Langue
        html += '<div style="margin-bottom:20px;">';
        html += '<div style="font-size:12px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">' + t('settings_language') + '</div>';
        html += '<div class="lang-switcher">' +
            '<button type="button" class="lang-btn' + (currentLang === 'en' ? ' active' : '') + '" data-lang="en"><span class="lang-flag">🇬🇧</span> English</button>' +
            '<button type="button" class="lang-btn' + (currentLang === 'fr' ? ' active' : '') + '" data-lang="fr"><span class="lang-flag">🇫🇷</span> Français</button>' +
        '</div>';
        html += '</div>';
        // Autres paramètres
        html += '<div class="info-item"><i class="fas fa-bell"></i><span class="label">' + t('settings_notifications') + '</span><span class="value">' + t('settings_enabled') + '</span></div>';
        html += '<div class="info-item"><i class="fas fa-palette"></i><span class="label">' + t('settings_theme') + '</span><span class="value">' + t('settings_light') + '</span></div>';
        return html;
    }

    function renderSideDrawerContent(tabId) {
        switch(tabId) {
            case 'mon-profil': return renderProfileForm();
            case 'mes-achats': return renderMesAchats();
            case 'mes-ventes': return renderMesVentes();
            case 'mes-commandes': return renderMesCommandes();
            case 'historique': return renderHistorique();
            case 'parametres': return renderSettings();
            case 'langues': return renderSettings();
            case 'livre-blanc':
                return '<h3><i class="fas fa-store"></i> ' + t('whitepaper_title') + '</h3>' +
                    '<p style="color:var(--text-muted);font-size:13.5px;margin-bottom:18px;line-height:1.5;">' + t('whitepaper_intro') + '</p>' +
                    '<button type="button" class="doc-item" data-url="whitepaper.html" data-label="Whitepaper"><i class="fas fa-file-pdf"></i><span class="label">' + t('whitepaper_title') + ' 2026</span><span class="value">' + t('whitepaper_open') + '</span><i class="fas fa-chevron-right doc-arrow"></i></button>' +
                    '<div style="margin-top:20px;padding:16px;background:var(--gray-light);border-radius:12px;"><div style="font-size:12px;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">' + t('whitepaper_official') + '</div><div style="font-size:14px;font-weight:600;color:var(--primary);">' + t('whitepaper_subtitle') + '</div><div style="font-size:12.5px;color:var(--text-muted);margin-top:4px;line-height:1.5;">' + t('whitepaper_meta') + '</div></div>';
            default: return '<p>—</p>';
        }
    }

    document.querySelectorAll('.menu-item').forEach(function(item) {
        item.addEventListener('click', function() {
            var tab = this.getAttribute('data-tab');
            var label = this.querySelector('.menu-label').textContent;
            if (tab === 'faq') { window.location.href = 'faq.html'; return; }
            if (tab === 'mes-commandes') { currentCommandesTab = 'pending'; }
            openSideDrawer(tab, label);
        });
    });

    document.getElementById('sideDrawerClose').addEventListener('click', closeSideDrawer);
    document.getElementById('sideDrawerBack').addEventListener('click', closeSideDrawer);
    document.getElementById('sideDrawerOverlay').addEventListener('click', closeSideDrawer);

    var btnPiConnect = document.getElementById('piActionBtn');
    if (btnPiConnect) { btnPiConnect.addEventListener('click', function(e) { e.preventDefault(); if (piUser) disconnectPi(); else connectPi(); }); }

    document.getElementById('authModalConnectBtn').addEventListener('click', function() { closeAuthModal(); window.openProfile(); setTimeout(function() { var card = document.getElementById('piAccountCard'); if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 300); });
    document.getElementById('authModalCancelBtn').addEventListener('click', closeAuthModal);
    document.getElementById('paymentCancelBtn').addEventListener('click', closePaymentModal);
    document.getElementById('paymentConfirmBtn').addEventListener('click', function() { closePaymentModal(); executePayment(); });

    var uploadedImages = [];
    var MAX_IMAGES = 4;

    function compressImage(file, maxWidth, quality) {
        return new Promise(function(resolve) {
            var reader = new FileReader();
            reader.onload = function(ev) {
                var img = new Image();
                img.onload = function() {
                    var canvas = document.createElement('canvas');
                    var w = img.width, h = img.height;
                    if (w > maxWidth) { h = Math.round(h * maxWidth / w); w = maxWidth; }
                    canvas.width = w; canvas.height = h;
                    canvas.getContext('2d').drawImage(img, 0, 0, w, h);
                    resolve(canvas.toDataURL('image/jpeg', quality));
                };
                img.onerror = function() { resolve(ev.target.result); };
                img.src = ev.target.result;
            };
            reader.onerror = function() { resolve(null); };
            reader.readAsDataURL(file);
        });
    }

    var pImages = document.getElementById('pImages');
    if (pImages) {
        pImages.addEventListener('change', function(e) {
            var files = Array.prototype.slice.call(e.target.files);
            if (uploadedImages.length + files.length > MAX_IMAGES) { showToast(t('toast_max_images'), 'error'); this.value = ''; return; }
            var self = this;
            var tasks = files.filter(function(f) { return f.type.indexOf('image/') === 0; }).map(function(f) { return compressImage(f, 800, 0.7); });
            Promise.all(tasks).then(function(results) { results.forEach(function(dataUrl) { if (dataUrl) uploadedImages.push(dataUrl); }); renderUploadPreview(); self.value = ''; });
        });
    }

    function renderUploadPreview() {
        var preview = document.getElementById('uploadPreview');
        if (!preview) return;
        preview.innerHTML = uploadedImages.map(function(img, index) {
            return '<div class="preview-thumb"><img src="' + img + '" /><button type="button" class="remove-btn" onclick="removeImage(' + index + ')" aria-label="Delete"><i class="fas fa-times"></i></button></div>';
        }).join('');
    }
    window.removeImage = function(index) { uploadedImages.splice(index, 1); renderUploadPreview(); showToast(t('toast_photo_deleted'), 'info'); };

    window.addToCart = function(id) {
        if (!requireAuth('panier')) return;
        var p = products.find(function(x) { return String(x.id) === String(id); });
        if (!p) return;
        var existing = cartItems.find(function(item) { return String(item.id) === String(id); });
        if (existing) existing.qty += p.minOrder;
        else cartItems.push({ id: p.id, name: p.name, qty: p.minOrder, price: p.price, image: p.images ? p.images[0] : '', ownerPiUid: p.ownerPiUid || null });
        updateCartBadge();
        showToast(p.name + ' ' + t('toast_product_added'), 'success');
        if (isCartOpen) renderCartItems();
    };
    window.removeFromCart = function(id) { cartItems = cartItems.filter(function(item) { return String(item.id) !== String(id); }); updateCartBadge(); renderCartItems(); };
    window.updateQty = function(id, delta) { var item = cartItems.find(function(i) { return String(i.id) === String(id); }); if (!item) return; item.qty += delta; if (item.qty <= 0) { removeFromCart(id); return; } renderCartItems(); updateCartBadge(); };
    function renderCartItems() {
        var body = document.getElementById('cartBody');
        var footer = document.getElementById('cartFooter');
        var totalEl = document.getElementById('cartTotalPrice');
        if (!body) return;
        if (cartItems.length === 0) { body.innerHTML = '<div class="cart-empty"><i class="fas fa-shopping-bag"></i><p>' + t('cart_empty') + '</p></div>'; footer.style.display = 'none'; return; }
        body.innerHTML = cartItems.map(function(item) {
            return '<div class="cart-item"><div class="item-image"><img src="' + (item.image || '') + '" /></div>' +
                '<div class="item-info"><div class="name">' + escapeHtml(item.name) + '</div>' +
                '<div class="price">' + formatPrice(item.price * item.qty) + ' π</div>' +
                '<div class="item-qty"><button onclick="updateQty(\'' + item.id + '\',-1)">-</button><span>' + item.qty + '</span><button onclick="updateQty(\'' + item.id + '\',1)">+</button></div></div>' +
                '<button class="btn btn-sm btn-danger" onclick="removeFromCart(\'' + item.id + '\')"><i class="fas fa-trash"></i></button></div>';
        }).join('');
        footer.style.display = 'block';
        var total = cartItems.reduce(function(s, i) { return s + (i.price * i.qty); }, 0);
        totalEl.textContent = formatPrice(total) + ' π';
    }
    function updateCartBadge() {
        var total = cartItems.reduce(function(s, i) { return s + i.qty; }, 0);
        document.querySelectorAll('.badge-count').forEach(function(el) { var parent = el.closest('.icon-btn'); if (parent && parent.querySelector('.fa-cart-shopping')) { el.textContent = total; el.style.display = total > 0 ? 'flex' : 'none'; } });
    }
    var isCartOpen = false;
    function toggleCart() { isCartOpen = !isCartOpen; var overlay = document.getElementById('cartOverlay'); if (isCartOpen) { overlay.classList.add('open'); renderCartItems(); } else overlay.classList.remove('open'); }
    document.getElementById('cartToggle').addEventListener('click', toggleCart);
    document.getElementById('cartClose').addEventListener('click', toggleCart);
    document.getElementById('cartOverlay').addEventListener('click', function(e) { if (e.target === this) toggleCart(); });

    document.getElementById('checkoutBtn').addEventListener('click', function() { if (!requireAuth('commande')) return; if (cartItems.length === 0) { showToast(t('cart_empty'), 'error'); return; } toggleCart(); setTimeout(openPaymentModal, 300); });

    function executePayment() {
        var total = cartItems.reduce(function(s, i) { return s + (i.price * i.qty); }, 0);
        var totalFixed = parseFloat(total.toFixed(6));
        if (totalFixed < 0.000001) totalFixed = 0.000001;
        var itemsSnapshot = cartItems.slice();
        showToast(t('payment_processing'), 'info');
        createPiPayment(totalFixed, 'Global Bulk - ' + cartItems.length + ' item(s)', {
            items: cartItems.map(function(i) { return { id: i.id, name: i.name, qty: i.qty, price: i.price, image: i.image }; }),
            total: totalFixed, username: piUser.username, timestamp: Date.now()
        })
        .then(function(result) {
            var sellerUid = itemsSnapshot[0] && itemsSnapshot[0].ownerPiUid ? itemsSnapshot[0].ownerPiUid : null;
            var orderPayload = { seller_pi_uid: sellerUid, items: itemsSnapshot.map(function(i) { return { id: i.id, name: i.name, qty: i.qty, price: i.price, image: i.image || null }; }), total: totalFixed, status: 'paid', payment_id: result.paymentId, txid: result.txid };
            return saveOrderToSupabase(orderPayload).then(function() {
                return saveHistoryToSupabase({ type: 'achat', description: t('history_purchase') + ' ' + itemsSnapshot.length + ' article(s)', amount: totalFixed, meta: { payment_id: result.paymentId, txid: result.txid } });
            }).then(function() { return Promise.all([loadOrdersFromSupabase(), loadHistoryFromSupabase()]); })
              .then(function() { showToast('✅ ' + t('payment_success'), 'success'); cartItems = []; updateCartBadge(); renderCartItems(); });
        })
        .catch(function(err) { console.error('[Paiement] error', err); if (/cancel/i.test(err.message) || /annul/i.test(err.message)) showToast(t('payment_cancelled'), 'info'); else showToast(t('toast_error') + ' : ' + (err.message || t('payment_error')), 'error'); });
    }

    function animateStats() { document.querySelectorAll('.stats-grid .stat-item .number').forEach(function(el) { var target = parseInt(el.getAttribute('data-count')); var current = 0; var step = Math.ceil(target / 60); var interval = setInterval(function() { current += step; if (current >= target) { current = target; clearInterval(interval); } el.textContent = formatNumber(current); }, 25); }); }

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
            ids.forEach(function(id) { var el = document.getElementById(id); if (el) el.style.display = 'block'; });
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
        if (!name || !description || !category || isNaN(price) || isNaN(minOrder) || isNaN(stock) || !supplier || !country) { showToast(t('publish_fill_all'), 'error'); return; }
        var images = uploadedImages.length > 0 ? uploadedImages : [''];
        var newProduct = { name: name, description: description, price: price, unit: document.getElementById('pUnit').value, minOrder: minOrder, stock: stock, country: country, category: category, images: images, supplier: piUser.username, ownerPiUid: piUser.uid, verified: true, rating: 4.5 };
        var submitBtn = this.querySelector('button[type="submit"]');
        if (submitBtn) { submitBtn.disabled = true; submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + t('publish_publishing'); }
        saveProductToSupabase(newProduct)
            .then(function(rows) {
                var saved = rows && rows[0] ? rows[0] : null;
                var localProduct = { id: saved ? saved.id : products.length + 1, name: name, description: description, price: price, unit: newProduct.unit, minOrder: minOrder, stock: stock, supplier: piUser.username, ownerPiUid: piUser.uid, country: country, verified: true, rating: 4.5, category: category, images: images, _fromSupa: true };
                products.unshift(localProduct);
                renderProducts(); applyFilters();
                return saveHistoryToSupabase({ type: 'publication', description: (currentLang === 'fr' ? 'Publication : ' : 'Publish: ') + name, amount: null, meta: { product_id: localProduct.id } });
            })
            .then(function() { return loadHistoryFromSupabase(); })
            .then(function() { showToast('✅ ' + t('publish_success'), 'success'); uploadedImages = []; document.getElementById('uploadPreview').innerHTML = ''; document.getElementById('publishForm').reset(); window.closePublish(); })
            .catch(function(err) { console.error('[Publish] error', err); showToast(t('toast_error') + ' : ' + (err.message || '?'), 'error'); })
            .finally(function() { if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = '<i class="fas fa-rocket"></i> ' + t('publish_submit'); } });
    });

    function populateFormSelects() {
        var pCategory = document.getElementById('pCategory');
        if (pCategory) { pCategory.innerHTML = '<option value="">' + t('publish_select_category') + '</option>'; categories.forEach(function(c) { pCategory.innerHTML += '<option value="' + c.name + '">' + c.name + '</option>'; }); }
        var pCountry = document.getElementById('pCountry');
        if (pCountry) { pCountry.innerHTML = '<option value="">' + t('publish_select_country') + '</option>'; allCountries.forEach(function(c) { pCountry.innerHTML += '<option value="' + c.name + '">' + c.flag + ' ' + c.name + '</option>'; }); }
        var pUnit = document.getElementById('pUnit');
        if (pUnit) {
            pUnit.innerHTML = '<option value="Pi">' + t('publish_unit_piece') + '</option><option value="Kg">' + t('publish_unit_kg') + '</option><option value="L">' + t('publish_unit_liter') + '</option><option value="M">' + t('publish_unit_meter') + '</option><option value="Set">' + t('publish_unit_set') + '</option><option value="Tonne">' + t('publish_unit_ton') + '</option>';
        }
    }

    /* ===== INIT ===== */
    console.log('[App] 🚀 Start — lang:', currentLang);
    document.documentElement.lang = currentLang;
    applyStaticTranslations();
    detectPiBrowser();
    loadPiSession();
    initEditProductForm();

    waitForPiSdk(5000).then(function() { initPiSdk(); updatePiUI(); }).catch(function() { inPiBrowser = false; updatePiUI(); });

    simulateLoader(function() {
        renderCategoryFilters();
        renderProducts();
        renderSuppliers();
        setupFilters();
        populateFormSelects();
        updateCartBadge();
        initSlider();
        updatePiUI();
        applyStaticTranslations();
        setTimeout(animateStats, 300);

        if (piUser) {
            loadProfileFromSupabase()
                .then(function() { return Promise.all([ loadProductsFromSupabase().then(function(list) { if (list && list.length > 0) { var localExtra = products.filter(function(p) { return !p._fromSupa; }); products = list.concat(localExtra); renderProducts(); applyFilters(); } }), loadOrdersFromSupabase(), loadHistoryFromSupabase() ]); })
                .then(function() { updatePiUI(); if (isProfileComplete()) showToast(t('toast_welcome') + ' ' + piUser.username + ' !', 'success'); else showToast(t('toast_profile_to_complete'), 'info'); })
                .catch(function(e) { console.error('[Init] restore error', e); });
        } else {
            setTimeout(function() { if (inPiBrowser) showToast(t('toast_connect_info'), 'info'); else showToast(t('toast_open_pi'), 'info'); }, 800);
        }
    });

})();
