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

    // ============ LISTE COMPLÈTE DES PAYS DU MONDE AVEC DRAPEAUX ============
    var countriesData = [
        { code: 'AF', name: 'Afghanistan', flag: '\uD83C\uDDE6\uD83C\uDDEB' },
        { code: 'ZA', name: 'Afrique du Sud', flag: '\uD83C\uDDFF\uD83C\uDDE6' },
        { code: 'AL', name: 'Albanie', flag: '\uD83C\uDDE6\uD83C\uDDF1' },
        { code: 'DZ', name: 'Algérie', flag: '\uD83C\uDDE9\uD83C\uDDFF' },
        { code: 'DE', name: 'Allemagne', flag: '\uD83C\uDDE9\uD83C\uDDEA' },
        { code: 'AD', name: 'Andorre', flag: '\uD83C\uDDE6\uD83C\uDDE9' },
        { code: 'AO', name: 'Angola', flag: '\uD83C\uDDE6\uD83C\uDDF4' },
        { code: 'AG', name: 'Antigua-et-Barbuda', flag: '\uD83C\uDDE6\uD83C\uDDEC' },
        { code: 'SA', name: 'Arabie saoudite', flag: '\uD83C\uDDF8\uD83C\uDDE6' },
        { code: 'AR', name: 'Argentine', flag: '\uD83C\uDDE6\uD83C\uDDF7' },
        { code: 'AM', name: 'Arménie', flag: '\uD83C\uDDE6\uD83C\uDDF2' },
        { code: 'AU', name: 'Australie', flag: '\uD83C\uDDE6\uD83C\uDDFA' },
        { code: 'AT', name: 'Autriche', flag: '\uD83C\uDDE6\uD83C\uDDF9' },
        { code: 'AZ', name: 'Azerbaïdjan', flag: '\uD83C\uDDE6\uD83C\uDDFF' },
        { code: 'BS', name: 'Bahamas', flag: '\uD83C\uDDE7\uD83C\uDDF8' },
        { code: 'BH', name: 'Bahreïn', flag: '\uD83C\uDDE7\uD83C\uDDED' },
        { code: 'BD', name: 'Bangladesh', flag: '\uD83C\uDDE7\uD83C\uDDE9' },
        { code: 'BB', name: 'Barbade', flag: '\uD83C\uDDE7\uD83C\uDDE7' },
        { code: 'BE', name: 'Belgique', flag: '\uD83C\uDDE7\uD83C\uDDEA' },
        { code: 'BZ', name: 'Belize', flag: '\uD83C\uDDE7\uD83C\uDDFF' },
        { code: 'BJ', name: 'Bénin', flag: '\uD83C\uDDE7\uD83C\uDDEF' },
        { code: 'BT', name: 'Bhoutan', flag: '\uD83C\uDDE7\uD83C\uDDF9' },
        { code: 'BY', name: 'Biélorussie', flag: '\uD83C\uDDE7\uD83C\uDDFE' },
        { code: 'MM', name: 'Birmanie', flag: '\uD83C\uDDF2\uD83C\uDDF2' },
        { code: 'BO', name: 'Bolivie', flag: '\uD83C\uDDE7\uD83C\uDDF4' },
        { code: 'BA', name: 'Bosnie-Herzégovine', flag: '\uD83C\uDDE7\uD83C\uDDE6' },
        { code: 'BW', name: 'Botswana', flag: '\uD83C\uDDE7\uD83C\uDDFC' },
        { code: 'BR', name: 'Brésil', flag: '\uD83C\uDDE7\uD83C\uDDF7' },
        { code: 'BN', name: 'Brunei', flag: '\uD83C\uDDE7\uD83C\uDDF3' },
        { code: 'BG', name: 'Bulgarie', flag: '\uD83C\uDDE7\uD83C\uDDEC' },
        { code: 'BF', name: 'Burkina Faso', flag: '\uD83C\uDDE7\uD83C\uDDEB' },
        { code: 'BI', name: 'Burundi', flag: '\uD83C\uDDE7\uD83C\uDDEE' },
        { code: 'KH', name: 'Cambodge', flag: '\uD83C\uDDF0\uD83C\uDDED' },
        { code: 'CM', name: 'Cameroun', flag: '\uD83C\uDDE8\uD83C\uDDF2' },
        { code: 'CA', name: 'Canada', flag: '\uD83C\uDDE8\uD83C\uDDE6' },
        { code: 'CV', name: 'Cap-Vert', flag: '\uD83C\uDDE8\uD83C\uDDFB' },
        { code: 'CF', name: 'République centrafricaine', flag: '\uD83C\uDDE8\uD83C\uDDEB' },
        { code: 'CL', name: 'Chili', flag: '\uD83C\uDDE8\uD83C\uDDF1' },
        { code: 'CN', name: 'Chine', flag: '\uD83C\uDDE8\uD83C\uDDF3' },
        { code: 'CY', name: 'Chypre', flag: '\uD83C\uDDE8\uD83C\uDDFE' },
        { code: 'CO', name: 'Colombie', flag: '\uD83C\uDDE8\uD83C\uDDF4' },
        { code: 'KM', name: 'Comores', flag: '\uD83C\uDDF0\uD83C\uDDF2' },
        { code: 'CG', name: 'Congo-Brazzaville', flag: '\uD83C\uDDE8\uD83C\uDDEC' },
        { code: 'CD', name: 'Congo-Kinshasa', flag: '\uD83C\uDDE8\uD83C\uDDE9' },
        { code: 'KP', name: 'Corée du Nord', flag: '\uD83C\uDDF0\uD83C\uDDF5' },
        { code: 'KR', name: 'Corée du Sud', flag: '\uD83C\uDDF0\uD83C\uDDF7' },
        { code: 'CR', name: 'Costa Rica', flag: '\uD83C\uDDE8\uD83C\uDDF7' },
        { code: 'CI', name: "Côte d'Ivoire", flag: '\uD83C\uDDE8\uD83C\uDDEE' },
        { code: 'HR', name: 'Croatie', flag: '\uD83C\uDDED\uD83C\uDDF7' },
        { code: 'CU', name: 'Cuba', flag: '\uD83C\uDDE8\uD83C\uDDFA' },
        { code: 'DK', name: 'Danemark', flag: '\uD83C\uDDE9\uD83C\uDDF0' },
        { code: 'DJ', name: 'Djibouti', flag: '\uD83C\uDDE9\uD83C\uDDEF' },
        { code: 'DM', name: 'Dominique', flag: '\uD83C\uDDE9\uD83C\uDDF2' },
        { code: 'EG', name: 'Égypte', flag: '\uD83C\uDDEA\uD83C\uDDEC' },
        { code: 'AE', name: 'Émirats arabes unis', flag: '\uD83C\uDDE6\uD83C\uDDEA' },
        { code: 'EC', name: 'Équateur', flag: '\uD83C\uDDEA\uD83C\uDDE8' },
        { code: 'ER', name: 'Érythrée', flag: '\uD83C\uDDEA\uD83C\uDDF7' },
        { code: 'ES', name: 'Espagne', flag: '\uD83C\uDDEA\uD83C\uDDF8' },
        { code: 'EE', name: 'Estonie', flag: '\uD83C\uDDEA\uD83C\uDDEA' },
        { code: 'SZ', name: 'Eswatini', flag: '\uD83C\uDDF8\uD83C\uDDFF' },
        { code: 'US', name: 'États-Unis', flag: '\uD83C\uDDFA\uD83C\uDDF8' },
        { code: 'ET', name: 'Éthiopie', flag: '\uD83C\uDDEA\uD83C\uDDF9' },
        { code: 'FJ', name: 'Fidji', flag: '\uD83C\uDDEB\uD83C\uDDEF' },
        { code: 'FI', name: 'Finlande', flag: '\uD83C\uDDEB\uD83C\uDDEE' },
        { code: 'FR', name: 'France', flag: '\uD83C\uDDEB\uD83C\uDDF7' },
        { code: 'GA', name: 'Gabon', flag: '\uD83C\uDDEC\uD83C\uDDE6' },
        { code: 'GM', name: 'Gambie', flag: '\uD83C\uDDEC\uD83C\uDDF2' },
        { code: 'GE', name: 'Géorgie', flag: '\uD83C\uDDEC\uD83C\uDDEA' },
        { code: 'GH', name: 'Ghana', flag: '\uD83C\uDDEC\uD83C\uDDED' },
        { code: 'GR', name: 'Grèce', flag: '\uD83C\uDDEC\uD83C\uDDF7' },
        { code: 'GD', name: 'Grenade', flag: '\uD83C\uDDEC\uD83C\uDDE9' },
        { code: 'GT', name: 'Guatemala', flag: '\uD83C\uDDEC\uD83C\uDDF9' },
        { code: 'GN', name: 'Guinée', flag: '\uD83C\uDDEC\uD83C\uDDF3' },
        { code: 'GW', name: 'Guinée-Bissau', flag: '\uD83C\uDDEC\uD83C\uDDFC' },
        { code: 'GQ', name: 'Guinée équatoriale', flag: '\uD83C\uDDEC\uD83C\uDDF6' },
        { code: 'GY', name: 'Guyana', flag: '\uD83C\uDDEC\uD83C\uDDFE' },
        { code: 'HT', name: 'Haïti', flag: '\uD83C\uDDED\uD83C\uDDF9' },
        { code: 'HN', name: 'Honduras', flag: '\uD83C\uDDED\uD83C\uDDF3' },
        { code: 'HU', name: 'Hongrie', flag: '\uD83C\uDDED\uD83C\uDDFA' },
        { code: 'IN', name: 'Inde', flag: '\uD83C\uDDEE\uD83C\uDDF3' },
        { code: 'ID', name: 'Indonésie', flag: '\uD83C\uDDEE\uD83C\uDDE9' },
        { code: 'IQ', name: 'Irak', flag: '\uD83C\uDDEE\uD83C\uDDF6' },
        { code: 'IR', name: 'Iran', flag: '\uD83C\uDDEE\uD83C\uDDF7' },
        { code: 'IE', name: 'Irlande', flag: '\uD83C\uDDEE\uD83C\uDDEA' },
        { code: 'IS', name: 'Islande', flag: '\uD83C\uDDEE\uD83C\uDDF8' },
        { code: 'IL', name: 'Israël', flag: '\uD83C\uDDEE\uD83C\uDDF1' },
        { code: 'IT', name: 'Italie', flag: '\uD83C\uDDEE\uD83C\uDDF9' },
        { code: 'JM', name: 'Jamaïque', flag: '\uD83C\uDDEF\uD83C\uDDF2' },
        { code: 'JP', name: 'Japon', flag: '\uD83C\uDDEF\uD83C\uDDF5' },
        { code: 'JO', name: 'Jordanie', flag: '\uD83C\uDDEF\uD83C\uDDF4' },
        { code: 'KZ', name: 'Kazakhstan', flag: '\uD83C\uDDF0\uD83C\uDDFF' },
        { code: 'KE', name: 'Kenya', flag: '\uD83C\uDDF0\uD83C\uDDEA' },
        { code: 'KG', name: 'Kirghizistan', flag: '\uD83C\uDDF0\uD83C\uDDEC' },
        { code: 'KI', name: 'Kiribati', flag: '\uD83C\uDDF0\uD83C\uDDEE' },
        { code: 'XK', name: 'Kosovo', flag: '\uD83C\uDDFD\uD83C\uDDF0' },
        { code: 'KW', name: 'Koweït', flag: '\uD83C\uDDF0\uD83C\uDDFC' },
        { code: 'LA', name: 'Laos', flag: '\uD83C\uDDF1\uD83C\uDDE6' },
        { code: 'LS', name: 'Lesotho', flag: '\uD83C\uDDF1\uD83C\uDDF8' },
        { code: 'LV', name: 'Lettonie', flag: '\uD83C\uDDF1\uD83C\uDDFB' },
        { code: 'LB', name: 'Liban', flag: '\uD83C\uDDF1\uD83C\uDDE7' },
        { code: 'LR', name: 'Liberia', flag: '\uD83C\uDDF1\uD83C\uDDF7' },
        { code: 'LY', name: 'Libye', flag: '\uD83C\uDDF1\uD83C\uDDFE' },
        { code: 'LI', name: 'Liechtenstein', flag: '\uD83C\uDDF1\uD83C\uDDEE' },
        { code: 'LT', name: 'Lituanie', flag: '\uD83C\uDDF1\uD83C\uDDF9' },
        { code: 'LU', name: 'Luxembourg', flag: '\uD83C\uDDF1\uD83C\uDDFA' },
        { code: 'MK', name: 'Macédoine du Nord', flag: '\uD83C\uDDF2\uD83C\uDDF0' },
        { code: 'MG', name: 'Madagascar', flag: '\uD83C\uDDF2\uD83C\uDDEC' },
        { code: 'MY', name: 'Malaisie', flag: '\uD83C\uDDF2\uD83C\uDDFE' },
        { code: 'MW', name: 'Malawi', flag: '\uD83C\uDDF2\uD83C\uDDFC' },
        { code: 'MV', name: 'Maldives', flag: '\uD83C\uDDF2\uD83C\uDDFB' },
        { code: 'ML', name: 'Mali', flag: '\uD83C\uDDF2\uD83C\uDDF1' },
        { code: 'MT', name: 'Malte', flag: '\uD83C\uDDF2\uD83C\uDDF9' },
        { code: 'MA', name: 'Maroc', flag: '\uD83C\uDDF2\uD83C\uDDE6' },
        { code: 'MH', name: 'Marshall', flag: '\uD83C\uDDF2\uD83C\uDDED' },
        { code: 'MU', name: 'Maurice', flag: '\uD83C\uDDF2\uD83C\uDDFA' },
        { code: 'MR', name: 'Mauritanie', flag: '\uD83C\uDDF2\uD83C\uDDF7' },
        { code: 'MX', name: 'Mexique', flag: '\uD83C\uDDF2\uD83C\uDDFD' },
        { code: 'FM', name: 'Micronésie', flag: '\uD83C\uDDEB\uD83C\uDDF2' },
        { code: 'MD', name: 'Moldavie', flag: '\uD83C\uDDF2\uD83C\uDDE9' },
        { code: 'MC', name: 'Monaco', flag: '\uD83C\uDDF2\uD83C\uDDE8' },
        { code: 'MN', name: 'Mongolie', flag: '\uD83C\uDDF2\uD83C\uDDF3' },
        { code: 'ME', name: 'Monténégro', flag: '\uD83C\uDDF2\uD83C\uDDEA' },
        { code: 'MZ', name: 'Mozambique', flag: '\uD83C\uDDF2\uD83C\uDDFF' },
        { code: 'NA', name: 'Namibie', flag: '\uD83C\uDDF3\uD83C\uDDE6' },
        { code: 'NR', name: 'Nauru', flag: '\uD83C\uDDF3\uD83C\uDDF7' },
        { code: 'NP', name: 'Népal', flag: '\uD83C\uDDF3\uD83C\uDDF5' },
        { code: 'NI', name: 'Nicaragua', flag: '\uD83C\uDDF3\uD83C\uDDEE' },
        { code: 'NE', name: 'Niger', flag: '\uD83C\uDDF3\uD83C\uDDEA' },
        { code: 'NG', name: 'Nigeria', flag: '\uD83C\uDDF3\uD83C\uDDEC' },
        { code: 'NO', name: 'Norvège', flag: '\uD83C\uDDF3\uD83C\uDDF4' },
        { code: 'NZ', name: 'Nouvelle-Zélande', flag: '\uD83C\uDDF3\uD83C\uDDFF' },
        { code: 'OM', name: 'Oman', flag: '\uD83C\uDDF4\uD83C\uDDF2' },
        { code: 'UG', name: 'Ouganda', flag: '\uD83C\uDDFA\uD83C\uDDEC' },
        { code: 'UZ', name: 'Ouzbékistan', flag: '\uD83C\uDDFA\uD83C\uDDFF' },
        { code: 'PK', name: 'Pakistan', flag: '\uD83C\uDDF5\uD83C\uDDF0' },
        { code: 'PW', name: 'Palaos', flag: '\uD83C\uDDF5\uD83C\uDDFC' },
        { code: 'PS', name: 'Palestine', flag: '\uD83C\uDDF5\uD83C\uDDF8' },
        { code: 'PA', name: 'Panama', flag: '\uD83C\uDDF5\uD83C\uDDE6' },
        { code: 'PG', name: 'Papouasie-Nouvelle-Guinée', flag: '\uD83C\uDDF5\uD83C\uDDEC' },
        { code: 'PY', name: 'Paraguay', flag: '\uD83C\uDDF5\uD83C\uDDFE' },
        { code: 'NL', name: 'Pays-Bas', flag: '\uD83C\uDDF3\uD83C\uDDF1' },
        { code: 'PE', name: 'Pérou', flag: '\uD83C\uDDF5\uD83C\uDDEA' },
        { code: 'PH', name: 'Philippines', flag: '\uD83C\uDDF5\uD83C\uDDED' },
        { code: 'PL', name: 'Pologne', flag: '\uD83C\uDDF5\uD83C\uDDF1' },
        { code: 'PT', name: 'Portugal', flag: '\uD83C\uDDF5\uD83C\uDDF9' },
        { code: 'QA', name: 'Qatar', flag: '\uD83C\uDDF6\uD83C\uDDE6' },
        { code: 'RO', name: 'Roumanie', flag: '\uD83C\uDDF7\uD83C\uDDF4' },
        { code: 'GB', name: 'Royaume-Uni', flag: '\uD83C\uDDEC\uD83C\uDDE7' },
        { code: 'RU', name: 'Russie', flag: '\uD83C\uDDF7\uD83C\uDDFA' },
        { code: 'RW', name: 'Rwanda', flag: '\uD83C\uDDF7\uD83C\uDDFC' },
        { code: 'KN', name: 'Saint-Christophe-et-Niévès', flag: '\uD83C\uDDF0\uD83C\uDDF3' },
        { code: 'SM', name: 'Saint-Marin', flag: '\uD83C\uDDF8\uD83C\uDDF2' },
        { code: 'VC', name: 'Saint-Vincent-et-les-Grenadines', flag: '\uD83C\uDDFB\uD83C\uDDE8' },
        { code: 'LC', name: 'Sainte-Lucie', flag: '\uD83C\uDDF1\uD83C\uDDE8' },
        { code: 'SB', name: 'Salomon', flag: '\uD83C\uDDF8\uD83C\uDDE7' },
        { code: 'SV', name: 'Salvador', flag: '\uD83C\uDDF8\uD83C\uDDFB' },
        { code: 'WS', name: 'Samoa', flag: '\uD83C\uDDFC\uD83C\uDDF8' },
        { code: 'ST', name: 'Sao Tomé-et-Principe', flag: '\uD83C\uDDF8\uD83C\uDDF9' },
        { code: 'SN', name: 'Sénégal', flag: '\uD83C\uDDF8\uD83C\uDDF3' },
        { code: 'RS', name: 'Serbie', flag: '\uD83C\uDDF7\uD83C\uDDF8' },
        { code: 'SC', name: 'Seychelles', flag: '\uD83C\uDDF8\uD83C\uDDE8' },
        { code: 'SL', name: 'Sierra Leone', flag: '\uD83C\uDDF8\uD83C\uDDF1' },
        { code: 'SG', name: 'Singapour', flag: '\uD83C\uDDF8\uD83C\uDDEC' },
        { code: 'SK', name: 'Slovaquie', flag: '\uD83C\uDDF8\uD83C\uDDF0' },
        { code: 'SI', name: 'Slovénie', flag: '\uD83C\uDDF8\uD83C\uDDEE' },
        { code: 'SO', name: 'Somalie', flag: '\uD83C\uDDF8\uD83C\uDDF4' },
        { code: 'SD', name: 'Soudan', flag: '\uD83C\uDDF8\uD83C\uDDE9' },
        { code: 'SS', name: 'Soudan du Sud', flag: '\uD83C\uDDF8\uD83C\uDDF8' },
        { code: 'LK', name: 'Sri Lanka', flag: '\uD83C\uDDF1\uD83C\uDDF0' },
        { code: 'SE', name: 'Suède', flag: '\uD83C\uDDF8\uD83C\uDDEA' },
        { code: 'CH', name: 'Suisse', flag: '\uD83C\uDDE8\uD83C\uDDED' },
        { code: 'SR', name: 'Suriname', flag: '\uD83C\uDDF8\uD83C\uDDF7' },
        { code: 'SY', name: 'Syrie', flag: '\uD83C\uDDF8\uD83C\uDDFE' },
        { code: 'TJ', name: 'Tadjikistan', flag: '\uD83C\uDDF9\uD83C\uDDEF' },
        { code: 'TZ', name: 'Tanzanie', flag: '\uD83C\uDDF9\uD83C\uDDFF' },
        { code: 'TD', name: 'Tchad', flag: '\uD83C\uDDF9\uD83C\uDDE9' },
        { code: 'CZ', name: 'Tchéquie', flag: '\uD83C\uDDE8\uD83C\uDDFF' },
        { code: 'TH', name: 'Thaïlande', flag: '\uD83C\uDDF9\uD83C\uDDED' },
        { code: 'TL', name: 'Timor oriental', flag: '\uD83C\uDDF9\uD83C\uDDF1' },
        { code: 'TG', name: 'Togo', flag: '\uD83C\uDDF9\uD83C\uDDEC' },
        { code: 'TO', name: 'Tonga', flag: '\uD83C\uDDF9\uD83C\uDDF4' },
        { code: 'TT', name: 'Trinité-et-Tobago', flag: '\uD83C\uDDF9\uD83C\uDDF9' },
        { code: 'TN', name: 'Tunisie', flag: '\uD83C\uDDF9\uD83C\uDDF3' },
        { code: 'TM', name: 'Turkménistan', flag: '\uD83C\uDDF9\uD83C\uDDF2' },
        { code: 'TR', name: 'Turquie', flag: '\uD83C\uDDF9\uD83C\uDDF7' },
        { code: 'TV', name: 'Tuvalu', flag: '\uD83C\uDDF9\uD83C\uDDFB' },
        { code: 'UA', name: 'Ukraine', flag: '\uD83C\uDDFA\uD83C\uDDE6' },
        { code: 'UY', name: 'Uruguay', flag: '\uD83C\uDDFA\uD83C\uDDFE' },
        { code: 'VU', name: 'Vanuatu', flag: '\uD83C\uDDFB\uD83C\uDDFA' },
        { code: 'VA', name: 'Vatican', flag: '\uD83C\uDDFB\uD83C\uDDE6' },
        { code: 'VE', name: 'Venezuela', flag: '\uD83C\uDDFB\uD83C\uDDEA' },
        { code: 'VN', name: 'Vietnam', flag: '\uD83C\uDDFB\uD83C\uDDF3' },
        { code: 'YE', name: 'Yémen', flag: '\uD83C\uDDFE\uD83C\uDDEA' },
        { code: 'ZM', name: 'Zambie', flag: '\uD83C\uDDFF\uD83C\uDDF2' },
        { code: 'ZW', name: 'Zimbabwe', flag: '\uD83C\uDDFF\uD83C\uDDFC' }
    ];

    // Compatibilité : liste des noms pour filtres et populateFormSelects existant
    var allCountries = countriesData.map(function(c) { return c.name; });

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
    var selectedCountry = '';
    var selectedCategory = 'all';

    var piUser = null;
    var piReady = false;
    var inPiBrowser = false;

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

    function waitForPiSdk(maxMs) {
        maxMs = maxMs || 5000;
        return new Promise(function(resolve, reject) {
            var start = Date.now();
            function check() {
                if (typeof Pi !== 'undefined' && Pi.init && Pi.authenticate) {
                    console.log('[Pi] SDK detecte apres ' + (Date.now() - start) + 'ms');
                    resolve(true);
                } else if (Date.now() - start > maxMs) {
                    console.warn('[Pi] Timeout SDK apres ' + maxMs + 'ms');
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
            console.log('[Pi] SDK initialise');
            return true;
        } catch (e) {
            console.error('[Pi] Erreur init :', e);
            return false;
        }
    }

    function onIncompletePaymentFound(payment) {
        console.log('[Pi] Paiement incomplet :', payment);
    }

    function connectPi() {
        console.log('[Pi] Connexion demandee');
        if (!inPiBrowser) { showToast('Ouvrez cette app dans Pi Browser', 'error'); return; }
        if (!piReady && !initPiSdk()) { showToast('Erreur initialisation Pi SDK', 'error'); return; }

        var btn = document.getElementById('piActionBtn');
        var actionText = document.getElementById('piActionText');
        if (btn) btn.disabled = true;
        if (actionText) actionText.textContent = 'Connexion...';
        showToast('Ouverture de Pi Network...', 'info');

        Pi.authenticate(['username', 'payments'], onIncompletePaymentFound)
            .then(function(auth) {
                console.log('[Pi] SUCCES :', auth.user);
                piUser = { uid: auth.user.uid, username: auth.user.username };
                try { localStorage.setItem('pi_user', JSON.stringify(piUser)); } catch (e) {}
                updatePiUI();
                closeAuthModal();
                showToast('Bienvenue ' + auth.user.username + ' !', 'success');
            })
            .catch(function(err) {
                console.error('[Pi] Erreur auth :', err);
                var msg = (err && err.message) ? err.message : 'Connexion echouee';
                if (/denied|cancel/i.test(msg)) { showToast('Connexion annulee', 'info'); }
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
        showToast('Deconnecte de Pi', 'info');
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
            if (actionText) actionText.textContent = 'Deconnexion';
            if (hint) hint.innerHTML = '<i class="fas fa-shield-alt" style="color:var(--success);"></i> Connecte en tant que <strong>' + piUser.username + '</strong>';
            if (publishAvatar) publishAvatar.textContent = piUser.username.substring(0, 2).toUpperCase();
            if (publishName) publishName.textContent = piUser.username;
            if (publishHandle) publishHandle.textContent = '@' + piUser.username.toLowerCase();
        } else {
            if (badge) badge.style.display = 'none';
            if (accountCard) accountCard.classList.remove('connected');
            if (avatar) avatar.innerHTML = '<i class="fab fa-pi"></i>';
            if (accountUsername) accountUsername.textContent = 'Non connecte';
            if (accountSubtitle) accountSubtitle.textContent = 'Connectez-vous avec Pi Network';
            if (actionBtn) { actionBtn.classList.remove('disconnect'); actionBtn.disabled = !inPiBrowser; }
            if (actionText) actionText.textContent = 'Connecter avec Pi Network';
            if (hint) {
                if (inPiBrowser) { hint.innerHTML = '<i class="fas fa-check-circle" style="color:var(--success);"></i> Pi Browser detecte. Cliquez pour vous connecter.'; }
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
            if (stored) { piUser = JSON.parse(stored); console.log('[Pi] Session restauree :', piUser.username); }
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
                '<span class="qty">x' + item.qty + '</span>' +
                '<span class="price">' + (item.price * item.qty).toFixed(2) + ' Pi</span>' +
                '</div>';
        }).join('');
        var total = cartItems.reduce(function(s, i) { return s + (i.price * i.qty); }, 0);
        amount.textContent = total.toFixed(2) + ' Pi';
        modal.classList.add('open');
    }
    function closePaymentModal() {
        var modal = document.getElementById('paymentModal');
        if (modal) modal.classList.remove('open');
    }

    function requireAuth(actionName) {
        if (piUser) return true;
        console.log('[Auth] Refuse : ' + actionName);
        var messages = {
            'panier': 'Connectez-vous avec Pi Network pour ajouter des produits au panier.',
            'commande': 'Connectez-vous avec Pi Network pour passer commande.',
            'publier': 'Connectez-vous avec Pi Network pour publier un produit.',
            'contacter': 'Connectez-vous avec Pi Network pour contacter un fournisseur.'
        };
        openAuthModal(messages[actionName] || 'Connectez-vous avec Pi Network pour continuer.');
        return false;
    }

    function createPiPayment(amount, memo, metadata) {
        return new Promise(function(resolve, reject) {
            if (!piUser) { reject(new Error('Non connecte')); return; }
            if (typeof Pi === 'undefined' || !Pi.createPayment) { reject(new Error('SDK Pi introuvable')); return; }
            Pi.createPayment({
                amount: amount,
                memo: memo,
                metadata: metadata
            }, {
                onReadyForServerApproval: function(paymentId) {
                    console.log('[Pi] Pret pour approbation serveur :', paymentId);
                    fetch('https://global-bulk-pi-backend.onrender.com/approve', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ paymentId: paymentId })
                    })
                    .then(response => response.json())
                    .then(data => console.log('[Pi] Approbation confirmee par le serveur:', data))
                    .catch(error => console.error('[Pi] Erreur approbation:', error));
                },
                onReadyForServerCompletion: function(paymentId, txid) {
                    console.log('[Pi] Paiement complete :', paymentId, txid);
                    fetch('https://global-bulk-pi-backend.onrender.com/complete', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ paymentId: paymentId, txid: txid })
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log('[Pi] Finalisation confirmee:', data);
                        resolve({ paymentId: paymentId, txid: txid });
                    })
                    .catch(error => {
                        console.error('[Pi] Erreur finalisation:', error);
                        reject(error);
                    });
                },
                onCancel: function(paymentId) {
                    console.log('[Pi] Paiement annule');
                    reject(new Error('Paiement annule'));
                },
                onError: function(error) {
                    console.error('[Pi] Erreur paiement :', error);
                    reject(error);
                }
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
                text.textContent = 'Pret !';
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
            { image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop', title: 'First Purchase', subtitle: 'Enjoy a Special Offer!', cta: 'Decouvrir' },
            { image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&h=600&fit=crop', title: 'Electronique de pointe', subtitle: 'Au meilleur prix', cta: 'Voir les offres' },
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
            var verifiedBadge = p.verified ? '<span class="verified-badge"><i class="fas fa-check-circle"></i> Verifie</span>' : '';
            var firstImage = p.images && p.images.length > 0 ? p.images[0] : '';
            return '<div class="card-product" onclick="showProductDetail(' + p.id + ')">' +
                '<div class="image"><img src="' + firstImage + '" alt="' + p.name + '" loading="lazy" />' + verifiedBadge + '</div>' +
                '<div class="body">' +
                '<div class="title">' + p.name + '</div>' +
                '<div class="price">' + p.price + ' ' + p.unit + ' <small>/ unite</small></div>' +
                '<div class="meta">' +
                '<span><i class="fas fa-box"></i> Min: ' + p.minOrder + '</span>' +
                '<span><i class="fas fa-warehouse"></i> ' + formatNumber(p.stock) + '</span>' +
                '<span><i class="fas fa-star" style="color:var(--secondary);"></i> ' + p.rating + '</span>' +
                '</div>' +
                '<div style="font-size:12px;color:var(--text-muted);">' + p.supplier + ' - ' + p.country + '</div>' +
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
        countriesData.forEach(function(c) {
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
            return p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.supplier.toLowerCase().includes(q);
        });
        if (filtered.length === 0) showToast('Aucun resultat', 'error');
        else { renderProducts(filtered); showToast(filtered.length + ' resultat(s)', 'success'); }
        document.getElementById('searchDropdown').classList.remove('open');
    }

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
            '<div style="margin-bottom:10px;"><span class="badge badge-verified"><i class="fas fa-check-circle"></i> ' + (p.verified ? 'Verifie' : 'Non verifie') + '</span></div>' +
            '<div style="font-size:13px;color:var(--text-muted);margin-bottom:14px;"><i class="fas fa-building"></i> ' + p.supplier + ' - ' + p.country + '</div>' +
            '<div class="price-box">' +
            '<div><span style="font-size:13px;color:var(--text-muted);">Prix de gros</span><br><span style="font-size:28px;font-weight:700;color:var(--primary);">' + p.price + ' ' + p.unit + '</span></div>' +
            '<div><span style="font-size:13px;color:var(--text-muted);">Qte min.</span><br><span style="font-size:20px;font-weight:600;">' + p.minOrder + ' unites</span></div>' +
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
                    infoItem('fa-globe', 'Reseau', 'Pi Network Mainnet');
            case 'parametres':
                return '<h3><i class="fas fa-sliders-h"></i> Parametres</h3>' +
                    infoItem('fa-bell', 'Notifications', 'Activees') +
                    infoItem('fa-language', 'Langue', 'Francais') +
                    infoItem('fa-palette', 'Theme', 'Clair');
            case 'langues':
                return '<h3><i class="fas fa-globe"></i> Langues</h3>' +
                    '<div class="info-item"><i class="fas fa-check-circle" style="color:#4caf50;"></i><span class="label">Francais</span><span class="value">Actif</span></div>' +
                    '<div class="info-item"><i class="fas fa-circle" style="color:#ccc;"></i><span class="label">English</span><span class="value">Inactif</span></div>' +
                    '<div class="info-item"><i class="fas fa-circle" style="color:#ccc;"></i><span class="label">Espanol</span><span class="value">Inactif</span></div>';
            case 'livre-blanc':
                return '<h3><i class="fas fa-file-pdf"></i> Livre blanc</h3>' +
                    infoItem('fa-file-pdf', 'Guide 2026', 'Disponible') +
                    infoItem('fa-file-pdf', 'Strategies', 'Disponible') +
                    infoItem('fa-file-pdf', 'Marches emergents', 'Bientot');
            case 'mes-produits':
                if (!piUser) return '<div class="empty-state"><i class="fas fa-box-open"></i><p>Connectez-vous pour voir vos produits.</p></div>';
                return '<h3><i class="fas fa-boxes"></i> Mes produits</h3>' +
                    infoItem('fa-headphones', 'Ecouteurs BT', '5000 en stock') +
                    infoItem('fa-watch', 'Montre connectee', '120 en stock');
            case 'historique':
                if (!piUser) return '<div class="empty-state"><i class="fas fa-history"></i><p>Connectez-vous pour voir votre historique.</p></div>';
                return '<h3><i class="fas fa-history"></i> Historique</h3>' +
                    infoItem('fa-receipt', '24/11/2024', '120 Pi') +
                    infoItem('fa-receipt', '20/11/2024', '1200 Pi') +
                    infoItem('fa-receipt', '15/11/2024', '850 Pi');
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
                    '<div><strong>Pourquoi se connecter ?</strong><p style="color:var(--text-muted);margin-top:6px;">La connexion Pi est obligatoire pour toutes les operations.</p></div>';
            default:
                return '<p>Selectionnez une option.</p>';
        }
    }

    document.querySelectorAll('.menu-item').forEach(function(item) {
        item.addEventListener('click', function() {
            var tab = this.getAttribute('data-tab');
            var label = this.querySelector('.menu-label').textContent;
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
            console.log('[Pi] Action clic. Etat :', piUser ? 'connecte' : 'non connecte');
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
            return '<div class="preview-thumb"><img src="' + img + '" /><button class="remove-btn" onclick="removeImage(' + index + ')"><i class="fas fa-times"></i></button></div>';
        }).join('');
    }

    window.removeImage = function(index) {
        uploadedImages.splice(index, 1);
        renderUploadPreview();
    };

    window.addToCart = function(id) {
        if (!requireAuth('panier')) return;
        var p = products.find(function(x) { return x.id === id; });
        if (!p) return;
        var existing = cartItems.find(function(item) { return item.id === id; });
        if (existing) existing.qty += p.minOrder;
        else cartItems.push({ id: p.id, name: p.name, qty: p.minOrder, price: p.price, image: p.images ? p.images[0] : '' });
        updateCartBadge();
        showToast(p.name + ' ajoute au panier', 'success');
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
            body.innerHTML = '<div class="cart-empty"><i class="fas fa-shopping-bag"></i><p>Panier vide</p></div>';
            footer.style.display = 'none';
            return;
        }
        body.innerHTML = cartItems.map(function(item) {
            var imgSrc = item.image || '';
            return '<div class="cart-item">' +
                '<div class="item-image"><img src="' + imgSrc + '" /></div>' +
                '<div class="item-info">' +
                '<div class="name">' + item.name + '</div>' +
                '<div class="price">' + (item.price * item.qty).toFixed(2) + ' Pi</div>' +
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
        totalEl.textContent = total.toFixed(2) + ' Pi';
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
            showToast('Paiement reussi !', 'success');
            console.log('[Pi] Transaction ID:', result.txid);
            cartItems = [];
            updateCartBadge();
            renderCartItems();
        })
        .catch(function(err) {
            console.error('[Pi] Erreur paiement :', err);
            if (/annule/i.test(err.message)) { showToast('Paiement annule', 'info'); }
            else { showToast('Erreur : ' + (err.message || 'paiement echoue'), 'error'); }
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
            showToast('Remplissez tous les champs obligatoires', 'error');
            return;
        }

        var images = uploadedImages.length > 0 ? uploadedImages : [''];
        products.push({
            id: products.length + 1, name: name, price: price,
            unit: document.getElementById('pUnit').value, minOrder: minOrder, stock: stock,
            supplier: piUser.username, country: country, verified: true,
            rating: 4.5,
            category: category, images: images
        });
        renderProducts();
        applyFilters();
        showToast('Produit publie !', 'success');
        uploadedImages = [];
        document.getElementById('uploadPreview').innerHTML = '';
        this.reset();
        window.closePublish();
    });

    function populateFormSelects() {
        var pCategory = document.getElementById('pCategory');
        if (pCategory) {
            pCategory.innerHTML = '<option value="">Selectionner une categorie</option>';
            categories.forEach(function(c) {
                pCategory.innerHTML += '<option value="' + c.name + '">' + c.name + '</option>';
            });
        }
        var pCountry = document.getElementById('pCountry');
        if (pCountry) {
            pCountry.innerHTML = '<option value="">Selectionner un pays</option>';
            countriesData.forEach(function(c) {
                pCountry.innerHTML += '<option value="' + c.name + '">' + c.flag + ' ' + c.name + '</option>';
            });
        }
    }

    console.log('[App] Demarrage');
    detectPiBrowser();
    loadPiSession();

    waitForPiSdk(5000)
        .then(function() {
            console.log('[Pi] SDK pret');
            initPiSdk();
            updatePiUI();
        })
        .catch(function() {
            console.warn('[Pi] SDK non charge. Ouvrez dans Pi Browser.');
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
