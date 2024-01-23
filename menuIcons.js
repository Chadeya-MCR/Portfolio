//toggle icon navbar
let menuIcon = document.getElementById("menu-icon")
let navbar = document.getElementById("navbar");
let navlinks = document.querySelectorA("header nav a");

menuIcon.onclick = () => {
    // Toggle the 'active' class for the menu icon
    menuIcon.classList.toggle('active');
    // Toggle the 'active' class for the navbar
    navbar.classList.toggle('active');
}

// Toggle menu on small screens
if (window.innerWidth <= 768) {
    navlinks.forEach(link => {
        link.onclick = () => {
            menuIcon.classList.remove('active');
            navbar.classList.remove('active');
        };
    });
}

//Toggle menu on tap for the X icon
menuIcon.addEventListener('touchstart', () => {
    menuIcon.click();
});

//scroll section active link
let sections = document.querySelectorAll('section');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        }
    });

    //sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //Remove navbar and menu-Icon on scroll
    menuIcon.classList.remove('active');
    navbar.classList.remove('active');
};