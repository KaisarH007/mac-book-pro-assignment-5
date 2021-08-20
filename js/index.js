const memory8Gb = document.getElementById('memory-8gb');
const memory16Gb = document.getElementById('memory-16gb');
const storage256Gb = document.getElementById('storage-256gb');
const storage512Gb = document.getElementById('storage-512gb');
const storage1Tb = document.getElementById('storage-1tb');
const freeDeliver = document.getElementById('free-delivery');
const deliveryCharge = document.getElementById('delivery-charge');


const bestPriceField = document.getElementById('best-price');

let extraMemoryField = document.getElementById('extra-memory-cost');
let extraStorageField = document.getElementById('extra-storage-cost');
let extraDeliveryField = document.getElementById('extra-delivery-cost');

const totalPrice = document.getElementById('total-price');


function updateTotalPrice() {
    const extraMemoryCost = Number(extraMemoryField.innerText);
    const extraStorageCost = Number(extraStorageField.innerText);
    const extraDeliveryCharge = Number(extraDeliveryField.innerText);
    const bestPrice = Number(bestPriceField.innerText);
    totalPrice.innerText = extraMemoryCost + extraStorageCost + extraDeliveryCharge + bestPrice;
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