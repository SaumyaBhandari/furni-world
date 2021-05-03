categoreyNames = ['All', 'Lighting', 'Stool', 'Office', 'Bathroom', 'Aesthetic', 'Seating', 'Sofas']
categories = [];

var inventTotal = 0;
for(i=1; i<categoreyNames.length; i++){
    var inventory = Math.floor((Math.random() * 300) + 50);
    categories[i] = {id: `${i}`, title: `${categoreyNames[i]}`, inventory: `${inventory}`}
    inventTotal += inventory;
}

categories[0] = {id: `0`, title: `${categoreyNames[0]}`, inventory: `${inventTotal}`}



const products = [
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






function getParameter( parameterName ){
    let parameters = new URLSearchParams(window.location.search);
    let param = parameters.get(parameterName)
    return String(param);
}


function categoriesSelector(category){



    var el = document.getElementById('category-selector')
    var start = 0
    var end = products.length

    for(i=0; i<categories.length; i++){
        var e = document.createElement('label')
        e.className = 'category-selector-inner';
        var tag = categories[i].title.toLowerCase();
        if(tag === category){
            e.innerHTML = '<input type="radio" class="category-button" checked="checked" id="category-button-'+i+'"  onclick="window.location.href = `shop.html?category='+tag.toLowerCase()+'` "  onclick="shop(1, `'+tag.toLowerCase()+'`, 10, 22)" name="radio"> <p>'+categories[i].title+'</p> <p>('+categories[i].inventory+')  </p> <span class="checkmark"></span>'
        } else{
            e.innerHTML = '<input type="radio" class="category-button"  id="category-button-'+i+' " onclick="window.location.href = `shop.html?category='+tag.toLowerCase()+'` "   onclick="shop(1, `'+tag.toLowerCase()+'`, 0, 34)" name="radio"> <p>'+categories[i].title+'</p> <p>('+categories[i].inventory+')  </p> <span class="checkmark"></span>'
        }
        el.appendChild(e)
    }

}


function shop(e, tag, start, end){


    

    document.getElementById('pagecount-shop').innerHTML = '';
    document.getElementById('pagecount-shop').innerHTML = `<p>Page ${e} of 2</p>`;

    

 
    if(e==2){
        start  = 22;
        document.getElementById('next-shop1').style.border = '3px solid #000'
        document.getElementById('previous-shop1').style.border = '1px solid #000'
        end = products.length
    } else{
        document.getElementById('previous-shop1').style.border = '3px solid #000'
        document.getElementById('next-shop1').style.border = '1px solid #000'
    }

    tag = tag;

    addToShopSection(start, end, tag)

}

function addToShopSection(start, end, tag){

    var elem = document.getElementById("products-display-products1");
    elem.innerHTML = '';

    var productCount = -10;
    var productDisplay = 0;
    
    for(i=0; i<products.length; i++){
        if(products[i].tags.includes(tag)){
            productCount++;
        }
    }

    for(i=start; i<end; i++){

        if(products[i].tags.includes(tag)){
            var card = document.createElement('div');
            card.className = "product-card"
            var cardesc = document.createElement('div')
            card.className = "cardDescription-shop"
            cardesc.innerHTML = `
    
                                    <h5 onclick="window.location.href = 'productDisplay.html?id=${products[i].id}' " style="cursor: pointer;">${products[i].name}</h5>
                                    <p class="price">${products[i].price}</p>
                                    <p class="quick-shop-button">Quick Buy</p>
                                `
    
            card.innerHTML =  `
                                
                                <img class='shop-image' src="${products[i].image}" alt="${products[i].name}" style="width:100%" onclick="window.location.href = 'productDisplay.html?id=${products[i].id}' " >
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
            productDisplay++; 
        }

         
    }
    if(productCount < 0){
        productCount = productDisplay;
    }

    if(productDisplay === 0){
        elem.innerHTML = `
                            <br><br><br>
                            <h1>Sorry! We do not have any product that belongs to the category - ${tag}.</h1>
                            <br>
                            <br>
                            <h6>Don't worry! You can still view products from other categories. <a href="shop.html?category=all">Click Here</a> to view products of all categories.</h6>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br><br>
                        `
    }

    document.getElementById('showing-results').innerHTML = '';
    document.getElementById('showing-results').innerHTML = `Showing results ${productDisplay} of ${productCount}`;

}





    

function recommendedProducts(){

    var elem = document.getElementById("recommended-contents");

    for(i=24; i<29; i++){

        

        var card = document.createElement('div');
        card.className = "recommended-cardDescription"
        
        var cardesc = document.createElement('div')
        cardesc.className = "recommended-cardDescription"

        card.innerHTML =  `

                    <img style="cursor:pointer" onclick="window.location.href = 'productDisplay.html?id=${products[i].id}' " class='recommended-image'src="${products[i].image}" alt="casting-couch">
                    <div class="add-to-cart-overlay">
                                <ul>
                                    <li><img   class="search-icon" src="images/icons/search.png" alt="" srcset=""></li>
                                    <li><img   class="cart-icon" src="images/icons/cart.png" alt="" srcset=""></li>
                                    <li><img   class="heart-icon" src="images/icons/heart-1.png" alt="" srcset=""></li>
                                </ul>
                            </div>`

        cardesc.innerHTML = `
                                <div class="special-image-desc">
                                        <h5 onclick="window.location.href = 'productDisplay.html?id=${products[i].id}' "  style="cursor: pointer" >${products[i].name}</h5>
                                        <p>${products[i].price}</p>
                                        <p class="quick-shop-button">Quick Buy</p>
                                </div>
                                `

        card.appendChild(cardesc)
        elem.appendChild(card);

    }

}



  



var category = getParameter("category").toLowerCase();
var start = 0;
var end = 34;


if(category === 'all'){
    start = 10;
    end = 22;
}
categoriesSelector(category)
shop(1, category, start, end)
recommendedProducts()




var form = document.getElementById("newsletter-email-area");
function handleForm(event) { 
    event.preventDefault(); 
} 
form.addEventListener('submit', handleForm);

function submitFunction(){
    document.getElementById("newsletter-added-area").style.display = 'flex';
}

function unsubscribeFunction(){
    document.getElementById("newsletter-added-area").style.display = 'none';
    document.getElementById("newsletter-next-area").style.display = 'flex';
}

function okFunction(){

    document.getElementById("newsletter-added-area").style.display = 'none';
    document.getElementById("newsletter-next-area").style.display = 'none';
    location.reload()
}





















