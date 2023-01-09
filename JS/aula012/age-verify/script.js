function calculate(){
    var date = new Date()
    var year = date.getFullYear()
    // Ano atual
    var sum = window.document.querySelector("div#sum")
    var personyear = window.document.getElementById("nbage")
    // Ano que a pessoa colocou
    if (personyear.value.lenght == 0 || personyear.value > year){
        window,alert("ERROR, verify and try again")
    } else{
        var fsex = document.getElementsByName('radsex')
        // fsex é a que descreve as check box [0] = fem, [1] = masc
        var age = year - Number(personyear.value)
        var image = window.document.createElement("img")
        image.setAttribute("id", "Person")
        if (fsex[0].checked){
            personsex = "Man"
            if (age >= 0 && age <= 18){
                image.setAttribute("src", 'jovemmasc.jpg')
            } else if (age < 50){
                image.setAttribute("src", 'adultomasc.jpg')
            } else{
                image.setAttribute("src", 'idosomasc.jpg')
            }
        } else if (fsex[1].checked){
            personsex = "Woman"
            if (age >= 0 && age <= 18){
                image.setAttribute("src", 'jovemfem.jpg')
            } else if (age < 50){
                image.setAttribute("src", 'adultofem.jpg')
            } else{
                image.setAttribute("src", 'idosofem.jpg')                
            }
        }
        sum.style.textAlign = "center"
        sum.innerHTML = `You're ${age}'s old being a ${personsex}`
        sum.appendChild(image)
    }
}