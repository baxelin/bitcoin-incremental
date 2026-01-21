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
let ClickPowerPrice = 5;


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
    const powerPriceNumber = ClickPowerPrice;
    const powerPriceText = powerPriceNumber.toFixed(2);
    buyClickPower.textContent = `Buy Click Power = R$ ${powerPriceText}`
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
    if (real >= ClickPowerPrice) {
        real -= ClickPowerPrice;
        renderReal();
        renderPowerPrice();
    }
};

buyClickPower.addEventListener('click', upgradeClick);

/* ==================================== */
/* AutoClickers */
/* ==================================== */
