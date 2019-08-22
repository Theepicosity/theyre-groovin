var kekker1;
var kekker2;
var kekker3;
image = 1;
inc = 1;
minc = 1;
sinc = 1;

function groove(check) {
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

function shadow(select) {
    sinc += sinc % 2;
    if (sinc == 1) { //change shadow type from glow to drop shadow.
        document.getElementById("groovy1").className = "img.drop";
        document.getElementById("groovy2").className = "img.dropflip";
        document.getElementById("groovy3").className = "img.drop";
        document.getElementById("groove").className = "button.drop";
    }
    else {
        document.getElementById("groovy1").className = "img";
        document.getElementById("groovy2").className = "img.flip";
        document.getElementById("groovy3").className = "img";
        document.getElementById("groove").className = "button";
    }
};