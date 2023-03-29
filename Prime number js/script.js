
//1.Write a logic to reverse string of yourname
//John Doe
//eoD nhoJ




let myname = "John Doe";

let reversedName = myname.split("").reverse().join("");

console.log(reversedName);


//2.Write a logic to print all prime number from 2 to 50


function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 2; i <= 50; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}



