let buttonAddCart = document.getElementsByClassName("ctg-btn");
let btnCart = document.getElementById("open-cart");

/*let formModal = document.getElementById("form-cart")*/

for(let i = 0; i < buttonAddCart.length; i++){
    buttonAddCart[i].addEventListener("click", function(){
        document.getElementById("my-modal").classList.add("open");
    });
    
    document.getElementById("close-btn").addEventListener("click", function(){
        document.getElementById("my-modal").classList.remove("open");
    })
}

btnCart.addEventListener("click", function(){
    document.getElementById("modal-cart").classList.add("open");
});

document.getElementById("close-btn-cart").addEventListener("click", function(){
    document.getElementById("modal-cart").classList.remove("open");
});

document.getElementById("buy-btn").addEventListener("click", function(){
    document.getElementById("form-cart").classList.add("open");
    document.getElementById("modal-cart").classList.remove("open");
});

document.getElementById('form-close').addEventListener('click', function(){
    document.getElementById("form-cart").classList.remove("open");
}); 

document.getElementById('btn-modal-finished').addEventListener('click', function(){
    document.getElementById("modal-pay").classList.add("open");
    document.getElementById("form-cart").classList.remove("open");
});

document.getElementById('form-close-buy').addEventListener('click', function(){
    document.getElementById("modal-pay").classList.remove("open");
})

document.getElementById('btn-modal-pay-finished').addEventListener('click', function(){
    document.getElementById("modal-pay").classList.remove("open");
    document.getElementById("modal-finished").classList.add("open");
})

document.getElementById('form-close-finished').addEventListener('click', function(){
    document.getElementById("modal-finished").classList.remove("open");
    document.querySelector('.cart-item').remove();
    toggleCartStatus();
}); 

AOS.init();