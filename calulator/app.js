let btn = document.getElementById("display");

function appendtodisplay(input) {
    display.value += input;
};

function cleardisplay() {
    display.value = "";
}

function clt() {
    try {
        display.value = eval(display.value)
    } catch (er) {
        display.value("erorr")
    }

}