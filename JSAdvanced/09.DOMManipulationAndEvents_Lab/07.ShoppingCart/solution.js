function solve() {
   let buttons = Array.from(document.querySelectorAll('.add-product'));

   buttons.forEach(b => b.addEventListener('click', addProduct));

   let textarea = document.querySelector('textarea');
   let checkoutBtn = document.querySelector('.checkout');
   checkoutBtn.addEventListener('click', finishOrder);
    let  products = new Set();
    let output = [];
    let totalSum = 0;


    function finishOrder() {
        output.push(`You bought ${Array.from(products).join(", ")} for ${totalSum.toFixed(2)}.`);
        textarea.value = output.join('');
        buttons.forEach(b => b.disabled = true);
        checkoutBtn.disabled = true;
    }

   function addProduct(event) {

       let button = event.target;


       let product = button.parentElement.parentElement.querySelector('.product-title').textContent;
       let price = Number(button.parentElement.parentElement.querySelector('.product-line-price').textContent);

       output.push(`Added ${product} for ${price.toFixed(2)} to the cart.\n`);

       totalSum+= price;
       products.add(product);
       textarea.value = output.join('');
   }
}
