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
    if (resps == undefined) {
        console.error("missing property 'responsibilities'")
    }
    if (resps.length == 0) {
        ulSkills.style.visibility = "hidden"
        h4Skills.style.visibility = "hidden"
    } else {
        ulSkills.style.visibility = ""
        h4Skills.style.visibility = ""
    }
    //Populate list elements, including urls, if they exist
    resps.forEach(skill => {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.textContent = skill.skill

        var url = skill.url
        if (url) {
            a.setAttribute('href', url);
        }

        li.appendChild(a);
        ulSkills.appendChild(li);
    });

    //Get list and title
    var ulKeywords = document.getElementById("keywords")
    var h4Keywords = document.getElementById("keywords-title")

    //Clear list
    ulKeywords.innerHTML = ""

    //Hide elements if their data is empty
    var keywords = projects[project].keywords;
    if (keywords == undefined) {
        console.error("missing property 'keywords'")
    }
    if (keywords.length == 0) {
        ulKeywords.style.visibility = "hidden"
        h4Keywords.style.visibility = "hidden"
    } else {
        ulKeywords.style.visibility = ""
        h4Keywords.style.visibility = ""
    }
    keywords.forEach(keyword => {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.textContent = keyword

        li.appendChild(a);
        ulKeywords.appendChild(li);
    });
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

//TODO how to present responsibilities description
//TODO PRIORITY update blog links
var projects = {
    "hertz": {
        "title": "Hertz - Uber - Lyft",
        "description": "As a consultant for Hertz, I helped integrate Hertz into Uber and Lyft platforms, helping create an API that received 360k requests per hour, at peak. After the initial tasks of creating and optimizing the API, I lead the efforts to monitor and measure the throughput, and created, tested, and revised SLOs/SLAs between Hertz and Uber/Lyft. Those efforts eventually became a top priority and were focused on delivering business insights, helping with campaigns, and finding problems within Hertz services.",
        "responsibilities": [
            {
                "skill": "Tech lead",
                "url": "http://blog.nader.contact/code/development/career/2023/03/29/Data-based-monitoring-and-business-analytics-at-hertz.html",
                "description": "Lead my project using Agile-like methods including story boarding and \"pointing\" tasks, keeping team members productive and unblocked, and applied XP practices to keep my team communicating and empathetic."
            },
            {
                "skill": "Site Reliability Engineering",
                "url": "http://blog.nader.contact/code/development/career/2023/03/29/Data-based-monitoring-and-business-analytics-at-hertz.html",
                "description": "Used Dynatrace and AWS to deduce business and reliability analytics. Was able to answer important questions based on API usage and throughput. Read more on my blog!"
            },
            {
                "skill": "Monitoring",
                "url": "",
                "description": "describe responsibilities"
            }
        ],
        "keywords": ["Kotlin", "Dynatrace", "Cloudwatch", "SLOs", "XP", "Metrics", "Monitoring", "Redis", "Throttling", "Webhooks", "AmazonMQ"]
    },
    "caimr": {
        "title": "CA Division of Workers' Compensation",
        "description": "CAIMR required a system for the management of Workers Compensation appeal documents for review by doctors. For MAXIMUS, I helped maintain the AI, MQ, and Spring based systems that assisted this task. I particularly worked on the endpoints and web servers used by doctors and nurses to access the case review system, a system that used message queues to move documents for processing with OCR and classification using AI, and modernizing deployment, monitoring, and SRE efforts",
        "responsibilities": [
            {
                "skill": "Tech lead",
                "url": "blog link",
                "description": "describe responsibilities"
            },
            {
                "skill": "Spring boot backends",
                "url": "",
                "description": "describe responsibilities"
            },
            {
                "skill": "AWS/Terraform deployments",
                "url": "",
                "description": "describe responsibilities"
            },
            {
                "skill": "Message queues",
                "url": "",
                "description": "describe responsibilities"
            }
        ],
        "keywords": ["AI + Health", "ECS", "Big data", "DynamoDb", "Node", "CI/CD", "Terraform"]
    },
    "cephalon": {
        "title": "Cephalon Wanna_b",
        "description": "Cephalon wanna_b is a years old hobby project that has grown to an app used by over 25k unique visitors per month (during peak), and a discord community 10k strong. It was initially an excel sheet, turned Angular.js app, turned Angular 10 app. It's maintained by a community of volunteer devs and content creators.",
        "responsibilities": [],
        "keywords": ["Angular", "CI/CD", "Node", "Bulma CSS"]
    }
}
