/* All Thanks to -Serhii @sakals for his appreciated help */
console.clear();
const btn = document.querySelector(".toggle-state");
btn.click();

function toggleState(key) {
    const changeStateTo = val =>
        document.documentElement.style.setProperty(key, val);

    const currentState = getComputedStyle(
        document.documentElement
    ).getPropertyValue(key);

    currentState === "running" ?
        changeStateTo("paused") :
        changeStateTo("running");
}

btn.addEventListener(
    "click",
    () => toggleState("--defaultAnimationState"),
    false
);