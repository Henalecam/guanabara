function count() {
    let startn = window.document.getElementById("startn")
    let finishn = window.document.getElementById("finishn")
    let stepsn = window.document.getElementById("stepsn")
    let sum = window.document.getElementById("sum")
    
    if (startn.value.lenght == 0 || finishn.value.lenght == 0 || stepsn.value.lenght == 0){
        sum.innerHTML = "Impossible to count!"

    } else {
        sum.innerHTML ="Counting: "

        let steps = Number(stepsn.value)
        
        let start = Number(startn.value)
        
        let finish = Number(finishn.value)

        if (steps <= 0){
            window.alert("Invalid Step! Step set to '1'")
            steps = 1
        }

        if (start < finish) {
            // Fiquei 2 horas debuggando, reescrevendo tudo para saber que o erro estava no "c =+ steps"
            for(let c = start; c <= finish; c += steps){
                
                sum.innerHTML += `${c} \u{1F449}`
                
            }
        } else{
            for(let c = start; c >= finish; c -= p){
                sum.innerHTML += `${c} \u{1F449}`
            }
        }
        sum.innerHTML += `\u{1F3C1}`
    }
}