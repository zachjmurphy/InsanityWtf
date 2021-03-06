function aboutBtn() {
    document.title = "Zach J Murphy - About Me";
    document.getElementById("greetingLinks").style.opacity = "0";
    document.getElementById("psWrapper").style.opacity = "0";
    document.getElementById("aboutBox").style.opacity = "1";
    document.getElementById("nbAbout").innerHTML = " <label>About Me</label>";
    document.getElementById("nbHome").innerHTML = " <label>Home</label>";
    document.getElementById("nbProjects").innerHTML = " <label>My Projects</label>";
    document.getElementById("heroTitle").innerHTML = "about";
    document.getElementById("nbAbout").style.font = "25px FLNTFILL";
    document.getElementById("nbHome").style.font = "25px FLNTREG";
    document.getElementById("nbProjects").style.font = "25px FLNTREG";
    document.getElementById("greetingLinks").style.pointerEvents = "none";
    document.getElementById("psWrapper").style.pointerEvents = "none";
    document.getElementById("aboutBox").style.pointerEvents = "auto";
}

function homeBtn() {
    document.title = "Zach J Murphy - Home";
    document.getElementById("greetingLinks").style.opacity = "1";
    document.getElementById("psWrapper").style.opacity = "0";
    document.getElementById("aboutBox").style.opacity = "0";
    document.getElementById("nbAbout").innerHTML = " <label>About Me</label>";
    document.getElementById("nbHome").innerHTML = " <label>Home</label>";
    document.getElementById("nbProjects").innerHTML = " <label>My Projects</label>";
    document.getElementById("heroTitle").innerHTML = "home";
    document.getElementById("nbAbout").style.font = "25px FLNTREG";
    document.getElementById("nbHome").style.font = "25px FLNTFILL";
    document.getElementById("nbProjects").style.font = "25px FLNTREG";
    document.getElementById("greetingLinks").style.pointerEvents = "auto";
    document.getElementById("psWrapper").style.pointerEvents = "none";
    document.getElementById("aboutBox").style.pointerEvents = "none";
}

function projectsBtn() {
    document.title = "Zach J Murphy - My Projects";
    document.getElementById("greetingLinks").style.opacity = "0";
    document.getElementById("psWrapper").style.opacity = "1";
    document.getElementById("aboutBox").style.opacity = "0";
    /**/
    document.getElementById("nbAbout").innerHTML = " <label>About Me</label>";
    document.getElementById("nbHome").innerHTML = " <label>Home</label>";
    document.getElementById("nbProjects").innerHTML = " <label>My Projects</label>";
    /**/
    document.getElementById("heroTitle").innerHTML = "projects";
    /**/
    document.getElementById("nbAbout").style.font = "25px FLNTREG";
    document.getElementById("nbHome").style.font = "25px FLNTREG";
    document.getElementById("nbProjects").style.font = "25px FLNTFILL";
    /**/
    document.getElementById("greetingLinks").style.pointerEvents = "none";
    document.getElementById("psWrapper").style.pointerEvents = "auto";
    document.getElementById("aboutBox").style.pointerEvents = "none";
    /**/
}
