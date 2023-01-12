let num = document.querySelector("input#addnum")
let arrlist = document.querySelector("select#addarray")
let sum = document.querySelector("div#sum")
let values = []


function isnumber(number){
    if(Number(number) >= 1 && Number(number) <= 100){
            return true
    }else{
        return false
    }
}
function inlist(number, list){
    if(list.indexOf(Number(number)) != -1){
        return true
    } else{
        return false
    }
    
}

function numarray(){
    if(isnumber(num.value) && !inlist(num.value, values)){
        values.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Value ${num.value} added`
        arrlist.appendChild(item)
        sum.innerHTML = ""
    } else{
        window.alert("Invalid value or already in the list")
    }
}
function results(){
    if(values.length == 0){
        window.alert("The list is empty")
    } else{

        let max = values[0]
        let min = values[0]
        let plus = 0

        for(let pos in values){
            plus += values[pos]
            if(values[pos] > max){
                max = values[pos]
            }
            if (values[pos] < min){
                min = values[pos]
            }
        }

        sum.innerHTML += `<p>We actually have ${values.length} numbers</p>`

        sum.innerHTML += `<p>The Biggest number in the list is: ${max}</p>`
        
        sum.innerHTML += `<p>And the smallest is: ${min}</p>`

        sum.innerHTML += `<p>The sum of all the numbers is: ${plus} </p>`
        
        sum.innerHTML += `<p>The median of the list is: ${plus / values.length}</p>`
    }
}