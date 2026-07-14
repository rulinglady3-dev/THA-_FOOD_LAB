/* ===========================
   ELEMENTS
=========================== */

const screens = document.querySelectorAll(".screen");

const bootScreen = document.getElementById("bootScreen");
const homeScreen = document.getElementById("homeScreen");
const databaseScreen = document.getElementById("databaseScreen");
const scannerScreen = document.getElementById("scannerScreen");
const labScreen = document.getElementById("labScreen");
const resultScreen = document.getElementById("resultScreen");

const bootBar = document.getElementById("bootBar");

const startBtn = document.getElementById("startBtn");

const foodCards = document.querySelectorAll(".food-card");

const scanImage = document.getElementById("scanImage");
const scanFoodName = document.getElementById("scanFoodName");
const scanProgress = document.getElementById("scanProgress");
const scanPercent = document.getElementById("scanPercent");
const scanStatus = document.getElementById("scanStatus");

const ingredientGrid = document.getElementById("ingredientGrid");
const synthesizeBtn = document.getElementById("synthesizeBtn");

const resultImage = document.getElementById("resultImage");
const resultFoodName = document.getElementById("resultFoodName");
const foodInfo = document.getElementById("foodInfo");

const backBtn = document.getElementById("backBtn");


/* ===========================
   FOOD DATA
=========================== */

const foods = {

    "Pad Thai":{

        image:"images/padthai.jpg"

    },

    "Tom Yum Soup":{

        image:"images/tomyum.jpg"

    },

    "Green Curry":{

        image:"images/greencurry.jpg"

    },

    "Mango Sticky Rice":{

        image:"images/mango.jpg"

    },

    "Thai Tea":{

        image:"images/thaitea.jpg"

    },

    "Pa Thong Ko":{

        image:"images/pathongko.jpg"

    },

    "Curry Crab":{

        image:"images/currycrab.jpg"

    },

    "Kai Ping":{

        image:"images/kaiping.jpg"

    },

    "Pad Krapow":{

        image:"images/padkrapow.jpg"

    }

};


let currentFood = "";


/* ===========================
   FUNCTIONS
=========================== */

function showScreen(screen){

    screens.forEach(s=>{

        s.classList.remove("active");

    });

    screen.classList.add("active");

    const hudStatus = document.getElementById("hudStatus");

    if(screen===homeScreen){

        hudStatus.textContent="SYSTEM ONLINE";

    }

    else if(screen===databaseScreen){

        hudStatus.textContent="FOOD DATABASE";

    }

    else if(screen===scannerScreen){

        hudStatus.textContent="SCANNING";

    }

    else if(screen===labScreen){

        hudStatus.textContent="INGREDIENT LAB";

    }

    else if(screen===resultScreen){

        hudStatus.textContent="ANALYSIS COMPLETE";

    }

}


/* ===========================
   START BUTTON
=========================== */

startBtn.addEventListener("click",()=>{

    showScreen(databaseScreen);

});


/* ===========================
   FOOD CARD CLICK
=========================== */

foodCards.forEach(card=>{

    card.addEventListener("click",()=>{

        currentFood = card.dataset.food;

        scanImage.src = foods[currentFood].image;

        scanFoodName.textContent = currentFood;

        scanProgress.style.width="0%";

        scanPercent.textContent="0%";

        scanStatus.textContent="Initializing...";

        showScreen(scannerScreen);

        startScan();

    });
  
});
/* ===========================
   SCANNER
=========================== */

function startScan(){

    let percent = 0;

    const messages = [

        "Initializing Scanner...",
        "Reading Surface...",
        "Detecting Ingredients...",
        "Comparing Thai Database...",
        "Authenticity Check...",
        "Finalizing Analysis..."

    ];

    scanStatus.textContent = messages[0];

    const scanInterval = setInterval(()=>{

        percent++;

        scanProgress.style.width = percent + "%";

        scanPercent.textContent = percent + "%";

        if(percent === 15){

            scanStatus.textContent = messages[1];

        }

        if(percent === 35){

            scanStatus.textContent = messages[2];

        }

        if(percent === 60){

            scanStatus.textContent = messages[3];

        }

        if(percent === 85){

            scanStatus.textContent = messages[4];

        }

        if(percent === 100){

            clearInterval(scanInterval);

            scanStatus.textContent = messages[5];

            setTimeout(()=>{

                showIngredientLab();

            },800);

        }

    },35);

}
/* ===========================
   INGREDIENTS
=========================== */

