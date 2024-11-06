const theme = localStorage.getItem('theme');
if (theme) {
    // Use theme present in localStorage
    document.documentElement.setAttribute('theme', theme);
} else {
    // Theme is not present in localStorage, query operating system preferences
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Dark mode
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('theme', localStorage.getItem('theme'));
    } else {
        // Light mode
        localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('theme', localStorage.getItem('theme'));
    }
}