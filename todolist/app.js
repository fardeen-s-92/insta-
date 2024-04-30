let adbtn = document.querySelector(".adbutton");
let inp = document.querySelector(".input");
let ul = document.querySelector("ul");

adbtn.addEventListener("click", () => {
    let item = document.createElement("li")
    item.innerText = inp.value
    ul.appendChild(item)
    inp.value = ""


    let btn = document.createElement("button")
    btn.innerText = "Delete"
    btn.classList.add("delete")


    item.appendChild(btn);
});

ul.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement
        listItem.remove()
        console.log("butoon")
    }
});