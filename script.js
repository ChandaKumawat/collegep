$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Fresher", "Data Analysis"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Fresher", "Data Analysis"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
    (function() {
        emailjs.init("81F9IbdL2grtIHswF"); // Replace 'YOUR_USER_ID' with your actual user ID from EmailJS
    })();

    function sendMail(event) {
        event.preventDefault();

        var templateParams = {
            name: document.querySelector('input[name="name"]').value,
            phone_no: document.querySelector('input[name="phone no"]').value,
            email: document.querySelector('input[name="email"]').value,
            subject: document.querySelector('input[name="subject"]').value,
            message: document.querySelector('textarea[name="message"]').value
        };

        emailjs.send('service_1svqfys', 'template_vas8fr8', templateParams)
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
               alert("Message sent successfully!");
            }, function(error) {
               console.log('FAILED...', error);
               alert("Failed to send message! Please try again.");
            });
    }
});