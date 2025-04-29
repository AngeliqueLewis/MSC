import 'animate.css';
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
e.preventDefault();
const fname = e.target.fname.value;
const lname = e.target.lname.value;
const email = e.target.email.value;

//Here you can integrate with MailChimp
console.log(`Name: ${fname}, ${lname}, Email: ${email}`);
alert('Thank you for subscribing!');
e.target.reset();
});