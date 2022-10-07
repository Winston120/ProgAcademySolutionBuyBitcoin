let BitcoinPrice = document.getElementById("BitcoinPrice")
let USD = document.getElementById("USD")
let result = document.querySelector(".result");
let res;

USD.oninput = function () {
    if (USD.value < 0 || BitcoinPrice.value < 0)
    {
        result.textContent = `Please, enter a valid value `;
    }
    else {
        res = USD.value / BitcoinPrice.value;
        result.textContent = `You can buy ${res.toFixed(7)} BTC`;
    }
};