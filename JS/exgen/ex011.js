var age = 70
console.log(`You have ${age} years.`)
if (age < 16){
    console.log("You can't vote.")
} else if (age < 18 || age > 65){
    console.log("Your vote is optional.")
} else {
    console.log("Your vote is obrigatory.")
}