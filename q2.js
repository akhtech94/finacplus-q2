const input = 58;
const coins = [50, 20, 10, 5, 2, 1];
let solved = false;

infiniteloop:
while (true) {
  let result = [];
  let sum = 0;
  for (let coin of coins) {
    if (coin === input) {
      result = coin;
      console.log(result);
      solved = true;
      break infiniteloop;
    } else if (coin > input) {
      coins.splice(0, 1);
      continue infiniteloop;
    } else {
      if ((sum + coin) === input) {
        result.push(coin);
        console.log(result);
        solved = true;
        break infiniteloop;
      }
      if ((sum + coin) < input) {
        result.push(coin);
        sum += coin;
        continue
      }
    }
  }
  break;
}

if (!solved) console.log('Sorry, there is no possible combination to get this amount from the available coins');
