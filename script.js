
// Get elements
let basicPrice = document.querySelector('.basic-price');
let proPrice = document.querySelector('.pro-price');
let masterPrice = document.querySelector('.master-price');

let toggleElem = document.querySelector('.toggle');
let switchInput = document.querySelector('.switch');



const changePrices = () =>{
     if (toggleElem.checked === true){
        basicPrice.textContent = "19.99";
        proPrice.textContent = "24.99";
        masterPrice.textContent = "39.99";
    }

    else {
        basicPrice.textContent = "199.99";
        proPrice.textContent = "249.99";
        masterPrice.textContent = "399.99";
    }
}

switchInput.addEventListener('click', changePrices);