
// document.querySelector('#submit').click(function getFormValues() {

function getFormValues() {
    

    let email = document.querySelector('#email-address').value;

    let model = document.querySelector('.phone-type:checked').value;

    let services = document.querySelectorAll('.services:checked').forEach(function(Element) {
        services.push(element.value)
    })

    let pickup = document.querySelector('#pick-up').value;

    // leave this line alone!
    return [email, model, services, pickup];

}

// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = getFormValues;
} catch (e) {}
