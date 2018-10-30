

class A {

}

const a = {
  a: 1,
  b: 2
}

async function X(a, b) {
  console.log(a, b)
}

// const b = {...a}
console.log(new A());


function sleep(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, n)
  })
}