const ingredients = {

    "Pad Thai":[
        ["🍜","Rice Noodles"],
        ["🦐","Shrimp"],
        ["🥚","Egg"],
        ["🌱","Bean Sprouts"],
        ["🥜","Peanuts"],
        ["🧄","Garlic"],
        ["🌿","Garlic Chives"],
        ["🌶️","Chili"]
    ],

    "Tom Yum Soup":[
        ["🦐","Shrimp"],
        ["🍄","Mushrooms"],
        ["🌿","Lemongrass"],
        ["🍃","Kaffir Lime Leaves"],
        ["🍋","Lime"],
        ["🧄","Garlic"],
        ["🌶️","Chili"],
        ["🥣","Broth"]
    ],

    "Green Curry":[
        ["🍗","Chicken"],
        ["🥥","Coconut Milk"],
        ["🍆","Thai Eggplant"],
        ["🌿","Thai Basil"],
        ["🌶️","Green Chili"],
        ["🍃","Kaffir Lime Leaves"],
        ["🧄","Garlic"],
        ["🧅","Shallots"]
    ],

    "Mango Sticky Rice":[
        ["🥭","Mango"],
        ["🍚","Sticky Rice"],
        ["🥥","Coconut Milk"],
        ["🍯","Palm Sugar"],
        ["🧂","Salt"]
    ],

    "Thai Tea":[
        ["🫖","Black Tea"],
        ["🥛","Condensed Milk"],
        ["🥛","Evaporated Milk"],
        ["🍯","Sugar"],
        ["🧊","Ice"]
    ],

    "Pa Thong Ko":[
        ["🌾","Flour"],
        ["🧂","Salt"],
        ["💧","Water"],
        ["🛢️","Vegetable Oil"]
    ],

    "Curry Crab":[
        ["🦀","Crab"],
        ["🥚","Egg"],
        ["🥥","Coconut Milk"],
        ["🧄","Garlic"],
        ["🧅","Onion"],
        ["🌶️","Curry Powder"]
    ],

    "Kai Ping":[
        ["🍗","Chicken"],
        ["🧄","Garlic"],
        ["🌿","Cilantro"],
        ["🧂","Soy Sauce"],
        ["🍯","Palm Sugar"]
    ],

    "Pad Krapow":[
        ["🥩","Minced Pork"],
        ["🌿","Holy Basil"],
        ["🌶️","Bird's Eye Chili"],
        ["🧄","Garlic"],
        ["🥚","Fried Egg"],
        ["🍚","Jasmine Rice"]
    ]

};


/* ===========================
   INGREDIENT LAB
=========================== */

function showIngredientLab(){

    showScreen(labScreen);

    labFoodName.textContent = currentFood;

    ingredientGrid.innerHTML = "";

    synthesizeBtn.style.display = "none";

    const list = ingredients[currentFood];

    list.forEach((item,index)=>{

        const card = document.createElement("div");

        card.className = "ingredient-card";

        card.innerHTML = `

            <div class="tube">${item[0]}</div>

            <div class="ingredient-name">

                ${item[1]}

            </div>

        `;

        ingredientGrid.appendChild(card);

        setTimeout(()=>{

            card.classList.add("show");

        },index*300);

    });

    setTimeout(()=>{

        synthesizeBtn.style.display="inline-block";

    },list.length*300+400);

}
/* ===========================
   FOOD INFORMATION
=========================== */

const foodInformation = {

    "Pad Thai":{
        origin:"Thailand",
        spice:"Medium",
        category:"Noodle",
        cooking:"30 min",
        difficulty:"Medium"
    },

    "Tom Yum Soup":{
        origin:"Thailand",
        spice:"Hot",
        category:"Soup",
        cooking:"35 min",
        difficulty:"Medium"
    },

    "Green Curry":{
        origin:"Thailand",
        spice:"Hot",
        category:"Curry",
        cooking:"40 min",
        difficulty:"Medium"
    },

    "Mango Sticky Rice":{
        origin:"Thailand",
        spice:"None",
        category:"Dessert",
        cooking:"25 min",
        difficulty:"Easy"
    },

    "Thai Tea":{
        origin:"Thailand",
        spice:"None",
        category:"Drink",
        cooking:"10 min",
        difficulty:"Easy"
    },

    "Pa Thong Ko":{
        origin:"Thailand",
        spice:"None",
        category:"Snack",
        cooking:"20 min",
        difficulty:"Easy"
    },

    "Curry Crab":{
        origin:"Thailand",
        spice:"Medium",
        category:"Seafood",
        cooking:"45 min",
        difficulty:"Hard"
    },

    "Kai Ping":{
        origin:"Thailand",
        spice:"Mild",
        category:"Grilled",
        cooking:"30 min",
        difficulty:"Easy"
    },

    "Pad Krapow":{
        origin:"Thailand",
        spice:"Hot",
        category:"Rice",
        cooking:"25 min",
        difficulty:"Easy"
    }

};


/* ===========================
   SYNTHESIZE BUTTON
=========================== */

synthesizeBtn.addEventListener("click",()=>{

    const info = foodInformation[currentFood];

    resultImage.src = foods[currentFood].image;

    resultFoodName.textContent = currentFood;

    foodInfo.innerHTML = `

        <div class="info-row">
            <span class="info-title">Origin</span>
            <span class="info-value">${info.origin}</span>
        </div>

        <div class="info-row">
            <span class="info-title">Category</span>
            <span class="info-value">${info.category}</span>
        </div>

        <div class="info-row">
            <span class="info-title">Spice Level</span>
            <span class="info-value">${info.spice}</span>
        </div>

        <div class="info-row">
            <span class="info-title">Cooking Time</span>
            <span class="info-value">${info.cooking}</span>
        </div>

        <div class="info-row">
            <span class="info-title">Difficulty</span>
            <span class="info-value">${info.difficulty}</span>
        </div>

    `;

    showScreen(resultScreen);

});


/* ===========================
   BACK BUTTON
=========================== */

backBtn.addEventListener("click",()=>{

    showScreen(databaseScreen);

});
