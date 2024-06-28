function validate() {
   let usernameInput = document.getElementById('username');
   let emailInput = document.getElementById('email');
   let passwordInput = document.getElementById('password');
   let confirmInput = document.getElementById('confirm-password');
   let companyCheckbox = document.getElementById('company');
   let companyFieldset = document.getElementById('companyInfo');
   let companyNumberInput = document.getElementById('companyNumber');
   let submitBtn = document.getElementById('submit');
   let validDiv = document.getElementById('valid');

   companyCheckbox.addEventListener('change', changeFieldsetVisibility);
   submitBtn.addEventListener('click', validateInfo);

   function validateInfo(event) {
      event.preventDefault();

      let usernamePattern = /^[A-Za-z0-9]{3,20}$/;
      let passwordPattern =  /^[A-Za-z0-9\_]{5,15}$/;
      let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
      let isValid = true;

      let username = usernameInput.value;

      if (!username.match(usernamePattern)) {
         usernameInput.style.borderColor = 'red';
         isValid = false;
      } else {
            usernameInput.style.border = 'none';
      }

      let email = emailInput.value;
      if (!email.match(emailPattern)){
         emailInput.style.borderColor = 'red';
         isValid = false;
      } else {
         emailInput.style.border = 'none';
      }

      let password = passwordInput.value;
      if (!password.match(passwordPattern)) {
         passwordInput.style.borderColor = 'red';
         isValid = false;
      } else {
         passwordInput.style.border = 'none';
      }

      let confirmPassword = confirmInput.value;
      if (password !== confirmPassword || !confirmPassword.match(passwordPattern) ) {
         confirmInput.style.borderColor = 'red';
         isValid = false;
      } else {
         confirmInput.style.border = 'none';
      }


      if (companyCheckbox.checked) {
         let companyNumber = Number(companyNumberInput.value);
         if (companyNumber < 1000 || companyNumber > 9999 || isNaN(companyNumber)) {
            companyNumberInput.style.borderColor = 'red';
            isValid = false;
         } else {
            companyNumberInput.style.border = 'none';
         }
      }

      if (isValid) {
         validDiv.style.display = 'block';
      } else {
         validDiv.style.display = 'none';
      }
   }

   function changeFieldsetVisibility(event) {
      event.preventDefault();

      if (companyCheckbox.checked) {
         companyFieldset.style.display = 'block';
      } else {
         companyFieldset.style.display = 'none';
      }

   }
}
