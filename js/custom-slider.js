// Custom Simple Slider JavaScript
(function() {
    'use strict';
    
    // Datos de los slides
    var slidesData = [
        {
            title: 'Promote a Team',
            subtitle: 'With Expert Web Developers',
            button: 'GET IN TOUCH',
            link: '/contact-us/',
            bg: 'images/slider-01-min.jpg'
        },
        {
            title: 'Test-Learn-Adopt',
            subtitle: 'A Website to Engage Every Visitor!',
            button: 'GET IN TOUCH',
            link: '/contact-us/',
            bg: 'images/slider-01-min.jpg'
        },
        {
            title: 'Marketing Is Not Just Links',
            subtitle: 'But Builds Valuable Relationships',
            button: 'GET IN TOUCH',
            link: '/contact-us/',
            bg: 'images/slider-01-min.jpg'
        }
    ];
    
    var currentSlide = 0;
    var autoPlayInterval;
    
    function initCustomSlider() {
        console.log('Initializing custom slider...');
        // Buscar el contenedor del Revolution Slider
        var revSliderWrapper = document.getElementById('rev_slider_1_1_wrapper');
        console.log('Slider wrapper:', revSliderWrapper);
        if (!revSliderWrapper) {
            console.log('Slider wrapper not found');
            return;
        }
        console.log('Creating custom slider...');
        
        // Ocultar el slider de Revolution
        var revSlider = document.getElementById('rev_slider_1_1');
        if (revSlider) {
            revSlider.style.display = 'none';
        }
        
        // Crear el slider personalizado
        var sliderHTML = '<div class="gcl-custom-slider-container">' +
            '<div class="gcl-custom-slider">';
        
        // Crear slides
        slidesData.forEach(function(slide, index) {
            var activeClass = index === 0 ? ' active' : '';
            sliderHTML += '<div class="gcl-slide' + activeClass + '" data-index="' + index + '">' +
                '<div class="gcl-slide-bg" style="background-image: url(\'' + slide.bg + '\');"></div>' +
                '<div class="gcl-slide-content">' +
                    '<h2 class="gcl-slide-title">' + slide.title + '</h2>' +
                    '<h3 class="gcl-slide-subtitle">' + slide.subtitle + '</h3>' +
                    '<a href="' + slide.link + '" class="gcl-slide-btn">' + slide.button + ' <i class="fa fa-minus"></i></a>' +
                '</div>' +
            '</div>';
        });
        
        sliderHTML += '</div>';
        
        // Agregar controles de navegación - Flechas
        sliderHTML += '<div class="gcl-slider-arrows">' +
            '<div class="gcl-slider-arrow gcl-arrow-up" onclick="gclSliderPrev()"><i class="fa fa-angle-up"></i></div>' +
            '<div class="gcl-slider-arrow gcl-arrow-down" onclick="gclSliderNext()"><i class="fa fa-angle-down"></i></div>' +
        '</div>';
        
        // Agregar bullets (índice)
        sliderHTML += '<div class="gcl-slider-bullets">';
        slidesData.forEach(function(slide, index) {
            var activeClass = index === 0 ? ' active' : '';
            sliderHTML += '<div class="gcl-slider-bullet' + activeClass + '" onclick="gclSliderGoto(' + index + ')"><span>0' + (index + 1) + '</span></div>';
        });
        sliderHTML += '</div>';
        
        sliderHTML += '</div>';
        
        // Insertar el nuevo slider
        revSliderWrapper.innerHTML = sliderHTML;
        revSliderWrapper.style.height = '742px';
        
        // Iniciar autoplay
        startAutoPlay();
    }
    
    // Funciones de navegación (globales para onclick)
    window.gclSliderNext = function() {
        goToSlide((currentSlide + 1) % slidesData.length);
    };
    
    window.gclSliderPrev = function() {
        goToSlide((currentSlide - 1 + slidesData.length) % slidesData.length);
    };
    
    window.gclSliderGoto = function(index) {
        goToSlide(index);
    };
    
    function goToSlide(index) {
        var slides = document.querySelectorAll('.gcl-slide');
        var bullets = document.querySelectorAll('.gcl-slider-bullet');
        
        if (!slides.length) return;
        
        // Remover clase active de todos
        slides.forEach(function(slide) {
            slide.classList.remove('active');
        });
        bullets.forEach(function(bullet) {
            bullet.classList.remove('active');
        });
        
        // Agregar clase active al actual
        if (slides[index]) {
            slides[index].classList.add('active');
        }
        if (bullets[index]) {
            bullets[index].classList.add('active');
        }
        
        currentSlide = index;
        
        // Reiniciar autoplay
        stopAutoPlay();
        startAutoPlay();
    }
    
    function startAutoPlay() {
        autoPlayInterval = setInterval(function() {
            window.gclSliderNext();
        }, 9000); // 9 segundos como el original
    }
    
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
    }
    
    // Inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(initCustomSlider, 100);
        });
    } else {
        setTimeout(initCustomSlider, 100);
    }
})();

