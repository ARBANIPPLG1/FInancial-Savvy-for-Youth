document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const body = document.body;

    // Set tema awal berdasarkan preferensi pengguna atau default ke dark
    const currentTheme = localStorage.getItem('theme') || 'dark';
    body.classList.add(currentTheme);

    // Update ikon tombol berdasarkan tema saat ini
    toggleButton.className = currentTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';

    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark')) {
            body.classList.remove('dark');
            body.classList.add('light');
            toggleButton.className = 'fa-solid fa-moon';
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light');
            body.classList.add('dark');
            toggleButton.className = 'fa-solid fa-sun';
            localStorage.setItem('theme', 'dark');
        }
    });
});