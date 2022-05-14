function createProductCard(element,parent){
    let productCard = document.createElement('div');
    productCard.classList.add('product_card');
    productCard.id = element.id;
    let productImage = document.createElement('div');
    productImage.classList.add('product_image');
    productImage.style.background = "url('"+ element.image + "') center no-repeat";
    productImage.style.backgroundSize = "cover";
    let productCardInfo = document.createElement('div');
    productCardInfo.classList.add('product_card-info');

    let productCardLike = document.createElement('div');
    productCardLike.classList.add('product_card_like');
    let heartIcon = document.createElement('div');
    heartIcon.classList.add('heart_icon');
    productCardLike.appendChild(heartIcon);
    let productCardAddcart = document.createElement('div');
    productCardAddcart.classList.add('product_card_addcart');
    productCardAddcart.id = element.card;
    productCardInfo.appendChild(productCardLike);
    productCardInfo.appendChild(productCardAddcart);
    productImage.appendChild(productCardInfo);


    let productCardText = document.createElement('div');
    productCardText.classList.add('product_card-text');
    let productCardTitle = document.createElement('div');
    productCardTitle.classList.add('product_card_title');
    productCardTitle.innerHTML = element.title
    let productCardPrice = document.createElement('div');
    productCardPrice.classList.add('product_card_price');
    productCardPrice.innerHTML = "Цена: " + element.price + ' Рублики'

    productCardText.appendChild(productCardTitle);
    productCardText.appendChild(productCardPrice);




    productCard.appendChild(productImage);
    productCard.appendChild(productCardText);
    parent.appendChild(productCard);
}
let productList = [

    {
        id:1,
        title: 'Пиво',
        price: '10',
        description: 'Aboba',
        image: 'images/svin.jpg',
        card:' ',
    },
    {
        id:2,
        title: 'Рыба',
        price: '2000',
        description: 'Aboba',
        image: 'images/orien.jpg',
        card:' ',
    },
    {
        id:3,
        title: 'Пельмени',
        price: '500',
        description: 'Aboba',
        image: 'images/shlepa.jpg',
        card:' ',
    },
    {
        id:4,
        title: 'Чивапчичи',
        price: '1000',
        description: 'Aboba',
        image: 'images/britan.jpg',
        card:' ',
    },
    {
        id:5,
        title: 'Кумыс',
        price: '25000',
        description: 'Aboba',
        image: 'images/sims.jpg',
        card:' ',
    },
    {
        id:6,
        title: 'Вата',
        price: '2',
        description: 'Aboba',
        image: 'images/angora.jpg',
        card:' ',
    },
]
let productCart = [

];


productList.forEach(function(element){
    let parent = document.querySelector('.content_products')
    createProductCard(element, parent)
});

let likes = document.querySelectorAll('.product_card_like');
likes.forEach(function(like){
    like.addEventListener('click', function(){

        if (like.classList.contains('liked')) {
            like.classList.remove('liked');
        }else{
            like.classList.add('liked');
        }

    })
});
let carzina = [];
let aga = document.querySelector('.content_cart_container');

