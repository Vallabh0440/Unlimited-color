let body = document.getElementById('main');


const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
console.log(randomColor())
let intervalId
const changeColor = function(){   
    intervalId = setInterval(changeBg,1000);
    function changeBg (){
        document.body.style.backgroundColor = randomColor();
    } 
};

const stopChangeingColor = function(){
    clearInterval(intervalId)
    intervalId = null;
}

document.getElementById('start').addEventListener('click',changeColor);

document.getElementById('stop').addEventListener('click',stopChangeingColor);

// let colorInterval;

// const randomColor = function () {
//     const hex = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//         color += hex[Math.floor(Math.random() * 16)];
//     }
//     return color;
// };

// const changeColor = function () {
//     if (!colorInterval) {
//         colorInterval = setInterval(() => {
//             document.body.style.backgroundColor = randomColor();
//         }, 1000); // Change color every second
//     }
// };

// const stopChangingColor = function () {
//     clearInterval(colorInterval);
//     colorInterval = null;
// };

// document.getElementById('start').addEventListener('click', changeColor);
// document.getElementById('stop').addEventListener('click', stopChangingColor);
