// 2. n!=n(n-1) { n এর  FACTORIAL}

function factorialRecirsion(n) {
    if (n==1) {
        return 1
    }
   let get= n * factorialRecirsion(n - 1);
    return get;
}

let getFact = factorialRecirsion(7)
console.log(getFact);



















