const buttonYear = document.getElementById("tumbler_year");
const buttonMonth = document.getElementById("tumbler_month");

const price1 = document.getElementById("price1");
const price2 = document.getElementById("price2");
const price3 = document.getElementById("price3");

const changeValue1 = price1.childNodes[0];
const changeValue2 = price2.childNodes[0];
const changeValue3 = price3.childNodes[0];

const priceYear = ['$12', '$36', '$56'];
const priceMonth = ['$19', '$54', '$89'];

buttonYear.addEventListener('click', () => {
   changeValue1.data = priceYear[0];
   changeValue2.data = priceYear[1];
   changeValue3.data = priceYear[2];
});

buttonMonth.addEventListener('click', () => {
   changeValue1.data = priceMonth[0];
   changeValue2.data = priceMonth[1];
   changeValue3.data = priceMonth[2];
});