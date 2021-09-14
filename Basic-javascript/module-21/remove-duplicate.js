const numbers = [55, 40, 80, 70, 55, 56, 55, 40, 80, 100, 80, 70, 35, 55];
function removeDuplicate(num) {
    let unique=[]
    for (const number of num) {
        if (unique.indexOf(number)==-1) {
            unique.push(number)
        }
    }
    return unique
}
console.log(removeDuplicate(numbers));