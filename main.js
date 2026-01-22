/* ==================================== */
/* Global DOMs */
/* ==================================== */
const bitcoinsTotal = document.getElementById('bitcoins');
const moneyTotal = document.getElementById('money');
const btnMiner = document.getElementById('mine-button');
const btnSell = document.getElementById('sell-button');
const clickPower = document.getElementById('click-power');
const buyClickPower = document.getElementById('buy-click-power');
const autoClickerTotal = document.getElementById("auto-clicker");
const buyAutoClicker = document.getElementById("buy-auto-clicker");

/* ==================================== */
/* Global State */
/* ==================================== */
let satoshis = 0;
let real = 0;

let clickPowerValue = 1;
let clickPowerPrice = 5;

let autoClicker = 0;
let autoClickerPrice = 50;

/* ==================================== */
/* Load Game */
/* ==================================== */


function loadGame() {
    const saved = localStorage.getItem("gameSave");
    if (!saved) return;

    const data = JSON.parse(saved);

    satoshis = data.crypto;
    real = data.money;
    clickPowerValue = data.power;
    autoClicker = data.auto;
    clickPowerPrice = data.powerPrice;
    autoClickerPrice = data.autoPrice;
}

loadGame();


/* ==================================== */
/* Initial Render */
/* ==================================== */
renderBTC();
renderReal();
renderPowerText();
renderPowerPrice();
renderAutoClicker();

/* ==================================== */
/* Render Functions */
/* ==================================== */
function renderBTC () {
    const btc = satoshis / 100_000_000;
    bitcoinsTotal.textContent = `${btc.toFixed(8)} BTC`;
}

function renderReal () {
    moneyTotal.textContent = `R$ ${real.toFixed(2)}`;
}

function renderPowerText () {
    clickPower.textContent = `Click Power = ${clickPowerValue.toFixed(2)}`;
}

function renderPowerPrice () {
    buyClickPower.textContent = `Buy Click Power = R$ ${clickPowerPrice.toFixed(2)}`;
}

function renderAutoClicker () {
    autoClickerTotal.textContent = `Auto Clickers = ${autoClicker}`;
    buyAutoClicker.textContent = `Buy Auto Clicker = R$ ${autoClickerPrice.toFixed(2)}`;
}

/* ==================================== */
/* Manual Mining */
/* ==================================== */
function mineBTC() {
    satoshis += clickPowerValue;
    renderBTC();
}

btnMiner.addEventListener('click', mineBTC);

/* ==================================== */
/* Sell BTC */
/* ==================================== */
function sellBTC() {
    real += satoshis / 3;
    satoshis = 0;
    renderBTC();
    renderReal();
}

btnSell.addEventListener('click', sellBTC);

/* ==================================== */
/* Upgrade Click Power */
/* ==================================== */
function upgradeClick() {
    if (real >= clickPowerPrice) {
        real -= clickPowerPrice;
        clickPowerValue *= 1.1;
        clickPowerPrice *= 1.1;

        renderReal();
        renderPowerText();
        renderPowerPrice();
    }
}

buyClickPower.addEventListener('click', upgradeClick);

/* ==================================== */
/* Upgrade Auto Clicker */
/* ==================================== */
function upgradeAutoClicker() {
    if (real >= autoClickerPrice) {
        real -= autoClickerPrice;
        autoClicker += 1;
        autoClickerPrice *= 1.25;

        renderReal();
        renderAutoClicker();
    }
}

buyAutoClicker.addEventListener('click', upgradeAutoClicker);

/* ==================================== */
/* GLOBAL GAME LOOP */
/* ==================================== */
setInterval(() => {
    if (autoClicker > 0) {
        satoshis += autoClicker * clickPowerValue;
        renderBTC();
    }
}, 1000);


/* ==================================== */
/* LocalStorage */
/* ==================================== */

function saveGame() {
    const gameSave = {
    crypto: satoshis,
    money: real,
    power: clickPowerValue,
    auto: autoClicker,
    powerPrice: clickPowerPrice,
    autoPrice: autoClickerPrice
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
};

setInterval(saveGame, 5000);

window.addEventListener("beforeunload", saveGame);
