function load() {
    var txt1 = window.document.querySelector("div#hours")

    var img = window.document.getElementById("image")

    var now = new Date()

    var time = now.getHours()

    txt1.innerHTML = `Now it's exactly ${time} hours`

    if (time >= 0 && time < 12){

        img.src = 'morning.jpg'

        document.body.style.background = "#e2cd9f"

    }else if (time >= 12 && time < 18 ){

        img.src = 'afternoon.jpg'
        document.body.style.background = "#b9846f"

    }else {

        img.src = 'night.jpg'
        document.body.style.background = "#515154"

    }
}
