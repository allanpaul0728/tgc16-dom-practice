
document.querySelector('#submit').click(function getFormValues() {

    let email = document.querySelector('#email').value;

    let model = document.querySelectorAll('.phone-type');

    let services = document.querySelectorAll('.services');

    let pickup = document.querySelector('#pick-up');

    // leave this line alone!
    return [email, model, services, pickup];

})

// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = getFormValues;
} catch (e) {}
