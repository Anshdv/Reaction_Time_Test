const btn = document.getElementById("btn");
const time_display = document.getElementById("time_display");

btn.addEventListener("mousedown", StartTest)

let GreenTime = 0;
let time = 0
let greenID
let correct_sound = new Audio('Correct_answer.mp3')
let wrong_sound = new Audio('Wrong_answer.mp3')


function StartTest(){
    document.querySelector(".instructions").style.visibility = "hidden"
    GreenTime = 0
    document.body.style.backgroundColor = "red";
    btn.innerHTML = "Wait for green"

    btn.removeEventListener("mousedown", StartTest)
    btn.addEventListener("mousedown", EndTest)

    greenID = setTimeout(TurnGreen, Math.random() * 3000 + 3000)

    time_display.style.visibility = "hidden"
}

function EndTest(){
    time_display.style.visibility = "visible"
    if (GreenTime == 0){
        wrong_sound.play()
        time_display.innerHTML = "You clicked too soon"
        clearTimeout(greenID)
    }
    else{
        correct_sound.play()
        time = Date.now() - GreenTime
        time_display.innerHTML = time.toString() + " ms"
    }
    btn.innerHTML = "Restart test";
    btn.removeEventListener("mousedown", EndTest);
    btn.addEventListener("mousedown", StartTest)
}

function TurnGreen(){
    GreenTime = Date.now()
    document.body.style.backgroundColor = "limegreen";
    btn.innerHTML = "Click now!"
}