function random_bg_color(who) {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    who.style.backgroundColor = bgColor;

    var counter = document.getElementById("counter");
    counter.innerHTML++;
}

document.querySelectorAll(".column").forEach(function(column) {
    random_bg_color(column);
});