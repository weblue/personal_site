function init() {
    var themeSetting = localStorage.getItem('theme');
    var theme = document.getElementById("style");
    if (themeSetting == 'dark' /*|| window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches*/)
        theme.setAttribute('href', 'css/dark-styles.css');
    else if (themeSetting == 'light')
        theme.setAttribute('href', 'css/light-styles.css');

    refresh();
}

function toggleTheme() {
    var theme = document.getElementById("style");

    if (theme.getAttribute('href') == 'css/light-styles.css') {
        theme.setAttribute('href', 'css/dark-styles.css');
        localStorage.setItem('theme', 'dark');
    } else {
        theme.setAttribute('href', 'css/light-styles.css');
        localStorage.setItem('theme', 'light');
    }
    refresh();
}

function showModal(project) {
    document.getElementById("open-modal").style.visibility = "visible";
    document.getElementById("open-modal").style.pointerEvents = "auto";
}

function closeModal() {
    document.getElementById("open-modal").style.visibility = "hidden";
}

function refresh() {
    var pixelBox = document.getElementById('pixel-box')
    var n = document.createTextNode(' ');
    var display = pixelBox.style.display;

    pixelBox.appendChild(n);
    pixelBox.style.display = 'none';

    setTimeout(function () {
        pixelBox.style.display = display;
        n.parentNode.removeChild(n);
    }, 20);
}