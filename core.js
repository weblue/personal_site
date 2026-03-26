var projects = {};

function init() {
    var themeSetting = localStorage.getItem('theme');
    var theme = document.getElementById("style");
    if (themeSetting == 'dark' /*|| window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches*/)
        theme.setAttribute('href', 'css/dark-styles.css');
    else if (themeSetting == 'light')
        theme.setAttribute('href', 'css/light-styles.css');

    fetch('projects.json').then(function(r) { return r.json(); }).then(function(data) { projects = data; });

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
    var modal = document.getElementById("open-modal")
    modal.style.visibility = "visible";
    modal.style.pointerEvents = "auto";

    document.getElementById("project-name").innerHTML = projects[project].title;
    document.getElementById("description").innerHTML = projects[project].description;

    //Get list and title
    var ulSkills = document.getElementById("skills")
    var h4Skills = document.getElementById("skills-title")
    //Clear list
    ulSkills.innerHTML = ""

    //Hide elements if their data is empty
    var resps = projects[project].responsibilities;
    if (resps == undefined || resps.length == 0) {
        ulSkills.style.visibility = "hidden"
        h4Skills.style.visibility = "hidden"
    } else {
        ulSkills.style.visibility = ""
        h4Skills.style.visibility = ""

        //Populate list elements, including urls, if they exist
        resps.forEach(skill => {
            var li = document.createElement("li");
            var a = document.createElement("a");
            a.textContent = skill.skill

            var url = skill.url
            if (url) {
                a.setAttribute('href', url);
                a.setAttribute('target', "_blank");
            }

            li.appendChild(a);
            ulSkills.appendChild(li);
        });
    }


    //Get list and title
    var ulKeywords = document.getElementById("keywords")
    var h4Keywords = document.getElementById("keywords-title")

    //Clear list
    ulKeywords.innerHTML = ""

    //Hide elements if their data is empty
    var keywords = projects[project].keywords;
    if (keywords == undefined || keywords.length == 0) {
        ulKeywords.style.visibility = "hidden"
        h4Keywords.style.visibility = "hidden"
    } else {
        ulKeywords.style.visibility = ""
        h4Keywords.style.visibility = ""

        keywords.forEach(keyword => {
            var li = document.createElement("li");
            var a = document.createElement("a");
            a.textContent = keyword

            li.appendChild(a);
            ulKeywords.appendChild(li);
        });
    }

    //Get list and title
    var ulCerts = document.getElementById("certs")
    var h4Certs = document.getElementById("certs-title")

    //Clear list
    ulCerts.innerHTML = ""

    //Hide elements if their data is empty
    var certs = projects[project].certs;
    if (certs == undefined || certs.length == 0) {
        ulCerts.style.visibility = "hidden"
        h4Certs.style.visibility = "hidden"
    } else {
        ulCerts.style.visibility = ""
        h4Certs.style.visibility = ""

        certs.forEach(cert => {
            var li = document.createElement("li");
            var a = document.createElement("a");
            a.textContent = cert

            li.appendChild(a);
            ulCerts.appendChild(li);
        });
    }
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
