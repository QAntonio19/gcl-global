// Simple Slider Replacement - Funcional sin Revolution Slider
(function() {
    'use strict';
    
    // Esperar a que el DOM esté listo
    function initSimpleSlider() {
        var currentSlide = 0;
        var slides = document.querySelectorAll('.rev_slider ul li');
        var totalSlides = slides.length;
        
        if (totalSlides === 0) return;
        
        // Ocultar todos los slides excepto el primero
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
            slides[i].style.position = 'absolute';
            slides[i].style.top = '0';
            slides[i].style.left = '0';
            slides[i].style.width = '100%';
            slides[i].style.height = '100%';
        }
        
        // Mostrar el primer slide
        if (slides[0]) {
            slides[0].style.display = 'block';
            slides[0].style.zIndex = '20';
        }
        
        // Hacer visibles todos los elementos del slider
        var allCaptions = document.querySelectorAll('.tp-caption');
        for (var j = 0; j < allCaptions.length; j++) {
            allCaptions[j].style.visibility = 'visible';
            allCaptions[j].style.opacity = '1';
        }
        
        // Función para cambiar de slide
        function goToSlide(index) {
            if (index < 0) index = totalSlides - 1;
            if (index >= totalSlides) index = 0;
            
            // Ocultar todos
            for (var k = 0; k < slides.length; k++) {
                slides[k].style.display = 'none';
                slides[k].style.zIndex = '10';
            }
            
            // Mostrar el actual
            slides[index].style.display = 'block';
            slides[index].style.zIndex = '20';
            
            currentSlide = index;
            
            // Actualizar bullets
            updateBullets();
        }
        
        // Crear controles de navegación (flechas)
        var slider = document.querySelector('.rev_slider_wrapper');
        if (slider) {
            // Flecha arriba (anterior)
            var arrowUp = document.createElement('div');
            arrowUp.className = 'tparrows custom tp-leftarrow';
            arrowUp.style.cssText = 'position: absolute; right: 110px; top: 50%; margin-top: -100px; cursor: pointer; z-index: 1000;';
            arrowUp.onclick = function() { goToSlide(currentSlide - 1); };
            slider.appendChild(arrowUp);
            
            // Flecha abajo (siguiente)
            var arrowDown = document.createElement('div');
            arrowDown.className = 'tparrows custom tp-rightarrow';
            arrowDown.style.cssText = 'position: absolute; right: 110px; top: 50%; margin-top: 10px; cursor: pointer; z-index: 1000;';
            arrowDown.onclick = function() { goToSlide(currentSlide + 1); };
            slider.appendChild(arrowDown);
            
            // Crear bullets (índice)
            var bulletsContainer = document.createElement('div');
            bulletsContainer.className = 'tp-bullets';
            bulletsContainer.style.cssText = 'position: absolute; left: 110px; top: 50%; transform: translateY(-50%); z-index: 1000;';
            
            for (var m = 0; m < totalSlides; m++) {
                var bullet = document.createElement('div');
                bullet.className = 'tp-bullet';
                bullet.setAttribute('data-index', m);
                bullet.style.cssText = 'margin-bottom: 80px; cursor: pointer;';
                
                var bulletTitle = document.createElement('span');
                bulletTitle.className = 'tp-bullet-title';
                bulletTitle.textContent = '0' + (m + 1);
                bullet.appendChild(bulletTitle);
                
                bullet.onclick = (function(idx) {
                    return function() { goToSlide(idx); };
                })(m);
                
                bulletsContainer.appendChild(bullet);
            }
            
            slider.appendChild(bulletsContainer);
        }
        
        // Función para actualizar el estado de los bullets
        function updateBullets() {
            var bullets = document.querySelectorAll('.tp-bullet');
            for (var n = 0; n < bullets.length; n++) {
                if (n === currentSlide) {
                    bullets[n].classList.add('selected');
                } else {
                    bullets[n].classList.remove('selected');
                }
            }
        }
        
        // Inicializar bullets
        updateBullets();
        
        // Auto-play (cambiar cada 9 segundos)
        setInterval(function() {
            goToSlide(currentSlide + 1);
        }, 9000);
        
        // Hacer visible el slider
        var revSlider = document.querySelector('.rev_slider');
        var revWrapper = document.querySelector('.rev_slider_wrapper');
        if (revSlider) revSlider.style.visibility = 'visible';
        if (revWrapper) revWrapper.style.visibility = 'visible';
    }
    
    // Ejecutar cuando el documento esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(initSimpleSlider, 100);
        });
    } else {
        setTimeout(initSimpleSlider, 100);
    }
})();


