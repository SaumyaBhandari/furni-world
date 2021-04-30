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
];



let cart = [
    {id: 15, name: 'Furniture 15', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/all-products/product-15.png"    , tags: "all, sofa, doubleseater, seating"         },
    {id: 16, name: 'Furniture 16', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/all-products/product-16.jpg"    , tags: "all, stool, seating, singleseater"         },
    {id: 12, name: 'Furniture 12', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/all-products/product-12.jpg"    , tags: "all, couch, seating, singleseater"         },
    {id: 11, name: 'Furniture 11', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/all-products/product-11.jpg"    , tags: "all, self, wood"         },
    {id: 9, name: 'Furniture 9', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/all-products/product-9.jpg"       , tags: "all, tub, bathroom, bath"         },
    {id: 8, name: 'Furniture 8', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/all-products/product-8.jpg"       , tags: "all, lighting"         },
    {id: 7, name: 'Furniture 7', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/all-products/product-7.jpg"       , tags: "all, lighting"         },
    {id: 3, name: 'Furniture 3', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/all-products/product-3.jpg"       , tags: "all, bed, bedroom, bedding"         },
    {id: 6, name: 'Furniture 6', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/all-products/product-6.jpg"       , tags: "all, table, round, wood"         },

];

function addToCart(prod){
    for(i=0; i<products.length; i++){
        if(products[i].id == prod){
            cart.push(products[i])
            alert(`${products[i].name} added to cart.`)
        }
    }
    console.log(cart.length);
}




function showCartItems(){

    var elem = document.getElementById("shopping-cart");
    let price = 0;
    
    if(cart.length == 0){
        elem.innerHTML = `<h1> There currently no items in cart. Please add some items to view products in cart.</h1>`
    } else{

        for(i=0; i<cart.length; i++){
        
            var itm = document.createElement("div")
            itm.className = "item"
    
            itm.innerHTML = `
            
                    
    
                    <div class="image" style="background-image: url('${cart[i].image}')">
                        
                    </div>
    
                    <div class="description">
                        <h6>Product</h6>
                        <br>
                        <span>${cart[i].name}</span>
                        <span>${cart[i].price}</span>
                    </div>
    
                    <div class="quantity">
                        <h6>Quantity</h6>
                        <br>
                        <button class="plus-btn" type="button" name="button">
                            +
                        </button>
                        <input type="text" name="name" value="1">
                        <button class="minus-btn" type="button" name="button">
                            -
                        </button>
                    </div>
    
                <div class="total-price">
                    <h6>Price</h6>
                    <br>
                     ${cart[i].price}
                </div>
    
                <div class="buttons">
                        <h6>Action</h6>
                        <br>
                        <span class="delete-btn">
                            <p>Remove </p>
                        </span>
                        <span class="save-for-later">
                            <p>Save</p>
                        </span>
                </div>
            
            `;
    
            if(i%2!=0){
                itm.style.backgroundColor = "#f1f1f1"
            }
    
            elem.appendChild(itm);
    
            price += parseInt(cart[i].price);
    
        }
    }
    


    elem2 = document.getElementById("checkout");
    el = document.createElement("div")
    el.innerHTML = `
                            <div class="Title">
                            <h3>Order Summary:</h3>
                        </div>
                        <br>
                        <br>
                        <div id="details">
                            <p>Items: ${cart.length}</p>
                            <p>Price: $${price}</p>
                            <br>
                            <div class="dropdown">
                                <p onclick="toggleShippingOptions()" class="dropbtn">Shipping Category &nbsp;&nbsp;&nbsp;&#x25BC;</p>
                                <div id="myDropdown" class="dropdown-content">
                                <a href="">General Shipping:  $30</a>
                                <a href="">Standard Shipping: $70</a>
                                  <a href="">Same Day Delivery: $90</a>
                                </div>
                            </div>
                        </div>

                        <br>
                        <div class="grandTotal">
                            <h5>Total Cost: $${price+30}</h5>
                        </div>
                        <br>
                        <br>
                        <div id="checkOutButton">
                            <p>Check Out</p>
                        </div>
    
                    `

    elem2.appendChild(el);


}















function toggleShippingOptions() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }