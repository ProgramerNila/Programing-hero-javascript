
// fibo single element
function fiboElement(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fiboElement(n-1)+fiboElement(n-2)
}

const fibonaccinElement= fiboElement(6)
console.log(fibonaccinElement);
// fibonacci series with recurisive
function fiboSeries(n) {
    if (n == 0) {
        return [0];
    }
    if (n == 1) {
        return [0,1];
    }
    const fibo = fiboSeries(n - 1);
    fibo[n] = fibo[n - 1] + fibo[n - 2];
    return fibo;
}

const GetfiboSeries= fiboSeries(6)
console.log(GetfiboSeries);
































