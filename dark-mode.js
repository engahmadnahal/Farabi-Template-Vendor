// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    const htmlElement = document.documentElement;
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the theme
    if (currentTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'dark');
    } else {
        htmlElement.setAttribute('data-theme', 'light');
    }
    
    // Toggle theme function
    function toggleTheme() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Add animation class for smooth transition
        document.body.classList.add('theme-transitioning');
        setTimeout(() => {
            document.body.classList.remove('theme-transitioning');
        }, 300);
    }
    
    // Add event listener to toggle button
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleTheme);
    }
    
    // Listen for system theme changes
    if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Only apply system preference if user hasn't manually set a preference
        if (!localStorage.getItem('theme')) {
            mediaQuery.addEventListener('change', (e) => {
                if (e.matches) {
                    htmlElement.setAttribute('data-theme', 'dark');
                } else {
                    htmlElement.setAttribute('data-theme', 'light');
                }
            });
        }
    }
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            sidebar?.classList.toggle('open');
        });
    }
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 640) {
            if (sidebar?.classList.contains('open') && 
                !sidebar.contains(e.target) && 
                !mobileMenuToggle?.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        }
    });
});

