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
    // {id:1, name: 'King Bedroom', price: '$3452.33', image: 'images/sets/bedroom.jpg'},
    {id:3, name: 'Smart Bathroom', price: '$2172.61', image: 'images/sets/bathroom.jpg'},
    {id:4, name: 'Living in the Room', price: '$2172.61', image: 'images/sets/living.jpg'},
    {id:5, name: 'Lounge Attraction', price: '$2172.61', image: 'images/sets/3360_SL CR.jpg'},
    {id:5, name: 'Luxury Dreams', price: '$2172.61', image: 'images/sets/bedroom2.jpg'},
]


const allProducts = [
    {id: 1, name: 'Furniture 1', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-1.jpg"},
    {id: 2, name: 'Furniture 2', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-2.jpg"},
    {id: 3, name: 'Furniture 3', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-3.jpg"},
    {id: 4, name: 'Furniture 4', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-4.jpg"},
    {id: 5, name: 'Furniture 5', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-5.jpg"},
    {id: 6, name: 'Furniture 6', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-6.jpg"},
    {id: 7, name: 'Furniture 7', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-7.jpg"},
    {id: 8, name: 'Furniture 8', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-8.jpg"},
    {id: 9, name: 'Furniture 9', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-9.jpg"},
    {id: 10, name: 'Furniture 10', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-10.png"},
    {id: 11, name: 'Furniture 11', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-11.jpg"},
    {id: 12, name: 'Furniture 12', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-12.jpg"},
    {id: 13, name: 'Furniture 13', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-13.jpg"},
    {id: 14, name: 'Furniture 14', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-14.jpg"},
    {id: 15, name: 'Furniture 15', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-15.jpg"},
    {id: 16, name: 'Furniture 16', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-16.jpg"},
    {id: 17, name: 'Furniture 17', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-17.jpg"},
    {id: 18, name: 'Furniture 18', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-18.jpg"},
]














function featuredProducts(){

    var elem = document.getElementById("cards-section");

    for(i=0; i<products.length; i++){

        var card = document.createElement('div');
        card.className = "card"
        var cardesc = document.createElement('div')
        card.className = "cardDescription"

        card.innerHTML =  `
                            <img src="${products[i].image}" alt="${products[i].name}" style="width:100%">
                            <div class="add-to-cart-overlay">
                                <ul>
                                <li><i class="gg-bookmark"></i></li>
                                <li><i class="gg-shopping-cart"></i></li>
                                    <li><i class="gg-search"></i></li>
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
    console.log(categories)

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
                            
                            <img src="${allProducts[i].image}" alt="${allProducts[i].name}" style="width:100%">
                            <div class="add-to-cart-overlay">
                                <ul>
                                <li><i class="gg-bookmark"></i></li>
                                <li><i class="gg-shopping-cart"></i></li>
                                    <li><i class="gg-search"></i></li>
                                </ul>
                            </div>
                            
                        `
        card.appendChild(cardesc)
        elem.appendChild(card);
    }
}

function furnitureSets(){

    var elem = document.getElementById("furnitureSetsCards");
    console.log(categories)

    for(i=0; i<sets.length; i++){

        var card = document.createElement('div');
        card.className = "furnitureSets-cardDescription"

        card.innerHTML =  `
                            <img src="${sets[i].image}" alt="${sets[i].name}">
                            <br>
                            <h5 class="furnitureSets-name">${sets[i].name}</h5>
                        `   
        elem.appendChild(card);
    }

    slickSliderFurnitureSets()
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
        speed: 500,
        centerMode: true,
        centerPadding: '-15%',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
      });
}




featuredProducts()
topCategories()
miniShop()
furnitureSets()