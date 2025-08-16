// Reusable components for the site
const Components = {
    header: `
        <header>
            <div class="banner">
                <div class="banner-text">
                    <p>That the powerful play goes on, and you may contribute a verse</p>
                </div>
            </div>
        </header>

        <nav class="navigation">
            <a href="index.html">HOME</a>
            <a href="contact.html">CONTACT</a>
        </nav>
    `,
    
    footer: `
        <footer>
            <p>&copy; N44R | There is no copyright, piracy is strongly recommended.</p>
        </footer>
    `
};

// Function to load components
function loadComponents() {
    // Load header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = Components.header;
    }
    
    // Load footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = Components.footer;
    }
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', loadComponents);