let cartes = document.querySelectorAll('.product_card_addcart');
cartes.forEach(function(cart) {
    cart.addEventListener('click', function () {
        let id = Number(cart.parentNode.parentNode.parentNode.id);
        let repeatProd = false
        carzina.forEach(function (el, i) {
            if (el.id === productList[id-1].id) {
                el.count++;
                repeatProd = true;
            }
        });
        if (!repeatProd) {
            let currProd = productList[id-1];
            currProd.count = 1
            carzina.push(currProd);
        }

        // productCart.push(productList[id-1])
        // генерация блока
        aga.innerHTML = '';
        carzina.forEach(function (el) {
            let kvadrat = document.createElement('div');
            let titlePrice = document.createElement('div');
            let cart = document.createElement('div');
            let cartt = document.createElement('div');
            let forText = document.createElement('div');
            let priceTitle = document.createElement('div');
            let crest = document.createElement('div');
            let count = document.createElement('span');
            let nomer = document.createElement('input');
            kvadrat.classList.add('kvadrat');
            cart.classList.add('cart-card');
            cartt.classList.add('cart-card-container');
            titlePrice.classList.add('cart-card-text-title');
            forText.classList.add('cart-card-text');
            priceTitle.classList.add('cart-card-text-price');
            crest.classList.add('close-btn');
            count.classList.add('cart-card-count');
            nomer.classList.add('nomer');
            aga.appendChild(cart)
            cart.appendChild(cartt)
            cartt.appendChild(kvadrat)
            cartt.appendChild(titlePrice)
            cartt.appendChild(forText)
            forText.appendChild(titlePrice)
            forText.appendChild(priceTitle)
            cart.appendChild(crest)
            kvadrat.appendChild(count)
            count.appendChild(nomer)

            crest.innerHTML += '<b>X</b>';
            titlePrice.innerHTML += el.title;
            priceTitle.innerHTML += el.price + ' Рубликов';
            nomer.innerHTML += el.count;

        })
    })
});














let slide1 = document.querySelector('#shlep');
let slide2 = document.querySelector('#svin');
let slide3 = document.querySelector('#lgbt');
let sl1 = document.querySelector('#slide-1');
let sl2 = document.querySelector('#slide-2');
let sl3 = document.querySelector('#slide-3');
let currslide = 1;

let arrows = document.querySelectorAll('.arrow');

arrows.forEach(function (arrow){
    if (arrow.classList.contains('arrow-left')){

        arrow.addEventListener('click', function (){
            if (currslide === 1){
                currslide = 3;
                slide1.style.display='none';
                slide3.style.display='flex';
                sl2.classList.remove('active')
                sl1.classList.remove('active')
                sl3.classList.add('active')
            }else if (currslide === 2){
                currslide = 1;
                slide2.style.display='none';
                slide1.style.display='flex';
                sl2.classList.remove('active')
                sl1.classList.add('active')
                sl3.classList.remove('active')
            }else if (currslide ===3){
                currslide = 2;
                slide3.style.display='none';
                slide2.style.display='flex';
                sl2.classList.add('active')
                sl1.classList.remove('active')
                sl3.classList.remove('active')
            }
            console.log(currslide)
        })
    }else if (arrow.classList.contains('arrow-right')){

        arrow.addEventListener('click', function (){
            if (currslide === 1){
                currslide = 2;
                slide1.style.display='none';
                slide2.style.display='flex';
                sl2.classList.add('active')
                sl1.classList.remove('active')
                sl3.classList.remove('active')
            }else if (currslide === 2){
                currslide = 3;
                slide2.style.display='none';
                slide3.style.display='flex';
                sl2.classList.remove('active')
                sl1.classList.remove('active')
                sl3.classList.add('active')
            }else if (currslide ===3){
                currslide = 1
                slide3.style.display='none';
                slide1.style.display='flex';
                sl2.classList.remove('active')
                sl1.classList.add('active')
                sl3.classList.remove('active')
            }
            console.log(currslide)
        })
    }

});

sl1.addEventListener('click', function (){
    sl2.classList.remove('active')
    sl1.classList.add('active')
    sl3.classList.remove('active')
    currslide = 1;
    slide2.style.display='none';
    slide3.style.display='none';
    slide1.style.display='flex';
})
sl2.addEventListener('click', function (){
    sl2.classList.add('active')
    sl1.classList.remove('active')
    sl3.classList.remove('active')
    currslide = 2;
    slide3.style.display='none';
    slide1.style.display='none';
    slide2.style.display='flex';
})
sl3.addEventListener('click', function (){
    sl2.classList.remove('active')
    sl1.classList.remove('active')
    sl3.classList.add('active')
    currslide = 3;
    slide2.style.display='none';
    slide1.style.display='none';
    slide3.style.display='flex';
})










