let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = function (bill) {
  return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
};

const average = function (arr) {
  let num_items = arr.length;
  let avg = 0;
  for (let i = 0; i < num_items; i++) {
    avg += arr[i];
  }
  return avg / num_items;
};

// console.log(average([2, 3, 4]));

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
console.log(`${bills}\n${tips}\n${totals}`);
console.log(average(totals));
