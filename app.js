
function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = productInput.value;

    if (isIncreasing) {
        productInput.value = parseInt(productNumber) + 1;
    }
    else {
        if (parseInt(productNumber) > 0) {
            productInput.value = parseInt(productNumber) - 1;
        }
        else {
            alert('Number cant be negative');
        }
    }

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productInput.value * price;
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {

    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const totalTax = subTotal / 10;
    const totalPrice = subTotal + totalTax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = totalTax;
    document.getElementById('total-price').innerText = totalPrice;
}


//for mobile: event handlers

document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})


// for case: even handlers
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})