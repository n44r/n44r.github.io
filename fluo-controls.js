$(document).ready(function() {
    const currentIntensity = 50; // Fixed at 50%
    const greenColor = '#00ff00'; // Fixed green color
    
    // Apply fluorescent effects at 50% intensity
    function applyFluoEffects() {
        const baseIntensity = currentIntensity / 100;
        const rgbaColor = `rgba(0, 255, 0, ${baseIntensity})`;
        
        // Create CSS variables for the current intensity
        document.documentElement.style.setProperty('--fluo-color', greenColor);
        document.documentElement.style.setProperty('--fluo-rgba', rgbaColor);
        document.documentElement.style.setProperty('--fluo-intensity', baseIntensity);
        
        // Update text colors and shadows
        const glowIntensity = Math.max(5, 20 * baseIntensity);
        const shadowBlur = Math.max(5, 15 * baseIntensity);
        
        // Apply to various elements
        $('body, .banner-text p, .navigation a, h2, h3, .post-content, .home-content p').css({
            'color': greenColor,
            'text-shadow': `0 0 ${glowIntensity}px ${rgbaColor}, 0 0 ${shadowBlur}px ${rgbaColor}`
        });
        
        // Update borders and box shadows
        $('.container, .banner, .blog-post, .error-box, .home-content, .navigation a:hover').css({
            'border-color': greenColor,
            'box-shadow': `0 0 ${shadowBlur}px ${rgbaColor}`
        });
        
        // Update background gradients
        $('body').css({
            'background-image': `
                radial-gradient(circle at 20% 80%, ${rgbaColor} 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, ${rgbaColor} 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, ${rgbaColor} 0%, transparent 50%)
            `
        });
        
        // Update banner background
        $('.banner').css({
            'background': `linear-gradient(45deg, ${rgbaColor}, #00330022, ${rgbaColor})`
        });
    }
    
    // Apply effects on page load
    applyFluoEffects();
});