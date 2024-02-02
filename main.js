$(document).ready(function(){
	$('.slider').unslider({
        autoplay: true,
        delay: 5000,
        keys: false,
        speed: 750,
    });
});

$(document).ready(function(){
	$('.galery-slider').unslider({
        autoplay: true,
        delay: 5000,
        speed: 750,
        keys: false,
         });
});

// const renderProducts = (items) => {
//     productsSection.innerHTML = "";
//     for(let i=0; i < items.length; i++){
//         const newProduct = document.createElement("div");
//         newProduct.innerHTML =
//          `<img src="${items[i].image}" alt="product-image"/>
//         <p class="product-name">${items[i].name}</p>
//         <p class="product-description">${items[i].description}
//         </p>
//         <div class="product-price">
//             <span class="price">${items[i].price.toFixed(2)}</span>
//         </div>`;

//         productsSection.appendChild(newProduct);
//     }
// };
