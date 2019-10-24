scrollTopButton = document.getElementById("myBtn");
contactButton = document.getElementById("con-btn");

window.onscroll = function() {sFunction()};

function sFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        scrollTopButton.style.display = "block";
        contactButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
        contactButton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
