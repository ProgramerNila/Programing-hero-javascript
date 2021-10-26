const message = "hello how are you";
function rrev(text) {
  let leter = "";
  for (const iterator of text) {
    leter = iterator + leter;
  }
  return leter;
}
console.log(rrev(message));
