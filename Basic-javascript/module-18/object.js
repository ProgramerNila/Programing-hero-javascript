// object declear
let bestFrind={
    name: 'shasha',
    face: 'fair',
    height: '5.5',
    class: 10,
    phone: 123405678,
    ete:'etc',

}
console.log(bestFrind);

/* 18-6 multiple ways to get and set object property*/
// specific value read kora
console.log(bestFrind.class);
// specific value read kora with variable
var name=bestFrind.name
console.log(name);

// change or set value in property driect method

bestFrind.name = 'rina'
console.log(bestFrind.name);

//different ways to change or set value in property
bestFrind['ete'] = 'another';
console.log(bestFrind);


//another different ways to change or set value in property with variabe
var friengName = 'name';
bestFrind[friengName] = 'meherima';
console.log(bestFrind.name);






