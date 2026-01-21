const bitcoinsTotal = document.getElementById('bitcoins-total');
const minerarButton = document.getElementById('minerar-botao').addEventListener('click', increaseBitcoins);
const valorReal = document.getElementById('valor-real');
const venderBTC = document.getElementById("vender-btc").addEventListener('click', venderBitcoins);
const upgradeClick = document.getElementById('upgrade-click');
const clickPowerText = document.getElementById('click-power-text');

upgradeClick.addEventListener('click', upgradeIncremental);

let satoshis = 0;
let real = 0;
let btc = 0;
let upgradeManual = 5;
let clickPower = 1;

bitcoinsTotal.innerHTML = "0.00000000" + " BTC";
valorReal.innerHTML = "R$ " + real;

function increaseBitcoins() {
    satoshis += 1 * clickPower;
    btc = satoshis / 100000000;
    btc = btc.toFixed(8);
    bitcoinsTotal.innerHTML = btc + " BTC";
};

function venderBitcoins () {
    real = satoshis / 3 + real;
    valorReal.innerHTML = "R$ " + real.toFixed(2);
    satoshis = 0;
    btc = 0;
    bitcoinsTotal.innerHTML = "0.00000000" + " BTC";
};

function upgradeIncremental () {
    if (real >= upgradeManual) {
        real -= upgradeManual;
        valorReal.innerHTML = "R$ " + real.toFixed(2);
        clickPower = clickPower * 1.1;
        upgradeManual = upgradeManual * 1.1;
        upgradeManual = upgradeManual.toFixed(2)
        upgradeClick.innerHTML = "Upgrade Click! = R$ " + upgradeManual;
        clickPowerText.innerHTML = "Click Power = " + clickPower.toFixed(2);
    }
}