
function updateNumber(product, isIncrease, cost, perCost) {
    const productInput = document.getElementById(product);
    let inputValue = productInput.value;
    if(isIncrease){
        inputValue = parseInt(inputValue) + 1;
    }else if(inputValue > 0) {
        inputValue = parseInt(inputValue) - 1;
    }
    productInput.value = inputValue;

    const productTotal = document.getElementById(cost);
    productTotal.innerText = inputValue * perCost;

    // calculate Total 
    calculateTotal()
}

// get input value 
function getInputValue(product) {
    const productInput = document.getElementById(product);
    const ProductNumber = parseInt(productInput.value);
    return ProductNumber;
}

// total calculate 
function calculateTotal() {
    const phoneTotal = getInputValue('mobileInput') * 1219;
    const caseTotal = getInputValue('caseInput') * 59;
    
    // update sub total 
    const subTotal = phoneTotal + caseTotal;
    document.getElementById('subTotal').innerHTML = subTotal;

    // tax amount
    const taxAmount = subTotal / 10;
    document.getElementById('tax').innerHTML = taxAmount;

    // total price
    const totalPrice = subTotal + taxAmount; 
    document.getElementById('total').innerHTML = totalPrice;


}

// total price another way
/*
function calculateTotal() {
    const subTotal = document.getElementById('subTotal');

    const mobilePrice = document.getElementById('mobilePrice');
    const currentMobilePrice = mobilePrice.innerText;

    const casePrice = document.getElementById('casePrice');
    const currentCasePrice = casePrice.innerText;

    const totalSubProductPrice = parseFloat(currentMobilePrice) + parseFloat(currentCasePrice);
    subTotal.innerText = totalSubProductPrice;

    // tax 
    const productTax = document.getElementById('tax');
    const totalTax = totalSubProductPrice * 0.1;
    productTax.innerText = totalTax.toFixed(2);

    // total price
    const totalPrice = document.getElementById('total');
    const totalProductPrice = totalSubProductPrice + totalTax;
    totalPrice.innerText = totalProductPrice;
}
*/

// phone increase event handler
document.getElementById('phonePlusBtn').addEventListener('click', function () {
    const perPrice = 1219;
    updateNumber('mobileInput', true, 'mobilePrice', perPrice)
    calculateTotal()
})

// phone decrease event handler
document.getElementById('phoneMinusBtn').addEventListener('click', function () {
    const perPrice = 1219;
    updateNumber('mobileInput', false, 'mobilePrice', perPrice)
})

// case increase event handler
document.getElementById('casePlusBtn').addEventListener('click', function () {
    const perCase = 59;
    updateNumber('caseInput', true, 'casePrice', perCase)
})

// case decrease event handler
document.getElementById('caseMinusBtn').addEventListener('click', function () {
    const perCase = 59;
    updateNumber('caseInput', false, 'casePrice', perCase)
   
})

// remove item 
document.getElementById('removeMobile').addEventListener('click', function(){
    document.getElementById('mobileCart').style.display = 'none';
})

document.getElementById('removeCase').addEventListener('click', function(){
    document.getElementById('caseCart').style.display = 'none';
})

// check out 
document.getElementById('checkOut').addEventListener('click', function(){
    const totalAmount = document.getElementById('total').innerHTML;
    alert(`Successful Your Order
    Total Amount: ` + totalAmount)
})
