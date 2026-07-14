console.log("JavaScript çalışıyor");

const startButton = document.getElementById("start");

console.log(startButton);
const startButton = document.getElementById("start");
const result = document.getElementById("result");
const food = document.querySelector(".food");


startButton.addEventListener("click",()=>{


    startButton.disabled = true;

    startButton.innerHTML = "ANALYZING...";

    result.innerHTML =
    "🔬 Scanning ingredients...";


    food.style.animation =
    "pulse 0.5s infinite";


    setTimeout(()=>{

        result.innerHTML =
        "🌶 Detecting spices...";

    },2000);



    setTimeout(()=>{

        result.innerHTML =
        "🥥 Checking flavor balance...";

    },4000);



    setTimeout(()=>{

        result.innerHTML =
        "✅ Experiment completed!<br><br>Thai flavor profile found 🍜";

        startButton.innerHTML =
        "NEW EXPERIMENT";

        startButton.disabled=false;


    },6000);



});
