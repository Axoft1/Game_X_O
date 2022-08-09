let map = 9;
let array = [];
const o = 'O'
const x = 'X'

for(let i =0; i<map; i++){
    let map = document.querySelector("#map");
    let box = document.createElement("div");
    box.className = "box";
    box.id = i;
    box.addEventListener('click', logic)
    map.append(box);
}

const boxs = document.querySelectorAll('.box')
boxs.forEach(e => {
    if(e.id >2 ){
        e.style.borderTop = '1px solid #333'
    }
    if(e.id >0 && e.id <3 ){
        e.style.borderLeft = '1px solid #333';
    }
    if(e.id >3 && e.id <6 ){
        e.style.borderLeft = '1px solid #333';
    }
    if(e.id >6 && e.id <9 ){
        e.style.borderLeft = '1px solid #333';
    }
});

let queue = 0;
function logic (e) {
    let id = e.target.id;
    let text = e.target.innerText;
    if(queue === 0 && text === "") {
        let e = document.getElementById(id)
        e.textContent = x
        queue += 1
        array[id] = x
       
        if( victory() ){
            setTimeout(() =>{
                alert(`Победили ${x}`)
            newGame ()
            },1)
        }
    }else if(queue === 1 && text === "") {
        let e = document.getElementById(id)
        e.textContent = o
        queue -= 1
        array[id] = o
        if( victory() ){
            setTimeout(() =>{
                alert(`Победили ${o}`)
            newGame ()
            },1)
        }
    }
    
} 

const newGame = () => {
    setTimeout(() =>{
        boxs.forEach(e => {
            e.textContent = "";
        });
        array.forEach((e,i) => {
            array[i] = null;
        })
        // console.log(array);
    },1000)
}

const victory = () => {
        if(array[0] === x){
            if(array[1] === x && array[2] === x ){  
                return true;
            }
            if(array[3] === x && array[6] === x ){
                return true;
            }
            if(array[4] === x && array[8] === x ){
                return true;
            }
        }
        if(array[4] === x){
            if(array[1] === x && array[7] === x ){
                return true;
            }
            if(array[3] === x && array[5] === x ){
                return true;
            }
            if(array[2] === x && array[6] === x ){
                return true;
            }
        }
        if(array[8] === x){
            if(array[6] === x && array[7] === x ){
                return true;
            }
            if(array[2] === x && array[5] === x ){
                return true;
            }
        }

        if(array[0] === o){
            if(array[1] === o && array[2] === o){
                return true;
            }
            if(array[3] === o  && array[6] === o  ){
                return true;
            }
            if(array[4] === o  && array[8] === o  ){
                return true;
            }
        }
        if(array[4] === o ){
            if(array[1] === o  && array[7] === o  ){
                return true;
            }
            if(array[3] === o  && array[5] === o  ){
                return true;
            }
            if(array[2] === o  && array[6] === o  ){
                return true;
            }
        }
        if(array[8] === o ){
            if(array[6] === o  && array[7] === o  ){
                return true;
            }
            if(array[2] === o  && array[5] === o  ){
                return true;
            }
        }
    }
