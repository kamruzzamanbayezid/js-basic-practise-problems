const products = [
      { id: 1, name: 'Samsung laptop', price: 150000 },
      { id: 2, name: 'walton Phone', price: 150000 },
      { id: 3, name: 'winmax Phone', price: 150000 },
      { id: 4, name: 'Lenovo laptop', price: 150000 },
      { id: 5, name: 'lenovo yoga laptop', price: 150000 },
      { id: 6, name: 'mac book air', price: 150000 },
      { id: 7, name: 'used laptop', price: 150000 },
      { id: 8, name: 'used phone', price: 150000 }
]

function findItem(products, search) {
      let matched = [];
      for (let product of products) {
            if (product.name.toLowerCase().includes(search.toLowerCase())) {
                  matched.push(product);
            }
      }
      return matched;
}

const result = findItem(products, 'laptop');
console.log(result);

function compare(a, b) {
      if (a == b) {
            return true;
      } else {
            return false;
      }
}
const results = compare(15, "15");
console.log(results);

const x = 5;
console.log(x)

function compare(a, b) {
      if (a.toString() === b) {
            return true;
      } else {
            return false;
      }
}
const result2 = compare(25, 25);
console.log(result2);

let a = 'hi';
let b = 'there';
console.log(a+b);
