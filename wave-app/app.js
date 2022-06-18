var boxesHeight = [];

var boxesTimer = [];

var boxesTimerTwo = [];

var boxes = document.getElementsByClassName("box");

for(let i = 0; i < boxes.length; i++){
    boxesHeight[i] = 0;
    boxesTimer[i] = 0;
    boxesTimerTwo[i] = 0;
}

for(let i = 0; i < boxes.length; i++){
    start(boxes[i], i);
}

function start(el, index)
{
    boxesHeight[index] = boxesHeight[index] + 10;

    el.style.height = boxesHeight[index] + "px";

    boxesTimer[index] = setTimeout(function(){
        start(el, index);
    }, 50);

    if(boxesHeight[index] > 300){
        clearTimeout(boxesTimer[index]);
        end(el, index);
    }
}

function end(el, index)
{
    boxesHeight[index] = boxesHeight[index] - 10;

    el.style.height = boxesHeight[index] + "px";

    boxesTimerTwo[index] = setTimeout(function(){
        end(el, index);
    }, 50);

    if(boxesHeight[index] == 10){
        clearTimeout(boxesTimerTwo[index]);
        start(el, index);
    }
}