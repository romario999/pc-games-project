function toggleCartStatus(){
    
    const cartWrapper = document.querySelector('.modal-cart-box');
    const cartEmpty = document.querySelector('.cart-text');
    const cartPrice = document.querySelector('.price-cart');
    const cartBtn = document.querySelector('.btn-cart');
    const cartDiv = document.querySelector('.cart-div');

   if(cartWrapper.children.length > 4){
       cartEmpty.style.cssText = 'display: none';
       cartPrice.style.cssText = 'display: block';
       cartBtn.style.cssText = 'display: block';
    } else{
        cartEmpty.style.cssText = 'display: block';
        cartPrice.style.cssText = 'display: none';
        cartBtn.style.cssText = 'display: none';
    }


}