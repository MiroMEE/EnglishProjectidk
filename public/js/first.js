const arr = [["far","further"],["bad","worse"]]
const randNum1 = []
const randNum2 = []
const mainDiv = document.querySelector('.firstdiv');
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
let jedna = null;
let dva = null;
let xy = null
let yx = null
function check(x){
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
function catomania(){
    console.log(dva)
    console.log(jedna)

    if(jedna==dva&&jedna!=null&&dva!=null){
        console.log("point")
        xy.remove()
        yx.remove()
        jedna = null
        dva = null
        ff1.innerText = "";
        ff2.innerText = "";
    } else if(jedna!=dva&&jedna!=null&&dva!=null){
        jedna = null
        dva = null
        ff1.innerText = "";
        ff2.innerText = "";
    }
}