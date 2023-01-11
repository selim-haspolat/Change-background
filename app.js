let btn = document.getElementById("btn")
let body = document.getElementById("body") 

btn.addEventListener('click', (x) => {
    let c1 = Math.floor(Math.random() * 255);
    let c2 = Math.floor(Math.random() * 255);
    let c3 = Math.floor(Math.random() * 255);
    let rgb = `rgb(${c1},${c2},${c3})`
    body.style.backgroundColor = rgb
    console.log(rgb);
})
