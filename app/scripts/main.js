// create a help message paragraph
const helpMessage = document.createElement("p");
helpMessage.innerText = "Drag and Drop Regular Expression Elements below.";
helpMessage.classList = "flex-container-centered";
helpMessage.id= "empty-regex-help-msg";

/*
 * Display a message if the given container is empty, otherwise remove it.
 */
function maybeDisplayHelpMsg(message, container, target) {
    if (target.childElementCount === 0) {
        container.appendChild(message);
    } else {
        container.removeChild(message);
    }
}

window.onload = function() {
    const bodyRegexContainer = document.querySelector(".__body_regex-container");
    const bodyRegexList = document.querySelector(".__body_regex-list");

    maybeDisplayHelpMsg(helpMessage, bodyRegexContainer, bodyRegexList);
};
