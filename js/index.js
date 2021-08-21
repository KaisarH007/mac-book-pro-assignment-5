const memory8Gb = document.getElementById('memory-8gb');
const memory16Gb = document.getElementById('memory-16gb');
const storage256Gb = document.getElementById('storage-256gb');
const storage512Gb = document.getElementById('storage-512gb');
const storage1Tb = document.getElementById('storage-1tb');
const freeDeliver = document.getElementById('free-delivery');
const deliveryCharge = document.getElementById('delivery-charge');

let extraMemoryField = document.getElementById('extra-memory-cost');
let extraStorageField = document.getElementById('extra-storage-cost');
let extraDeliveryField = document.getElementById('extra-delivery-cost');

const bestPriceField = document.getElementById('best-price');
const totalPrice = document.getElementById('total-price');


//Total Price add
function updateTotalPrice() {
    const extraMemoryCost = Number(extraMemoryField.innerText);
    const extraStorageCost = Number(extraStorageField.innerText);
    const extraDeliveryCharge = Number(extraDeliveryField.innerText);
    const bestPrice = Number(bestPriceField.innerText);
    totalPrice.innerText = extraMemoryCost + extraStorageCost + extraDeliveryCharge + bestPrice;
    promoPrice.innerText = totalPrice.innerText;
}


memory8Gb.addEventListener('click', function () {
    extraMemoryField.innerText = '0';
    updateTotalPrice()

})
memory16Gb.addEventListener('click', function () {
    extraMemoryField.innerText = '180';
    updateTotalPrice()
})

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

freeDeliver.addEventListener('click', (function () {
    extraDeliveryField.innerText = '0';
    updateTotalPrice()
}))

deliveryCharge.addEventListener('click', function () {
    extraDeliveryField.innerText = '20';
    updateTotalPrice()
})


//Promo price
const promoField = document.getElementById('promo-field');
let promoPrice = document.getElementById('promo-price');
const promoButton = document.getElementById('promo-button');

promoButton.addEventListener('click', function () {
    if (promoField.value == "stevekaku") {
        promoDiscountPrice = Number(totalPrice.innerText) * 0.75;
        promoPrice.innerText = promoDiscountPrice;

    }


})