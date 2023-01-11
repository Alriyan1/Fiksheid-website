let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
var btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
    e.preventDefault()
    var name = document.getElementById('name').value;
    var number = document.getElementById('number').value;
    var email = document.getElementById('email').value;
    var messsage = document.getElementById('message').value;
    var body = 'name' + name + '<br/> email: ' + email + '<br/> number' + number + '<br/> message' + message;


    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "alriyankhan7678@gmail.com",
        Password: "A291B3BD5F5D62934DFD8A0D7A23CC60E0EE",
        To: 'alriyankhan7678@gmail.com',
        From: email,
        Subject: "This is a contact form",
        Body: body
    }).then(
        message => alert(message)
    );
});