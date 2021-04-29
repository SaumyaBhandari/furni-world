categoreyNames = ['All', 'Lighting', 'Stool', 'Office', 'Bathroom', 'Aesthetic', 'Seating', 'Sofas']
categories = [];

for(i=0; i<categoreyNames.length; i++){
    var inventory = Math.floor((Math.random() * 300) + 50);
    categories[i] = {id: `${i}`, title: `${categoreyNames[i]}`, inventory: `${inventory}`}
}



const products = [
    {id: 1, name: 'Furniture 1', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-1.jpg"},
    {id: 2, name: 'Furniture 2', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-2.jpg"},
    {id: 4, name: 'Furniture 4', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-4.jpg"},
    {id: 5, name: 'Furniture 5', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-5.png"},
    {id: 10, name: 'Furniture 10', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-10.png"},
    {id: 13, name: 'Furniture 13', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-13.png"},
    {id: 14, name: 'Furniture 14', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-14.png"},
    {id: 15, name: 'Furniture 15', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-15.png"},
    {id: 16, name: 'Furniture 16', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-16.jpg"},
    {id: 12, name: 'Furniture 12', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-12.jpg"},
    {id: 11, name: 'Furniture 11', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-11.jpg"},
    {id: 9, name: 'Furniture 9', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-9.jpg"},
    {id: 8, name: 'Furniture 8', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-8.jpg"},
    {id: 7, name: 'Furniture 7', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-7.jpg"},
    {id: 3, name: 'Furniture 3', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-3.jpg"},
    {id: 6, name: 'Furniture 6', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-6.jpg"},
    {id: 17, name: 'Furniture 17', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-17.jpg"},
    {id: 18, name: 'Furniture 18', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/couch.jpg"},
    {id: 19, name: 'Furniture 19', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/forma.jpg"},
    {id: 20, name: 'Furniture 20', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/holder.jpg"},
    {id: 21, name: 'Furniture 21', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/light 4.jpg"},
    {id: 22, name: 'Furniture 22', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/light1.jpg"},
    {id: 23, name: 'Furniture 23', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/light2.jpg"},
    {id: 24, name: 'Furniture 24', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/light3.jpg"},
    {id: 25, name: 'Furniture 25', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/light12.jpg"},
    {id: 26, name: 'Furniture 26', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/mirror.jpg"},
    {id: 27, name: 'Furniture 27', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/pot.jpg"},
    {id: 28, name: 'Furniture 28', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/pot2.jpg"},
    {id: 29, name: 'Furniture 29', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/stool.jpg"},
    {id: 30, name: 'Furniture 30', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/stool2.jpg"},
    {id: 31, name: 'Furniture 31', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/stool3.jpg"},
    {id: 32, name: 'Furniture 32', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/stool4.jpg"},
    {id: 33, name: 'Furniture 33', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/table.jpg"},
    {id: 34, name: 'Furniture 34', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/table2.jpg"},
]

const seating = [18, nk]





function categoriesSelector(){



    var el = document.getElementById('category-selector')
    
    for(i=0; i<categories.length; i++){
        var e = document.createElement('label')
        e.className = 'category-selector-inner';
        e.innerHTML = `<input type="checkbox" class="category-button" id="category-button-${i}"> <p>${categories[i].title}</p> <p>(${categories[i].inventory})</p> <span class="checkmark"></span>`
        el.appendChild(e)
    }

}


function shop(e){


    
    

    var el = document.getElementById('pagecount-shop');
    el.innerHTML = '';
    el.innerHTML = `<p>Page ${e} of 2</p>`;


    
    var start = 10;
    var end = 22;
    if(e==2){
        start  = end;
        document.getElementById('next-shop1').style.border = '4px solid #000'
        document.getElementById('previous-shop1').style.border = '1px solid #000'
        end = products.length
    } else{
        document.getElementById('previous-shop1').style.border = '4px solid #000'
        document.getElementById('next-shop1').style.border = '1px solid #000'
    }



    addToShop(start, end)



}

function addToShop(start, end){

    var elem = document.getElementById("products-display-products1");
    elem.innerHTML = '';

    for(i=start; i<end; i++){
        
        var card = document.createElement('div');
        card.className = "product-card"
        var cardesc = document.createElement('div')
        card.className = "cardDescription-shop"
        cardesc.innerHTML = `

                                <h5>${products[i].name}</h5>
                                <p class="price">${products[i].price}</p>
                                <p class="quick-shop-button">Quick Buy</p>
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
                            <br>
                            
    
                        `
        card.appendChild(cardesc)
        elem.appendChild(card)   
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
shop(1)
