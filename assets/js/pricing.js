const checkbox = document.getElementById("toggle_checkbox");
const priceMonth = document.querySelector(".monthly");
const priceAnnual = document.querySelector(".annually");

const planPrices = document.querySelectorAll(".plan_price b");
const planPeriods = document.querySelectorAll(".plan_price span");

const selectedCurrency = document.querySelector(".currencyToggle");
const selectedCurrencyPhn = document.querySelector(".currencyTogglePhn");
let dollarRate = 100;

function allData() {
  let getData = [];
  planPrices.forEach((planPrice) => {
    let dataValue = planPrice.getAttribute("data-price");
    getData.push(dataValue);
  });

  return getData;
}

function calcMonthToYearPrice() {
  let monthPrice = allData();
  let sumData = [];

  monthPrice.forEach((price) => {
    let numPrice = Number(price);
    let multiplyData = numPrice * 12;
    sumData.push(multiplyData);
  });

  return sumData;
}

function usdPrice() {
  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      priceMonth.classList.remove("active");
      priceAnnual.classList.add("active");

      let planYearPrices = calcMonthToYearPrice();
      for (let i = 0; i < planYearPrices.length; i++) {
        planPrices.forEach((planPrice) => {
          planPrice.textContent = `$${planYearPrices[i]}`;
        });
      }
      planPeriods.forEach((planPeriod) => {
        planPeriod.textContent = "/year*";
      });
    } else {
      priceAnnual.classList.remove("active");
      priceMonth.classList.add("active");

      let monthPrice = allData();
      for (let i = 0; i < monthPrice.length; i++) {
        planPrices.forEach((planPrice) => {
          planPrice.textContent = `$${monthPrice[i]}`;
        });
      }
      planPeriods.forEach((planPeriod) => {
        planPeriod.textContent = "/mo*";
      });
    }
  });
}

function bdtPrice() {
  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      priceMonth.classList.remove("active");
      priceAnnual.classList.add("active");

      let planYearPrices = calcMonthToYearPrice();
      for (let i = 0; i < planYearPrices.length; i++) {
        planPrices.forEach((planPrice) => {
          planPrice.textContent = `৳${planYearPrices[i] * dollarRate}`;
        });
      }
      planPeriods.forEach((planPeriod) => {
        planPeriod.textContent = "/year*";
      });
    } else {
      priceAnnual.classList.remove("active");
      priceMonth.classList.add("active");

      let monthPrice = allData();
      for (let i = 0; i < monthPrice.length; i++) {
        planPrices.forEach((planPrice) => {
          planPrice.textContent = `৳${monthPrice[i] * dollarRate}`;
        });
      }
      planPeriods.forEach((planPeriod) => {
        planPeriod.textContent = "/mo*";
      });
    }
  });
}

usdPrice();

selectedCurrency.addEventListener("change", () => {
  if (selectedCurrency.value === "USD") {
    usdPrice();
  } else {
    bdtPrice();
  }
});

selectedCurrencyPhn.addEventListener("change", () => {
  console.log(selectedCurrency.value);
  if (selectedCurrency.value === "USD") {
    usdPrice();
  } else {
    bdtPrice();
  }
});
