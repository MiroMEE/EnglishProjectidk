const mainDiv = document.querySelector('.mainDiv');
const dbar = document.querySelector('.dbar');
const dsv = document.querySelector('.dqeust');
const arr = [
    ["I eat ___ cakes.", "too many", "too much", "too"],
    ["I don´t drink ___ water.","enough", "too many", "too much"],
    ["I spend ___ time on my phone.", "too much", "too", "too many"],
    ["I can´t drink it. It´s ___ hot.","too","enough","too many"],
    ["I think they talk ___.", "too much", "too many", "too"],
    ["The box isn´t ___.","big enough","enough big", "too much big"],
    ["She doesn´t ___.", "go out enough","enough go out", "go out too many"],
    ["They work ___, they need a break.", "too much", "too many", "not enough"],
    ["You are ___ for this.", "too old", "too many old", "old too"],
    ["He is asking ___ questions.", "too many", "too", "too much"]
    ];
const memory = [];
const sleep = ms => new Promise(r => setTimeout(r, ms));
let spravne = 0;
let spatne = 0;
const addSpravne = (x,value)=>{
    if(x==1){
        spravne+=value
    }
    document.querySelector('#spravne').innerText = "Body: "+spravne;
}
const addSpatne = (x)=>{
    if(x==1){
        spatne+=1
    }
    document.querySelector('#spatne').innerText = "Chyby: "+spatne;    
}
const getY = (num,ar,how_m,stdin)=>{
    const rn = [];
    while (rn.length!=how_m){
        let s = Math.floor(Math.random() * (num - 0) ) + 0;
        let x = 0
        for(let i=0;i<rn.length;i++){
            if(s==rn[i]){
                x=1
            }
        }
        if(x==0){
            rn.push(s);
            if(rn.length==how_m){
                ar.push(rn);
                break
            }
        }
    }
}
creatorQuestions(arr.length)
addSpravne(0);
addSpatne(0);
function creatorQuestions(how_many){
    dbar.innerText = "Questions: "+spravne+'/'+arr.length
    for(let i=0;i<how_many;i++){
        const oj = document.createElement('div');
        oj.className = "oj";
        oj.id = 'ojojoj'+i;
        dsv.append(oj);
        const crtdiv = document.createElement('div');
        oj.append(crtdiv);
        dsv.id = "questions";
        crtdiv.id = "quesarstra";
        crtdiv.innerText = arr[i][0];
        for(let j=0;j<=2;j++){
            getY(3,memory,3)
            const uwu = document.createElement('div');
            oj.append(uwu);
            uwu.id = "answers";
            rnado(uwu);
            uwu.setAttribute('onclick','check(this)');
            uwu.innerText = arr[Number(i)][Number(memory[i][j]+1)];
        }
    }
}
let z=[];
async function check(th){
    let i = Number(th.parentNode.id.slice(-1))
    const vysledek = process(th,i);
    if(vysledek==1){
        if(z[i]==0||z[i]==null){
            addSpravne(1,1)
            spravneaddanimation(th);            
        } else if(z[i]==2){
            addSpravne(1,0.5)
            spravneaddanimation(th);  
        } else if(z[i]==1){
            addSpravne(1,0)
            spravneaddanimation(th);  
        }
        z[i]=0;
    } else {
        th.setAttribute('onclick','');
        addSpatne(1)
        th.style.opacity = 1;
        th.style.transition = "opacity 0.5s";
        th.style.opacity = 0;
        z[i]=th.parentNode.childNodes.length-2;
        await sleep(500)
        th.remove()
    }
}
function process(th,i){
    if(th.innerText==arr[i][1]){
        return 1;
    }
    return 0;
}
const imgcom = document.querySelector('.IMAGINETRYTOLIVE');
async function spravneaddanimation(th){
    dbar.innerText = "Questions: "+ Number(arr.length-dsv.childNodes.length+1)+'/'+arr.length
    if(Number(arr.length-dsv.childNodes.length+1)==arr.length){
        imgcom.style.display = "block";
        mainDiv.style.transition = 'filter 0.5s'
        mainDiv.style.filter = 'blur(10px)';
    }
    th.setAttribute('onclick','');
    th.parentNode.style.opacity = 1;
    th.parentNode.style.transition = "opacity 0.5s";
    th.parentNode.style.opacity = 0;
    await sleep(500)
    th.parentNode.remove()
}

function rnado(d){
    for(let i=0;i<arr.length*3;i++){
        const e = Math.floor(Math.random() * (3 - 0) ) + 0;
        if(e==0){
            d.style.backgroundImage = "url('/img/yoyo.jpg')";
        } else if(e==1){
            d.style.backgroundImage = "url('/img/yeye.jpg')";
        } else if(e==2){
            d.style.backgroundImage = "url('/img/yuyu.jpg')";
        }
    }
}