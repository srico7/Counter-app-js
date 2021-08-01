// document.getElementById("count-no").innerText=(count);

let countNo = document.getElementById("count-no")
let count = 0;

function increment() {
    count = count + 1
    countNo.innerText = count;
    console.log(count)
}; 
