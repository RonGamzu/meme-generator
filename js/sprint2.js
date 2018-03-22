// console.log("sdafasv");
console.log('meme')
var inputTop = document.getElementById('top').value;
var inputBottom = document.getElementById('bottom').value;
var inputFirstAlign = document.getElementById('first-align').value;
var inputSecondAlign = document.getElementById('second-align').value;
var inputFirstFont = document.getElementById('first-font').value;
var inputSecondFont = document.getElementById('second-font').value;
var inputFirstSize = document.getElementById('first-size').value;
var inputSecondSize = document.getElementById('second-size').value;

var gMeme = {
    txts: [
        {
            line: '',
            size: inputFirstSize ,
            align: inputFirstAlign,
            color: 'red',
            font: inputFirstFont,
            posX: 200,
            posY: 70
        },

        {
            line: '',
            size: inputSecondSize,
            align: inputSecondAlign,
            color: 'red',
            font: inputSecondFont,
            posX: 200,
            posY: 400
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
            context.font = gMeme.txts[i].size +"px "+ gMeme.txts[i].font;
            context.textAlign = gMeme.txts[i].align;
            context.strokeText(gMeme.txts[i].line, gMeme.txts[i].posX, gMeme.txts[i].posY);
            context.fillStyle = gMeme.txts[i].color;
            context.fillText(gMeme.txts[i].line, gMeme.txts[i].posX, gMeme.txts[i].posY);
        })
    };
}



function drawText() {
    var inputTop = document.getElementById('top').value;
    gMeme.txts[0].line = inputTop;
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
function changeSize() {
    var inputFirstSize = document.getElementById('first-size').value
    var inputSecondSize = document.getElementById('second-size').value
        gMeme.txts[0].size = inputFirstSize;
        gMeme.txts[1].size = inputSecondSize;
    drawImage();
}
