categoreyNames = ['All', 'Lighting', 'Stool', 'Office', 'Bathroom', 'Aesthetic', 'Seating', 'Sofas']
categories = [];

for(i=0; i<categoreyNames.length; i++){
    var inventory = Math.floor((Math.random() * 300) + 50);
    categories[i] = {id: `${i}`, title: `${categoreyNames[i]}`, inventory: `${inventory}`}
}



const products = [
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



function categoriesSelector(){



    var el = document.getElementById('category-selector')
    
    for(i=0; i<categories.length; i++){
        var e = document.createElement('label')
        e.className = 'category-selector-inner';
        e.innerHTML = `<input type="checkbox" class="category-button" id="category-button-${i}"> <p>${categories[i].title}</p> <p>(${categories[i].inventory})</p> <span class="checkmark"></span>`
        el.appendChild(e)
    }

}


function shop(){


    var elem = document.getElementById("products-display-products");
  

    for(i=0; i<products.length; i++){
        var card = document.createElement('div');
        card.className = "product-card"
        var cardesc = document.createElement('div')
        card.className = "cardDescription-shop"
        cardesc.innerHTML = `

                                <h5>${products[i].name}</h5>
                                <p class="price">${products[i].price}</p>
                            `

        card.innerHTML =  `
                            
                            <img class='shop-image' src="${products[i].image}" alt="${products[i].name}" style="width:100%">
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

function toggleDropdown(){
    var el = document.getElementById('dropdown-content-products');
    if(el.style.display == "block"){
        console.log('hello')
        el.style.display = "none";
    } else{
        el.style.document = "block";
    }
}
    




categoriesSelector()
shop()
