function calculate(){
    var date = new Date()
    var year = date.getFullYear()
    var sum = window.document.querySelector("div#sum")
    var personyear = window.document.getElementById("nbage")
    if (personyear.value.lenght == 0 || personyear.value > year){
        window,alert("ERROR, verify and try again")
    }
}