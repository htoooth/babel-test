class A {
  constructor(a) {
    this.a = a
  }

  add(b) {
    this.b = b;
  }
}

const a = {
  a: 1,
  b: 2
}

function * xyz () {
  
}

async function X(a, b) {
  console.log(a, b)
}

const y = [1, 2]

y.includes(2)

// const b = {...a}
console.log(new A());

function sleep(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, n)
  })
}