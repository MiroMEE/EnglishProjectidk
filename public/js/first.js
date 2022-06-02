const arr = [["far","further"],["bad","worse"]]
const randNum1 = []
const randNum2 = []
const mainDiv = document.querySelector('.firstdiv');
let counter = null;
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
const sleep = ms => new Promise(r => setTimeout(r, ms));
creatorNEVIMNECEHO(2)
function creatorNEVIMNECEHO(x){
    getY(9,randNum1)
    getY(9,randNum2)
    for(let i=0;i<x;i++){
        for(let j=0;j<2;j++){
            const divc = document.createElement('div');
            divc.className = "zivot";
            divc.innerText = arr[i][j];
            mainDiv.append(divc);
            if(j==0){
                divc.style.top = randNum2[i] * 80 + "px";
                
            } else{
                divc.style.left = 1536-115 + "px"
                divc.style.top = randNum1[i] * 80 + "px";
            }
            divc.setAttribute('onclick','check(this)');
        }
    }
}
const ff1 = document.querySelector('#ff1');
const ff2 = document.querySelector('#ff2');
const forf = document.querySelector('.forfun');
let jedna = null;
let dva = null;
let xy = null
let yx = null
function check(x){
    x.style.opacity = 0.25
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<2;j++){
            if(x.innerText==arr[i][j]){
                if(j==0){
                    jedna=arr[i];
                    ff1.innerText = jedna[0]
                    xy=x;
                    catomania()
                } else{
                    dva=arr[i];
                    ff2.innerText = dva[1]
                    yx=x
                    catomania()

            }
        }
    }
    }
}
const imgcom = document.querySelector('.IMAGINETRYTOLIVE');
function catomania(){
    if(jedna==dva&&jedna!=null&&dva!=null){
        console.log(Number(counter+=1) + "/" + arr.length);
        if(counter==arr.length){
            imgcom.style.display = "block";
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
        jedna = null
        dva = null
        ff1.innerText = "";
        ff2.innerText = "";
    }
}
async function tiemsa(){
    forf.style.transition = "border 0.5s, background 0.5s";
    forf.style.border = "solid black 2px";
    forf.style.backgroundColor = "white";
    await sleep(1000)
    forf.style.border = "solid whitesmoke 2px";
    forf.style.backgroundColor = "black";
}