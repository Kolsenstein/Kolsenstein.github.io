//Declarations
const upgrades = {
    'Click Me!': {
        cost: 0,
        pps: 0
    },
    'AutoClicker V1': {
        cost: 12,
        pps: 1
    },
    'AutoClicker V2': {
        cost: 130,
        pps: 10
    },
    'Pointereiellion': {
        cost: 2600,
        pps: 200
    },
    'Upgrade 4': {
        cost: 3159,
        pps: 243
    },
    'Upgrade 5': {
        cost: 13312,
        pps: 1024
    },
    'Upgrade 6': {
        cost: 40625,
        pps: 3125
    },
    'Upgrade 7': {
        cost: 101088,
        pps: 7776
    },
    'Upgrade 8': {
        cost: 218491,
        pps: 16807
    },
    'Upgrade 9': {
        cost: 425984,
        pps: 32768
    },
    'Upgrade 10': {
        cost: 767637,
        pps: 59049
    },
    'Upgrade 11': {
        cost: 1300000,
        pps: 100000
    },
    'Upgrade 12': {
        cost: 2093663,
        pps: 161051
    },
    'Upgrade 13': {
        cost: 3234816,
        pps: 248832
    },
    'Upgrade 14': {
        cost: 4826809,
        pps: 371293
    },
    'Upgrade 15': {
        cost: 6991712,
        pps: 537824
    },
    'Upgrade 16': {
        cost: 9871875,
        pps: 759375
    },
    'Upgrade 17': {
        cost: 13631490,
        pps: 1048576
    },
    'Upgrade 18': {
        cost: 18458140,
        pps: 1419857 
    },
    'Upgrade 19': {
        cost: 24564380,
        pps: 1889568
    },
    'Upgrade 20': {
        cost: 32189290,
        pps: 2476099
    },
    'Upgrade 21': {
        cost: 41600000,
        pps: 3200000
    },
    'Upgrade 22': {
        cost: 53093310,
        pps: 4084101
    },
    'Upgrade 23': {
        cost: 66997220,
        pps: 5153632
    },
    'Upgrade 24': {
        cost: 83672460,
        pps: 6436343
    },
    'Upgrade 25': {
        cost: 103514100,
        pps: 7962624
    },
    'Upgrade 26': {
        cost: 126953100,
        pps: 9765625
    },
    'Upgrade 27': {
        cost: 154457900,
        pps: 11881380
    },
    'Upgrade 28': {
        cost: 186535800,
        pps: 14348910
    },
    'Upgrade 29': {
        cost: 223734800,
        pps: 17210370
    },
    'Upgrade 30': {
        cost: 266644900,
        pps: 20511150
    },
    'Upgrade 31': {
        cost: 315900000,
        pps: 24300000
    },
    'Upgrade 32': {
        cost: 372179000,
        pps: 28629150
    },
    'Upgrade 33': {
        cost: 436207600,
        pps: 33554430
    },
    'Upgrade 34': {
        cost: 508760100,
        pps: 39135390
    },
    'Upgrade 35': {
        cost: 590660500,
        pps: 45435420
    },
    'Upgrade 36': {
        cost: 682784400,
        pps: 52521880
    },
    'Upgrade 37': {
        cost: 786060300,
        pps: 60466180
    },
    'Upgrade 38': {
        cost: 901471500,
        pps: 69343960
    },
    'Upgrade 39': {
        cost: 1030057000,
        pps: 79235170
    },
    'Upgrade 40': {
        cost: 1172915000,
        pps: 90224200
    },
    'Upgrade 41': {
        cost: 1331200000,
        pps: 102400000
    },
    'Upgrade 42': {
        cost: 1506131000,
        pps: 115856200
    },
    'Upgrade 43': {
        cost: 1698986000,
        pps: 130691200
    },
    'Upgrade 44': {
        cost: 1911110000 ,
        pps: 147008400
    },
    'Upgrade 45': {
        cost: 2143911000,
        pps: 164916200
    },
    'Upgrade 46': {
        cost: 2398866000,
        pps: 184528100
    },
    'Upgrade 47': {
        cost: 2677519000,
        pps: 205963000
    },
    'Upgrade 48': {
        cost: 2981485000,
        pps: 229345000
    },
    'Upgrade 49': {
        cost: 3312452000,
        pps: 254804000
    },
    'Upgrade 50': {
        cost: 1454183000000,
        pps: 282475300
    },
}

let points = document.querySelector('.points h1'); // Select the <h1> element
let time = 1000; // The time between clicks
let cps = 0; // Clicks Per Second
let choice

//Style Function
function upgradeName(name) {
    choice = name
    let element = document.getElementById('upgrade_name');
    let cost = document.getElementById('upgrade_cost');
    let upps = document.getElementById('pps');
    let pps =  document.getElementById('cps');
    element.textContent = name.toUpperCase();

    cost.textContent = upgrades[name].cost
    upps.textContent = upgrades[name].pps
    pps.textContent = String(cps)

    if (upgrades[name].cost <= parseInt(points.textContent)) {
        contentText("Enough Points!")
    }
    else {
        contentText("Not Enough Points!" )
    }
}

//Main Functions
//Increase bracket count
function bracket(id) {
    let element = document.getElementById(id)
    let number = parseInt(element.textContent)
    number++
    element.textContent = String(number).padStart(3, '0')
}

//Player click
function click(amount) {
    let number = parseInt(points.textContent.trim()) // Parse its content
    number = number + amount
    points.textContent = number // Update the content of <h1>
}

//Autoclick for player
function Autoclicker() {
    setInterval(function() {click(cps)}, time);
}

//Decrease time
function decTime(amount) {
    if (time > 0) {
        time -= amount
    }
}

//Subtract Points
function subPoints(name) {
    if (parseInt(points.textContent) > 0) {
        points.textContent = parseInt(points.textContent) - upgrades[name].cost
    }
}

//Price Text
function contentText(text) {
    let content = document.getElementById('content')

    content.textContent = text.toUpperCase()
}

//Increase Price
function incPrice(name) {
    upgrades[name].cost *= 2
}

//Increase CPS
function incCPS(name) {
    cps += upgrades[name].pps
}

//Button Functions
//Click Me!
function click_me() { 
    bracket('clickCount')
    click(1)
}

//AutoClick Upgrades
function UpgradeClick() {
    if (parseInt(points.textContent) >= upgrades[choice].cost) {
        bracket(choice)
        subPoints(choice)
        incPrice(choice)
        incCPS(choice)
        decTime(10)
        Autoclicker()
    }
}