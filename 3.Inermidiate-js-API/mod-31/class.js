class SupportTeam{
    name;
    designation;
    country;
    constructor(n,d,c) {
        this.country = c;
        this.designation = d;
        this.name = n;
    }
    startSession() {
        console.log('satar open');
    }
}
const sabik = new SupportTeam('sakib', 'web dev', 'singapur');
const sabbir = new SupportTeam('sabbir', 'call center', 'bd');
sabbir.startSession()
console.log(sabbir);
console.log(sabik);

const [a, b] = [1,2,3,4,45,5]; console.log(a+b);


const { x, y, z } = { x: 1, y1: 2, z: 3 };
console.log(y);
const nums = [1,2,3,4,5]; let output = nums.filter(n => n%2); console.log(output);



// console.log(min( [1,3,2 ])) ? function min(nums) {  return Math.min(nums) }