document.getElementById('phone-increase').addEventListener('click', function () {
    handleProductChange('phone',true);

 })

 document.getElementById('phone-decrease').addEventListener('click', function () {
    handleProductChange('phone',false);

 })

 
 function handleProductChange(product,isIncrease){
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    let newProductCount = productCount;
    if(isIncrease==true){
       newProductCount = productCount + 1;
    }
    if(isIncrease==false && productCount>0){
       newProductCount = productCount - 1;
    }
    productInput.value = newProductCount;
    let productTotal=0;
    if(product == 'phone'){
       productTotal = newProductCount*1219;
    }
    if(product=='case'){
       productTotal = newProductCount*59;
    }
    document.getElementById(product + '-total').innerText = productTotal;
    calculateTotal();
 }

 function calculateTotal(){
    // const phoneInput = document.getElementById('phone-count');
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');

    // const caseInput = document.getElementById('case-count');
    // const caseCount = parseInt(caseInput.value);

    const totalPrice = phoneCount*1219 + caseCount*59;
    document.getElementById('total-price').innerText ='$' + totalPrice;

    const tax =Math.round(totalPrice * 0.05);
    document.getElementById('tax-total').innerText ='$' + tax;

    const total = (totalPrice - tax);
    document.getElementById('grand-total').innerText ='$' + total;
 }

 function getInputValue(product){
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
 }

 // function handlePhoneChange(isIncrease){
 //    const phoneInput = document.getElementById('phone-count');
 //    const phoneCount = parseInt(phoneInput.value);
 //    let newCaseCount = phoneCount;
 //    if(isIncrease==true){
 //       newPhoneCount = phoneCount + 1;
 //    }
 //    if(isIncrease==false && phoneCount>0){
 //       newPhoneCount = phoneCount - 1;
 //    }
 //    phoneInput.value = newPhoneCount;
 //    const phoneTotal = newPhoneCount * 1219;
 //    document.getElementById('phone-total').innerText = phoneTotal;
 // }

 // function handleProductChange(isIncrease){
 //    const caseInput = document.getElementById('case-count');
 //    const caseCount = parseInt(caseInput.value);
 //    let newCaseCount = caseCount;
 //    if(isIncrease==true){
 //       newCaseCount = caseCount + 1;
 //    }
 //    if(isIncrease==false && caseCount>0){
 //       newCaseCount = caseCount - 1;
 //    }
 //    caseInput.value = newCaseCount;
 //    const caseTotal = newCaseCount * 59;
 //    document.getElementById('case-total').innerText = caseTotal;
 // }
