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
};

let productList = [

    {
        id:1,
        title: 'Пиво',
        price: '675',
        description: 'Aboba',
        image: 'images/1 tapochek.jpg'
    },
    {
        id:2,
        title: 'Рыба',
        price: '2',
        description: 'Aboba',
        image: 'images/2 tapochek.jpg'
    },
    {
        id:3,
        title: 'Чивапчичи',
        price: '2500',
        description: 'Aboba',
        image: 'images/3 tapochek.jpg'
    },
    {
        id:4,
        title: 'Чивапчичи',
        price: '2500',
        description: 'Aboba',
        image: 'images/3 tapochek.jpg'
    },
    {
        id:5,
        title: 'Чивапчичи',
        price: '2500',
        description: 'Aboba',
        image: 'images/3 tapochek.jpg'
    },
    {
        id:6,
        title: 'Чивапчичи',
        price: '2500',
        description: 'Aboba',
        image: 'images/3 tapochek.jpg'
    },
]

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
let cardes = document.querySelectorAll('.product_card_addcart');
cardes.forEach(function(card){
    card.addEventListener('click', function(){
        console.log(card.parentNode.parentNode.parentNode.id)


    })


















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


});