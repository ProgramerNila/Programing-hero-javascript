/* 21-6 (optional)Write foo, bar, foobar if divisible by 3 or 5 or both */

for (let i = 1; i <= 50; i++){
   if (i%3==0 && i%5==0) {
       console.log('foobar');
   } else if(i%3==0) {
       console.log('foo');

   } else if(i%5==0) {
       console.log('bar');
   } else {
       console.log(i);
   }
}

/* function divisible(num) {
  for (let i = 0; i < num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      return "foobar";
    } else if (i % 3 == 0) {
      return "foo";
    } else if (i % 5 == 0) {
      return "bar";
    } else {
      return i;
    }
  }
}
console.log(divisible(3)); */
