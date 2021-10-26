/* ------------------------------------ updating the Product Price ------------------------------------- */

function updateProductPrice(material, price) {
    document.getElementById(material + '-cost').innerText = price;
    updateTotalCost();
  }
  
  /* ---------------------------------- update the total Price ---------------------------------- */
  
  function updateTotalCost() {
    const price = document.getElementById('best-price').innerText;
    const bestPrice = parseInt(price);
    const extraMemoryCost = document.getElementById('memory-cost').innerText;
    const memoryCost = parseInt(extraMemoryCost);
    const extraStorageCost = document.getElementById('storage-cost').innerText;
    const storageCost = parseInt(extraStorageCost);
    const extraDeliveryCost = document.getElementById('delivery-cost').innerText;
    const deliveryCost = parseInt(extraDeliveryCost);
    const totalCost = bestPrice + memoryCost + storageCost + deliveryCost;
    document.getElementById('total-cost').innerText = totalCost;
    document.getElementById('total-price').innerText = totalCost;
  }
  
  /*  ----------------------------------For Applying Promo Code---------------------------------- */
  
  function promoCode() {
    const promoInput = document.getElementById('promo-input').value;
    const totalCost = document.getElementById('total-cost').innerText;
    const totalAmount = parseInt(totalCost);
    let totalPrice = 0;
    if (promoInput == 'stevekaku') {
      totalPrice = totalAmount - totalAmount * 0.2;
      document.getElementById('promo-input').value = '';
    } else {
      totalPrice = totalAmount;
    }
    document.getElementById('total-price').innerText = totalPrice;
    
  }
  
  /* ----------------------------------event Listener for extra memory cost----------------------------------- */
  
  // memory part is working with onclick, check the html part.
  
  /* ----------------------------------event Listener for extra storage cost----------------------------------- */
  
  document.getElementById('storage-256gb').addEventListener('click', function () {
    updateProductPrice('storage', 0);
  });
  
  document.getElementById('storage-512gb').addEventListener('click', function () {
    updateProductPrice('storage', 100);
  });
  
  document.getElementById('storage-1tb').addEventListener('click', function () {
    updateProductPrice('storage', 180);
  });
  
  /* ----------------------------------event Listener for extra delivery charge ----------------------------------- */
  
  document.getElementById('delivery-free').addEventListener('click', function () {
    updateProductPrice('delivery', 0);
  });
  
  document.getElementById('delivery-paid').addEventListener('click', function () {
    updateProductPrice('delivery', 20);
  });
  
  /* ----------------------------------event Listener for promo code----------------------------------- */
  
  document.getElementById('promo-btn').addEventListener('click', function () {
    promoCode();
    
  });