// // Hamburger menu code credit Florin Pop
// const hamburger = document.getElementById('hamburger');
// const menuLIST = document.getElementById('menu-list');

// hamburger.addEventListener('click', () => {
//     menuLIST.classList.toggle('show');
// });


Email.send({
    Host : "smtp.elasticemail.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
