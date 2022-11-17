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

    document.getElementById("project-name").innerHTML = projects[project].title;
    document.getElementById("description").innerHTML = projects[project].description;

    // TODO update these lists to contain links to relevant content
    document.getElementById("skills")
    document.getElementById("keywords")
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


//TODO update content
var projects = {
        "hertz": {
            "title": "Hertz - Uber - Lyft",
            "description": "this is where I talk to the bean",
            "responsibilities": [
                {
                    "skill": "SRE",
                    "url": "blog link",
                    "description": "describe responsibilities"
                },
                {
                    "skill": "Monitoring",
                    "url": "",
                    "description": "describe responsibilities"
                },
                {
                    "skill": "Tech lead",
                    "url": "blog link",
                    "description": "describe responsibilities"
                }
            ],
            "keywords": ["Kotlin", "Dynatrace", "Cloudwatch", "SLOs"]
        },
        "caimr": {
            "description": "this is where I'll describe projects for caimr",
            "responsibilities": [
                {
                    "skill": "Spring",
                    "url": "",
                    "description": "describe responsibilities"
                },
                {
                    "skill": "AI",
                    "url": "blog link",
                    "description": "describe responsibilities"
                },
                {
                    "skill": "Tech lead",
                    "url": "blog link?",
                    "description": "describe responsibilities"
                }
            ],
            "keywords": ["AI + Health", "AWS", "ECS", "Big data"]
        },
        "eft": {
            "description": "describe eft wannab",
            "keywords": ["Vue.js"]
        },
        "cephalon": {
            "description": "describe cephalon wannab",
            "keywords": ["Angular"]
        }
    }