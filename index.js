const featuredProducts = [
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
    {id: 1, name: 'Furniture 1', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-1.jpg"       , tags: "all, sofas, singleseater, seating"         },
    {id: 2, name: 'Furniture 2', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-2.jpg"       , tags: "all, sofas, singleseater, seating"         },
    {id: 4, name: 'Furniture 4', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-4.jpg"       , tags: "all, table, wood"         },
    {id: 5, name: 'Furniture 5', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-5.png"       , tags: "all, sofas, doubleseater"         },
    {id: 10, name: 'Furniture 10', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-10.png"    , tags: "all, chair, seating, singleseater"         },
    {id: 13, name: 'Furniture 13', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-13.png"    , tags: "all, sofas, seating, doubleseater"         },
    {id: 14, name: 'Furniture 14', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-14.png"    , tags: "all, sofas, doubleseater, seating"         },
    {id: 15, name: 'Furniture 15', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-15.png"    , tags: "all, sofas, doubleseater, seating"         },
    {id: 16, name: 'Furniture 16', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-16.jpg"    , tags: "all, stool, seating, singleseater"         },
    {id: 12, name: 'Furniture 12', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-12.jpg"    , tags: "all, couch, seating, singleseater"         },
    {id: 11, name: 'Furniture 11', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-11.jpg"    , tags: "all, self, wood"         },
    {id: 9, name: 'Furniture 9', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-9.jpg"       , tags: "all, tub, bathroom, bath"         },
    {id: 8, name: 'Furniture 8', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-8.jpg"       , tags: "all, lighting"         },
    {id: 7, name: 'Furniture 7', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-7.jpg"       , tags: "all, lighting"         },
    {id: 3, name: 'Furniture 3', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-3.jpg"       , tags: "all, bed, bedroom, bedding"         },
    {id: 6, name: 'Furniture 6', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-6.jpg"       , tags: "all, table, round, wood"         },
    {id: 17, name: 'Furniture 17', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-17.jpg"    , tags: "all, table, wood, legs"         },
    {id: 18, name: 'Furniture 18', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/couch.jpg"             , tags: "all, seating, doubleseater, sofas, couch" },
    {id: 19, name: 'Furniture 19', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/forma.jpg"             , tags: "all, aesthetic, holder" },
    {id: 20, name: 'Furniture 20', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/holder.jpg"            , tags: "all, holder, lighting, aesthetic" },
    {id: 21, name: 'Furniture 21', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/light 4.jpg"           , tags: "all, seating, wood"     },
    {id: 22, name: 'Furniture 22', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/light1.jpg"            , tags: "all, lighting" },
    {id: 23, name: 'Furniture 23', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/light2.jpg"            , tags: "all, lighting, aesthetic" },
    {id: 24, name: 'Furniture 24', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/light3.jpg"            , tags: "all, lighting" },
    {id: 25, name: 'Furniture 25', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/light12.jpg"           , tags: "all, lighting"     },
    {id: 26, name: 'Furniture 26', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/mirror.jpg"            , tags: "all, decor, lighting, mirror, aesthetic" },
    {id: 27, name: 'Furniture 27', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/pot.jpg"               , tags: "all, holder, decor, aesthetic" },
    {id: 28, name: 'Furniture 28', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/pot2.jpg"              , tags: "all, holder, decor, aesthetic" },
    {id: 29, name: 'Furniture 29', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/stool.jpg"             , tags: "all, seating, stool, singleseater" },
    {id: 30, name: 'Furniture 30', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/stool2.jpg"            , tags: "all, seating, stool, singleseater, aesthetic" },
    {id: 31, name: 'Furniture 31', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/stool3.jpg"            , tags: "all, seating, stool, singleseater" },
    {id: 32, name: 'Furniture 32', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/stool4.jpg"            , tags: "all, seating, stool, singleseater" },
    {id: 33, name: 'Furniture 33', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/table.jpg"             , tags: "all, table" },
    {id: 34, name: 'Furniture 34', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/table2.jpg"            , tags: "all, table" },
]















function landingSlider(){

    var elem = document.getElementById("landing-slider");

    for(i=1; i<featuredProducts.length; i++){
        if(i == 2){
            continue;
        }
        
        var items = document.createElement('div');
        items.className = 'landing-sliderItems';

        items.innerHTML =   `   
                                <img src="${featuredProducts[i].image}" alt="${featuredProducts[i].name}" style="width:100%">
                                
                                <br>
                                <h3>${featuredProducts[i].name}</h3>
                                
                                <p>${featuredProducts[i].description}</p>
                            `
        

            elem.appendChild(items);
        }

        slickSliderLandingSlider()

}






function displayFeaturedProducts(){

    var elem = document.getElementById("cards-section");

    for(i=4; i<8; i++){

        var card = document.createElement('div');
        card.className = "card"
        var cardesc = document.createElement('div')
        card.className = "cardDescription"

        card.innerHTML =  `
                            <img class='featuredProduct-image' onclick="window.location.href = 'productDisplay.html?id=${allProducts[i].id}' " src="${allProducts[i].image}" alt="${allProducts[i].name}" style="width:100%">
                            <div class="add-to-cart-overlay">
                                <ul>
                                    <li><img   class="search-icon" src="images/icons/search.png" alt="" srcset=""></li>
                                    <li  onclick="addToCart(${allProducts[i].id})" ><img   class="cart-icon" src="images/icons/cart.png" alt="" srcset="" ></li>
                                    <li><img   class="heart-icon" src="images/icons/heart-1.png" alt="" srcset=""></li>
                                </ul>
                            </div>
                            
                        `

        cardesc.innerHTML = `

                                <h5>${allProducts[i].name}</h5>
                                <p class="price">${allProducts[i].price}</p>

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
                            <img src="${categories[i].image}" onclick="window.location.href = 'shop.html?category=${categories[i].name}' " alt="${categories[i].name}">
                            <br>
                            <h5 class="category-name"  onclick="window.location.href = 'shop.html?category=${categories[i].name}' ">${categories[i].name}</h5>
                        `   

        elem.appendChild(card);
    }

    slickSliderCategories()
}



function miniShop(){


    var elem = document.querySelector("#products-cards-section");
    
    
    for(i=8; i<16; i++){
        var card = document.createElement('div');
        card.className = "product-card"
        var cardesc = document.createElement('div')
        card.className = "cardDescription"
        cardesc.innerHTML = `

                                <h5>${allProducts[i].name}</h5>
                                <p class="price">${allProducts[i].price}</p>

                            `

        card.innerHTML =  `
                            
                            <img class='minishop-image'  onclick="window.location.href = 'productDisplay.html?id=${allProducts[i].id}' " src="${allProducts[i].image}" alt="${allProducts[i].name}" style="width:100%">
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

    for(i=0; i<4; i++){

        var a = Math.floor((Math.random() * allProducts.length-1) + 1);


        var card = document.createElement('div');
        card.className = "special-right-cardDescription"
        
        var cardesc = document.createElement('div')
        cardesc.className = "special-right-cardDescription"

        card.innerHTML =  `

                    <img class='special-image' onclick="window.location.href = 'productDisplay.html?id=${allProducts[a].id}' " src="${allProducts[a].image}" alt="casting-couch">
                    <div class="add-to-cart-overlay">
                                <ul>
                                    <li><img   class="search-icon" src="images/icons/search.png" alt="" srcset=""></li>
                                    <li><img   class="cart-icon" src="images/icons/cart.png" alt="" srcset=""></li>
                                    <li><img   class="heart-icon" src="images/icons/heart-1.png" alt="" srcset=""></li>
                                </ul>
                            </div>`

        cardesc.innerHTML = `
                                <div class="special-image-desc">
                                        <h5>${allProducts[a].name}</h5>
                                        <p>${allProducts[a].price}</p>
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
        speed: 500,
        dots: false,
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
displayFeaturedProducts()
topCategories()
miniShop()
furnitureSets()
specialProducts()
shopByPreference()