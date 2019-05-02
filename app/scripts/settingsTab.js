// the expanded settings tab is invisible by default
let visible = false;

window.onload = function() {
    const settingsTab = document.querySelector("#toolbar_settings-tab");
    const settingsDiv = document.querySelector(".__body_settings_hidden");

    settingsTab.addEventListener("click", () => {
        // hide or show tab on every click
        if (visible)
            settingsDiv.style.display = "none";
        else
            settingsDiv.style.display = "block";

        visible = !visible; /* switch visibility */
    });
};
