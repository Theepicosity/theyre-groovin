var kekker1;
var kekker2;
var kekker3;
image = 1;
inc = 1;
minc = 1;
sinc = 1;
finc = 0;
fminc = 0;
var minput = document.getElementById("groovemusic");
minput.style.visibility = "hidden";
var binput = document.getElementById("groovebg");
binput.style.visibility = "hidden";

document.getElementById("groovemusic").addEventListener('change', uploadmusic);
document.getElementById("groovebg").addEventListener('change', uploadbg);
document.addEventListener("keydown", groove);

function groove(check) {
    if (event.key == "s" || event.key == "S") check = 1;
    if (event.key == "a" || event.key == "A") check = 2;
    if (event.key == "d" || event.key == "D") check = 3;
    document.getElementById("groovy"+check).src = "groove"+image+".gif";
    if (image == 1) image = 2;
    else image = 1;
    if (check == 1) {
        clearTimeout(kekker1);
        kekker1 = setTimeout(stop1, 920);
    }
    else if (check == 2) {
        clearTimeout(kekker2);
        kekker2 = setTimeout(stop2, 920);
    }
    else if (check == 3) {
        clearTimeout(kekker3);
        kekker3 = setTimeout(stop3, 920);
    }
};

function stop1() {
    document.getElementById("groovy1").src = "pixil-frame-01.gif";
};

function stop2() {
    document.getElementById("groovy2").src = "pixil-frame-01.gif";
};

function stop3() {
    document.getElementById("groovy3").src = "pixil-frame-01.gif";
};

function background(select) {
    inc++;
    document.getElementById("background").background = "background"+(1+(select%13))+".jpg";
};

function music(select) {
    minc++;
    document.getElementById("music").src = "music"+(1+(select%7))+".mp3";
};

function uploadmusic() {
    var thingfiles = minput.files;
    document.getElementById("music").src = window.URL.createObjectURL(thingfiles[0]);
    fminc++;
};

function uploadbg() {
    var thingfiles = binput.files;
    document.getElementById("background").background = window.URL.createObjectURL(thingfiles[0]);
    finc++;
};


function shadow(select) {
    sinc++;
    if (select % 2 == 1) { //change shadow type from glow to drop shadow.
        document.getElementById("groovy1").className = "img.drop";
        document.getElementById("groovy2").className = "img.dropflip";
        document.getElementById("groovy3").className = "img.drop";
        for (i = 0; i <= 5; i++) {
            document.getElementsByTagName("BUTTON")[i].className = "button.drop";
        }
    }
    else {
        document.getElementById("groovy1").className = "img";
        document.getElementById("groovy2").className = "img.flip";
        document.getElementById("groovy3").className = "img";
        for (i = 0; i <= 5; i++) {
            document.getElementsByTagName("BUTTON")[i].className = "button";
        }
    }
};

function hello() {
  alert("Hello World!");
};