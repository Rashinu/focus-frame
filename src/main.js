document.addEventListener('DOMContentLoaded', () => {
    /* Menu Elements */
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const sidebar = document.querySelector('.mobile-menu-sidebar');
    const backdrop = document.querySelector('.mobile-menu-backdrop');

    /* Helper Functions */
    function openMenu() {
        if (!sidebar) return;
        sidebar.classList.add('is-open');
        if (backdrop) backdrop.classList.add('is-open');
        document.body.style.overflow = 'hidden'; // Lock Scroll
    }

    function closeMenu() {
        if (!sidebar) return;
        sidebar.classList.remove('is-open');
        if (backdrop) backdrop.classList.remove('is-open');
        document.body.style.overflow = ''; // Unlock Scroll
    }

    /* Event Listeners */
    if (menuToggle && sidebar) {
        // Toggle Click
        menuToggle.addEventListener('click', openMenu);

        // Close Button Click
        if (menuClose) {
            menuClose.addEventListener('click', closeMenu);
        }

        // Backdrop Click
        if (backdrop) {
            backdrop.addEventListener('click', closeMenu);
        }

        // ESC Key Press
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && sidebar.classList.contains('is-open')) {
                closeMenu();
            }
        });

        // Link Click (Close menu when navigating)
        const links = sidebar.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
});
