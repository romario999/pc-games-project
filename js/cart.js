const cartWrapper = document.querySelector('.modal-cart-box');
window.addEventListener('click', function(event){
    if(event.target.hasAttribute('data-cart')){
        const card = event.target.closest('.service-card');

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.ctg-img').getAttribute('src'),
            title: card.querySelector('.ctg-text').innerText,
            price: card.querySelector('.ctg-price').innerText,
            counter: card.querySelector('[data-counter]').innerText
        };;
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        if(itemInCart){
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = counterElement.innerText + productInfo.counter;
        }

        else{
            const cartItemHTML = `<div class="cart-item" data-id=${productInfo.id}>
     <img src="${productInfo.imgSrc}" alt="" class="cart-img">
     <p class="cart-title">${productInfo.title}</p> 
     <div class="items cart counter-wrapper">
         <div class="items__control" data-action="minus">-</div>
         <div class="items__current" data-counter>${productInfo.counter}</div>
         <div class="items__control" data-action="plus">+</div>
     </div>
     
     <div class="cart-price">${productInfo.price}</div> <br>

</div>`;
console.log(cartItemHTML);

        cartWrapper.insertAdjacentHTML('afterbegin', cartItemHTML);
        }
        card.querySelector('[data-counter]').innerText = '1';
        toggleCartStatus();
        calcCartPrice();
    }

});