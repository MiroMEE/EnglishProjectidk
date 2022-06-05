const mainDiv = document.querySelector('.mainDiv');
const dbar = document.querySelector('.dbar');
const dsv = document.querySelector('.dqeust');
const arr = [
    ["I eat ____ cakes.", "too many", "too much", "too"],
    ["I don´t drink _____ water.","enough", "too many", "too much"],
    ["I spend ____ time on my phone.", "too much", "too", "too many"],
    ["I can´t drink it. It´s ____ hot.","too","enough","too many"],
    ["I think they talk ____ .", "too much", "too many", "too"],
    ["The box isn´t ____ .","big enough","enough big", "too much big"],
    ["She doesn´t ____ .", "go out enough","enough go out", "go out too many"],
    ["They work ____, they need a break.", "too much", "too many", "not enough"],
    ["You are ____ for this.", "too old", "too many old", "old too"],
    ["He is asking ____ questions.", "too many", "too", "too much"]
    ];
const memory = [];
const sleep = ms => new Promise(r => setTimeout(r, ms));
let spravne = 0;
let spatne = 0;
const addSpravne = (x,value)=>{
    if(x==1){
        spravne+=value
    }
    document.querySelector('#spravne').innerText = "Chytrost: "+spravne;
}
const addSpatne = (x)=>{
    if(x==1){
        spatne+=1
    }
    document.querySelector('#spatne').innerText = "Demence: "+spatne;    
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
    dbar.innerText = "Questions from Poland: "+spravne+'/'+arr.length
    for(let i=0;i<how_many;i++){
        const oj = document.createElement('div');
        oj.className = "oj";
        oj.id = 'ojojoj'+i;
        dsv.append(oj);
        const crtdiv = document.createElement('div');
        oj.append(crtdiv);
        dsv.id = "questions";
        crtdiv.innerText = arr[i][0];
        for(let j=0;j<=2;j++){
            getY(3,memory,3)
            const uwu = document.createElement('div');
            oj.append(uwu);
            uwu.id = "answers";
            uwu.setAttribute('onclick','check(this)');
            uwu.innerText = arr[Number(i)][Number(memory[i][j]+1)];
        }
    }
}
let z=[];
async function check(th){
    const vysledek = process(th);
    let i = Number(th.parentNode.id.slice(-1))
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
        console.log(z[i],spravne/(spravne+spatne)*100)
    } else {
        addSpatne(1)
        th.style.opacity = 1;
        th.style.transition = "opacity 0.5s";
        th.style.opacity = 0;
        z[i]=th.parentNode.childNodes.length-2;
        await sleep(500)
        th.remove()
    }
}
function process(th){
    for(let i=0;i<arr.length;i++){
        if(th.innerText==arr[i][1]){
            return 1;
        }
    }
    return 0;
}

async function spravneaddanimation(th){
    dbar.innerText = "Questions from Poland: "+ Number(arr.length-dsv.childNodes.length+1)+'/'+arr.length
    th.parentNode.style.opacity = 1;
    th.parentNode.style.transition = "opacity 0.5s";
    th.parentNode.style.opacity = 0;
    await sleep(500)
    th.parentNode.remove()
}