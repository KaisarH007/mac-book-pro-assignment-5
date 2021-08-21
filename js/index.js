//Button Event Handler
const memory8Gb = document.getElementById('memory-8gb');
const memory16Gb = document.getElementById('memory-16gb');
const storage256Gb = document.getElementById('storage-256gb');
const storage512Gb = document.getElementById('storage-512gb');
const storage1Tb = document.getElementById('storage-1tb');
const freeDeliver = document.getElementById('free-delivery');
const deliveryCharge = document.getElementById('delivery-charge');
//Price field event handler
let extraMemoryField = document.getElementById('extra-memory-cost');
let extraStorageField = document.getElementById('extra-storage-cost');
let extraDeliveryField = document.getElementById('extra-delivery-cost');
const bestPriceField = document.getElementById('best-price');
//total price event handler
const totalPrice = document.getElementById('total-price');


//Total Price add function
function updateTotalPrice() {
    const extraMemoryCost = Number(extraMemoryField.innerText);
    const extraStorageCost = Number(extraStorageField.innerText);
    const extraDeliveryCharge = Number(extraDeliveryField.innerText);
    const bestPrice = Number(bestPriceField.innerText);
    totalPrice.innerText = extraMemoryCost + extraStorageCost + extraDeliveryCharge + bestPrice;
    promoPrice.innerText = totalPrice.innerText;
}

//Memory option
memory8Gb.addEventListener('click', function () {
    extraMemoryField.innerText = '0';
    updateTotalPrice()

})
memory16Gb.addEventListener('click', function () {
    extraMemoryField.innerText = '180';
    updateTotalPrice()
})

//Storage Option
storage256Gb.addEventListener('click', function () {
    extraStorageField.innerText = '0';
    updateTotalPrice()
})
storage512Gb.addEventListener('click', function () {
    extraStorageField.innerText = '100';
    updateTotalPrice()
})
storage1Tb.addEventListener('click', function () {
    extraStorageField.innerText = '180';
    updateTotalPrice()
})

//Delivery Option
freeDeliver.addEventListener('click', (function () {
    extraDeliveryField.innerText = '0';
    updateTotalPrice()
}))

deliveryCharge.addEventListener('click', function () {
    extraDeliveryField.innerText = '20';
    updateTotalPrice()
})


//Promo price 
let promoField = document.getElementById('promo-field');
let promoPrice = document.getElementById('promo-price');
const promoButton = document.getElementById('promo-button');

promoButton.addEventListener('click', function () {
    if (promoField.value == "stevekaku") {
        promoDiscountPrice = Number(totalPrice.innerText) * 0.8; //promo discount price 20% off.
        promoPrice.innerText = promoDiscountPrice;

    }
    //clear promo input field
    promoField.value = '';

})