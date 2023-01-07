var now = new Date()
var time = now.getHours()
console.log (`Now it's exactly ${time}.`)
if (time < 12){
    console.log("Good Morning.")
} else if (time <= 18) {
    console.log("Good Evening.")
} else {
    console.log("Good Night.")
}