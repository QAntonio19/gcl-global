// Fix para Revolution Slider - Fuerza la visualización de elementos
(function($) {
    'use strict';
    
    $(document).ready(function() {
        // Forzar visibilidad de todos los elementos del slider
        setTimeout(function() {
            // Hacer visibles todas las capas del slider
            $('.tp-caption').css({
                'visibility': 'visible !important',
                'opacity': '1 !important',
                'display': 'block !important'
            });
            
            // Hacer visible el slider principal
            $('.rev_slider, .rev_slider_wrapper').css({
                'visibility': 'visible !important',
                'opacity': '1 !important'
            });
            
            // Asegurar que las bullets (índices) sean visibles
            $('.tp-bullet').css({
                'visibility': 'visible',
                'opacity': '1'
            });
            
            // Asegurar que las flechas sean visibles
            $('.tparrows').css({
                'visibility': 'visible',
                'opacity': '1'
            });
            
            // Hacer visible el primer slide
            $('.rev_slider ul li').first().css({
                'visibility': 'visible',
                'opacity': '1',
                'z-index': '20'
            });
            
        }, 500);
        
        // Prevenir errores en data-frames
        try {
            if (typeof revapi1 !== 'undefined') {
                console.log('Revolution Slider initialized');
            }
        } catch(e) {
            console.log('Using fallback slider display');
            // Si el slider falla, forzar mostrar el primer slide
            $('.tp-caption, .rev_slider, .rev_slider_wrapper').css('visibility', 'visible');
        }
    });
})(jQuery);


