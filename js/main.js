/**
 * Main JavaScript for SitenizinAdi
 * Handles all interactive elements and animations
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Initialize Swiper testimonial slider
    const testimonialSlider = new Swiper('.testimonial-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            if (navLinks.classList.contains('active')) {
                menuToggle.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active Navigation Links
    const sections = document.querySelectorAll('section');
    const navLinksItems = document.querySelectorAll('.nav-links ul li a');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinksItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Back To Top Button
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    if (backToTop) {
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });
            
            // Open the clicked item if it wasn't already open
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Product Modal
    const modal = document.getElementById('productModal');
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    const closeModal = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalProductName = document.getElementById('modalProductName');
    const modalPrice = document.getElementById('modalPrice');
    const modalDescription = document.getElementById('modalDescription');
    const modalFeatures = document.getElementById('modalFeatures');
    const modalReviews = document.getElementById('modalReviews');

    // Product data
    const productData = {
        internal: {
            name: "Valorant INTERNAL",
            price: "₺499<span>/aylık</span>",
            description: "En gelişmiş ve kapsamlı çözümümüz olan Valorant INTERNAL, oyun içi belleğe doğrudan erişim sağlayarak rakiplerinize karşı maksimum avantaj sunar. %100 tespit edilemez şekilde tasarlanmış olup, Vanguard anti-cheat sistemini kolayca atlatır.",
            features: [
                "Gelişmiş ESP (Mesafe, İsim, Sağlık Bilgisi)",
                "Hassas ve Ayarlanabilir Aimbot",
                "No Recoil ve No Spread",
                "Skin Changer (Tüm Skinlere Erişim)",
                "Silent Aim (Görünmez Nişan Alma)",
                "Trigger Bot (Otomatik Ateş)",
                "Radar Hack (Mini Haritada Düşman Konumu)",
                "Hızlı Güncellemeler",
                "Tam Özelleştirilebilir Arayüz"
            ],
            reviews: [
                {
                    text: "6 aydır kullanıyorum ve hala ban yemedim. ESP ve Aimbot özellikleri mükemmel çalışıyor. Arkadaşlarım sürekli nasıl o kadar iyi oynadığımı soruyor. Kesinlikle tavsiye ederim!",
                    author: "Murat K.",
                    rating: 5
                },
                {
                    text: "Önce tereddüt ettim ama denedikten sonra çok memnun kaldım. Skin Changer özelliği ile tüm skinleri kullanabiliyorum ve ESP sayesinde her zaman avantajlı pozisyondayım.",
                    author: "Ayşe S.",
                    rating: 5
                },
                {
                    text: "Anti-cheat atlatma özelliği gerçekten iyi çalışıyor. 4 aydır kullanıyorum ve hiç sorun yaşamadım. Silent Aim özelliği oyun değiştirici!",
                    author: "Kerem D.",
                    rating: 4
                }
            ]
        },
        external: {
            name: "Valorant EXTERNAL",
            price: "₺329<span>/aylık</span>",
            description: "Valorant EXTERNAL, daha düşük ban riski ile temel hile özelliklerini sunan ürünümüzdür. Oyun belleğini doğrudan manipüle etmeden çalışır ve profesyonel oyuncular için idealdir.",
            features: [
                "Temel ESP (Düşman Konumu)",
                "Aim Assist (Hafif Nişan Yardımı)",
                "Radar Hack (Mini Haritada Düşman Konumu)",
                "Trigger Bot (Otomatik Ateş)",
                "Düşük Ban Riski",
                "Kolay Kurulum",
                "Hafif Sistem Gereksinimleri",
                "Oyun Güncellemelerinde Hızlı Uyum"
            ],
            reviews: [
                {
                    text: "INTERNAL kadar kapsamlı değil ama ban riski çok daha düşük. Profesyonel maçlarda bile kullanılabilir. ESP ve Radar özellikleri tam ihtiyacım olan şeydi.",
                    author: "Cem Y.",
                    rating: 5
                },
                {
                    text: "Fiyat/performans olarak çok iyi. Aim Assist ve Trigger Bot özellikleri bile yeterince avantaj sağlıyor. Önceki hesabım ban yediği için bunu tercih ettim ve memnunum.",
                    author: "Elif K.",
                    rating: 4
                },
                {
                    text: "Kurulumu çok kolay ve FPS düşüşü yaratmıyor. Hafif bir amaçlama yardımı ile oyun deneyimimi geliştirdi. Başlangıç için ideal.",
                    author: "Burak M.",
                    rating: 5
                }
            ]
        },
        bypass: {
            name: "Vanguard BYPASS",
            price: "₺249<span>/aylık</span>",
            description: "Vanguard BYPASS, Riot Games'in güçlü anti-cheat sistemini tamamen devre dışı bırakan özel çözümümüzdür. Diğer ürünlerimizle birlikte kullanılarak maksimum güvenlik sağlar.",
            features: [
                "Vanguard Anti-Cheat Bypass",
                "Kernel Düzeyinde Çalışma",
                "Driver Tabanlı Koruma",
                "Diğer Ürünlerimizle Tam Uyumluluk",
                "Oyun Güncellemelerinde Hızlı Uyum",
                "%100 Tespit Edilemezlik",
                "Otomatik Güncelleme",
                "Teknik Destek"
            ],
            reviews: [
                {
                    text: "Bu ürün sayesinde artık ban korkusu yaşamıyorum. Diğer hileleri güvenle kullanmamı sağlıyor. Teknik destek ekibi de çok yardımcı.",
                    author: "Mehmet A.",
                    rating: 5
                },
                {
                    text: "Vanguard'ı tamamen atlatıyor, gerçekten etkileyici! Oyun güncellemelerinden sonra bile hızlıca güncelleniyor. Parasının hakkını veriyor.",
                    author: "Deniz T.",
                    rating: 5
                },
                {
                    text: "İlk başta kurulumda biraz zorlandım ama destek ekibi yardımcı oldu. Şimdi sorunsuz çalışıyor ve INTERNAL ürününü güvenle kullanmamı sağlıyor.",
                    author: "Özge K.",
                    rating: 4
                }
            ]
        },
        spoofer: {
            name: "Valorant SPOOFER",
            price: "₺199<span>/aylık</span>",
            description: "Valorant SPOOFER, bilgisayarınızın donanım kimliğini (HWID) değiştirerek ban sonrası bile aynı bilgisayardan oyuna geri dönmenizi sağlar. Maximum güvenlik için vazgeçilmez bir üründür.",
            features: [
                "HWID (Donanım Kimliği) Değiştirme",
                "MAC Adresi Maskeleme",
                "Disk Seri Numarası Değiştirme",
                "CPU ID Maskeleme",
                "Ban Sonrası Temiz Hesap Kullanımı",
                "Otomatik Yenileme Özelliği",
                "Tüm Windows Sürümleriyle Uyumlu",
                "Kolay Kullanım Arayüzü"
            ],
            reviews: [
                {
                    text: "Ban yedikten sonra bu ürünle tekrar oynamaya başlayabildim. HWID değiştirme özelliği mükemmel çalışıyor ve kullanımı çok kolay.",
                    author: "Kaan F.",
                    rating: 5
                },
                {
                    text: "Spoofer + INTERNAL kombinasyonu kusursuz çalışıyor. 6 aydır kullanıyorum ve hiç sorun yaşamadım. Kesinlikle tavsiye ederim.",
                    author: "Zeynep K.",
                    rating: 5
                },
                {
                    text: "Fiyatına göre sunduğu değer inanılmaz. Artık ban yesem bile 5 dakika içinde yeni hesapla geri dönebiliyorum. Vazgeçilmez bir ürün!",
                    author: "Ali R.",
                    rating: 4
                }
            ]
        }
    };

    // Open modal with product details
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product');
            const product = productData[productId];
            
            modalTitle.textContent = "Ürün Detayları";
            modalProductName.textContent = product.name;
            modalPrice.innerHTML = product.price;
            modalDescription.textContent = product.description;
            
            // Add features
            modalFeatures.innerHTML = '';
            product.features.forEach(feature => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fas fa-check"></i> ${feature}`;
                modalFeatures.appendChild(li);
            });
            
            // Add reviews
            modalReviews.innerHTML = '';
            product.reviews.forEach(review => {
                const reviewDiv = document.createElement('div');
                reviewDiv.className = 'modal-review';
                
                const ratingDiv = document.createElement('div');
                ratingDiv.className = 'rating';
                for (let i = 0; i < 5; i++) {
                    const icon = document.createElement('i');
                    if (i < Math.floor(review.rating)) {
                        icon.className = 'fas fa-star';
                    } else if (i === Math.floor(review.rating) && review.rating % 1 !== 0) {
                        icon.className = 'fas fa-star-half-alt';
                    } else {
                        icon.className = 'far fa-star';
                    }
                    ratingDiv.appendChild(icon);
                }
                
                const reviewText = document.createElement('p');
                reviewText.className = 'modal-review-text';
                reviewText.textContent = review.text;
                
                const reviewerDiv = document.createElement('div');
                reviewerDiv.className = 'modal-reviewer';
                
                const reviewerInfo = document.createElement('div');
                reviewerInfo.className = 'modal-reviewer-info';
                
                const reviewerName = document.createElement('h5');
                reviewerName.textContent = review.author;
                
                reviewerInfo.appendChild(reviewerName);
                reviewerDiv.appendChild(reviewerInfo);
                
                reviewDiv.appendChild(ratingDiv);
                reviewDiv.appendChild(reviewText);
                reviewDiv.appendChild(reviewerDiv);
                
                modalReviews.appendChild(reviewDiv);
            });
            
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });

    // Buy button in modal (redirect to Discord)
    const modalBuyBtn = document.getElementById('modalBuyBtn');
    if (modalBuyBtn) {
        modalBuyBtn.addEventListener('click', () => {
            window.open('https://discord.gg/sunucunuzunadi', '_blank');
        });
    }
});
