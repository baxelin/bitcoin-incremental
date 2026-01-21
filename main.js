/* ==================================== */
/* Global DOMs */
/* ==================================== */
const bitcoinsTotal = document.getElementById('bitcoins');
const moneyTotal = document.getElementById('money');
const btnMiner = document.getElementById('mine-button');
const btnSell = document.getElementById('sell-button');
const clickPower = document.getElementById('click-power');
const buyClickPower = document.getElementById('buy-click-power');

/* ==================================== */
/* Global Variables */
/* ==================================== */
bitcoinsTotal.innerHTML = "0.00000000 BTC";
moneyTotal.innerHTML = "R$ 0.00";

let satoshis = 0;
let real = 0;
let clickPowerValue = 1;
let clickPowerPrice = 5;

clickPower.textContent = 'Click Power = ' + clickPowerValue;
buyClickPower.textContent = 'Buy Click Power = R$ ' + clickPowerPrice;

/* ==================================== */
/* Render BTC and Real */
/* ==================================== */
function renderBTC () {
    const btcNumber = satoshis / 100_000_000;
    const btcText = btcNumber.toFixed(8);
    bitcoinsTotal.textContent = `${btcText} BTC`;
};

function renderReal () {
    const realNumber = real;
    const realText = realNumber.toFixed(2);
    moneyTotal.textContent = `R$ ${realText}`
};

function renderPowerPrice () {
    const powerPriceNumber = clickPowerPrice;
    const powerPriceText = powerPriceNumber.toFixed(2);
    buyClickPower.textContent = `Buy Click Power = R$ ${powerPriceText}`
}

function renderPowerText () {
    const powerNumber = clickPowerValue;
    const powerText = powerNumber.toFixed(2);
    clickPower.textContent = `Click Power = ${powerText}`;  
}

/* ==================================== */
/* Manual CLicker */
/* ==================================== */
function mineBTC() {
    satoshis += 1 * clickPowerValue;
    renderBTC();
};

btnMiner.addEventListener('click', mineBTC);

/* ==================================== */
/* Sell Bitcoins */
/* ==================================== */
function sellBTC() {
    real = satoshis / 3 + real;
    satoshis = 0;
    btcNumber = 0;
    renderBTC();
    renderReal();
}

btnSell.addEventListener('click', sellBTC);

/* ==================================== */
/* CLicker Upgrade */
/* ==================================== */
function upgradeClick(){
    if (real >= clickPowerPrice) {
        real -= clickPowerPrice;
        clickPowerPrice = clickPowerPrice * 1.5;
        clickPowerValue = clickPowerValue * 1.1;
        renderReal();
        renderPowerPrice();
        renderPowerText();
    }
};

buyClickPower.addEventListener('click', upgradeClick);

/* ==================================== */
/* AutoClickers */
/* ==================================== */
