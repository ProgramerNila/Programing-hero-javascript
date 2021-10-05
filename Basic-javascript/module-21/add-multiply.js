/* 
chairWood=3cft;
tableWood= 10cft;
bedWood=50cft;

*/

function woodCalculator(bed, chair, table) {
    const chairWood = 3;
    const bedWood = 50;
    const tableWood = 10;
    // Quatity and wood
    const chairQuantity = chair * chairWood;
    const bedQuantity = bed * bedWood;
    const tableQuantity = table * tableWood;
    // total wood
    const totalWood = chairQuantity + bedQuantity + tableQuantity;
    return totalWood;
}
const furniture = woodCalculator(1, 1, 1);
console.log(furniture);






