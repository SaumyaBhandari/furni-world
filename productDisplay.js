const products = [
    {id: 1, name: 'Furniture 1', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-1.jpg"       , tags: "all, sofa, singleseater, seating"         },
    {id: 2, name: 'Furniture 2', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-2.jpg"       , tags: "all, sofa, singleseater, seating"         },
    {id: 4, name: 'Furniture 4', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-4.jpg"       , tags: "all, table, wood"         },
    {id: 5, name: 'Furniture 5', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-5.png"       , tags: "all, sofa, doubleseater"         },
    {id: 10, name: 'Furniture 10', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-10.png"    , tags: "all, chair, seating, singleseater"         },
    {id: 13, name: 'Furniture 13', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-13.png"    , tags: "all, sofa, seating, doubleseater"         },
    {id: 14, name: 'Furniture 14', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-14.png"    , tags: "all, sofa, doubleseater, seating"         },
    {id: 15, name: 'Furniture 15', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-15.png"    , tags: "all, sofa, doubleseater, seating"         },
    {id: 16, name: 'Furniture 16', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-16.jpg"    , tags: "all, stool, seating, singleseater"         },
    {id: 12, name: 'Furniture 12', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-12.jpg"    , tags: "all, couch, seating, singleseater"         },
    {id: 11, name: 'Furniture 11', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-11.jpg"    , tags: "all, self, wood"         },
    {id: 9, name: 'Furniture 9', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-9.jpg"       , tags: "all, tub, bathroom, bath"         },
    {id: 8, name: 'Furniture 8', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-8.jpg"       , tags: "all, lighting"         },
    {id: 7, name: 'Furniture 7', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-7.jpg"       , tags: "all, lighting"         },
    {id: 3, name: 'Furniture 3', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-3.jpg"       , tags: "all, bed, bedroom, bedding"         },
    {id: 6, name: 'Furniture 6', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-6.jpg"       , tags: "all, table, round, wood"         },
    {id: 17, name: 'Furniture 17', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/all-products/product-17.jpg"    , tags: "all, table, wood, legs"         },
    {id: 18, name: 'Furniture 18', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '$260', image: "images/products/couch.jpg"             , tags: "all, seating, doubleseater, sofa, couch" },
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



function displayProductImage(productId){
    

    var elem = document.getElementById("selected-product-image-top");
    var elem2 = document.getElementById("selected-product-image-bottom");
    var elem3 = document.getElementById("selected-product-desc");

    for(i=8; i<12; i++){
        var el = document.createElement("div")
        el.className = "selected-product-bottom-images"
        el.style.backgroundImage = `url(${products[i].image})`;
        elem2.appendChild(el);
    }


    for(i=0; i<products.length; i++){
        if(productId === products[i].id){

            elem.style.backgroundImage = `url(${products[i].image})`;

            elem3.innerHTML = `
                                <div id="breadcrumb-display-section">
                                    <a href="index.html">Home</a> >
                                    <a href="shop.html?category=all">Shop</a> >
                                    <a href="productDisplay.html">${products[i].name}</a>
                                </div>
                                <br>
                                <br>
                                <div id="selectedProduct-title">
                                    <h1>${products[i].name}</h1>
                                    <h5>${products[i].price}</h5>
                                </div>
                                <hr>
                                <br>
                                <div id="selectedProduct-description">
                                    <p>${products[i].description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aperiam. Laboriosam delectus dolorem perferendis quaerat, pariatur blanditiis accusamus eius tempore cupiditate velit nihil aut, nesciunt illo repellat reiciendis, porro expedita.</p>
                                </div>
                                <br>
                                <div id="selectedProduct-addToCart">
                                    Quantity:
                                    <input type="number" id="quantity" name="quantity" min="1" max="5" value="1" >
                                    <input type="submit" value="Add To Cart" id="addToCartQuantityButton" onClick="addToCartMessage()">
                                </div>
                                <br>
                                <br>
                                <div id="selectedProduct-addToWishlist">
                                    <img src="images/icons/heart-1.png" alt="wishlist" srcset="">
                                    <p>Add To Wishlist</p>
                                </div>
                                <br>
                                <div id="open-cart" style="display:none">
                                    <p>${products[i].name} has been added to cart. <a>Open Cart.</a></p>
                                </div>
                                <br>
                                <hr>
                                <div id="selectedProducts-extras">
                                    <p>Tags: ${products[i].tags}</p>
                                    <p>Extra: Some extra description here.</p>
                                    <p>Another: Another description.</p>
                                </div>
                                <br>
                                <div id="askExpertSection"> 
                                    <h6>Have a query about ${products[i].name}?</h6>No Worries! you can <a>ask a help</a> from our experts.</br>
                                </div>
                            `
        }
    }


}


function addToCartMessage(){
    document.getElementById("open-cart").style.display = "block";
}



var form = document.getElementById("review-form");
function handleForm(event) { 
    event.preventDefault(); 
} 
form.addEventListener('submit', handleForm);

function submitReview(){
    alert("The your reiew has been submitted succcessfully!");
    location.reload()
}


function similarProducts(){

    var elem = document.getElementById("similar-contents");

    for(i=24; i<29; i++){

        

        var card = document.createElement('div');
        card.className = "similar-cardDescription"
        
        var cardesc = document.createElement('div')
        cardesc.className = "similar-cardDescription"

        card.innerHTML =  `

                    <img  style="cursor:pointer" onclick="window.location.href = 'productDisplay.html?id=${products[i].id}' " class='similar-image'src="${products[i].image}" alt="casting-couch">
                    <div class="add-to-cart-overlay">
                                <ul>
                                    <li><img   class="search-icon" src="images/icons/search.png" alt="" srcset=""></li>
                                    <li><img   class="cart-icon" src="images/icons/cart.png" alt="" srcset=""></li>
                                    <li><img   class="heart-icon" src="images/icons/heart-1.png" alt="" srcset=""></li>
                                </ul>
                            </div>`

        cardesc.innerHTML = `
                                <div class="special-image-desc">
                                        <h5 onclick="window.location.href = 'productDisplay.html?id=${products[i].id}' "  style="cursor:pointer">${products[i].name}</h5>
                                        <p>${products[i].price}</p>
                                        <p class="quick-shop-button">Quick Buy</p>
                                </div>
                                `

        card.appendChild(cardesc)
        elem.appendChild(card);

    }

}



const id = getParameter('id')


displayProductImage(parseInt(id))
similarProducts()