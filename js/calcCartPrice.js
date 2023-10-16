function calcCartPrice(){
    
    const cartItems = document.querySelectorAll('.cart-item');
    let totalPrice = 0;
    let priceTotalEl = document.querySelector('.price-cart');
    let btnCart = document.getElementById("open-cart");

   /* cartItems.forEach(function (item){
        
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.cart-price');


        let currentPrice = parseInt(priceEl.innerText) * parseInt(amountEl.innerText);

        totalPrice += currentPrice;
        console.log(totalPrice);
    }); 

    */

    for(let i = 0; i < cartItems.length; i++){
        const amountEl = cartItems[i].querySelector('[data-counter]').innerHTML;
        const priceEl = cartItems[i].querySelector('.cart-price').innerHTML;

        let currentPrice = parseInt(priceEl) * parseInt(amountEl);

        totalPrice += currentPrice;
    }
    priceTotalEl.innerText = "Всього: " + totalPrice + " грн.";
}


