let box1 = document.querySelector(".item1");
let box2 = document.querySelector(".item2");
let box3 = document.querySelector(".item3");
let box4 = document.querySelector(".item4");
let box5 = document.querySelector(".item5");
let box6 = document.querySelector(".item6");

let title = "The Title";
let p = `Some Text goes here,some text goes here,some text goes here,some text goes here.`

let div = document.querySelectorAll(".item");

for (let i = 0; i < 6; i ++) {
    let h2 = document.createElement("h2");
    h2.innerText = title;
    let para = document.createElement('para');
    para.innerText = p;

}
div.append( p)


