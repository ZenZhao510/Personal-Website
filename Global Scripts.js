function initialize() {
    // gets dark mode preferences from local storage
    let darkMode = localStorage.getItem("darkEnabled");
    const toggleSwitch = document.getElementById("checkbox");
    console.log(darkMode);

    const enableDarkMode = () => {
        // dark mode added to body
        document.body.classList.add("darkmode");
        // localStorage updated
        localStorage.setItem("darkEnabled", "true");
    }

    const disableDarkMode = () => {
        // dark mode added to body
        document.body.classList.remove("darkmode");
        // localStorage updated
        localStorage.setItem("darkEnabled", null);
    }

    if (darkMode === "true") {
        enableDarkMode();
        toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener("click", () => {
        if (darkMode !== "true") {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
        darkMode = localStorage.getItem("darkEnabled");
    });
}

window.onscroll = function() {shrink()};
function shrink() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.font = "italic bold 10pt Geneva, Century Gothic, Arial, sans-serif";
    } else {
        document.getElementById("navbar").style.font = "italic 20pt Geneva, Century Gothic, Arial, sans-serif";
    }
}