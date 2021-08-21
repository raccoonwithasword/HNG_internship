
function hide() {
    document.getElementById("click");
    if (click.style.display === "none") {
       click.style.display = "block";
    } else {
        click.style.display ="none";
    }
}
function change() {
    document.getElementById("surprise");
    if (surprise.innerHTML === "Hit me again!") {
        surprise.innerHTML = "Hit me!";
    } else {
        surprise.innerHTML = "Hit me again!";
    }
}


