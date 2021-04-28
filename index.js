const products = [
    {id: 1, name: 'Furniture 1', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$100', image: "images/Landing Section/chair.png"},
    {id: 2, name: 'Furniture 2', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$100', image: "images/Landing Section/sofa-1.png"},
    {id: 3, name: 'Furniture 3', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$100', image: "images/Landing Section/sofa-2.png"},
    {id: 4, name: 'Furniture 4', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$100', image: "images/Landing Section/sofa-3.png"},
];

const categories = [
    {id: 1, name: 'Sofas', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',  image: "images/Landing Section/sofa-3.png"},
    {id: 2, name: 'Lighting', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',  image: "images/categories/tablelamp.jpg"},
    {id: 4, name: 'Stool', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',  image: "images/categories/stool.jpg"},
    {id: 5, name: 'Office', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',  image: "images/categories/office.jpg"},
    {id: 6, name: 'Bathroom', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',  image: "images/categories/bath.jpg"},
    {id: 7, name: 'Aesthetic', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',  image: "images/categories/aesthetic.jpg"},
    {id: 3, name: 'Seating', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',  image: "images/categories/seating.jpg"},
];

const sets = [
    {id:1, name: 'Home Sweet Home', price: '$3452.33', image: 'images/sets/aesthetucc.jpg', description: 'Lorem ipsum amet consecetrur'},
    {id:2, name: 'Smart Bathroom', price: '$2172.61', image: 'images/sets/bathroom.jpg', description: 'Lorem ipsum amet consecetrur'},
    {id:3, name: 'Living Room', price: '$3452.33', image: 'images/sets/livingroom.jpg', description: 'Lorem ipsum amet consecetrur'},
    {id:6, name: 'Luxury Bedrooms', price: '$2172.61', image: 'images/sets/bedroom2.jpg', description: 'Lorem ipsum amet consecetrur'},
    {id:4, name: 'Living in the Room', price: '$2172.61', image: 'images/sets/living.jpg', description: 'Lorem ipsum amet consecetrur'},
    {id:5, name: 'Lounge Attraction', price: '$2172.61', image: 'images/sets/3360_SL CR.jpg', description: 'Lorem ipsum amet consecetrur'},
    {id:7, name: 'Holy Kitchen', price: '$2172.61', image: 'images/sets/holy-kitchen.png', description: 'Lorem ipsum amet consecetrur'},
    {id:8, name: 'Novel Life', price: '$2172.61', image: 'images/sets/novel-lofe.jpg', description: 'Lorem ipsum amet consecetrur'},
]


const allProducts = [
    {id: 1, name: 'Furniture 1', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-1.jpg"},
    {id: 2, name: 'Furniture 2', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-2.jpg"},
    {id: 3, name: 'Furniture 3', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-3.jpg"},
    {id: 4, name: 'Furniture 4', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-4.jpg"},
    {id: 5, name: 'Furniture 5', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-5.png"},
    {id: 6, name: 'Furniture 6', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-6.jpg"},
    {id: 7, name: 'Furniture 7', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-7.jpg"},
    {id: 8, name: 'Furniture 8', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-8.jpg"},
    {id: 9, name: 'Furniture 9', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-9.jpg"},
    {id: 10, name: 'Furniture 10', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-10.png"},
    {id: 11, name: 'Furniture 11', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-11.jpg"},
    {id: 12, name: 'Furniture 12', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-12.jpg"},
    {id: 13, name: 'Furniture 13', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-13.png"},
    {id: 14, name: 'Furniture 14', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-14.png"},
    {id: 15, name: 'Furniture 15', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-15.png"},
    {id: 16, name: 'Furniture 16', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-16.jpg"},
    {id: 17, name: 'Furniture 17', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-17.jpg"},
]


















function landingSlider(){

    var elem = document.getElementById("landing-slider");

    for(i=1; i<products.length; i++){
        if(i == 2){
            continue;
        }
        
        var items = document.createElement('div');
        items.className = 'landing-sliderItems';

        items.innerHTML =   `   
                                <img src="${products[i].image}" alt="${products[i].name}" style="width:100%">
                                
                                <br>
                                <h3>${products[i].name}</h3>
                                
                                <p>${products[i].description}</p>
                            `
        

            elem.appendChild(items);
        }

        slickSliderLandingSlider()

}






function featuredProducts(){

    var elem = document.getElementById("cards-section");

    for(i=0; i<products.length; i++){

        var card = document.createElement('div');
        card.className = "card"
        var cardesc = document.createElement('div')
        card.className = "cardDescription"

        card.innerHTML =  `
                            <img class='featuredProduct-image' src="${products[i].image}" alt="${products[i].name}" style="width:100%">
                            <div class="add-to-cart-overlay">
                                <ul>
                                    <li><img   class="search-icon" src="images/icons/search.png" alt="" srcset=""></li>
                                    <li><img   class="cart-icon" src="images/icons/cart.png" alt="" srcset=""></li>
                                    <li><img   class="heart-icon" src="images/icons/heart-1.png" alt="" srcset=""></li>
                                </ul>
                            </div>
                            
                        `

        cardesc.innerHTML = `

                                <h5>${products[i].name}</h5>
                                <p class="price">${products[i].price}</p>

                            `

        
        card.appendChild(cardesc)
        elem.appendChild(card);
    }

}

function topCategories(){

    var elem = document.getElementById("categoryCards");
    for(i=0; i<categories.length; i++){

        var card = document.createElement('div');
        card.className = "category-cardDescription"

        card.innerHTML =  `
                            <img src="${categories[i].image}" alt="${categories[i].name}">
                            <br>
                            <h5 class="category-name">${categories[i].name}</h5>
                        `   

        elem.appendChild(card);
    }

    slickSliderCategories()
}



function miniShop(){


    var elem = document.querySelector("#products-cards-section");
    

    for(i=0; i<8; i++){
        var card = document.createElement('div');
        card.className = "product-card"
        var cardesc = document.createElement('div')
        card.className = "cardDescription"
        cardesc.innerHTML = `

                                <h5>${allProducts[i].name}</h5>
                                <p class="price">${allProducts[i].price}</p>

                            `

        card.innerHTML =  `
                            
                            <img class='minishop-image' src="${allProducts[i].image}" alt="${allProducts[i].name}" style="width:100%">
                            <div class="add-to-cart-overlay">
                                <ul>
                                    <li><img   class="search-icon" src="images/icons/search.png" alt="" srcset=""></li>
                                    <li><img   class="cart-icon" src="images/icons/cart.png" alt="" srcset=""></li>
                                    <li><img   class="heart-icon" src="images/icons/heart-1.png" alt="" srcset=""></li>
                                </ul>
                            </div>
                            
                        `
        card.appendChild(cardesc)
        elem.appendChild(card);
    }
}

function furnitureSets(){

    var elem = document.getElementById("furnitureSetsCards");

    for(i=2; i<sets.length-2; i++){

        var card = document.createElement('div');
        card.className = "furnitureSets-cardDescription"
        

        card.innerHTML =  `
                            <img src="${sets[i].image}" alt="${sets[i].name}">
                            <br>
                            <h5 class="furnitureSets-name">${sets[i].name}</h5>
                            <p class="furnitureSets-click">Click to view the set.</p>
                        `   
 



        elem.appendChild(card);
    }

    slickSliderFurnitureSets()
}


function shopByPreference(){

    var elem = document.getElementById("preferences");

    for(i=0; i<4; i++){

        var card = document.createElement('div');
        card.className = "imageCover"

        var cardesc = document.createElement('div');
        cardesc.className = "imageOverlay"
        cardesc.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.100), rgba(0, 0, 0, 0.8)), url(${sets[i].image})`;
        console.log(sets[i].image)

        cardesc.innerHTML =  `
                            <p>${sets[i].description}</p>
                            <h3>${sets[i].name}</h3>
                            <h6 style='text-decoration: underline; cursor: pointer'>Explore More</h6>
                        `   
 
                


        card.appendChild(cardesc);
        elem.appendChild(card);
    }
}



function specialProducts(){

    var elem = document.getElementById("special-right");

    for(i=5; i<9; i++){

        // var a = Math.floor((Math.random() * allProducts.length-1) + 1);


        var card = document.createElement('div');
        card.className = "special-right-cardDescription"
        
        var cardesc = document.createElement('div')
        cardesc.className = "special-right-cardDescription"

        card.innerHTML =  `

                    <img class='special-image'src="${allProducts[i].image}" alt="casting-couch">
                    <div class="add-to-cart-overlay">
                                <ul>
                                    <li><img   class="search-icon" src="images/icons/search.png" alt="" srcset=""></li>
                                    <li><img   class="cart-icon" src="images/icons/cart.png" alt="" srcset=""></li>
                                    <li><img   class="heart-icon" src="images/icons/heart-1.png" alt="" srcset=""></li>
                                </ul>
                            </div>`

        cardesc.innerHTML = `
                                <div class="special-image-desc">
                                        <h5>${allProducts[i].name}</h5>
                                        <p>${allProducts[i].price}</p>
                                </div>
                                `

        card.appendChild(cardesc)
        elem.appendChild(card);

    }

}



function slickSliderLandingSlider(){

    $('#landing-slider').slick({
        arrows: true,
        infinite: true,
        speed: 1000,
        dota: true,
        centerMode: true,
        centerPadding: '0%',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
      });

}




function slickSliderCategories(){

    $('#categoryCards').slick({

        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        centerMode: false,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
}

function slickSliderFurnitureSets(){

    $('#furnitureSetsCards').slick({
        arrows: true,
        infinite: true,
        speed: 1000,
        centerMode: true,
        centerPadding: '0%',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        focusOnSelect: true
      });
}




landingSlider()
featuredProducts()
topCategories()
miniShop()
furnitureSets()
specialProducts()
shopByPreference()