let BitcoinPrice = document.getElementById("BitcoinPrice")
let USD = document.getElementById("USD")
let result = document.querySelector(".result");
let res;

USD.oninput = function () {
    res = USD.value / BitcoinPrice.value;
    result.textContent = `You can buy ${res.toFixed(7)} BTC`;
};      