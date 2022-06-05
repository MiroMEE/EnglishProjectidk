const arr = [["far","further"],["bad","worse"]];
const randNum1 = []
const randNum2 = []
const mainDiv = document.querySelector('.firstdiv');
let counter = null;
const w = document.querySelector('.w');

const sleep = ms => new Promise(r => setTimeout(r, ms));



//random generator
const getY = (num,arr)=>{
    while (arr.length!=num){
        let s = Math.floor(Math.random() * (num - 0) ) + 0;
        let x = 0
        for(let i=0;i<arr.length;i++){
            if(s==arr[i]){
                x=1
            }
        }
        if(x==0){
            arr.push(s)
        }
        
    }
}

//start
creatorNEVIMNECEHO(arr.length)

//tohle nevim
function creatorNEVIMNECEHO(x){
    getY(9,randNum1)
    getY(9,randNum2)
    for(let as=0;as<x/9;as++){
        for(let i=0;i<9;i++){
            if(x==i+as*9){
                break
            }
            for(let j=0;j<2;j++){
                const divc = document.createElement('div');
                divc.className = "zivot";
                divc.innerText = arr[i+(as*9)][j];
                mainDiv.append(divc);
                if(j==0){
                    divc.style.top = randNum2[i] * 80 + "px";
                    divc.style.left = divc.offsetLeft+(100*as) + "px";                   
                } else{
                    divc.style.left = 1536-115-(100*as) + "px"
                    divc.style.top = randNum1[i] * 80 + "px";
                }
                divc.setAttribute('onclick','check(this)');
            }
        }
    }

}


//trash
const ff1 = document.querySelector('#ff1');
const ff2 = document.querySelector('#ff2');
const forf = document.querySelector('.forfun');
let jedna = null;
let dva = null;
let xy = null
let yx = null

//check jak svin
function check(x){
    x.style.opacity = 0.25;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<2;j++){
            if(x.innerText==arr[i][j]){
                if(j==0){
                    if(xy!=null){
                        xy.style.opacity = 1;
                    }
                    jedna=arr[i];
                    ff1.innerText = jedna[0]
                    xy=x;
                    catomania()
                } else{
                    if(yx!=null){
                        yx.style.opacity = 1;
                    }
                    dva=arr[i];
                    ff2.innerText = dva[1]
                    yx=x
                    catomania()

            }
        }
    }
    }
}


// next trash
const scor = document.querySelector('#scor');
const imgcom = document.querySelector('.IMAGINETRYTOLIVE');
scor.innerText = Number(counter=0) + "/" + arr.length;



//to divné
function catomania(){
    if(jedna==dva&&jedna!=null&&dva!=null){
        scor.innerText = Number(counter+=1) + "/" + arr.length;
        if(counter==arr.length){
            imgcom.style.display = "block";
            w.style.transition = 'filter 0.5s'
            w.style.filter = 'blur(10px)';

        }
        xy.remove();
        yx.remove();
        jedna = null;
        dva = null;
        tiemsa()
        ff1.innerText = "";
        ff2.innerText = "";
    } else if(jedna!=dva&&jedna!=null&&dva!=null){
        xy.style.opacity = 1;
        yx.style.opacity = 1;
        jedna = null;
        dva = null;
        xy = null;
        yx = null;
        ff1.innerText = "";
        ff2.innerText = "";
        sad()
    }

}


//animations
async function tiemsa(){
    forf.style.transition = "border 0.5s, background 0.5s";
    forf.style.border = "solid greenyellow 2px";
    await sleep(1000)
    forf.style.border = "solid whitesmoke 2px";
}
async function sad(){
    forf.style.transition = "border 0.5s, background 0.5s";
    forf.style.border = "solid red 2px";
    await sleep(1000)
    forf.style.border = "solid whitesmoke 2px";
}