let saveP = document.getElementById("save-p");
let countNo = document.getElementById("count-no");
let count = 0;

function increment() {
    count += 1;
    countNo.textContent = count;
}; 

function save(){
    let en = count + " - ";
    saveP.textContent += en;
    countNo.textContent = 0;
    count = 0;
     
}

