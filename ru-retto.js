let wapper = document.querySelector(".wapper");
let textAll = document.querySelectorAll(".text");
texts = ["排骨便當","麥當勞","水 餃","牛肉麵","義大利麵","滷 味","炒 飯","火 鍋"];

for(let i=0; i<textAll.length ; i++){
    textAll[i].innerHTML = texts[i];
}

let isFlag = true;

document.querySelector(".circle").onclick = turn;

function turn(){
    let random = parseInt(Math.random()*8);
    if(isFlag){
        switch(random){
            case 0:
                run(22.5,texts[random]);
                break;
            case 1:
                run(69,texts[random]);
                break;
            case 2:
                run(114,texts[random]);
                break;
            case 3:
                run(160,texts[random]);
                break;
            case 4:
                run(201,texts[random]);
                break;
            case 5:
                run(247,texts[random]);
                break;
            case 6:
                run(292,texts[random]);
                break;
            case 7:
                run(337,texts[random]);
                break;
        }
    }
}

let timer = null;

function run(angle,text){
    isFlag = false;
    let begin = 0;
    let basic = 1800;
    timer = setInterval(function(){
        if(begin>= (angle+basic) ){
            isFlag = true;
            clearInterval(timer);
        }
        wapper.style.transform = "rotate("+begin+"deg)";
        begin += Math.ceil((angle+basic-begin)*0.1) ;
    },50)
}