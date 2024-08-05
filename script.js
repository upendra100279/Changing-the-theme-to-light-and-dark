

let modebtn = document.querySelector("#modeButton");
let currmode = "light";

modebtn.addEventListener("click", () => {
    let body = document.querySelector("body");
    if (currmode === "light") {
        currmode="dark";
        let body = document.querySelector("body");
        body.style.backgroundColor = "black";
    }
    else {
        currmode="light";
        let body = document.querySelector("body");
        body.style.backgroundColor = "white";

    }
});