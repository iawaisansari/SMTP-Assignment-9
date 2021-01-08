function onClickHandler(num) {
    var output = document.getElementById("result").value;
    document.getElementById("result").value = output + num;

}
function clrdisp() {
    document.getElementById("result").value = " "
}
function eql() {
    var text = document.getElementById("result").value;
    var result = eval(text);
    document.getElementById("result").value = result;
}

