class A {

}

const a = {
  a: 1,
  b: 2
}

async function X(a, b) {
  console.log(a, b)
}

const y = [1, 2]

y.includes(2)

// const b = {...a}
console.log(new A());

import(/* webpad */ './a');


function sleep(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, n)
  })
}