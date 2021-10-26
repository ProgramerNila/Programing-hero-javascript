/* 
10 mile= 10ta animal/ per mile 10ta ;
10-20= 50 ta animal / per mile e 50;
20 er besi = 100 

*/




function animalsCount(miles) {
    let tenMiles = 10;
    let tweentyMiles = 50;
    let restMiles = 100;
    if (miles<=10) {
        let first10MilesAnimal = miles * tenMiles;
        return first10MilesAnimal;

    } else if (miles<=20) {
        const firstMilesAnimals = 10 * tenMiles;
        const secoundTenMiles = miles - 10;
        const restMilse = secoundTenMiles * tweentyMiles;
        const twentyMilesAnimels = firstMilesAnimals + restMilse
        return twentyMilesAnimels;

    } else {
        const firstMilesAnimals = 10 * tenMiles;
        const secoundTenMiles = 10 * tweentyMiles;
        const restOfMiles = miles - 20;
        const restAnimals = restOfMiles * restMiles;
        const restAnimalesof = firstMilesAnimals + secoundTenMiles + restAnimals;
        return restAnimalesof
    }
}
console.log(animalsCount(22));





















