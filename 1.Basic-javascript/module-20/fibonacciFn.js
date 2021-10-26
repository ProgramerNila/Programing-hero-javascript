function fibonacciSeries(num) {

    if (typeof num!='number') {
        return 'please give a number'
    }if (num<2) {
        return 'give number 2-unlimited'
    }


    
    let fibo = [0, 1];
    for (let i = 2; i < num; i++) {
        fibo[i] = fibo[i - 1]+fibo[i-2];
        
    }
    return fibo;
}

let fiboSeries = fibonacciSeries('-10');
console.log(fiboSeries);

