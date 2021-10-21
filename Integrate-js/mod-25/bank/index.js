function getvalue(id) {
    const inputid = document.getElementById(id);
    const inputText = inputid.value;
    const inputNum = parseFloat(inputText);
    inputid.value=''
    return inputNum;
}
function setAmout(id,pre) {
    const depositeTotal = document.getElementById(id);
    const depositeText = depositeTotal.innerText;
    const depositenum = parseFloat(depositeText);
    const tottal= depositenum+pre
    depositeTotal.innerText = tottal;
    return tottal;
}
function getCurrentBlnce() {
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    const totalBalancenum = parseFloat(totalBalanceText);
    return totalBalancenum
}
function updateBalance(update,isAdd) {
    const totalBalance = document.getElementById('balance-total');
    // const totalBalanceText = totalBalance.innerText;
    const totalBalancenum = getCurrentBlnce();
   if (isAdd==true) {
       totalBalance.innerText = totalBalancenum + update;
   } else {
    totalBalance.innerText = totalBalancenum - update;
   }
}
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositeValue = getvalue('deposit-input');
    if (depositeValue>0) {
         setAmout('deposit-total', depositeValue)
    updateBalance(depositeValue, true);
    }
   
});
document.getElementById('withdraw-button').addEventListener('click', function () {
    const depositeValue = getvalue('withdraw-input');
    const currentBlance = getCurrentBlnce();
    if (depositeValue>0&&currentBlance>depositeValue) {
          setAmout('withdraw-total', depositeValue)
    updateBalance(depositeValue, false); 
    }
 
});