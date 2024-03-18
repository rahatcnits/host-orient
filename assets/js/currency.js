// Fixed exchange rate
const exchangeRate = 100; // 1 USD = 100 BDT

function changeCurrency() {
  const selectedCurrency = document.getElementById("currencyToggle").value;
  console.log(selectedCurrency);
  const products = document.querySelectorAll(".product");

  products.forEach((product) => {
    const priceInUSD = parseFloat(product.getAttribute("data-price-usd"));
    const priceInBDT = priceInUSD * exchangeRate; // Convert USD to BDT using the fixed rate

    const convertedPrice = selectedCurrency === "BDT" ? priceInBDT : priceInUSD;
    const displayPrice = convertedPrice.toFixed(2); // Optional: format to 2 decimal places

    product.querySelector(".price").innerText = `${displayPrice}`;
  });
}

// Initial conversion to reflect the default selected currency on page load
document.addEventListener("DOMContentLoaded", changeCurrency);
