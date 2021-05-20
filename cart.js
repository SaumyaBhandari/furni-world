const product = [
    {id: 1, name: 'Furniture 1', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/all-product/product-1.jpg"       , tags: "all, sofa, singleseater, seating"         },
    {id: 2, name: 'Furniture 2', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/all-product/product-2.jpg"       , tags: "all, sofa, singleseater, seating"         },
    {id: 4, name: 'Furniture 4', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/all-product/product-4.jpg"       , tags: "all, table, wood"         },
    {id: 5, name: 'Furniture 5', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/all-product/product-5.png"       , tags: "all, sofa, doubleseater"         },
    {id: 10, name: 'Furniture 10', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/all-product/product-10.png"    , tags: "all, chair, seating, singleseater"         },
    {id: 13, name: 'Furniture 13', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/all-product/product-13.png"    , tags: "all, sofa, seating, doubleseater"         },
    {id: 14, name: 'Furniture 14', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/all-product/product-14.png"    , tags: "all, sofa, doubleseater, seating"         },
    {id: 15, name: 'Furniture 15', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/all-product/product-15.png"    , tags: "all, sofa, doubleseater, seating"         },
    {id: 16, name: 'Furniture 16', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/all-product/product-16.jpg"    , tags: "all, stool, seating, singleseater"         },
    {id: 12, name: 'Furniture 12', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/all-product/product-12.jpg"    , tags: "all, couch, seating, singleseater"         },
    {id: 11, name: 'Furniture 11', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/all-product/product-11.jpg"    , tags: "all, self, wood"         },
    {id: 9, name: 'Furniture 9', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/all-product/product-9.jpg"       , tags: "all, tub, bathroom, bath"         },
    {id: 8, name: 'Furniture 8', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/all-product/product-8.jpg"       , tags: "all, lighting"         },
    {id: 7, name: 'Furniture 7', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/all-product/product-7.jpg"       , tags: "all, lighting"         },
    {id: 3, name: 'Furniture 3', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/all-product/product-3.jpg"       , tags: "all, bed, bedroom, bedding"         },
    {id: 6, name: 'Furniture 6', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/all-product/product-6.jpg"       , tags: "all, table, round, wood"         },
    {id: 17, name: 'Furniture 17', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/all-product/product-17.jpg"    , tags: "all, table, wood, legs"         },
    {id: 18, name: 'Furniture 18', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/product/couch.jpg"             , tags: "all, seating, doubleseater, sofa, couch" },
    {id: 19, name: 'Furniture 19', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/product/forma.jpg"             , tags: "all, aesthetic, holder" },
    {id: 20, name: 'Furniture 20', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/product/holder.jpg"            , tags: "all, holder, lighting, aesthetic" },
    {id: 21, name: 'Furniture 21', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/product/light 4.jpg"           , tags: "all, seating, wood"     },
    {id: 22, name: 'Furniture 22', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/product/light1.jpg"            , tags: "all, lighting" },
    {id: 23, name: 'Furniture 23', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/product/light2.jpg"            , tags: "all, lighting, aesthetic" },
    {id: 24, name: 'Furniture 24', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/product/light3.jpg"            , tags: "all, lighting" },
    {id: 25, name: 'Furniture 25', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/product/light12.jpg"           , tags: "all, lighting"     },
    {id: 26, name: 'Furniture 26', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/product/mirror.jpg"            , tags: "all, decor, lighting, mirror, aesthetic" },
    {id: 27, name: 'Furniture 27', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/product/pot.jpg"               , tags: "all, holder, decor, aesthetic" },
    {id: 28, name: 'Furniture 28', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/product/pot2.jpg"              , tags: "all, holder, decor, aesthetic" },
    {id: 29, name: 'Furniture 29', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/product/stool.jpg"             , tags: "all, seating, stool, singleseater" },
    {id: 30, name: 'Furniture 30', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/product/stool2.jpg"            , tags: "all, seating, stool, singleseater, aesthetic" },
    {id: 31, name: 'Furniture 31', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/product/stool3.jpg"            , tags: "all, seating, stool, singleseater" },
    {id: 32, name: 'Furniture 32', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/product/stool4.jpg"            , tags: "all, seating, stool, singleseater" },
    {id: 33, name: 'Furniture 33', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/product/table.jpg"             , tags: "all, table" },
    {id: 34, name: 'Furniture 34', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: '260', image: "images/product/table2.jpg"            , tags: "all, table" },
];


if(localStorage.getItem('textValues') == null){
    var cart =[];
}else{
    cart =  JSON.parse(localStorage.getItem('textValues'));
}

function addToCart(prod){


    for(i=0; i<product.length; i++){
        if(product[i].id == prod){
            cart.push(product[i])
            alert(`${product[i].name} added to cart.`)
            
            localStorage.setItem('textValues', JSON.stringify(cart));
        }
    }
}

function showCartItems(){

    var elem = document.getElementById("shopping-cart");
    let price = 0;
    
    if(cart.length == 0){
        elem.innerHTML = `<h1> There currently no items in cart. Please add some items to view product in cart.</h1>`
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
                        <span>$${cart[i].price}</span>
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
                    $${cart[i].price}
                </div>
    
                <div class="buttons">
                        <h6>Action</h6>
                        <br>
                        <span class="delete-btn">
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Save&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        </span>
                        <span class="save-for-later">
                            <p>Remove</p>
                        </span>
                </div>
                
            `;
    
            if(i%2!=0){
                itm.style.backgroundColor = "#f1f1f1"
            }
            
            elem.appendChild(itm);
            
            price += parseInt(cart[i].price);
    
        }
        elem.innerHTML += `<div class="clearAllButton" onclick = "clearCart()">Clear All</div>`
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









function clearCart(){
    localStorage.clear();
    location.reload();
    window.scrollTo(0, 100);
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
























function checkOffSet(){
    var head = document.getElementById("header")
    if(window.scrollY > 500){
        head.style.boxShadow = "2px 2px 2px 2px rgba(68, 68, 68, 0.300)";
        head.style.transitionDuration = ".5s";
    } else{
        head.style.boxShadow = "2px 2px 2px 2px rgba(207, 207, 207, 0.281) ";
    }
}




// Function to show the hamburger nav bar when the max width is 600px
function showNavBars() {
    var x = document.getElementById("nav");
    var y = document.getElementById("header-features-2");
    if (x.className === "topnav" && y.className === "topnav-2") {
      x.className += " responsive";
      y.className += " responsive-2";
    } else {
      x.className = "topnav";
      y.className = "topnav-2";
    }
}


var sliderInverse = document.getElementById("invert-color");
var slidergreyscale = document.getElementById("grayscale-mode");
var sliderbrightness = document.getElementById("brightness-level");
var sliderFont = document.getElementById("font-level");
var sliderInverseReset = document.getElementById("refresh-invert");
var sliderGreyscaleReset = document.getElementById("refresh-greyscale");
var sliderBrightnessReset = document.getElementById("refresh-brightness");
var sliderFontReset = document.getElementById("refresh-font");
var reset = document.getElementById("reset");


sliderInverse.oninput = function() {
  document.getElementById("slider-value-place-invert").innerHTML = this.value+"%";
  document.querySelector("body").style.filter = `invert(${this.value}%)`
}

slidergreyscale.oninput = function() {
  document.getElementById("slider-value-place-grayscale").innerHTML = this.value+"%";
  document.querySelector("body").style.filter = `grayscale(${this.value}%)`
}

sliderbrightness.oninput = function() {
  document.getElementById("slider-value-place-brightness").innerHTML = this.value+"%";
  document.querySelector("html").style.filter = `brightness(${this.value}%)`
}

sliderFont.oninput = function() {
  document.getElementById("slider-value-place-font").innerHTML = this.value+"%";
  document.querySelector("body").style.fontSize = `${this.value}%`
}


sliderInverseReset.onclick = function(){
    document.querySelector("body").style.filter = `invert(0%)`
    sliderInverse.value = 0;
    document.getElementById("slider-value-place-invert").innerHTML = 0+"%";
}
sliderGreyscaleReset.onclick = function(){
    document.querySelector("body").style.filter = `grayscale(0%)`
    slidergreyscale.value = 0;
    document.getElementById("slider-value-place-grayscale").innerHTML = 0+"%";
}

sliderBrightnessReset.onclick = function(){
    document.querySelector("html").style.filter = `brightness(100%)`
    sliderbrightness.value = 100;
    document.getElementById("slider-value-place-brightness").innerHTML = "100%"
}
sliderFontReset.onclick = function(){
    document.querySelector("body").style.fontSize = `100%`
    sliderFont.value = 100+"%";
    document.getElementById("slider-value-place-font").innerHTML = 100+"%";
}


function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

reset.onclick = function(){
    document.querySelector("body").style.filter = `invert(0%)`
    sliderInverse.value = 0;
    document.getElementById("slider-value-place-invert").innerHTML = 0+"%";

    document.querySelector("body").style.filter = `grayscale(0%)`
    slidergreyscale.value = 0;
    document.getElementById("slider-value-place-grayscale").innerHTML = 0+"%";

    document.querySelector("html").style.filter = `brightness(100%)`
    document.querySelector("slider-value-place-brightness").innerHTML = 50+`%`
    sliderbrightness.value = 50+"%";

    document.querySelector("body").style.fontSize = `100%`
    sliderFont.value = 100+"%";
    document.getElementById("slider-value-place-font").innerHTML = 100+"%";
}





var accessIcon = document.getElementById("accessibility-icon");
accessIcon.onclick = function(){
    var over = document.getElementById("overlay-accessibility")
    console.log("Hellp");
    if (over.className === "accessibility-overlay") {
        over.className += " acc";
      } else {
        over.className = "accessibility-overlay";
      }
}

