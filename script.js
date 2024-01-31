//your JS code here. If required.
let label1 = document.querySelector('label[for="First Name"]');
let label2 = document.querySelector('label[for="Last Name"]');
let label3 = document.querySelector('label[for="Phone Number"]');
let label4 = document.querySelector('label[for="Email ID"]');

let fullName = document.querySelector('input[name="First Name"]');
let lastName = document.querySelector('input[name="Last Name"]');
let Phone = document.querySelector('input[name="Phone Number"]');
let Email = document.querySelector('input[name="Email ID"]');

function submitDetails() {
    alert(`${label1.textContent} ${fullName.value}
${label2.textContent} ${lastName.value}
${label3.textContent} ${Phone.value}
${label4.textContent} ${Email.value}
    `);
}