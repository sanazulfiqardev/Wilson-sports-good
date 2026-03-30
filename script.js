        // Product Data with matching brand images
        const products = [
            // Nike Shoes
            {
                id: 1,
                name: "Nike Mercurial Superfly",
                brand: "nike",
                category: "Football Boots",
                price: "24,999 PKR",
                image: "https://www.soccerbible.com/media/96596/5nike-mercurial-superfly-vii-blue.jpg",
                features: "Flyknit upper, Dynamic Fit collar, All Conditions Control technology",
                specs: { material: "Synthetic", weight: "180g", surface: "Firm Ground" }
            },
            {
                id: 2,
                name: "Nike Phantom GT Elite",
                brand: "nike",
                category: "Football Boots",
                price: "30,999 PKR",
                image: "https://tamam-mauritius.com/cdn/shop/files/nike-phantom-gx-elite-tf-artificial-turf-black-white-red-soccer-cleats-822.webp?v=1736405301",
                features: "Generative texture, Off-center lacing, Hyperquick system",
                specs: { material: "Flyknit", weight: "195g", surface: "Multi-Ground" }
            },
            {
                id: 3,
                name: "Nike Tiempo Legend 9",
                brand: "nike",
                category: "Football Boots",
                price: "45,999 PKR",
                image: "https://upper90football.com/wp-content/uploads/2022/11/defenders.jpg",
                features: "Premium kangaroo leather, Flywire cables, Hyperstability plate",
                specs: { material: "Leather", weight: "210g", surface: "Firm Ground" }
            },
            {
                id: 4,
                name: "Nike FIFA Ball",
                brand: "nike",
                category: "Match Ball",
                price: "70,000 PKR",
                image: "https://www.soccerbible.com/media/136835/prem-5-min.jpg",
                features: "React foam, Zoom Air unit, Breathable mesh upper",
                specs: { material: "Mesh", weight: "250g", surface: "Road" }
            },
            {
                id: 5,
                name: "Nike CR7 Edition",
                brand: "nike",
                category: "CR 7 Edition",
                price: "120,000 PKR",
                image: "https://i.pinimg.com/736x/b8/13/f1/b813f1bd0a74120f6b1a3cf3e44c580a.jpg",
                features: "Zone Skin upper, Power Facet, Weighted rubber elements",
                specs: { material: "Synthetic", weight: "320g", surface: "Gym" }
            },

            // Adidas Shoes
            {
                id: 6,
                name: "Adidas Vector",
                brand: "adidas",
                category: "Cricket Spikes",
                price: "70,000 PKR",
                image: "https://i.ytimg.com/vi/DnIPRedftQc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCioo6wsRuKvFXnxqBmoVacGcy7Dw",
                features: "Zone Skin upper, Power Facet, Weighted rubber elements",
                specs: { material: "Synthetic", weight: "185g", surface: "Firm Ground" }
            },
            {
                id: 7,
                name: "Adidas Incurza",
                brand: "adidas",
                category: "Cricket Bat",
                price: "35,000 PKR",
                image: "https://2.imimg.com/data2/UJ/AS/MY-/adidas-bat-500x500.jpg",
                features: "Speedskin 2.0, Carbon fiber Speedframe, Primeknit collar",
                specs: { material: "Synthetic", weight: "175g", surface: "Firm Ground" }
            },
            {
                id: 8,
                name: "Adidas Cricket Kit",
                brand: "adidas",
                category: "Criket Kit",
                price: "20,000 PKR",
                image: "https://i.ebayimg.com/images/g/o7UAAOSwl3Vf7cJN/s-l1200.jpg",
                features: "Fusionskin leather, Sensepods, Touchpods",
                specs: { material: "Leather", weight: "220g", surface: "Firm Ground" }
            },
            {
                id: 9,
                name: "Adidas Cricket Gloves",
                brand: "adidas",
                category: "Batting Gloves",
                price: "10,000 PKR",
                image: "https://i.pinimg.com/736x/00/99/d1/0099d16e810572df3d3410c9ece3c38c.jpg",
                features: "Boost midsole, Primeknit upper, Continental rubber outsole",
                specs: { material: "Primeknit", weight: "290g", surface: "Road" }
            },
            {
                id: 10,
                name: "Adidas Wearings",
                brand: "adidas",
                category: "Daily Wear Shoes",
                price: "25,000 PKR",
                image: "https://assets.ajio.com/medias/sys_master/root/20240112/VH7K/65a1513d74cb305fe014d620/-1117Wx1400H-469584866-white-MODEL.jpg",
                features: "Lightstrike cushioning, Boost heel, X-shaped TPU",
                specs: { material: "Textile", weight: "380g", surface: "Indoor" }
            },

            // Puma Shoes
            {
                id: 11,
                name: "Puma Padel Collection",
                brand: "puma",
                category: "Padel ",
                price: "12,000 PKR",
                image: "https://www.padeladdict.com/wp-content/uploads/2023/03/puma-presenta-su-coleccion-de-padel-ss23-nuevos-productos-3.jpg",
                features: "ULTRAWEAVE upper, PWRPRINT technology, Pebax outsole",
                specs: { material: "Synthetic", weight: "160g", surface: "Firm Ground" }
            },
            {
                id: 12,
                name: "Puma Basket Ball",
                brand: "puma",
                category: "Basket Ball",
                price: "21,000 PKR",
                image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/083620/01/mod02/fnd/PNA/fmt/png/Indoor-Basketball",
                features: "FUZIONFIT+ compression band, Dynamic Motion System",
                specs: { material: "Mesh", weight: "195g", surface: "Firm Ground" }
            },
            {
                id: 13,
                name: "Puma Light Up",
                brand: "puma",
                category: "Football Boots",
                price: "160,000 PKR",
                image: "https://www.soccerbible.com/media/172969/recharge4-min.jpg",
                features: "K-leather upper, Lightweight RAPIDSPRINT outsole",
                specs: { material: "Leather", weight: "205g", surface: "Firm Ground" }
            },
            {
                id: 14,
                name: "Puma Football Boots",
                brand: "puma",
                category: "Football Shoes",
                price: "200,000 PKR",
                image: "https://pbs.twimg.com/media/Gg1iBPqXwAAtOfx?format=jpg&name=large",
                features: "NITRO Elite foam, Carbon fiber plate, Mono mesh upper",
                specs: { material: "Mesh", weight: "200g", surface: "Road" }
            },
           

            // Reebok Shoes
            {
                id: 16,
                name: "Reebok Nano X2",
                brand: "reebok",
                category: "Training Shoes",
                price: "120,999 PKR",
                image: "https://hips.hearstapps.com/hmg-prod/images/run-reebok-running-shoes-64e3beadbe692.jpg?crop=1xw:1xh;center,top&resize=1200:*",
                features: "Floatride Energy Foam, TPU heel clip, Flexweave upper",
                specs: { material: "Flexweave", weight: "310g", surface: "Gym" }
            },
            {
                id: 17,
                name: "Reebok Zig Kinetica",
                brand: "reebok",
                category: "Basket Ball Shoes",
                price: "13,.999 PKR",
                image: "https://s.yimg.com/ny/api/res/1.2/3oPwMbZtwtObvfl2Pf3ARw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMjQ7aD02ODM7Y2Y9d2VicA--/https://media.zenfs.com/en-US/homerun/footwear_news_642/a89feb52017fedc8d78a1254cf1c562e",
                features: "Zig Energy Shell, Floatride Fuel, Zig Energy Bands",
                specs: { material: "Textile", weight: "280g", surface: "Road" }
            },
           

            // Under Armour Shoes
            {
                id: 19,
                name: "UA Cap",
                brand: "underarmour",
                category: "Cap",
                price: "12,000 PKR",
                image: "https://about.underarmour.com/content/ua/about/en/stories/2024/04/introducing-the-hat-only-under-armour-could-make/_jcr_content/root/container/image.coreimg.jpg",
                features: "UA Flow cushioning, Warp technology, Pebax plate",
                specs: { material: "Textile", weight: "340g", surface: "Indoor" }
            },
           
            {
                id: 21,
                name: "UA Project Rock 5",
                brand: "underarmour",
                category: "Training Shoes",
                price: "130,999 PKR",
                image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2017%2F04%2Fthe-rock-under-armour-tw.jpg?w=1080&cbr=1&q=90&fit=max",
                features: "UA HOVR technology, Tribase outsole, Durable upper",
                specs: { material: "Synthetic", weight: "360g", surface: "Gym" }
            },

            //  Gray-Nicolls Cricket
            {
                id: 22,
                name: "GrayNicolls Ball",
                brand: "GrayNicolls",
                category: "Official Ball",
                price: "20,000 PKR",
                image: "https://www.gray-nicolls.co.uk/cdn/shop/collections/Balls_8f7a5fa8-0098-47d7-a4e7-e7d87d5abf4a.jpg?v=1731664831",
                features: "Grade 1 English Willow, Mid-blade sweet spot, Semi-oval handle",
                specs: { material: "English Willow", weight: "2.8 lbs", grade: "Grade 1" }
            },
            {
                id: 23,
                name: " GrayNicolls Legend",
                brand: "GrayNicolls",
                category: "Cricket Bat",
                price: "300,000 PKR",
                image: "https://cdn.shopify.com/s/files/1/0012/8797/9121/files/1152008_Havoc_1.0_Pro_Bat_HERO_1156.jpg?v=1758102037",
                features: "Hand-selected willow, Low sweet spot, Traditional blade",
                specs: { material: "English Willow", weight: "2.9 lbs", grade: "Players" }
            },
           
        ];

        // Brand Logo Mapping - Using reliable external sources
        const brandLogos = {
            nike: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png',
            adidas: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1200px-Adidas_Logo.svg.png',
            puma: 'https://i.pinimg.com/736x/19/58/44/19584422dd025495732e84f7d531a6ea.jpg',
            reebok: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Reebok_2019_logo.svg/1200px-Reebok_2019_logo.svg.png',
            underarmour: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Under_armour_logo.svg/1200px-Under_armour_logo.svg.png',
            GrayNicolls: 'https://i.postimg.cc/ZqCKcS59/Gray-Nicolls-Secondary-Logo-Mono-Negative-2116x630-removebg-preview.png' , 
        };

        let compareList = [];
        let currentFilter = 'all';

        // Initialize
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loader = document.getElementById('loader');
                if (loader) {
                    loader.classList.add('hidden');
                }
            }, 2000);
            
            renderProducts();
            createParticles();
        });

        // Create floating particles
        function createParticles() {
            const container = document.getElementById('particles');
            if (!container) return;

            const isMobile = window.innerWidth <= 768;
            const particleCount = isMobile ? 25 : 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 10 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                container.appendChild(particle);
            }
        }

        // Mobile menu functions
        function toggleMobileMenu() {
            const navLinks = document.getElementById('navLinks');
            if (!navLinks) return;
            navLinks.classList.toggle('active');
        }

        function closeMobileMenu() {
            const navLinks = document.getElementById('navLinks');
            if (!navLinks) return;
            navLinks.classList.remove('active');
        }

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (!navbar) return;

            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Render Products
        function renderProducts(filter = 'all') {
            const grid = document.getElementById('productsGrid');
            if (!grid) return;

            grid.innerHTML = '';
            
            const filtered = filter === 'all' 
                ? products 
                : products.filter(p => p.brand === filter);
            
            filtered.forEach((product, index) => {
                const card = createProductCard(product, index);
                grid.appendChild(card);
            });
        }

        function createProductCard(product, index) {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.style.animationDelay = `${index * 0.1}s`;
            
            const isInCompare = compareList.find(p => p.id === product.id);
            
            // Determine brand logo with fallback
            let brandLogoUrl = brandLogos[product.brand];
            let brandLogoStyle = '';
            
            // Apply filters for visibility on dark backgrounds
            if (['nike', 'adidas', 'reebok', 'underarmour'].includes(product.brand)) {
                brandLogoStyle = 'style="filter: brightness(0) invert(1);"';
            }
            
            card.innerHTML = `
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                    <div class="product-brand-logo">
                        <img src="${brandLogoUrl}" alt="${product.brand}" ${brandLogoStyle} onerror="this.style.display='none'">
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">${product.price}</div>
                    <p class="product-features">${product.features}</p>
                    <div class="product-actions">
                        <a href="#" class="btn-download" onclick="event.preventDefault(); downloadDoc('${product.name}')">
                            <i class="fas fa-file-word"></i> Details
                        </a>
                        <button class="btn-compare ${isInCompare ? 'active' : ''}" onclick="toggleCompareItem(${product.id})" title="Add to Compare">
                            <i class="fas fa-exchange-alt"></i>
                        </button>
                    </div>
                </div>
            `;
            
            return card;
        }

        // Filter Products
        function filterProducts(brand) {
            currentFilter = brand;
            
            // Update active button
            document.querySelectorAll('.brand-filter').forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.brand === brand || (brand === 'all' && btn.classList.contains('all'))) {
                    btn.classList.add('active');
                }
            });
            
            // Animate grid out
            const grid = document.getElementById('productsGrid');
            if (!grid) return;

            grid.style.opacity = '0';
            grid.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                renderProducts(brand);
                grid.style.transition = 'all 0.6s ease';
                grid.style.opacity = '1';
                grid.style.transform = 'translateY(0)';
            }, 300);
        }

        // Download Document
        function downloadDoc(productName) {
            const content = `
WILSON SPORTS & GOODS - PRODUCT SPECIFICATIONS
Product: ${productName}
Date: ${new Date().toLocaleDateString()}

PRODUCT DETAILS:
${productName} is a premium sporting equipment designed for professional and amateur athletes alike. This product meets international standards and is approved by relevant sporting authorities.

FEATURES:
- Premium quality materials
- Ergonomic design for maximum performance
- Durable construction for long-lasting use
- Tested by professional athletes
- 1-year warranty included

CARE INSTRUCTIONS:
- Clean after each use
- Store in a cool, dry place
- Avoid exposure to extreme temperatures
- Use appropriate cleaning products

For more information, contact us at info@wilsonsports.com
            `;
            
            const blob = new Blob([content], { type: 'application/msword' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${productName.replace(/\s+/g, '_')}_Specs.doc`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }

        // Comparison Functions
        function toggleCompareItem(productId) {
            const product = products.find(p => p.id === productId);
            const existingIndex = compareList.findIndex(p => p.id === productId);
            
            if (existingIndex > -1) {
                compareList.splice(existingIndex, 1);
            } else {
                if (compareList.length >= 3) {
                    alert('You can compare up to 3 products at a time');
                    return;
                }
                compareList.push(product);
            }
            
            updateComparisonPanel();
            renderProducts(currentFilter);
        }

        function updateComparisonPanel() {
            const panel = document.getElementById('comparisonPanel');
            const itemsContainer = document.getElementById('comparisonItems');
            
            if (!panel || !itemsContainer) return;

            if (compareList.length === 0) {
                panel.classList.remove('active');
                return;
            }
            
            panel.classList.add('active');
            itemsContainer.innerHTML = compareList.map(p => `
                <div class="comparison-item">
                    ${p.name}
                    <button class="remove-item" onclick="toggleCompareItem(${p.id})">×</button>
                </div>
            `).join('');
        }

        function toggleComparison() {
            const panel = document.getElementById('comparisonPanel');
            if (!panel) return;
            panel.classList.remove('active');
        }

        function showComparison() {
            if (compareList.length < 2) {
                alert('Please select at least 2 products to compare');
                return;
            }
            
            const modal = document.getElementById('comparisonModal');
            const table = document.getElementById('comparisonTable');
            if (!modal || !table) return;
            
            table.innerHTML = compareList.map(product => `
                <div class="comparison-product">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <h4>${product.name}</h4>
                    <div class="spec-row">
                        <span class="spec-label">Brand</span>
                        <span class="spec-value" style="text-transform: capitalize;">${product.brand}</span>
                    </div>
                    <div class="spec-row">
                        <span class="spec-label">Category</span>
                        <span class="spec-value">${product.category}</span>
                    </div>
                    <div class="spec-row">
                        <span class="spec-label">Price</span>
                        <span class="spec-value" style="color: var(--accent-gold);">${product.price}</span>
                    </div>
                    ${Object.entries(product.specs).map(([key, value]) => `
                        <div class="spec-row">
                            <span class="spec-label" style="text-transform: capitalize;">${key}</span>
                            <span class="spec-value">${value}</span>
                        </div>
                    `).join('')}
                    <div class="spec-row" style="margin-top: 15px; border-top: 2px solid var(--primary-red); padding-top: 15px;">
                        <span class="spec-label">Features</span>
                    </div>
                    <p style="font-size: 0.9rem; color: var(--text-gray); margin-top: 10px; line-height: 1.6;">${product.features}</p>
                </div>
            `).join('');
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeComparison() {
            const modal = document.getElementById('comparisonModal');
            if (!modal) return;
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Close modal on outside click
        document.addEventListener('DOMContentLoaded', () => {
            const comparisonModal = document.getElementById('comparisonModal');
            if (comparisonModal) {
                comparisonModal.addEventListener('click', (e) => {
                    if (e.target === e.currentTarget) {
                        closeComparison();
                    }
                });
            }
        });

        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeComparison();
            }
        });

        // Smooth scroll
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    const href = this.getAttribute('href');
                    if (!href || href === '#') return;

                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const offsetTop = target.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            // Recreate particles on resize for mobile optimization
            const container = document.getElementById('particles');
            if (!container) return;
            container.innerHTML = '';
            createParticles();
        });
        // Available brands on the website
const availableBrands = ['nike', 'adidas', 'puma', 'reebok', 'underarmour', 'graynicolls', 'gray-nicolls', 'gray nicolls'];

// Search and Filter State
let searchQuery = '';
let priceSortOrder = 'default';
let filteredProducts = [...products];

// Search Products Function - Searches by brand or product name
function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    searchQuery = searchInput.value.toLowerCase().trim();
    
    // Toggle clear button
    if (searchQuery.length > 0) {
        searchClear.classList.add('visible');
    } else {
        searchClear.classList.remove('visible');
    }
    
    // Check if search matches a brand name
    const matchedBrand = checkBrandMatch(searchQuery);
    
    if (matchedBrand) {
        // If brand found, activate that brand filter
        filterProductsByBrand(matchedBrand);
        return;
    }
    
    // Otherwise, search within current filter
    applyFilters();
}

// Check if search query matches any brand
function checkBrandMatch(query) {
    if (!query) return null;
    
    // Check for exact brand matches
    for (let brand of availableBrands) {
        if (query === brand || query === brand.replace(/-/g, '') || query === brand.replace(/-/g, ' ')) {
            // Return the brand key used in your products data
            if (brand === 'graynicolls' || brand === 'gray-nicolls' || brand === 'gray nicolls') {
                return 'GrayNicolls';
            }
            // Capitalize first letter for other brands
            return brand.charAt(0).toUpperCase() + brand.slice(1).toLowerCase();
        }
    }
    
    // Check if query contains brand name
    for (let brand of availableBrands) {
        if (query.includes(brand) || query.includes(brand.replace(/-/g, '')) || query.includes(brand.replace(/-/g, ' '))) {
            if (brand === 'graynicolls' || brand === 'gray-nicolls' || brand === 'gray nicolls') {
                return 'GrayNicolls';
            }
            return brand.charAt(0).toUpperCase() + brand.slice(1).toLowerCase();
        }
    }
    
    return null;
}

// Filter products by brand (updates UI and shows products)
function filterProductsByBrand(brand) {
    currentFilter = brand.toLowerCase();
    
    // Update active button state
    document.querySelectorAll('.brand-filter').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.brand && btn.dataset.brand.toLowerCase() === currentFilter) {
            btn.classList.add('active');
            // Add highlight animation
            btn.classList.add('brand-highlight');
            setTimeout(() => btn.classList.remove('brand-highlight'), 2000);
        }
    });
    
    // Scroll to products section smoothly
    document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    applyFilters();
}

// Clear Search Function
function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    
    searchInput.value = '';
    searchQuery = '';
    searchClear.classList.remove('visible');
    searchInput.focus();
    
    // Reset to show all products or keep current brand filter
    applyFilters();
}

// Sort Products by Price
function sortProductsByPrice() {
    const sortSelect = document.getElementById('priceSort');
    priceSortOrder = sortSelect.value;
    
    applyFilters();
}

// Parse Price String to Number (converts "24,999 PKR" to 24999)
function parsePrice(priceString) {
    if (!priceString) return 0;
    // Remove non-numeric characters except decimal point
    const numericString = priceString.replace(/[^0-9.]/g, '');
    return parseFloat(numericString) || 0;
}

// Apply Both Search and Sort Filters
function applyFilters() {
    let result = [...products];
    
    // Apply Brand Filter if active (and not 'all')
    if (currentFilter && currentFilter !== 'all') {
        result = result.filter(p => {
            // Handle case-insensitive brand matching
            const productBrand = p.brand.toLowerCase();
            const filterBrand = currentFilter.toLowerCase();
            return productBrand === filterBrand || 
                   productBrand === filterBrand.replace(/-/g, '') ||
                   productBrand === filterBrand.replace(/-/g, ' ');
        });
    }
    
    // Apply Text Search (if no brand match, search within results)
    if (searchQuery && !checkBrandMatch(searchQuery)) {
        result = result.filter(product => {
            const nameMatch = product.name.toLowerCase().includes(searchQuery);
            const categoryMatch = product.category.toLowerCase().includes(searchQuery);
            const featuresMatch = product.features.toLowerCase().includes(searchQuery);
            const brandMatch = product.brand.toLowerCase().includes(searchQuery);
            
            return nameMatch || categoryMatch || featuresMatch || brandMatch;
        });
    }
    
    // Apply Price Sort
    if (priceSortOrder === 'high-to-low') {
        result.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    } else if (priceSortOrder === 'low-to-high') {
        result.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    }
    
    filteredProducts = result;
    renderFilteredProducts();
    updateResultsCount();
}

// Render Filtered Products
function renderFilteredProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        const brandNames = availableBrands.map(b => b.charAt(0).toUpperCase() + b.slice(1)).join(', ');
        grid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No Products Found</h3>
                <p>Try searching for: ${brandNames}</p>
                <p style="font-size: 0.85rem; margin-top: 10px; opacity: 0.7;">Or check your spelling and try again</p>
            </div>
        `;
        return;
    }
    
    filteredProducts.forEach((product, index) => {
        const card = createProductCard(product, index);
        grid.appendChild(card);
    });
}

// Update Results Count Display
function updateResultsCount() {
    const countElement = document.getElementById('resultsCount');
    if (!countElement) return;
    
    const total = products.length;
    const showing = filteredProducts.length;
    const brandName = currentFilter !== 'all' ? currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1) : 'All';
    
    if (searchQuery) {
        countElement.textContent = `Found ${showing} products for "${searchQuery}" in ${brandName}`;
    } else {
        countElement.textContent = `Showing ${showing} of ${total} products (${brandName})`;
    }
}

// Override the original filterProducts function to work with new system
const originalFilterProducts = filterProducts;
filterProducts = function(brand) {
    currentFilter = brand;
    searchQuery = ''; // Reset search when clicking brand button
    document.getElementById('searchInput').value = '';
    document.getElementById('searchClear').classList.remove('visible');
    
    // Update active button
    document.querySelectorAll('.brand-filter').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.brand === brand || (brand === 'all' && btn.classList.contains('all'))) {
            btn.classList.add('active');
        }
    });
    
    // Animate grid out
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    grid.style.opacity = '0';
    grid.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        applyFilters();
        grid.style.transition = 'all 0.6s ease';
        grid.style.opacity = '1';
        grid.style.transform = 'translateY(0)';
    }, 300);
};

// Override renderProducts to use the new filtering system
renderProducts = function(filter = 'all') {
    currentFilter = filter;
    applyFilters();
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    // Initial render
    applyFilters();
});