
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
const foodCards = document.querySelectorAll(".food-card");


const ingredients = {

    "Pad Thai":[
        "🍜 Pirinç eriştesi",
        "🥜 Fıstık",
        "🥚 Yumurta",
        "🌱 Fasulye filizi",
        "🌶️ Acı biber"
    ],


    "Tom Yum Soup":[
        "🍤 Karides",
        "🌿 Limon otu",
        "🌶️ Acı biber",
        "🍋 Lime",
        "🍄 Mantar"
    ],


    "Green Curry":[
        "🥥 Hindistan cevizi sütü",
        "🌿 Fesleğen",
        "🌶️ Yeşil biber",
        "🍗 Tavuk",
        "🍛 Köri"
    ],


    "Mango Sticky Rice":[
        "🥭 Mango",
        "🍚 Yapışkan pirinç",
        "🥥 Hindistan cevizi sütü",
        "🍯 Şeker"
    ],


    "Thai Tea":[
        "🫖 Siyah çay",
        "🥛 Süt",
        "🍯 Şeker",
        "🧊 Buz",
        "🌿 Baharat aroması"
    ],


    "Pa Thong Ko":[
        "🌾 Un",
        "🥚 Yumurta",
        "🍯 Şeker",
        "🛢️ Yağ"
    ],


    "Curry Crab":[
        "🦀 Yengeç",
        "🥥 Hindistan cevizi sütü",
        "🌶️ Baharat",
        "🥚 Yumurta"
    ],


    "Kai Ping":[
        "🍗 Tavuk",
        "🧄 Sarımsak",
        "🌿 Otlar",
        "🧂 Baharat"
    ],


    "Pad Krapow":[
        "🌿 Fesleğen",
        "🌶️ Acı biber",
        "🥩 Et",
        "🧄 Sarımsak",
        "🥚 Yumurta"
    ]

};



foodCards.forEach(card=>{


    card.addEventListener("click",()=>{


        const foodName = card.dataset.food;


        result.innerHTML = `

        🧪 ANALYSIS COMPLETE
        
        <br><br>

        <h2>${foodName}</h2>

        <br>

        ${ingredients[foodName].join("<br>")}

        `;


    });


});
