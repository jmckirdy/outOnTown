/* 
Create a program that assigns user an account balance, then as 
user spends money, say on 4-6 things, subtract that 
amount and show new total. If user is out of funds, message that 
to user. Use functions, display info neatly
*/

// variables
let accountBalance = 40;
let movie = 14.75; 
let popcorn = 11.25;
let pizza = 13;
let beer = 5.45;
let amount = [movie, popcorn, pizza, beer];

// check account balance function
function checkBalance(amount) {
  if (accountBalance - amount >= 0) {
    return true;
  } else {
    console.log('INSUFFICIENT FUNDS')
    return false;
  }
}

// movie ticket
function movieTix() {
  if ( checkBalance(movie) ) {
    accountBalance = accountBalance - movie;
    console.log('Enjoy your movie.');
  }
  console.log('\tBalance:', accountBalance.toFixed(2));
}

// buy popcorn
function getPopcorn() {
  if ( checkBalance(popcorn) ) {
    accountBalance = accountBalance - popcorn;
    console.log('Enjoy your popcorn.');
  }
  console.log('\tBalance:', accountBalance.toFixed(2));
}

// order pizza
function eatPizza() {
  if ( checkBalance(pizza) ) {
    accountBalance = accountBalance - pizza;
    console.log('Enjoy your pizza.');
  }
  console.log('\tBalance:', accountBalance.toFixed(2));
}

// drink beer
function drinkBeer() {
  if ( checkBalance(beer) ) {
    accountBalance = accountBalance - beer;
    console.log('Enjoy your beer.');
  }
  console.log('\tBalance:', accountBalance.toFixed(2));
}

// instead of calling each func, put them in a list and loop over
let townList = [drinkBeer, movieTix, getPopcorn, eatPizza, 
  drinkBeer, drinkBeer]

function townRun() {
    for(i=0, num=townList.length; i<num; i++) {
        townList[i]();
    }
}

townRun(townList);

// Testing a Git update, that's all.

// Testing Git cmdline