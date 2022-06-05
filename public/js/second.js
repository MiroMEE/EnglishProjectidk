const mainDiv = document.querySelector('.mainDiv');
const dbar = document.querySelector('.dbar');
const dsv = document.querySelector('.dqeust');
const arr = [["What ___ you doing?","are","is","it"]];
const memory = [];
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

function creatorQuestions(how_many){
    for(let i=0;i<how_many;i++){
        const crtdiv = document.createElement('div');
        dsv.append(crtdiv);
        dsv.id = "questions";
        crtdiv.innerText = arr[i][0];
        for(let j=0;j<=2;j++){
            getY(3,memory,3)
            const uwu = document.createElement('div');
            dsv.append(uwu);
            uwu.id = "answers";
            uwu.innerText = arr[Number(i)][Number(memory[i][j]+1)];
        }
    }
}