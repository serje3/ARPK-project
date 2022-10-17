const media730px = window.matchMedia("(max-width: 730px)")

function on() {
    if (!media730px.matches)
        return;
    document.getElementById("overlay").style.display = "block";

}

function off() {
    document.getElementById("overlay").style.display = "none";
}