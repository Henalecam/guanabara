function calculate(){
    let numbermul = document.getElementById("numbermul")
    let tablemul = document.getElementById("tablemul")
    if (numbermul.value.lenght == 0){
        window.alert("Write some number.")
    } else{
        let n = Number(numbermul.value)
        tablemul.innerHTML = ""
        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tablemul.appendChild(item)
        }
    }
}