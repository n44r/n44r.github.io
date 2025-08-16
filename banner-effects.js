$(document).ready(function() {
    const banner = $('.banner');
    const bannerText = $('.banner-text');
    let animationFrameId;
    let particles = [];
    const originalText = '"That the powerful play goes on, and you may contribute a verse"';
    
    // Create canvas for particle effects
    const canvas = $('<canvas>').addClass('particle-canvas');
    banner.append(canvas);
    const ctx = canvas[0].getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas[0].width = banner.width();
        canvas[0].height = banner.height();
    }
    resizeCanvas();
    $(window).resize(resizeCanvas);
    
    // Particle class for digital rain effect
    class Particle {
        constructor() {
            this.x = Math.random() * canvas[0].width;
            this.y = Math.random() * canvas[0].height;
            this.speed = Math.random() * 3 + 1;
            this.size = Math.random() * 3 + 1;
            this.opacity = Math.random() * 0.5 + 0.2;
            this.char = String.fromCharCode(0x30A0 + Math.random() * 96); // Katakana characters
        }
        
        update() {
            this.y += this.speed;
            if (this.y > canvas[0].height) {
                this.y = -10;
                this.x = Math.random() * canvas[0].width;
            }
        }
        
        draw() {
            const fluoColor = getComputedStyle(document.documentElement).getPropertyValue('--fluo-rgba') || 'rgba(0, 255, 0, 0.5)';
            // Extract RGB values and apply particle opacity
            const rgbMatch = fluoColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
            if (rgbMatch) {
                const [, r, g, b] = rgbMatch;
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
            } else {
                ctx.fillStyle = `rgba(0, 255, 0, ${this.opacity})`;
            }
            ctx.font = `${this.size * 8}px monospace`;
            ctx.fillText(this.char, this.x, this.y);
        }
    }
    
    // Create particles
    function createParticles() {
        particles = [];
        for (let i = 0; i < 30; i++) {
            particles.push(new Particle());
        }
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas[0].width, canvas[0].height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        animationFrameId = requestAnimationFrame(animate);
    }
    
    // Digital glitch effect for text
    function glitchText() {
        const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        
        let glitchedText = '';
        for (let i = 0; i < originalText.length; i++) {
            if (Math.random() < 0.05) { // Lower probability for less aggressive glitching
                glitchedText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
            } else {
                glitchedText += originalText[i];
            }
        }
        
        bannerText.find('p').text(glitchedText);
        
        setTimeout(() => {
            bannerText.find('p').text(originalText);
            setTimeout(glitchText, Math.random() * 1000 + 500); // Slower glitch rate
        }, 100);
    }
    
    // Initialize permanent effects
    banner.addClass('cyberpunk-hover');
    createParticles();
    animate();
    glitchText();
});