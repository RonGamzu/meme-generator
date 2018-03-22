// console.log("sdafasv");
console.log('meme')
console.log('meme')

var inputTop = document.getElementById('top').value;
var inputBottom = document.getElementById('bottom').value;
var inputFirstAlign = document.getElementById('first-align').value;
var inputSecondAlign = document.getElementById('second-align').value;
var inputFirstFont = document.getElementById('first-font').value;
var inputSecondFont = document.getElementById('second-font').value;
// var inputFirstSize = document.getElementById('first-size').value;
// var inputSecondSize = document.getElementById('second-size').value;

var gMeme = {
    txts: [
        {
            line: '',
            size: 30,
            align: inputFirstAlign,
            color: '#ffffff',
            font: inputFirstFont,
            posX: 240,
            posY: 85,
            shadow: 'rgba(0, 0, 0, 0)'
        },

        {
            line: '',
            size: 30,
            align: inputSecondAlign,
            color: '#ffffff',
            font: inputSecondFont,
            posX: 240,
            posY: 470,
            shadow: 'rgba(0, 0, 0, 0)'
        }
    ]
}


function drawImage() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    var img = new Image();
    img.src = "img/img1.jpg";

    img.onload = function () {
        context.drawImage(img, 0, 0, 500, 500);
        context.lineWidth = 10;
        gMeme.txts.forEach(function (txt, i) {
            context.shadowBlur = 7;
            context.shadowColor = txt.shadow;
            context.font = gMeme.txts[i].size + "px " + gMeme.txts[i].font;
            context.textAlign = gMeme.txts[i].align;
            context.strokeText(gMeme.txts[i].line, gMeme.txts[i].posX, gMeme.txts[i].posY);
            context.fillStyle = gMeme.txts[i].color;
            console.log('shadowColor:', context.shadowColor)
            context.fillText(gMeme.txts[i].line, gMeme.txts[i].posX, gMeme.txts[i].posY);
        })
    };
}



function drawFirstText() {
    var inputTop = document.getElementById('top').value;
    gMeme.txts[0].line = inputTop;
    drawImage();
}
function drawSecondText() {
    var inputBottom = document.getElementById('bottom').value;
    gMeme.txts[1].line = inputBottom;
    drawImage();
}

function alignText() {
    var inputFirstAlign = document.getElementById('first-align').value
    var inputSecondAlign = document.getElementById('second-align').value
    gMeme.txts[0].align = inputFirstAlign;
    gMeme.txts[1].align = inputSecondAlign;
    drawImage();
}
function changeFont() {
    var inputFirstFont = document.getElementById('first-font').value
    var inputSecondFont = document.getElementById('second-font').value
    gMeme.txts[0].font = inputFirstFont;
    gMeme.txts[1].font = inputSecondFont;
    drawImage();
}
function changeFirstSize() {
    var inputFirstSize = document.getElementById('first-size').value
    gMeme.txts[0].size = inputFirstSize;
    drawImage();
}
function changeSecondSize() {
    var inputSecondSize = document.getElementById('second-size').value
    gMeme.txts[1].size = inputSecondSize;
    drawImage();
}

function changeFirstColor() {
    var inputFirstColor = document.getElementById("myFirstColor").value;
    gMeme.txts[0].color = inputFirstColor;
    drawImage();
}
function changeSecondColor() {
    var inputSecondColor = document.getElementById("mySecondColor").value;
    gMeme.txts[1].color = inputSecondColor;
    drawImage();
}

function addFirstShadow() {
    var isChecked = document.getElementById("first-shadow").checked;
    if (isChecked) {
        gMeme.txts[0].shadow = 'black';
    } else {
        gMeme.txts[0].shadow = 'rgba(0, 0, 0, 0)';
    };
   drawImage();
}
function addSecondShadow() {
    var isChecked = document.getElementById("second-shadow").checked;
    if (isChecked) {
        gMeme.txts[1].shadow = 'black';
    } else {
        gMeme.txts[1].shadow = 'rgba(0, 0, 0, 0)';
    };
   drawImage();
}

function moveUpFirst() {
    gMeme.txts[0].posY -= 5;
    drawImage();
}
function moveDownFirst() {
    gMeme.txts[0].posY += 5;
    drawImage();
}
function moveUpSecond() {
    gMeme.txts[1].posY -= 5;
    drawImage();
}
function moveDownSecond() {
    gMeme.txts[1].posY += 5;
    drawImage();
}

function firstClear() {
    gMeme.txts[0].line= "";
    drawImage();
}
function secondClear() {
    gMeme.txts[1].line= "";
    drawImage();
}

function downloadCanvas(elLink) {
    // debugger
    var canvas = document.getElementById('myCanvas');
    console.log(canvas)
    var dt = canvas.toDataURL('image/jpeg');
    console.log(dt)
    elLink.href = dt;
};
// downloadLnk.addEventListener('click', download, false);